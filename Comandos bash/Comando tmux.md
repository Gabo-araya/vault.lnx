
![[header_tux.jpg]]
# Comando `tmux`

---
**Tags:** #info #tool #kali #linux #bash #completar 

> [!info] Volver a [[Home]] | [[Ciberseguridad]] 

---

El comando `tmux` es una herramienta de multiplexación de terminales que permite a los usuarios crear, gestionar y acceder a múltiples sesiones de terminal en una sola ventana o en varias ventanas separadas. Es especialmente útil para mantener múltiples tareas en un entorno de línea de comandos y para administrar sesiones de manera eficiente. 

>[!tip] Más info
>Video de apoyo: [Aprende a usar tmux](https://www.youtube.com/watch?v=tw2tjSqHiHI)
> 
> ![](https://www.youtube.com/watch?v=tw2tjSqHiHI)

`tmux` es una utilidad de terminal que proporciona una interfaz para crear y administrar múltiples sesiones, ventanas y paneles dentro de una única terminal. Esto facilita la multitarea y la organización de tareas en un entorno de línea de comandos. Las sesiones `tmux` pueden ser desacopladas y reanexadas, lo que permite que las tareas en curso sigan ejecutándose incluso después de cerrar la terminal.

## Casos de Uso y Ejemplos

1. **Crear una Sesión Nueva:**
   Puedes iniciar una nueva sesión `tmux` simplemente ingresando el comando:

   ```bash
   tmux
   ```

   Esto abrirá una nueva sesión con una ventana predeterminada.

2. **Dividir la Pantalla en Paneles:**
   Puedes dividir la ventana actual en paneles horizontales o verticales para ejecutar múltiples comandos simultáneamente. Por ejemplo:

   - Dividir en paneles horizontales: `Ctrl-b %`
   - Dividir en paneles verticales: `Ctrl-b "`

3. **Cambiar Entre Ventanas:**
   `tmux` permite crear múltiples ventanas dentro de una sesión y cambiar entre ellas. Puedes usar:

   - Cambiar a la siguiente ventana: `Ctrl-b n`
   - Cambiar a la ventana anterior: `Ctrl-b p`
   - Cambiar a una ventana específica: `Ctrl-b número_de_ventana`

4. **Desacoplar y Reanexar Sesiones:**
   Una característica poderosa de `tmux` es la capacidad de desacoplar una sesión para que siga funcionando en segundo plano y luego reanexarla en otro momento. Para desacoplar, presiona: `Ctrl-b d`. Para reanexar:

   ```bash
   tmux attach-session -t nombre_de_sesión
   ```

5. **Gestión de Sesiones y Ventanas:**
   Puedes crear y gestionar sesiones y ventanas utilizando comandos como:

   - Crear una nueva ventana: `Ctrl-b c`
   - Cambiar el nombre de la ventana actual: `Ctrl-b ,`
   - Listar sesiones existentes: `tmux list-sessions`

6. **Cerrar Sesiones y Ventanas:**
   Puedes cerrar una ventana específica o una sesión completa utilizando:

   - Cerrar la ventana actual: `Ctrl-d` o `exit`
   - Cerrar la sesión actual: `Ctrl-d` (cuando no hay ventanas abiertas)

`tmux` es especialmente útil en servidores remotos, en tareas de desarrollo y en situaciones en las que necesitas administrar múltiples tareas en la terminal. Permite un entorno más organizado y productivo al mantener múltiples sesiones y ventanas en una sola interfaz.





