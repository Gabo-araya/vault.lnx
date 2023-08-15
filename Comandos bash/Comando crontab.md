![[header_terminal.jpg]]
# Tareas automatizadas temporales con `Crontab`

---
**Tags:** #info #bash #linux #arreglar 
**Fecha creación:** 03.08.2023
**Fecha ultima modificación:** 03.08.2023

> [!info] Volver a [[Home]] | [[Ciberseguridad]]

---

Texto obtenido desde: https://www.hostinger.es/tutoriales/sintaxis-crontab

## 1. Qué es la sintaxis Crontab: Crontab en Linux y ejemplos útiles

La automatización es uno de los aspectos clave de cualquier sistema, ya sea un servidor físico o un servidor privado virtual (VPS). Si la automatización se configura correctamente, puedes ahorrar cientos de horas preciosas para el usuario y hacer que el flujo de trabajo general sea mucho más eficiente. Una de las herramientas clave para programar tareas es cron.

En este tutorial, vamos a cubrir la sintaxis Crontab, veremos un resumen de las diferencias entre cron job, cron y crontab, y te mostraremos algunos casos de uso útiles cron jobs para un sistema operativo basado en Linux.

### 1.2 ¿Qué es Crontab y Cron Job?

En cuanto a los cron jobs, cabe destacar tres términos:

Cron daemon (crond) o simplemente cron es un ejecutable que permite a los usuarios realizar tareas y ejecutarlas automáticamente a una hora determinada.

Cron job es cualquier tarea que un usuario programe utilizando cron.

### 1.3 ¿Qué es la sintaxis Crontab?

La tabla cron o Crontab es un archivo que contiene todas las programaciones de las tareas cron que un usuario desea ejecutar regularmente. Los comandos se escriben uno por línea y ordenan al cron daemon que ejecute una tarea a una hora determinada.

### 1.4 Formato y valores de Crontab

Para que el cron daemon comprenda correctamente las instrucciones, debe utilizarse la sintaxis crontab correcta. La sintaxis de crontab consta de cinco campos. Cada uno de ellos puede rellenarse con cualquiera de los valores que se muestran en la siguiente tabla:

- **Campo**	Valores posibles
- **Minuto**	0-59
- **Hora**	0-23
- **Día del mes**	1-31
- **Mes**	1-12
- **Día de la semana**	0-6. 0 representa el domingo. En algunos sistemas, el valor 7 representa el domingo.

### 1.5 Comando y Orden a ejecutar

Aparte de los valores de crontab posibles, es necesario memorizar algunos caracteres especiales:

|Símbolo|Significado|Ejemplo|
|---|---|---|
|`*` (asterisco)|Seleccionar todos los valores posibles de un campo|Coloca `*` en el campo hora para ejecutar la tarea cada hora|
|`,` (coma)|Se utiliza una coma para separar varios valores|`0,3,5` en el campo día de la semana hará que la tarea se ejecute el domingo y el miércoles|
|`–` (guión)|Permite fijar un intervalo de valores|`10-15` en el campo día del mes ejecutará la tarea desde el día 10 al 15 del mes|
|`/` (separador)|Se utiliza un separador para dividir los valores|`*/10` en el campo hora hará que la tarea se ejecute cada 10 horas|
|`L`|Se utiliza en los campos de día del mes o día de la semana|`1L` en el campo día de la semana ejecutará la tarea el último lunes de un mes determinado|
|`W`|W se utiliza para determinar el día de la semana más próximo|`0W` en el campo día del mes hará que la tarea se ejecute el domingo más cercano de un mes determinado|
|`#` (numeral)|Se utiliza para determinar el día de la semana|`2#3` en el campo día del mes hará que la tarea se ejecute el tercer martes del mes|
|`?` (signo de interrogación)|Se utiliza en los campos de día del mes y día de la semana|`?` en el campo del día del mes se leerá como sin valor específico|

**¡Importante! Ten en cuenta que todos los campos deben rellenarse al crear una tarea cron. Si no deseas especificar un campo, rellénalo con el símbolo `*` (asterisco).**

## 2. Comandos Crontab

Sólo se utilizan unos pocos comandos cron en la línea de comandos, lo que facilita la creación, eliminación y gestión de entradas cron:

  - `crontab -e`: se utiliza para editar crontabs del sistema. Este comando creará un nuevo crontab si aún no se ha hecho.
  - `crontab -l`: se utiliza para ver las entradas crontab (trabajos cron) y mostrar el contenido del archivo crontab del sistema.
  - `crontab -r`: eliminará el archivo crontab actual.
  - `crontab -i`: mostrará un aviso antes de eliminar el crontab de un usuario. Se recomienda utilizarlo junto con el indicador `-r`, convirtiéndolo en el indicador `-ri`.

### 2.1 Cómo utilizar Crontab: ejemplos de sintaxis Crontab

En primer lugar, utiliza el comando crontab para crear tu primera entrada crontab:

  - `crontab -e`

Te pedirá que elijas un editor de texto. Te recomendamos usar nano, la primera opción en nuestro ejemplo:

