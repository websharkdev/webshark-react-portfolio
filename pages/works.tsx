import type { NextPage } from 'next'

import Layout from '@/components/layout/Layout'

import { ProjectsWrapper } from '@/screens/Projects'

import Meta from '@/utils/meta/Meta'

const ProjectsPage: NextPage = () => (
  <Meta title="Projects" description="Welcome to the Bortnytskyi Alexey portfolio. It's projects page">
    <Layout>
      <ProjectsWrapper />
    </Layout>
  </Meta>
)

export default ProjectsPage
