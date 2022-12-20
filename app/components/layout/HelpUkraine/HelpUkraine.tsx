import { Grid, Link, styled, useMediaQuery } from '@mui/material'
import { useEffect, useState } from 'react'

import { HelpUkraine_data } from './data'
import styles from './helpUkraine.module.sass'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  padding: '13px 34px',
  background: '#242424',
  position: 'sticky',
  bottom: 0,
  zIndex: 5,
}))

export const HelpUkraine = (props: Props) => {
  const [size, setSize] = useState<number>(6)

  return (
    <Root container flexWrap="nowrap" alignItems={'center'} justifyContent="space-between">
      {HelpUkraine_data.map((item) => (
        <Grid item lg={2} md={3} sm={4} key={item.id}>
          <Link href={item.link} className={`${styles.HelpUkraine_title}`}>
            {item.name}
          </Link>
        </Grid>
      )).slice(0, size)}
    </Root>
  )
}
