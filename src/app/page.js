"use client";

import { Button, Input } from "@nextui-org/react";
import { data } from "autoprefixer";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function Page() {
  return (
    <div className="bg-red-900">
      <header className="p-4">
        <div className="flex text-4xl justify-center text-white m-4">
          EventBricks
        </div>
        <nav className="flex justify-between items-center">
          <div>
            <Input placeholder="Cari Event" />
          </div>
          <Link href="/login">
            <Button color="primary">Login</Button>
          </Link>
        </nav>
      </header>
      <main></main>
      <footer className="absolute bottom-0 bg-red-900 p-4 w-full text-white">
        <div className="">Made with love Team Typebricks</div>
      </footer>
    </div>
  );
}
