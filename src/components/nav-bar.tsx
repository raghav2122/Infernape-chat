import * as React from 'react';
import { Logo } from '../components/header/logo';
import { LocationSearchBox } from '../components/header/search-box';
import Link from 'next/link';
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from '../components/ui/navigation-menu';

export const NavBar = () => {
  return (
    <div className="w-full p-4 pr-10 flex items-center justify-between">
      <Logo />
      <div className="flex-1 flex justify-center">
        <LocationSearchBox />
      </div>
      <NavigationMenu>
        <NavigationMenuList className="flex gap-4">
          <NavigationMenuItem>
            <NavigationMenuLink className={navigationMenuTriggerStyle()}>
              Features
            </NavigationMenuLink>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Documentation
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>
          <NavigationMenuItem>
            <button className="bg-black text-white px-4 py-2 rounded">
              Getting Started
            </button>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
