import { Button, Grid, styled } from '@mui/material'
import { memo, useContext } from 'react'
import { LanguageProps } from 'shared/types/general'

import { UserLanguageContext } from '../Layout'

type Props = {
  setHideMenu: (e: null | HTMLElement) => void
}

const LanguageHandlerBurger = memo(({ setHideMenu }: Props) => {
  const context = useContext(UserLanguageContext)

  return (
    <Grid container width={'100%'}>
      {context.data.languages.map((item: LanguageProps, index: number) => (
        <Grid
          item
          sx={{ display: 'flex', justifyContent: 'center' }}
          key={index}
          xs={12 / context.data.languages.length}
        >
          <Button
            size="small"
            variant="contained"
            color="primary"
            disableRipple
            onClick={() => {
              context.setLanguage(item)
              window.localStorage.setItem('language_folio', item.toString())
              setHideMenu(null)
            }}
            className={`unStyled language_menu--item ${item === context.language ? 'active' : ''}`}
          >
            {item}
          </Button>
        </Grid>
      ))}
    </Grid>
  )
})

export default LanguageHandlerBurger
