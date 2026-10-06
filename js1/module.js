A JavaScript module is simply a single JavaScript file.
Before modules were introduced in ES6 (2015), all JavaScript on a web page shared the same global "scope." 
If you declared a variable named user in one file, it could accidentally overwrite a user variable in another file. 
Modules fix this by keeping everything inside the file private by default.
To share code between modules, you must explicitly export what you want to share from one file, and import it into another.
1. Exporting Code (Giving access)
You can export variables, functions, or classes. There are two ways to do this:
Named Exports
Use this when you want to export multiple specific things from a file.



JavaScript
// utils.js
export const pi = 3.14159;

export function add(a, b) {
  return a + b;
}


Default Exports
Use this when a file only does one main thing (like a single component or class). A file can only have one default export.



JavaScript
// User.js
export default class User {
  constructor(name) {
    this.name = name;
  }
}


2. Importing Code (Receiving access)
To use the code you exported, you import it into a new file.
Importing Named Exports
You must use curly braces {} and the exact names you used when exporting.



JavaScript
// main.js
import { pi, add } from './utils.js';

console.log(pi); // 3.14159
console.log(add(2, 3)); // 5


Importing Default Exports
You do not use curly braces, and you can name the import whatever you want (though it's best practice to keep it consistent).



JavaScript
// main.js
import User from './User.js';

const myUser = new User("Alice");


3. Using Modules in HTML
If you are running JavaScript directly in a browser (without a bundler like Webpack or Vite), you must tell the HTML file that your script is a module. 
Otherwise, the browser won't understand the import and export keywords.



HTML
<!-- The type="module" attribute is required -->
<script type="module" src="main.js"></script>


See the Flow in Action
This interactive diagram illustrates how a central script pulls in specific pieces of code from independent module files:
