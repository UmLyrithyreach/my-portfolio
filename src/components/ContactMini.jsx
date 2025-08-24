import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const ContactMini = ({ htitle, container, container2 }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  // Detect if `dark` class is present on <html>
  useEffect(() => {
    const checkDarkMode = () => {
      const isDark = document.documentElement.classList.contains("dark");
      setIsDarkMode(isDark);
    };

    checkDarkMode(); // Initial check

    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const color = isDarkMode ? "e5e7eb" : "282C33";
  const contact = [
    {
      app: "Telegram",
      uid: "@yourhandle",
      logo: `https://img.icons8.com/?size=100&id=TCnKnYZFoOzM&format=png&color=${color}`,
      link: "https://t.me/yourhandle",
    },
    {
      app: "Discord",
      uid: "yourhandle",
      logo: `https://img.icons8.com/?size=100&id=25627&format=png&color=${color}`,
      link: "https://discord.com/users/yourhandle",
    },
    {
      app: "Email",
      uid: "your.email@gmail.com",
      logo: `https://img.icons8.com/?size=100&id=QqtDTGEho4jP&format=png&color=${color}`,
      link: "mailto:your.email@gmail.com",
    },
  ];

  return (
    <>
      <div className="py-5">
        <motion.p
          variants={container && container(0.3)}
          initial="hidden"
          whileInView="visible"
          className="text-2ndry-2 dark:text-2ndry-1 mb-6"
        >
          I'm interested in freelance opportunities – especially ambitious or large projects.
          However, if you have other requests or questions, don't hesitate to contact me.
        </motion.p>

        <div className="overflow-x-auto">
          <table className="w-full">
            <tbody>
              <div className="space-y-4">
                {contact.map((entry, index) => (
                  <tr key={entry.app} className="block">
                    <td className="block pb-2">
                      <div className="flex items-center space-x-4">
                        <img
                          src={entry.logo}
                          alt={entry.app}
                          className="w-8 h-8"
                        />
                        <div>
                          <div className="font-medium text-2ndry-2 dark:text-2ndry-1">
                            {entry.app}
                          </div>
                          <div className="hover:text-lhilit-1 hover:dark:text-dhilit-1 transition-colors">
                            <a href={entry.link} target="_blank" rel="noopener noreferrer">
                              {entry.uid}
                            </a>
                          </div>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
              </div>
            </tbody>
          </table>
        </div>

        {htitle !== "contact" && (
          <div className="contactmebutton relative pt-10 text-right">
            <div className="border-lhilit-1 dark:border-dhilit-1 group relative inline-block border-2 text-sm font-medium">
              <Link to="/contact#contact" className="size-4">
                <span className="line dark:bg-primary bg-2ndry-1 size-3"></span>
                <div className="dark:bg-primary px-3 py-3">Other...</div>
              </Link>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ContactMini;
