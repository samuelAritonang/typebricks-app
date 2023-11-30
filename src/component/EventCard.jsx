"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const EventCard = ({ id, name, description, date, location, image }) => {
  return (
    <div className="">
      <div>Id</div>
      <div>Name</div>
      <div>Description</div>
      <div>Date</div>
      <div>Location</div>
    </div>
  );
};
