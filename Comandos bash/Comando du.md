![[header_terminal.jpg]]
# Comando `du`

---
**Tags:** #info #bash #linux 
**Fecha creación:** 02.08.2023
**Fecha ultima modificación:** 03.08.2023

> [!info] Volver a [[Home]] | [[Conocer el espacio disponible en disco]]

---

**El comando `du`** (Disk Usage) es una herramienta de línea de comandos que se utiliza para mostrar el uso del espacio en disco de archivos y directorios en sistemas Unix y Unix-like, incluyendo Linux. Proporciona información sobre el tamaño de los archivos y directorios, lo que permite a los usuarios identificar qué elementos están ocupando más espacio en el disco.

Es importante tener en cuenta que, aunque el comando `du` proporciona información útil sobre el uso del espacio en disco, puede llevar tiempo escanear grandes sistemas de archivos. Si se utiliza con opciones incorrectas, puede generar un gran volumen de información. Por lo tanto, es recomendable revisar la documentación y las opciones disponibles para adaptar el comando según las necesidades específicas de uso.

---
## Uso básico de `du`

Uso básico del comando
```
du <options> <location of directory or file>
```

Permite a los usuarios ver el uso del disco de los archivos y las carpetas que están en el directorio Desktop (los subdirectorios se incluyen también).
```
du /home/user/Desktop
```

Al igual que con `df`, la opción `-h` muestra información en un formato legible por humanos.
```
du -h /home/user/Desktop
```

La opción `-s` nos da el tamaño total de una carpeta especifica (en este caso, el directorio Desktop).
```
du -sh /home/user/Desktop
```

La opción `-m` nos proporciona los tamaños de carpetas y archivos en Megabytes (podemos usar -k para ver la información en Kilobytes).
```
du -m /home/user/Desktop
```

Informa la última fecha de modificación de los archivos y carpetas mostrados.
```
du -h –time /home/user/Desktop
```

Muestra una lista de opciones disponibles y para qué se pueden utilizar.

```
du –-help
```

---
## Casos de uso del comando `du`

1. **Visualización del tamaño de un directorio específico**:
   ```
   du -h /ruta/directorio
   ```
   Este comando muestra el tamaño de un directorio específico y sus subdirectorios de manera human-readable (en unidades legibles para humanos, como KB, MB, GB, etc.).

2. **Visualización del tamaño de todos los directorios en un directorio**:
   ```
   du -h /ruta/directorio/*
   ```
   Este comando muestra el tamaño de todos los directorios directamente dentro de un directorio específico de manera human-readable.

3. **Visualización del uso de espacio en disco en todo el sistema**:
   ```
   sudo du -h /
   ```
   Este comando muestra el tamaño de todos los directorios y subdirectorios en el sistema de archivos raíz (/) de manera human-readable. Es necesario usar "sudo" para obtener información sobre todos los archivos, incluso aquellos que requieren permisos de administrador.

4. **Visualización del uso de espacio en disco ordenado por tamaño**:
   ```
   du -h | sort -h
   ```
   Este comando muestra el uso de espacio en disco para todos los archivos y directorios en el directorio actual y sus subdirectorios, ordenados de menor a mayor tamaño.

5. **Visualización del tamaño de un archivo específico**:
   ```
   du -h archivo.txt
   ```
   Este comando muestra el tamaño de un archivo específico de manera human-readable.

6. **Visualización del tamaño de un directorio excluyendo subdirectorios**:
   ```
   du -h --max-depth=1 /ruta/directorio
   ```
   Este comando muestra el tamaño del directorio específico y excluye la información sobre el tamaño de sus subdirectorios.

7. Ordenar archivos por tamaño

   Primero, reunimos los archivos y carpetas en Desktop en un formato legible usando el comando `du`. Luego, usamos pipe para enviar el resultado al comando `sort`, junto con la opción `-rn`. El script ordenará todos los archivos y carpetas de mayor a menor para comprobar el uso de espacio de disco en Linux. La combinación debería ser así:
   ```
   du -h /home/user/Desktop/ | sort –rn 
   ```

8. Excluir por tamaño de archivo

   Supongamos que quieres ver todos los archivos que superan un determinado tamaño. La manera más efectiva de hacerlo es usando el comando que se muestra a continuación:
   ```
   du -h /home/user/Desktop | grep '^\s*[0-9\.]\+G'
   ```

   El comando `grep` nos permite buscar archivos basados en un patrón especificado.
   En este ejemplo, el script devolverá todos los archivos mayores a 1 GB.
   Si deseas seleccionar los datos de más de 1 MB, puedes sustituir la G por la M.

9. Excluir tipos de archivo

   La última combinación es útil cuando se necesita excluir un formato de archivo concreto de los resultados de la búsqueda. Por ejemplo:
   ```
   du -h /home/user/Desktop/ --exclude="*.txt"
   ```

   El argumento `-exclude=».txt»` hace que el comando `du` muestre todos los formatos de archivo excepto los documentos .txt.


