import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../button"
import { NavItem } from "./NavItem"
import { MobileNav } from "./MobileNav"

function Header() {
  return (
    <header className="w-full border-b">
        <div className="wrapper flex items-center justify-between">
            <Link href="/" className="w-36">
            <Image src="/assets/logo.svg" width={38} height={38}
            alt="Logo"/>
            </Link>
            
            {/* <SignedIn > */}
              <nav className="md:flex-between hidden w-full max-w-xs">
                <NavItem />
              </nav>
            {/* </SignedIn> */}

            <div className="flex w-32 justify-end gap-3 items-center" >
              {/* <SignedIn> */}
                <UserButton afterSignOutUrl="/"></UserButton>
                <MobileNav />
              {/* </SignedIn> */}
              <SignedOut>
              <Button asChild className="rounded-full" size="lg">
                <Link href="/sign-in">
                Login
                </Link>
              </Button> 
              </SignedOut>
            </div>
        </div>
    </header>
  )
}

export default Header