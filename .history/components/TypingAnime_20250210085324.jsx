/* eslint-disable prettier/prettier */
"use client";

import { Typed } from "react-typed";

const TypingAnime = ({}) => {
  return (
    <Typed
      loop
      backSpeed={50}
      strings={["Front-End Developer", "Web Designer", "Tech Enthusiast"]}
      typeSpeed={40}
    />
  );
};

export default TypingAnime;
