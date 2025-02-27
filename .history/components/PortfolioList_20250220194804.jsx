import portfolio_1 from "../../../public/Screenshot 2023-08-24 110530.png";
import portfolio_2 from "../../../public/Screenshot 2023-10-29 175248.png";
import portfolio_3 from "../../../public/Screenshot 2023-10-29 174433.png";
import portfolio_4 from "../../../public/Screenshot 2023-11-23 184715.png";
import portfolio_5 from "../../../public/Screenshot 2024-01-15 075712.png";
const portfolioList = [
  {
    id: uuid(),
    title: "Country Search api",
    image: portfolio_1,
    description: "Ability to search for any country.",
    link: "https://country-search-vhrj.onrender.com/",
  },
  {
    id: uuid(),
    title: "E-commerce Product Page",
    image: portfolio_2,
    description: "Ability to put items to cart and delete them.",
    link: "https://e-commerce-product-page-t3zp.onrender.com/",
  },
  {
    id: uuid(),
    title: "Trip Add To List ",
    image: portfolio_3,
    description:
      "Ability to add items to the list, cross check, filter and delete them. With statistics included",
    link: "https://trip-add-to-list.onrender.com",
  },
  {
    id: uuid(),
    title: "React Quiz",
    image: portfolio_4,
    description: "a quiz app",
    link: "https://react-quiz-d5oy.onrender.com/",
  },
  {
    id: uuid(),
    title: "T0-Do List",
    image: portfolio_5,
    description: "A To-Do List site",
    link: "https://to-do-list-topaz-psi-72.vercel.app/",
  },
];
export default portfolioList;
