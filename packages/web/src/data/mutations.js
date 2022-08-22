export const CREATE_TASK = `
  mutation CreateTask($input: TaskInput!) {
    createTask(data: $input) {
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

export const UPDATE_TASK_STATUS = `
  mutation UpdateTaskStatus($id: ID!, $status: ENUM_TASK_STATUS!) {
    updateTask(id: $id, data: {status: $status}) {
      data {
        id
      }
    }
  }
`

export const UPDATE_TASK_NAME = `
  mutation UpdateTaskName($id: ID!, $name: String!) {
    updateTask(id: $id, data: {name: $name}) {
      data {
        id
      }
    }
  }
`

export const DELETE_TASK = `
  mutation DeleteTaskName($id: ID!) {
    deleteTask(id: $id) {
      data {
        id
      }
    }
  }
`
