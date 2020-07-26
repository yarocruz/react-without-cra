# React without Create React App

This is an exercise in starting a React based project without using the [create-react-app cli](https://create-react-app.dev/) and to get reacquainted with [Webpack](https://webpack.js.org/).

## What is Webpack Even?

The simplest way to describe what Webpack is, is by explaining what it does, which their home page does an excellent job at explaining visually. It just takes different files and bundles them up into one main file. That's easy to understand. However, Webpack and it's eco-system does a bit more than that, which makes it a bit difficult for people to get into, at least beyond the basics. Their documentation is dense, but the more you play around with it, the less intimidating it becomes. It also requires you to have a solid understanding of modules, Node.js, NPM, the package.json file, command line applications, and how all these work together. In terms of a library like React for example, the create-react-app cli uses Webpack behind the hood to configure what I did manually. It converts all those "import Something from 'something'" statements into CommonJS require statements, ES6 into older JS syntax that is supported by most of the browsers, and for react in particular in converts the JSX syntax into their valid React.createElement calls. 

## Resources 
 - [Webpack](https://webpack.js.org/concepts/)
 - [Webpack Crash Course](https://www.youtube.com/watch?v=lFjinlwpcHY&t=183s)
 - [Create App - Front End Config Generator](https://createapp.dev/)