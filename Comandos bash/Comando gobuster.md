![[header_ethical_hacking.jpg]]
# Comando `gobuster`

---
**Tags:** #info #hacking #tool #kali #linux #bash

> [!info] Volver a [[Home]] | [[Ciberseguridad]] 

---
## Descripción

`Gobuster` es una herramienta de línea de comandos que se utiliza para realizar ataques de fuerza bruta en servidores web con el propósito de encontrar directorios y archivos ocultos o no enlazados. Esta herramienta es especialmente útil para la enumeración de recursos en aplicaciones web y la identificación de posibles puntos de entrada en servidores web.

Es importante enfatizar que `gobuster` debe utilizarse de manera ética y con el permiso adecuado. Realizar ataques de fuerza bruta en servidores web sin autorización puede ser ilegal y no ético. Siempre asegúrate de obtener la autorización del propietario del sistema antes de utilizar `gobuster` o cualquier otra herramienta de este tipo.

El comando básico de `gobuster` se ve así:

```bash
gobuster [opciones] [argumentos]
```

---
## Casos de Uso y Ejemplos

Aquí hay una descripción de algunas de las opciones y casos de uso comunes de `gobuster`:

1. **Enumeración de Directorios en un Sitio Web**:
   `Gobuster` se utiliza comúnmente para buscar directorios y archivos en un sitio web. Puedes ejecutarlo de la siguiente manera:
   ```bash
   gobuster dir -u http://example.com -w /path/to/wordlist.txt
   ```
   - `-u http://example.com`: Especifica la URL del sitio web que deseas escanear.
   - `-w /path/to/wordlist.txt`: Especifica la ubicación de un archivo de palabras (diccionario) que contiene las palabras que se utilizarán para la búsqueda de directorios y archivos.

2. **Enumeración de Extensiones de Archivos**:
   Puedes usar `gobuster` para buscar archivos con extensiones específicas en un directorio. Por ejemplo, para buscar archivos `.php` en un sitio web:
   ```bash
   gobuster dir -u http://example.com -w /path/to/wordlist.txt -x php
   ```
   - `-x php`: Especifica la extensión de archivo que deseas buscar.

3. **Enumeración de Subdominios**:
   Además de buscar directorios, `gobuster` también se puede utilizar para enumerar subdominios en un dominio. Por ejemplo:
   ```bash
   gobuster dns -d example.com -w /path/to/wordlist.txt
   ```
   - `-d example.com`: Especifica el dominio en el que deseas enumerar subdominios.

4. **Personalización de la Velocidad de Escaneo**:
   Puedes ajustar la velocidad de escaneo con la opción `-s`. Por ejemplo, para un escaneo más lento:
   ```bash
   gobuster dir -u http://example.com -w /path/to/wordlist.txt -s 10
   ```
   - `-s 10`: Establece una velocidad de escaneo más lenta (10 solicitudes por segundo).

5. **Guardado de Resultados en un Archivo**:
   Para guardar los resultados en un archivo de texto, puedes utilizar la opción `-o`. Por ejemplo:
   ```bash
   gobuster dir -u http://example.com -w /path/to/wordlist.txt -o resultados.txt
   ```
   - `-o resultados.txt`: Guarda los resultados en un archivo llamado "resultados.txt".

6. **Enumeración de Directorios con Autenticación HTTP**:
   Si el sitio web requiere autenticación HTTP básica, puedes proporcionar las credenciales utilizando las opciones `-U` para el nombre de usuario y `-P` para la contraseña. Por ejemplo:
   ```bash
   gobuster dir -u http://example.com -w /path/to/wordlist.txt -U username -P password
   ```

7. **Escaneo de un Subdirectorio Específico**:
   Puedes especificar un subdirectorio específico para iniciar el escaneo en lugar de la raíz del sitio web. Por ejemplo, para buscar en `http://example.com/subdir/`:
   ```bash
   gobuster dir -u http://example.com/subdir/ -w /path/to/wordlist.txt
   ```

8. **Enumeración de Subdominios con Wordlist Personalizada**:
   Puedes utilizar una lista de palabras personalizada para enumerar subdominios en un dominio. Por ejemplo:
   ```bash
   gobuster dns -d example.com -w /path/to/custom-wordlist.txt
   ```

9. **Escaneo con Filtros de Respuesta HTTP**:
   Puedes utilizar la opción `-f` para filtrar las respuestas HTTP basadas en el contenido. Por ejemplo, para buscar directorios que contienen la palabra "admin" en la respuesta:
   ```bash
   gobuster dir -u http://example.com -w /path/to/wordlist.txt -f "admin"
   ```

10. **Escaneo de Puertos en un Servidor Web**:
    `Gobuster` también puede utilizarse para enumerar puertos en un servidor web. Por ejemplo:
    ```bash
    gobuster port -u http://example.com -p 1-100
    ```
    - `-p 1-100`: Escanea puertos del 1 al 100 en busca de servicios web.

Estos son ejemplos adicionales de cómo puedes utilizar `gobuster` en diversas situaciones para realizar enumeración de recursos en servidores web y dominios. Recuerda siempre obtener autorización antes de utilizar esta herramienta en sistemas que no sean de tu propiedad y seguir las leyes y regulaciones aplicables.