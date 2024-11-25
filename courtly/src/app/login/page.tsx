'use client'
import React, { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { database} from '../firebaseConfig'
import { ref, child, get } from "firebase/database";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevents page reload on form submit

    let adminEmail = '';
    let adminPassword = '';
    
   const dbRef = ref(database);
  get(child(dbRef, `admin`)).then((snapshot) => {
    if (snapshot.exists()) {
      adminEmail = snapshot.val().email;
      adminPassword = snapshot.val().password;

      if (email === adminEmail && password === adminPassword) {
        // Redirect to dashboard if credentials match
        router.push('/dashboard');
      } else {
        // Display error message if credentials are incorrect
        setError('Invalid email or password');
      }
    } else {
      console.log("No data available");
    }
  }).catch((error) => {
    console.error(error);
  });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-third px-4">
      <div>
        <div className="md:bg-second md:flex p-2 rounded-2xl justify-between">
          <div className="md:flex justify-center items-center hidden w-2/3">
            <Image
              src="/threePlayers.png"
              width={500}
              height={500}
              alt="Picture of the author"
            />
          </div>

          <div className="bg-white rounded-xl w-full 2xl:w-2/5 py-24 md:py-36">
            <div className="flex justify-center">
              <Image
                src="/icon.png"
                width={200}
                height={200}
                alt="Picture of the author"
              />
            </div>
            <h1 className="text-2xl text-center font-poppins font-medium mb-2">Welcome back!</h1>
            <p className="font-poppins text-xs font-light text-center mb-2">Please enter your details</p>

            <form onSubmit={handleLogin} className="px-12 mt-5">
              <label className="font-poppins text-xs font-light">Email</label>
              <input
                type="text"
                className="border-b border-black w-full p-2"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <label className="font-poppins text-xs font-light">Password</label>
              <input
                type="password"
                className="border-b border-black w-full p-2"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              {error && <p className="text-red-500 text-center mt-2">{error}</p>}

              <div className="flex justify-center">
                <button
                  type="submit" // Changed to submit
                  className="bg-semiBlack text-white w-full px-10 py-2 rounded-3xl mt-4 text-center"
                >
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
