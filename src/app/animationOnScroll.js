"use client"

import { InView } from "react-intersection-observer"

export default function AnimationOnScroll({
  children,
  classNameInView,
  classNameNotInView,
  className,
  percentage
}) {
  return (
    <InView triggerOnce threshold={percentage}>
      {({ inView, ref, entry }) => (
        <div
          ref={ref}
          className={`${className} ${inView ? classNameInView : classNameNotInView}`}
        >
          {children}
        </div>
      )}
    </InView>
  )
}