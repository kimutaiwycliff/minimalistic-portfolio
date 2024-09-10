'use client';
import { HoverEffect } from '@/components/ui/card-hover-effect';
import Title from './Title';
import { skills } from '@/utils/data';
import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const skillRef = useRef<HTMLDivElement>(null);
  const isSkillInView = useInView(skillRef, { margin: '-100px' });
  return (
    <div className="max-w-5xl mx-auto px-8" ref={skillRef}>
      <motion.div initial={{x:'-1200px'}} animate={isSkillInView? {x:0}: {}} transition={{delay: 0.05}}>
        <Title
          text="Skills 🔪"
          className="flex flex-col items-center justify-center -rotate-6"
        />
      </motion.div>
      <motion.div initial={{x:'-1400px'}} animate={isSkillInView? {x:0}: {}} transition={{delay: 0.1}}>
        <HoverEffect items={skills} />
      </motion.div>
    </div>
  );
};
export default Skills;
