import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Login = () => {

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

            <div className="px-12 mt-5">
              <label className="font-poppins text-xs font-light">Email</label>
              <input type="text" className="border-b border-black w-full p-2"/>
              <label className="font-poppins text-xs font-light">Password</label>
              <input type="text" className="border-b border-black w-full p-2"/>
            </div>

            <div className="flex justify-center px-12">
              <Link className="bg-semiBlack text-white w-full px-10 py-2 rounded-3xl mt-4 text-center" href={'/dashboard'}>Login</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login