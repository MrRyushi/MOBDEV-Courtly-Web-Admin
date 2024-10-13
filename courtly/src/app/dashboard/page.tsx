import React from 'react'

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

  return (
    <div className='flex justify-center items-center bg-second h-auto 2xl:h-screen py-12 md:py-24 2xl:py-0'>
        <div className='h-4/5 space-y-3 w-11/12'>
            <div className='bg-fourth rounded-xl p-8 md:p-8 xl:p-16 font-bold'>
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
                <div className='hidden md:grid grid-cols-6 gap-x-3'>
                    <h3>Full name</h3>
                    <h3 className='col-span-2'>Email</h3>
                    <h3>Member since</h3>
                    <h3>Total reservations made</h3>
                    <h3>Recent reservation</h3>
                </div>
                <hr className="h-px my-8 bg-gray-200 border-0 dark:bg-gray-400"/>

                {/* This is where the data goes of Member List | We can use an array then just map it*/}
                {/* Mapping through the members array */}
                <div className='space-y-6 md:space-y-3'>
                    {members.map((member, index) => (
                        <div key={index} className='hidden md:grid grid-cols-6 font-poppins font-extralight gap-x-3'>
                            <p>{member.fullName}</p>
                            <p className='col-span-2'>{member.email}</p>
                            <p>{member.memberSince}</p>
                            <p>{member.totalReservations}</p>
                            <p>{member.recentReservation}</p>
                        </div>
                    ))}

                    {members.map((member, index) => (
                        <div key={index} className='md:hidden grid grid-cols-2 font-poppins font-extralight text-xs gap-x-6'>
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

            <div className='bg-fourth h-1/3 p-8 rounded-2xl'>
                <div>
                    <h1 className='text-4xl font-poppins font-bold'>Court Reservations</h1>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default Dashboard