'use client';

import { database} from '../firebaseConfig'
import { useEffect, useState } from 'react';
import { ref, get, update } from "firebase/database"; // Import these functions
import Link from 'next/link';

const MemberRequestsPage = () => {
    const [users, setUsers] = useState([]);
    const [requests, setRequests] = useState([]);

    useEffect(() => {
        // Get a reference to the 'users' node
        const usersRef = ref(database, 'users');
        get(usersRef).then((snapshot) => {
            if (snapshot.exists()) {
                const usersArray = Object.entries(snapshot.val()).map(([id, data]) => ({
                    id, 
                    ...data, 
                }));
                // Set the users state to the array of users
                setUsers(usersArray);
    
                // Filter the users array to get only the members
                const arrayRequests = usersArray.filter(user => user.membershipStatus === "Sent request");
    
                setRequests(arrayRequests);
            } else {
                console.log("No data available");
            }
           
        }).catch((error) => {
            console.log(error);    
        });
    }, []);

    const handleAccept = (index) => {
        const request = requests[index];
        const userRef = ref(database, `users/${request.id}`);

        // Update membership status to "Completed" and member to true
        update(userRef, {
            membershipStatus: "Completed",
            member: true
        }).then(() => {
            // Remove the request from the local state
            const updatedRequests = [...requests];
            updatedRequests.splice(index, 1);
            setRequests(updatedRequests);
        }).catch((error) => {
            console.log("Error updating membership status:", error);
        });
    };

    const handleReject = (index) => {
        const request = requests[index];
        const userRef = ref(database, `users/${request.id}`);

        // Update membership status to "Rejected" and keep member as false
        update(userRef, {
            membershipStatus: "Rejected",
            member: false
        }).then(() => {
            // Remove the request from the local state
            const updatedRequests = [...requests];
            updatedRequests.splice(index, 1);
            setRequests(updatedRequests);
        }).catch((error) => {
            console.log("Error updating membership status:", error);
        });
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
