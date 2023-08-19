
![[header_ethical_hacking.jpg]]
# Comando crunch

---
**Tags:** #info #bash #linux #ciberseguridad #tool 

> [!info] Volver a [[Home]] | [[Ciberseguridad]]

---
## Descripción

El comando `crunch` es una herramienta de generación de listas de palabras (diccionarios) personalizadas. Se utiliza para crear combinaciones de caracteres según los patrones y rangos especificados por el usuario. Esta herramienta es valiosa para crear listas de contraseñas potenciales, realizar pruebas de fuerza bruta y realizar auditorías de seguridad.

`crunch` es una herramienta versátil para la generación personalizada de diccionarios y listas de palabras que son útiles en pruebas de seguridad, auditorías y otras actividades relacionadas con contraseñas y nombres de usuario.

---
## Casos de Uso y Ejemplos

1. **Generación de Contraseñas por Fuerza Bruta:**
   Puedes utilizar `crunch` para generar una lista de contraseñas para realizar pruebas de fuerza bruta en sistemas o cuentas. Ejemplo:

   ```bash
   crunch 8 10 -t @%12345 -o passwords.txt
   ```

   Esto generará contraseñas de 8 a 10 caracteres utilizando caracteres especiales, números y letras, y las guardará en `passwords.txt`.

2. **Generación de Diccionarios para Ataques de Contraseñas:**
   Puedes crear diccionarios personalizados para ataques de contraseñas utilizando patrones específicos. Ejemplo:

   ```bash
   crunch 8 12 ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789 -o dictionary.txt
   ```

   Esto creará un diccionario que contiene combinaciones de letras mayúsculas y números de 8 a 12 caracteres y lo guardará en `dictionary.txt`.

3. **Creación de Diccionarios Específicos para Auditorías de Seguridad:**
   Puedes crear diccionarios específicos para realizar auditorías de seguridad en sistemas y aplicaciones. Ejemplo:

   ```bash
   crunch 10 12 -f /usr/share/john/password.lst mixalpha -o custom_dict.txt
   ```

   Esto creará un diccionario utilizando una lista de contraseñas comunes (`password.lst`) y caracteres alfanuméricos de 10 a 12 caracteres. El resultado se guardará en `custom_dict.txt`.

4. **Generación de Listas de Nombres de Usuario:**
   Además de las contraseñas, `crunch` también puede generar listas de nombres de usuario. Ejemplo:

   ```bash
   crunch 6 8 -t user@@@@ -o usernames.txt
   ```

   Esto creará una lista de nombres de usuario de 6 a 8 caracteres utilizando el patrón `user@@@@`.

5. **Inclusión de Caracteres Específicos:**
   Puedes incluir caracteres especiales en la generación de contraseñas. Ejemplo:

   ```bash
   crunch 8 10 -p @%^# -o special_passwords.txt
   ```

   Esto generará contraseñas de 8 a 10 caracteres que incluyan los caracteres especiales `@`, `%`, `^` y `#`.

6. **Generación de Combinaciones Alfanuméricas:**
   Puedes generar combinaciones alfanuméricas con un rango específico de caracteres. Ejemplo:

   ```bash
   crunch 6 8 -t aA1 -o alphanumeric.txt
   ```

   Esto generará combinaciones alfanuméricas de 6 a 8 caracteres con letras minúsculas, mayúsculas y números, y las guardará en `alphanumeric.txt`.

7. **Generación de Palabras con Prefijos y Sufijos:**
   Puedes agregar prefijos y sufijos a las palabras generadas. Ejemplo:

   ```bash
   crunch 6 8 -t PREFIX@@@@SUFFIX -o with_prefix_suffix.txt
   ```

   Esto generará palabras de 6 a 8 caracteres con el patrón `PREFIX@@@@SUFFIX`, donde `PREFIX` y `SUFFIX` son los prefijos y sufijos que desees.

8. **Combinaciones de Caracteres Específicos:**
   Puedes generar combinaciones específicas de caracteres. Ejemplo:

   ```bash
   crunch 4 4 -c 'a,A,!,1' -o custom_chars.txt
   ```

   Esto generará combinaciones de 4 caracteres que incluyan las letras `a` y `A`, el signo de exclamación `!` y el número `1`, y las guardará en `custom_chars.txt`.

9. **Generación con Caracteres Especiales Aleatorios:**
   Puedes incluir caracteres especiales aleatorios en las palabras generadas. Ejemplo:

   ```bash
   crunch 8 10 -p %%%% -o random_specials.txt
   ```

   Esto generará palabras de 8 a 10 caracteres que incluyan caracteres especiales `%` de forma aleatoria.

