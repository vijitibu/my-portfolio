import Image from "next/image";
import React from "react";

const SkillsDataProvider = ({
  src,
  width,
  height,
  skillName,
}: {
  src: string;
  width: number;
  height: number;
  skillName: string;
}) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <Image
        src={src}
        alt={skillName}
        width={width}
        height={height}
        className="object-contain aspect-square"
      />
      <p className="text-sm text-center text-white">{skillName}</p>
    </div>
  );
};

export default SkillsDataProvider;
