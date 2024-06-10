import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div className="flex space-x-5 items-center">
      <div>
        <Image
          src="/ig.jpeg"
          alt="profile"
          title="profile"
          height={80}
          width={80}
          className="rounded-full"
        />
      </div>
      <div className="leading-relaxed">
        <p className="text-lg">Robin</p>
        <p className="text-sm text-neutral-400">
          Software developer, electronics and welder
        </p>
      </div>
    </div>
  );
}
