import {
  Box,
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
import { FC, Suspense, lazy, useState } from 'react'
import 'shared/api/home.api'
import { HeaderDataProps, MenuItemProps } from 'shared/types/home'

import styles from './header.module.sass'

const LanguageHandlerBurger = lazy(() => import('../language/LanguageHandlerBurger'))

type Props = {
  data: HeaderDataProps
}

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
type RectangleProps = {
  position: number[]
}

const Rectangle = ({ position }: RectangleProps) => {
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

export const Header: FC<Props> = ({ data }) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const menuOpen = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  const { menus } = data

  const tablet = useMediaQuery((theme) =>
    // @ts-ignore
    theme.breakpoints.down('md')
  )

  return (
    <Suspense fallback={<Typography>Loading...</Typography>}>
      <div className={styles.Wrapper}>
        <Grid container className={`wrapper ${styles.Root}`}>
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
                      <Rectangle position={[0, 0]} />
                      <Rectangle position={[10, 0]} />
                      <Rectangle position={[20, 0]} />
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
                      <Rectangle position={[0, 20]} />
                      <Rectangle position={[10, 10]} />
                      <Rectangle position={[20, 0]} />
                    </motion.svg>
                  )}
                </IconButton>
                <Drawer id="basic-menu" anchor="top" open={menuOpen} onClose={handleClose}>
                  <Box sx={{ py: 4 }}>
                    {menus?.map((item: MenuItemProps) => (
                      <MenuItem onClick={handleClose} key={item.id} className={`header-menu--item`}>
                        <MuiLink href={item.href}>{`${item.name}.`}</MuiLink>
                      </MenuItem>
                    ))}

                    <MenuItem sx={{ mt: 4 }}>
                      <LanguageHandlerBurger setHideMenu={setAnchorEl} />
                    </MenuItem>
                  </Box>
                </Drawer>
              </Box>
            ) : (
              <Grid container spacing={{ sm: 2, md: 4 }}>
                {menus?.map((item: MenuItemProps) => (
                  <Grid item sm={6} md={'auto'} key={item.id} className={`header-menu--item`}>
                    <MuiLink href={item.href}>{`${item.name}.`}</MuiLink>
                  </Grid>
                ))}
              </Grid>
            )}
          </Grid>
          <Grid item flex={1}>
            <Typography variant="h5" align="right" className="header-fio">
              {data.fio}
            </Typography>
          </Grid>
        </Grid>
        <Divider light />
      </div>
    </Suspense>
  )
}
