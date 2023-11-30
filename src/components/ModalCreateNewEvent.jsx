"use client"

import { useState } from "react"
//import { useRouter } from "next/navigation";
import ActionRevalidate from "@/app/action";

export default function ModelCreateNewEvent() {
    // const router = useRouter()
    const [isShow, setIsShow] = useState(false)
    const [name, setName] = useState("")
    const [description, setDescription] = useState("")
    const [location, setLocation] = useState("")
    const [date, setDate] = useState("")
    const [error, setError] = useState("")    

    async function createNewEvent() {

        if (name === "") {
            setError("Title cannot be empty.");
        }
        else if (description === "") {
            setError("Description cannot be empty.");
        }
        else if (location === "") {
            setError("Location cannot be empty.");
        }
        else if (date === "") {
            setError("Date cannot be empty.");
        }
        else {
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
                    authorId: "d0ef327c-e6c9-4bb3-8fd2-f8b83171f91a"
                }),
            });

            // const { data } = await res.json();

            await ActionRevalidate()

            setName("");
            setDescription("");
            setLocation("");
            setDate("");
            setIsShow(false)            
        }
    }

    return (
        <>
            <div className="mb-5">
                <button onClick={() => setIsShow(true)} className="border-2 rounded-full bg-red-400 px-3 py-1">
                    Create new event
                </button>
            </div>

            <div id="default-modal" tabIndex="-1" aria-hidden="true" className={` ${!isShow ? "hidden" : "block"} overflow-y-auto overflow-x-hidden fixed justify-center items-center w-full`}>
                <div className="relative p-4 w-full h-full">
                    <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                        <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                Create Your Event
                            </h3>
                            <button onClick={() => setIsShow(false)} type="button" className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="default-modal">
                                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                                </svg>
                                <span className="sr-only">Close modal</span>
                            </button>
                        </div>
                        <>
                            <div className="p-4">
                                <div className="flex gap-3 mb-2">
                                    <div><p>Event Name</p></div>
                                    <div><input onChange={(e) => setName(e.target.value)} value={name} className="border px-2" type="text" ></input></div>
                                </div>
                                <div className="flex gap-3 mb-2">
                                    <div><p>Event Description</p></div>
                                    <div><textarea rows={3} onChange={(e) => setDescription(e.target.value)} value={description} className="border px-2"></textarea></div>
                                </div>
                                <div className="flex gap-3 mb-2">
                                    <div><p>Location</p></div>
                                    <div><input onChange={(e) => setLocation(e.target.value)} value={location} className="border px-2" type="text"></input></div>
                                </div>
                                <div className="flex gap-3 mb-2">
                                    <div><p>Event Date</p></div>
                                    <div><input onChange={(e) => setDate(e.target.value)} value={date} className="border px-2" type="date" ></input></div>
                                </div>

                                <button className="border-2 px-2 rounded-md" onClick={createNewEvent}>Add</button>
                                <p className="text-red-500">{error}</p>
                            </div>
                        </>
                    </div>
                </div>
            </div>
        </>
    )
}