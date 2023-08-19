
![[header_ethical_hacking.jpg]]
# Enumerar equipos y encontrar vulnerabilidades

Notas clase taller ciberseguridad UNAB - 17.08.2023

---
**Tags:** #info #bash #linux #ciberseguridad #tool 

> [!info] Volver a [[Home]] | [[Ciberseguridad]]

---
### Objetivo de la clase

Enumeración de equipos de red usando software de línea de comandos en Kali Linux.

Cuando se quiere hacer una enumeración completa de subdominios se deben seguir al menos los siguientes pasos:

1. Tratar de recolectar la mayor cantidad de información de los dominios usando motores de búsqueda.
2. Descargar el sitio web con `wget` y realizar una búsqueda de subdominios con expresiones regulares sobre lo que se descargó. Puede que aparezan cosas nuevas, que no se hayan identificado de forma pasiva.
3. Ataque de fuerza bruta con diccionarios sobre subdominos con distintos diccionarios.
   
```bash
/usr/share/seclists/Discovery/DNS/subdomains-top1million-110000.txt
```

```bash
/usr/share/seclists/Discovery/Web-Content/raft-large-words-lowercase.txt
```

   También se puede crear un diccionario propio de subdominios en un archivo que contenga combinaciones de 2, 3 y 4 caracteres. Este archivo se puede crear con el comando crunch.
   
>[!tip] Revisar la guía del [[Comando crunch]]

---
## 1. Recolectar información

