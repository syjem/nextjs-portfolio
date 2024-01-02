import * as React from 'react';

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { projectsData } from '@/lib/data';
import Image from 'next/image';
import { Button } from './ui/button';
import Link from 'next/link';

export function CarouselDemo() {
  return (
    <section className="pt-10 w-full max-w-5xl mx-auto mt-4 sm:mt-20 scroll-mt-24 px-4">
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="w-full max-w-md mx-auto">
        <CarouselContent>
          {projectsData.map((item) => (
            <CarouselItem key={item.title}>
              <Card key={item.title} className="shadow-lg !border-transparent">
                <CardHeader>
                  <CardTitle className="text-center">{item.title}</CardTitle>
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
    </section>
  );
}
