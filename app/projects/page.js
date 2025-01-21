import React from "react";
import Project from "@/components/Project";

const ProjectsPage = () => {
  const projects = [
    {
      id: 1,
      title: "Planetaria",
      description: "This is a description of project 1.",
      image:
        "https://res.cloudinary.com/djws6cbsg/image/upload/v1737157003/IMG_3598_je6hhk.jpg",
      link: "https://www.munaa.dev",
    },
    {
      id: 2,
      title: "Planetaria 1",
      description: "This is a description of project 1.",
      image:
        "https://res.cloudinary.com/djws6cbsg/image/upload/v1737157003/IMG_3598_je6hhk.jpg",
      link: "https://www.munaa.dev",
    },
    {
      id: 3,
      title: "Planetaria 1",
      description: "This is a description of project 1.",
      image:
        "https://res.cloudinary.com/djws6cbsg/image/upload/v1737157003/IMG_3598_je6hhk.jpg",
      link: "https://www.munaa.dev",
    },
    {
      id: 4,
      title: "Planetaria 1",
      description: "This is a description of project 1.",
      image:
        "https://res.cloudinary.com/djws6cbsg/image/upload/v1737157003/IMG_3598_je6hhk.jpg",
      link: "https://www.munaa.dev",
    },
    {
      id: 5,
      title: "Planetaria 1",
      description: "This is a description of project 1.",
      image:
        "https://res.cloudinary.com/djws6cbsg/image/upload/v1737157003/IMG_3598_je6hhk.jpg",
      link: "https://www.munaa.dev",
    },
  ];
  return (
    <div className="pb-5 pt-5">
      <div>
        <h1 className="text-2xl text-center pb-5 md:text-5xl md:text-start">I am working great and enjoy.</h1>
        <p className="text-xl text-center md:text-start">
          I’ve worked on tons of little projects last year. My last year was amazing.
        </p>
      </div>
      <div className="mt-5">
        <h2 className="text-2xl font-bold text-center mb-5 underline underline-offset-8 cursor-pointer md:text-5xl transition ease-in-out delay-150 hover:text-gray-500">Amazing projects</h2>
        <div className="grid grid-cols-1 justify-items-center gap-5 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectsPage;
