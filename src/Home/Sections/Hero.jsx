import React from 'react';
import { FaFacebookSquare, FaGithubSquare, FaLinkedin } from 'react-icons/fa';
import { ReactTyped } from 'react-typed';

const Hero = () => {
  return (
    <div id="home" className="w-10/12 mx-auto py-5 md:py-10  ">
      <div className="flex items-center  justify-center lg:justify-end lg:gap-30  flex-col md:flex-row-reverse ">
        <div class="relative inline-block">
          {/* <!-- Glow layer --> */}
          <div class="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-300 via-white to-yellow-300 blur-3xl opacity-30"></div>

          {/* <!-- Profile photo --> */}
          <img src="https://i.ibb.co.com/mr7vbkzZ/profile-picture-9-min.png" alt="profile" class="relative max-w-[400px] h-[400px] p-1 border-s-2 border-e-2 border-yellow-200 rounded-full" />
        </div>

        {/* <img
          src="https://i.ibb.co.com/mr7vbkzZ/profile-picture-9-min.png"
          className="max-w-[400px] h-[400px] p-1 border-s-2 border-e-2 shadow-blue-100 border-yellow-200  rounded-full object-cover shadow-xl"
        /> */}
        <div className="flex flex-col items-center md:items-start lg:w-1/2">
          <h1 className="text-5xl font-bold">
            I'm <span className="text-amber-300">Yeassin</span> Ali{' '}
          </h1>
          <ReactTyped
            className="text-xl mt-2"
            strings={['Web Developer', 'Frontend Developer', 'MERN stuck Developer']}
            typeSpeed={90}
            backSpeed={90}
            loop></ReactTyped>
          <p className="my-3 pl-5 border-l-2 text-center md:text-start border-white ">
            I'm a passionate Frontend Developer with hands-on experience in the MERN stack (React.js, Tailwind CSS, Node.js, Express.js, MongoDB). I enjoy
            learning new technologies and building responsive, user-friendly web applications
          </p>
          <div className="flex items-center gap-5 text-3xl mt-7">
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
          <div className="flex items-center gap-5 mt-8">
            <a
              href="https://drive.google.com/file/d/11IMBWBHAKs3OwTztB269Xltd_ALcw--e/view?usp=drive_link"
              target="_blank"
              download
              className="btn bg-gray-800 border-amber-200 text-white">
              Download Resume
            </a>
            <a href="#contact" className="btn border-amber-200 bg-gray-800 text-white">
              Contact
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
