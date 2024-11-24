'use client';
import { useEffect, useState } from 'react';
import ClientMembersTable from '../components/ClientMembersTable';
import Link from 'next/link';
import { database} from '../firebaseConfig'
import { ref, get } from "firebase/database"; // Import these functions

interface User {
    id: string;
    fullName: string;
    email: string;
    member: boolean;
    [key: string]: string | boolean; // Allow additional properties
}


const MembersPage = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [members, setMembers] = useState<User[]>([]);

    useEffect(() => {
        // Get a reference to the 'users' node
        const usersRef = ref(database, 'users');
        get(usersRef).then((snapshot) => {
            if (snapshot.exists()) {
                const usersArray = Object.entries(snapshot.val()).map(([id, data]) => {
                    if (typeof data === 'object' && data !== null) {
                        return { id, ...data } as User;
                    }
                    return undefined;
                });
                // Set the users state to the array of users
                // Filter the users array to get only the members
                const arrayMembers = usersArray.filter((user): user is User => user !== undefined && user.member === true);
    
                // Set the members state to the top 5 members
                setMembers(arrayMembers);
            } else {
                console.log("No data available");
            }
           
        }).catch((error) => {
            console.log(error);    
        });
    }, []);

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