Tratar de recolectar la mayor cantidad de información de los dominios usando motores de búsquedas.
- [Google](https://www.google.com/)
- [Duckduckgo](https://www.duckduckgo.com/)
- [Bing](https://www.bing.com/)

Se puede usar el comando nslookup sobre el dominio objetivo

```bash
nslookup www.unab.cl
```

>[!tip] Revisar guía del [[Comando nslookup]]

---
## 2. Detectar dominios y subdominios

### 2.1 Descargar el sitio web 

> [!tip] Revisar la guía del [[Comando wget]]

Puedes usar el comando `wget` para descargar un sitio web completo y luego analizarlo localmente. Aquí tienes un ejemplo de cómo hacerlo:

1. Abre una terminal en tu sistema Linux.

2. Utiliza el siguiente comando para descargar un sitio web completo:
   
```bash
wget --recursive --no-clobber --page-requisites --html-extension --convert-links --restrict-file-names=windows --domains website.com --no-parent www.website.com
```

   - `--recursive`: Descarga de manera recursiva, es decir, sigue los enlaces internos y descarga todas las páginas relacionadas.
   - `--no-clobber`: No sobrescribe los archivos existentes, útil para reanudar una descarga interrumpida.
   - `--page-requisites`: Descarga todos los elementos necesarios para mostrar la página, como imágenes, hojas de estilo y JavaScript.
   - `--html-extension`: Agrega la extensión `.html` a los archivos descargados.
   - `--convert-links`: Convierte los enlaces para que apunten a archivos locales.
   - `--restrict-file-names=windows`: Asegura que los nombres de archivo sean compatibles con Windows.
   - `--domains website.com`: Limita la descarga solo al dominio `website.com`.
   - `--no-parent`: Evita descargar archivos de niveles superiores.

3. Sustituye `www.website.com` con la URL del sitio web que deseas descargar.

Este comando descargará el sitio web completo en un directorio local. Luego, puedes analizar el contenido descargado utilizando herramientas y scripts de tu elección. Recuerda que descargar un sitio web completo puede generar una gran cantidad de archivos, por lo que es recomendable revisar las opciones de `wget` según tus necesidades específicas.

---
### 2.2 Realizar una búsqueda con expresiones regulares sobre lo que se descargó

> [!tip] Revisar la guía del [[Comando grep]]

```
grep -Eor 'href="[^\"]+"' alumni.unab.cl |grep -E "https?" |cut -d '"' -f2 |sort -u |cut -d "/" -f3 |sort -u
```

```
grep -Eor 'src="[^\"]+"' alumni.unab.cl |grep -E "https?" |cut -d '"' -f2 |sort -u |cut -d "/" -f3 |sort -u
```

Este comando realiza varias operaciones utilizando varias utilidades de línea de comandos en Linux, como `grep`, `cut` y `sort`, para extraer y procesar URLs de la página web `alumni.unab.cl`. 

Se utiliza para extraer y procesar URLs de la página web `alumni.unab.cl`. Filtra y presenta de manera ordenada los nombres de dominio únicos que aparecen en los enlaces `href` de la página.

Aquí tienes una explicación paso a paso de lo que hace cada parte del comando:

1. `grep -Eor 'href="[^\"]+"' alumni.unab.cl`:
   - `grep -Eor`: Realiza una búsqueda con expresiones regulares y muestra solo el resultado (sin líneas completas) y de manera recursiva en los archivos.
   - `'href="[^\"]+"'`: Busca en cada línea de texto la cadena que comienza con `href="` y contiene cualquier cosa excepto comillas dobles (`[^\"]+`) seguido de `"`.
   - `alumni.unab.cl`: Indica que se debe realizar la búsqueda en el archivo o directorio `alumni.unab.cl`.

2. `grep -E "https?"`:
   - Filtra las líneas anteriores y busca aquellas que contengan `http` o `https`.

3. `cut -d '"' -f2`:
   - Utiliza el comando `cut` para dividir las líneas en campos utilizando el carácter `"` como delimitador (`-d '"'`).
   - Luego, selecciona el segundo campo (`-f2`), que en este caso debería ser la URL entre las comillas dobles.

4. `sort -u`:
   - Ordena las URLs extraídas de manera única (sin duplicados) en orden alfabético.

5. `cut -d "/" -f3`:
   - Usa nuevamente el comando `cut`, esta vez para dividir las URLs en campos utilizando `/` como delimitador.
   - Selecciona el tercer campo (`-f3`), que generalmente es el nombre de dominio.

6. `sort -u`:
   - Ordena los nombres de dominio extraídos de manera única (sin duplicados) en orden alfabético.

---
### 2.3 Usar expresiones regulares para encontrar correos electrónicos

> [!tip] Revisar la guía del [[Comando grep]]

```
grep -E -o -r -i "[A-Za-z0-9][A-Za-z0-9._%+-]+@[A-Za-z0-9][A-Za-z0-9.-]+\.[A-Za-z]{2,6}" [alumni.unab.cl](http://alumni.unab.cl/) | grep ":" | grep "@" | cut -d ":" -f2 | sort -u
```

El comando que proporcionas realiza varias operaciones utilizando diferentes utilidades de línea de comandos en Linux, como `grep`, `cut` y `sort`, para extraer y procesar direcciones de correo electrónico de la página web `alumni.unab.cl`. 

Se utiliza para extraer y procesar direcciones de correo electrónico de la página web `alumni.unab.cl`. Filtra y presenta de manera ordenada las partes únicas que contienen direcciones de correo electrónico válidas que cumplen con el patrón establecido en la expresión regular.

Aquí tienes una explicación paso a paso de lo que hace cada parte del comando:

1. `grep -E -o -r -i "[A-Za-z0-9][A-Za-z0-9._%+-]+@[A-Za-z0-9][A-Za-z0-9.-]+\.[A-Za-z]{2,6}" alumni.unab.cl`:
   - `grep -E -o -r -i`: Realiza una búsqueda con expresiones regulares de manera recursiva y muestra solo el resultado (sin líneas completas) de manera insensible a mayúsculas y minúsculas.
   - `"..."`: La expresión regular busca patrones de direcciones de correo electrónico válidas.
   - `alumni.unab.cl`: Indica que se debe realizar la búsqueda en el archivo o directorio `alumni.unab.cl`.

2. `grep ":"`:
   - Filtra las líneas anteriores y busca aquellas que contengan el carácter `:`.

3. `grep "@"`:
   - Filtra las líneas anteriores y busca aquellas que contengan el carácter `@`.

4. `cut -d ":" -f2`:
   - Utiliza el comando `cut` para dividir las líneas en campos utilizando `:` como delimitador.
   - Luego, selecciona el segundo campo (`-f2`), que debería ser la parte después de `:`.

5. `sort -u`:
   - Ordena las partes extraídas únicas (sin duplicados) en orden alfabético.

### 2.4 Usar theHarvester para encontrar subdominios desde diferentes fuentes

> [!tip] Revisar la guía de [[Herramienta theHarvester]]

### 2.5 Realizar ataques de diccionario para descubrir subdominios

> [!tip] Revisar la guía de [[Comando fierce]]

El ataque de fuerza bruta va a depender de qué tan completo sea el archivo que se está usando para realizar dicho ataque.

Ejemplos de archivos que tienen listas de subdominios en kali (versión completa)
```
ls -la /usr/share/seclists/Discovery/DNS/
```


---
## Otros comandos útiles

### exiftool

Con exiftool hacer una búsqueda recursiva de metadata, se guardan en un archivo csv y luego se revisa para identificar subdominios, correos electrónicos. 

>[!tip] Revisar la guía del [[Comando exiftool]]

---

