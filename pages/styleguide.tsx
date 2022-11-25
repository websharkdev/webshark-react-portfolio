import type { NextPage } from 'next'

import Layout from '@/components/layout/Layout'

import { Styleguide } from '@/screens/Styleguide'

import Meta from '@/utils/meta/Meta'

const StyleguidePage: NextPage = () => (
  <Meta title="Styleguide" description="Welcome to the Bortnytskyi Alexey portfolio. It's StyleguidePage page">
    <Styleguide />
  </Meta>
)

export default StyleguidePage
