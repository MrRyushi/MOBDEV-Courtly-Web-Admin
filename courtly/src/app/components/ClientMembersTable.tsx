'use client';

import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSort } from '@fortawesome/free-solid-svg-icons';

const ClientMembersTable = ({ initialMembers }) => {
    const sortIcon = <FontAwesomeIcon icon={faSort} />;

    const [members, setMembers] = useState(initialMembers);
    const [sortKey, setSortKey] = useState(null);
    const [sortOrder, setSortOrder] = useState('asc'); // 'asc' for ascending, 'desc' for descending

    const handleSort = (key) => {
        const newOrder = sortKey === key && sortOrder === 'asc' ? 'desc' : 'asc';
        setSortKey(key);
        setSortOrder(newOrder);

        const sortedMembers = [...members].sort((a, b) => {
            if (newOrder === 'asc') {
                return a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
            } else {
                return a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0;
            }
        });

        setMembers(sortedMembers);
    };

    useEffect(() => {
        setMembers(initialMembers);
    }, [initialMembers]);

    function formatDate(memberSince) {
        // Split the date string into day, month, and year
        if(memberSince){
            const [day, month, year] = memberSince.split('/').map(Number); // Convert strings to numbers
        
            // Create a new Date object with the parsed values (note: months are 0-indexed in JavaScript)
            const date = new Date(year, month - 1, day);
        
            // Format the date using options
            const options: Intl.DateTimeFormatOptions = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            return date.toLocaleDateString('en-US', options);
        }
    }
    

    return (
        <div className='space-y-6'>
            {/* Table header */}
            <div className='hidden md:grid md:grid-cols-6 lg:grid-cols-5 gap-x-3'>
                <h3 onClick={() => handleSort('fullName')} className="cursor-pointer hover:underline underline-offset-4">Full name {sortIcon}</h3>
                <h3 className='md:col-span-2 lg:col-span-1'>Email</h3>
                <h3 onClick={() => handleSort('memberSince')} className="cursor-pointer hover:underline underline-offset-4">Member since {sortIcon}</h3>
                <h3 onClick={() => handleSort('totalReservations')} className="cursor-pointer hover:underline underline-offset-4">Total reservations made {sortIcon}</h3>
                <h3 onClick={() => handleSort('recentReservation')} className="cursor-pointer hover:underline underline-offset-4">Recent reservation {sortIcon}</h3>
            </div>

            {/* Scrollable container */}

                <div className='space-y-6 md:space-y-3 md:max-h-[400px] overflow-auto'>
                    {members.map((member, index) => (
                        <div key={index} className='hidden md:grid md:grid-cols-6 lg:grid-cols-5 font-poppins font-extralight gap-x-3'>
                            <p>{member.fullName}</p>
                            <p className='md:col-span-2 lg:col-span-1'>{member.email}</p>
                            <p>{formatDate(member.memberSince)}</p>
                            <p>{member.totalReservations}</p>
                            <p>{formatDate(member.recentReservation)}</p>
                        </div>
                    ))}

                    {/* Responsive rendering */}
                    {members.map((member, index) => (
                        <div key={index} className='md:hidden grid grid-cols-2 font-poppins font-extralight text-sm gap-x-6'>
                            <div>
                                <h3 className='font-bold'>Full name</h3>
                                <h3 className='font-bold'>Email</h3>
                                <h3 className='font-bold'>Member since</h3>
                                <h3 className='font-bold'>Total reservations made</h3>
                                <h3 className='font-bold'>Recent reservation</h3>
                            </div>
                            <div>
                                <p>{member.fullName}</p>
                                <p>{member.email}</p>
                                <p>{member.memberSince}</p>
                                <p>{member.totalReservations}</p>
                                <p>{member.recentReservation}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
    );
};

export default ClientMembersTable;