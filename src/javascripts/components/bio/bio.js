import utils from '../../helpers/utils';


const bioString = () => {
  let domString = '';
  domString += '<img  id="me" src="https://reactnativestarter-hosting-mobilehub-132039435.s3.amazonaws.com/headshot.jpg" alt=""/>';
  domString += '<h2>About Me</h2>';
  domString += '<p> I was born and rasied in Nashville, TN. Prior to NSS, I received both my BBA and MBA with an emphasis in Finance from MTSU.';
  domString += '<p>I currently work for the State of Tennessee in the Department of General Services as an Real Property Agent. My area of expertise is to support the various state agencies in their real estate transactions. I have an combined 20 years of experience in retail banking, financial services, and real estate.    </p>';
  domString += '<p> My way for becoming a software developer is to teach and expose at-risk male youth to coding in addition to having the ability to provide my family a comfortable lifestyle.</p>';
  domString += '<p>This site displays the individual and group projects I completed while in the front-end bootcamp at NSS as well as the technologies incorporated in these projects.</p>';
  utils.printToDom('bioPage', domString);
};


export default { bioString };
