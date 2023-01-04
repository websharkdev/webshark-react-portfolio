import { Grid, Typography, styled } from '@mui/material'
import { ParallaxText } from 'shared/hooks/useTextScrolling'
import { DataProps } from 'shared/types/home'

type Props = {
  data: DataProps
}

const Root = styled(Grid)(({ theme }) => ({
  padding: `${theme.spacing(12)} 0`,
  // [theme.breakpoints.down('md')]: {
  //   padding: `${theme.spacing(6)} 0`,
  // },
}))

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
