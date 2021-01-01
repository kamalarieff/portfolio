import Link from "next/link";
/** @jsx jsx **/
import { css, jsx } from "@emotion/react";
import tw from "twin.macro";

export default function Header() {
  return (
    <h2 tw="text-xl font-bold tracking-tight leading-tight pb-20 pt-8 cursor-pointer md:(text-4xl tracking-tighter)">
      <div
        css={css`
          & > a:hover {
            ${tw`underline`}
          }
        `}
        tw="flex space-x-8"
      >
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/">
          <a>Projects</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/profile">
          <a>About Me</a>
        </Link>
      </div>
    </h2>
  );
}
