"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: "⚡",
      title: "Rápido e Eficiente",
      description: "Soluções otimizadas que economizam tempo e recursos",
    },
    {
      icon: "🎯",
      title: "Focado em Resultados",
      description: "Cada projeto é desenvolvido pensando no seu sucesso",
    },
    {
      icon: "🚀",
      title: "Tecnologia Moderna",
      description: "Usando as melhores ferramentas e práticas do mercado",
    },
    {
      icon: "💡",
      title: "Soluções Personalizadas",
      description: "Cada cliente é único e merece uma solução sob medida",
    },
  ];

  return (
    <section ref={ref} className="py-20 bg-white" id="sobre">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Sobre o <span className="text-gradient">JV Dev</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Especializado em criar soluções digitais que{" "}
            <strong>resolvem problemas reais</strong>. Do planejamento à
            entrega, trabalho junto com você para transformar sua ideia em uma
            ferramenta poderosa que automatiza processos e impulsiona seu
            negócio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gradient-to-br from-primary-blue/5 to-primary-cyan/5 p-8 rounded-2xl hover:shadow-xl transition-shadow duration-300 border border-primary-blue/10"
            >
              <div className="text-5xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-16 bg-gradient-to-r from-primary-blue to-primary-cyan p-8 md:p-12 rounded-3xl text-white text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-4">
            Elimine trabalho manual e ganhe mais tempo
          </h3>
          <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
            Imagine resolver os problemas da sua empresa direto do celular, sem
            precisar de nada manual. É isso que eu faço: crio sistemas que
            funcionam para você.
          </p>
        </motion.div>
      </div>
    </section>
  );
}

