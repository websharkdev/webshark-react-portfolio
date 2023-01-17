import {
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  IconButton,
  MenuItem,
  Link as MuiLink,
  Typography,
  styled,
  useMediaQuery,
} from '@mui/material'
import { motion } from 'framer-motion'
import { FC, useContext, useEffect, useState } from 'react'
import { MenuItemProps } from 'shared/types/home'

import { home_data, home_dataEN, home_dataRU } from '@/components/screens/Home/data'

import { UserLanguageContext } from '../Layout'
import styles from '../layout.module.sass'

type Props = {}

const icon = {
  hidden: {
    opacity: 0,
    pathLength: 0,
    fill: 'rgba(45, 45, 45, 0)',
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    fill: 'rgba(45, 45, 45, 1)',
  },
}

const Root = styled(Grid)(({ theme }) => ({
  width: '100%',
  display: 'flex',
  flexWrap: 'nowrap',
  marginBottom: theme.spacing(2),
  alignItems: 'center',
  position: 'relative',
  zIndex: 30,
  [theme.breakpoints.down('md')]: {
    alignItems: 'flex-start',
  },
  [theme.breakpoints.down('sm')]: {
    alignItems: 'center',
  },
  '& h5.header-fio': {
    [theme.breakpoints.down('lg')]: {
      fontSize: 18,
    },
    [theme.breakpoints.down('md')]: {
      fontSize: 16,
    },
    [theme.breakpoints.down('sm')]: {
      fontSize: 14,
    },
  },
}))

const Wrapper = styled(Box)(({ theme }) => ({
  width: '100%',
  margin: '0 auto',
  padding: '34px 34px',
  background: theme.palette.background.default,
  [theme.breakpoints.down('sm')]: {
    padding: '24px 20px',
  },
}))

const Rectangle = ({ position }: any) => {
  return (
    <motion.rect
      initial="hidden"
      animate="visible"
      variants={icon}
      width="4"
      height="4"
      x={position[0]}
      y={position[1]}
    />
  )
}

export const Header: FC<Props> = () => {
  const languageProps = useContext(UserLanguageContext)

  const [data, setData] = useState(home_dataEN)
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const menuOpen = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  useEffect(() => {
    switch (languageProps.language) {
      case 'en':
        setData(home_dataEN)
        break
      case 'ru':
        setData(home_dataRU)
        break

      default:
        break
    }
  }, [languageProps.language])

  const { menu, header_fio } = data
  const { languages } = home_data
  // @ts-ignore
  const tablet = useMediaQuery((theme) => theme.breakpoints.down('md'))

  return (
    <Wrapper>
      <Root container className="wrapper">
        <Grid item xs={12} md="auto">
          {tablet ? (
            <Box sx={{ width: '100%' }}>
              <IconButton
                id="header-menu--burger"
                aria-controls={menuOpen ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={menuOpen ? 'true' : undefined}
                size="small"
                onClick={menuOpen ? handleClose : handleClick}
              >
                {menuOpen ? (
                  <motion.svg
                    width="24"
                    height="4"
                    viewBox="0 0 24 4"
                    xmlns="http://www.w3.org/2000/svg"
                    className="item"
                    whileInView={'visible'}
                    initial="hidden"
                    variants={icon}
                  >
                    <Rectangle position={['0', '0']} />
                    <Rectangle position={['10', '0']} />
                    <Rectangle position={['20', '0']} />
                  </motion.svg>
                ) : (
                  <motion.svg
                    width="24"
                    height="24"
                    className="item"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    whileInView={'visible'}
                    initial="hidden"
                    variants={icon}
                  >
                    <Rectangle position={['0', '20']} />
                    <Rectangle position={['10', '10']} />
                    <Rectangle position={['20', '0']} />
                  </motion.svg>
                )}
              </IconButton>
              <Drawer id="basic-menu" anchor="top" open={menuOpen} onClose={handleClose}>
                <Box sx={{ py: 4 }}>
                  {menu.map((item: MenuItemProps) => (
                    <MenuItem onClick={handleClose} key={item.id} className={`header-menu--item ${styles.MenuItem}`}>
                      <MuiLink href={item.link}>{`${item.title}.`}</MuiLink>
                    </MenuItem>
                  ))}

                  <MenuItem sx={{ mt: 4 }}>
                    <Grid container>
                      {languages.map((item, id) => (
                        <Grid
                          item
                          sx={{ display: 'flex', justifyContent: 'center' }}
                          key={id}
                          xs={12 / languages.length}
                        >
                          <Button
                            size="small"
                            variant="contained"
                            color="primary"
                            onClick={() => {
                              languageProps.setLanguage(item)
                              window.localStorage.setItem('language_folio', item)
                              setAnchorEl(null)
                            }}
                            className={`unStyled language_menu--item ${
                              item === languageProps.language ? 'active' : ''
                            }`}
                          >
                            {item}
                          </Button>
                        </Grid>
                      ))}
                    </Grid>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          ) : (
            <Grid container spacing={{ sm: 2, md: 4 }}>
              {menu.map((item: MenuItemProps) => (
                <Grid item sm={6} md={'auto'} key={item.id} className={`header-menu--item ${styles.MenuItem}`}>
                  <MuiLink href={item.link}>{`${item.title}.`}</MuiLink>
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
        <Grid item flex={1}>
          <Typography variant="h5" align="right" className="header-fio">
            {header_fio}
          </Typography>
        </Grid>
      </Root>
      <Divider light />
    </Wrapper>
  )
}
