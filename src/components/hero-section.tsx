import * as React from 'react';
import { HeroImage } from './body/hero-Image';
import { getServerSession } from 'next-auth/next';
import { options } from '../app/api/auth/[...nextauth]/options';
import { SignIn } from './signIn';

export const HeroSection = async () => {
  const session = await getServerSession(options);

  return (
    <div className=" w-full h-screen flex pt-20 justify-center flex flex-col md:flex-row items-center md:items-start max-w-6xl p-4">
      {/* Text Section */}
      <div className="text-center md:text-left md:w-2/3 md:pr-10">
        <h1 className="text-6xl font-bold mb-4">
          Connect Instantly, Chat Effortlessly!
        </h1>
        <p className="text-lg text-gray-700">
          Seamless communication with our chat app. Stay connected and
          collaborate effortlessly.
        </p>
        {!session ? <SignIn /> : <p>Sign in to get started</p>}
      </div>

      {/* Image Section */}
      <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
        <HeroImage />
      </div>
    </div>
  );
};
