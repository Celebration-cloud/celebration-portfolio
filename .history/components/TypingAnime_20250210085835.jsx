/* eslint-disable prettier/prettier */
"use client";
Export default doesn't exist in target module
  2 | "use client";
  3 |
> 4 | import  Typed  from "react-typed";
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  5 |
  6 | const TypingAnime = ({text}) => {
  7 |   return (

The export default was not found in module [project]/node_modules/react-typed/dist/mjs/index.js [app-client] (ecmascript) <exports>.
Did you mean to import ReactTyped?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.



./components/TypingAnime.jsx:4:1
Export default doesn't exist in target module
  2 | "use client";
  3 |
> 4 | import  Typed  from "react-typed";
    | ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  5 |
  6 | const TypingAnime = ({text}) => {
  7 |   return (

The export default was not found in module [project]/node_modules/react-typed/dist/mjs/index.js [app-ssr] (ecmascript) <exports>.
Did you mean to import ReactTyped?
All exports of the module are statically known (It doesn't have dynamic exports). So it's known statically that the requested export doesn't exist.


const TypingAnime = ({text}) => {
  return (
    <Typed
      loop
      backSpeed={50}
      strings={text}
      typeSpeed={40}
    />
  );
};

export default TypingAnime;
