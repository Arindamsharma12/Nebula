import { formatISODateToReadable } from "@/lib/utils";
import { Project } from "@/state/api";
import React from "react";

type Props = {
  project: Project;
};

const ProjectCard = ({ project }: Props) => {
  return (
    <div className="my-5 rounded border p-4 text-lg shadow">
      <h3 className="font-semibold">
        Project Name: <span className="font-normal">{project.name}</span>
      </h3>
      <p className="font-semibold">
        Project Description:{" "}
        <span className="font-normal">{project.description}</span>
      </p>
      <div className="mt-5 flex gap-4">
        <p className="font-semibold">
          Start Date:{" "}
          <span className="font-normal">
            {project.startDate && formatISODateToReadable(project.startDate)}
          </span>
        </p>
        <p className="font-semibold">
          End Date:{" "}
          <span className="font-normal">
            {project.endDate && formatISODateToReadable(project.endDate)}
          </span>
        </p>
      </div>
    </div>
  );
};

export default ProjectCard;
