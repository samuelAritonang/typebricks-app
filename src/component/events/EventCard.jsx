"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const EventCard = ({ id, name, description, date, location, image }) => {
  return (
    <div className="border-2 border-slate-500 rounded-lg hover:shadow-lg transition-all bg-slate-300">
      <div>
        <Image
          src={"https://source.unsplash.com/random?event"}
          width={300}
          height={120}
          className="object-cover m-auto p-2"
        />
      </div>
      <div className="p-4">
        {/* <input type="hidden">Id</input> */}
        <div className="text-lg">{name}</div>
        <div className="text-sm">{description}</div>
        <div className="text-sm">{date}</div>
        <div className="text-slate-600">{location}</div>
      </div>
    </div>
  );
};
