import React from "react";
import { Github } from "lucide-react";
function Header() {
  return (
    <header className="container flex flex-row items-center justify-between">
      <h1 className="text-2xl font-semibold">Shrinkr</h1>
      <a
        href="https://github.com/shaghaf7/Shrinkr"
        target="_blank"
      >
        <Github className="w-6 h-6" />
      </a>
    </header>
  );
}

export default Header;
