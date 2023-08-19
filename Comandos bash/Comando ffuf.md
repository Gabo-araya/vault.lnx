![[header_ethical_hacking.jpg]]
# Comando `ffuf`

---
**Tags:** #info #hacking #tool #kali #linux #bash

> [!info] Volver a [[Home]] | [[Ciberseguridad]] 

---
## Descripción

El comando `ffuf` es una herramienta de fuzzing web rápida y flexible que permite automatizar la búsqueda de vulnerabilidades en aplicaciones web al variar los valores de los parámetros y las rutas en las solicitudes HTTP. `ffuf` se puede usar para identificar vulnerabilidades como inyecciones de SQL, cross-site scripting (XSS), inclusión de archivos y más.

## Casos de Uso y Ejemplos

1. **Fuzzing de Parámetros GET:**
   Supongamos que tienes una URL con un parámetro vulnerable `id` en una aplicación web:

   ```bash
   ffuf -u "http://example.com/page?id=FUZZ" -w /path/to/wordlist.txt
   ```

2. **Fuzzing de Parámetros POST:**
   Realiza fuzzing en parámetros de una solicitud POST:

   ```bash
   ffuf -u "http://example.com/postpage" -X POST -d "param=FUZZ" -w /path/to/wordlist.txt
   ```

3. **Descubrimiento de Directorios y Archivos Ocultos:**
   Utiliza `ffuf` para encontrar directorios y archivos ocultos en la aplicación:

   ```bash
   ffuf -u "http://example.com/FUZZ" -w /path/to/wordlist.txt
   ```

4. **Búsqueda de Subdominios:**
   Descubre subdominios en un sitio web utilizando `ffuf`:

   ```bash
   ffuf -u "http://FUZZ.example.com" -w /path/to/wordlist.txt
   ```

5. **Enumeración de Extensiones de Archivos:**
   Prueba diferentes extensiones de archivos en una URL:

   ```bash
   ffuf -u "http://example.com/files/document.FUZZ" -w /path/to/extensions.txt
   ```

6. **Fuzzing de Códigos de Estado HTTP:**
   Fuzzea diferentes códigos de estado HTTP en una URL:

   ```bash
   ffuf -u "http://example.com/page" -w /path/to/wordlist.txt -mr "Status: FUZZ"
   ```

7. **Búsqueda de Cadenas de Texto Específicas:**
   Busca cadenas específicas en las respuestas utilizando la opción `-mc`:

   ```bash
   ffuf -u "http://example.com/page?param=FUZZ" -w /path/to/wordlist.txt -mc "Texto a buscar"
   ```

8. **Fuzzing de Parámetros con Payloads Personalizados:**
   Utiliza payloads personalizados en combinación con `ffuf`:

   ```bash
   ffuf -u "http://example.com/page?param=FUZZ" -w /path/to/payloads.txt
   ```

`ffuf` es altamente personalizable y permite especificar diversos parámetros para ajustarse a las necesidades de la aplicación objetivo. Sin embargo, es fundamental utilizar esta herramienta con permiso adecuado y en entornos controlados, ya que el uso no autorizado en sistemas en producción puede ser ilegal y tener consecuencias negativas.

9. **Fuzzing de Rutas con Métodos HTTP Personalizados:**
   Fuzzea diferentes rutas en una URL utilizando métodos HTTP personalizados:

   ```bash
   ffuf -u "http://example.com/FUZZ" -X FUZZ -w /path/to/methods.txt
   ```

10. **Fuzzing de Encabezados HTTP:**
    Prueba diferentes valores de encabezados HTTP en una solicitud:

   ```bash
   ffuf -u "http://example.com/page" -H "Header: FUZZ" -w /path/to/headers.txt
   ```

11. **Fuzzing de Parámetros en URLs con Autenticación:**
    Realiza fuzzing en parámetros de una URL que requiere autenticación:

   ```bash
   ffuf -u "http://example.com/page?param=FUZZ" -w /path/to/wordlist.txt -c -H "Authorization: Bearer token"
   ```

