'use client';
import { Button } from '@/components/ui/moving-border';
import Link from 'next/link';
import Title from './Title';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <div className="min-h-[80vh] flex flex-col-reverse gap-14 lg:gap-0 lg:flex-row items-center justify-between animate-move-up">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Nice to meet you!👋 <br />
          <span className="underline underline-offset-8 decoration-green-400">
            {"I'm Wycliff Kimutai"}
          </span>
        </h1>
        <p className="md:w-96 lg:w-4/6 text-md text-gray-300">
          As a full-stack web developer, I specialize in pushing
          technology&apos;s boundaries by crafting solutions that are both
          efficient and elegant. With skills in React, Next.js, and Node.js, I
          build dynamic web applications that achieve a perfect balance of
          impact and precision, much like Thanos seeks balance in the universe.
          <br />
          <br />
          My journey into tech started unexpectedly in 2019 during a road
          upgrade project, where I discovered a passion for geospatial data
          analysis. This led me to develop GIS applications and conduct spatial
          analysis, which now informs my approach to creating impactful web
          solutions. Today, I focus on developing high-quality web applications
          and exploring data analytics trends. When not coding, I enjoy
          automating tasks, contributing to open-source projects, and spending
          time with family and friends.
          <br /> <br />
          <span className="italic">
            &ldquo;The hardest choices require the strongest wills.&ldquo; -
            Thanos
          </span>
        </p>
        <Link
          href={'mailto:kcliff@tutanota.com'}
          className="inline-block group"
        >
          <Title text="Contact Me 📬" />
        </Link>
      </div>
      <div className="relative">
        <div className="w-72 h-72 space-y-3 -rotate-[30deg] relative">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-400"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-400"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-400"></div>
            <div className="w-32 h-32 rounded-full bg-green-400"></div>
          </div>
          <div className="glow absolute top-[40%] right-1/2 -z-10"></div>
        </div>
        <motion.div
          className="absolute bottom-5 sm:bottom-14 left-0 sm:-left-10"
          initial={{ x: '900px' }}
          animate={{ x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <Button borderRadius="0.5rem" className="p-3 font-semibold">
            <p>🔇 Available for work</p>
          </Button>
        </motion.div>
      </div>
    </div>
  );
};
export default HeroSection;
