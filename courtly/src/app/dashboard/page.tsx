'use client'
import CourtBtn from '../components/CourtBtn';
import Link from 'next/link'
import ClientMembersTable from '../components/ClientMembersTable';
import { database} from '../firebaseConfig'
import { useEffect, useState } from 'react';
import { ref, get } from "firebase/database"; // Import these functions

const Dashboard = () => {
    interface Member {
        id: string;
        member?: boolean;
        isMember?: boolean;
        totalReservations?: number;
        membershipStatus?: string;
        [key: string]: string | number | boolean | undefined; // Add this line to allow any additional properties
    }
    
    const [members, setMembers] = useState<Member[]>([]);
    const [memberRequests, setMemberRequests] = useState<Member[]>([]);

    useEffect(() => {
        // Get a reference to the 'users' node
        const usersRef = ref(database, 'users');
        get(usersRef).then((snapshot) => {
            if (snapshot.exists()) {
                const usersArray = Object.entries(snapshot.val()).map(([id, data]) => ({
                    id,
                    ...(typeof data === 'object' && data !== null ? data : {}),
                    totalReservations: (data as { totalReservations?: number }).totalReservations || 0,
                }));
                // Set the users state to the array of users
                // Filter the users array to get only the members
                let arrayMembers = usersArray.filter((user: Member) => user.member === true || user.isMember === true);
    
                // Sort the members by totalReservations in descending order
                arrayMembers = arrayMembers.sort((a, b) => (b.totalReservations || 0) - (a.totalReservations || 0));
    
                // Get only the top 5 members
                arrayMembers = arrayMembers.slice(0, 5);
    
                // Set the members state to the top 5 members
                setMembers(arrayMembers);
    
                // Filter the users array to get only the members requests
                const arrayMemberRequests = usersArray.filter((user: Member) => user.membershipStatus === "Requested");
    
                // Set the memberRequests state to the array of member requests
                setMemberRequests(arrayMemberRequests);
            } else {
                console.log("No data available");
            }
           
        }).catch((error) => {
            console.log(error);    
        });
    }, []);
    

    const courtNames = [
        "Alpha",
        "Bravo",
        "Charlie",
        "Delta",
        "Echo",
        "Foxtrot",
        "Golf",
        "Hotel",
    ];

    return (
        <div className='flex justify-center items-center h-auto 2xl:h-screen'>
            <div className='md:h-screen 2xl:h-screen w-screen'>
                <div className='bg-first md:h-2/6 xl:h-1/4 px-3 py-5 md:py-12 md:px-16 space-y-6'>
                    <div>
                        <h1 className='text-4xl text-slate-50 font-poppins font-bold'>Court Reservations</h1>
                    </div>

                    <div className='grid grid-cols-3 md:grid-cols-4 xl:grid-cols-8 gap-x-3 gap-y-4'>
                        {courtNames.map((court, index) => (
                            <CourtBtn key={index} index={index} court={court} />
                        ))} 
                    </div>
                </div>

                <div className='bg-fourth md:h-4/6 xl:h-3/4 p-8 md:p-8 xl:py-12 xl:px-16 font-bold'>
                    <div className='md:flex justify-between items-center space-y-3 md:space-y-0'>
                        <h1 className='text-4xl font-poppins'>Top Courtly Members</h1>

                        <div className='flex justify-between gap-x-12'>
                            <div className="group hover:bg-darkBeige rounded-2xl transition duration-300 ease-in-out"> 
                                <Link href="/members" passHref>
                                    <div className='cursor-pointer p-2'> {/* Add padding for better hover effect */}  
                                        <h2 className='font-bold text-4xl md:text-center' id='currentMembers'>{members.length}</h2>
                                        <p className='md:text-center font-poppins font-light '>Current Members</p>
                                    </div>
                                </Link>
                            </div>

                            {/* Vertical divider between Current Members and Member Requests */}
                            <div className="border-l border-gray-400 h-18"></div>

                            <div className="group hover:bg-darkBeige rounded-2xl transition duration-300 ease-in-out"> 
                                <Link href="/member_requests" passHref>
                                    <div className='cursor-pointer p-2'> {/* Add padding for better hover effect */}
                                        <h2 className='font-bold text-4xl md:text-center' id='currentMembers'>{memberRequests.length}</h2>
                                        <p className='md:text-center font-poppins font-light'>Member Requests</p>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>

                    <hr className="hidden md:block h-px my-8 bg-gray-200 border-l border-gray-400"/>
                    
                    {/* Render client-side table */}
                    <ClientMembersTable initialMembers={members} />
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
