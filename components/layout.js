import React from "react";
/** @jsx jsx */
import { css, jsx } from "@emotion/react";

import Alert from "../components/alert";
import Meta from "../components/meta";
import Footer from "@components/Footer";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div
        css={css`
          min-height: 90vh;
        `}
      >
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
