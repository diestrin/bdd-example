Feature: A02.T02.S01
  Como usuario
  quiero marcar una tarea como completa
  para así remover la tarea de la lista de tareas pendientes

  Rule: R01
    Al marcar la tarea como completa, la tarea debe quedar en la lista de tareas completadas

    Example: (R01.E01) Usuario tiene una tarea pendiente y la marca como completa, la tarea debe quedar en la lista de tareas completadas
      Given a user has a task "My Task"
      When the user clicks the toggle button to mark the task "My Task" as "completed"
      Then the task "My Task" disappears from the list of pending tasks
      And the task "My Task" appears in the list of completed tasks
