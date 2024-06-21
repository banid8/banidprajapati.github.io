"use client";
// Import necessary modules
import { useParams } from "next/navigation";
import { projects } from "../../data/projects";
import Image from "next/image";
import { AspectRatio } from "@/components/ui/aspect-ratio";

const ProjectPage = () => {
  // Get the project id from the URL params
  const { id } = useParams();

  // Function to find the project based on the id
  const findProjectById = () => {
    // Iterate through each category of projects
    for (const categoryKey of Object.keys(projects)) {
      const categoryProjects = projects[categoryKey];
      // Find the project with matching id in the current category
      const foundProject = categoryProjects.find(
        (project) => project.id === id
      );
      if (foundProject) {
        return foundProject;
      }
    }
    return null; // Return null if project with given id is not found
  };

  // Find the project with the matching id
  const project = findProjectById();

  // If project is not found, render "Project not found" message
  if (!project) {
    return <p>Project not found.</p>;
  }

  // Render the project details if found
  return (
    <main className="flex flex-col px-24">
      <div className="flex justify-between items-center gap-8 my-16">
        <h1 className="text-6xl font-bold">{project.title}</h1>
        <div className="flex gap-8 text-xl">
          {project.github && (
            <a
              href={project.github}
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Source Code
            </a>
          )}
          {project.website && (
            <a
              href={project.website}
              className="text-blue-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Website
            </a>
          )}
        </div>
      </div>
      <div className="grid grid-cols-2 mb-8">
        {project.images.map((src, index) => (
          <div className="w-[450px]">
            <AspectRatio ratio={16 / 9}>
              <Image
                src={src}
                alt={project.title}
                width={1920}
                height={1080}
                className="object-cover h-64 w-96"
              />
            </AspectRatio>
          </div>
        ))}
      </div>
      <p className="text-3xl mb-8 leading-loose text-justify">
        {project.description}
      </p>
    </main>
  );
};

export default ProjectPage;
