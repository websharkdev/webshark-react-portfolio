import { Box, Button, Grid, Typography, styled, useMediaQuery } from '@mui/material'

import { SocialMedia } from '@/components/layout/SocialMedia'
import { PhotoContainer } from '@/components/layout/photoContainer'

import { ContactsBG } from '@/assets/icons/backgrounds'
import { ContactsPhoto } from '@/assets/icons/photos'

type Props = {
  data: any
}

const Root = styled(Grid)(({ theme }) => ({
  paddingBottom: theme.spacing(12),
  position: 'relative',
  '& .contacts-body--titleBox': {
    display: 'flex',
    '& .contacts-body--title': {
      [theme.breakpoints.down('lg')]: {
        marginRight: theme.spacing(2),
      },
      [theme.breakpoints.down('md')]: {
        marginRight: theme.spacing(1),
      },
      [theme.breakpoints.down('sm')]: {
        marginRight: theme.spacing(2),
      },
      [theme.breakpoints.down(490)]: {
        marginRight: theme.spacing(2),
      },
    },
  },
  '& .contacts-body--textDivider': {
    width: '100%',
    maxWidth: 120,
    marginBottom: theme.spacing(3),
    height: 2,
    background: theme.palette.primary.dark,
    [theme.breakpoints.down('md')]: {
      maxWidth: 64,
    },
  },
}))

export const ContactsBody = ({ data }: Props) => {
  const { contacts } = data
  const tablet = useMediaQuery((theme) =>
    // @ts-ignore
    theme.breakpoints.down('md')
  )

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
            xs: [256, 256],
            sm: [440, 440],
            md: [500, 500],
          }}
          shift={{
            xs: [12, 12],
            sm: [24, 24],
            md: [48, 48],
            xl: [75, 75],
          }}
        />
      </Grid>
      <Grid item xs={12} md={5}>
        <Grid container rowSpacing={4} direction="column" wrap="nowrap">
          <Grid item>
            <Box className="contacts-body--textDivider" />
            <Typography variant="body2" maxWidth={{ xs: '100%', md: 612 }}>
              {contacts.text}
            </Typography>
          </Grid>
          <Grid item>
            <Box className="contacts-body--titleBox">
              <Typography component="div" width="100%">
                <Typography component="span" variant="h1" className="contacts-body--title">
                  {data.fio}
                </Typography>

                <Button
                  sx={{ ml: { xs: 0, md: 4 }, mb: { xs: 0, md: 4 } }}
                  size={tablet ? 'medium' : 'large'}
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
