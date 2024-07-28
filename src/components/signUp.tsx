'use client';
import * as React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeading,
  DialogClose,
} from '../components/floating-UI/dialog';

type Credentials = {
  username: string;
  password: string;
  email: string;
};

export const SignUp = () => {
  return (
    <div className="bg-black text-white px-4 py-2 rounded">
      <Dialog>
        <DialogTrigger className="cursor-pointer">SignUp</DialogTrigger>
        <DialogContent className="bg-white p-6 rounded-lg shadow-lg max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          {/* ------------------------------------------First form page------------------------------------------ */}

          <DialogHeading className="text-3xl font-bold mb-6">
            Sign up
          </DialogHeading>
          <DialogDescription className="text-gray-600 mb-4">
            By continuing, you agree to our User Agreement and acknowledge that
            you understand the Privacy Policy.{' '}
          </DialogDescription>
          <DialogDescription className="text-black mb-4">
            <form>
              <div>
                <input
                  id="email"
                  placeholder="Email"
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                />
              </div>
            </form>
          </DialogDescription>
          <Dialog>
            <DialogTrigger className="w-1/2 bg-black text-white px-3 py-2 rounded-lg hover:underline">
              Continue
            </DialogTrigger>
            <DialogContent className="bg-white p-6 rounded-lg shadow-lg max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
              <DialogHeading className="text-xl font-bold mb-4">
                My nested dialog heading
              </DialogHeading>
              <DialogDescription className="text-gray-600 mb-4">
                My nested dialog description
              </DialogDescription>
              <DialogClose className="text-red-500 underline cursor-pointer">
                Closefgdf
              </DialogClose>
            </DialogContent>
          </Dialog>
          <DialogClose className="text-red-500 underline cursor-pointer">
            Close
          </DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
};
