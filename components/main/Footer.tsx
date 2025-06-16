import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <div className="w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]">
      <div className="w-full flex flex-col items-center justify-center m-auto">
        <div className="w-full h-full flex flex-row items-center justify-around flex-wrap">
          <div className="min-w-[200px] h-auto flex flex-col items-center justify-start">
            <p className="flex flex-row items-center my-[15px] cursor-pointer">
              <span className="text-[15px] ml-[6px]">
                prabha.viji@gmail.com
              </span>
            </p>
          </div>
        </div>
        <div className="mb-10 text-center">
          <Image
            src="/portfolio-management.png"
            alt="My portfolio"
            width={50}
            height={50}
            className="object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
