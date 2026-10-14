'use client';
import { Category } from '@/app/api/categories';
import { Project } from '@/app/api/projects';
import { useState } from 'react';
import ProjectCard from '../project-card/project-card';

interface WorkGridProps {
  projects: Project[];
  categories: Category[];
}

export default function WorkGrid({ projects, categories }: WorkGridProps) {
  const [categoryId, setCategoryId] = useState<number>();
  const filters = [{ id: undefined, name: 'All' }, ...categories];
  const visibleProjects = categoryId ? projects.filter((project) => project.categories.includes(categoryId)) : projects;

  return (
    <>
      {/* Black on mobile so the white fixed header stays readable over it */}
      <ul className="w-full flex flex-wrap justify-center md:justify-start gap-x-2 px-2 pt-28 pb-4 md:pt-2 md:pb-2 bg-black text-white md:bg-white md:text-black">
        {filters.map((filter) => (
          <li key={filter.name}>
            <button
              onClick={() => setCategoryId(filter.id)}
              className={`p-2 uppercase cursor-pointer ${categoryId === filter.id ? 'font-semibold' : ''}`}
            >
              {filter.name}
            </button>
          </li>
        ))}
      </ul>
      <div className="w-full gap-0 --grid">
        {visibleProjects.map((project, i) => (
          <ProjectCard project={project} isFirst={i === 0} key={project.id} />
        ))}
      </div>
    </>
  )
}
