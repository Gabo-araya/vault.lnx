![[header_terminal.jpg]]
# Configuración de GIT con GitHub
---
**Tags:** #info #bash #git #github #completar 
**Fecha creación:** 06.08.2023
**Fecha ultima modificación:** 06.08.2023

> [!info] Volver a [[Home]] | [[Datos iniciales GitHub]]

---

Git es un sistema de control de versiones distribuido ampliamente utilizado para el seguimiento de cambios en archivos y proyectos de desarrollo de software. Fue creado por Linus Torvalds en 2005 y se ha convertido en una herramienta esencial para desarrolladores y equipos de desarrollo en todo el mundo.

---
## Descripción

Git es una herramienta de línea de comandos que permite a los usuarios realizar varias operaciones, como crear, clonar, gestionar ramas, fusionar cambios, revertir cambios, entre otras, en un repositorio de Git. Utiliza un modelo distribuido, lo que significa que cada desarrollador tiene una copia completa del historial del proyecto en su máquina local, lo que permite trabajar de forma independiente y colaborar con otros de manera eficiente.

---
## Casos de uso de Git relacionados con GitHub

GitHub es una plataforma de alojamiento de código basada en Git que permite a los desarrolladores compartir y colaborar en proyectos de software. A continuación, se presentan algunos casos de uso comunes de Git en combinación con GitHub:

1. **Clonar un repositorio**: Para obtener una copia de un repositorio alojado en GitHub en tu máquina local, se utiliza el comando `git clone`. Por ejemplo:
   ```
   git clone https://github.com/usuario/nombre-repositorio.git
   ```

2. **Agregar y confirmar cambios**: Después de realizar modificaciones en los archivos del repositorio, se utilizan los comandos `git add` y `git commit` para agregar y confirmar los cambios. Por ejemplo:
   ```
   git add archivo_modificado.py
   git commit -m "Agregado nuevo código"
   ```

3. **Enviar cambios al repositorio remoto (GitHub)**: Para enviar los cambios confirmados al repositorio en GitHub, se utiliza el comando `git push`. Por ejemplo:
   ```
   git push origin nombre-rama
   ```

4. **Actualizar el repositorio local con los cambios remotos**: Para obtener los cambios realizados por otros colaboradores en el repositorio remoto y actualizar tu repositorio local, se utiliza el comando `git pull`. Por ejemplo:
   ```
   git pull origin nombre-rama
   ```

5. **Crear y gestionar ramas**: Git permite crear ramas para desarrollar nuevas funcionalidades o trabajar en problemas específicos. El comando `git branch` crea una nueva rama y `git checkout` cambia entre ramas. Por ejemplo:
   ```
   git branch nueva-funcionalidad
   git checkout nueva-funcionalidad
   ```

6. **Fusionar ramas**: Después de completar una nueva funcionalidad o resolver problemas, puedes fusionar la rama con la rama principal utilizando `git merge`. Por ejemplo:
   ```
   git checkout rama-principal
   git merge nueva-funcionalidad
   ```

7. **Crear y aplicar etiquetas (tags)**: Git permite crear etiquetas para marcar versiones importantes de tu proyecto. El comando `git tag` crea una etiqueta y `git push --tags` envía las etiquetas al repositorio remoto. Por ejemplo:
   ```
   git tag v1.0.0
   git push --tags
   ```

Estos son solo algunos ejemplos de cómo utilizar Git en conjunto con GitHub. Git proporciona una amplia variedad de comandos y características para controlar el versionado de proyectos de manera efectiva, facilitando la colaboración y el trabajo en equipo en el desarrollo de software.

---
## Conectar Git con Github

Estas líneas de historial de Bash están relacionadas con la configuración inicial y el uso básico de Git, un sistema de control de versiones. 

Estas líneas de historial de Bash representan los pasos iniciales para configurar Git con el nombre y correo electrónico del usuario, verificar la versión de Git instalada, ver la configuración actual de Git y luego inicializar un nuevo repositorio de Git en el directorio donde se encuentran los ejercicios de la clase 15. Una vez inicializado el repositorio, el usuario puede comenzar a utilizar Git para rastrear y gestionar los cambios en los archivos dentro de ese directorio.

> [!info] Más info
> - https://docs.github.com/es/authentication/connecting-to-github-with-ssh
> - https://docs.github.com/es/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account


```
git config --global user.name
git config --global user.email
git --version
git config --list
cd /home/gabo/Documentos/ejercicios/clase15
git init
```

A continuación, te explico el contexto de cada línea:

1. `git config --global user.name`: Esta línea de comando se utiliza para configurar globalmente el nombre del usuario en Git. Al configurar el nombre de usuario de esta manera, cualquier cambio que realices en los repositorios de Git en este sistema utilizará este nombre como el autor de los cambios.

2. `git config --global user.email`: De manera similar al comando anterior, esta línea de comando se utiliza para configurar globalmente el correo electrónico del usuario en Git. El correo electrónico se asocia con el nombre de usuario y se utiliza para identificar el autor de los cambios en los repositorios.

