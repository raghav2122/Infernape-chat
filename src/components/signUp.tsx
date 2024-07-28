'use client';
import * as React from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeading,
  DialogClose,
} from '../components/floating-UI/dialog';

export const SignUp = () => {
  return (
    <div className="bg-black text-white px-4 py-2 rounded">
      <Dialog>
        <DialogTrigger className="cursor-pointer">SignUp</DialogTrigger>
        <DialogContent className="relative bg-white p-6  rounded-lg shadow-lg max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
          {/* ------------------------------------------First form page------------------------------------------ */}
          <DialogClose className="pl-[95%]">
            <button className="text-black">✕</button>
          </DialogClose>
          <DialogHeading className="text-3xl font-bold mb-6">
            Sign up
          </DialogHeading>
          <DialogDescription className="text-gray-600 mb-4">
            By continuing, you agree to our User Agreement and acknowledge that
            you understand the Privacy Policy.
          </DialogDescription>
          <DialogDescription className="text-black mb-4 pt-8 pb-1">
            <div className="pb-4">
              <button className="w-full bg-black text-white px-3 py-2 rounded-lg hover:underline">
                Continue with Google
              </button>
            </div>
            <div className="flex items-center my-4">
              <hr className="flex-grow border-t border-gray-300" />
              <span className="mx-4 text-gray-500">or</span>
              <hr className="flex-grow border-t border-gray-300" />
            </div>
            <form>
              <div className="pt-8">
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
            <DialogTrigger className="w-full bg-black text-white px-3 py-2 rounded-lg hover:underline">
              Continue
            </DialogTrigger>
            <DialogContent className="relative bg-white p-6 rounded-lg shadow-lg max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
              <DialogHeading className="text-3xl font-bold mb-4">
                Create your username and password
              </DialogHeading>
              <DialogDescription className="text-gray-600 mb-4">
                InfernapeChat is anonymous, so your username is what you’ll go
                by here. Choose wisely—because once you get a name, you can’t
                change it.
                <form>
                  <div className="pt-8">
                    <input
                      id="username"
                      placeholder="Username"
                      type="text"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div className="pb-8 pt-4">
                    <input
                      id="password"
                      placeholder="Password"
                      type="password"
                      className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                    />
                  </div>
                  <div>
                    <button className="w-full bg-black text-white px-3 py-2 rounded-lg hover:underline">
                      Sign up
                    </button>
                  </div>
                </form>
              </DialogDescription>
            </DialogContent>
          </Dialog>
        </DialogContent>
      </Dialog>
    </div>
  );
};
