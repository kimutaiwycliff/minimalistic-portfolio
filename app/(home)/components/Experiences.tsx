'use client';
import { experiences } from '@/utils/data';
import { Timeline } from '@/components/ui/timeline';
import { Button } from '@/components/ui/moving-border';
import { useRef } from 'react';
import { useInView } from 'framer-motion';
import Link from 'next/link';

export const Experiences = () => {
  const expRef = useRef<HTMLDivElement>(null);
  const isExpInView = useInView(expRef, { margin: '-100px' });
  const btnRef = useRef<HTMLDivElement>(null);
  const isBtnInView = useInView(btnRef, { margin: '-100px' });
  const data = experiences.map((item, index) => ({
    title: item.date,
    // spread the rest of the object in content
    content: (
      <div key={index} className="flex flex-col md:flex-col gap-4">
        <div className="w-1/4 md:w-3/6">
          <h1 className="text-lg font-bold text-neutral-500 dark:text-neutral-200">
            {'🤖   '}
            {item.title}
          </h1>
        </div>
        <div className="w-3/4 md:w-5/6">
          <p className="text-neutral-400 text-sm italic dark:text-neutral-400">
            {item.description.map((desc, idx) => (
              <span key={idx} className="block">
                {'✅ '}
                {desc}
              </span>
            ))}
          </p>
        </div>
        <div className="p-1 text-md font-semibold w-fit opacity-70">
          {'🏢   '}
          {item.company}
        </div>
      </div>
    ),
  }));
  return (
    <div
      className="w-full mx-auto px-8 p-20 animate-move-left-slow"
      ref={expRef}
    >
      <div className={isExpInView ? 'animate-move-left-slow' : ''}>
        <Timeline data={data} />
      </div>
      <div ref={btnRef}>
        <Link
          href="/Resume.pdf"
          download={true}
          className={`flex flex-col items-center justify-center -rotate-6 ${
            isBtnInView ? 'animate-move-left-fast' : ''
          }`}
        >
          <Button borderRadius="0.5rem" className="p-3 font-semibold ">
            <p>📝 Get Full CV</p>
          </Button>
        </Link>
      </div>
    </div>
  );
};
