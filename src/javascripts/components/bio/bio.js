/* eslint-disable max-len */
import utils from '../../helpers/utils';
import './bio.scss';

const bioString = () => {
  let domString = '<h4></h4>';
  domString += '<img id="mypic" align ="right"  src="https://firebasestorage.googleapis.com/v0/b/personal-site-fb150.appspot.com/o/Raymond%20Arceneaux.JPG?alt=media&token=43287862-3542-4719-b630-9f7f364c0351" alt="picture">';
  domString += '<p> I am a native of Nashville and father of 2 sons. Before software development, I spent a combined 22 years in banking, real estate, and state government. I have an MBA and BBA, both with a concentration in Finance from Middle Tennessee State University.</p>';
  domString += '<p> My journey into software development started with taking a simple picture of my youngest son. At the time, my goal for him at roughly 18 months was to teach him the alphabet. I created him a set of ABC flashcards with MS Publisher and went to FedEx Kinkos to have them printed and laminated. He enjoyed the cards and was on the road to learning his ABCs.</p>';
  domString += '<p> However, like most toddlers, He was curious about the object I carried everywhere with us that could play the YouTube videos of his favorite shows, my smartphone. I had an idea to cross my mind to get him even more excited about learning his ABCs. I would make a PowerPoint presentation to represent the cards we were using in his learning. I projected my laptop screen to our TV to display the ABC app and let him use a wireless mouse to navigate through the app. After a few sessions together, he no longer needed my assistance, and he was learning by playing. </p>';
  domString += '<p> I plan to use the skill set of coding and development for the benefit of the community and my family.</p>';
  utils.printToDom('bioPage', domString);
};

export default { bioString };
