'use client'

import { motion } from 'framer-motion'
import Image, { StaticImageData } from 'next/image'
import calent from '../../public/uploads/projects/calent-icon.webp'
import archive from '../../public/uploads/projects/archive-icon.webp'
import StaggeredLink from './StaggeredLink'

type Project = {
    name: string;
    description: string;
    href: string;
    year: string;
    stack: string;
    preview: StaticImageData;
}

const projects: Project[] = [
    {
        name: 'CALENT',
        description: 'A simple calendar app for students, without the clunkiness of the popular ones.',
        href: 'https://calent.xyz',
        year: '2026',
        stack: 'NEXT.JS / TYPESCRIPT',
        preview: calent,
    },
    {
        name: 'PHOTOGRAPHY ARCHIVE',
        description: 'A simple photography portfolio that showcases my work through a sliding carousel of images.',
        href: 'https://photo.mase.zip',
        year: '2025',
        stack: 'NEXT.JS / TYPESCRIPT',
        preview: archive,
    },
]

const Projects = () => {
    return (
        <section id="work" className="w-full min-h-screen flex flex-col justify-center py-16 md:py-24">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5, ease: 'easeInOut' }}
                className="link flex justify-between items-baseline px-5 md:px-9 pb-2 text-base font-bold md:text-sm text-accent transition-colors duration-500"
            >
                <h2>WORK</h2>
                <span>({String(projects.length).padStart(3, '0')})</span>
            </motion.div>

            <div className="border-t border-accent transition-colors duration-500" />

            {projects.map((project, i) => (
                <motion.a
                    key={project.name}
                    href={project.href}
                    target="_blank"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.1 }}
                    className="group block border-b border-white/20 pt-6 pb-4 transition-colors duration-150 hover:bg-accent"
                >
                    <div className="flex justify-between items-baseline px-5 md:px-9">
                        <h3 className="link text-4xl md:text-8xl font-bold uppercase tracking-tight text-white transition-colors duration-150 group-hover:text-[#171717]">
                            {project.name}
                        </h3>
                        <span className="link whitespace-nowrap text-xs font-bold md:text-lg text-accent transition-colors duration-150 group-hover:text-[#171717]">
                            <StaggeredLink>VISIT SITE ↗</StaggeredLink>
                        </span>
                    </div>

                    <div className="px-5 md:px-9 pt-6">
                        <Image
                            src={project.preview}
                            alt={`${project.name} preview`}
                            sizes="(max-width: 896px) 100vw, 896px"
                            className="w-full max-w-4xl h-auto rounded-2xl"
                        />
                    </div>

                    <p className="px-5 md:px-9 pt-6 max-w-2xl text-sm md:text-lg font-bold md:leading-relaxed md:tracking-wide text-white transition-colors duration-150 group-hover:text-[#171717]">
                        {project.description}
                    </p>

                    <div className="link flex justify-between items-baseline px-5 md:px-9 pt-6 text-xs md:text-sm uppercase text-white/60 transition-colors duration-150 group-hover:text-[#171717]">
                        <span>{project.year}</span>
                        <span>{project.stack}</span>
                    </div>
                </motion.a>
            ))}
        </section>
    )
}

export default Projects;
