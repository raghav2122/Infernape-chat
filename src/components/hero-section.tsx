import * as React from 'react';
import { HeroImage } from './body/hero-Image';
import { getServerSession } from 'next-auth/next';
import { options } from '../app/api/auth/[...nextauth]/options';
import { SignIn } from './signIn';
import { SignUp } from './signUp';

export const HeroSection = async () => {
  const session = await getServerSession(options);

  return (
    <div className=" w-full flex pt-20 flex flex-col md:flex-row md:items-start  p-4 pr-20">
      {/* Text Section */}
      <div className="text-center md:text-left md:w-2/3 md:pr-10">
        <h1 className="text-6xl font-bold mb-4">
          Connect Instantly, Chat Effortlessly!
        </h1>
        <p className="text-lg text-gray-700">
          Seamless communication with our chat app. Stay connected and
          collaborate effortlessly.
        </p>
        {!session ? <SignIn /> : null}
        {/* <div className="pt-4 font-bold">OR</div> */}
        {!session ? <SignUp /> : null}
      </div>

      {/* Image Section */}
      <div className=" flex justify-center align-items-end md:justify-end mt-8 md:mt-0">
        <HeroImage />
      </div>
    </div>
  );
};
