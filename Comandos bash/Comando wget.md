
![[header_terminal.jpg]]
# Comando `wget`

---
**Tags:** #info #bash #linux 

>[!info] Volver a [[Home]] 

---

El comando `wget` es una herramienta de línea de comandos utilizada para descargar archivos y recursos desde la web. Es ampliamente utilizado para obtener contenido de Internet de manera automatizada y sencilla. 

`wget` es una utilidad que permite la descarga de archivos a través de HTTP, HTTPS y FTP. Ofrece varias opciones para controlar la forma en que se descargan los archivos, como resumir descargas interrumpidas, descargar de manera recursiva, convertir enlaces para funcionar localmente, entre otras.

## Casos de Uso y Ejemplos

1. **Descarga de un Archivo Simple:**
   Puedes usar `wget` para descargar un archivo específico desde una URL. Por ejemplo:

   ```bash
   wget https://example.com/archivo.txt
   ```

   Esto descargará el archivo `archivo.txt` desde `example.com`.

2. **Descarga de un Sitio Web Completo:**
   Para descargar un sitio web completo, incluyendo todas las páginas y recursos relacionados, puedes usar la opción `--recursive`. Por ejemplo:

   ```bash
   wget --recursive --no-clobber --page-requisites --html-extension --convert-links --restrict-file-names=windows --domains website.com --no-parent www.website.com
   ```

   Esto descargará todas las páginas y recursos del sitio web `website.com` en un directorio local.

3. **Resumen de una Descarga Interrumpida:**
   Si una descarga se interrumpió, puedes reanudarla utilizando la opción `-c` (continuar). Por ejemplo:

   ```bash
   wget -c https://example.com/archivo-grande.zip
   ```

   Esto continuará la descarga del archivo `archivo-grande.zip`.

4. **Descarga de un Archivo con Autenticación:**
   Si la descarga requiere autenticación, puedes utilizar las opciones `--user` y `--password`. Por ejemplo:

   ```bash
   wget --user=username --password=password https://example.com/archivo-privado.txt
   ```

   Esto descargará el archivo `archivo-privado.txt` con las credenciales proporcionadas.

5. **Descarga en Segundo Plano:**
   Puedes usar `wget` en segundo plano agregando `&` al final del comando. Por ejemplo:

   ```bash
   wget https://example.com/archivo-grande.zip &
   ```

   Esto ejecutará la descarga en segundo plano.

En resumen, `wget` es una herramienta versátil para descargar archivos y recursos desde la web. Puede ser utilizado para descargas simples, descargas recursivas de sitios web, descargas con autenticación y más. Sus opciones flexibles lo hacen una herramienta esencial para automatizar la obtención de contenido de Internet.

---

