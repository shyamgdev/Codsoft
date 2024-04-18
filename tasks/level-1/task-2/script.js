// NOT USABLE 


const projects = [
  {
    title: "Calculator",
    img: "./assets/calculator.png",
    githubRepo: "https://github.com/shyamgdev/Codsoft/tree/main/tasks/level-1/task-3",
    liveUrl: "https://codsoft.netlify.app/tasks/level-1/task-3/"
  },
  {
    title: "Currency convertor",
    img: "./assets/currency-convertor.png",
    githubRepo: "https://github.com/shyamgdev/TechnoHacks/tree/main/tasks/task-1",
    liveUrl: "https://technohacksinternship.netlify.app/tasks/task-1/"
  },
  {
    title: "Admission Portal",
    img: "./assets/admission-portal.png",
    githubRepo: "https://github.com/shyamgdev/Admission-Portal",
    liveUrl: "https://admission-portal-1.onrender.com"
  },
  {
    title: "Netflix Clone",
    img: "./assets/netflix-clone.png",
    githubRepo: "https://github.com/shyamgdev/Codsoft/tree/main/tasks/level-1/task-1",
    liveUrl: "https://codsoft.netlify.app/tasks/level-1/task-1"
  },
  {
    title: "Schedulemywork - Google Keep Clone",
    img: "./assets/schedulemywork.png",
    githubRepo: "https://github.com/shyamgdev/Schedulemywork",
    liveUrl: "http://schedulemywork.netlify.app"
  },
  {
    title: "SonLiv Clone",
    img: "./assets/sonyliv-clone.png",
    githubRepo: "https://github.com/shyamgdev/OctaNet/tree/main/tasks/task-3",
    liveUrl: "https://shyamgdev.github.io/OctaNet/tasks/task-3"
  },
  {
    title: "FreeXGames",
    img: "./assets/freexgames.png",
    githubRepo: "https://github.com/shyamgdev/FreeXGames",
    liveUrl: "https://freexgames.netlify.app"
  },
  {
    title: "Youtube Clone",
    img: "./assets/youtube-clone.png",
    githubRepo: "https://github.com/shyamgdev/Youtube-clone-with-dark-mode",
    liveUrl: "https://shyamgdev.github.io/Youtube-clone-with-dark-mode"
  },
];

const projectsElem = document.getElementById("projects");

let data = "";

projects.forEach((project) => {
  data += `<div class="relative group/card max-w-[25rem]">
    <img class="rounded-md" src="${project.img}" alt="${project.title}">
    <div
      class="h-0 group-hover/card:h-full absolute top-0 left-0 right-0 m-auto flex flex-col items-center justify-center space-y-2 transition-all duration-500 overflow-hidden bg-[#271762]/40">
      <h2>${project.title}</h2>
      <div class="flex flex-row space-x-2">
        <button>
          <a href="${project.githubRepo}"
            target="_blank">Github Repo</a>
        </button>
        <button>
          <a href="${project.liveUrl}" target="_blank">Demo</a>
        </button>
      </div>
    </div>
  </div>`;
});
projectsElem.innerHTML = data;