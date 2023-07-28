/*
   Copyright (C), 2023-2024, Sara Echeverria (bl33h)
   Author: Sara Echeverria
   FileName: SocialLinks.jsx
   Version: I
   Creation: 02/06/2023
   Last modification: 03/06/2023
*/

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { icons } from "../Constants/constants";

const SocialLinks = () => {
  console.log("🚀 ~ file: SocialLinks.jsx:12 ~ icons:", icons)

  return (
    <div className="w-full h-[100px] bg-grayscale-950 flex justify-center items-center gap-3 p-6">
      <a href="https://github.com/Sourabh0777" target="_blank">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
          icon={icons.faGithub}
        />
      </a>
      <a href="mailto:sourabh.verma9770@gmail@gmail.com" target="_blank">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
          icon={icons.faEnvelope}
        />
      </a>
      <a href="https://www.linkedin.com/in/sourabhverma9770/" target="_blank">
        <FontAwesomeIcon
          className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
          icon={icons.faLinkedin}
        />
      </a>
      <a href="tel:+917042987761" style={{ display: "flex", alignItems: "center" }}>
        <FontAwesomeIcon
          className="text-3xl text-grayscale-50 hover:text-primary-400 hover:scale-[1.1] transition-all duration-75"
          icon={icons.faContactBook}
        />
        <h1 style={{ color: "white", fontSize: "1.5rem", marginLeft: "8px" }}>+91 7042987761</h1>
      </a>
    </div>
  );
};
export default SocialLinks;
