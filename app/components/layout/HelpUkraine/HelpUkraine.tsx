import { Grid, Link, Typography, styled } from '@mui/material'
import React from 'react'

import { HelpUkraine_data } from './data'
import styles from './helpUkraine.module.sass'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  padding: '13px 34px',
  background: '#242424',
  position: 'sticky',
  bottom: 0,
}))

export const HelpUkraine = (props: Props) => {
  return (
    <Root container flexWrap="nowrap" alignItems={'center'} justifyContent="space-between">
      {HelpUkraine_data.map((item) => (
        <Grid item xs={2} key={item.id}>
          <Link href={item.link} className={`${styles.HelpUkraine_title}`}>
            {item.name}
          </Link>
        </Grid>
      ))}
    </Root>
  )
}
