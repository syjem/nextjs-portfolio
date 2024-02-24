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
import Autoplay from 'embla-carousel-autoplay';

const ProjectCarousel = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 3000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
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
                <CardTitle className="text-center mb-2 text-slate-100">
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
                  className="w-full xs:w-[65%] md:w-[80%] h-auto mx-auto cursor-pointer hover:scale-105 transition-transform"
                />
              </CardContent>
              <CardFooter className="flex flex-col justify-center items-center gap-4">
                <div className="flex gap-2">
                  {item.tags.map((tag, index) => (
                    <Image
                      key={index}
                      src={tag}
                      alt="Logo"
                      className="w-[22px] h-[22px]"
                    />
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
      <CarouselNext className="hidden sm:flex" />
    </Carousel>
  );
};

export default ProjectCarousel;
