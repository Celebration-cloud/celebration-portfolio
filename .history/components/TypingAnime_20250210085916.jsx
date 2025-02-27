/* eslint-disable prettier/prettier */
"use client";


const TypingAnime = ({text}) => {
  return (
    <Type
      loop
      backSpeed={50}
      strings={text}
      typeSpeed={40}
    />
  );
};

export default TypingAnime;
