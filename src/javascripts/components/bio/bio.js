/* eslint-disable max-len */
import utils from '../../helpers/utils';
import './bio.scss';

const bioString = () => {
  
  let domString = '<h2> About Raymond</h2>';
  domString += '<img align ="right" src="https://firebasestorage.googleapis.com/v0/b/personal-site-fb150.appspot.com/o/IMG_1178.jpg?alt=media&token=a13fe3b2-a3a1-41c8-8cd5-bbe86fcb28b8" alt="picture">'
  
  domString += '<p> As a native of Nashville, I started my professional career by obtaining a real estate license a few months after graduating from Hunters Lane High School. I specialized in helping For Sale By Owners (FSBOs) sell their homes at a reduced commission. I sold homes for several years before I was presented with the opportunity to list a commercial property. The experience I gained in the commercial sector directed me to an interest in finance. I would eventually find a job as a banker and retire my license. I also decided to pursue the dream of becoming the first male in my family to graduate from college. I have valued continuous personal and educational growth throughout my life. After receiving a BBA and MBA in Finance from MTSU, I continued my career in the financial services industry with UBS.</p>';

  domString += '<p> My first introduction to coding came while teaching my youngest son the alphabet when he was 18 months old. My strong value of education influenced my passion for making sure my son had access to an easy and efficient way to learn his foundational language, vocabulary, and literacy skills. I originally made him a set of flashcards by going to FedEx spending about $20 dollars on laminating to make them last and the fun started. </p>';
  
  domString += '<p> I shared our flashcards with family, friends, and co-workers who instantly asked me to make cards for their young learners. I would again go back to the planning and development mode to design a template to make the cards for other kids. During the planning process, I thought why not leverage the curiosity of kids towards technology mainly smartphones/tablets and create a app for the flashcards. </p>';
  
  domString += '<p> I conducted some research and decided to create a app to help address The 30 Million Word Gap. After meeting with a few local software firms to discuss creating a MVP prototype for my idea, I had previous made my own MVP using Microsoft Powerpoint. My son enjoyed playing the app and it was successful in motivating him to learn via playing. </p>';
  
  domString += '<p> While sharing my MVP one developer I met suggested I research becoming a developer. I truly enjoyed the planning and development process of my idea which I accredit to my MBA. I saw first hand the app I built made a positive impact into shaping the early learning experiences for my son. </p>';
  
  domString += '<p> I am excited for my new career in software development to help others solve problems, to be creative, and utilize my previous professional experience. </p>';
  utils.printToDom('bioPage', domString);
  };

  export default { bioString };
