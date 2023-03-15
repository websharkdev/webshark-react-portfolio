import { Box, Button, Divider, Grid, Typography, styled, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import { WorkHistoryItemProps, WorkHistoryProps } from 'shared/types/home'

import { LeftBlob, RightBlob } from '@/assets/icons/blobs'

type Props = {
  data: WorkHistoryProps
}

type WorkItemProps = {
  data: WorkHistoryItemProps
  state: string
}

const Root = styled(Grid)(({ theme }) => ({
  paddingBottom: theme.spacing(6),
  minHeight: 'calc(100vh - 16px)',
  display: 'flex',
  position: 'relative',
  overflow: 'visible',
  '& .work_history--container': {
    display: 'flex',
    justifyContent: 'flex-end',
    width: 'max-content',
    overflow: 'hidden',
    maxWidth: '100%',
    [theme.breakpoints.down('md')]: {
      flexDirection: 'column',
      flexWrap: 'wrap',
      width: '100%',
    },
  },
  '& .work_history-left--blob': {
    position: 'absolute',
    left: -132,
    zIndex: -5,
    top: 0,
  },
  '& .work_history-right--blob': {
    position: 'absolute',
    bottom: 0,
    zIndex: -5,
    right: 0,
  },
}))

const TitleWrapper = styled(Box)(({ theme }) => ({
  justifyContent: 'flex-end',
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    order: -5,
    marginBottom: theme.spacing(4),
  },
  [theme.breakpoints.down(600)]: {
    width: '70%',
  },
  [theme.breakpoints.down(490)]: {
    width: '100%',
  },
  '& span.title': {
    [theme.breakpoints.down('md')]: {
      marginRight: theme.spacing(-1),
    },
    [theme.breakpoints.down('sm')]: {
      marginRight: theme.spacing(2),
    },
    [theme.breakpoints.down(490)]: {
      marginRight: theme.spacing(2),
    },
  },
}))

const Wrapper = styled(Box)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(4),
  },

  height: 48,
  minWidth: 'max-content',
  width: 'max-content',
  position: 'relative',
  display: 'flex',
  alignItems: 'center',
  padding: `${theme.spacing(1.5)} ${theme.spacing(3)}`,
  background: '#F6F6F6',
  border: `1px solid ${theme.palette.background.paper}`,
  borderRadius: theme.shape.borderRadius,
  '&.active': {
    background: `${theme.palette.primary.light} !important`,
    '& .dot': {
      background: '#f6f6f6',
    },
    '& .title': {
      color: theme.palette.primary.contrastText,
    },
  },
  '&.future': {
    '& .dot': {
      background: theme.palette.grey[500],
    },
    '& .title': {
      color: theme.palette.grey[500],
    },
  },
  '& .dot': {
    width: 8,
    marginRight: theme.spacing(3),
    height: 8,
    borderRadius: 2,
    background: theme.palette.primary.light,
  },
  '& .title': {
    fontWeight: 600,
    fontSize: 16,
  },
}))

const ItemRoot = styled(Box)(({ theme }) => ({
  minWidth: 'max-content',
  width: 'max-content',
  [theme.breakpoints.down('md')]: {
    minWidth: '100%',
    width: '100%',
  },
  [theme.breakpoints.up('md')]: {
    marginLeft: theme.spacing(3),
  },
  '& .work-history--item-container': {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    paddingRight: theme.spacing(2),
    height: 67,
    '& .work-history--item-divider': {
      background: '#f6f6f6',
      marginRight: theme.spacing(3),
      width: '2px !important',
      height: 'calc(100% + 16px)',
      minHeight: 30,
    },
    '& .work-history--item-text': {
      width: '100%',
    },
  },
}))

