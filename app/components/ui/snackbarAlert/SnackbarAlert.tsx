import { Alert, AlertColor, AlertTitle, Box, Typography, styled } from '@mui/material'
import { FC } from 'react'

import { SnackbarAlertProps } from './snackbarAlert.interface'
import styles from './snackbarAlert.module.sass'

const Root = styled(Box)(({ theme }) => ({}))

export const SnackbarAlert: FC<SnackbarAlertProps> = ({ variant, message }) => {
  const getAlertTitle = (type: AlertColor) => {
    switch (type) {
      case 'success':
        return 'Success'
      case 'error':
        return 'Error'
      case 'info':
        return 'Warning'
      default:
        return null
    }
  }

  return (
    <Root className={styles.SnackbarAlert}>
      <Alert
        id={`snackbar-alert-${variant!}`}
        classes={{
          action: styles.closeIcon,
          icon: styles.icon,
          root: styles.root,
          standardSuccess: styles.success,
        }}
        severity={variant!}
        sx={{ width: '100%' }}
      >
        {getAlertTitle(variant!) && <AlertTitle className={styles.title}>{getAlertTitle(variant!)}</AlertTitle>}

        <Typography variant="body1" className={styles.text}>
          {message}
        </Typography>
      </Alert>
    </Root>
  )
}
