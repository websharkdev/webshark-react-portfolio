import React, { FC } from 'react'

import MaineFooter from '@/components/layout/footer/maineFooter/MaineFooter'
import SecondFooter from '@/components/layout/footer/secondFooter/SecondFooter'

const Footer: FC = () => (
  <footer>
    <SecondFooter />
    <MaineFooter />
  </footer>
)

export default Footer
