![[header_hacking.jpg]]
# Comando `sublist3r`

---
**Tags:** #info #hacking #tool #kali #linux #bash
**Fecha creación:** 15.08.2023
**Fecha ultima modificación:** 15.08.2023

> [!info] Volver a [[Home]] | [[Ciberseguridad]] 

>[!tip] **Revisar la guía sobre [[Escanear puertos]]**

---

`Sublist3r` es una herramienta de línea de comandos en Python diseñada para descubrir subdominios de un dominio específico. Utiliza técnicas de búsqueda en fuentes públicas y servicios en línea para enumerar subdominios que pueden ser útiles en evaluaciones de seguridad, pruebas de penetración o investigación de activos en línea.

`Sublist3r` es una herramienta útil para identificar subdominios que pueden haber sido omitidos en la configuración de DNS o que podrían ser explotables en un contexto de seguridad. Se recomienda su uso en pruebas éticas de penetración y en la gestión de activos de dominios.

## Casos de uso y ejemplos de `sublist3r`

1. **Descubrimiento de subdominios:**

   ```bash
   sublist3r -d example.com
   ```

   Este comando descubrirá subdominios relacionados con `example.com` utilizando fuentes públicas en línea.

2. **Guardar resultados en un archivo:**

   ```bash
   sublist3r -d example.com -o resultados.txt
   ```

   Guarda los resultados del descubrimiento de subdominios en el archivo `resultados.txt`.

3. **Utilizar múltiples motores de búsqueda:**

   ```bash
   sublist3r -d example.com -v
   ```

   Habilita la opción de búsqueda en múltiples motores de búsqueda en línea para obtener una lista más completa de subdominios.

4. **Buscar subdominios con recursividad:**

   ```bash
   sublist3r -d example.com -r
   ```

   Realiza una búsqueda recursiva de subdominios, es decir, busca subdominios de los subdominios encontrados inicialmente.

5. **Buscar subdominios usando un archivo de lista:**

   ```bash
   sublist3r -l list.txt
   ```

   En lugar de proporcionar un solo dominio, puedes proporcionar una lista de dominios en el archivo `list.txt` y la herramienta buscará subdominios para cada uno.

6. **Buscar subdominios en paralelo:**

   ```bash
   sublist3r -d example.com -t 10
   ```

   Especifica el número de hilos (`-t`) para realizar la búsqueda en paralelo, lo que puede acelerar el proceso en sistemas con múltiples núcleos.

7. **Utilizar diferentes fuentes de búsqueda:**

   ```bash
   sublist3r -d example.com -e baidu,yahoo
   ```

   Permite especificar fuentes de búsqueda específicas utilizando la opción `-e`.



---

