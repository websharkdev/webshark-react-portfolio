import { Box, Button, Grid, Menu, MenuItem, Typography, styled } from '@mui/material'
import { Dispatch, SetStateAction, useEffect, useState } from 'react'
import { LanguageProps } from 'shared/types/home'

import styles from '@/screens/Home/home.module.sass'

type Props = {
  language: LanguageProps
  languages: LanguageProps[]
  setLanguage: any
}

const Root = styled(Menu)(({ theme }) => ({
  '& li.language_menu--item-active': {
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.dark,
    fontWeight: 600,
  },
  '& li.language_menu--item': {
    color: theme.palette.text.primary,
    fontWeight: 400,
  },
}))
const Wrapper = styled(Grid)(({ theme }) => ({
  position: 'relative',
  justifyContent: 'flex-end',
  width: 'max-content',
  height: 'max-content',
  flexWrap: 'nowrap',
  '& .home-scroll-down': {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: 20,
    height: 110,
    '& .rotated-item': {
      display: 'flex',
      alignItems: 'center',
      flexWrap: 'nowrap',
      transform: 'rotate(-90deg)',
      position: 'absolute',
    },
    '& .home-scroll-down-square': {
      width: 12,
      height: 12,
      border: `1px solid ${theme.palette.text.primary}`,
      marginRight: theme.spacing(2),
    },
    '& .home-scroll-down-text': {
      fontSize: '.8em',
      fontWeight: 600,
      lineHeight: '19.5px',
      letterSpacing: '1px',
      textTransform: 'lowercase',
    },
  },
}))

export const HomeScroll = ({ language, languages, setLanguage }: Props) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <Wrapper container direction="column" className={`${styles.HomeRotated}`}>
      <Grid item sx={{ width: 'max-content' }} className={`${styles.HomeLanguageSwitch} rotated-item`}>
        <Button
          sx={{ minWidth: 'max-content' }}
          disableRipple
          variant="contained"
          className="unStyled"
          onClick={handleClick}
        >
          {language}
        </Button>
        <Root
          id="language_menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            'aria-labelledby': 'basic-button',
          }}
          anchorOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
          }}
        >
          {languages.map((item, id) => (
            <MenuItem
              onClick={() => {
                setLanguage(item)
                window.localStorage.setItem('language_folio', item)
                setAnchorEl(null)
              }}
              className={`language_menu--item ${item === language ? 'active' : ''}`}
              key={id}
            >
              {item}
            </MenuItem>
          ))}
        </Root>
      </Grid>

      <Grid item sx={{ width: 'max-content' }} className={`home-scroll-down`}>
        <Box className={`${styles.HomeScrollDown} rotated-item`}>
          <Box className="home-scroll-down-square" />

          <Typography className="home-scroll-down-text" variant="button">
            scroll
          </Typography>
        </Box>
      </Grid>
    </Wrapper>
  )
}
