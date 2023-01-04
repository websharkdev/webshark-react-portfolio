import { Grid, Link, styled, useMediaQuery } from '@mui/material'
import { useEffect, useState } from 'react'
import { ParallaxText } from 'shared/hooks/useTextScrolling'

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
  return (
    <Root container flexWrap="nowrap" alignItems={'center'} justifyContent="space-between">
      <Grid item xs={12}>
        <Link href={HelpUkraine_data.url} className={`${styles.HelpUkraine_title}`}>
          <ParallaxText baseVelocity={0.5} fontSize={18}>
            {HelpUkraine_data.text}
          </ParallaxText>
        </Link>
      </Grid>
    </Root>
  )
}
