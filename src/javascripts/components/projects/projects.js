import util from '../../helpers/utils';
import projectCard from '../projectCard/projectCard';
import tech1 from '../tech1/tech1';

const bio = document.getElementById('bioPage');
const tech = document.getElementById('technologiesPage');
const pro = document.getElementById('projectsPage');

const printTech = () => {
  const techString = tech1.techPrint();
  util.printToDom('technologiesPage', techString);
};

const linkEvents = (e) => {
  e.preventDefault();
  bio.classList.add('hidden');
  tech.classList.add('hidden');
  pro.classList.add('hidden');
  const linkClicked = e.target.id;
  if (linkClicked === 'navToBio') {
    bio.classList.remove('hidden');
  } else if (linkClicked === 'navToTechnologies') {
    tech.classList.remove('hidden');
    printTech();
  } else if (linkClicked === 'navToProjects') {
    pro.classList.remove('hidden');
    projectCard.createProjectCards();
  }
};

const addClickEvents = () => {
  const myLinks = document.getElementById('navLinks');
  myLinks.addEventListener('click', linkEvents);
};

export default { addClickEvents };
