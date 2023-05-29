import { Box, Button, Menu, MenuItem, Typography, styled } from '@mui/material'
import { memo, useContext, useEffect, useState } from 'react'
import { getGeneralData } from 'shared/api/home.api'
import LanguageProps from 'shared/types/general'

import { UserLanguageContext } from '../Layout'

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

const LanguageHandler = memo(() => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [languages, setLanguages] = useState<LanguageProps[]>([])
  const languageProps = useContext(UserLanguageContext)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }

  useEffect(() => {
    getGeneralData().then((res: any) => setLanguages(res.generals[0].languages))
  }, [])

  if (languages === undefined) return <Typography>Loading...</Typography>

  return (
    <Box width={'100%'}>
      <Button
        sx={{ minWidth: 'max-content' }}
        disableRipple
        variant="contained"
        className="unStyled"
        onClick={handleClick}
      >
        {languages ? languageProps.language : 'en'}
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
        {languages &&
          languages.map((item: LanguageProps, id) => (
            <MenuItem
              onClick={() => {
                languageProps.setLanguage(item)
                window.localStorage.setItem('language_folio', item.toString())
                setAnchorEl(null)
              }}
              className={`language_menu--item ${item === languageProps.language ? 'active' : ''}`}
              key={id}
            >
              {item}
            </MenuItem>
          ))}
      </Root>
    </Box>
  )
})

export default LanguageHandler
