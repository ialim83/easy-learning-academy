import Sidebar from "@/components/layout/Sidebar"
import Topbar from "@/components/layout/Topbar"
import React from "react"

const InstructorLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex h-full flex-1">
      <Topbar />
      <div className="flex flex-1">
        <Sidebar />
        <div className="flex-1">{children}</div>
      </div>
    </div>
  )
}

export default InstructorLayout
