import Sidebar from "@/components/Sidebar";
import YourProject from "@/components/YourProject";
import Link from "next/link";
import React from "react";

function yourProjects() {
  return (
    <>
      <div className="flex ">
        <Sidebar />
        <YourProject/>
      </div>
    </>
  );
}

export default yourProjects;
