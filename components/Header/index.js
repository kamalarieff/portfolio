import React from "react";
import Link from "next/link";
/** @jsx jsx **/
import { css, jsx } from "@emotion/react";
import tw from "twin.macro";
import {
  Drawer,
  DrawerBody,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  IconButton,
} from "@chakra-ui/react";
import { List, X } from "phosphor-react";

export default function Header() {
  // const { isOpen, onOpen, onClose } = useDisclosure();
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
      {/* Desktop header end */}
    </>
  );

  return (
    <>
      {/* Drawer menu start */}
      <div tw="pt-8 md:hidden">
        <IconButton onClick={onOpen} icon={<List />} />
        <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
          <DrawerOverlay>
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerBody>
                <div tw="flex flex-col space-y-4 pt-8 text-xl font-bold">
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
              </DrawerBody>
            </DrawerContent>
          </DrawerOverlay>
        </Drawer>
      </div>
      {/* Drawer menu end */}
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
      {/* Desktop header end */}
    </>
  );
}
