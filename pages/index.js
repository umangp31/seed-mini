import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import { useAccount } from "wagmi";
import React from "react";
import { useRouter } from "next/router";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const router =useRouter();
  const { isConnected } = useAccount();

  React.useEffect(()=>{
    if(isConnected) {
      router.push("/dashboard")
    }else{
      router.replace("/")
    }
  },[isConnected])

  return (
    <>
      <div className="mt-12 md:mt-20 md:pl-8 flex md:flex-row justify-between items-center text-white flex-col-reverse ">
        <div className="pl-4 md:pl-0 md:w-2/3 mt-12">
          <h1 className="text-4xl md:text-7xl font-bold leading-tight font-dm">
            Turn your{" "}
            <span className="underline underline-offset-8 text-purple-500">
              projects
            </span>{" "}
            into{" "}
            <span className="underline underline-offset-8 text-purple-500">
              products
            </span>
          </h1>
        </div>
        <div className="md:w-2/3">
          <img
            className="h-full w-full"
            src="./connect.png"
            alt="a illustration about idea."
          />
        </div>
      </div>
    </>
  );
}
