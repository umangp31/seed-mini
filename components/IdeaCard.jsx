import Link from "next/link";
import React, { useState } from "react";
import {
  useContractWrite,
  useEnsName,
  useEnsResolver,
  usePrepareContractWrite,
} from "wagmi";
// import convertDate from "../utils/getDiff";
// import { BiUpvote } from "react-icons/bi";
import { SEED_ABI, SEED_HUB } from "../constants";
import Image from "next/image";

function IdeaCard({
  title,
  description,
  target,
  date,
  amountCollected,
  index,
  imgLink,
}) {
  const [click, setClick] = useState(false);
  // const { config } = usePrepareContractWrite({
  //   abi: SEED_ABI,
  //   address: SEED_HUB,
  //   args: [index],
  // });
  // const { error, write, isSuccess } = useContractWrite(config);

  return (
    <div>
      <div className=" w-full rounded-sm p-2 lg:max-w-full lg:flex">
        <div className=" bg-slate-900 text-white rounded-lg p-4 flex flex-col justify-between leading-normal min-w-full">
          <div className="mb-8">
            <div className=" font-bold text-xl mb-2 text-white mt-4">
              {title}
            </div>
            <p className="text-gray-700 text-base lg:max-w-3xl text-ellipsis overflow-hidden truncate ">
              {description}
            </p>
            <div className="justify-start text-blue-500">
              <Link href={`/projectIdea/${index}`}>
                <span className="">Read more... </span>
              </Link>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <img
                className="w-10 h-10 rounded-full mr-4 object-cover"
                src="/avatar.webp"
                alt="Avatar of Writer"
              />
              <div className="text-sm">
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IdeaCard;
