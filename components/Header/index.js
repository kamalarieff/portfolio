import Link from "next/link";
/** @jsx jsx **/
import { jsx } from "@emotion/react";
import "twin.macro";

export default function Header() {
  return (
    <h2 tw="text-xl font-bold tracking-tight leading-tight pb-20 pt-8 cursor-pointer md:(text-4xl tracking-tighter)">
      <div tw="flex space-x-4">
        <Link href="/">
          <a tw="hover:underline">Home</a>
        </Link>
        <Link href="/">
          <a tw="hover:underline">Projects</a>
        </Link>
        <Link href="/blog">
          <a tw="hover:underline">Blog</a>
        </Link>
        <Link href="/profile">
          <a tw="hover:underline">Me</a>
        </Link>
      </div>
    </h2>
  );
}
