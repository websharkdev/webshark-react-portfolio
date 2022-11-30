import type { NextPage } from 'next'

import Layout from '@/components/layout/Layout'
import { Body500 } from '@/components/screens/Errors'

import Meta from '@/utils/meta/Meta'

const Error500: NextPage = () => (
  <Meta title="Server-side error">
    <Layout>
      <Body500 />
    </Layout>
  </Meta>
)

export default Error500