### 2.2 Ejemplo Crontab con editor nano

Después, serás dirigido al archivo crontab. Para añadir nuevas entradas, simplemente elige una nueva línea y continúa con el cronjob.

**¡Importante! Ten en cuenta que crontab utiliza la fecha y hora actuales del sistema, lo que significa que la zona horaria se comparte con el sistema raíz.**

### 2.3 Programar un trabajo para una hora determinada

Una de las formas más sencillas de probar cron es programar una tarea para una hora determinada. Por ejemplo, la siguiente tarea cron ejecutará nuestro script .sh a la hora especificada, que es el 15 de agosto a las 15:30.

  - `30 08 10 06 * cat /helloworld.sh`

### 2.4 Ver entradas Crontab

Dado que todas las tareas cron se almacenan en un archivo crontab, puedes ver las que ya se están ejecutando. Para ello, utiliza el siguiente comando para mostrar el contenido de tus archivos crontab:

  - `crontab -l`

### 2.5 Editar entradas Crontab

Para modificar entradas crontab ya existentes, utiliza este comando:

  - `crontab -e`

### 2.6 Programar un trabajo para cada minuto

No supone ningún esfuerzo programar tareas para que se ejecuten cada minuto. En el siguiente ejemplo, ordenaremos la ejecución del comando cat para que se ejecute periódicamente:

  - `* * * * * cat /home/helloworld.sh`

### 2.7 Programar un trabajo de fondo cada día

Para programar una tarea en segundo plano que se ejecute todos los días, puedes utilizar el comando cron `@daily`:

  - `@daily cat /home/helloworld.sh`

Ten en cuenta que se va a ejecutar el script todos los días a las 12 de la mañana.

### 2.8 Programar un trabajo para un intervalo de tiempo determinado

Es posible programar un trabajo para un intervalo de tiempo determinado. Por ejemplo, todos los días de la semana, incluidos los fines de semana, de 8.00 a 17.00. El resultado final sería el siguiente:

  - `00 08-17 * * * cat /home/helloworld.sh`

Aquí hay otro ejemplo del mismo cron, pero sólo los fines de semana:

  - `00 08-17 * * 6-0 cat /home/helloworld.sh`

### 2.9 Programar un Cron Job al principio de cada mes

Para programar un trabajo al principio de cada mes, puedes utilizar el operador `@monthly`:

  - `@monthly cat /home/helloworld.sh`

Ten en cuenta que esto ejecutará el trabajo a las 12am del primer día de cada mes. Del mismo modo, existe un operador `@yearly` que ejecutará el trabajo el primer día de cada año.

### 2.10 Programar un trabajo para más de una vez

Los usuarios pueden programar una tarea cron para que se ejecute más de una vez, por ejemplo, cinco veces al día. En el siguiente ejemplo, configuraremos un trabajo para que se ejecute a las 12pm, 3pm, 5pm, 7pm y 9pm.

  - `0 12,15,17,19,21 * * * cat /home/helloworld.sh`

### 2.11 Ejecutar un comando Linux después de cada reinicio

De forma similar a los operadores `@daily`, `@monthly` y `@yearly`, bash también viene con un comando `@reboot`. Los usuarios pueden utilizarlo para programar una tarea que se ejecutará cada vez que el sistema se reinicie:

  - `@reboot cat /home/helloworld.sh`

---
## 3. ¿Dónde se encuentra el archivo Crontab?

Dependiendo del sistema operativo, crontab estará ubicado en tres lugares diferentes:

  - MacOS: `/var/at/tabs`
  - Sistemas basados en Debian: `/var/spool/cron/crontabs/`
  - Sistemas basados en Red Hat: `/var/spool/cron`

---
## 4. Acciones adicionales de Crontab

Aparte de la funcionalidad actual, crontab también es capaz de realizar acciones adicionales como crear un registro de ejecución cron o desactivar las notificaciones por correo electrónico. Consulta las secciones siguientes para obtener más información.

### 4.1 Crear un archivo de registro

La forma más sencilla de registrar todas las salidas de los trabajos cron es utilizar la siguiente lógica:

  - `* * * * * cat /home/helloworld.sh >> /var/log/logs.log 2>&1`

Este comando guardará todas las salidas de los trabajos cron en un archivo llamado `logs.log`

### 4.2 Desactivar correo electrónico

Dado que cron envía un correo electrónico al usuario después de cada trabajo, desactivar esta funcionalidad puede ser beneficioso para evitar el spam. Sólo tienes que añadir esta línea al final de tu trabajo cron:

  - `>/dev/null 2>&1`

### 4.3 Entorno Crontab

Crontab permite a sus usuarios definir variables de entorno. Esto puede hacerse con el comando `crontab -e` antes mencionado. Al definir variables, consulta la lista siguiente:

  - **PATH:** ruta por defecto para crontab.
  - **SHELL:** shell por defecto.
  - **LOGNAME:** propietario de crontab. La información se toma del directorio `/etc/passwd`
  - **HOME:** directorio personal del usuario. La información se toma del directorio `/etc/passwd`

