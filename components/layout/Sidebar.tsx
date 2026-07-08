"use client"
import { BarChart4, MonitorPlay } from "lucide-react"
import Link from "next/link"
import { usePathname } from "next/navigation"

const Sidebar = () => {
  const pathname = usePathname()
  const sideBarRoutes = [
    { icon: <MonitorPlay />, label: "Courses", path: "/instructor/courses" },
    {
      icon: <BarChart4 />,
      label: "Performance",
      path: "/instructor/performance",
    },
  ]
  return (
    <div className="my-4 flex w-64 flex-col gap-4 border-r px-3 text-sm font-medium shadow-md max-sm:hidden">
      {sideBarRoutes.map((route) => (
        <Link
          href={route.path}
          key={route.path}
          className={`flex items-center gap-4 p-3 hover:bg-[#fff8eb] ${pathname.startsWith(route.path) && "bg-[#fdab04] hover:bg-[#fdab04]/90"}`}
        >
          {route.icon} {route.label}
        </Link>
      ))}
    </div>
  )
}

export default Sidebar