12. **Fuzzing de Cookies:**
    Prueba diferentes valores de cookies en una solicitud:

   ```bash
   ffuf -u "http://example.com/page" -H "Cookie: key=FUZZ" -w /path/to/cookies.txt
   ```

13. **Fuzzing de Parámetros con Longitud Específica:**
    Fuzzea parámetros con longitud específica utilizando la opción `-fs`:

   ```bash
   ffuf -u "http://example.com/page?param=FUZZ" -w /path/to/wordlist.txt -fs 10-20
   ```

14. **Fuzzing de Parámetros con Valor Específico:**
    Fuzzea parámetros con un valor específico utilizando `-fw`:

   ```bash
   ffuf -u "http://example.com/page?param=FUZZ" -w /path/to/wordlist.txt -fw "invalid"
   ```

15. **Fuzzing de Parámetros en Formatos Personalizados:**
    Fuzzea parámetros en formatos personalizados utilizando placeholders:

   ```bash
   ffuf -u "http://example.com/page?param1=FUZZ&param2=1337" -w /path/to/wordlist.txt
   ```

16. **Fuzzing de Varias URLs Simultáneamente:**
    Fuzzea múltiples URLs en paralelo utilizando la opción `-request`:

   ```bash
   ffuf -w /path/to/wordlist.txt -request "http://example.com/page1?param=FUZZ" -request "http://example.com/page2?param=FUZZ"
   ```

Recuerda que el uso de `ffuf` debe realizarse de manera ética y en entornos controlados con el permiso adecuado. Utilizar esta herramienta en sistemas en producción sin autorización puede tener consecuencias legales y de seguridad.

---

## Ejemplos de uso contra DVWA

Por supuesto, aquí tienes más ejemplos de cómo utilizar el comando `ffuf` en combinación con los entornos DVWA (Damn Vulnerable Web Application) y Metasploitable 2:

**Fuzzing de Parámetros GET en DVWA:**
Fuzzea parámetros en una URL de DVWA.

```bash
ffuf -u "http://dvwa.local/vulnerabilities/fi/?page=FUZZ" -w /path/to/wordlist.txt
```

**Fuzzing de Parámetros POST en DVWA:**
Realiza fuzzing en parámetros de una solicitud POST en DVWA.

```bash
ffuf -u "http://dvwa.local/vulnerabilities/xss_r/" -X POST -d "txtName=FUZZ" -w /path/to/wordlist.txt
```

**Enumeración de Subdirectorios en DVWA:**
Descubre subdirectorios en DVWA.

```bash
ffuf -u "http://dvwa.local/FUZZ" -w /path/to/wordlist.txt
```

**Fuzzing de Rutas en DVWA:**
Prueba diferentes rutas en DVWA.

```bash
ffuf -u "http://dvwa.local/FUZZ" -w /path/to/wordlist.txt
```

**Fuzzing de Parámetros en Metasploitable 2:**
Fuzzea parámetros en una URL de Metasploitable 2.

```bash
ffuf -u "http://metasploitable.local/FUZZ" -w /path/to/wordlist.txt
```

**Enumeración de Subdominios en Metasploitable 2:**
Enumerar subdominios en Metasploitable 2.

```bash
ffuf -u "http://metasploitable.local/FUZZ" -w /path/to/wordlist.txt
```

**Fuzzing de Parámetros en Metasploitable 2:**
Realiza fuzzing en parámetros en Metasploitable 2.

```bash
ffuf -u "http://metasploitable.local/vuln/?param=FUZZ" -w /path/to/wordlist.txt
```

**Enumeración de Extensiones de Archivos en Metasploitable 2:**
Prueba diferentes extensiones de archivos en Metasploitable 2.

```bash
ffuf -u "http://metasploitable.local/files/FUZZ" -w /path/to/extensions.txt
```

Estos ejemplos te proporcionan diferentes formas de utilizar `ffuf` en entornos DVWA y Metasploitable 2 para identificar vulnerabilidades y realizar pruebas de seguridad. Asegúrate de obtener el permiso adecuado y realizar estas prácticas en entornos controlados.

---

