import { Box, Button, Grid, Typography, styled } from '@mui/material'
import Image from 'next/image'
import { FC } from 'react'

import Layout from '@/components/layout/Layout'

import { HeaderBG } from '@/assets/icons/backgrounds'

import Meta from '@/utils/meta/Meta'

type Props = {}

const Root = styled(Grid)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
  height: '100%',
  minHeight: 650,
  padding: `${theme.spacing(5)} 0`,
  '& .error-subtitleBox': {
    height: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
    '& .error-subtitle': {
      maxWidth: 300,
    },
  },
  '& .error-foto': {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: '-3',
  },
  '& .error-titleBox-container': {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    flexDirection: 'column',
    height: 'calc(100% + 90px)',
    '& .error-titleBox': {
      justifyContent: 'flex-end',
      display: 'flex',
      '& .error-title': {
        fontSize: 96,
        fontWeight: 600,
        letterSpacing: 1.5,
        lineHeight: '135px',
      },
    },
    '& .error-textBox': {
      '& .error-textDivider': {
        width: '100%',
        maxWidth: 120,
        marginBottom: theme.spacing(3),
        height: 2,
        background: theme.palette.primary.dark,
      },
      '& .error-text': {
        maxWidth: 400,
        color: theme.palette.text.primary,
      },
    },
  },
}))

const Error500: FC = (props: Props) => (
  <Meta title="Page not found">
    <Layout>
      <Box
        sx={{
          width: 'calc(100% - 68px)',
          margin: '0 auto',
          minHeight: '700px',
          pb: 23,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          flexDirection: 'column',
          position: 'relative',
        }}
      >
        <Root container>
          <Grid item xs={5}>
            <Box className="error-subtitleBox" width="100%">
              <Typography className="error-subtitle" variant="h3">
                creative developer
              </Typography>
            </Box>
          </Grid>
          <Box className="error-foto">
            <Image src={HeaderBG} alt="error-foto-item" />
          </Box>
          <Grid item xs={7}>
            <Box className="error-titleBox-container">
              <Box className="error-textBox">
                <Box className="error-textDivider" />
                <Typography variant="body2" className="error-text">
                  Some things went wrong. We can’t seem to find the page you’re looking for. Just go back.
                </Typography>
              </Box>
              <Box className="error-titleBox">
                <Typography component="div" width={750}>
                  <span className="error-title">404 - error. not found</span>

                  <Button
                    sx={{ ml: 4, mb: 4 }}
                    size="large"
                    href={'https://webshark-react-portfolio.vercel.app/'}
                    variant="contained"
                  >
                    back to home.
                  </Button>
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Root>
      </Box>
    </Layout>
  </Meta>
)

export default Error404
