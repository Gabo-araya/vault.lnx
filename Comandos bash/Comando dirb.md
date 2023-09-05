![[header_ethical_hacking.jpg]]
# Comando `dirb`

---
**Tags:** #info #hacking #tool #kali #linux #bash

> [!info] Volver a [[Home]] | [[Ciberseguridad]] 

---
## Descripción

El comando `dirb` es una herramienta de línea de comandos utilizada para realizar escaneos de directorios y archivos en servidores web. Su principal propósito es identificar recursos ocultos o no enlazados en un sitio web mediante la fuerza bruta, utilizando un diccionario de palabras (wordlist) para adivinar las rutas de acceso a esos recursos. 

Recuerda que es fundamental utilizar `dirb` de manera ética y con permiso adecuado. Escanear sitios web sin autorización puede ser ilegal y perjudicial. Siempre asegúrate de obtener la autorización del propietario del sistema antes de utilizar `dirb` o cualquier otra herramienta de escaneo de directorios en sistemas que no sean de tu propiedad.

A continuación, se describe el comando `dirb` y se proporcionan ejemplos de sus casos de uso:

---
### Comando `dirb` Básico:

El comando `dirb` tiene la siguiente sintaxis básica:

```bash
dirb URL [opciones]
```

Donde `URL` es la dirección del servidor web que deseas escanear y `[opciones]` son las configuraciones adicionales que puedes especificar.

---
### Casos de Uso y Ejemplos:

1. **Escaneo de Directorios en un Sitio Web**:
   El caso de uso más común de `dirb` es escanear un sitio web en busca de directorios y archivos ocultos o no enlazados. Aquí hay un ejemplo:

   ```bash
   dirb http://example.com/
   ```

   Este comando escaneará el sitio web en `http://example.com/` utilizando el diccionario de palabras predeterminado de `dirb` y mostrará los resultados en la terminal.

2. **Especificar un Diccionario de Palabras Personalizado**:
   Puedes utilizar un diccionario de palabras personalizado para la búsqueda de directorios y archivos. Por ejemplo:

   ```bash
   dirb http://example.com/ /path/to/custom-wordlist.txt
   ```

   Esto ejecutará `dirb` en `http://example.com/` utilizando el diccionario de palabras personalizado ubicado en `/path/to/custom-wordlist.txt`.

3. **Especificar la Extensión de Archivo**:
   Si estás interesado en buscar archivos con una extensión específica, puedes utilizar la opción `-X`. Por ejemplo:

   ```bash
   dirb http://example.com/ -X .php
   ```

   Esto buscará archivos con la extensión ".php" en el sitio web.

4. **Especificar una Cadena de Encabezado Personalizada**:
   Puedes usar la opción `-H` para agregar una cadena de encabezado personalizada a tus solicitudes HTTP. Esto es útil si deseas simular una solicitud específica. Por ejemplo:

   ```bash
   dirb http://example.com/ -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)"
   ```

   Esto incluirá un encabezado "User-Agent" personalizado en cada solicitud.

5. **Guardar los Resultados en un Archivo**:
   Si deseas guardar los resultados en un archivo en lugar de mostrarlos en la terminal, puedes utilizar la opción `-o`. Por ejemplo:

   ```bash
   dirb http://example.com/ -o resultados.txt
   ```

   Esto guardará los resultados en un archivo llamado "resultados.txt".

6. **Especificar una Contraseña para Autenticación HTTP**:
   Si el sitio web requiere autenticación HTTP básica, puedes especificar un nombre de usuario y una contraseña utilizando las opciones `-a` y `-b`. Por ejemplo:

   ```bash
   dirb http://example.com/ -a username:password
   ```

   Esto proporcionará las credenciales necesarias para la autenticación HTTP básica.

7. **Ejecutar en Segundo Plano**:
   Puedes ejecutar `dirb` en segundo plano utilizando la opción `-r`. Esto es útil si deseas que el escaneo continúe en segundo plano y poder recuperar los resultados más tarde. Por ejemplo:

   ```bash
   dirb http://example.com/ -r
   ```

   Esto ejecutará `dirb` en segundo plano.

8. **Escaneo de Subdirectorios Específicos**:
   Si deseas buscar solo en un subdirectorio específico del sitio web, puedes especificarlo en la URL. Por ejemplo:

   ```bash
   dirb http://example.com/subdirectory/
   ```

   Esto limitará el escaneo al subdirectorio especificado.

9. **Escaneo en un Puerto Específico**:
   Puedes especificar un puerto específico al escanear un sitio web si no utiliza el puerto predeterminado 80. Por ejemplo, para escanear un sitio en el puerto 8080:

   ```bash
   dirb http://example.com:8080/
   ```

   Esto escaneará el sitio web en `http://example.com:8080/`.

10. **Configuración de Tiempo de Espera Personalizado**:
    Puedes configurar el tiempo de espera (timeout) para las solicitudes utilizando la opción `-t`. Por ejemplo, para un tiempo de espera de 10 segundos:

    ```bash
    dirb http://example.com/ -t 10
    ```

    Esto establecerá el tiempo de espera en 10 segundos para cada solicitud.

11. **Exclusión de Códigos de Respuesta**:
    Puedes excluir códigos de respuesta HTTP específicos utilizando la opción `-N`. Por ejemplo, para excluir las respuestas con el código de estado 403 (prohibido) y 404 (no encontrado):

    ```bash
    dirb http://example.com/ -N 403,404
    ```

    Esto evitará que `dirb` informe directorios que resulten en esos códigos de respuesta.

12. **Escaneo con Autenticación HTTP Digest**:
    Si el sitio web utiliza autenticación HTTP Digest, puedes proporcionar las credenciales utilizando la opción `-a`. Por ejemplo:

    ```bash
    dirb http://example.com/ -a username:password
    ```

    Esto proporcionará las credenciales necesarias para la autenticación HTTP Digest.

13. **Uso de Autenticación por Certificado SSL**:
    Si el sitio web utiliza autenticación de cliente SSL, puedes especificar un archivo de certificado y clave utilizando las opciones `-c` y `-k`. Por ejemplo:

    ```bash
    dirb https://example.com/ -c /path/to/client_certificate.crt -k /path/to/client_key.key
    ```

    Esto proporcionará el certificado y la clave necesarios para la autenticación SSL.

14. **Escaneo Recursivo**:
    Puedes utilizar la opción `-r` para realizar un escaneo recursivo, que explorará los directorios encontrados en busca de más directorios. Por ejemplo:

    ```bash
    dirb http://example.com/ -r
    ```

    Esto realizará un escaneo recursivo en el sitio web.

15. **Escaneo de Varias URL**:
    Puedes escanear múltiples URL al proporcionar un archivo de entrada que contenga las direcciones a escanear. Por ejemplo:

    ```bash
    dirb -L /path/to/url-list.txt
    ```

    Donde `/path/to/url-list.txt` contiene las URL a escanear.

Estos son ejemplos adicionales de cómo puedes utilizar `dirb` en diversas situaciones para realizar escaneos de directorios y archivos en servidores web. Recuerda siempre obtener autorización antes de utilizar esta herramienta en sistemas que no sean de tu propiedad y seguir las leyes y regulaciones aplicables.

---
