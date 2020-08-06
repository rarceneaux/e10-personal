/* eslint-disable max-len */
import utils from '../../helpers/utils';
import './bio.scss';

const bioString = () => {
  let domString = '<h4></h4>';
  domString += '<img id="mypic" align ="right"  src="https://firebasestorage.googleapis.com/v0/b/personal-site-fb150.appspot.com/o/SAMPLE%201.2.png?alt=media&token=741cad99-41e0-4865-91ed-4efe15be14b7" alt="picture">';
  domString += '<p> I am a native of Nashville and father of 2 sons. Before software development, I spent a combined 22 years in real estate, banking, and state government. I have an MBA and BBA, both with a concentration in Finance from Middle Tennessee State University.</p>';
  domString += '<p> My journey into software development started with taking a simple picture of my youngest son. At the time, my goal for him at roughly 18 months was to teach him the alphabet. I created him a set of ABC flashcards with MS Publisher and went to FedEx Kinkos to have them printed and laminated. He enjoyed the cards and was on the road to learning his ABCs.</p>';
  domString += '<p> However, like most toddlers, He was curious about the object I carried everywhere with us that could play the YouTube videos of his favorite shows, my smartphone. I had an idea to cross my mind to get him even more excited about learning his ABCs. I would make a PowerPoint presentation to represent the cards we were using in his learning. I projected my laptop screen to our TV to display the ABC app and let him use a wireless mouse to navigate through the app. After a few sessions together, he no longer needed my assistance, and he was learning by playing. </p>';
  domString += '<p> I plan to use the skill set of software development professionally as a junior developer and personally, for the benefit of the community and my family.</p>';
  domString += '<p> Please listen to my podcast interview as I share my journey at NSS and the relationships I gained during the process.</p>';
  domString += '<br>';
  domString += '<iframe width="100%" height="600" scrolling="no" frameborder="no" allow="autoplay" src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/866122027&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"></iframe><div style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break: normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis; font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a href="https://soundcloud.com/nashville-software-school" title="Nashville Software School" target="_blank" style="color: #cccccc; text-decoration: none;">Nashville Software School</a> · <a href="https://soundcloud.com/nashville-software-school/raymond-arceneaux" title="Raymond Arceneaux" target="_blank" style="color: #cccccc; text-decoration: none;">Raymond Arceneaux</a></div>';
  utils.printToDom('bioPage', domString);
};

export default { bioString };
