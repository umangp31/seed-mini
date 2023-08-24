import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import {
  useContractRead,
  useContractWrite,
  usePrepareContractWrite,
} from "wagmi";
import { SEED_ABI, SEED_HUB } from "../../constants";
import { utils, ethers } from "ethers";
import IdeaCard from "@/components/IdeaCard";
import { useProjectStore } from "@/store/store";
function idea() {
  const [ammount, setAmmount] = useState("0.01");
  //   const [click, setClick] = useState(false);
  const router = useRouter();
  const { id } = router.query;
  const { projects } = useProjectStore();
  const idea = projects[id];
  const { config: fundConfig } = usePrepareContractWrite({
    abi: SEED_ABI,
    address: SEED_HUB,
    functionName: "donateToCampaign",
    args: [id],
    overrides: {
      value: ethers.utils.parseEther("0.01"),
    },
  });
  console.log("ye data he", projects);

  if (idea) {
    console.log("ye data he", projects);
    const currentIdea = idea[id];
    console.log("ye dekh: ",idea.title);
    return (
      <section class=" border-2 border-indigo-500 w-[80vw] h-fit rounded-lg text-white justify-center">
        <div className="justify-between flex items-center">
          <div className="flex mx-12 mt-4 w-fit h-fit ">
            {/* <img
              className="w-16 h-16 rounded-full mr-4 object-cover"
              src={idea.imgLink}
              alt="Avatar of Writer"
            /> */}
            <div className="flex flex-col text-sm justify-around">
              <h1 className="text-white text-2xl leading-none">
                {idea.title}
              </h1>
              <p className="text-white">{idea.date}</p>
              <p>{idea.description} </p>
            </div>
          </div>
        </div>
        <div className="p-12 flex flex-row justify-center">
          <div>
            <h1 className="font-dm text-5xl text-white">{/* {IdeaCard} */}</h1>
            <hr className="mx-2 mt-4 h-[2px] border-indigo-700 bg-indigo-700" />
          </div>
          <div className="bg-slate-900 rounded-md justify-start flex items-center p-4">
            <input
                type="number"
              className="max-h-12 bg-gray-800 rounded-md px-4 py-1 mx-4 border-r-2 "
              placeholder="Enter fund ammount"
              onChange={(e) => {
                e.preventDefault();
                setAmmount(e.target.value);
              }}
            ></input>
            <button
              className="bg-slate-600 p-2 rounded-md"
              onClick={(e) => {
                e.preventDefault();
                writeFund?.();
              }}
            >
              Send Fund
            </button>
          </div>
        </div>
        <div className="px-8 py-4 ">
          <p>{currentIdea?.IdeaDescription}</p>
        </div>
      </section>
    );
  }
}

export default idea;
