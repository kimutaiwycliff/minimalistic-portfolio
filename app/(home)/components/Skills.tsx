'use client';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import Title from './Title';
import { skills } from '@/utils/data';
import { useRef } from 'react';
import { useInView } from 'framer-motion';

const Skills = () => {
  const skillRef = useRef<HTMLDivElement>(null);
  const isSkillInView = useInView(skillRef, { margin: '-100px' });
  return (
    <div className="max-w-5xl mx-auto px-8" ref={skillRef}>
      <Title
        text="Skills 🔪"
        className={`flex flex-col items-center justify-center -rotate-6 ${
          isSkillInView ? 'animate-move-left-fast' : ''
        }`}
      />

      <HoverEffect
        items={skills}
        className={isSkillInView ? 'animate-move-left-slow' : ''}
      />
    </div>
  );
};
export default Skills;
