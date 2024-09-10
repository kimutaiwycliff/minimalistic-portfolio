'use client';
import { projects } from '@/utils/data';
import Title from './Title';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
import { Button } from '@/components/ui/moving-border';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Projects = () => {
  const expRef = useRef<HTMLDivElement>(null);
  const isExpInView = useInView(expRef, { margin: '-100px' });
  return (
    <div className="py-10 p-5 sm:p-0" ref={expRef}>
      <motion.div
        initial={{ x: '1200px' }}
        animate={isExpInView ? { x: 0 } : {}}
        transition={{ delay: 0.05 }}
      >
        <Title
          text="Projects 🎨"
          className="flex flex-col items-center justify-center rotate-6"
        />
      </motion.div>
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 pt-10 gap-5"
        initial={{ x: '1400px' }}
        animate={isExpInView ? { x: 0 } : {}}
        transition={{ delay: 0.1 }}
      >
        {projects.map((project, index) => {
          return (
            <Link key={index} href={project.link}>
              <Button duration={8000}>
                <div className={cn('p-5 rounded-md')}>
                  <DirectionAwareHover
                    imageUrl={project.cover}
                    className="w-full space-y-5 cursor-pointer"
                  >
                    <div className="space-y-5">
                      <h1 className="text-2xl font-bold">{project.title}</h1>
                      <div className="flex items-center gap-5">
                        {project.techStack.map((tech, index) => {
                          const Icon = tech;
                          return <Icon key={index} className="w-8 h-8" />;
                        })}
                      </div>
                    </div>
                  </DirectionAwareHover>
                </div>
              </Button>
            </Link>
          );
        })}
      </motion.div>
    </div>
  );
};
export default Projects;
