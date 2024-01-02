'use client';

import React from 'react';
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
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { projectsData } from '@/lib/data';
import { Button } from './ui/button';
import Link from 'next/link';

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
            <Carousel
              opts={{
                align: 'start',
                loop: true,
              }}
              className="w-full">
              <CarouselContent>
                {projectsData.map((item) => (
                  <CarouselItem key={item.title}>
                    <Card key={item.title} className="shadow-lg">
                      <CardHeader>
                        <CardTitle className="text-center">
                          {item.title}
                        </CardTitle>
                        <CardDescription className="text-center">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-2 w-full">
                        <Image
                          src={item.imageUrl}
                          alt={item.title}
                          className="w-full sm:w-[60%] md:w-full h-auto mx-auto"
                        />
                      </CardContent>
                      <CardFooter className="flex flex-col justify-center items-center gap-4">
                        <div className="flex gap-2">
                          {item.tags.map((tag) => (
                            <span key={tag} className="text-xs sm:text-sm">
                              {tag}
                            </span>
                          ))}
                        </div>
                        <div className="flex justify-center items-center gap-4">
                          <Button variant="link" asChild>
                            <Link
                              href="https://github.com/syjem"
                              target="_blank"
                              className="!text-fuchsia-400">
                              GitHub
                            </Link>
                          </Button>
                          <Button variant="link" asChild>
                            <Link
                              href="https://github.com/syjem"
                              target="_blank"
                              className="!text-blue-400">
                              Preview
                            </Link>
                          </Button>
                        </div>
                      </CardFooter>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </TabsContent>
          <TabsContent value="fullstack">
            <Card>
              <CardHeader>
                <CardTitle>Fullstack Application</CardTitle>
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
