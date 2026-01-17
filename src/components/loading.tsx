import React from "react";
import Image from "next/image";

export default function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="relative flex items-center justify-center">
        <div className="absolute animate-spin rounded-full h-20 w-20 border-t-4 border-red-500" />
        <Image
          src="/img/chibi_kurumi.gif"
          alt="imgHome"
          width={40}
          height={40}
          className=""
        />
      </div>
    </div>
  );
}

