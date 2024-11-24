'use client';
import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from 'next/navigation';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';
import { database } from '../firebaseConfig';
import { ref, get } from "firebase/database"; 

const ReservationsContent = () => {
  const searchParams = useSearchParams();
  const court = searchParams.get('court');
  const sortIcon = <FontAwesomeIcon icon={faSort} />;
  const [users, setUsers] = useState<{ id: string; fullName?: string; email?: string; member?: boolean }[]>([]);
  const [reservations, setReservations] = useState<{ id: string; courtName?: string; date?: string; timeSlots?: string[]; userId?: string }[]>([]);
  const [filteredReservations, setFilteredReservations] = useState<{ fullName?: string; email?: string; member: string; reservationDate?: string; courtName?: string; reservationTime: string }[]>([]);

  // Fetch users from Firebase
  useEffect(() => {
    const usersRef = ref(database, 'users');
    get(usersRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const usersArray = Object.entries(snapshot.val()).map(([id, data]) => ({
            id,
            ...(typeof data === 'object' && data !== null ? data : {}),
          }));
          setUsers(usersArray);
        } else {
          console.log("No user data available");
        }
      })
      .catch((error) => console.log(error));
  }, []);

  // Fetch reservations from Firebase
  useEffect(() => {
    const reservationsRef = ref(database, 'reservations');
    get(reservationsRef)
      .then((snapshot) => {
        if (snapshot.exists()) {
          const reservationsArray = Object.entries(snapshot.val()).map(([id, data]) => ({
            id,
            ...(typeof data === 'object' && data !== null ? data : {}),
          }));
          setReservations(reservationsArray);
        } else {
          console.log("No reservation data available");
        }
      })
      .catch((error) => console.log(error));
  }, []);

  // Merge reservations and users after both data sets have loaded
  useEffect(() => {
    if (reservations.length > 0 && users.length > 0) {
      const combinedData = reservations
        .filter((reservation) => reservation.courtName === `Court ${court}`)
        .map((reservation) => {
          const user = users.find((u) => u.id === reservation.userId);
          return {
            fullName: user?.fullName,
            email: user?.email,
            member: user?.member ? 'Yes' : 'No',
            reservationDate: reservation.date,
            courtName: reservation.courtName,
            reservationTime: reservation.timeSlots?.join(', ') || '',
          };
        });
      setFilteredReservations(combinedData);
    }
  }, [reservations, users, court]);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  // Function to handle sorting
  const sortMembers = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    const sortedFilteredReservations = [...filteredReservations].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

    setFilteredReservations(sortedFilteredReservations);
    setSortConfig({ key, direction });
  };

  function formatDate(memberSince) {
    if (memberSince) {
      const [day, month, year] = memberSince.split('/').map(Number);
      const date = new Date(year, month - 1, day);
      const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    }
  }

  return (
    <div className={`flex justify-center items-center h-auto md:h-screen bg-first p-3 md:px-16 md:py-24`}>
      {<div className="space-y-5 w-screen">
        <div className="bg-fourth p-8 md:p-8 xl:py-24 xl:px-24 font-bold rounded-2xl">
          <div className="md:flex justify-between items-center space-y-3 md:space-y-0">
            <h1 className="text-4xl font-poppins">{`Court ${court} Reservations`}</h1>
          </div>

          <hr className="hidden md:block h-px my-8 bg-gray-200 border-l border-gray-400" />

          {/* Column headers */}
          <div className="hidden md:grid md:grid-cols-6 lg:grid-cols-5 gap-x-10">
            <h3 onClick={() => sortMembers('fullName')} className="cursor-pointer hover:underline underline-offset-4">
              Full Name {sortIcon}
            </h3>
            <h3 className="md:col-span-2 lg:col-span-1">Email</h3>
            <h3>Member?</h3>
            <h3 onClick={() => sortMembers('reservationDate')} className="cursor-pointer hover:underline underline-offset-4">
              Reservation Date {sortIcon}
            </h3>
            <h3>Reservation Time</h3>
          </div>

          <hr className="h-px my-8 bg-gray-200 border-l border-gray-400" />

          {/* Member rows */}
          <div className="space-y-6 md:space-y-3 md:max-h-[400px] overflow-auto">
            {filteredReservations.map((member, index) => (
              <div
                key={index}
                className="hidden md:grid md:grid-cols-6 lg:grid-cols-5 font-poppins font-extralight gap-x-10"
              >
                <p>{member.fullName}</p>
                <p className="md:col-span-2 lg:col-span-1">{member.email}</p>
                <p>{member.member}</p>
                <p>{formatDate(member.reservationDate)}</p>
                <p>{member.reservationTime}</p>
              </div>
            ))}

            {/* Mobile version */}
            {filteredReservations.map((member, index) => (
              <div
                key={index}
                className="md:hidden grid grid-cols-2 font-poppins font-extralight text-sm gap-x-6 border-b border-gray-300 pb-3"
              >
                <div>
                  <h3 className="font-bold">Full name</h3>
                  <h3 className="font-bold">Email</h3>
                  <h3 className="font-bold">Member</h3>
                  <h3 className="font-bold">Date</h3>
                  <h3 className="font-bold">Time</h3>
                </div>
                <div>
                  <p>{member.fullName}</p>
                  <p>{member.email}</p>
                  <p>{member.member}</p>
                  <p>{member.reservationDate}</p>
                  <p>{member.reservationTime}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="">
          <Link href="/dashboard" className="bg-fourth hover:bg-amber-200 px-12 py-3 rounded-2xl font-bold font-poppins">
            Back
          </Link>
        </div>
      </div>}
    </div>
  );
};

const Reservations = () => (
  <Suspense fallback={<div>Loading...</div>}>
    <ReservationsContent />
  </Suspense>
);

export default Reservations;
