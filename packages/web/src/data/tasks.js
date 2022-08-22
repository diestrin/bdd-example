import { fetchApi } from '../lib/api'

import {
  CREATE_TASK,
  DELETE_TASK,
  UPDATE_TASK_NAME,
  UPDATE_TASK_STATUS,
} from './mutations'
import { QUERY_ALL_TASKS } from './queries'

export const fetchTasks = async (params = {}) => {
  const data = await fetchApi(QUERY_ALL_TASKS, {
    variables: {
      ...params,
    },
  })

  return data.tasks.data
}

export const createTask = async ({ name }) => {
  const data = await fetchApi(CREATE_TASK, {
    variables: {
      input: {
        name,
      },
    },
  })

  return data.createTask.data
}

export const updateTaskStatus = async (id, { status }) => {
  const data = await fetchApi(UPDATE_TASK_STATUS, {
    variables: {
      id,
      status,
    },
  })

  return data.updateTask.data
}

export const updateTaskName = async (id, { name }) => {
  const data = await fetchApi(UPDATE_TASK_NAME, {
    variables: {
      id,
      name,
    },
  })

  return data.updateTask.data
}

export const deleteTask = async (id) => {
  const data = await fetchApi(DELETE_TASK, {
    variables: {
      id,
    },
  })

  return data.deleteTask.data
}
