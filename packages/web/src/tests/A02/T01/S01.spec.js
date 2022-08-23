import { runSuite } from 'features'

import {
  andUserSubmitsForm,
  givenUserNavigates,
  thenUserCanSeeTask,
  whenUserEntersTaskName,
} from '../../steps'

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
          },
        },
      },
    },
  },
])
