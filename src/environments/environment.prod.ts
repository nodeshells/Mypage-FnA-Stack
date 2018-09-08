import { environment_config } from './environment_config';

export const environment = {
  production: true,
  firebase: {
    apiKey: environment_config.firebase.apiKey,
    authDomain: environment_config.firebase.authDomain,
    databaseURL: environment_config.firebase.databaseURL,
    projectId: environment_config.firebase.projectId,
    storageBucket: environment_config.firebase.storageBucket,
    messagingSenderId: environment_config.firebase.messagingSenderId
  }
};
