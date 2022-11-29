import { Box, Button, Grid, Typography, styled } from '@mui/material'
import Image from 'next/image'

import { SocialMedia } from '@/components/layout/SocialMedia'

import { ContactsBG } from '@/assets/icons/backgrounds'
import { ContactsPhoto } from '@/assets/icons/photos'

type Props = {
  data: any
}

const Root = styled(Grid)(({ theme }) => ({
  padding: `${theme.spacing(12)} 0`,
  '& .contacts-body--titleBox': {
    display: 'flex',
    '& .contacts-body--title': {
      fontSize: 96,
      fontWeight: 600,
      letterSpacing: 1.5,
      lineHeight: '135px',
    },
  },
  '& .contacts-body--textDivider': {
    width: '100%',
    maxWidth: 120,
    marginBottom: theme.spacing(3),
    height: 2,
    background: theme.palette.primary.dark,
  },
  '& .contacts-photo--container': {
    position: 'relative',
    width: 537,
    height: 748,
    '& .contacts-photo--container-bg': {
      width: 540,
      height: 540,
      position: 'absolute',
      left: -61,
      top: 71,
      zIndex: -1,
    },
  },
}))

export const ContactsBody = ({ data }: Props) => {
  const { contacts } = data
  return (
    <Root container rowSpacing={12} alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h3">{contacts.section}</Typography>
      </Grid>
      <Grid
        item
        xs={5}
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box className="contacts-photo--container">
          <Box className="contacts-photo--container-main">
            <Image src={ContactsPhoto} height={748} width={537} />
          </Box>
          <Box className="contacts-photo--container-bg">
            <Image src={ContactsBG} />
          </Box>
        </Box>
      </Grid>
      <Grid item xs={5}>
        <Grid container rowSpacing={4} direction="column" wrap="nowrap">
          <Grid item>
            <Box className="contacts-body--textDivider" />
            <Typography variant="body2" maxWidth={612}>
              {contacts.text}
            </Typography>
          </Grid>
          <Grid item>
            <Box className="contacts-body--titleBox">
              <Typography component="div" width={700}>
                <span className="contacts-body--title">{data.fio}</span>

                <Button sx={{ ml: 4, mb: 4 }} size="large" href={`mailto:${contacts.btn.link}`} variant="contained">
                  {contacts.btn.name}
                </Button>
              </Typography>
            </Box>
          </Grid>
          <Grid item flex={1} />
          <Grid item>
            <SocialMedia />
          </Grid>
        </Grid>
      </Grid>
    </Root>
  )
}
