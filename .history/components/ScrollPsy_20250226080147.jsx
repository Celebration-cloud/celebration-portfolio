<section
      className="scrollspy-example bg-inherit relative w-full"
      data-bs-root-margin="0px 0px -40%"
      data-bs-smooth-scroll="true"
      data-bs-spy="scroll"
      data-bs-target="#navbar-example2"
    ></section>
"use client";

const ScrollPsy = ({children}) => {
  return (
    <section
      className="scrollspy-example bg-inherit relative w-full"
      data-bs-root-margin="0px 0px -40%"
      data-bs-smooth-scroll="true"
      data-bs-spy="scroll"
      data-bs-target="#navbar-example2"
    >
      {children}
    </section>
  )
}

export default ScrollPsy;
