import { Box, Grid, Typography, styled } from '@mui/material'
import Image from 'next/image'
import { FC } from 'react'

import styles from '@/screens/Home/home.module.sass'

import { LogoIcon } from '@/assets/icons/logos'

type Props = {}

const Root = styled(Box)(({ theme }) => ({
  width: '100%',
  minHeight: '100vh',
}))

const StructureBody = styled(Grid)(({ theme }) => ({
  background: theme.palette.background.paper,
  boxShadow: '0px 5px 64px rgba(255, 255, 255, 0.1)',
  borderRadius: theme.shape.borderRadius,

  padding: theme.spacing(4),
  width: '80%',

  justifyContent: 'center',
  alignItemms: 'center',
  flexDirection: 'column',
  flexWrap: 'nowrap',
}))

export const Home: FC<Props> = (props) => {
  return (
    <Root className={styles.Root}>
      <Image src={LogoIcon} height="100%" width={256} />
      <Box my={4}>
        <Typography variant="h1" align="center" mb={2}>
          Hey Dude!
        </Typography>
        <Typography variant="h6" className={styles.HomeText}>
          Here u will see the structure of this project, and some important things.
        </Typography>
      </Box>

      <StructureBody container>
        <Grid item xs={12}>
          <Typography variant="h3" align="center">
            Structure
          </Typography>
          <Typography variant="h6" align="center">
            Here u will see structure
          </Typography>
        </Grid>

        <Grid item xs={12}></Grid>
      </StructureBody>
    </Root>
  )
}
