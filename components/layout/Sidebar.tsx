import { BarChart4, MonitorPlay } from "lucide-react";
import React from "react";

const Sidebar = () => {
    const sideBarRoutes =[
        {icon: <MonitorPlay/>, label:"Courses", path:"/instructor/courses" },
        {icon: <BarChart4/>, label:"Performance", path:"/instructor/performance" },
   ]
  return <div>Sidebar</div>;
};

export default Sidebar;
