"use client";
import React from "react";
import { Input, Button } from "@nextui-org/react";
// import Image from "next/image";
// import logo from "../../../../public/eventbricks.png";
import Link from "next/link";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
    const { loading, handleChange, handleSubmitLogin } = useLogin();

    return (
        <main className="space-y-3">
            {/* <Image
                src={logo}
                width={800}
                height={800}
                alt="Picture of the author"
            /> */}
            <h1 className="text-3xl font-bold mb-12">Create an account</h1>

            
            <Input
                name="email"
                type="email"
                label="Email"
                size="md"
                variant="bordered"
                color="secondary"
                onChange={handleChange}
                isRequired
            />
            <Input
                name="password"
                type="password"
                label="Password"
                size="md"
                variant="bordered"
                color="secondary"
                onChange={handleChange}
                isRequired
            />
            <Button
                radius="full"
                className="bg-violet-700 text-white"
                size="lg"
                onClick={handleSubmitLogin}
                isDisabled={loading}
            >
                Login
            </Button>
            <div className="flex gap-1">
                <span className="">Don't have an account?</span>
                <Link
                    href="/register"
                    className="text-blue-600 hover:underline cursor-pointer"
                >
                    Register
                </Link>
            </div>
        </main>
    );
};