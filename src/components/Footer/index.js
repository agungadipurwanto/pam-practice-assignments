import React from "react";

function Footer() {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container-fluid">
        <span className="text-white">
          &copy; {new Date().getFullYear()}, Agung Adi Purwanto.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
