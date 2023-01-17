import { Grid, Typography, styled } from '@mui/material'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  width: '100%',
  height: '100%',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'center',
  padding: theme.spacing(4),
  '& .preloader-container': {
    height: '100%',
    '& .preloader-title': {
      color: '#219653',
      width: '256px',
    },
  },
}))

export const PreloaderWrapper = (props: Props) => {
  return (
    <Root container>
      <Grid item className="preloader-container" xs={12}>
        <Typography variant="h3" className="preloader-title" mr={4}>
          Bortnytskyi.
          <br />
          Alexey.
        </Typography>
      </Grid>
    </Root>
  )
}
