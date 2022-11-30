import type { NextPage } from 'next'

import Layout from '@/components/layout/Layout'
import { Body404 } from '@/components/screens/Errors'

import Meta from '@/utils/meta/Meta'

const Error404: NextPage = () => (
  <Meta title="Page not found">
    <Layout>
      <Body404 />
    </Layout>
  </Meta>
)

export default Error404
