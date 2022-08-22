import { render } from '@testing-library/react'
import { runSuite } from 'features'

import {
  andUserSubmitsForm,
  givenUserNavigates,
  thenUserCanSeeTask,
  whenUserEntersTaskName,
} from '../../steps'
import App from '../../../App'

runSuite([
  {
    id: 'A02/T01/S01',
    rules: {
      R01: {
        examples: {
          E01: {
            title: `Usuario ingresa al sitio, navega al formulario de creación de tareas, e ingresa el nombre de la tarea`,
            steps: [
              givenUserNavigates,
              whenUserEntersTaskName,
              andUserSubmitsForm,
              thenUserCanSeeTask,
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
