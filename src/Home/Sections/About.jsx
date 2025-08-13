import React from 'react';

const About = () => {
  return (
    <div id='about' className="w-10/12 mx-auto py-5 md:py-10 ">
      <h2 className="text-xl md:text-4xl font-bold text-center my-5 md:my-10 text-amber-300">About me</h2>
      <div className='p-5 border border-amber-200 rounded-3xl'>
        <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          Hello! I'm <span className="font-semibold">Yeassin</span>, a passionate Frontend Developer and Computer Science student from Bangladesh. I specialize
          in crafting responsive, user-friendly, and visually engaging websites using modern web technologies like{' '}
          <span className="font-semibold">HTML, CSS, JavaScript, React, Tailwind CSS, and DaisyUI</span>.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
          My journey into coding started with a simple curiosity about how websites worked, and over time, it grew into a deep passion for building digital
          experiences that not only look beautiful but also perform exceptionally well. I believe that great design should be paired with flawless
          functionality, and I strive to bring both to every project I work on.
        </p>
         {/* Hobbies & Interests */}
         <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              Outside of programming, I have a few hobbies that keep me inspired 
              and balanced. I enjoy watching movies anime and tv shows , exploring 
              photography, and reading books about technology and personal growth. 
              These activities help me stay creative and bring fresh perspectives 
              into my work.
            </p>

            {/* Personality */}
            <p className="mt-4 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              I consider myself a curious, adaptable, and detail-oriented person. 
              I’m always eager to learn new skills, share knowledge with others, 
              and collaborate on meaningful projects. My approach to life and 
              coding is the same — stay consistent, keep improving, and enjoy 
              the process.
            </p>

      </div>
    </div>
  );
};

export default About;
