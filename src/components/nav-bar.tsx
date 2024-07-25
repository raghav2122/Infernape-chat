import * as React from 'react';
import { Logo } from '../components/header/logo';
import { SideLinks } from './header/side-links';

export const NavBar = () => {
  return (
    <div className="w-full p-4 pr-10 pl-[180px] flex items-center justify-between">
      <Logo />
      <SideLinks />
    </div>
  );
};
