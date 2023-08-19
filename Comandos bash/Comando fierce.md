
![[header_ethical_hacking.jpg]]
# Comando fierce

---
**Tags:** #info #bash #linux #ciberseguridad #tool 

> [!info] Volver a [[Home]] | [[Ciberseguridad]]

---
### Descripción

El comando `fierce` es una herramienta de línea de comandos utilizada para realizar un escaneo de DNS bruteforce en un dominio dado. Esta herramienta busca activamente subdominios asociados con el dominio objetivo, utilizando una técnica de adivinanza. `fierce` es útil para la enumeración de subdominios y puede ayudar a identificar posibles puntos de entrada o vulnerabilidades en una infraestructura.

`fierce` es una herramienta útil para realizar escaneos de enumeración de subdominios utilizando técnicas de adivinanza. Puede ayudarte a identificar posibles vectores de ataque y áreas de mejora en la seguridad de la infraestructura de un dominio.

---
## Casos de Uso y Ejemplos

1. **Enumeración de Subdominios:**
   `fierce` es especialmente útil para enumerar subdominios de un dominio objetivo. Puedes usarlo para descubrir subdominios que pueden no ser fácilmente visibles en la superficie. Ejemplo:

   ```bash
   fierce -dns example.com
   ```

   Esto iniciará un escaneo de subdominios en `example.com` utilizando el comando `fierce`.

2. **Utilización de Listas de Diccionario Personalizadas:**
   `fierce` permite usar listas de palabras (diccionarios) personalizadas para adivinar subdominios. Esto puede ser útil para adaptar la búsqueda según el contexto. Ejemplo:

   ```bash
   fierce -dns example.com -wordlist my_subdomains.txt
   ```

   Esto realizará un escaneo de subdominios en `example.com` utilizando la lista de palabras personalizada `my_subdomains.txt`.

3. **Escaneo a Través de Servidores DNS Específicos:**
   Puedes especificar servidores DNS específicos para el escaneo utilizando la opción `-dnsserver`. Ejemplo:

   ```bash
   fierce -dns example.com -dnsserver 8.8.8.8
   ```

   Esto realizará un escaneo de subdominios en `example.com` utilizando el servidor DNS de Google (`8.8.8.8`).

4. **Especificar Prefijos y Sufijos de Subdominio:**
   Puedes agregar prefijos o sufijos a los subdominios a adivinar. Ejemplo:

   ```bash
   fierce -dns example.com -subprefix dev
   ```

   Esto añadirá el prefijo `dev` a los subdominios a adivinar.

5. **Generar Informes en Formato HTML:**
   `fierce` permite generar informes en formato HTML. Ejemplo:

   ```bash
   fierce -dns example.com -filereport my_report.html
   ```

   Esto generará un informe HTML con los resultados del escaneo.

---
### Ejemplos adicionales

Aquí tienes algunos ejemplos adicionales del comando `fierce` para distintas situaciones:

1. **Escaneo con Lista de Servidores DNS Personalizados:**
   Puedes utilizar una lista de servidores DNS personalizados para realizar el escaneo. Esto es útil si deseas diversificar las fuentes de información. Ejemplo:

   ```bash
   fierce -dns example.com -dnsservers dns1.example.com,dns2.example.com,dns3.example.com
   ```

   Esto realizará un escaneo en `example.com` utilizando los servidores DNS especificados.

2. **Escaneo en Modo Silencioso (Sin Salida en Pantalla):**
   Si solo estás interesado en la salida final y no deseas ver los detalles en la pantalla, puedes usar la opción `-quiet`. Ejemplo:

   ```bash
   fierce -dns example.com -quiet
   ```

   Esto realizará un escaneo silencioso de subdominios en `example.com`.

3. **Escaneo Inverso de DNS (IP a Dominio):**
   Además de buscar subdominios, `fierce` también puede realizar escaneos inversos de DNS para buscar nombres de dominio asociados a una dirección IP. Ejemplo:

   ```bash
   fierce -dns 8.8.8.8 -range 24
   ```

   Esto buscará nombres de dominio asociados a la dirección IP `8.8.8.8` en el rango de subred `/24`.

4. **Escaneo de Dominios con Subdominios Potenciales:**
   Si tienes un archivo con nombres de dominio que podrían ser subdominios, puedes utilizar `fierce` para buscar subdominios potenciales en ellos. Ejemplo:

   ```bash
   fierce -dnsfile domain_list.txt
   ```

   Esto buscará subdominios en los dominios listados en `domain_list.txt`.

5. **Escaneo utilizando Proxy SOCKS:**
   Puedes utilizar un servidor proxy SOCKS para realizar el escaneo. Esto puede ayudar a ocultar tu dirección IP. Ejemplo:

   ```bash
   fierce -dns example.com -socks 127.0.0.1:1080
   ```

   Esto realizará un escaneo en `example.com` utilizando el proxy SOCKS en `127.0.0.1:1080`.

Recuerda que `fierce` es una herramienta poderosa para la enumeración de subdominios, pero debes utilizarla con responsabilidad y respetando las políticas de seguridad y privacidad.