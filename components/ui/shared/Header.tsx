import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../button"

function Header() {
  return (
    <header className="w-full border-b">
        <div className="wrapper flex items-center justify-between">
            <Link href="/" className="w-36">
            <Image src="./public/logo.svg" width={128} height={38}
            alt="Logo"/>
            </Link>
            
            <div className="flex w-32 justify-end gap-3" >
              <SignedIn>
                <UserButton afterSignOutUrl="/"></UserButton>
              </SignedIn>
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