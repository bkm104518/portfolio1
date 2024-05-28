import { Container } from "./styles";
import githubIcon from "../../assets/github.svg"
// import DownloadApp from '../../assets/download.png'
import externalLink from "../../assets/external-link.svg"
import ScrollAnimation from "react-animate-on-scroll";


export function Project() {
  return (
    <Container id="project">
      <h2>My Projects</h2>
      <div className="projects">

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"> <title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/bkm104518/project.git" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /></a>
                 </div>
            </header>
            <div className="body">
              <h3>Grocery Management Website</h3>
              <p> Developed for customer to add an daily essential based on user needs.
                Creating and managing your content needs constant attention and should be an on-going effort.By checking your product data is up-to-date,new products are added to the web store,
old products are removed,to remember the missing products</p>
            </div>
            <footer> <ul className="tech-list"> <li>HTML</li> <li>CSS</li> <li>Javascript</li><li>AWS Snapshot</li>  </ul> </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b " strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><title>Folder</title> <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path> </svg>
              <div className="project-links">
                <a href="https://github.com/bkm104518/newsapp.git" target="_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" /> </a>
              </div>
            </header>
            <div className="body">
              <h3>News Reader</h3>
              <p>
             In  News apps provide quick access to a variety of information. The ease of scrolling through the news on the website is much better than buying a newspaper and cluttering up your bag or office desk. Furthermore, news apps help to save trees. 
             A website has many advantages for companies that publish news. </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>React js</li>
                <li>Redux</li>
                <li>Javascript</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>

        <ScrollAnimation animateIn="flipInX">
          <div className="project">
            <header>
              <svg width="50" xmlns="http://www.w3.org/2000/svg" role="img" viewBox="0 0 24 24" fill="none" stroke="#23ce6b" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <title>Folder</title>
                <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"></path>
              </svg>
              <div className="project-links">
                <a href="https://github.com/bkm104518/Game.git" target="\_blank" rel="noreferrer">
                  <img src={githubIcon} alt="Visit site" />
                </a>
              </div>
            </header>
            <div className="body">
              <h3>Number Guessing Game</h3>
              <p>
              In a number guessing game, the user guesses a randomly generated secret number within a given number of attempts. After each guess, the user gets hints on whether their guess is too high, too low, or correct. 
              So yeah, the game ends when the user guesses the secret number or runs out of attempts. </p>
            </div>
            <footer>
              <ul className="tech-list">
                <li>Javascript</li>
                <li>Typescript</li>
                <li>Html</li>
                <li>Css</li>
                <li>AWS S3</li>
              </ul>
            </footer>
          </div>
        </ScrollAnimation>
     </div>
    </Container>
  );
}