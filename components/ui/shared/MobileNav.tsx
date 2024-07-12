import React from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Image from "next/image";
import { Separator } from "@radix-ui/react-separator";
import { NavItem } from "./NavItem";


export const MobileNav = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
            <Image 
            src = "/assets/menu.svg"
            alt = "Menu"
            width={24}
            height = {24}
            className="cursor-pointer"
            />
        </SheetTrigger>
        <SheetContent className="flex flex-col bg-gray-400 md:hidden gap-5">
          <Image 
          src="/assets/logo.svg"
          width={34}
          height={34}
          alt="logo"
          />
          <Separator className="border border-gray-50"/>
          <NavItem />
        </SheetContent>
      </Sheet>
    </nav>
  );
};
