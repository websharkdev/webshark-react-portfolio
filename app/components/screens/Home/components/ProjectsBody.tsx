import { Box, Button, Grid, Typography, styled } from '@mui/material'
import { ProjectItemProps, ProjectsPageData } from 'shared/types/home'

import { ProjectItem } from '@/components/projects'

type Props = {
  data: ProjectsPageData
}

const Root = styled(Grid)(({ theme }) => ({
  paddingBottom: theme.spacing(12),
  '& .card-container': {
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    marginBottom: '-100px',
    width: '100%',
    height: '100%',
    '& .card': {
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '30px 0',
    },
  },
}))

export const ProjectsBody = ({ data }: Props) => {
  const { section, projectItems, buttons } = data
  return (
    <Box
      sx={{
        overflow: 'hidden !important',
        mb: 12,
      }}
    >
      <Root container rowSpacing={{ xs: 5, md: 10 }}>
        <Grid item xs={12} className="projects-section">
          <Typography variant="h3">{section}</Typography>
        </Grid>
        <Grid item xs={12}>
          <Grid container wrap="nowrap" direction="column" rowSpacing={4}>
            {projectItems
              .map((item: ProjectItemProps, id: number) => (
                <Grid item key={item.id} xs={12}>
                  <ProjectItem data={item} variant={id % 2 ? 'green' : 'purpule'} />
                </Grid>
              ))
              .slice(-3)}
          </Grid>
        </Grid>
      </Root>
      <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', mt: 4 }}>
        <Button href={buttons[0].href} size={'medium'}>
          {buttons[0].name}
        </Button>
      </Box>
    </Box>
  )
}
