import React from "react";
import Socials from "./Socials";

const Footer = () => {
  return (
    <>
      <footer className="flex w-full mt-20 mb-6 justify-center items-center">
        <div className="flex flex-col items-center gap-2">
          <Socials />
          <p className="text-center font-semibold credit ">
            {new Date().getFullYear()} || Crafted with{" "}
            <i class="fa-solid footer-heart fa-heart"></i> by Chux Dennis
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
