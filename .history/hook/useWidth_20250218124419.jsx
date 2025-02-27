/* eslint-disable prettier/prettier */
"use client";

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
