Terminal

//In this Project Vite is used instead of Create-React-App
1. npm create vite@latest
   project name
   react
   typescript

2. npm install

//framer motion is used to have some animation
//heroicons is made by tailwind group which is similar to MUI icons
3. npm i framer-motion react-anchor-link-smooth-scroll@1.0.12 @heroicons/react

//installing some devDependancy (they will be in development but not on the finall project)
//number one is done to inform typescript about the types that are used in this particular package
4. npm i -D @types/react-anchor-link-smooth-scroll@1.0.2 @types/node 


//Installing tailwind with the vite 
5. https://tailwindcss.com/docs/guides/vite

//using prettier as an extention and installing the tailwind plugin into vite will format the classes in particular order
6. npm i -D prettier prettier-plugin-tailwindcss


prettier.config.cjs
//create this file
//in the file write this text
1. module.exports = { plugins: [require("prettier-plugin-tailwindcss")]}


Vite configuration (vite.config.ts)

//in order to avoid ../../../src and using @ (meaning from src) we need some configuration here
// PATH comes from types/node that was installed
1. import path from 'path'
// under plugins this text must be written
2. resolve : { alias : [{ find : "@", replacement: path.resolve(__dirname, "src")}]}


Typescript configuration (tsconfig.json)

//under compilerOptions this text must be written
//we write this to use the imports like mentioned 
1."paths" : {"@/*" : ["./src/*"]}

