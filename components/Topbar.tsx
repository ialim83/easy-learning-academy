import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

const Topbar = () => {
  const TopRoutes = [
    {label: "Instructor", path: "/instructor/courses"},
    {label: "learning", path: "/learning"}
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
        <button className="bg-[#FDAB04] rounded-r-full border-none outline-none cursor-pointer px-4 py-3 hover:bg-[#fdab04]/70 ">
          <Search className="h-4 w-4"  />
        </button>
      </div>

      <div className="flex gap-6 items-center">
        <div className="max-sm:hidden flex gap-6">
          {TopRoutes.map((route)=>(
            <Link href={route.path} key={route.path}>{route.label}</Link>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Topbar
