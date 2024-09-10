import { projects } from '@/utils/data';
import Title from './Title';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { DirectionAwareHover } from '@/components/ui/direction-aware-hover';
import { Button } from '@/components/ui/moving-border';

const Projects = () => {
  return (
    <div className="py-10 p-5 sm:p-0">
      <Title
        text="Projects 🎨"
        className="flex flex-col items-center justify-center rotate-6"
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 pt-10 gap-5">
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
      </div>
    </div>
  );
};
export default Projects;
