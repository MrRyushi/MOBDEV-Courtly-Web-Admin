import CourtBtn from '../components/CourtBtn';
import Link from 'next/link'
import ClientMembersTable from '../components/ClientMembersTable';

const Dashboard = () => {
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
                                        <h2 className='font-bold text-4xl md:text-center' id='currentMembers'>34</h2>
                                        <p className='md:text-center font-poppins font-light '>Current Members</p>
                                    </div>
                                </Link>
                            </div>

                            {/* Vertical divider between Current Members and Member Requests */}
                            <div className="border-l border-gray-400 h-18"></div>

                            <div className="group hover:bg-darkBeige rounded-2xl transition duration-300 ease-in-out"> 
                                <Link href="/member_requests" passHref>
                                    <div className='cursor-pointer p-2'> {/* Add padding for better hover effect */}
                                        <h2 className='font-bold text-4xl md:text-center' id='currentMembers'>16</h2>
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
