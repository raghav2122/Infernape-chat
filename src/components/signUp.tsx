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
import { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

export const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [favoritePokemonGeneration, setFavoritePokemonGeneration] =
    useState('');

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    const id = uuidv4(); // Generate a unique id

    const response = await fetch('/api/signup', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id,
        email,
        username,
        password,
        name,
        favoritePokemonGeneration,
      }),
    });

    const data: any = await response.json();
    if (response.ok) {
      alert('User signed up successfully');
      // Optionally reset the form or handle successful signup
    } else {
      alert('Error signing up: ' + data.error);
    }
  };

  return (
    <div className="bg-black text-white px-4 py-2 rounded">
      <Dialog>
        <DialogTrigger className="cursor-pointer">SignUp</DialogTrigger>
        <DialogContent className="relative bg-white p-6 rounded-lg shadow-lg max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
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
            <form onSubmit={handleSignUp}>
              <div className="pt-8">
                <input
                  id="email"
                  placeholder="Email"
                  type="email"
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <Dialog>
                <DialogTrigger className="w-full bg-black text-white px-3 py-2 rounded-lg hover:underline">
                  Continue
                </DialogTrigger>
                <DialogContent className="relative bg-white p-6 rounded-lg shadow-lg max-w-full sm:max-w-md md:max-w-lg lg:max-w-xl xl:max-w-2xl">
                  <DialogClose className="pl-[100%] pt-0">
                    <button className="text-black">✕</button>
                  </DialogClose>
                  <DialogHeading className="text-3xl font-bold mb-4">
                    Create your username and password
                  </DialogHeading>
                  <DialogDescription className="text-gray-600 mb-4">
                    InfernapeChat is anonymous, so your username is what you’ll
                    go by here. Choose wisely—because once you get a name, you
                    can’t change it.
                    <div className="pt-8">
                      <input
                        id="username"
                        placeholder="Username"
                        type="text"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                    </div>
                    <div className="pb-8 pt-4">
                      <input
                        id="password"
                        placeholder="Password"
                        type="password"
                        className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                  </DialogDescription>
                  <Dialog>
                    <DialogTrigger className="w-full bg-black text-white px-3 py-2 rounded-lg hover:underline">
                      Continue
                    </DialogTrigger>
                    <DialogContent>
                      <DialogClose className="pl-[95%]">
                        <button className="text-black">✕</button>
                      </DialogClose>
                      <DialogHeading className="text-3xl font-bold mb-4">
                        About you
                      </DialogHeading>
                      <DialogDescription className="text-gray-600 mb-4">
                        Let others know a bit about you. This will be shown on
                        your profile.
                        <div className="pt-8">
                          <input
                            id="name"
                            placeholder="Name"
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                          />
                        </div>
                        <div className="pt-4">
                          <input
                            id="favoritePokemonGeneration"
                            placeholder="Favorite Pokemon Generation"
                            type="text"
                            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
                            value={favoritePokemonGeneration}
                            onChange={(e) =>
                              setFavoritePokemonGeneration(e.target.value)
                            }
                          />
                        </div>
                      </DialogDescription>
                      <button
                        className="w-full bg-black text-white px-3 py-2 rounded-lg hover:underline"
                        type="submit"
                      >
                        Sign Up
                      </button>
                    </DialogContent>
                  </Dialog>
                </DialogContent>
              </Dialog>
            </form>
          </DialogDescription>
        </DialogContent>
      </Dialog>
    </div>
  );
};
