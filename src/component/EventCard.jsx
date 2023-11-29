"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export const EventCard = ({ id, content }) => {
  const router = useRouter();
  const [onEdit, setOnEdit] = useState(false);
  const [currentContent, setCurrentContent] = useState(content);

  async function handleDelete() {
    await fetch(
      `https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`,
      {
        method: "DELETE",
      }
    );
    console.log(id);
    router.refresh();
  }

  async function handleUpdate() {
    const res = await fetch(
      `https://devscale-mockapi.fly.dev/api/collections/notes/records/${id}`,
      {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ content: currentContent }),
      }
    );
    const data = await res.json();
    setOnEdit(false);
    router.refresh();
  }

  return (
    <div className="flex gap-2 p-2 border-2 rounded-lg">
      {onEdit ? (
        <input
          value={currentContent}
          onChange={(e) => setCurrentContent(e.target.value)}
          className="border-2 p-2 rounded-lg"
        />
      ) : (
        <div>{currentContent}</div>
      )}
      {onEdit ? (
        <button
          className="text-xs bg-emerald-300 text-emerald-800 p-1 rounded-lg"
          onClick={handleUpdate}
        >
          Update
        </button>
      ) : (
        <button
          className="text-xs bg-yellow-300 text-yellow-800 p-1 rounded-lg"
          onClick={() => setOnEdit(true)}
        >
          Edit
        </button>
      )}
      <button
        className="text-xs bg-rose-300 text-rose-800 p-1 rounded-lg"
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};
