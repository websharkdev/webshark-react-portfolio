import { Box, Button, Grid, Typography, styled } from '@mui/material'

import { SocialMedia } from '@/components/layout/SocialMedia'
import { PhotoContainer } from '@/components/layout/photoContainer'

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
      [theme.breakpoints.down('xl')]: {
        lineHeight: '98px',
      },
      [theme.breakpoints.down('lg')]: {
        fontSize: 64,
        lineHeight: '85px',
      },
      [theme.breakpoints.down('md')]: {
        fontSize: 32,
        lineHeight: '36px',
      },
    },
  },
  '& .contacts-body--textDivider': {
    width: '100%',
    maxWidth: 120,
    marginBottom: theme.spacing(3),
    height: 2,
    background: theme.palette.primary.dark,
  },
}))

export const ContactsBody = ({ data }: Props) => {
  const { contacts } = data

  return (
    <Root container rowSpacing={12} alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h3">{contacts.section}</Typography>
      </Grid>
      <Grid item lg={5} xs={12}>
        <PhotoContainer
          mainPhoto={ContactsPhoto}
          photoBG={ContactsBG}
          size={{
            xs: [256, 256],
            sm: [440, 440],
            md: [537, 537],
          }}
          shift={{
            xs: [24, 24],
            md: [48, 48],
            xl: [75, 75],
          }}
        />
      </Grid>
      <Grid item xs={12} md={5}>
        <Grid container rowSpacing={4} direction="column" wrap="nowrap">
          <Grid item>
            <Box className="contacts-body--textDivider" />
            <Typography variant="body2" maxWidth={612}>
              {contacts.text}
            </Typography>
          </Grid>
          <Grid item>
            <Box className="contacts-body--titleBox">
              <Typography component="div" width={{ xs: '70%', md: 500, lg: 700 }}>
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
