![[header_terminal.jpg]]
# Comando `exiftool`

---
**Tags:** #info #bash #linux 

> [!info] Volver a [[Home]] 

---
## Descripción

El comando `exiftool` es una herramienta de línea de comandos utilizada para leer, escribir y manipular metadatos de archivos en formatos de imágenes, audio, video y otros tipos de archivos. Estos metadatos incluyen información como la fecha de creación, la ubicación geográfica, la información de la cámara, el autor y otros detalles relevantes sobre el archivo. `exiftool` es especialmente útil para examinar y modificar metadatos en archivos digitales.

`exiftool` es una herramienta potente para trabajar con metadatos de archivos en una variedad de formatos. Es ampliamente utilizado en tareas de edición, análisis forense, gestión de archivos multimedia y más. Recuerda que siempre debes utilizar esta herramienta de manera responsable y ética, respetando la privacidad y los derechos de autor de los archivos.
## Casos de Uso y Ejemplos

1. **Visualización de Metadatos de Imágenes:**
   Puedes usar `exiftool` para ver los metadatos de una imagen. Por ejemplo:

   ```bash
   exiftool image.jpg
   ```

   Esto mostrará los metadatos almacenados en el archivo `image.jpg`, como la fecha, la cámara utilizada, la resolución, etc.

2. **Edición de Metadatos:**
   `exiftool` permite editar y modificar metadatos en un archivo. Por ejemplo, para cambiar el título de una imagen:

   ```bash
   exiftool -Title="Nueva Imagen" image.jpg
   ```

   Esto cambiará el título de la imagen a "Nueva Imagen".

3. **Eliminar Metadatos:**
   Puedes eliminar ciertos metadatos de un archivo utilizando `exiftool`. Por ejemplo, para eliminar todos los metadatos de una imagen:

   ```bash
   exiftool -all= image.jpg
   ```

   Esto eliminará todos los metadatos del archivo `image.jpg`.

4. **Copiar Metadatos:**
   `exiftool` permite copiar los metadatos de un archivo a otro. Por ejemplo, para copiar los metadatos de una imagen a otra:

   ```bash
   exiftool -TagsFromFile source.jpg dest.jpg
   ```

   Esto copiará los metadatos de `source.jpg` a `dest.jpg`.

5. **Listar Todos los Metadatos:**
   Puedes obtener una lista completa de todos los metadatos de un archivo utilizando `exiftool`. Por ejemplo:

   ```bash
   exiftool -a image.jpg
   ```

   Esto mostrará todos los metadatos almacenados en `image.jpg`.

6. **Procesar en Lotes:**
   `exiftool` es útil para procesar en lotes un conjunto de archivos. Por ejemplo, para cambiar la fecha de creación de todas las imágenes en un directorio:

   ```bash
   exiftool "-CreateDate=2023-01-01 00:00:00" *.jpg
   ```

   Esto cambiará la fecha de creación de todas las imágenes JPEG en el directorio.

## Otros ejemplos

Por supuesto, aquí tienes algunos ejemplos adicionales de cómo utilizar el comando `exiftool` para obtener metadatos de archivos PDF ubicados en directorios y subdirectorios de forma recursiva:

1. **Obtener Metadatos de Todos los PDFs en un Directorio y Subdirectorios:**
   Este comando busca y muestra los metadatos de todos los archivos PDF en un directorio y sus subdirectorios:

   ```bash
   exiftool -r -pdf .
   ```

   Esto muestra los metadatos de todos los archivos PDF en el directorio actual y sus subdirectorios.

2. **Exportar Metadatos a un Archivo de Texto:**
   Puedes exportar los metadatos de los PDFs a un archivo de texto para un análisis más detallado:

   ```bash
   exiftool -r -pdf . > metadatos_pdf.txt
   ```

   Esto redirige la salida de los metadatos a un archivo llamado `metadatos_pdf.txt`.

3. **Obtener Metadatos Específicos:**
   Puedes obtener metadatos específicos de los PDFs, como el título y el autor:

   ```bash
   exiftool -r -Title -Author .
   ```

   Esto muestra los títulos y autores de los archivos PDF en el directorio actual y sus subdirectorios.

4. **Obtener Información Detallada de los PDFs:**
   Puedes obtener información detallada de los PDFs, incluyendo la versión del PDF y las marcas de agua:

   ```bash
   exiftool -r -PDFVersion -Watermark .
   ```

   Esto muestra la versión del PDF y la información de marca de agua de los archivos PDF en el directorio actual y sus subdirectorios.

Recuerda ajustar la ruta del directorio en los ejemplos según la ubicación de tus archivos PDF. Estos comandos te permitirán obtener y analizar los metadatos de archivos PDF de manera recursiva en tus directorios y subdirectorios.

## Ejemplos con otros metadatos

Por supuesto, aquí tienes algunos ejemplos adicionales de cómo usar el comando `exiftool` para obtener metadatos específicos como correos electrónicos, dominios, subdominios y usuarios desde archivos PDF ubicados en directorios y subdirectorios de forma recursiva:

1. **Obtener Correos Electrónicos:**
   ```bash
   exiftool -r -s -Email* -mimetype application/pdf directory_path
   ```
   Esto buscará en el directorio y sus subdirectorios archivos PDF y mostrará los correos electrónicos encontrados en los metadatos.

2. **Obtener Dominios y Subdominios:**
   ```bash
   exiftool -r -s -URL* -Domain* -Subdomain* -mimetype application/pdf directory_path
   ```
   Esto buscará en el directorio y sus subdirectorios archivos PDF y mostrará los dominios y subdominios encontrados en los metadatos.

3. **Obtener Usuarios:**
   ```bash
   exiftool -r -s -Author* -Creator* -Producer* -Owner* -mimetype application/pdf directory_path
   ```
   Esto buscará en el directorio y sus subdirectorios archivos PDF y mostrará los usuarios encontrados en los metadatos.

Recuerda que los nombres exactos de los campos de metadatos pueden variar según el archivo PDF y cómo se creó. Puedes ajustar los nombres de campo según sea necesario para capturar los metadatos que estás buscando. Además, ten en cuenta que no todos los archivos PDF contendrán los mismos metadatos ni tendrán la misma estructura de datos, por lo que los resultados pueden variar.

Además, ten en cuenta que extraer información confidencial como correos electrónicos, dominios y usuarios de archivos puede tener implicaciones legales y éticas. Asegúrate de tener permiso para acceder a estos archivos y de utilizar esta información de manera adecuada y responsable.

---

