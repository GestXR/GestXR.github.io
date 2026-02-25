import React from 'react';
import AnimationOnScroll from './AnimationOnScroll';
import { Typography } from '@mui/material';
import Image from 'next/image';
import { sanitize } from 'isomorphic-dompurify';

export default function Img({c}) {
  return (
    <AnimationOnScroll
      className="group overflow-clip md:overflow-visible"
      classNameInView="in-view"
      classNameNotInView="not-in-view"
      percentage={0.5}
    >
      <div className="my-8 relative flex flex-col gap-2 transition-all duration-[1000ms] ease-out group-[.in-view]:opacity-100 group-[.in-view]:translate-x-[calc(0)] group-[.not-in-view]:opacity-0 group-[.not-in-view]:translate-x-[calc(-50vw-51%)]">
        <div>
          <Image src={c.fuente} alt={c.alt || "imagen"} width={c.w} height={c.h} priority className="rounded-xl" />
        </div>
        <div>
          <Typography variant="subtitle2" className="text-center text-shadow-lg/70 italic" dangerouslySetInnerHTML={{ __html: sanitize(c.epigrafe) }}></Typography>
        </div>
      </div>
    </AnimationOnScroll>
  )
}
