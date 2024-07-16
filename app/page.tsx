import React from "react";
import Image from "next/image";
import cn from "classnames";

export default function Home() {
  const isRed: boolean = false;
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1
        className={cn("bg-red-600 p-4 text-9xl text-black", {
          "text-green-700": isRed,
        })}
      >
        Hello
      </h1>
      <Image src={""} alt={""} />
    </main>
  );
}
