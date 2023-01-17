import { Box } from '@mui/material'
import type { NextPage } from 'next'

import Layout from '@/components/layout/Layout'
import { HeaderWrapper } from '@/components/layout/header/HeaderWrapper'

import { HeaderBG } from '@/assets/icons/backgrounds'

import Meta from '@/utils/meta/Meta'

const InProgressPage: NextPage = () => (
  <Meta
    title="🚧🚧🚧"
    description="Welcome to the Bortnytskyi Alexey portfolio. This page still creating, follow for me, if you want to see results of this project"
  >
    <Layout>
      <Box sx={{ width: '100%', position: 'relative', px: 6 }}>
        <HeaderWrapper
          subtitle={'creative developer'}
          photoBG={HeaderBG}
          position="background"
          shift={'unstyled'}
          size={{
            xs: [256, 256],
            sm: [440, 440],
            md: [500, 500],
          }}
          title={'Shhhiiit. Page still creating'}
          text={`Wooop. Looks like a bug, but no. This is my mistake, because I'm too lazy to create pages 😎 I hope I'll change something soon, but I can't promise`}
        />
      </Box>
    </Layout>
  </Meta>
)

export default InProgressPage
