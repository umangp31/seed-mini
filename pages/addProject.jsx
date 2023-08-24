import React from "react";
import { useContractWrite, usePrepareContractWrite } from "wagmi";
import { IDEALLY_ABI, IDEALLY_HUB } from "../constants";
import Sidebar from "@/components/Sidebar";
import AddProject from "@/components/AddProject";

function addProject() {
  

  return (
      <div className="flex">
      <Sidebar />
      <AddProject />
    </div>
  );
}

export default addProject;
