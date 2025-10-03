import React from "react";

const Projecct = ({ project }) => {
  const {
    title,
    description,
    techStack,
    liveUrl,
    repoUrl,
    image,
    tags,
    year,
    highlights,
  } = project;

  return (
    <div className="light:bg-white dark:bg-gray-800 shadow-lg rounded-xl border border-gray-300 dark:border-gray-700 overflow-hidden transform hover:scale-105 transition-transform duration-300">
      {/* Project Image */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-[250px] object-cover rounded-t-xl scale-95 hover:scale-100 transition-transform duration-300 cursor-pointer"
        />
      </div>

      {/* Project Content */}
      <div className="p-4 space-y-3">
        {/* Tags */}
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="text-sm font-semibold font1 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500"
            >
              #{tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="font1 text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          {title}
        </h3>

        {/* Optional: Description */}
        {description && (
          <p className="light:text-gray-700 dark:text-gray-300 text-sm lg:text-base">
            {description}
          </p>
        )}

        {/* Optional: Tech Stack */}
        {techStack && (
          <div className="flex flex-wrap gap-2 mt-2">
            {techStack.map((tech, idx) => (
              <span
                key={idx}
                className="text-xs px-2 py-1 rounded light:bg-gray-200 dark:bg-gray-700 light:text-gray-800 dark:text-gray-200"
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        {/* Optional: Links */}
        <div className="flex gap-4 mt-3">
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-cyan-400 hover:underline text-sm font-medium"
            >
              Live Demo
            </a>
          )}
          {repoUrl && (
            <a
              href={repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 dark:text-cyan-400 hover:underline text-sm font-medium"
            >
              GitHub Repo
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projecct;
