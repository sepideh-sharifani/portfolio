import { ProjectType } from '@/shared/types'
import image1 from '@/assets/projects/image1.png';
import image2 from '@/assets/projects/image2.png';
import image3 from '@/assets/projects/image3.png';
import image4 from '@/assets/projects/image4.png';
import image5 from '@/assets/projects/image5.png';
import image6 from '@/assets/projects/image6.png';
import image7 from '@/assets/projects/image7.png';
import image8 from '@/assets/projects/image8.png'
import image10 from '@/assets/projects/image10.png'
import image9 from '@/assets/projects/image9.png'
import epay1 from '@/assets/projects/epay/epay1.png'
import epay2 from '@/assets/projects/epay/epay2.png'
import epay3 from '@/assets/projects/epay/epay3.png'
import epay4 from '@/assets/projects/epay/epay4.png'
import academy1 from '@/assets/projects/academy/academy1.png'
import academy2 from '@/assets/projects/academy/academy2.png'
import academy3 from '@/assets/projects/academy/academy3.png'
import omg1 from '@/assets/projects/OMG/omg1.png'
import omg2 from '@/assets/projects/OMG/omg2.png'

const projectsData: Array<ProjectType> = [

    {
        id: 1,
        name: "Epay Ecommerce App",
        description: " 	Designed and developed a Ecommerce website containing product page and cart page using nextjs, nextAuth, react, redux, mongoDB Atlas along with interactive and responsive UIs using Sass. Using github for the development.",
        link1: "https://github.com/sepideh-sharifani/Epay",
        link2: "https://epay-7ipja042v-sepideh-sharifani.vercel.app/",
        image: image8,
        image1: epay1,
        image2: epay2,
        image3: epay3,
        image4: epay4,
        categories: ["nextjs", "sass", "react"],
        TechStack: "nextjs, React, Redux, JSX, Sass, Formik, Yup, yarn, git"
    },
    {
        id: 2,
        name: "Bamboo Academy",
        link1: "https://github.com/sepideh-sharifani/BambooAcademy",
        image: image10,
        image1: academy1,
        image2: academy2,
        image3: academy3,
        categories: ["nextjs", "tailwind", "react", "typescript"],
        description: " 	Designed and developed an app with React, Functional Component, TypeScript along with responsive interactive UIs.  	Using Trello and github for the development",
        TechStack: "React,nextjs, JSX,TypeScript, TailwindCSS, React-Router-Dom, Formik, Yup, npm"
    },
    {
        id: 3,
        name: "Chat Massenger",
        link1: "https://github.com/sepideh-sharifani/Chat-Messenger",
        image: image9,
        image1: omg1,
        image2: omg2,
        categories: ["tailwind", "react", "typescript"],
        description: "Designed and developed an app with React, Functional Component, TypeScript and JSON server along with interactive UIs. Using github for the development.",
        TechStack: "React, JSX,TypeScript, Context api, TailwindCSS"
    },
    {
        id: 4,
        name: "Dashboard",
        link1: "https://github.com/sepideh-sharifani/CSS-Dashboard",
        image: image5,
        categories: ["javascript"],
        description: " 	Practiced concepts of html,css,JavaScript and chartJS, while enabling the dark mode",
        TechStack: "ChartJS, Html,CSS,JavaScript"
    },
    {
        id: 5,
        name: "To Do List",
        link1: "https://github.com/sepideh-sharifani/TodoList-ModularJS",
        image: image4,
        categories: ["javascript"],
        description: "Designed and developed an app using modularJS, css",
        TechStack: "Html,CSS,JavaScript"
    },
    {
        id: 6,
        name: "Real State",
        link1: 'https://github.com/sepideh-sharifani/realEstate-landingPage-Tailwind',
        image: image7,
        categories: ["tailwind"],
        description: " 	Practiced the basic concepts of tailwindCSS",
        TechStack: "Tailwind, Html"
    },
    {
        id: 7,
        name: "Rocket",
        image: image2,
        link1: 'https://github.com/sepideh-sharifani/Rocket',
        description: " 	Practicing basics of javascript and css",
        categories: ["javascript"],
        TechStack: "Html, css, javascript",
    },
    {
        id: 8,
        name: "Tic-Tac-Toe",
        link1: 'https://github.com/sepideh-sharifani/Tic-Tac-Toe',
        image: image3,
        categories: ["javascript"],
        description: " 	Practicing basics of javascript and css",
        TechStack: "Html, css, javascript"
    },


    {
        id: 9,
        name: "Roll the Dice",
        link1: 'https://github.com/sepideh-sharifani/roll-the-dice',
        image: image6,
        categories: ["javascript"],
        description: " 	Practicing basics of javascript and css",
        TechStack: "Html, css, javascript"
    },
]

export default projectsData
