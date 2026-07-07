"use client"
import { useAuth, UserButton } from "@clerk/nextjs"
import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "../ui/button"

const Topbar = () => {
  const { isSignedIn } = useAuth()
  const TopRoutes = [
    { label: "Instructor", path: "/instructor/courses" },
    { label: "learning", path: "/learning" },
  ]
  return (
    <div className="flex items-center justify-between p-4">
      <Link href="/">
        <Image src="/logo.png" height={100} width={200} alt="logo" />
      </Link>
      <div className="'w-400px' flex rounded-full max-md:hidden">
        <input
          className="grow rounded-l-full border-none bg-[#FFF8EB] py-3 pl-4 text-sm outline-none"
          placeholder="Search your course"
        />
        <button className="cursor-pointer rounded-r-full border-none bg-[#FDAB04] px-4 py-3 outline-none hover:bg-[#fdab04]/70">
          <Search className="h-4 w-4" />
        </button>
      </div>

      <div className="flex items-center gap-6">
        <div className="flex gap-6 max-sm:hidden">
          {TopRoutes.map((route) => (
            <Link href={route.path} key={route.path}>
              {route.label}
            </Link>
          ))}
        </div>
        {isSignedIn ? (
          <UserButton />
        ) : (
          <Link href={"/sign-in"}>
            <Button>Sign-in</Button>
          </Link>
        )}
      </div>
    </div>
  )
}

export default Topbar
