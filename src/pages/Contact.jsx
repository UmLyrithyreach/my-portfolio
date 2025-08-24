import React from "react";
import ContactMini from "../components/ContactMini";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TitlesS from "../components/TitlesSlash";
import MouseHover from "../components/MouseHover";

const Contact = () => {
  return (
    <>
      <div className="fixed inset-0 z-[-2] bg-white bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] dark:bg-neutral-950 dark:bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
      <div className="relative z-0"></div>
      <MouseHover />
      <Navbar />
      <div className="mycontainer pb-10">
        <TitlesS htitle="contact" />
        <div className="">
          <ContactMini htitle="contact" />
        </div>
        <hr className="my-8" />
        <Footer />
      </div>
    </>
  );
};

export default Contact;