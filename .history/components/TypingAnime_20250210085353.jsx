/* eslint-disable prettier/prettier */
"use client";

import { Typed } from "react-typed";

const TypingAnime = ({text}) => {
  return (
    <Typed
      loop
      backSpeed={50}
      strings=text}
      typeSpeed={40}
    />
  );
};

export default TypingAnime;
