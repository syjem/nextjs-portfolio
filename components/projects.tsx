'use client';

import React, { useRef } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { useSectionInView } from '@/hooks/useSectionInView';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import ProjectCarousel from './carousel';

const Projects = () => {
  const { ref } = useSectionInView('Projects', 0.3);

  return (
    <section
      ref={ref}
      id="projects"
      className="pt-10 w-full max-w-5xl mx-auto mt-4 sm:mt-20 scroll-mt-24 px-4">
      <motion.h2
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0, transition: { delay: 0.05 } }}
        className="text-center text-xl sm:text-2xl my-4 mb-12 font-bold text-slate-700 dark:text-fuchsia-50">
        Projects
      </motion.h2>

      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0, transition: { delay: 0.05 } }}
        viewport={{
          once: true,
        }}>
        <Tabs defaultValue="designs" className="w-full sm:w-1/2 mx-auto">
          <TabsList className="grid w-full grid-cols-2 gap-2 dark:shadow-md mb-8 dark:bg-transparent">
            <TabsTrigger value="designs">Front-End/Designs</TabsTrigger>
            <TabsTrigger value="fullstack">Fullstack</TabsTrigger>
          </TabsList>
          <TabsContent value="designs" className="w-full">
            <ProjectCarousel />
          </TabsContent>
          <TabsContent value="fullstack">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">
                  Fullstack Applications
                  <p className="text-muted-foreground text-lg mt-4">
                    Coming soon...
                  </p>
                </CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent className="space-y-2"></CardContent>
              <CardFooter></CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </motion.div>
    </section>
  );
};

export default Projects;
