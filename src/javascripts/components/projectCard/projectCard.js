import projectData from '../../helpers/data/projectsData';
import utils from '../../helpers/utils';

import './projectCard.scss';

const createProjectCards = () => {
  let domString = '';
  projectData.getProjects()
    .then((projects) => {
      projects.forEach((project) => {
        domString += `<div class="card" style="width: 25rem;">
        <img src="${project.screenshot}" class="card-img-top" alt="...">
        <div class="card-body text-center">
          <h5 class="card-title">${project.title}</h5>
          <p class="card-text">${project.description}</p>
          <p class="card-text">Tech Used: ${project.technologiesUsed}</p>
          <a class="btn btn-secondary" target="_blank" href="${project.gitHubrepo}">GitHub Repo</a>
          <a class="btn btn-secondary" target="_blank" href="${project.url}">View Project</a>
        </div>
      </div>`;
      });
      utils.printToDom('projectsPage', domString);
    });
};

export default { createProjectCards };
