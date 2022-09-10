// import { useState } from "react";

function About() {


    return (
        <div className="about-me">
            <div>
                <h2>melbourne based software engineer</h2>
            
                <p>I'm Kim. I began to code and learn about computer science in early 2020, thanks to <a href="https://cs50.harvard.edu/x/2022/">CS50</a>.</p>
                <p>Whilst working full time in education, I graduated in August 2022 from General Assembly's Software Engineering Immersive course. I created this portfolio in React.js to showcase the projects I've been working on, throughout the course and since.</p>
                <p>I have the following projects in the pipeline to continue learning:</p>
                    <ul>
                        <li>an interactive dashboard with AFL player stats (Python | React.js)</li>
                        <li>a portfolio for a creative in the TV industry (React.js)</li>
                        {/* eslint-disable-next-line */}
                        <li>an interactive page allowing you to follow the relationships, connections and rumours of your favourite celebrities. If <a href="https://www.laineygossip.com/" target="_blank">Lainey Gossip</a> had an API, I'd be there already (React.js)</li>
                    </ul>
            </div>
            <div>
                <h2>melbourne based <br></br>human being</h2>
                
                <p>Aside from programming I love exploring Melbourne, gawping at beautiful buildings and finding new places to eat great food. I listen to kpop every day and once took a dance class to <a href="https://www.youtube.com/watch?v=d7ZvOX8qZlc">this song.</a> I like running, especially with friends. I go for England at football, North Melbourne at AFL and BTS in everything else.</p>
                <p>check out my <a href="https://www.linkedin.com/in/kimberley-rogers-melb/">linkedin</a> or <a href="mailto:kimberleymrogers@gmail.com">email me</a> to <span className="strike">talk celebrity gossip</span> connect</p>
            </div>

            
          
        </div>
    )

}

export default About