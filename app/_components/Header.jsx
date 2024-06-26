import React from "react";
import Link from "next/link";

function Header() {
  return (
    <header className="headerSection">
      <div className="content">
        <Link href="#brand" className="brand">
          <img src="/amazon_offers.png" alt="" />
        </Link>

        <p className="text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
          Necessitatibus distinctio.
        </p>

        <p className="text">
          🔵Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellat
          quos eaque nulla, ab neque voluptates?
        </p>
      </div>
    </header>
  );
}

export default Header;
