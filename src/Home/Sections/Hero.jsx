import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';

const Hero = () => {
  return (
    <div id="home" className="w-10/12 mx-auto py-5 md:py-10  ">
      <div className="flex items-center justify-center  flex-col lg:justify-between lg:flex-row-reverse">
        <img src="/src/assets/myPhoto.png" className="max-w-[400px] h-[400px] p-1  rounded-full object-cover shadow-2xl" />
        <div className="flex flex-col items-center md:items-start gap-10">
          <h1 className="text-5xl font-bold">
            I'm <span className="text-amber-300">Yeassin</span> Ali{' '}
          </h1>
          <p className="my-6 pl-5 border-l-2 text-center md:text-start border-white ">
            a Frontend Developer <br />
            crafting responsive and user-friendly web experiences.
          </p>
          <div className="flex items-center gap-5 text-3xl">
            <a target="_blank" href="https://www.linkedin.com/in/md-yeassin-ali/">
              <FaLinkedin />
            </a>
            <a target="_blank" href="https://github.com/Yeassin7376">
              <FaGithubSquare />
            </a>
            <a target="_blank" href="https://www.facebook.com/yeassinali7376">
              <FaFacebookSquare />
            </a>
          </div>
          <a href="/resume.pdf" download className="btn bg-gray-800 text-white">
            Download Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
