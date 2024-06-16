import React from "react";

const About = () => {
  return (
    <div className="about">
      <h1 className="about__title">This is about page/section</h1>
      <div className="cards">
        <div className="about__card">
          <p>
            I&apos;m a self tought Developer from Vilnius, Lithuania.
            <br />
            I enjoy creating responsive, fast-loading, dynamic user experiences.
            <br />
            Previously worked with circus troupe as an acrobat and juggler. Also
            was travelling and making street performances.
          </p>
        </div>
        <div className="about__card">
          <p>
            Recently (make sure grammar is correct) picked up new hobby that is
            FPV drone flying. Find it really interesting to build the drone from
            ground up. Soldering, connecting PCB boards, figuring out radio and
            video links. As well flying, exploring skies, forest tops and even
            abondoned buildings. It&appos;s trully something to see things from
            birds perspective.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
