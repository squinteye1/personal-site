import React from "react";
import { BsTwitter, BsInstagram, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

const SocialMedia = () => (
  <div className="app__social">
    <a
      href="https://www.linkedin.com/in/neil-mckay-247200a6/"
      title="LinkedIn Profile"
    >
      <div>
        <BsLinkedin />
      </div>
    </a>
  </div>
);

export default SocialMedia;
