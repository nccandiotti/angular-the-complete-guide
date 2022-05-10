# AngularFirstApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

# angular-the-complete-guide

# Notes

- main TS starts and boostraps (passes app.modul.ts) as an argument

### Components

- root component holds app, other components are nested in the app component
- each component has its own template, html, styling, and own logic - separation of concerns
- all app related content lives in app folder
- a component is a typescript class that angular can instantiate
- class decorators enhance components
  - attatched by adding @ infront of them and importing them at the type so that it is known to typescript (i.e., import { Component } from '@angular/core';)
- angular uses components to build web pages and modules to "bundle" them into packages

### decorators

- attatched by adding @ and importing at top of file
- informaton stored as metadata that tells angular what to do with the class
  configure by passing JS object
- has **selector** which is what allows you to use it in other components
- has **templateUrl** that points to the html file for that component with a **relative path**

### modules

- just creating the file is not enough, components need to be "registered" in the AppModule
- it needs to be registered in the "declarations" within the AppModule; for TypeScript to find it, the component also needs to be imported at the top. Write the file path **_without_** .ts extension on the end

### custom Components

- once a component is added to the module, you can use it as a custom component by creating a custom tag

  - i.e. <app-server> </app-server>
  - above will display that component

### Creating components in CLI

- **LEAVE NG SERVER RUNNING - IMPORTANT**
- in CLI : ng g c (ng generate component)
  - creates component ts file, html, spec, and css (4 files)
  - also adds to declarations in AppModule, double check though

### Component Templates

- template property is mandatory at all times
- inline or point to external file
- can either link templateUrl to path of html file OR in "" put html code in the file. If it's multiline, use backticks and template expressions

### Component Styles

- traditional css in that components name.component.css file
- in stylesUrl can also reference multiple style sheet
- can ALSO eliminate styleUrls property and make a styles(plural) property, in array can write strings of inline styles
- **cannot use inline and external files**

### Selectors

- should be **unique**
- cannot select by id or pseudoselectors
- typically create elements and select by elements
