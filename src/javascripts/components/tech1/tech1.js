import techData from '../../helpers/data/techData';
import utils from '../../helpers/utils';

import './tech1.scss';

const techPrint = () => {
  let domString = '<div class="container">';
  domString = '<div class="row justify-content-around align-items-center">';
  techData.getTech()
    .then((tech) => {
      tech.forEach((tec) => {
        domString += `
        <div class="col-sm-2 m-3 text-center">
        <a href="${tec.url}" target="..">
        <img class="pics" src="${tec.imgUrl}" alt="..."></a>
        </div>
        `;
      });
      utils.printToDom('technologiesPage', domString);
    });
};

export default { techPrint };
