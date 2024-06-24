"use client"

import { NodeContext } from "@/Context/NodeContext";
import React, { useContext } from "react";

const Navbar = () => {
  // NodeContext context api
  const { flowHaveChanges, toggleBtnClick, setToggleBtnClick } = useContext(NodeContext);

  // Saving data in the local storage
  const handleSaveBtnClick = () => {
    setToggleBtnClick(!toggleBtnClick);
  };

  return (
    <div className="w-full min-h-[80px] px-5 py-2.5 bg-slate-400 flex justify-between items-center">
      <h1 className="text-xl font-semibold">Devesh Chatbot Builder</h1>
      <button
        onClick={handleSaveBtnClick}
        disabled={!flowHaveChanges}
        className={`bg-blue-500 py-2 px-3 rounded-lg text-white ${
          flowHaveChanges ? "cursor-pointer" : "cursor-not-allowed"
        } `}
      >
        Save changes
      </button>
    </div>
  );
};

export default Navbar;