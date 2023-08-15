![[header_terminal.jpg]]
# Comando `df`

---
**Tags:** #info #bash #linux 
**Fecha creación:** 02.08.2023
**Fecha ultima modificación:** 03.08.2023

>[!info] Volver a [[Home]] | [[Conocer el espacio disponible en disco]]

---

**El comando `df`** (disk free) es una herramienta de línea de comandos utilizada en sistemas Unix y Unix-like, incluyendo Linux, para mostrar información sobre el espacio disponible y utilizado en sistemas de archivos montados. Proporciona una visión general del uso de disco de las particiones y sistemas de archivos en el sistema.

El comando `df` es útil para monitorear el uso del espacio en disco en sistemas Unix y Unix-like, lo que permite a los administradores de sistema identificar particiones con poco espacio disponible, planificar el almacenamiento y realizar un seguimiento del uso del disco a lo largo del tiempo. También es útil para verificar el estado de los sistemas de archivos montados y asegurarse de que no estén alcanzando su capacidad máxima para evitar problemas de almacenamiento.

---

## Uso básico comando `df`

Mostrar el resultado en un formato legible por humanos.
```
df -h
```

Mostrar la información del uso del sistema de archivos en Mb.
```
df -m
```

Mostrar el uso del sistema en Kb.
```
df -k
```

Mostrar el tipo de sistema de archivos (aparecerá una nueva columna).
```
df -T
```

Ver información de un sistema de archivos específico en un formato legible (en este caso el sistema de archivos /home).
```
df -ht /home
```

Listar otras opciones útiles que puedes usar, con sus descripciones.
```
df -help
```

---
## Casos de uso del comando `df`

1. **Visualización del espacio disponible y utilizado en todas las particiones montadas**:
   ```
   df -h
   ```
   Este comando muestra una tabla con información sobre el espacio total, usado, disponible y porcentaje utilizado en todas las particiones montadas, en unidades legibles para humanos (KB, MB, GB, etc.).

2. **Visualización del espacio disponible y utilizado en una partición específica**:
   ```
   df -h /ruta/particion
   ```

   Este comando muestra información sobre el espacio total, usado, disponible y porcentaje utilizado en la partición específica indicada por "/ruta/particion".

3. **Visualización del espacio disponible y utilizado en un sistema de archivos específico**:
   ```
   df -hT /ruta/sistema_archivos
   ```
   Este comando muestra información sobre el espacio total, usado, disponible y porcentaje utilizado en el sistema de archivos específico indicado por "/ruta/sistema_archivos", e incluye el tipo de sistema de archivos.

4. **Visualización del espacio disponible y utilizado en todas las particiones en inodos**:
   ```
   df -i
   ```

   Este comando muestra información sobre el número de inodos (estructuras que almacenan metadatos de archivos) utilizados y disponibles en todas las particiones montadas.

5. **Visualización del espacio disponible y utilizado en todas las particiones en formato JSON**:
   ```
   df -h --output=json
   ```

   Este comando muestra información sobre el espacio disponible y utilizado en todas las particiones montadas en formato JSON, lo que facilita el procesamiento de la información por parte de scripts o herramientas de automatización.

6. **Visualización del espacio utilizado en un directorio específico**:
   ```
   df -h /ruta/directorio
   ```
   
   Este comando muestra información sobre el espacio utilizado en el sistema de archivos que contiene el directorio especificado por "/ruta/directorio".


