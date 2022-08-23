import { render } from '@testing-library/react'
import { runSuite } from 'features'

import App from '../../../App'
import { whenUserTogglesTaskState } from '../../steps/when-user-toggles-task-state'
import {
  andTaskIsInTaskList,
  thenTaskIsInTaskList,
} from '../../steps/then-task-is-in-task-list'
import { givenUserHasTask } from '../../steps/given-user-has-task'

runSuite([
  {
    id: 'A02/T02/S01',
    rules: {
      R01: {
        examples: {
          E01: {
            title: `Usuario tiene una tarea pendiente y la marca como completa, la tarea debe quedar en la lista de tareas completadas`,
            steps: [
              givenUserHasTask,
              whenUserTogglesTaskState,
              thenTaskIsInTaskList,
              andTaskIsInTaskList,
            ],
            context: (ctx) => ({
              ...ctx,
              component: render(<App />, {}),
            }),
          },
        },
      },
    },
  },
])
