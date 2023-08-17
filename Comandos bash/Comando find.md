![[header_terminal.jpg]]
# Comando `find`

---
**Tags:** #info #bash #linux 
**Fecha creación:** 17.08.2023
**Fecha ultima modificación:** 17.08.2023


> [!info] Volver a [[Home]] 

---

**Descripción del programa `find` y sus casos de uso:**

`find` es un comando de búsqueda en sistemas basados en Unix y Linux que se utiliza para buscar archivos y directorios en una estructura de directorios específica. Proporciona una forma poderosa de buscar archivos basados en varios criterios, como nombres, tipos, tamaños y fechas de modificación.

`find` es una herramienta versátil para buscar archivos y directorios en el sistema. Puede ser útil para tareas de administración de sistemas, organización de archivos y manipulación de archivos en lote. Se adapta a diversas necesidades de búsqueda y se combina con otras utilidades para realizar acciones específicas en los resultados encontrados.

## Casos de uso y ejemplos de `find`

1. **Búsqueda por nombre de archivo:**

   ```bash
   find /ruta/de/busqueda -name "nombre_archivo"
   ```

   Encuentra todos los archivos con el nombre especificado en la ruta de búsqueda.

2. **Búsqueda por tipo de archivo:**

   ```bash
   find /ruta/de/busqueda -type f
   ```

   Encuentra todos los archivos en la ruta de búsqueda.

3. **Búsqueda por tamaño de archivo:**

   ```bash
   find /ruta/de/busqueda -size +10M
   ```

   Encuentra archivos con un tamaño mayor a 10 megabytes en la ruta de búsqueda.

4. **Búsqueda por extensión de archivo:**

   ```bash
   find /ruta/de/busqueda -name "*.txt"
   ```

   Encuentra archivos con la extensión ".txt" en la ruta de búsqueda.

5. **Búsqueda en una profundidad específica:**

   ```bash
   find /ruta/de/busqueda -maxdepth 2
   ```

   Limita la búsqueda a una profundidad máxima de 2 directorios.

6. **Búsqueda por fecha de modificación:**

   ```bash
   find /ruta/de/busqueda -mtime -7
   ```

   Encuentra archivos modificados en los últimos 7 días en la ruta de búsqueda.

7. **Ejecutar una acción en los resultados:**

   ```bash
   find /ruta/de/busqueda -name "archivo.txt" -exec ls -l {} \;
   ```

   Lista los detalles (`ls -l`) de los archivos encontrados con el nombre "archivo.txt".

8. **Búsqueda y eliminación de archivos:**

   ```bash
   find /ruta/de/busqueda -name "archivo.txt" -delete
   ```

   Encuentra y elimina archivos con el nombre "archivo.txt" en la ruta de búsqueda.

9. **Búsqueda inversa:**

   ```bash
   find /ruta/de/busqueda -not -name "archivo.txt"
   ```

   Encuentra todos los archivos excepto los que tienen el nombre "archivo.txt".



---
