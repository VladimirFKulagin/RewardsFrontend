// src/Keycloak.js
import Keycloak from "keycloak-js";

const keycloak = new Keycloak({
    url: 'http://localhost:8080/',
    realm: 'App',
    clientId: 'webapp',
});

export const initKeycloak = () => {
    return new Promise((resolve, reject) => {
      keycloak.init({ onLoad: 'check-sso' }).then((authenticated) => {
        resolve(authenticated);
      }).catch((error) => {
        reject(error);
      });
    });
  };
  
  export default keycloak;