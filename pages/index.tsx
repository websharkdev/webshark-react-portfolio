import type { NextPage } from 'next'
import { useState } from 'react'
import { UsePreloader } from 'shared/hooks'

import Layout from '@/components/layout/Layout'

import { Home } from '@/screens/Home'

import Meta from '@/utils/meta/Meta'

const HomePage: NextPage = () => {
  const [loaded, setLoaded] = useState(false)
  return (
    <Meta title="Home" description="Welcome to the Bortnytskyi Alexey portfolio. It's home page">
      <UsePreloader setState={setLoaded} state={loaded}>
        <Layout>
          <Home />
        </Layout>
      </UsePreloader>
    </Meta>
  )
}

export default HomePage
