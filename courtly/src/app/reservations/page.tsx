'use client'
import React, { useState } from "react";
import { useSearchParams } from 'next/navigation';
import Link from "next/link";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

const Reservations = () => {
  const searchParams = useSearchParams();
  const court = searchParams.get('court');
  const sortIcon = <FontAwesomeIcon icon={faSort} />;

  const [members, setMembers] = useState([
    {
      fullName: "John Doe",
      email: "john@example.com",
      member: "Yes",
      reservationDate: '2024-06-10',
      reservationTime: "6:00 AM - 7:00 AM",
    },
    {
      fullName: "Jane Smith",
      email: "jane@example.com",
      member: "No",
      reservationDate: '2024-07-10',
      reservationTime: "7:00 AM - 8:00 AM",
    },
    {
      fullName: "Sam Green",
      email: "sam@example.com",
      member: "No",
      reservationDate: '2024-08-10',
      reservationTime: "8:00 AM - 9:00 AM",
    },
    {
      fullName: "Alice Brown",
      email: "alice@example.com",
      member: "Yes",
      reservationDate: '2024-09-10',
      reservationTime: "10:00 AM - 11:00 AM",
    },
    {
      fullName: "Bob White",
      email: "bob@example.com",
      member: "No",
      reservationDate: '2024-10-10',
      reservationTime: "12:00 AM - 01:00 PM",
    },
    {
      fullName: "Bob White",
      email: "bob@example.com",
      member: "No",
      reservationDate: '2024-10-10',
      reservationTime: "12:00 AM - 01:00 PM",
    },
    {
      fullName: "Bob White",
      email: "bob@example.com",
      member: "No",
      reservationDate: '2024-10-10',
      reservationTime: "12:00 AM - 01:00 PM",
    },
    {
      fullName: "Bob White",
      email: "bob@example.com",
      member: "No",
      reservationDate: '2024-10-10',
      reservationTime: "12:00 AM - 01:00 PM",
    },
    {
      fullName: "Bob White",
      email: "bob@example.com",
      member: "No",
      reservationDate: '2024-10-10',
      reservationTime: "12:00 AM - 01:00 PM",
    },
    {
      fullName: "Bob White",
      email: "bob@example.com",
      member: "No",
      reservationDate: '2024-10-10',
      reservationTime: "12:00 AM - 01:00 PM",
    },
    {
      fullName: "Bob White",
      email: "bob@example.com",
      member: "No",
      reservationDate: '2024-10-10',
      reservationTime: "12:00 AM - 01:00 PM",
    },
    {
      fullName: "Bob White",
      email: "bob@example.com",
      member: "No",
      reservationDate: '2024-10-10',
      reservationTime: "12:00 AM - 01:00 PM",
    },
    {
      fullName: "Bob White",
      email: "bob@example.com",
      member: "No",
      reservationDate: '2024-10-10',
      reservationTime: "12:00 AM - 01:00 PM",
    },
    {
      fullName: "Bob White",
      email: "bob@example.com",
      member: "No",
      reservationDate: '2024-10-10',
      reservationTime: "12:00 AM - 01:00 PM",
    },
    {
      fullName: "Bob White",
      email: "bob@example.com",
      member: "No",
      reservationDate: '2024-10-10',
      reservationTime: "12:00 AM - 01:00 PM",
    },
    {
      fullName: "Bob White",
      email: "bob@example.com",
      member: "No",
      reservationDate: '2024-10-10',
      reservationTime: "12:00 AM - 01:00 PM",
    },
    {
      fullName: "Bob White",
      email: "bob@example.com",
      member: "No",
      reservationDate: '2024-10-10',
      reservationTime: "12:00 AM - 01:00 PM",
    },
    {
      fullName: "Bob White",
      email: "bob@example.com",
      member: "No",
      reservationDate: '2024-10-10',
      reservationTime: "12:00 AM - 01:00 PM",
    },
    {
      fullName: "Bob White",
      email: "bob@example.com",
      member: "No",
      reservationDate: '2024-10-10',
      reservationTime: "12:00 AM - 01:00 PM",
    },
    

  ]);

  const [sortConfig, setSortConfig] = useState({ key: null, direction: 'ascending' });

  // Function to handle sorting
  const sortMembers = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }

    const sortedMembers = [...members].sort((a, b) => {
      if (a[key] < b[key]) {
        return direction === 'ascending' ? -1 : 1;
      }
      if (a[key] > b[key]) {
        return direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });

    setMembers(sortedMembers);
    setSortConfig({ key, direction });
  };

  // Determine the height class based on the number of member

  return (
    <div className={`flex justify-center items-center h-auto md:h-screen bg-first p-3 md:px-16 md:py-24`}>
      <div className="space-y-5 w-screen">
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
            {members.map((member, index) => (
              <div
                key={index}
                className="hidden md:grid md:grid-cols-6 lg:grid-cols-5 font-poppins font-extralight gap-x-10"
              >
                <p>{member.fullName}</p>
                <p className="md:col-span-2 lg:col-span-1">{member.email}</p>
                <p>{member.member}</p>
                <p>{member.reservationDate}</p>
                <p>{member.reservationTime}</p>
              </div>
            ))}

            {/* Mobile version */}
            {members.map((member, index) => (
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
      </div>
    </div>
  );
};

export default Reservations;
