![[header_tux.jpg]]
# Revisar el historial de la terminal

---
**Tags:** #info #bash #linux #kali #ubuntu #rpi 
**Fecha creación:** 06.08.2023
**Fecha ultima modificación:** 06.08.2023

> [!info] Volver a [[Home]] 

>[!tip] **Guías**
>- [[Kali Linux post-instalacion]]

>[!info] Conceptos
>* [[Leyes Ciberseguridad Chile]]

---

El comando `history` en Bash se utiliza para mostrar el historial de comandos ejecutados en la sesión actual. Esta herramienta puede ser muy útil para revisar comandos recientes, repetir comandos anteriores o buscar comandos específicos en el historial.

El comando `history` es una herramienta útil para manejar el historial de comandos en una sesión de terminal. Puedes utilizarlo para recordar comandos anteriores, repetir tareas frecuentes o buscar comandos específicos según tus necesidades.
## Descripción y casos de uso del comando `history`

1. **Visualizar el historial de comandos**: El caso de uso más común es simplemente ejecutar el comando `history` sin argumentos para ver una lista numerada de los comandos previamente ejecutados en la sesión actual.
   
   Ejemplo:
   ```
   $ history
     1  ls
     2  cd Documents
     3  mkdir project
     4  git init
     5  nano README.md
     ...
   ```

2. **Repetir comandos anteriores**: Puedes reutilizar comandos anteriores ejecutando el número correspondiente del historial utilizando el comando `!`.

   Ejemplo:
   ```
   $ !3
   mkdir project
   ```

   El comando `!3` ejecuta el tercer comando en el historial, que es `mkdir project`.

3. **Buscar comandos específicos**: Puedes buscar comandos específicos en el historial utilizando el comando `history | grep [término de búsqueda]`.

   Ejemplo:
   ```
   $ history | grep git
     4  git init
     7  git add .
     9  git commit -m "Initial commit"
    12  git push origin master
   ```

   En este caso, estamos buscando todos los comandos que contienen la palabra "git" en el historial.

4. **Ejecutar comandos por número**: También puedes ejecutar comandos del historial utilizando el número correspondiente con el comando `!`.

   Ejemplo:
   ```
   $ !4
   git init
   ```

   El comando `!4` ejecuta el cuarto comando en el historial, que es `git init`.

5. **Limpiar el historial**: Si deseas limpiar el historial y eliminar todos los comandos previamente ejecutados, puedes utilizar el comando `history -c`.

   Ejemplo:
   ```
   $ history -c
   ```

   Después de ejecutar este comando, el historial se borrará y no se mostrarán comandos anteriores al utilizar `history` nuevamente.

---

## Más ejemplos

Claro, aquí tienes más ejemplos de uso del comando `history`, incluyendo cómo borrar líneas del historial sin que queden registradas en él:

1. **Borrar líneas específicas del historial**: Puedes eliminar líneas específicas del historial utilizando el comando `history -d [número de línea]`. Esto borrará la línea con el número especificado del historial. Sin embargo, ten en cuenta que esta eliminación se reflejará en el historial actual y no se registrará en el archivo de historial (por ejemplo, `~/.bash_history`).

   Ejemplo:
   ```
   $ history
     1  ls
     2  cd Documents
     3  mkdir project
     4  git init
   $ history -d 3
   $ history
     1  ls
     2  cd Documents
     4  git init
   ```

   En este ejemplo, la línea `3 mkdir project` se eliminó del historial y ya no aparece en la lista.

2. **Ejecutar comandos del historial por patrón**: Puedes ejecutar comandos del historial que coincidan con un patrón específico utilizando `!` y el patrón.

   Ejemplo:
   ```
   $ history
     1  ls
     2  cd Documents
     3  mkdir project
     4  git init
   $ !ls
   ls
   Desktop  Downloads  Documents  Music  Pictures  Videos
   ```

   En este ejemplo, el comando `!ls` ejecuta el comando `ls` del historial, que es el primer comando en la lista.

3. **Ejecutar el último comando del historial**: Puedes ejecutar el último comando del historial utilizando `!!`.

   Ejemplo:
   ```
   $ history
     1  ls
     2  cd Documents
     3  mkdir project
     4  git init
   $ !!
   git init
   ```

   En este ejemplo, `!!` ejecuta el último comando del historial, que es `git init`.

4. **Buscar y reemplazar comandos**: Puedes buscar comandos en el historial utilizando el comando `history | grep [término de búsqueda]`. Luego, puedes reemplazar un término específico por otro utilizando el comando `!!:s/[término a reemplazar]/[nuevo término]/`.

   Ejemplo:
   ```
   $ history | grep git
     4  git init
     7  git add .
     9  git commit -m "Initial commit"
    12  git push origin master
   $ !!:s/master/main/
   git push origin main
   ```

   En este ejemplo, el comando `!!:s/master/main/` reemplaza la palabra "master" por "main" y ejecuta el comando `git push origin main`.

5. **Limitar la cantidad de líneas mostradas**: Puedes limitar la cantidad de líneas mostradas en el historial utilizando `history [número]`. Esto mostrará solo las últimas `número` líneas del historial.

   Ejemplo:
   ```
   $ history 5
     8  git commit -m "Added new feature"
     9  git push origin main
    10  python3 script.py
    11  ls
    12  cd Documents
   ```

   En este ejemplo, `history 5` muestra solo las últimas 5 líneas del historial.

Estos son solo algunos ejemplos de cómo utilizar el comando `history` en diferentes situaciones. El comando `history` es una herramienta versátil que te permite administrar y utilizar el historial de comandos de manera efectiva en tu sesión de terminal.

---
## Borrar las últimas 10 líneas de historial sin que ese cambio quede registrado en el mismo historial

>[!danger] REVISAR código!!!
>El siguiente código fue generado por chatGPT. Es necesario revisarlo.

Para borrar las últimas 10 líneas del historial de comandos en Linux sin que ese cambio quede registrado en el mismo historial, puedes seguir el siguiente enfoque utilizando una combinación de comandos `history` y redireccionamiento:

```
history | head -n -10 > temp_history && history -r temp_history && rm temp_history
```

Explicación de los comandos:

1. `history`: Muestra el historial completo de comandos en la terminal.

2. `head -n -10`: `head` es un comando que muestra las primeras líneas de un archivo o entrada. Con la opción `-n -10`, le estamos diciendo que muestre todas las líneas excepto las últimas 10 del historial.

3. `>`: Redirecciona la salida del comando `head` a un archivo temporal llamado `temp_history`.

4. `history -r temp_history`: El comando `history -r` reemplaza el historial actual con el contenido del archivo `temp_history`. Esto hace que las últimas 10 líneas eliminadas del historial ya no estén presentes en la sesión actual.

5. `rm temp_history`: Por último, utilizamos el comando `rm` para eliminar el archivo `temp_history`, ya que ya no lo necesitamos.

Con esta línea de comandos, las últimas 10 líneas del historial de comandos serán borradas temporalmente de la sesión actual sin afectar el archivo de historial permanente. Es importante tener en cuenta que este cambio solo será válido para la sesión actual y no se mantendrá en futuras sesiones.

---



