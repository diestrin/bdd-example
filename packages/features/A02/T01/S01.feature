Feature: A02.T01.S01
  Como usuario
  quiero ingresar una tarea en el sistema usando únicamente el nombre de la tarea
  para así poder completarla luego

  Rule: R01
    El usuario ingresa el nombre de la tarea (requerido) en un formulario

    Example: (R01.E01) Usuario ingresa al sitio, navega al formulario de creación de tareas, e ingresa el nombre de la tarea
      Given a user navigates to the "TodoForm" form
      When the user enters the task name "My Task"
      And the user submits the form
      Then the user can see the task "My Task" in the task list
