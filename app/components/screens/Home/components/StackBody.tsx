import { Grid, Typography, styled, useMediaQuery } from '@mui/material'
import { useInView } from 'react-intersection-observer'
import { ParallaxText } from 'shared/hooks/useTextScrolling'
import { DataProps } from 'shared/types/home'

type Props = {
  data: DataProps
}

const Root = styled(Grid)(({ theme }) => ({
  paddingBottom: theme.spacing(12),
}))

export const StackBody = ({ data }: Props) => {
  const { stack } = data
  const [innerRef, inView] = useInView()
  const tablet = useMediaQuery((theme) =>
    // @ts-ignore
    theme.breakpoints.down('md')
  )

  return (
    <Root container rowSpacing={10} ref={innerRef}>
      <Grid item xs={12} className="stack-section">
        <Typography variant="h3">{stack.section}</Typography>
      </Grid>
      <Grid item xs={12} className="stack-section">
        <ParallaxText baseVelocity={0.4} fontSize={tablet ? 24 : 56} inView={inView}>
          {stack.tech_stack}
        </ParallaxText>
        <ParallaxText baseVelocity={-0.2} fontSize={tablet ? 24 : 56} inView={inView}>
          {stack.tech_stack}
        </ParallaxText>
      </Grid>
    </Root>
  )
}
