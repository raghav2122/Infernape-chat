import * as React from "react";
import { Logo } from "../components/header/logo";
import { LocationSearchBox } from "../components/header/search-box";
import Link from "next/link";
import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    navigationMenuTriggerStyle,
} from "../components/ui/navigation-menu";

export const NavBar = () => {
    return (
        <>
            <Logo/>
            <LocationSearchBox/>
            <div className="w-full flex justify-end p-4">
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
        </>
    );
};
