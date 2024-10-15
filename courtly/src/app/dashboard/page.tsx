import React from 'react'
import CourtBtn from '../components/CourtBtn';

const Dashboard = () => {
    // dummy data for members for now
    const members = [
        {
          fullName: "John Doe",
          email: "john@example.com",
          memberSince: "Jan 2020",
          totalReservations: 5,
          recentReservation: "2024-10-10",
        },
        {
          fullName: "Jane Smith",
          email: "jane@example.com",
          memberSince: "Feb 2021",
          totalReservations: 8,
          recentReservation: "2024-10-09",
        },
        {
          fullName: "Sam Green",
          email: "sam@example.com",
          memberSince: "Mar 2022",
          totalReservations: 10,
          recentReservation: "2024-10-08",
        },
        {
          fullName: "Alice Brown",
          email: "alice@example.com",
          memberSince: "May 2023",
          totalReservations: 3,
          recentReservation: "2024-10-07",
        },
        {
          fullName: "Bob White",
          email: "bob@example.com",
          memberSince: "Jul 2023",
          totalReservations: 4,
          recentReservation: "2024-10-06",
        },
      ];

    const courtNames = [
        "Alpha",
        "Bravo",
        "Charlie",
        "Delta",
        "Echo",
        "Foxtrot",
        "Golf",
        "Hotel",
    ]
    

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
                    <h1 className='text-4xl font-poppins'>Courtly Members</h1>

                    <div className='flex justify-between gap-x-12'>
                        <div>
                            <h2 className='font-bold text-4xl md:text-center' id='currentMembers'>34</h2>
                            <p className='md:text-center font-poppins font-light'>Current Members</p>
                        </div>

                        <div>
                            <h2 className='font-bold text-4xl md:text-center' id='currentMembers'>16</h2>
                            <p className='md:text-center font-poppins font-light'>Member Requests</p>
                        </div>
                    </div>
                </div>

                <hr className="hidden md:block h-px my-8 bg-gray-200 border-0 dark:bg-gray-400"/>
                <div className='hidden md:grid md:grid-cols-6 lg:grid-cols-5 gap-x-3'>
                    <h3>Full name</h3>
                    <h3 className='md:col-span-2 lg:col-span-1'>Email</h3>
                    <h3>Member since</h3>
                    <h3>Total reservations made</h3>
                    <h3>Recent reservation</h3>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400"/>

                {/* This is where the data goes of Member List | We can use an array then just map it*/}
                {/* Mapping through the members array */}
                <div className='space-y-6 md:space-y-3'>
                    {members.map((member, index) => (
                        <div key={index} className='hidden md:grid md:grid-cols-6 lg:grid-cols-5 font-poppins font-extralight gap-x-3'>
                            <p>{member.fullName}</p>
                            <p className='md:col-span-2 lg:col-span-1'>{member.email}</p>
                            <p>{member.memberSince}</p>
                            <p>{member.totalReservations}</p>
                            <p>{member.recentReservation}</p>
                        </div>
                    ))}

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
        </div>
    </div>
  )
}

export default Dashboard