"use client";

import { useState } from "react";
import ActionRevalidate from "@/app/action";

export default function ModelCreateNewEvent() {
  const [isShow, setIsShow] = useState(false);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [location, setLocation] = useState("");
  const [date, setDate] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");

  async function createNewEvent() {
    if (name === "") {
      setError("Title cannot be empty.");
    } else if (description === "") {
      setError("Description cannot be empty.");
    } else if (location === "") {
      setError("Location cannot be empty.");
    } else if (date === "") {
      setError("Date cannot be empty.");
    } else if (image === "") {
      image ===
        "https://images.unsplash.com/photo-1505236858219-8359eb29e329?q=80&w=1562&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
    } else {
      const res = await fetch("https://eventmakers-api.vercel.app/api/events", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: name,
          description: description,
          location: location,
          date: date,
          authorId: "d0ef327c-e6c9-4bb3-8fd2-f8b83171f91a",
        }),
      });

      await ActionRevalidate();

      setName("");
      setDescription("");
      setLocation("");
      setDate("");
      setImage("");
      setIsShow(false);
    }
  }

  return (
    <>
      <div className="mb-5">
        <button
          onClick={() => setIsShow(true)}
          className="border-2 rounded-full bg-orange-300 px-3 py-1"
        >
          Create New Event
        </button>
      </div>

      <div
        id="default-modal"
        tabIndex="-1"
        aria-hidden="true"
        className={` ${
          !isShow ? "hidden" : "block"
        } overflow-y-auto overflow-x-hidden fixed justify-center items-center w-full`}
      >
        <div className="relative p-3 w-full h-full">
          <form className="max-w-2xl mx-auto p-4 rounded bg-amber-400">
            <div className="flex items-center justify-between p-2 md:p-2 border-b rounded-t mb-2">
              <h2 className="text-xl font-semibold text-black">
                Create Your Event
              </h2>
              <button
                onClick={() => setIsShow(false)}
                type="button"
                className="text-black bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <>
              <div className="p-4">
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_name"
                    className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-white peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_name"
                    className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Name of Event
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_description"
                    className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-white peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_description"
                    className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Description of Event
                  </label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_location"
                    className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-white peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_location"
                    className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Location of Event
                  </label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                  <div className="relative z-0 w-full mb-5 group">
                    <input
                      type="date"
                      name="floating_date"
                      className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-white peer"
                      placeholder=" "
                    />
                    <label
                      htmlFor="floating_date"
                      className="peer-focus:font-medium absolute text-sm text-white dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-white peer-focus:dark:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                    >
                      Date of Event
                    </label>
                  </div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                  <input
                    type="text"
                    name="floating_image"
                    id="floating_image"
                    className="block py-2.5 px-0 w-full text-sm text-black bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-white peer"
                    placeholder=" "
                  />
                  <label
                    htmlFor="floating_image"
                    className="peer-focus:font-medium absolute text-sm text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-white peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                  >
                    Thumbnail of Event
                  </label>
                </div>

                <button
                  type="submit"
                  onClick={createNewEvent}
                  className="text-white bg-orange-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Submit
                </button>
              </div>
            </>
          </form>

          {/* <div className="relative bg-orange-600 rounded-lg shadow">
            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t">
              <h3 className="text-xl font-semibold text-black">
                Create Your Event
              </h3>
              <button
                onClick={() => setIsShow(false)}
                type="button"
                className="text-black bg-transparent rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center"
                data-modal-hide="default-modal"
              >
                <svg
                  className="w-3 h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 14"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                  />
                </svg>
                <span className="sr-only">Close modal</span>
              </button>
            </div>
            <>
              <div className="p-4">
                <div className="flex gap-2 mb-2">
                  <div>
                    <p>Event Name</p>
                  </div>
                  <div>
                    <input
                      onChange={(e) => setName(e.target.value)}
                      value={name}
                      className="border px-2"
                      type="text"
                      placeholder="Name of your event."
                    ></input>
                  </div>
                </div>
                <div className="flex gap-2 mb-2">
                  <div>
                    <p>Event Description</p>
                  </div>
                  <div>
                    <textarea
                      rows={3}
                      onChange={(e) => setDescription(e.target.value)}
                      value={description}
                      className="border px-2"
                      placeholder="Description of your event."
                    ></textarea>
                  </div>
                </div>
                <div className="flex gap-2 mb-2">
                  <div>
                    <p>Location</p>
                  </div>
                  <div>
                    <input
                      onChange={(e) => setLocation(e.target.value)}
                      value={location}
                      className="border px-2"
                      type="text"
                      placeholder="Location your event."
                    ></input>
                  </div>
                </div>
                <div className="flex gap-2 mb-2">
                  <div>
                    <p>Event Date</p>
                  </div>
                  <div>
                    <input
                      onChange={(e) => setDate(e.target.value)}
                      value={date}
                      className="border px-2"
                      type="date"
                    ></input>
                  </div>
                </div>
                <div className="flex gap-2 mb-2">
                  <div>
                    <p>Thumbnail</p>
                  </div>
                  <div>
                    <input
                      onChange={(e) => setImage(e.target.value)}
                      value={image}
                      className="border px-2"
                      type="text"
                      placeholder="Put your image URL here."
                    ></input>
                  </div>
                </div>

                <button
                  className="border-2 px-2 rounded-md"
                  onClick={createNewEvent}
                >
                  Add
                </button>
                <p className="text-red-500">{error}</p>
              </div>
            </>
          </div> */}
        </div>
      </div>
    </>
  );
}
