![[header_ethical_hacking.jpg]]
# Comando `wfuzz`

---
**Tags:** #info #hacking #tool #kali #linux #bash

> [!info] Volver a [[Home]] | [[Ciberseguridad]] 

---
## Descripción

El comando `wfuzz` es una herramienta de fuzzing web diseñada para ayudar en la búsqueda y explotación de vulnerabilidades en aplicaciones web. Fuzzing es una técnica que implica enviar entradas inyectadas, maliciosas o inesperadas a una aplicación con el objetivo de encontrar vulnerabilidades en su manejo. `wfuzz` automatiza este proceso al permitirte especificar parámetros y patrones a probar en diferentes componentes de la URL o los parámetros.

`wfuzz` es una herramienta poderosa para automatizar pruebas de fuzzing en aplicaciones web. Sin embargo, es importante utilizarla de manera ética y con el permiso adecuado, ya que el fuzzing en sistemas en producción sin autorización puede tener implicaciones legales y de seguridad.

## Casos de Uso y Ejemplos

1. **Fuzzing de Parámetros GET:**
   Supongamos que tienes una URL con un parámetro vulnerable `id` en una aplicación web:

   ```bash
   wfuzz -c -z file,/path/to/wordlist.txt "http://example.com/page?id=FUZZ"
   ```

2. **Fuzzing de Parámetros POST:**
   Puedes realizar fuzzing en parámetros de una solicitud POST:

   ```bash
   wfuzz -c -z file,/path/to/wordlist.txt --data "param=FUZZ" "http://example.com/postpage"
   ```

3. **Descubrimiento de Directorios Ocultos:**
   Utiliza fuzzing para encontrar directorios ocultos en una aplicación:

   ```bash
   wfuzz -c -z file,/path/to/wordlist.txt "http://example.com/FUZZ"
   ```

4. **Búsqueda de Archivos y Extensiones:**
   Fuzzea diferentes nombres de archivos y extensiones para descubrir archivos sensibles o mal configurados:

   ```bash
   wfuzz -c -z file,/path/to/filelist.txt "http://example.com/files/FUZZ"
   ```

5. **Exploración de Parámetros Personalizados:**
   Explora parámetros personalizados en URLs complejas:

   ```bash
   wfuzz -c -z list,customparams.txt "http://example.com/page?param1=value1&param2=FUZZ"
   ```

6. **Fuzzing de Cabeceras HTTP:**
   Intenta variar las cabeceras HTTP para buscar vulnerabilidades:

   ```bash
   wfuzz -c -z file,/path/to/headers.txt -H "Host: example.com" "http://example.com"
   ```

7. **Fuzzing de Cookies y Valores de Cookie:**
   Prueba diferentes valores de cookies para identificar vulnerabilidades relacionadas con sesiones:

   ```bash
   wfuzz -c -z file,/path/to/cookies.txt --header "Cookie: SESSIONID=FUZZ" "http://example.com"
   ```

8. **Búsqueda de Patrones Personalizados:**
   Usa patrones personalizados en combinación con fuzzing:

   ```bash
   wfuzz -c -z range,1-10 --hl 10 --hw 12 "http://example.com/page?id=FUZZ"
   ```

9. **Fuzzing de Parámetros con Rangos Numéricos:**
   Fuzzea parámetros con valores numéricos en un rango específico:

   ```bash
   wfuzz -c -z range,1-10 "http://example.com/page?id=FUZZ"
   ```

10. **Búsqueda de Archivos con Extensiones Comunes:**
    Busca archivos con extensiones comunes en un directorio:

   ```bash
   wfuzz -c -z file,/path/to/extensions.txt "http://example.com/files/document.FUZZ"
   ```

11. **Fuzzing de Métodos HTTP:**
    Prueba diferentes métodos HTTP (GET, POST, PUT, DELETE, etc.) en una URL:

   ```bash
   wfuzz -c -z list,methods.txt --method FUZZ "http://example.com/page"
   ```

12. **Fuzzing de Parámetros con Múltiples Valores:**
    Fuzzea parámetros con varios valores posibles:

   ```bash
   wfuzz -c -z list,param_values.txt "http://example.com/page?param=FUZZ"
   ```

13. **Descubrimiento de Subdominios con Fuzzing:**
    Descubre subdominios utilizando un archivo de palabras:

   ```bash
   wfuzz -c -z file,/path/to/subdomains.txt "http://FUZZ.example.com"
   ```

14. **Fuzzing de Códigos de Estado HTTP:**
    Prueba diferentes códigos de estado HTTP en una URL:

   ```bash
   wfuzz -c -z list,status_codes.txt --hs 200 "http://example.com/page"
   ```

15. **Fuzzing de Parámetros con Payloads Personalizados:**
    Utiliza payloads personalizados en combinación con fuzzing:

   ```bash
   wfuzz -c -z list,payloads.txt "http://example.com/page?param=FUZZ"
   ```

16. **Fuzzing de Formatos de Archivo:**
    Fuzzea diferentes formatos de archivo para identificar vulnerabilidades:

   ```bash
   wfuzz -c -z list,file_formats.txt "http://example.com/files/document.FUZZ"
   ```

Recuerda que, al usar `wfuzz`, es esencial hacerlo de manera ética y en entornos controlados. Utilizar esta herramienta para pruebas de seguridad en sistemas en producción sin autorización puede tener consecuencias legales y de seguridad.

---
## Ejemplos de uso contra DVWA

Aquí tienes más ejemplos de cómo utilizar el comando `wfuzz` en combinación con los entornos DVWA (Damn Vulnerable Web Application) y Metasploitable 2:

**Enumeración de Subdominios en DVWA:**
Supongamos que deseas enumerar subdominios de un sitio web en DVWA.

```bash
wfuzz -c -z file,/path/to/wordlist.txt "http://dvwa.local/FUZZ"
```

**Fuzzing de Parámetros GET en DVWA:**
Fuzzea parámetros en una URL de DVWA.

```bash
wfuzz -c -z file,/path/to/wordlist.txt "http://dvwa.local/vulnerabilities/fi/?page=FUZZ"
```

**Fuzzing de Parámetros POST en DVWA:**
Realiza fuzzing en parámetros de una solicitud POST en DVWA.

```bash
wfuzz -c -z file,/path/to/wordlist.txt --data "param=FUZZ" "http://dvwa.local/vulnerabilities/xss_r/"
```

**Enumeración de Directorios Ocultos en DVWA:**
Descubre directorios ocultos en DVWA.

```bash
wfuzz -c -z file,/path/to/wordlist.txt "http://dvwa.local/FUZZ"
```

**Fuzzing de Parámetros en Metasploitable 2:**
Prueba parámetros en una URL de Metasploitable 2.

```bash
wfuzz -c -z file,/path/to/wordlist.txt "http://metasploitable.local/FUZZ"
```

**Enumeración de Subdominios en Metasploitable 2:**
Enumerar subdominios en Metasploitable 2.

```bash
wfuzz -c -z file,/path/to/wordlist.txt "http://metasploitable.local/FUZZ"
```

**Fuzzing de Parámetros con Payloads Personalizados en DVWA:**
Utiliza payloads personalizados en una URL de DVWA.

```bash
wfuzz -c -z list,payloads.txt "http://dvwa.local/vulnerabilities/sqli/?id=FUZZ"
```

Recuerda que estas prácticas deben realizarse en entornos controlados y con el permiso adecuado. Utilizar herramientas de fuzzing como `wfuzz` en sistemas en producción o sin autorización puede tener implicaciones legales y éticas.

---

