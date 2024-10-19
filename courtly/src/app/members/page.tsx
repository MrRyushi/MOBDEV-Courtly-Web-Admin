'use client';
import React, { useState } from 'react';
import ClientMembersTable from '../components/ClientMembersTable';
import Link from 'next/link';

const MembersPage = () => {
    const [searchTerm, setSearchTerm] = useState('');

    const members = [
        {
            fullName: "John Doe",
            email: "john@example.com",
            memberSince: "2020-01-01",
            totalReservations: 5,
            recentReservation: "2024-10-10",
        },
        {
            fullName: "Jane Smith",
            email: "jane@example.com",
            memberSince: "2021-02-02",
            totalReservations: 8,
            recentReservation: "2024-10-09",
        },
        {
            fullName: "Sam Green",
            email: "sam@example.com",
            memberSince: "2022-03-03",
            totalReservations: 10,
            recentReservation: "2024-10-08",
        },
        {
            fullName: "Alice Brown",
            email: "alice@example.com",
            memberSince: "2023-04-04",
            totalReservations: 3,
            recentReservation: "2024-10-07",
        },
        {
            fullName: "Bob White",
            email: "bob@example.com",
            memberSince: "2024-05-05",
            totalReservations: 4,
            recentReservation: "2024-10-06",
        },
        {
            fullName: "Charlie Black",
            email: "charlie@example.com",
            memberSince: "2023-01-15",
            totalReservations: 2,
            recentReservation: "2024-10-05",
        },
        {
            fullName: "Diana Prince",
            email: "diana@example.com",
            memberSince: "2022-11-20",
            totalReservations: 6,
            recentReservation: "2024-09-28",
        },
        {
            fullName: "Ethan Hunt",
            email: "ethan@example.com",
            memberSince: "2023-05-11",
            totalReservations: 1,
            recentReservation: "2024-10-04",
        },
        {
            fullName: "Fiona Green",
            email: "fiona@example.com",
            memberSince: "2021-03-22",
            totalReservations: 7,
            recentReservation: "2024-09-30",
        },
        {
            fullName: "George Martin",
            email: "george@example.com",
            memberSince: "2022-08-01",
            totalReservations: 5,
            recentReservation: "2024-09-25",
        },
        {
            fullName: "Hannah Arendt",
            email: "hannah@example.com",
            memberSince: "2020-06-17",
            totalReservations: 9,
            recentReservation: "2024-10-02",
        },
        {
            fullName: "Isaac Newton",
            email: "isaac@example.com",
            memberSince: "2024-01-14",
            totalReservations: 3,
            recentReservation: "2024-09-15",
        },
        {
            fullName: "Jack Sparrow",
            email: "jack@example.com",
            memberSince: "2023-04-10",
            totalReservations: 4,
            recentReservation: "2024-09-20",
        },
        {
            fullName: "Kelly Clarkson",
            email: "kelly@example.com",
            memberSince: "2023-06-22",
            totalReservations: 2,
            recentReservation: "2024-10-01",
        },
        {
            fullName: "Liam Neeson",
            email: "liam@example.com",
            memberSince: "2021-12-05",
            totalReservations: 8,
            recentReservation: "2024-10-03",
        },
        {
            fullName: "Mona Lisa",
            email: "mona@example.com",
            memberSince: "2022-10-10",
            totalReservations: 4,
            recentReservation: "2024-10-08",
        },
    ];

    // Filter members based on the search term
    const filteredMembers = members.filter(member =>
        member.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
        member.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <div className="flex justify-center items-center h-auto md:h-screen bg-first p-3 md:px-16 md:py-24">
            <div className="space-y-5 w-screen">
                <div className="bg-fourth p-12 md:p-16 lg:p-20 font-bold rounded-2xl">
                    <h1 className="text-4xl font-poppins mb-4">Members</h1>

                    {/* Search Bar */}
                    <div className="mb-6">
                        <input
                            type="text"
                            placeholder="Search by name or email..."
                            className="border border-gray-300 rounded-lg p-3 w-full shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>

                    <hr className="h-px my-8 bg-gray-200 border-l border-gray-400" />

                    {/* Render client-side table with filtered members */}
                    {<ClientMembersTable initialMembers={filteredMembers} ></ClientMembersTable>} 
                    
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

export default MembersPage;
