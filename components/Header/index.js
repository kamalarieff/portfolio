import React from "react";
import Link from "next/link";
/** @jsx jsx **/
import { css, jsx } from "@emotion/react";
import tw from "twin.macro";
import { List, X } from "phosphor-react";

const pages = [
  {
    href: "/",
    title: "Home",
  },
  {
    href: "/blog",
    title: "Blog",
  },
  {
    href: "/profile",
    title: "About Me",
  },
];

export default function Header() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <div className="md:hidden">
        {/* There is some padding on the svg. So need to remove by 1 for the margin */}
        <div className="ml-4 py-4">
          <List size={36} onClick={() => setOpen(!open)}>
            Open
          </List>
        </div>
        <div
          css={[
            tw`h-full absolute top-0 transition flex`,
            css`
              background-color: ${open ? "rgba(0, 0, 0, 0.48)" : "unset"};
            `,
            open ? tw`w-full` : tw`w-0`,
          ]}
          onClick={() => setOpen(false)}
        >
          <div
            css={[
              tw`w-72 bg-blue-200 transform transition-transform z-50`,
              open ? tw`translate-x-0` : tw`-translate-x-full`,
            ]}
            onClick={(e) => e.stopPropagation()}
          >
            <nav className="mt-4 pl-12 w-full -ml-5 text-3xl font-bold tracking-tight leading-tight flex flex-col space-y-2 relative">
              <div className="w-full mb-4">
                <button onClick={() => setOpen(false)} className="float-right">
                  <X size={36} />
                </button>
              </div>
              {pages.map(({ href, title }, index) => (
                <Link href={href} key={index}>
                  <a>{title}</a>
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </div>
      {/* Desktop header start */}
      <h2 tw="max-w-2xl mx-auto text-xl font-bold tracking-tight leading-tight pb-20 pt-8 px-5 cursor-pointer hidden md:(text-4xl tracking-tighter px-0 block)">
        <div
          css={css`
            & > a:hover {
              ${tw`underline`}
            }
          `}
          tw="flex space-x-8"
        >
          {pages.map(({ href, title }, index) => (
            <Link href={href} key={index}>
              <a>{title}</a>
            </Link>
          ))}
        </div>
      </h2>
      {/* Desktop header end */}
    </>
  );
}
