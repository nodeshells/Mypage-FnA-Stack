import { environment_config } from './environment_config';

// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: environment_config.firebase.apiKey,
    authDomain: environment_config.firebase.authDomain,
    databaseURL: environment_config.firebase.databaseURL,
    projectId: environment_config.firebase.projectId,
    storageBucket: environment_config.firebase.storageBucket,
    messagingSenderId: environment_config.firebase.messagingSenderId
  }
};
