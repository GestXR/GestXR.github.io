import React from 'react'
import AnimationOnScroll from './AnimationOnScroll'

export default function VideoEmbed({c}) {
  return (
    <div className="my-8 relative flex flex-col items-center" >
      <AnimationOnScroll
        className="w-full group transition-all duration-[500ms] ease-out"
        classNameInView="opacity-100"
        classNameNotInView="opacity-0"
        percentage={0}
      >
        <iframe className="rounded-xl w-full aspect-video outline-[1px] outline-zinc-950" src={c.fuente} title={c.nobmre} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
      </AnimationOnScroll>
    </div >
  )
}
