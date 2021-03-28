import { css, Global } from "@emotion/react";
import React from "react";

const styles = css`
  html {
    font-size: 10px;
  }
  html,
  body {
    padding: 0;
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  }
  body {
    font-size: 1.2rem;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  * {
    box-sizing: border-box;
  }
`;

export default function GlobalStyles() {
  return <Global styles={styles} />;
}
