/* eslint-disable prettier/prettier */
"use client";

import { ReactTyped } from "react-typed";


const TypingAnime = ({text}) => {
  return (
    <ReactTyped
    lo
      loop
      backSpeed={50}
      strings={text}
      typeSpeed={40}
    />
  );
};

export default TypingAnime;
