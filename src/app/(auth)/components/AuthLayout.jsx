import React from "react";

export const AuthLayout = ({ children }) => {
  return (
    <main className="h-screen grid grid-cols-2">
      <div className="bg-red-800" />
      <div className="flex justify-center items-center">
        <section className="w-[320px]">{children}</section>
      </div>
    </main>
  );
};
