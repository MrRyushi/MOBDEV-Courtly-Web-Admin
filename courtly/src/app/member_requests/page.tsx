'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const MemberRequestsPage = () => {
    const initialRequests = [
        {
            fullName: "Charlie Black",
            email: "charlie@example.com",
            dateRequested: "2024-10-15",
        },
        {
            fullName: "Charlie Gray",
            email: "charlie@example.com",
            dateRequested: "2024-10-15",
        },
        {
            fullName: "Charlie White",
            email: "charlie@example.com",
            dateRequested: "2024-10-15",
        },
        {
            fullName: "Diana Prince",
            email: "diana@example.com",
            dateRequested: "2024-10-16",
        },
        {
            fullName: "Diana Ponce",
            email: "diana@example.com",
            dateRequested: "2024-10-16",

        },
        {
            fullName: "Diana Punch",
            email: "diana@example.com",
            dateRequested: "2024-10-16",
        },
        {
            fullName: "Diana Pratt",
            email: "diana@example.com",
            dateRequested: "2024-10-16",
        },
        {
            fullName: "Emily Green",
            email: "emily@example.com",
            dateRequested: "2024-10-17",
        },
        {
            fullName: "George Blue",
            email: "george@example.com",
            dateRequested: "2024-10-18",
        },
        {
            fullName: "Hannah Red",
            email: "hannah@example.com",
            dateRequested: "2024-10-19",
        },
        {
            fullName: "Isaac Orange",
            email: "isaac@example.com",
            dateRequested: "2024-10-20",
        },
        {
            fullName: "Julia Violet",
            email: "julia@example.com",
            dateRequested: "2024-10-21",
        },
        {
            fullName: "Kevin Brown",
            email: "kevin@example.com",
            dateRequested: "2024-10-22",
        },
        {
            fullName: "Lily Pink",
            email: "lily@example.com",
            dateRequested: "2024-10-23",
        },
        {
            fullName: "Michael Silver",
            email: "michael@example.com",
            dateRequested: "2024-10-24",
        },
        {
            fullName: "Natalie Gold",
            email: "natalie@example.com",
            dateRequested: "2024-10-25",
        },
        {
            fullName: "Oliver Cyan",
            email: "oliver@example.com",
            dateRequested: "2024-10-26",
        }
        
    ];

    const [requests, setRequests] = useState(initialRequests);

    const handleAccept = (index) => {
        // Logic to accept the member request
        const updatedRequests = [...requests];
        updatedRequests.splice(index, 1); // Remove accepted request
        setRequests(updatedRequests);
    };

    const handleReject = (index) => {
        // Logic to reject the member request
        const updatedRequests = [...requests];
        updatedRequests.splice(index, 1); // Remove rejected request
        setRequests(updatedRequests);
    };


    return (
        <div className={`flex justify-center items-center h-auto md:h-screen bg-first p-3 lg:px-16 md:py-24`}>
            <div className="space-y-5 w-screen">
                <div className="bg-fourth p-4 xl:p-16 lg:p-20 font-bold rounded-2xl">
                    <h1 className="text-4xl font-poppins mb-4">Member Requests</h1>

                    {/* Table Headers */}
                    <div className='hidden md:grid md:grid-cols-4 gap-x-3'>
                        <h3>Full Name</h3>
                        <h3>Email</h3>
                        <h3>Date Requested</h3>
                        <h3>Accept/Reject</h3>
                    </div>

                    <hr className="h-px my-4 bg-gray-200 border-l border-gray-400" />

                    {/* Requests Table */}
                    <div className='space-y-6 md:space-y-3 md:max-h-[800px] lg:max-h-[600px] overflow-auto'>

                        {requests.length === 0 ? (<p className="text-center">No requests available</p>) : (
                        <>  
                            {requests.map((request, index) => (
                                <div key={index} className='grid md:grid-cols-4 gap-x-3'>
                                    <p className="font-normal">{request.fullName}</p> 
                                    <p className="font-normal">{request.email}</p> 
                                    <p className="font-normal">{request.dateRequested}</p> 
                                    <div className="flex space-x-2">
                                        <button onClick={() => handleAccept(index)} className="bg-green-500 hover:bg-green-600 text-white px-2 py-1 rounded">Accept</button>
                                        <button onClick={() => handleReject(index)} className="bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded">Reject</button>
                                    </div>
                                </div>
                            ))}
                        </>    
                        )}
                        
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

export default MemberRequestsPage;
