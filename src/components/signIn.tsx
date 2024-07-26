// components/SignIn.js
'use client';

import { useForm, SubmitHandler } from 'react-hook-form';
import { signIn } from 'next-auth/react';

type Credentials = {
  username: string;
  password: string;
};

export const SignIn = () => {
  const { register, handleSubmit } = useForm<Credentials>();
  const onSubmit: SubmitHandler<Credentials> = async (data) => {
    await signIn('credentials', {
      username: data.username,
      password: data.password,
      callbackUrl: '/',
    });
  };

  return (
    <div className=" pt-8 rounded-lg w-64 ">
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <input
            id="username"
            placeholder="Username"
            type="text"
            {...register('username')}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <div>
          <input
            placeholder="Password"
            id="password"
            type="password"
            {...register('password')}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg"
          />
        </div>
        <button
          type="submit"
          className="w-{20px} bg-blue-500 text-white px-3 py-2 rounded-lg hover:bg-blue-700"
        >
          Sign in
        </button>
        <button className="text-blue-500 px-3 py-2 rounded-lg hover:text-white-100">
          forgot password?
        </button>
      </form>
    </div>
  );
};

export default SignIn;
