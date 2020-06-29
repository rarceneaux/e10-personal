/* eslint-disable max-len */
import utils from '../../helpers/utils';
import './bio.scss';

const bioString = () => {
  let domString = '<h4>"The problem of the twentieth century is the problem of the color line." (W.E.B. Du Bois 1903)</h4>';
  domString += '<img id="mypic" align ="right"  src="https://media-exp1.licdn.com/dms/image/C4E03AQGq0a9NeWZhhw/profile-displayphoto-shrink_400_400/0?e=1599091200&v=beta&t=lEOcTdXD_VlsMFsO7TcnDRnU4OXsBRpZlQujeOxfEFc ." alt="picture">';
  domString += '<p> I am a native of Nashville and father of 2 sons. I have witnessed my hometown change exponentially over the last decade since the 2008 financial crisis and recession.</p>';
  domString += '<p> Today, Nashville, the rest of the country, and planet face yet another crisis in 2020, on top of COVID-19 social injustices towards black people have made mainstream media. The deaths of Breonna Taylor, Ahmaud Arbery, and George Floyd have energized a new generation who have peacefully stepped up to say:<h3> 🇺🇸America we have a problem</h3></p>';
  domString += '<p> I dedicate my website to give remembrance to the victims and the families who have been impacted by these events. I salute everyone on the frontlines of the COVID-19 epidemic. More importantly, I take a knee in appreciation to those who are not black who have spoken publically and said it loud: <h3> BLACK LIVES MATTER</h3></p>';
  domString += '<p> The purpose of this site is to tell my story to employers on why I decided to make a career change and attend Nashville Software School (NSS). I hope every employer who reads this is conscious of the facts and reality that we all must work together to find the highest and best strategies to disrupt and conclude systemic racism in America. </p>';
  domString += '<p> My journey into software development started with taking a simple picture of my youngest son. At the time, my goal for him at roughly 18 months was to teach him the alphabet. I created him a set of ABC flashcards with MS Publisher and went to FedEx Kinkos to have them printed and laminated. He enjoyed the cards and was on the road to learning his ABCs.</p>';
  domString += '<p> However, like most toddlers, He was curious about the object I carried everywhere with us that could play the YouTube videos of his favorite shows, my smartphone. I had an idea to cross my mind to get him even more excited about learning his ABCs. I would make a PowerPoint presentation to represent the cards we were using in his learning. I projected my laptop screen to our TV to display the ABC app and let him use a wireless mouse to navigate through the app. After a few sessions together, he no longer needed my assistance, and he was learning by playing. </p>';
  domString += '<p> Now, as I approach the conclusion of Bootcamp at NSS, I plan to use this new skill set to benefit my community and family.</p>';
  utils.printToDom('bioPage', domString);
};

export default { bioString };
