/* eslint-disable max-len */
import utils from '../../helpers/utils';
import './bio.scss';

const bioString = () => {
  let domString = '<h2>About Me</h2>';
  domString += '<p> I was born and rasied in Nashville, TN. I graduated from Hunters Lane High School where I developed leadership qualities as QB₁. After graduation, I obtained my real estate license at 18 years old. I sold residential real estate full-time for a total of five years. My experience in real estate and helping clients obtain financing led me to a career as a banker.</p>';
  domString += '<p> After several years in the workforce, I would begin a new journey in life. I decided to pursue an important life goal of becoming the first male in my family to graduate from college. I earned a BBA and MBA both with an concentration in Finance from MTSU while working full-time in banking.</p>';
  domString += '<p> Today, I currently work for the State of Tennessee in the Department of General Services as an Real Property Agent. My duties consist of supporting the various state agencies with their real estate transactions. I have over 20 years of combined business experience in banking, real estate, and relationship management.</p>';
  domString += '<p> My why for becoming a software developer was to create an App to address a problem known as the:<a href="https://www.aft.org/sites/default/files/periodicals/TheEarlyCatastrophe.pdf">The 30 Million Word Gap.</a>This was due to the fact I was attempting to teach my youngest son the alphabet when he was 18 months old. I stumbled across the topic by pure chance while researching fun ways to get young toddlers to learn by playing.</p>';
  domString += '<p> I would interview several local software firms to discuss my idea and the process of creating a MVP prototype. However, I actually made my own prototype with Microsoft Powerpoint which my son enjoyed playing. After sharing my MVP with one particular firm, one of the representatives said you should look into becoming a software developer and the rest is history.</p>';
  domString += '<p> In addition, to becoming a software developer I would like to volunteer my time in the community by offering free coding workshops to at-risk male youth.</p>';
  domString += '<p> My site displays a few examples of the individual and group projects I completed and technology resources learned while in the Front-End portion of the Full-Stack Software Developer Bootcamp at NSS.</p>';
  utils.printToDom('bioPage', domString);
};


export default { bioString };