10. **Generación con Caracteres Unicode:**
    Puedes utilizar caracteres Unicode en las combinaciones generadas. Ejemplo:

    ```bash
    crunch 6 6 -t U+%U%U%U%U% -o unicode_chars.txt
    ```

    Esto generará palabras de 6 caracteres utilizando caracteres Unicode, donde `%U` representa un carácter Unicode.

Recuerda que `crunch` es una herramienta poderosa para generar listas de palabras personalizadas, pero debes utilizarla de manera ética y responsable, y asegurarte de que estás cumpliendo con todas las regulaciones y políticas relevantes.

---
### Ejemplo para patentes

El comando que has proporcionado utiliza la herramienta `crunch` para generar combinaciones de palabras siguiendo un patrón específico y guardar los resultados en un archivo de salida.

**Explicación del Comando:**

- `crunch`: Es el comando que inicia la herramienta `crunch` para generar combinaciones de palabras.

- `6 6`: Estos dos números representan el rango de longitud de las palabras generadas. En este caso, se generarán palabras de 6 caracteres.

- `-t @@@@%%`: Esta opción `-t` se utiliza para especificar el patrón de generación de palabras. En este patrón:
  - `@@@@` representa que las primeras cuatro posiciones serán caracteres alfabéticos en mayúscula (A-Z).
  - `%%` representa que las dos últimas posiciones serán caracteres numéricos (0-9).

- `-o patente_a4.txt`: Esta opción `-o` se utiliza para especificar el nombre del archivo de salida donde se guardarán las combinaciones generadas. En este caso, se guardarán en un archivo llamado `patente_a4.txt`.

**Explicación del Propósito:**

Este comando tiene como propósito generar combinaciones de palabras que sigan el patrón de una posible patente de vehículo. En muchos países, las patentes de vehículos tienen un formato específico, como letras seguidas de números. En este caso, se generan todas las combinaciones posibles de cuatro letras alfabéticas seguidas de dos dígitos numéricos, y los resultados se guardarán en el archivo `patente_a4.txt`.

**Ejemplo de Resultado:**

El archivo `patente_a4.txt` contendrá combinaciones como:
- ABCD01
- EFGH23
- IJKL45
- ...

Estas combinaciones siguen el patrón especificado en el comando y se guardan en el archivo de salida. Recuerda que `crunch` es una herramienta poderosa para la generación de diccionarios y listas de palabras, pero debes utilizarla de manera ética y legal.

---
### Ejemplo para RUT

Claro, aquí tienes un ejemplo de cómo utilizar la herramienta `crunch` para generar una lista de posibles RUT de Chile:

```bash
crunch 9 9 -t @@@@@@@@- -o rut_chile.txt
```

>[!danger] Advertencia!
>Este comando no realiza una validación del dígito verificador de rut, solamente genera las combinaciones posibles. La validación del dígito verificador debe ser realizada posteriormente.

En este comando:

- `9 9`: Se especifica que se generarán palabras de 9 caracteres (longitud típica de un RUT chileno).

- `-t @@@@@@@@-`: Esta opción `-t` establece el patrón de generación. `@` representa que las letras y números serán caracteres alfanuméricos. `-------` representa el guión del RUT.

- `-o rut_chile.txt`: Con esta opción `-o` se indica que los resultados se guardarán en un archivo llamado `rut_chile.txt`.

El archivo `rut_chile.txt` contendrá combinaciones de RUT de Chile, como por ejemplo:
- 12345678-9
- 87654321-0
- ...

Recuerda que este es solo un ejemplo de generación, y en la realidad los RUT deben seguir reglas específicas y válidas para ser utilizados. Utiliza esta herramienta de manera ética y responsable.

---

### Ejemplo para creación de listas de dominios/subdominios

Esto genera un archivo de 305MB
```
crunch 6 6 -t @@@@%% -o patente_a4.txt 
```

Esto genera un archivo de 11MB
```
crunch 6 6 -t a@@@%% -o patente_a4.txt
```

Redirigir la salida del comando hacia un archivo
```
crunch 2 2 -t @@ > letras1.txt
```

Agregar más resultados al mismo archivo
```
crunch 3 3 -t @@@ >> letras1.txt
crunch 4 4 -t @@@@ >> letras1.txt
crunch 5 5 -t @@@@@ >> letras1.txt
```

Para ver la cantidad de líneas del resultado
```
cat letras1.txt | wc -l
```

---
