/* eslint-disable max-len */
import utils from '../../helpers/utils';
import './bio.scss';

// const bioString = () => {
//   let domString = '<h2>About Me</h2>';
//   domString += '<p> As a native of Nashville, I have valued continuous personal and educational growth throughout my life. After receiving my MBA from MTSU in Finance I began my career in the financial services industry with UBS. My first introduction to coding came while teaching my youngest son the alphabet when he was 18 months old. My strong value of education influenced my passion for making sure my son had access to an easy and efficient way to learn his foundational language skills. I decided to create an application to aid in early education of these fundamental skills. After meeting with software firms to discuss creating a MVP prototype for my idea, I decided to make my own prototype with Microsoft Powerpoint. My son enjoyed playing the application and it was successful in educating him. After sharing my MVP with a few firms, one representative I spoke with suggested I research becoming a developer. Realizing how much I truly enjoyed development and seeing first hand that the applications you build can make a positive impact, I decided to make the change. I am excited for my new career in technology, and the opportunity it will give me to continuously learn and challenge myself.</p>';
//   // domString += '<p> My Education App Demo:<a href="https://projects.invisionapp.com/share/CNOM6BOK5TX#/screens/256082868">ME App</a></p>';
//   domString += '<p> In addition, to becoming a software developer I would like to volunteer my time in the community by offering free coding workshops to at-risk male youth.</p>';
//   domString += '<p> My website displays my Front-End Capstone Title: My-Dashbook, QB₁ individual project, and two group projects. The projects are all front-end applications I completed during the first six months at NSS.</p>';
//   utils.printToDom('bioPage', domString);
// };

// export default { bioString };

const bioString = () => {
  let domString = '<h2>About Me</h2>';
  domString += '<p> As a native of Nashville, I have valued continuous personal and educational growth throughout my life. After receiving my MBA in Finance from MTSU, I continued my career in the financial services industry with UBS.</p>';
  domString += '<p> My first introduction to coding came while teaching my youngest son the alphabet when he was 18 months old. My strong value of education influenced my passion for making sure my son had access to an easy and efficient way to learn his foundational language, vocabulary, and literacy skills. I originally made him a set of flashcards by going to FedEx Kinkos spending about $20 dollars on laminating to make them last and the fun started. </p>';
  domString += '<p> I shared our flashcards with family, friends, and co-workers who instantly asked me to make cards for their young learners. I would again go back to the planning and development mode to design a template to make the cards for other kids. During the planning process, I thought why not leverage the curiosity of kids towards technology mainly smartphones/tablets and create a app for the flashcards. </p>';
  domString += '<p> I conducted some research and decided to create a app to help address the:<a href="https://www.aft.org/sites/default/files/periodicals/TheEarlyCatastrophe.pdf">The 30 Million Word Gap</a>. After meeting with a few local software firms to discuss creating a MVP prototype for my idea, I had previous made my own MVP using Microsoft Powerpoint. My son enjoyed playing the app and it was successful in motivating him to learn via playing.</p>';
  domString += '<p> While sharing my MVP one developer I met suggested I research becoming a developer. I truly enjoyed the planning and development process of my idea which I accredit to my MBA. I saw first hand the app I built made a positive impact into shaping the early learning experiences for my son.</p>';
  domString += '<p> I am excited for my new career in technology, and the opportunity it will give me to continuously learn, be creative and help others solve problems. </p>';
  domString += '<p> In addition, to becoming a software developer I would like to volunteer my time in the community by offering free coding workshops to at-risk male youth.</p>';
  domString += '<p> My website displays my Front-End Capstone Title: My-Dashbook, QB₁ individual project, and two group projects. The projects are all front-end applications I completed during the first six months at NSS.</p>';
  utils.printToDom('bioPage', domString);
};

export default { bioString };
