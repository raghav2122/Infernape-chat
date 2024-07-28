'use client';
import * as React from 'react';
import { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from './ui/button';
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
    <div>
      <h1>Floating UI — Dialog</h1>
      <Dialog>
        <DialogTrigger>My trigger</DialogTrigger>
        <DialogContent className="Dialog">
          <DialogHeading>My dialog heading</DialogHeading>
          <DialogDescription>My dialog description</DialogDescription>
          <Dialog>
            <DialogTrigger>Open nested dialog</DialogTrigger>
            <DialogContent className="Dialog">
              <DialogHeading>My dialog heading</DialogHeading>
              <DialogDescription>My dialog description</DialogDescription>
              <DialogClose>Close</DialogClose>
            </DialogContent>
          </Dialog>
          <DialogClose>Close</DialogClose>
        </DialogContent>
      </Dialog>
    </div>
  );
};
