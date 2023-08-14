![[header_terminal.jpg]]
# Conocer el espacio disponible en disco

---
**Tags:** #info #linux #bash #ubuntu #kali 
**Fecha creación:** 03.08.2023
**Fecha ultima modificación:** 03.08.2023

> [!info] Volver a [[Home]] | [[Ciberseguridad]]

---
## 1. Comando `df`

>[!tip] **Revisar la guía de [[Comando df]]**

  - Mostrar el resultado en un formato legible por humanos.
    - `df -h`
  - Mostrar la información del uso del sistema de archivos en MB.  
    - `df -m`
  - Mostrar el uso del sistema en KB.
    - `df -k`
  - Mostrar el tipo de sistema de archivos (aparecerá una nueva columna).
    - `df -T`
  - Ver información de un sistema de archivos específico en un formato legible (en este caso el sistema de archivos /home).
    - `df -ht /home`
  - Listar otros comandos útiles que puedes usar, con sus descripciones.
    - `df -help`


---
## 2. Comando `du`

>[!tip] **Revisar la guía de [[Comando du]]**

  - Uso básico del comando
    - `du <options> <location of directory or file>`
  - Permite a los usuarios ver el uso del disco de los archivos y las carpetas que están en el directorio Desktop (los subdirectorios se incluyen también).
    - `du /home/user/Desktop/`
  - Al igual que con `df`, la opción `-h` muestra información en un formato legible por humanos.
    - `du -h /home/user/Desktop/`
  - La opción `-s` nos da el tamaño total de una carpeta especifica (en este caso, el directorio Desktop).
    - `du -sh /home/user/Desktop/`
  - La opción `-m` nos proporciona los tamaños de carpetas y archivos en Megabytes (podemos usar -k para ver la información en Kilobytes).
    - `du -m /home/user/Desktop/`
  - Informa la última fecha de modificación de los archivos y carpetas mostrados.
    - `du -h –time /home/user/Desktop/`
  - Muestra una lista de opciones disponibles y para qué se pueden utilizar.
    - `du –help`

---

