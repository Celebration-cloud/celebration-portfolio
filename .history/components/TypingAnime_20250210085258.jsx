"use client";

import { Typed } from "react-typed";

const TypingAnime = () => {
  return (
    <Typed
      strings={["Front-End Developer", "Web Designer", "Tech Enthusiast"]}
      typeSpeed={40}
      backSpeed={50}
      loop
    />
  );
}

export default TypingAnime
