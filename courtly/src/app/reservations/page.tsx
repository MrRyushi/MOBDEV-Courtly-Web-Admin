'use client'
import React from "react";
import { useSearchParams } from 'next/navigation';
import Link from "next/link";

const Reservations = () => {
  const searchParams = useSearchParams();
  const court = searchParams.get('court'); // Accessing the 'court' parameter from the URL
  const members = [
    {
      fullName: "John Doe",
      email: "john@example.com",
      member: "Yes",
      reservationDate: '2024-10-10',
      reservationTime: "6:00 AM - 7:00 AM",
    },
    {
      fullName: "Jane Smith",
      email: "jane@example.com",
      member: "No",
      reservationDate: '2024-10-10',
      reservationTime: "6:00 AM - 7:00 AM",
    },
    {
      fullName: "Sam Green",
      email: "sam@example.com",
      member: "Yes",
      reservationDate: '2024-10-10',
      reservationTime: "6:00 AM - 7:00 AM",
    },
    {
      fullName: "Alice Brown",
      email: "alice@example.com",
      member: "No",
      reservationDate: '2024-10-10',
      reservationTime: "6:00 AM - 7:00 AM",
    },
    {
      fullName: "Bob White",
      email: "bob@example.com",
      member: "Yes",
      reservationDate: '2024-10-10',
      reservationTime: "6:00 AM - 7:00 AM",
    },
  ];

  return (
    <div className="flex justify-center items-center h-auto md:h-screen bg-first p-3 md:p-16">
      <div className="space-y-5">
        <div className="bg-fourth md:h-4/6 xl:h-3/4 p-8 md:p-8 xl:py-24 xl:px-24 font-bold rounded-2xl">
          <div className="md:flex justify-between items-center space-y-3 md:space-y-0">
            <h1 className="text-4xl font-poppins">{`Court ${court} Reservations`}</h1>

            <div className="flex justify-between gap-x-12">
              <div>
                <h2
                  className="font-bold text-4xl md:text-center"
                  id="currentMembers"
                >
                  34
                </h2>
                <p className="md:text-center font-poppins font-light">
                  Current Members
                </p>
              </div>

              <div>
                <h2
                  className="font-bold text-4xl md:text-center"
                  id="currentMembers"
                >
                  16
                </h2>
                <p className="md:text-center font-poppins font-light">
                  Member Requests
                </p>
              </div>
            </div>
          </div>

          <hr className="hidden md:block h-px my-8 bg-gray-200 border-0 dark:bg-gray-400" />
          <div className="hidden md:grid md:grid-cols-6 lg:grid-cols-5 gap-x-10">
            <h3>Full name</h3>
            <h3 className="md:col-span-2 lg:col-span-1">Email</h3>
            <h3>Member?</h3>
            <h3>Reservation Date</h3>
            <h3>Reservation Time</h3>
          </div>
          <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400" />

          {/* This is where the data goes of Member List | We can use an array then just map it*/}
          {/* Mapping through the members array */}
          <div className="space-y-6 md:space-y-3">
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

            {members.map((member, index) => (
              <div
                key={index}
                className="md:hidden grid grid-cols-2 font-poppins font-extralight text-sm gap-x-6"
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
          <Link href="/dashboard" className="bg-fourth px-12 py-3 rounded-2xl font-bold font-poppins"> Back

          </Link>
        </div>
      </div>
    </div>
  );
};

export default Reservations;
