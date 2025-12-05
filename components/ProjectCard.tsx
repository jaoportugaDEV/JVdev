"use client";

import { motion } from "framer-motion";
import { Project } from "@/data/projects";
import ProjectIcon from "./ProjectIcon";

interface ProjectCardProps {
  project: Project;
  index: number;
  onClick: () => void;
}

export default function ProjectCard({
  project,
  index,
  onClick,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden"
    >
      {/* Icon Container with Gradient */}
      <div className={`relative h-64 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
        {/* Decorative Circles */}
        <div className="absolute -top-10 -right-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-white/10 rounded-full blur-2xl"></div>
        
        {/* Icon */}
        <div className="absolute inset-0 flex items-center justify-center text-white">
          <div className="transform group-hover:scale-110 transition-transform duration-300 drop-shadow-2xl">
            <ProjectIcon icon={project.icon} className="w-32 h-32 drop-shadow-2xl" />
          </div>
        </div>

        {/* Stats Overlay */}
        {project.stats && (
          <div className="absolute bottom-0 left-0 right-0 p-4 bg-black/40 backdrop-blur-md">
            <div className="grid grid-cols-3 gap-2 text-white text-center">
              {project.stats.map((stat) => (
                <div key={stat.label}>
                  <div className="text-2xl font-bold drop-shadow-lg">{stat.value}</div>
                  <div className="text-xs font-medium drop-shadow-md">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <p className="text-white font-semibold text-lg">
            Clique para ver mais detalhes
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center gap-3 mb-3">
          <span className="px-3 py-1 bg-primary-blue/10 text-primary-blue text-sm font-semibold rounded-full">
            {project.category}
          </span>
        </div>
        <h3 className="text-2xl font-bold text-gray-900 mb-2 group-hover:text-primary-blue transition-colors">
          {project.title}
        </h3>
        <p className="text-gray-600 mb-4">{project.subtitle}</p>
        <p className="text-gray-700 line-clamp-3">{project.description}</p>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.slice(0, 3).map((tech) => (
            <span
              key={tech}
              className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
            >
              {tech}
            </span>
          ))}
          {project.technologies.length > 3 && (
            <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded">
              +{project.technologies.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
}

