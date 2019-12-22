import axios from 'axios';
import apiKeys from '../apiKeys.json';

const baseUrl = apiKeys.firebaseKeys.databaseURL;

const getTech = () => new Promise((resolve, reject) => {
  axios.get(`${baseUrl}/tech.json`)
    .then((response) => {
      console.log(response.data);
      const daTech = response.data;
      const tech = [];
      Object.keys(daTech).forEach((fbId) => {
        daTech[fbId].id = fbId;
        tech.push(daTech[fbId]);
      });
      resolve(tech);
    })
    .catch((error) => reject(error));
});

export default { getTech };
