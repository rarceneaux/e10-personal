import firebase from 'firebase';
import 'bootstrap';
import apiKeys from './helpers/apiKeys.json';
import projectsData from './helpers/data/projectsData';
import projects from './components/projects/projects';
import techData from './helpers/data/techData';
import bio from './components/bio/bio';
import '../styles/main.scss';

const init = () => {
  projectsData.getProjects('projectId').then();
  techData.getTech('techId').then();
  firebase.initializeApp(apiKeys.firebaseKeys);
  projects.addClickEvents();
  bio.bioString();
};

init();
