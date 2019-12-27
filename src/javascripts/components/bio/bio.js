import utils from '../../helpers/utils';


const bioString = () => {
  let domString = '';
  domString += '<img  id="me" src="https://reactnativestarter-hosting-mobilehub-132039435.s3.amazonaws.com/headshot.jpg" alt=""/>';
  domString += '<h2>About Me</h2>';
  domString += '<p> I was born and rasied in Nashville, TN. Prior to NSS, I received both my Bachelors and Masters degrees with an emphasis in Finance from MTSU.';
  domString += '<p>I currently work for the State of Tennessee in the Department of General Services as an Real Property Agent. My duties consist of supporting the various state agencies with their real estate transactions. I have over 20 years of combined business experience in retail banking, financial markets, and real estate.</p>';
  domString += '<p> My why for becoming a software developer is to expose coding to at-risk male youth in a after-school type of program.</p>';
  domString += '<p>My site displays the individual and group projects I completed and technology resources learned while in the Front-End portion of the Full-Stack Software Developer Bootcamp at NSS.</p>';
  utils.printToDom('bioPage', domString);
};


export default { bioString };
