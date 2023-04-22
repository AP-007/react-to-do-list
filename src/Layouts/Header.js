import React from "react";
import { propTypes } from "react-bootstrap/esm/Image";

export default function Header(props) {
  return (
    <>
      <nav className="bg-dark text-light text-center">
        <p>{props.title}</p>
      </nav>
      <hr />
    </>
  );
}

Header.defaultProps = {
  title: "Default Navigation Bar",
};
