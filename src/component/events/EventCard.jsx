"use client";

import { Button } from "@nextui-org/react";
import React from "react";
import Image from "next/image";

export const EventCard = ({ id, name, description, date, location, image }) => {
  return (
    <div className="border-2 border-slate-500 rounded-lg hover:shadow-lg transition-all bg-slate-300">
      <div>
        <Image
          // src={$image != null ? $image : "https://source.unsplash.com/random?event"}
          src={"https://source.unsplash.com/random?event"}
          //src={image}
          width={300}
          height={120}
          className="object-cover m-auto p-2"
        />
      </div>
      <div className="p-4">
        <div className="text-lg">{name}</div>
        <div className="text-sm">{description}</div>
        <div className="text-sm">{date}</div>
        <div className="text-slate-600">{location}</div>
        <Button className="bg-violet-700 w-full mt-2 text-white">
          View Event
        </Button>
      </div>

      {/* 

      <input type="hidden">Id</input>
      <Card className="py-4 flex flex-col justify-between">
        <CardHeader className="overflow-visible py-2">
          <Image
            alt="Card background"
            className="object-cover rounded-xl"
            src="https://source.unsplash.com/random?event"
            width={270}
            height={100}
          />
        </CardHeader>
        <CardBody className="pb-0 pt-2 px-4 flex-col items-start">
          <p className="text-tiny uppercase font-bold">{name}</p>
          <small className="text-default-500">{description}</small>
          <h4 className="font-bold text-large">{date}</h4>
          <h4 className="font-bold text-large">{location}</h4>
        </CardBody>

        <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 py-1 before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
          <p className="text-tiny text-white/80">View Event</p>
          <Button
            className="text-tiny text-white bg-black/20"
            variant="flat"
            color="default"
            radius="lg"
            size="sm"
          >
            View Event
          </Button>
        </CardFooter> 
      </Card> */}
    </div>
  );
};
