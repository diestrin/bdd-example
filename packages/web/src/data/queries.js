export const QUERY_ALL_TASKS = `
  query {
    tasks {
      data {
        id
        attributes {
          name
          status
        }
      }
    }
  }
`