const WorkHistoryItem = ({ data, state }: WorkItemProps) => {
  const startedDate = new Date(data.started)
  const endedDate = new Date(data.ended)
  const projectDescription = [
    `It's was my first work at all, I started in ${startedDate.toLocaleDateString()} and it's was goood ${endedDate.toLocaleDateString()}`,
    `It's was my first work at all, I started in ${startedDate.toLocaleDateString()} and it's was goood ${endedDate.toLocaleDateString()}`,
    `It's was my first work at all, I started in ${startedDate.toLocaleDateString()} and it's was goood ${endedDate.toLocaleDateString()}`,
    `It's was my first work at all, I started in ${startedDate.toLocaleDateString()} and it's was goood ${endedDate.toLocaleDateString()}`,
  ]
  // @ts-ignore
  const date_difference: number = endedDate - startedDate
  const tablet = useMediaQuery((theme) =>
    // @ts-ignore
    theme.breakpoints.down('md')
  )
  const randomIndex: number = Math.floor(Math.floor(Math.random() * projectDescription.length))
  const size = useMediaQuery((theme) =>
    // @ts-ignore
    theme.breakpoints.up('xl')
  )
    ? 1500
    : 2500

  const px_size: number = Math.floor(date_difference / (60 * 60 * 24 * size))

  return (
    <ItemRoot>
      <Wrapper className={`work-history--item ${state}`} sx={{ width: { xs: '100%', md: px_size } }}>
        <Box className="dot" />
        <Typography variant="h6" fontWeight={600} className="title">
          {data.title}
        </Typography>
      </Wrapper>
      {tablet && state === 'unactive' ? (
        <Box className="work-history--item-container">
          <Box className="work-history--item-divider" />
          <Typography variant="body2" className="work-history--item-text">
            {projectDescription[randomIndex]}
          </Typography>
        </Box>
      ) : null}
    </ItemRoot>
  )
}

export const WorkHistory = ({ data }: Props) => {
  const [activeStep, setActiveStep] = useState<number>(1)
  const [showAll, setShowAll] = useState<boolean>(false)
  const tablet = useMediaQuery((theme) =>
    // @ts-ignore
    theme.breakpoints.down('md')
  )
  useEffect(() => {
    data.workHistories.filter((item: WorkHistoryItemProps, index: number) =>
      item.title.toLocaleLowerCase() === 'your company' ? setActiveStep(index) : null
    )
  }, [])

  return (
    <Root container rowSpacing={10} direction={'column'}>
      <Grid item xs={12} className="work_history-section">
        <Typography variant="h3">{data.section}</Typography>
      </Grid>
      <Box className="work_history-left--blob">
        <Image src={LeftBlob} alt="blob image" />
      </Box>
      <Grid item xs={4} className="work_history-section work_history-left--section">
        <Divider className="customDivider" />
        <Typography variant="body2" width={{ xs: 'auto', md: 400 }}>
          {data.text}
        </Typography>
      </Grid>

      <Grid
        item
        xs={12}
        sx={{
          maxWidth: '100%',
          justifyContent: 'flex-end',
          display: {
            xs: 'none',
            md: 'flex',
          },
        }}
      >
        <TitleWrapper>
          <Box component="div" width={{ xs: '100%', sm: '70%', md: 500, lg: 'max-content' }}>
            <Typography component="span" variant="h1" className={`title`}>
              {data.title}
            </Typography>
          </Box>
        </TitleWrapper>
      </Grid>

      <Box
        sx={{
          display: 'flex',
          mt: 5,
          width: '100%',
          justifyContent: 'flex-end',
          overflow: 'hidden',
          maxWidth: '100%',
        }}
      >
        <Box className="work_history-right--blob">
          <Image src={RightBlob} alt="blob image" />
        </Box>
        <Box className="work_history--container">
          {tablet ? (
            <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <Button
                size="medium"
                variant="contained"
                className="unStyled"
                onClick={() => setShowAll(!showAll)}
                sx={{
                  minHeight: 48,
                  borderRadius: 0.5,
                  background: '#f6f6f6 !important',
                  mb: 4,
                }}
              >
                {showAll ? 'hide.' : 'show all.'}
              </Button>
              <Divider variant="middle" />
            </Box>
          ) : null}
          {tablet
            ? data.workHistories
                .map((item: WorkHistoryItemProps, index: number) => (
                  <WorkHistoryItem
                    key={index}
                    data={item}
                    state={activeStep === index ? 'active' : index > activeStep ? 'future' : 'unactive'}
                  />
                ))
                .slice(showAll ? 0 : activeStep - 2, activeStep + 1)
            : data.workHistories.map((item: WorkHistoryItemProps, index: number) => (
                <WorkHistoryItem
                  key={index}
                  data={item}
                  state={activeStep === index ? 'active' : index > activeStep ? 'future' : 'unactive'}
                />
              ))}
        </Box>
      </Box>
    </Root>
  )
}
