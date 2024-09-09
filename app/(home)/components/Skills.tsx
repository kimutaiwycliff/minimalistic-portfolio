'use client';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import Title from './Title';
import { skills } from '@/utils/data';

const Skills = () => {
  return (
    <div className="max-w-5xl mx-auto px-8">
      <Title
        text="Skills 🔪"
        className="flex flex-col items-center justify-center -rotate-6"
      />
      <HoverEffect items={skills} />
    </div>
  );
};
export default Skills;
