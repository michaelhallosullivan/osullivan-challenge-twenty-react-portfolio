import React from 'react';

export default function Portfolio() {
  const projects = [
    {
      title: "Movie Finder",
      img: "./assets/images/project1.png",
      github: "https://github.com/michaelhallosullivan/osullivan-project-one-trailer-finder",
      deployed: "https://michaelhallosullivan.github.io/osullivan-project-one-trailer-finder/"
    },
    {
      title: "Minecraft Guide",
      img: "./assets/images/minecraft-screenshot.png",
      github: "https://github.com/Corey-Carpenter/minecraft-crafting-recipe-guide",
      deployed: "https://minecraft-crafting-recipes-b8ba8c8afeec.herokuapp.com/api/users/login"
    },
    {
      title: "Password Generator",
      img: "./assets/images/password-generator.jpg",
      github: "https://github.com/michaelhallosullivan/osullivan-challenge-three-password-generator",
      deployed: "https://michaelhallosullivan.github.io/osullivan-challenge-three-password-generator/"
    },
    {
      title: "Note Taker",
      img: "./assets/images/note-taker.jpg",
      github: "https://github.com/michaelhallosullivan/osullivan-challenge-eleven-note-taker",
      deployed: "https://challenge-eleven-note-taker.herokuapp.com/"
    },
    {
      title: "Scheduler",
      img: "./assets/images/scheduler-screenshot.jpg",
      github: "https://github.com/michaelhallosullivan/osullivan-challenge-five-scheduler",
      deployed: "https://michaelhallosullivan.github.io/osullivan-challenge-five-scheduler/"
    },  
    {
      title: "LOTR Quiz",
      img: "./assets/images/challenge-four-screenshot.jpg",
      github: "https://github.com/michaelhallosullivan/osullivan-challenge-four-lotr-quiz",
      deployed: "https://michaelhallosullivan.github.io/osullivan-challenge-four-lotr-quiz/"
    }
  ];

  const projectCard = projects.map((project) => 
        <div class="col-4 p-5">
            <p class="display-6 text-center">{project.title}</p>
            <img class="rounded border border-dark img-fluid" src={project.img}/>
            <div class="pt-3 d-flex justify-content-around">
              <a class="p-2 col-3 btn btn-dark" role="button" href={project.github}>Github</a>
              <a class="p-2 col-3 btn btn-dark" role="button" href={project.deployed}>Deployed</a>
            </div>
        </div>
      );

  return (
    <section class="p-5 bg-2">
      <div class="row">
        {projectCard}
      </div>
    </section>
  );
}
