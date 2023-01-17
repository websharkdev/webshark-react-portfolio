import { Box, styled } from '@mui/material'
import type { NextPage } from 'next'

import Layout from '@/components/layout/Layout'
import { AboutWrapper } from '@/components/screens/About'

import Meta from '@/utils/meta/Meta'

const AboutPage: NextPage = () => {
  return (
    <Meta title="About" description="Welcome to the Bortnytskyi Alexey portfolio. It's about me page">
      <Layout>
        <AboutWrapper />
      </Layout>
    </Meta>
  )
}

export default AboutPage
