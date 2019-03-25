import React from "react";
import Link from "next/link";

export function Header() {
  return (
    <header>
      <h1>Next Playground</h1>
      <div>
        <Link href="/">
          <a>Index</a>
        </Link>
        |
        <Link href="/about">
          <a>About</a>
        </Link>
        |
        <Link href="/apollo">
          <a>Apollo</a>
        </Link>
      </div>
    </header>
  );
}
