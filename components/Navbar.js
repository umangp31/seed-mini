import { ConnectButton } from "@rainbow-me/rainbowkit";
import React from "react";

function Navbar() {
  return (
    <div className="flex flex-row justify-between py-4 px-8 w-full">
      <h1 className="underline underline-offset-8 text-purple-400 font-bold text-4xl">
        SEED
      </h1>
      <ConnectButton/>
    </div>
  );
}

export default Navbar;
