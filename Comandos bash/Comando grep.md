![[header_terminal.jpg]]
# Comando `grep`

---
**Tags:** #info #bash #linux 
**Fecha creación:** 02.08.2023
**Fecha ultima modificación:** 03.08.2023


> [!info] Volver a [[Home]] | [[Ciberseguridad]]

---

**El comando "grep"** es una herramienta de línea de comandos ampliamente utilizada en sistemas Unix y Unix-like, incluyendo Linux. Su nombre proviene de "Global Regular Expression Print", y se utiliza para buscar patrones de texto dentro de archivos o en la salida de otros comandos. "grep" admite expresiones regulares, lo que lo hace una herramienta poderosa para realizar búsquedas y filtrar resultados basados en patrones específicos.

El comando "grep" es una herramienta útil para realizar búsquedas precisas y filtrar información en archivos y salidas de otros comandos. Su flexibilidad con expresiones regulares lo convierte en una herramienta poderosa para procesar grandes cantidades de datos y buscar patrones específicos en ellos.

---
## Uso básico de  `grep`

La sintaxis del comando grep al buscar un solo archivo es así:
```
grep [opciones] pattern [ARCHIVO]
```

    - grep: la instrucción de comando
    - [opciones]: modificadores del comando
    - pattern: el patrón que queremos encontrar con la búsqueda
    - [ARCHIVO]: el archivo en el que estás realizando la búsqueda

Puedes ver la documentación y explicaciones de varias opciones ejecutando este comando en la línea de comando:
```
grep --help
```

Como puedes ver, el comando nos ofrece muchas posibilidades. Sin embargo, las opciones más importantes y comunes son:

  - `-i`: la búsqueda no distinguirá entre mayúsculas y minúsculas. Es decir, si quieres buscar la palabra «auto» será lo mismo que «AUTO»
  - `-c`: solo mostrará el número de líneas que coinciden con el patrón buscado
  - `-r`: habilita la búsqueda recursiva en el directorio actual
  - `-n`: busca líneas y precede cada línea coincidente con un número de línea
  - `-v`: con esta opción, se nos muestran las líneas que no coinciden con el patrón que hemos buscado

---
## Casos de uso

1. Encontrar una palabra en un archivo de texto

Para buscar una palabra en un archivo de texto, simplemente escribe el comando:
```
grep búsqueda archivo
```

  - búsqueda: la palabra que estás buscando
  - archivo: el archivo en el que estás buscando la palabra

En nuestro caso, estamos buscando la palabra command en un archivo llamado grep:

```
grep command grep
```

Resultado de búsqueda del comando grep realizada en un terminal de Linux
El resultado resalta las líneas que coinciden con la consulta de esta manera:

2. Encontrar una palabra sin tener en cuenta las mayúsculas y minúsculas
Para hacer esto, es necesario agregar la opción `-i`.

```
grep -i búsqueda archivo
```

3. Conteo de palabras que coinciden con la búsqueda

Usando el comando grep puedes saber cuántas veces se usa una palabra en el archivo de texto. Simplemente agrega la opción `-c`.

```
grep -c búsqueda archivo
```

4. Buscar múltiples palabras clave

Hasta ahora hemos visto ejemplos donde buscamos una sola palabra. Grep admite múltiples consultas en un solo comando. El comando se vería así:

```
grep búsqueda1 archivo | grep búsqueda2 archivo
```

El comando funciona de forma muy simple. Primero, buscamos Búsqueda1 y luego pasamos después de la barra a un segundo comando grep para la segunda palabra: Búsqueda2.

5. Encontrar una palabra en un conjunto de archivos

También es posible buscar en varios archivos con un solo comando:

```
grep -l palabra_a_buscar ./*
```

En el terminal, se mostrarán los archivos que contienen la palabra que buscaste.

---
## Otros casos de uso del comando "grep"

1. **Búsqueda de una cadena de texto en un archivo específico**:
   ```
   grep "patron" archivo.txt
   ```
   Este comando busca la cadena de texto "patron" en el archivo "archivo.txt" y muestra todas las líneas que contienen ese patrón.

2. **Búsqueda recursiva en varios archivos dentro de un directorio**:
   ```
   grep -r "patron" /ruta/directorio
   ```
   Este comando realiza una búsqueda recursiva en todos los archivos dentro del directorio "/ruta/directorio" y muestra las líneas que contienen el patrón especificado.

3. **Búsqueda ignorando mayúsculas y minúsculas (case-insensitive)**:
   ```
   grep -i "patron" archivo.txt
   ```
   Este comando busca el patrón "patron" en el archivo "archivo.txt", ignorando las diferencias entre mayúsculas y minúsculas.

4. **Conteo del número de ocurrencias de un patrón en un archivo**:
   ```
   grep -c "patron" archivo.txt
   ```
   Este comando cuenta cuántas veces aparece el patrón "patron" en el archivo "archivo.txt" y muestra el resultado.

5. **Búsqueda inversa (exclusión de un patrón)**:
   ```
   grep -v "patron" archivo.txt
   ```
   Este comando muestra todas las líneas del archivo "archivo.txt" que no contienen el patrón "patron".

6. **Búsqueda de múltiples patrones en un archivo**:
   ```
   grep -E "patron1|patron2" archivo.txt
   ```
   Este comando busca múltiples patrones ("patron1" y "patron2") en el archivo "archivo.txt" y muestra las líneas que contienen cualquiera de esos patrones.

7. **Búsqueda de patrones con expresiones regulares avanzadas**:
   ```
   grep -E "patron[0-9]+" archivo.txt
   ```
   Este comando utiliza una expresión regular para buscar patrones que coincidan con "patron" seguido de uno o más dígitos en el archivo "archivo.txt".


