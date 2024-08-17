# Files and directories

- vite.config.ts

  - It's the configuration file from Vite.
  - The Vue App it's build into a Vite.
  - It's the constructor of Vue App to upload a webSite.

- The tsconfig files

  - Configure settings for node
  - Configure the global setting for App
  - Configure the particular setting for App

- README.nd

  - Instructions to other person that want run this App.
  - And instructions to use the App if was necesary

- package.json

  - Data from App, and node packages configurations.
  - Scripts to run App in Dev mode, run testing or generate the Production build.
  - Apply linter and format with prettier all files from App.
  - Also include the dependencies to create production Build and dependecies from dev mode.

- package-lock.json

  - Information about node modules was created. Don't touch it!.

- index.html

  - Enter point to Vue App.
  - Into this file we can install styles files and other thigs that your App needs.

- env.d.ts

  - File for environment's definitions. Don't touch it!.

- .prettierrc.json

  - Configuration file for Prettier.
  - Applicate write and formaf rules to all Typescript files.
  - Please, change value to trailingComma to all, like this: "trailingComma": "all".
    - This rule put the comma to end of objects.
  - And the value for "semi", change to true, like this: "semi": true.
    - Tis rule put the semicolon to end of Typescript instruction.

- .gitignore

  - List of files and directories that will not be uploaded to GitHub or GitLab.

- .eslintrc.cjs

  - Configuration file for Linter.
  - Rules for Vue components.

- src folder or directory

  - Work folder where we create our App.
  - main.ts
    - File where build the App starts along with the index.html.
    - In this file we can import globals styles for the App.
  - assets folder include files needers for App
  - components folder we create the necesary components for App.

- public is the folder for necesary statics resources that will be part of App.
- node_modules is the folder where place for all dependencies. Don't touch it!.
