import React from 'react';
import { Button } from './ui/button';
import Link from 'next/link';

type ProjectLinksProps = {
  githubLink: string;
  previewLink: string;
};

const ProjectLinks = ({ githubLink, previewLink }: ProjectLinksProps) => {
  return (
    <div className="flex justify-center items-center gap-4">
      <Button variant="outline" asChild className="hover:bg-transparent">
        <Link href={githubLink} target="_blank" className="!text-fuchsia-400">
          GitHub
        </Link>
      </Button>
      <Button variant="outline" asChild className="hover:bg-transparent">
        <Link href={previewLink} target="_blank" className="!text-blue-400">
          Preview
        </Link>
      </Button>
    </div>
  );
};

export default ProjectLinks;
