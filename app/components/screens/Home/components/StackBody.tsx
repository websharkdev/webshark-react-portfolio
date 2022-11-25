import { wrap } from '@motionone/utils'
import { Box, Grid, Typography, styled } from '@mui/material'
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
} from 'framer-motion'
import { useRef } from 'react'
import { DataProps } from 'shared/types/home'

type Props = {
  data: DataProps
}

const Root = styled(Grid)(({ theme }) => ({
  padding: `${theme.spacing(12)} 0`,
}))
const ParallaxBody = styled(Box)(({ theme }) => ({
  overflow: 'hidden',
  letterSpacing: '-2px',
  lineHeight: 0.8,
  margin: 0,
  padding: `${theme.spacing(3)} 0`,
  display: 'flex',
  whiteSpace: 'nowrap',
  '& .scroller': {
    fontWeight: 600,
    textTransform: 'uppercase',
    fontSize: 64,
    display: 'flex',
    whiteSpace: 'nowrap',
    flexWrap: 'nowrap',
  },
  '& span': {
    display: 'block',
    marginRight: '30px',
  },
}))

interface ParallaxProps {
  children: string
  baseVelocity: number
}

function ParallaxText({ children, baseVelocity = 100 }: ParallaxProps) {
  const baseX = useMotionValue(0)
  const { scrollY } = useScroll()
  const scrollVelocity = useVelocity(scrollY)
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  })
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 5], {
    clamp: false,
  })
  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`)

  const directionFactor = useRef<number>(1)
  useAnimationFrame((t, delta) => {
    let moveBy = directionFactor.current * baseVelocity * (delta / 1000)
    if (velocityFactor.get() < 0) {
      directionFactor.current = -1
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get()

    baseX.set(baseX.get() + moveBy)
  })

  return (
    <ParallaxBody className="parallax">
      <motion.div className="scroller" style={{ x }}>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
        <span>{children}</span>
      </motion.div>
    </ParallaxBody>
  )
}

export const StackBody = ({ data }: Props) => {
  const { stack } = data

  return (
    <Root container rowSpacing={10}>
      <Grid item xs={12} className="stack-section">
        <Typography variant="h4">{stack.section}</Typography>
      </Grid>
      <Grid item xs={12} className="stack-section">
        <ParallaxText baseVelocity={0.5}>{stack.tech_stack}</ParallaxText>
        <ParallaxText baseVelocity={-0.5}>{stack.tech_stack}</ParallaxText>
      </Grid>
    </Root>
  )
}
