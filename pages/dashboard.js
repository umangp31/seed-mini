import React, { useEffect } from "react";
import { useContractRead } from "wagmi";
import { SEED_ABI, SEED_HUB } from "../constants";
import Sidebar from "@/components/Sidebar";
import Container from "@/components/Container";
import getAllProjects from "@/utils/getAllProjects";
import { useProjectStore } from "@/store/store";
import { data } from "autoprefixer";

function dashboard() {
  const {projects,setProjects}=useProjectStore();
  const {data:AllCampaigns,error}=useContractRead({
    abi:SEED_ABI,
    address:SEED_HUB,
    functionName:"getCampaigns",
  })
  if(AllCampaigns){
    console.log('all campaigns he ye:',AllCampaigns)
    // setProjects(AllCampaigns);
  }
  const defineproject=async()=>{
    await setProjects(AllCampaigns);
  }
  useEffect(() => {
    defineproject();
  }, [])
  
  return (
    <>
      <div className="flex justify-center">
        <Sidebar />
        <Container data={AllCampaigns} />
      </div>
    </>
  );
}

export default dashboard;
