import type { NextPage } from 'next'

import Layout from '@/components/layout/Layout'

import { ContactsWrapper } from '@/screens/Contacts'

import Meta from '@/utils/meta/Meta'

const ContactsPage: NextPage = () => (
  <Meta title="Contacts" description="Welcome to the Bortnytskyi Alexey portfolio. It's contacts page">
    <Layout>
      <ContactsWrapper />
    </Layout>
  </Meta>
)

export default ContactsPage
