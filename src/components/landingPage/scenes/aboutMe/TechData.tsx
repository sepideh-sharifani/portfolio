import { TechType } from '@/shared/types'
import css from '@/assets/tech/css.svg';
import js from '@/assets/tech/javascript.svg';
import html from '@/assets/tech/html.svg';
import react from '@/assets/tech/react.svg';
import redux from '@/assets/tech/redux.svg';
import sass from '@/assets/tech/sass.svg';
import tailwind from '@/assets/tech/tailwind.svg';
import git from '@/assets/tech/git.svg';
import nextjs from '@/assets/tech/nextjs.svg';

const TechData: Array<TechType> = [
    {
        name: "HTML",
        image: html,
    },
    {
        name: "CSS",
        image: css,
    },
    {
        name: "JavaScript",
        image: js,
    },
    {
        name: "Sass",
        image: sass,
    },
    {
        name: "Tailwind",
        image: tailwind,
    },
    {
        name: "React",
        image: react,
    },
    {
        name: "Redux",
        image: redux,
    },
    {
        name: "NextJS",
        image: nextjs,
    },
    {
        name: "git",
        image: git,
    },

]

export default TechData