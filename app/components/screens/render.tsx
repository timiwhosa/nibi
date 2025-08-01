"use client";

import { useEffect, useState } from "react";
import AboutPage from "./about";
import HomePage from "./home";

type HashPages = "" | "about";
export default function RenderScreen() {
  const [hash, setHash] = useState<HashPages>("");

  useEffect(() => {
    const onHashChange = () => {
      const hashString = window.location.hash.substring(1).toLowerCase();
      if (["", "about"].includes(hashString)) {
        console.log(-1);
        setHash(hashString as HashPages);
      } else {
        console.log(1);
        setHash("");
        window.location.hash = "";
      }
    };
    onHashChange();
    window.addEventListener("hashchange", onHashChange);
    return () => {
      window.removeEventListener("hashchange", onHashChange);
    };
  }, []);

  switch (hash) {
    case "":
      return <HomePage />;
    case "about":
      return <AboutPage />;
    default:
      return <HomePage />;
  }
}
