import Image from "next/image"
import Link from "next/link"

function Footer() {
  return (
    <footer className="border-t">
      <div className="flex flex-center wrapper flex-col gap-2 p-2 text-center">
        <Link href = '/'>
        <Image 
        src="/assets/logo.svg"
        alt="logo"
        height={34}
        width={34}
        />
        </Link>

        <p>2024 College Compass. All Rights Reserved </p>
      </div>
    </footer>
  )
}

export default Footer