"use strict";
//module and namespace
/*
In TypeScript, both modules and namespaces are used to organize and encapsulate code. However, there are some differences between them:
Both are somewhat similar

===> Namespaces:
* Namespaces are a way to organize code by placing related code into a named container.
* Namespaces are declared using the namespace keyword.
* Namespaces are primarily used for organizing code in older versions of TypeScript and are still supported for backward compatibility.
* Namespaces provide a way to avoid naming conflicts and create a hierarchical structure for code organization.
* Namespaces can be split across multiple files using the /// <reference path="..." /> directive or by using module loaders like CommonJS or AMD.
* Namespaces support the use of the export and import keywords to control the visibility of code outside of the namespace.
* Namespaces are represented as objects in JavaScript and can be accessed using dot notation.

===> Modules:
* Modules are a more modern and recommended way to organize code in TypeScript (as of TypeScript 2.0).
* Modules provide a mechanism for encapsulating code and defining dependencies between different parts of an application.
* Modules are declared using the module, export, and import keywords or by using the ECMAScript 2015 (ES6) import/export syntax.
* Modules have a more standardized and widely supported syntax compared to namespaces.
* Modules are designed for use in both client-side and server-side environments, whereas namespaces are primarily targeted for client-side applications.
* Modules allow for better code reusability and maintainability by clearly defining dependencies and providing a way to import/export functionality.
* Modules support static analysis and tree-shaking, allowing the bundlers and minifiers to optimize the final output size of the code.
* Modules can be organized in a file-based structure, where each module resides in its own file.
*/
var TesterModule;
(function (TesterModule) {
    const x = 23;
    const printer = () => {
        console.log("Hello world");
    };
    class Animals {
        constructor() {
            console.log("Hello i'm animal");
        }
    }
    TesterModule.Animals = Animals;
})(TesterModule || (TesterModule = {}));
(function (TesterModule) {
    const x = 23;
    const printer = () => {
        console.log("Hello world");
    };
    class Junk {
        constructor() {
            console.log("Hello i'm Junky");
        }
    }
    TesterModule.Junk = Junk;
})(TesterModule || (TesterModule = {}));
(function (TesterModule) {
    const x = 23;
    const printer = () => {
        console.log("Hello world");
    };
    class Fruits {
        constructor() {
            console.log("Hello i'm Fruit");
        }
    }
    TesterModule.Fruits = Fruits;
})(TesterModule || (TesterModule = {}));
(function (TesterModule) {
    const x = 23;
    const printer = () => {
        console.log("Hello world");
    };
    class Veges {
        constructor() {
            console.log("Hello i'm Veges");
        }
    }
    TesterModule.Veges = Veges;
})(TesterModule || (TesterModule = {}));
