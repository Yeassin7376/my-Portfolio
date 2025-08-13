import React from 'react';

const About = () => {
  return (
    <div id='about' className="w-10/12 mx-auto py-5 md:py-10  ">
      <h2 className="text-xl md:text-2xl text-center my-5 md:my-10 text-amber-300">About me</h2>
      <div className='p-5 border border-amber-200 rounded-lg'>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Hello! I’m <span className="font-semibold">Yeassin</span>, a passionate Frontend Developer and Computer Science student from Bangladesh. I specialize
          in crafting responsive, user-friendly, and visually engaging websites using modern web technologies like{' '}
          <span className="font-semibold">HTML, CSS, JavaScript, React, Tailwind CSS, and DaisyUI</span>.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          My journey into coding started with a simple curiosity about how websites worked, and over time, it grew into a deep passion for building digital
          experiences that not only look beautiful but also perform exceptionally well. I believe that great design should be paired with flawless
          functionality, and I strive to bring both to every project I work on.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          When I’m not coding, you’ll often find me exploring new programming concepts, learning about performance optimization, or experimenting with creative
          UI/UX designs. I’m also committed to continuous learning — from improving my problem-solving skills to staying updated with the latest trends in web
          development.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          My ultimate goal is to create web experiences that inspire, educate, and empower users. Whether it’s a personal project or a collaboration with a
          team, I aim to deliver high-quality work that’s both functional and visually appealing.
        </p>
      </div>
    </div>
  );
};

export default About;
