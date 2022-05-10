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
- **selectors are what you call the custom component when inserting it in other components**

### Databinding

1. String Interpolation {{ data }} (output data)
2. Property Binding [property]="data (output data)
3. Event Binding (event)="expression" (reaction to user events)
4. Combination of Both: **Two Way Data Binding** [(ngModel)]="data"

### String Interpolation

- only single line expressions or ternarys (no code blocks)
- output _must_ be a string
- Steps

  1. In component.ts, define properties and any methods in the export (bottom of component)
     <img src="./assets/pic1.png">

  2. in component.html, interpolate using {{  }} syntax

     <img src="./assets/pic2.png">
