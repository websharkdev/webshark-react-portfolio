import { Box, Button, Grid, Typography, styled } from '@mui/material'
import { FC } from 'react'

import styles from '@/screens/Home/home.module.sass'

type Props = {}

const Root = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: '100vh',
  display: 'flex',
  justifyContent: 'space-between',
  flexWrap: 'wrap',
  flexDirection: 'row',
  '& .container': {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    width: 175,
  },
}))

export const Styleguide: FC<Props> = (props) => {
  return (
    <Root className={styles.Root}>
      <Box className="container">
        <Button size="large" color="primary" variant="contained">
          Some text
        </Button>
        <Button size="medium" color="primary" variant="contained">
          Some text
        </Button>
        <Button size="small" color="primary" variant="contained">
          Some text
        </Button>
      </Box>
      <Box className="container">
        <Button size="large" color="primary" variant="outlined">
          Some text
        </Button>
        <Button size="medium" color="primary" variant="outlined">
          Some text
        </Button>
        <Button size="small" color="primary" variant="outlined">
          Some text
        </Button>
      </Box>

      <Box className="container">
        <Button size="large" color="primary" variant="text">
          Some text
        </Button>

        <Button size="medium" color="primary" variant="text">
          Some text
        </Button>

        <Button size="small" color="primary" variant="text">
          Some text
        </Button>
      </Box>
    </Root>
  )
}
