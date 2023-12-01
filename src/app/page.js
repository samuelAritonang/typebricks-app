import { UserIcon } from "@/component/UserIcon";
import EventList from "@/component/events/EventList";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
  return (
    <div className="max-w-7xl mx-auto p-4">
      <header className="p-4 bg-white">
        {/* <div className="flex text-4xl justify-center text-white m-4">
          EventBricks
        </div> */}
        <nav className="flex justify-between items-center">
          <div>
            <Image src={"/eventbricks.png"} width={200} height={100} />
          </div>
          <Link href="/login">
            <Button
              startContent={<UserIcon />}
              className="bg-violet-700 text-white px-2"
            >
              Login
            </Button>
          </Link>
        </nav>
      </header>
      <main className="bg-slate-200 my-5">
        <EventList />
      </main>
      <footer className="bg-violet-700 p-4 text-white">
        <div className="">Made with love Team Typebricks</div>
      </footer>
    </div>
  );
}
