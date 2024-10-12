import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen bg-third">
      <div className="space-y-10 px-12">
        <h1 className="text-4xl lg:text-6xl 2xl:text-7xl text-center font-bold">Welcome to Courtly!</h1>
        <Link href="/login" className='bg-second hover:bg-first text-white py-2 px-8 mx-auto block text-center rounded-2xl w-36 2xl:w-1/5'>
            Login
        </Link>
      </div>
    </div>
  );
}
