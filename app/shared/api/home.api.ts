import { gql, request } from 'graphql-request'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCSM_ENDPOINT

export const getGeneralData = async () => {
  const query = gql`
    query GetGeneralData {
      generals {
        fio
        cvLink
        id
        languages
        mail
        phone
        socialMedias {
          href
          id
          tooltip
          icon {
            id
            fileName
            url
          }
        }
        contacts {
          href
          id
          name
        }
        menus {
          id
          href
          name
        }
      }
    }
  `

  const results = await request(graphqlAPI!, query)
  return results
}

export const getHomeData = async () => {
  const query = gql`
    query GetHomeData {
      homePages {
        techStack
        aboutBlocks {
          buttons {
            id
            name
            href
          }
          id
          section
          text
        }
        fio
        headerBlocks {
          id
          subtitle
          text
          buttons {
            href
            id
            name
          }
        }
        contactsBlocks {
          id
          section
          text
          contacts {
            href
            id
            name
          }
          baseInfos {
            props
            id
            name
          }
        }
        projectsBlocks {
          section
          buttons {
            id
            name
            href
          }
          projectItems {
            id
            slider {
              id
              url
              fileName
            }
            title
            text
            stage
            stack
            buttons {
              href
              id
              name
            }
          }
        }
      }
    }
  `

  const results = await request(graphqlAPI!, query)
  return results
}

export const getAboutData = async () => {
  const query = gql`
    query GetAboutData {
      aboutBlocks {
        id
        section
        text
        buttons {
          href
          id
          name
        }
      }
      homePages {
        techStack
      }
      workHistoryBlocks {
        id
        text
        title
        section
        workHistories {
          id
          started
          title
          ended
        }
      }
      contactsBlocks {
        baseInfos {
          props
          id
          name
        }
        id
        section
        text
      }
    }
  `

  const results = await request(graphqlAPI!, query)
  return results
}
export const getContactsData = async () => {
  const query = gql`
    query GetContactsData {
      contactsBlocks {
        baseInfos {
          props
          id
          name
        }
        contacts {
          href
          id
          name
        }
        id
        section
        text
      }
    }
  `

  const results = await request(graphqlAPI!, query)
  return results
}

export const getWorksData = async () => {
  const query = gql`
    query GetWorksData {
      projectsBlocks {
        projectItems {
          id
          slider {
            id
            url
            fileName
          }
          title
          text
          stack
          buttons {
            href
            id
            name
          }
        }
      }
    }
  `

  const results = await request(graphqlAPI!, query)
  return results
}
