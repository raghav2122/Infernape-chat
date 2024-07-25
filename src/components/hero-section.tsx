import * as React from 'react';
import { HeroImage } from './body/hero-Image'; // Ensure the import path is correct

export const HeroSection = () => {
  return (
    <div className="w-full h-screen flex pt-20 justify-center">
      <div className="flex flex-col md:flex-row items-center md:items-start max-w-6xl p-4">
        {/* Text Section */}
        <div className="text-center md:text-left md:w-2/3 md:pr-10">
          <h1 className="text-6xl font-bold mb-4">
            Connect Instantly, Chat Effortlessly!
          </h1>
          <p className="text-lg text-gray-700">
            Seamless communication with our chat app. Stay connected and
            collaborate effortlessly.
          </p>
        </div>
        {/* Image Section */}
        <div className="md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0">
          <HeroImage />
        </div>
      </div>
    </div>
  );
};