3. `git --version`: Al ejecutar esta línea de comando, se muestra la versión de Git instalada en el sistema. Esto es útil para verificar si Git está instalado correctamente y para conocer la versión utilizada.

4. `git config --list`: Esta línea de comando muestra la configuración actual de Git. Puede mostrar información como el nombre del usuario, el correo electrónico y otras opciones de configuración que se hayan establecido previamente.

5. `cd /home/gabo/Documentos/ejercicios/clase15`: Esta línea cambia el directorio actual a `/home/gabo/Documentos/ejercicios/clase15`, lo que indica que el usuario se está moviendo al directorio donde se encuentran los ejercicios de la clase 15.

6. `git init`: Este comando se utiliza para inicializar un nuevo repositorio de Git en el directorio actual. Después de ejecutar este comando, el directorio se convierte en un repositorio de Git y se crea una carpeta oculta `.git`, que contiene toda la información necesaria para el control de versiones.

---
## Ejemplos de uso de Git

Se tiene el siguiente historial de una terminal. Se necesita entender el contexto de estas lineas de historial de bash: 

```
git status
git commit -m 
git commit -m "avance en funcionalidad para ver_rol_periodo "
git status
git rm historial.zip
git rm informe.pdf
git status
git push
git status
git reset HEAD historial.zip
git reset HEAD informe.pdf
git status
git add
git add .
git status
python3 manage.py runserver 9000
git log --oneline
python3 manage.py runserver 9000
git status
git add -A
git commit -m "ver_rol_periodo: lista guardias por periodo + modal rol + cant_hrs_trabajadas"
git push -u origin main
python3 manage.py runserver 9000
git status
git add -A
git commit -m "ver_rol_periodo: horas trabajadas, contratadas, diferencia, valor hora extra turno"
git push -u origin main
```

Las líneas de historial de Bash muestran una serie de comandos relacionados con el uso de Git y el desarrollo de un proyecto. A continuación, te explico el contexto de cada línea:

1. `git status`: Muestra el estado actual del repositorio de Git, incluyendo información sobre los archivos modificados, agregados o eliminados.

2. `git commit -m`: Se utiliza para confirmar los cambios realizados en el repositorio y agregar un mensaje descriptivo que indica el propósito de la confirmación.

3. `git commit -m "avance en funcionalidad para ver_rol_periodo "`: Confirma los cambios realizados con un mensaje que indica que se ha realizado un avance en la funcionalidad para ver el rol por periodo.

4. `git status`: Muestra el estado actual del repositorio después de la confirmación anterior.

5. `git rm historial.zip`: Elimina el archivo `historial.zip` del repositorio.

6. `git rm informe.pdf`: Elimina el archivo `informe.pdf` del repositorio.

7. `git status`: Muestra el estado actual del repositorio después de eliminar los archivos mencionados.

8. `git push`: Envía los cambios confirmados al repositorio remoto.

9. `git status`: Muestra el estado actual del repositorio después de enviar los cambios al repositorio remoto.

10. `git reset HEAD historial.zip`: Deshace los cambios en el archivo `historial.zip` que se agregaron previamente al área de preparación.

11. `git reset HEAD informe.pdf`: Deshace los cambios en el archivo `informe.pdf` que se agregaron previamente al área de preparación.

12. `git status`: Muestra el estado actual del repositorio después de deshacer los cambios en los archivos mencionados.

13. `git add`: Agrega archivos al área de preparación para ser confirmados.

14. `git add .`: Con punto al final **agrega todos los archivos modificados** al área de preparación.

15. `git status`: Muestra el estado actual del repositorio después de agregar los archivos al área de preparación.

16. `python3 manage.py runserver 9000`: Ejecuta el servidor de desarrollo para el proyecto en el puerto 9000 utilizando Django.

17. `git log --oneline`: Muestra el historial de confirmaciones en una sola línea, con mensajes resumidos.

18. `python3 manage.py runserver 9000`: Vuelve a ejecutar el servidor de desarrollo para el proyecto en el puerto 9000.

19. `git status`: Muestra el estado actual del repositorio después de ejecutar el servidor de desarrollo.

20. `git add -A`: Agrega todos los archivos modificados, eliminados y creados al área de preparación.

21. `git commit -m "ver_rol_periodo: lista guardias por periodo + modal rol + cant_hrs_trabajadas"`: Confirma los cambios realizados con un mensaje que indica las adiciones realizadas en la funcionalidad de "ver_rol_periodo".

22. `git push -u origin main`: Envía los cambios confirmados al repositorio remoto en la rama principal (main).

En resumen, estas líneas de historial de Bash representan una serie de comandos utilizados para realizar cambios en un repositorio de Git, confirmar esos cambios, ejecutar el servidor de desarrollo del proyecto y enviar los cambios al repositorio remoto para colaborar con otros desarrolladores y mantener un registro del progreso del proyecto.

---


