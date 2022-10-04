// import { useState } from "react";

function About() {


    return (
        <section id="about-section">
            <h2 className="section-title">about me</h2>
            <div className="about-me">
                <div>
                    <h3 className="bold-text">melbourne based software engineer</h3>
                    
                    {/* eslint-disable-next-line */}
                    <p>I'm Kim. I began to code and learn about computer science in early 2020, thanks to <a href="https://cs50.harvard.edu/x/2022/" target="_blank">CS50</a>.</p>
                    <p>Whilst working full time in education, I graduated in August 2022 from General Assembly's Software Engineering Immersive course. I created this portfolio in React.js to showcase the projects I've been working on, throughout the course and since.</p>
                    <p>I'm pivoting my career in vocational education to a career as a software engineer, with a love for working in teams and problem solving guiding me through the move.
                    I bask in the talents of my teammates, letting them know how great they are and leading with empathy, encouragement and good humour. Solving problems is my safe space and my curious nature helps me to find solutions and build user friendly processes.</p>
                    <p>My dream job is doing these things together; team work, problem solving, building great things.</p>
                    {/* eslint-disable-next-line */}
                    <a href="https://drive.google.com/file/d/1pHjFZpsfgONLGQuPvN5N5xooZMsm59X0/view?usp=sharing" target="_blank">Take a look at my resume here</a>


                </div>
                <div>
                    <h3 className="bold-text">melbourne based human being</h3>
                    
                    <p>Originally from the UK, I'm in the process of becoming an Aussie citizen. Aside from programming I spend my time exploring Melbourne, gawping at beautiful buildings and finding new places to eat great food. I listen to kpop every day and once took a dance class to <a href="https://www.youtube.com/watch?v=d7ZvOX8qZlc">this song.</a> I like running, especially with friends. I go for England at football, North Melbourne at AFL and BTS in everything else.</p>
                    <p>check out my <a href="https://www.linkedin.com/in/kimberley-rogers-melb/">linkedin</a> or <a href="mailto:kimberleymrogers@gmail.com">email me</a> to <span className="strike">talk celebrity gossip</span> connect</p>
                </div>
            </div>
        </section>
    )

}

export default About