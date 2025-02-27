'use client';

import { useEffect } from "react";

export default function name() {
    useEffect(() => {
        AOS.init({
          duration: 1000, // Animation duration
          once: false, // Whether animation should happen only once - while scrolling down
        });
      }, []);
    return (
        <div>
            <h1></h1>
        </div>
    );
}