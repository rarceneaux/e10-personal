/* eslint-disable max-len */
import utils from '../../helpers/utils';
import './bio.scss';

const bioString = () => {
  let domString = '<h4>#NASHVILLESTRONG</h4>';
  domString += '<img id="mypic" align ="right"  src="https://firebasestorage.googleapis.com/v0/b/raymondarceneaux-dev.appspot.com/o/IMG_1178.jpg?alt=media&token=47b8d0ac-cca0-4c09-bad6-97ab975a9c4f" alt="picture">';
  domString += '<p> I am a native of Nashville and father of 2 sons. I have witnessed my hometown change exponentialy over the last decade since the 2008 financial crisis and recession.</p>';
  domString += '<p> Today, Nashville, the rest of the country, and planet faces yet another crisis in 2020, COVID-19. Since early March, Nashville faced deadly tornados and a health pandemic which both claimed lives. </p>';
  domString += '<p> I include these matters in my website to give remembrance to the vitcims and the families who have been impacted by both of these occurrences. I also salute all those on the frontlines of this COVID-19 nightmare as they care for others while being in harms way.</p>';
  // domString += '<br>';
  domString += '<p> The purpose of this site is to tell my story and why I decided to make a career change and become a software developer.</p>';
  domString += '<p> My journey started off with taking a simple picture of my youngest son, Chandler. At the time, my goal for him at roughly 18 months was to teach him the alphabet. I would create him some ABC flashcards with MS Publisher and go to Fedex Kinkos to have them printed and laminated. Chandler enjoyed the cards and he was on the road to learning his ABCs. </p>';
  domString += '<p> However, like most toddlers Chandler was curious about the object I carried everywhere with us that could play the YouTube videos of his favorite shows, my smartphone. This being the case I had an idea cross my mind to get him even more excited about learning his ABCs. I would make a PowerPoint presentation to represent the cards we were using in his learning. I projected my laptop screen to our TV to display the ABC app and let Chandler use the mouse and keyboard to navigate through the app. After a few sessions together, he no longer needed my assistance and he was learning by playing.</p>';
  domString += '<p> This started my path on the road to NSS and now my next destination is to obtain my first software developer job upon finishing bootcamp.</p>';
  domString += '<p> I am excited for my new career in software development to help others solve problems, to be creative, and utilize all my previous professional experience. </p>';
  utils.printToDom('bioPage', domString);
};

export default { bioString };
