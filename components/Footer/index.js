import React from "react";
import tw from "twin.macro";
/** @jsx jsx **/
import { css, jsx } from "@emotion/react";
import { SiGithub, SiLinkedin } from "react-icons/si";

import Container from "@components/container";

const iconStyles = css`
  ${tw`w-6 h-6`}
`;

export default function Footer() {
  return (
    <footer className="bg-accent-2 border-t border-accent-2">
      <Container>
        <div
          css={css`
            min-height: 10vh;
          `}
          tw="max-w-2xl mx-auto flex space-x-4 md:space-x-6 items-center underline"
        >
          <a
            href="https://github.com/kamalarieff"
            target="_blank"
            rel="noreferrer"
            tw="hover:cursor-pointer flex space-x-2 items-center"
          >
            <SiGithub css={iconStyles} />
            <span>Github</span>
          </a>
          <a
            href="https://www.linkedin.com/in/kamal-arieff-ahmad-faizel-058b0a79"
            target="_blank"
            rel="noreferrer"
            tw="hover:cursor-pointer flex space-x-2 items-center"
          >
            <SiLinkedin css={iconStyles} />
            <span>LinkedIn</span>
          </a>
        </div>
      </Container>
    </footer>
  );
}
