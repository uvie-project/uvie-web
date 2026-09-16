import Image from "next/image";
import { href } from "@/lib/site";

export function Logo({ size = 28 }: { size?: number }) {
  return (
    <Image
      src={href("/icon.png")}
      alt="UVie logo"
      width={size}
      height={size}
      className="rounded-[22%] shadow-sm"
      priority
    />
  );
}
