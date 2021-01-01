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
import { List } from "phosphor-react";

export default function Header() {
  const { isOpen, onOpen, onClose } = useDisclosure();

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
