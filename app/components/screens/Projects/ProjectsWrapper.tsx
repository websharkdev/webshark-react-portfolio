import { Grid, styled } from '@mui/material'
import { motion, useSpring, useTransform, useViewportScroll } from 'framer-motion'
import { FC, useCallback, useLayoutEffect, useRef, useState } from 'react'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({}))

export const ProjectsWrapper: FC<Props> = (props) => {
  const scrollRef = useRef(null)
  const ghostRef = useRef(null)
  const [scrollRange, setScrollRange] = useState(0)
  const [viewportW, setViewportW] = useState(0)

  useLayoutEffect(() => {
    // @ts-ignore
    scrollRef && setScrollRange(scrollRef!.current!.scrollWidth)
  }, [scrollRef])

  const onResize = useCallback((entries: any) => {
    for (let entry of entries) {
      setViewportW(entry.contentRect.width)
    }
  }, [])

  useLayoutEffect(() => {
    const resizeObserver = new ResizeObserver((entries) => onResize(entries))
    // @ts-ignore
    resizeObserver.observe(ghostRef!.current)
    return () => resizeObserver.disconnect()
  }, [onResize])

  const { scrollYProgress } = useViewportScroll()
  const transform = useTransform(scrollYProgress, [0, 1], [0, -scrollRange + viewportW])
  const physics = { damping: 15, mass: 0.27, stiffness: 55 }
  const spring = useSpring(transform, physics)
  return (
    <Root container>
      <div className="projects_wrapper">
        <div className="scroll-container">
          <motion.section ref={scrollRef} style={{ x: spring }} className="thumbnails-container">
            <div className="thumbnails">
              <div className="thumbnail" />
              <div className="thumbnail" />
              <div className="thumbnail" />
              <div className="thumbnail" />
              <div className="thumbnail" />
              <div className="thumbnail" />
            </div>
          </motion.section>
        </div>
        <div ref={ghostRef} style={{ height: scrollRange }} className="ghost" />
      </div>
    </Root>
  )
}
