import React, { useState } from "react";
import { toast } from "react-toastify";
import { useAccount, useContractWrite, usePrepareContractWrite } from "wagmi";
import { SEED_ABI, SEED_HUB } from "../constants";
import { useRouter } from "next/router";

function NewIdea() {
  const {address}=useAccount();
  const date="24-10-23"
  const router = useRouter();
  const [idea, setIdea] = useState({
    address:address,
    title: "",
    description: "",
    target: "",
    date:new Date(),
    imgLink: "",
  });
  const { config } = usePrepareContractWrite({
    abi: SEED_ABI,
    address: SEED_HUB,
    functionName: "createCampaign",
    args: [idea.address,idea.title, idea.description, idea.target,idea.date,idea.imgLink],
  });
  const { error, write, isSuccess } = useContractWrite(config);
  if (error) {
    if (error?.message?.includes("User rejected request")) {
      toast.success("User rejected request", {
        type: "error",
      });
    }
  }
  if (isSuccess) {
    toast.success("Successfully added the idea!", {
      type: "success",
    });

    new Promise((r) => setTimeout(r, 4000)).then(() => {
      router.replace("/dashboard");
    });
  }

  return (
    <div classNameName="text-white flex-1">
      <form className="w-full max-w-lg mx-24 my-16">
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Idea Title
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="An Generative AI model that answer's queries"
              onChange={(e) => {
                e.preventDefault();
                setIdea({ ...idea, title: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Idea Description
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="text"
              placeholder="description of your idea!!!"
              onChange={(e) => {
                e.preventDefault();
                setIdea({ ...idea, description: e.target.value });
              }}
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <div className="relative">
              <div>
                <label
                  className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                  for="grid-state"
                >
                  Target
                </label>
                <input
                  className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                  id="grid-first-name"
                  type="number"
                  placeholder="0.00"
                  onChange={(e) => {
                    e.preventDefault();
                    setIdea({ ...idea, target: e.target.value });
                  }}
                />
              </div>
            </div>
            {/* <div className="w-fit">
              <label for="myfile">Select a file:</label>
              <input
                class="relative m-0 block w-full min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-clip-padding py-[0.32rem] px-3 text-base font-normal text-neutral-700 transition duration-300 ease-in-out file:-mx-3 file:-my-[0.32rem] file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-[0.32rem] file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:file:bg-neutral-700 dark:file:text-neutral-100"
                type="file"
                id="formFileMultiple"
                multiple
              />
            </div> */}
            <div className="w-full px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-first-name"
              >
                Image Link
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="An Generative AI model that answer's queries"
                onChange={(e) => {
                  e.preventDefault();
                  setIdea({ ...idea, imgLink: e.target.value });
                }}
              />
            </div>
          </div>
        </div>
        <div className="mt-12">
          <button
            className="bg-[#0E76FD] px-8 py-2 text-white rounded-lg"  
            onClick={(e) => {
              e.preventDefault();
              write?.();
              toast.success("works", {
                position: "top-center",
                autoClose: 3000,
                progressStyle: {
                  backgroundColor: "#0E76FD",
                },
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "dark",
              });
              console.log("woking");
            }}
          >
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default NewIdea;
