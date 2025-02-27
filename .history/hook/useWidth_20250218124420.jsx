/* eslint-disable prettier/prettier */
"use client";

import { useState } from "react";

const useWidth = () => {
  const [width, setWidth] = useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return width;
};

export default useWidth;
