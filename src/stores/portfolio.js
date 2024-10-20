import { defineStore } from "pinia";

export const useStore = defineStore("portfolio", {
  // arrow function recommended for full type inference
  state: () => {
    return {
      skills: [
        { id: 1, name: "Vue", link: "https://vuejs.org/" },
        { id: 2, name: "Nuxt", link: "https://nuxt.com/" },
        { id: 3, name: "Pinia", link: "https://pinia.vuejs.org/" },
        { id: 4, name: "React", link: "https://react.dev/" },
        { id: 5, name: "Redux", link: "https://redux.js.org/" },
        {
          id: 6,
          name: "Javascript",
          link: "https://developer.mozilla.org/ru/docs/Web/JavaScript",
        },
        { id: 7, name: "Typescript", link: "https://www.typescriptlang.org/" },
        { id: 8, name: "Tailwindcss", link: "https://tailwindcss.com/" },
        { id: 9, name: "Bootstrap", link: "https://getbootstrap.com/" },
        {
          id: 10,
          name: "Html",
          link: "https://developer.mozilla.org/ru/docs/Learn/Getting_started_with_the_web/HTML_basics",
        },
        {
          id: 11,
          name: "Css",
          link: "https://developer.mozilla.org/ru/docs/Web/CSS",
        },
        { id: 12, name: "Netlify", link: "https://www.netlify.com/" },
        { id: 13, name: "Scss-Sass", link: "https://sass-scss.ru/guide/" },
        { id: 14, name: "Figma", link: "https://www.figma.com/" },
        { id: 15, name: "Git", link: "https://git-scm.com/" },
        { id: 15, name: "Firebase", link: "https://git-scm.com/" },
      ],
      experience: [
        {
          id: 1,
          name: "https://genshtab.by/upload/CPriority/43f/43f02653a9454d321a2c36f0b9dc05b7.svg",
          startDate: "01.08.2021",
          endDate: "22.02.2023",
          position: "Frontend developer",
          responsibilities: [
            "responsive layout from scratch",
            "website development with CMS Bitrix Framework",
            "web application development with support of modern technologies (React,Redux,React-router, Bootstrap 5, Tailwind css)",
            "support for existing projects",
          ],
        },
        {
          id: 2,
          name: "https://belaruskali.by/i/logo.png",
          startDate: "13.03.2023",
          endDate: "11.12.2023",
          position: "Frontend developer",
          responsibilities: [
            "responsive layout from scratch",
            "developing web applications from scratch in Vue 2/Vue 3, Pinia, Tailwind css",
          ],
        },
      ],
    };
  },
});
