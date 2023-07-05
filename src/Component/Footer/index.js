import React from 'react'
import {
    FaGithub,
    FaLinkedin,
  } from "react-icons/fa";


      function Footer() {
        return (
          <div className="w-full bg-slate-200 text-center mt-4">
            <div className="w-full flex items-center justify-center pt-4">
              <a
                href="https://github.com/kozmoss"
                target="_blank"
                rel="noreferrer"
              >
                <FaGithub className="w-8 h-8 text-black m-2" />
              </a>
              <a
                href="https://www.linkedin.com/in/sametbuzcu/"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedin className="w-8 h-8 m-2 text-linkedin" />
              </a>
          
            </div>
            <div>
              <span className="text-xs text-gray-400">
                Copyright © 2023. All rights reserved. | Designed by Samet Buzcu
              </span>
            </div>
          </div>
        );
      }


export default Footer