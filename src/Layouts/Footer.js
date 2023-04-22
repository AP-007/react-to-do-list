import React from "react";

export default function Footer() {
  let footerStyle = {
    position:'relative',
    top:'10vh',
    width:'100%',
  }
  return (
    <footer className="text-center bg-dark text-light py-5" style={footerStyle}>
      copyright &copy; Adarsha Poudel{" "}
    </footer>
  );
}
