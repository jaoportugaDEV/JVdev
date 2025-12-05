"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Project } from "@/data/projects";
import { useEffect } from "react";
import ProjectIcon from "./ProjectIcon";

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  // Lock scroll when modal is open
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [project]);

  // Close on ESC key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  return (
    <AnimatePresence>
      {project && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 overflow-y-auto">
            <div className="min-h-screen px-4 flex items-center justify-center">
              <motion.div
                initial={{ opacity: 0, scale: 0.9, y: 50 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, y: 50 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="bg-white rounded-3xl shadow-2xl max-w-4xl w-full mx-auto relative"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-6 right-6 w-10 h-10 bg-gray-100 hover:bg-gray-200 rounded-full flex items-center justify-center transition-colors z-10"
                  aria-label="Fechar"
                >
                  <svg
                    className="w-6 h-6 text-gray-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>

                {/* Content */}
                <div className="p-8 md:p-12">
                  {/* Header with Icon */}
                  <div className="mb-8">
                    <div className="flex items-start gap-6 mb-6">
                      {/* Icon with Gradient Background */}
                      <div className={`flex-shrink-0 w-20 h-20 bg-gradient-to-br ${project.gradient} rounded-2xl flex items-center justify-center text-white shadow-lg`}>
                        <ProjectIcon icon={project.icon} className="w-12 h-12" />
                      </div>
                      
                      <div className="flex-1">
                        <div className="flex items-center gap-3 mb-3">
                          <span className="px-4 py-1.5 bg-primary-blue/10 text-primary-blue text-sm font-semibold rounded-full">
                            {project.category}
                          </span>
                        </div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-2">
                          {project.title}
                        </h2>
                        <p className="text-xl text-gray-600">{project.subtitle}</p>
                      </div>
                    </div>

                    {/* Stats Cards */}
                    {project.stats && (
                      <div className="grid grid-cols-3 gap-4 mb-8">
                        {project.stats.map((stat, idx) => (
                          <div
                            key={stat.label}
                            className={`p-6 bg-gradient-to-br ${project.gradient} rounded-xl text-white text-center shadow-lg transform hover:scale-105 transition-transform`}
                          >
                            <div className="text-3xl md:text-4xl font-bold mb-2">
                              {stat.value}
                            </div>
                            <div className="text-sm opacity-90">{stat.label}</div>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>

                  {/* Description */}
                  <div className="mb-8">
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Problem */}
                  <div className="mb-8 p-6 bg-red-50 border-l-4 border-red-500 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-2xl">⚠️</span>
                      Problema Identificado
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {project.problem}
                    </p>
                  </div>

                  {/* Solution */}
                  <div className="mb-8 p-6 bg-green-50 border-l-4 border-green-500 rounded-lg">
                    <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center gap-2">
                      <span className="text-2xl">✅</span>
                      Solução Implementada
                    </h3>
                    <p className="text-gray-700 leading-relaxed">
                      {project.solution}
                    </p>
                  </div>

                  {/* Results */}
                  <div className="mb-8">
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="text-2xl">📊</span>
                      Resultados Alcançados
                    </h3>
                    <ul className="space-y-3">
                      {project.results.map((result, index) => (
                        <li
                          key={index}
                          className="flex items-start gap-3 text-gray-700"
                        >
                          <span className="text-primary-cyan text-xl mt-1">
                            ✓
                          </span>
                          <span className="leading-relaxed">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                      <span className="text-2xl">🛠️</span>
                      Tecnologias Utilizadas
                    </h3>
                    <div className="flex flex-wrap gap-3">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 bg-gradient-to-r from-primary-blue to-primary-cyan text-white font-semibold rounded-lg shadow-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}

