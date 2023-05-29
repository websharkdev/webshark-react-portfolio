import { Grid, Typography, styled, useMediaQuery } from '@mui/material'
import { useInView } from 'react-intersection-observer'
import { ParallaxText } from 'shared/hooks'

type Props = {
  stack: string
  section: string
}

const Root = styled(Grid)(({ theme }) => ({
  paddingBottom: theme.spacing(12),
}))

export const StackBody = ({ stack, section }: Props) => {
  const [innerRef, inView] = useInView()
  const tablet = useMediaQuery((theme) =>
    // @ts-ignore
    theme.breakpoints.down('md')
  )

  return (
    <Root container rowSpacing={10} ref={innerRef}>
      <Grid item xs={12} className="stack-section">
        <Typography variant="h3">{section}.</Typography>
      </Grid>
      <Grid item xs={12} className="stack-section">
        <ParallaxText baseVelocity={0.4} fontSize={tablet ? 24 : 56} inView={inView}>
          {stack}
        </ParallaxText>
        <ParallaxText baseVelocity={-0.2} fontSize={tablet ? 24 : 56} inView={inView}>
          {stack}
        </ParallaxText>
      </Grid>
    </Root>
  )
}
