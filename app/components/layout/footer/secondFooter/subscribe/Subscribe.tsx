import { Button, InputAdornment, TextField, Typography, useMediaQuery } from '@mui/material'
import { FC } from 'react'

import theme from '@/providers/customThemeProvider/theme'

import styles from './subscribe.module.scss'

const Subscribe: FC = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down('tablet'))

  return (
    <div>
      <div className={styles.subscribe}>
        <Typography variant="h6">
          “Besides them having top-notch design skills, customers can expect a thought partner that helps them think
          outside the box.”
        </Typography>
        <TextField
          placeholder="Enter your email here"
          fullWidth
          variant="filled"
          color="secondary"
          InputProps={{
            endAdornment: (
              <InputAdornment position="end">
                <Button
                  sx={{
                    color: theme.palette.primary.main,
                    textTransform: 'none',
                    background: 'rgba(31, 23, 18, 0)',
                    '&:hover': {
                      background: 'rgba(31, 23, 18, 0.06)',
                    },
                  }}
                >
                  {isMobile ? 'Subscribe' : 'Subscribe to Newsletter'}
                </Button>
              </InputAdornment>
            ),
          }}
        />
      </div>
    </div>
  )
}

export default Subscribe
