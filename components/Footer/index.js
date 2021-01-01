import React from "react";
import "twin.macro";
/** @jsx jsx **/
import { css, jsx } from "@emotion/react";
import { GithubLogo, LinkedinLogo } from "phosphor-react";

import Container from "@components/container";

export default function Footer() {
  return (
    <footer className="bg-accent-2 border-t border-accent-2">
      <Container>
        <div
          css={css`
            min-height: 10vh;
          `}
          tw="flex space-x-4 items-center underline"
        >
          <a
            href="https://github.com/kamalarieff"
            target="_blank"
            rel="noreferrer"
            tw="hover:cursor-pointer flex space-x-1"
          >
            <GithubLogo size={24} />
            <span>Github</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kamal-arieff-ahmad-faizel-058b0a79"
            target="_blank"
            rel="noreferrer"
            tw="hover:cursor-pointer flex space-x-1"
          >
            <LinkedinLogo size={24} />
            <span>LinkedIn</span>
          </a>
        </div>
      </Container>
    </footer>
  );
}
