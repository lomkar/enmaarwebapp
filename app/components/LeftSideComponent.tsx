"use client";
import { Button, TextField } from "@mui/material";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import CreateCommunityComponent from "@/app/components/CreateCommunityComponent";
import Link from "next/link";

export type CommunityType = {
  id: string;
  communityName: string;
  communityImage: string;
  communtiyDescription: string;
  communityType: string;
  createdAt: Date;
};

function LeftSideComponent() {
  const [communities, setCommunities] = useState<CommunityType[]>([]);
  return (
    <div className="flex flex-col items-start w-full">
      <div className="w-full">
        <CreateCommunityComponent />
      </div>
      <div className="flex flex-col items-start	 mt-4 font-medium">
        <h3 className="text-base">Community Following</h3>
      </div>
      <div className="mt-4 w-full">
        <input
          className="!rounded-full w-full px-3 py-1  border border-black placeholder-black"
          placeholder="Search community..."
        />
      </div>
      <div className="w-full">
        {communities &&
          communities.map((community) => {
            return (
              <Link href={`/dashboard/${community.id}`}>
                <div
                  key={community.id}
                  className="flex flex-row p-2 rounded-md mt-4 border border-white text-white w-full gap-2 cursor-pointer hover:bg-[#F4F185] hover:text-black "
                >
                  <div className="bg-white text-black rounded-full w-10 h-10 flex flex-row justify-center items-center text-bold">
                    <span>{community.communityName[0]}</span>
                  </div>
                  <div className="flex flex-row items-center">
                    <span>{community.communityName}</span>
                  </div>
                </div>
              </Link>
            );
          })}
      </div>
    </div>
  );
}

export default LeftSideComponent;
