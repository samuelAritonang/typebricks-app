import React from "react";
import { EventCard } from "./EventCard";

async function getEvents() {
  const result = await fetch("https://eventmakers-api.vercel.app/api/events", {
    cache: "no-store",
  });
  const data = await result.json();
  return data;
}

export default async function EventList() {
  const { data } = await getEvents();

  return (
    <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
      {data.map(({ id, image, name, location, date, isBanned }) => {
        return (
          <EventCard
            key={id}
            id={id}
            image={image}
            name={name}
            location={location}
            date={date}
            isBanned={isBanned}
          />
        );
      })}
    </div>
  );
}
