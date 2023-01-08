import { Box, Button, Grid, Typography, styled, useMediaQuery } from '@mui/material'

import { SocialMedia } from '@/components/layout/SocialMedia'
import { PhotoContainer } from '@/components/layout/photoContainer'

import { ContactsBG } from '@/assets/icons/backgrounds'
import { ContactsPhoto } from '@/assets/icons/photos'

type Props = {
  data: any
}

const Root = styled(Grid)(({ theme }) => ({
  padding: `${theme.spacing(12)} 0`,
  position: 'relative',
  '& .contacts-body--titleBox': {
    display: 'flex',
    '& .contacts-body--container-btn': {
      [theme.breakpoints.down('md')]: {
        height: 35,
        minWidth: 136,
        fontSize: '.8em',
      },
    },
    '& .contacts-body--title': {
      fontSize: 96,
      fontWeight: 600,
      letterSpacing: 1.5,
      lineHeight: '135px',

      [theme.breakpoints.down('xl')]: {
        fontSize: 64,
        lineHeight: '68px',
      },
      [theme.breakpoints.down('sm')]: {
        fontSize: 42,
        lineHeight: '52px',
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
  // @ts-ignore
  const tablet = useMediaQuery((theme) => theme.breakpoints.down('md'))

  return (
    <Root container rowSpacing={12} alignItems="center">
      <Grid item xs={12}>
        <Typography variant="h3">{contacts.section}</Typography>
      </Grid>
      <Grid item lg={5} xs={12} sx={{ pt: { xs: '45px!important', md: '0 !important' } }}>
        <PhotoContainer
          mainPhoto={ContactsPhoto}
          photoBG={ContactsBG}
          position="unStyled"
          size={{
            xs: [296, 296],
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
            <Typography variant="body2" maxWidth={{ xs: '100%', md: 612 }} fontSize={{ xs: 12, md: 16 }}>
              {contacts.text}
            </Typography>
          </Grid>
          <Grid item>
            <Box className="contacts-body--titleBox">
              <Typography component="div" width={{ xs: '100%', md: '80%', lg: '70%', xl: 700 }}>
                <span className="contacts-body--title">{data.fio}</span>

                <Button
                  sx={{ ml: { xs: 2, md: 4 }, mb: { xs: 0, md: 4 } }}
                  size="large"
                  className="contacts-body--container-btn"
                  href={`mailto:${contacts.btn.link}`}
                  variant="contained"
                >
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
