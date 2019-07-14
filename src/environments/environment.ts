// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: 'AIzaSyDXAkI4db4eoTnfXbzTCYJ-_Hlh7mA3RKo',
    authDomain: 'my-portfolio-46601.firebaseapp.com',
    databaseURL: 'https://my-portfolio-46601.firebaseio.com',
    projectId: 'my-portfolio-46601',
    storageBucket: 'my-portfolio-46601.appspot.com',
    messagingSenderId: '127553745692'
  },
  admin_permission: {mailaddress: 'kenta.job09@gmail.com'}
};
