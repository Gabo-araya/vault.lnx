
![[header_terminal.jpg]]
## Notas clase taller ciberseguridad - 10.08.2023
---
**Tags:** #info #bash #linux #ciberseguridad #tool 
**Fecha creación:** 10.08.2023
**Fecha ultima modificación:** 10.08.2023

> [!info] Volver a [[Home]] 

---
### Objetivo de la clase

Enumeración de equipos de red usando software de línea de comandos en Kali Linux.

---
## 1. Enumerar equipos usando ICMP ([[Comando ping]]) 

> [!tip] Revisar la guía de [[Comando ping]]

El comando `ping` utiliza los paquetes ICMP (Internet Control Message Protocol) para realizar su función de verificar la conectividad y medir la latencia entre dispositivos en una red. ICMP es un protocolo de capa de red que se utiliza para enviar mensajes de control y error entre dispositivos en una red IP.

La relación entre `ping` y los paquetes ICMP es la siguiente:

1. **Envío de Paquetes ICMP Request**:
   Cuando ejecutas el comando `ping` seguido de una dirección IP o un nombre de dominio, tu sistema operativo crea y envía paquetes ICMP Echo Request (solicitudes de eco) a la dirección especificada. Estos paquetes contienen un número de secuencia único y un sello de tiempo.

2. **Respuesta ICMP Echo Reply**:
   El dispositivo de destino recibe los paquetes ICMP Echo Request y, si está configurado para responder a los mensajes ICMP, generará y enviará de vuelta paquetes ICMP Echo Reply (respuestas de eco) al remitente original. Estas respuestas también contienen el mismo número de secuencia y sello de tiempo que el paquete original.

3. **Cálculo de la Latencia**:
   Cuando el remitente recibe las respuestas ICMP Echo Reply, calcula la latencia (round-trip time, RTT) midiendo la diferencia entre el tiempo de envío del paquete original y el tiempo de recepción de la respuesta. Esto proporciona una estimación del tiempo que tarda un paquete en ir desde el remitente al destino y regresar.

4. **Visualización en la Salida de `ping`**:
   La salida del comando `ping` muestra información sobre los paquetes enviados y recibidos, así como la latencia medida en milisegundos para cada paquete. También puede mostrar estadísticas adicionales como la pérdida de paquetes y el tiempo mínimo, máximo y promedio de ida y vuelta.

En resumen, `ping` utiliza paquetes ICMP Echo Request y Echo Reply para evaluar la conectividad y la latencia entre dispositivos en una red. Esta relación entre `ping` y los paquetes ICMP es fundamental para su función de prueba de red y diagnóstico de problemas de conectividad.

Ejemplo de uso de `ping`:
   ```
   $ ping example.com
   PING example.com (93.184.216.34) 56(84) bytes of data.
   64 bytes from 93.184.216.34 (93.184.216.34): icmp_seq=1 ttl=60 time=92.7 ms
   ...
   ```

Escaneo de máquinas usando paquetes ICMP con `ping`

```
ping 10.0.200.1
ping 10.0.200.2
ping 10.0.200.3
[etc...]
```

Para evitar escaneos de red con herramientas que usan paquetes ICMP, se puede deshabilitar el protocolo ICMP, de modo que al hacer un ping a ese equipo, como no va responder, se le considere inactivo.

---
## 2. Enumerar equipos usando ARP

La otra forma de hacer escaneos, se pueden usar paquetes ARP.
### 2.1 Comando `arp-scan`

El comando `arp-scan` es una herramienta de línea de comandos que te permite enumerar equipos en una red local utilizando el protocolo ARP (Address Resolution Protocol). ARP se utiliza para mapear direcciones IP a direcciones MAC en una red. 

Recuerda que el uso de herramientas de escaneo de red debe llevarse a cabo de manera ética y respetar las políticas de seguridad y privacidad de la red en la que estás trabajando. Siempre asegúrate de tener permiso para realizar escaneos en la red antes de utilizar estas herramientas en un entorno real.

Aquí te muestro cómo usar `arp-scan` para enumerar equipos en una red:

1. Abre una terminal en tu sistema Linux.

2. Asegúrate de que `arp-scan` esté instalado en tu sistema. Si no lo está, puedes instalarlo utilizando el gestor de paquetes de tu distribución. Por ejemplo, en Ubuntu puedes usar el siguiente comando:

   ```bash
   sudo apt-get install arp-scan
   ```

3. Una vez que `arp-scan` esté instalado, ejecuta el siguiente comando para escanear la red y enumerar los equipos:

   ```bash
   sudo arp-scan --localnet
   ```

   El uso de `sudo` es necesario porque el escaneo de red requiere permisos de superusuario.

4. `arp-scan` comenzará a escanear la red y mostrará información sobre los equipos encontrados. Verás una lista de direcciones IP y direcciones MAC.

5. Una vez que hayas terminado de escanear, puedes detener el proceso presionando `Ctrl + C`.

6. Analiza los resultados para enumerar los equipos en la red. Puedes identificar las direcciones IP y MAC de los dispositivos que se encuentran en la red.

**Ejemplo de uso de `arp-scan`:**

```
sudo arp-scan -I eth0 10.0.200.0/24
```

Este comando utiliza la herramienta `arp-scan` para realizar un escaneo de red utilizando el protocolo ARP en busca de dispositivos en la subred 10.0.200.0/24. Aquí está el desglose de cada parte del comando:

- `sudo`: El comando se ejecuta con privilegios de superusuario. Esto puede ser necesario para acceder a cierta información de red y enviar paquetes ARP.

- `arp-scan`: Es el comando principal que invoca la herramienta de escaneo de red `arp-scan`.

- `-I eth0`: Esta opción especifica la interfaz de red que se utilizará para enviar los paquetes ARP. En este caso, se utiliza la interfaz `eth0`.

- `10.0.200.0/24`: Esta es la dirección IP o rango de direcciones IP que se escanearán utilizando el protocolo ARP. La notación `10.0.200.0/24` indica que se escanearán todas las direcciones IP en la subred que comienza en 10.0.200.0 y termina en 10.0.200.255. El número después de la barra (/) representa la máscara de red, que en este caso es una máscara de subred de 24 bits (255.255.255.0).

En resumen, el comando `sudo arp-scan -I eth0 10.0.200.0/24` se utiliza para realizar un escaneo de red utilizando ARP en la subred 10.0.200.0/24. `arp-scan` enviará solicitudes ARP a todas las direcciones IP en ese rango y mostrará las direcciones IP y direcciones MAC de los dispositivos encontrados. Recuerda que el uso de herramientas de escaneo de red debe realizarse de manera ética y respetar las políticas de seguridad y privacidad de la red en la que estás trabajando.

---
### 2.2 comando `netdiscover`

El comando `netdiscover` es una herramienta de escaneo de red que se utiliza para descubrir y enumerar equipos en una red local utilizando el protocolo ARP (Address Resolution Protocol). El protocolo ARP se utiliza para mapear direcciones IP a direcciones MAC en una red.

Es importante mencionar que `netdiscover` es una herramienta de escaneo de red y puede ser utilizada tanto con fines legítimos como maliciosos. Asegúrate de tener permiso para realizar escaneos en la red antes de utilizar esta herramienta en un entorno real.

Para enumerar equipos de una red utilizando `netdiscover`, puedes seguir estos pasos:

1. Abre una terminal en tu sistema Linux.

2. Ejecuta el siguiente comando para iniciar `netdiscover` y escanear la red:

   ```bash
   sudo netdiscover
   ```

   El uso de `sudo` es necesario porque el escaneo de red requiere permisos de superusuario.

3. `netdiscover` comenzará a escanear la red y mostrará información sobre los equipos encontrados. Verás una lista de direcciones IP, direcciones MAC y fabricantes correspondientes.

4. Una vez que hayas terminado de escanear, puedes detener el proceso presionando `Ctrl + C`.

5. Analiza los resultados para enumerar los equipos en la red. Puedes identificar las direcciones IP y MAC de los dispositivos que se encuentran en la red.

**Ejemplo de uso de `netdiscover`:**

```
sudo netdiscover -i eth0 -r 10.0.200.0/24
```

Este comando utiliza la herramienta `netdiscover` para realizar un escaneo de red en busca de dispositivos en la subred 10.0.200.0/24. Aquí está el desglose de cada parte del comando:

- `sudo`: El comando se ejecuta con privilegios de superusuario. Esto puede ser necesario para acceder a cierta información de red.

- `netdiscover`: Es el comando principal que invoca la herramienta de escaneo de red `netdiscover`.

- `-i eth0`: Esta opción especifica la interfaz de red que se utilizará para realizar el escaneo. En este caso, se utiliza la interfaz `eth0`.

- `-r 10.0.200.0/24`: Esta opción especifica el rango de direcciones IP que se escanearán. La notación `10.0.200.0/24` indica que se escanearán todas las direcciones IP en la subred que comienza en 10.0.200.0 y termina en 10.0.200.255. El número después de la barra (/) representa la máscara de red, que en este caso es una máscara de subred de 24 bits (255.255.255.0).

En resumen, el comando `sudo netdiscover -i eth0 -r 10.0.200.0/24` se utiliza para escanear la subred 10.0.200.0/24 en busca de dispositivos activos y muestra información sobre las direcciones IP y direcciones MAC de los dispositivos encontrados en esa subred específica. Recuerda que el uso de herramientas de escaneo de red debe realizarse de manera ética y respetar las políticas de seguridad y privacidad de la red en la que estás trabajando.

---
## 3. Enumerar equipos usando `nmap`

> [!tip] Revisar la guía de [[Comando nmap]]

`nmap` utiliza tanto el protocolo ARP (Address Resolution Protocol) como el protocolo TCP (Transmission Control Protocol), dependiendo del tipo de escaneo que estés realizando y de los objetivos que estés persiguiendo.

Cuando se trata de escaneos de red, `nmap` puede utilizar tanto ARP como TCP:

1. **Protocolo ARP**: En ciertos escenarios, como el escaneo de hosts en la misma red local, `nmap` puede utilizar ARP para descubrir dispositivos activos en la red. El escaneo ARP permite identificar hosts basados en sus direcciones MAC.

2. **Protocolo TCP**: La mayoría de los escaneos realizados con `nmap` implican el uso del protocolo TCP. `nmap` envía paquetes TCP a puertos específicos en los dispositivos de destino para determinar si los puertos están abiertos, cerrados o filtrados. Esto proporciona información sobre qué servicios están en ejecución en los dispositivos.

En resumen, `nmap` es una herramienta versátil que puede utilizar tanto ARP como TCP según el tipo de escaneo que estés llevando a cabo. Esto le permite descubrir y recopilar información sobre dispositivos y servicios en una red de manera efectiva y detallada.

---
### 3.1 Encontrar scripts de nmap

Los scripts de nmap están ubicados en /usr/share/nmap/scripts
Para acceder ese directorio se puede usar el comando `cd`
```
cd /usr/share/nmap/scripts
```

**`cd /usr/share/nmap/scripts`**: Este comando utiliza el comando `cd` (cambiar directorio) para moverte al directorio `/usr/share/nmap/scripts`. En otras palabras, estás cambiando el directorio actual de trabajo al directorio donde se encuentran los scripts de Nmap. Los scripts de Nmap son archivos con extensión `.nse` que Nmap utiliza para realizar diversas pruebas y escaneos en redes.

Para buscar un tipo de script específico
```
locate .nse | grep ssl
```

**`locate .nse | grep ssl`**: 

- `locate .nse`: Este comando utiliza la herramienta `locate` para buscar y mostrar rutas de archivo en tu sistema que contienen la extensión `.nse`. Dado que estás ubicado en el directorio `/usr/share/nmap/scripts`, la búsqueda se realizará en ese directorio y sus subdirectorios.
 
- `|` (Pipe): El símbolo de tubería se utiliza para redirigir la salida del comando a su izquierda hacia el comando a su derecha. En este caso, la salida del comando `locate .nse` (rutas de archivos con extensión `.nse`) se pasa como entrada al siguiente comando.

- `grep ssl`: El comando `grep` se utiliza para buscar líneas que contengan un patrón específico en el texto. En este caso, estás buscando líneas que contengan la palabra "ssl" en la salida del comando anterior. Esto filtra los resultados para mostrar solo las rutas de archivo que también contienen el texto "ssl".

> [!tip] Revisar la guía de [[Comando grep]]

---
### 3.2 Escanear la red con `nmap`

> [!tip] Revisar la guía de [[Comando nmap]]

**Descripción del programa `nmap` y sus casos de uso:**

`nmap` (Network Mapper) es una herramienta de código abierto utilizada para descubrir y mapear redes, así como para auditar la seguridad de los sistemas y dispositivos en una red. Proporciona una amplia gama de funcionalidades de escaneo y detección de puertos, protocolos y servicios en una red, lo que lo convierte en una herramienta esencial para administradores de sistemas y profesionales de seguridad.
#### Casos de uso y ejemplos de `nmap` con la IP "10.0.200.5"

1. **Escaneo de ping:**

La opción `-sn` le indica a `nmap` que realice un escaneo de ping, lo que significa que solo enviará solicitudes ICMP Echo (ping) para determinar la actividad de los hosts, sin escanear puertos o servicios.
   
   ```bash
   nmap -sn 10.0.200.5
   ```

Para escanear un rango de direcciones IP con ping, por ejemplo: `10.0.200.0/24`, se debe usar el comando: 

   ```bash
   nmap -sn 10.0.200.0/24
   ```

La notación `10.0.200.0/24` indica que se escanearán todas las direcciones IP en la subred que comienza en 10.0.200.0 y termina en 10.0.200.255. El número después de la barra (/) representa la máscara de red, que en este caso es una máscara de subred de 24 bits (255.255.255.0).

2. **Escaneo de un rango de puertos:**

   ```bash
   nmap -p 80-120 10.0.200.5
   ```
Aquí se escanean los puertos en el rango del 80 al 120 en la dirección IP "10.0.200.5".

3. **Escaneo de un rango de puertos abiertos:**

   ```bash
   nmap --open -p 200-300 10.0.200.5
   ```
Este comando escanea los puertos en el rango del 200 al 300 en la dirección IP "10.0.200.5" y muestra solo los puertos abiertos.

4. **Escaneo de todos los puertos abiertos desde 0 al 62535:**

   ```bash
   nmap -p 0-62535 10.0.200.5
   ```
Aquí se escanean todos los puertos en el rango del 0 al 62535 en la dirección IP "10.0.200.5" para identificar los puertos abiertos.

5. **Escaneo de servicios:**
   
   ```bash
   nmap -sV 10.0.200.5
   ```
La opción `-sV` activa la detección de versiones de servicios. Cuando se utiliza esta opción, `nmap` intentará determinar las versiones de los servicios que se están ejecutando en los puertos abiertos.****

`nmap` ofrece una amplia variedad de opciones y características avanzadas que permiten realizar análisis más detallados y específicos de las redes y sistemas. Sin embargo, es importante utilizar `nmap` con responsabilidad y obtener permisos adecuados para realizar escaneos en una red, ya que el escaneo no autorizado puede violar políticas de seguridad y privacidad.
#### Comandos usados en la clase

Escanea usando ping
   ```bash
   nmap -sn 10.0.200.0/24
   ```

Escanea usando la configuración predeterminada
   ```bash
   nmap 10.0.200.5 
   ```

Escanea puertos específicos
   ```bash
   nmap -p 21,22,23,27,3306 10.0.200.5
   ```

Escanea un rango de puertos
   ```bash
   nmap -p 21-27,3306,80 10.0.200.5
   ```

Escanea sólo los abiertos
   ```bash
   nmap -p 21-27,3306,80 --open 10.0.200.5 
   ```

Escanea todos los puertos abiertos desde el 0 al 62535
   ```bash
   nmap -p 0-62535 --open 10.0.200.5 
   nmap -p- --open 10.0.200.5 
   ```

Este comando realiza un escaneo de puertos en la dirección IP "10.0.200.5", busca versiones de servicios en los puertos abiertos y muestra solo los puertos abiertos en la salida. Luego, guarda los resultados en un archivo llamado "resultado.txt".
   ```bash
   nmap -sV --open 10.0.200.5 -oN resultado.txt
   ```

Este comando se utiliza para realizar un escaneo de vulnerabilidades e intrusiones en una máquina o dispositivo con la dirección IP "10.0.2.8" y exporta los resultados en formato XML. 
   ```bash
   nmap -sV --open --script vuln,intrusive 10.0.200.5 -oX result_nmap_intrusive_plus_vuln_10.0.200.5.xml
   ```

Aquí está el desglose de cada parte del comando:

- `nmap`: Es el comando principal que invoca la herramienta `nmap`.

- `-sV`: Esta opción activa la detección de versiones de servicios en los puertos abiertos. `nmap` intentará determinar las versiones de los servicios en esos puertos.

- `--open`: Esta opción indica que `nmap` solo escaneará los puertos que están abiertos en la máquina objetivo. Esto reduce el tiempo de escaneo al centrarse solo en los puertos activos.

- `--script vuln, intrusive`: Aquí se están especificando dos categorías de scripts para ejecutar durante el escaneo. Los scripts de la categoría "vuln" se utilizan para detectar vulnerabilidades, y los scripts de la categoría "intrusive" pueden realizar escaneos más intrusivos, lo que significa que pueden ser más intensivos y posiblemente intrusivos para la máquina objetivo.

- `10.0.2.8`: Esta es la dirección IP del objetivo que se va a escanear en busca de vulnerabilidades e intrusiones.

- `-oX result_nmap_intrusive,vuln_10.0.200.5.xml`: Esta opción indica que los resultados del escaneo se guardarán en un archivo XML llamado "result_nmap_intrusive_vuln_10.0.200.5.xml". El formato XML permite un análisis posterior estructurado de los resultados del escaneo.

---
## 4. Otra información

### 4.1 Revisar páginas del manual de algún comando

>[!tip] **Revisar la guía del comando [[Comando man]]**

El comando `man` en Linux es una herramienta de línea de comandos que se utiliza para acceder a las páginas de manual (manuales) de los programas y comandos instalados en tu sistema. Estas páginas de manual proporcionan información detallada sobre cómo usar y comprender diferentes comandos, sus opciones, argumentos y ejemplos de uso.

Descripción y casos de uso del comando `man`:

1. **Acceder a las páginas de manual**:
   - Descripción: El principal propósito del comando `man` es acceder a la documentación de los comandos del sistema operativo y otros programas instalados. Proporciona descripciones completas, opciones, ejemplos y detalles técnicos sobre cómo usar cada comando.

   Ejemplo:
   ```
   man crunch
   ```
   Esto mostrará la página de manual para el comando `crunch`, que es una herramienta para generar listas de palabras basadas en patrones.

   ```
   man arp-scan
   ```
   Esto mostrará la página de manual para el comando `arp-scan`, que se utiliza para escanear y mostrar dispositivos en una red local.

---
### 4.2 Uso de `xsltproc` para cambiar el formato de un archivo XML

**Descripción del programa `xsltproc` y sus casos de uso:**

`xsltproc` es una herramienta de línea de comandos que se utiliza para aplicar hojas de estilo XSLT (Extensible Stylesheet Language Transformations) a documentos XML. XSLT es un lenguaje que permite transformar un documento XML en otro formato, como HTML, XML o texto plano, según las reglas y transformaciones definidas en la hoja de estilo.

**Casos de uso y ejemplos de `xsltproc`:**

1. **Transformación de XML a HTML:**
   
   ```bash
   xsltproc estilo.xsl archivo.xml -o archivo.html
   ```
   
   Este comando aplica la hoja de estilo `estilo.xsl` al archivo XML `archivo.xml` y genera un archivo HTML llamado `archivo.html` como resultado de la transformación.

2. **Generación de informes a partir de datos XML:**

   Supongamos que tienes un archivo XML que contiene datos de ventas y quieres generar un informe HTML a partir de esos datos.

   ```bash
   xsltproc informe.xsl ventas.xml -o informe.html
   ```
   
   En este ejemplo, `informe.xsl` sería la hoja de estilo que define cómo presentar los datos de ventas en HTML, y `ventas.xml` sería el archivo XML que contiene los datos de ventas.

3. **Conversión de XML a texto plano:**

   Puedes utilizar `xsltproc` para convertir datos XML en formato de texto plano, por ejemplo, para generar un archivo de registro legible.

   ```bash
   xsltproc texto.xsl datos.xml -o registro.txt
   ```

   Donde `texto.xsl` sería la hoja de estilo que define la transformación de XML a texto plano, y `datos.xml` contiene los datos en formato XML.

`xsltproc` es una herramienta versátil que permite transformar documentos XML en diferentes formatos, lo que resulta útil para generar informes, generar páginas web dinámicas o realizar conversiones de datos en varios contextos. Las hojas de estilo XSLT proporcionan flexibilidad para definir cómo se realiza la transformación y la presentación de datos.

---
### 4.3 Para buscar exploits

[Exploit Database](https://www.exploit-db.com/): https://www.exploit-db.com/
Son los mismos que aparecen en la versión de metasploit de la línea de comandos

---
### 4.4 ¿Cuántos puertos TCP existen?

Existen 65535 puertos TCP.

Para contar cuántos puertos TCP están abiertos y disponibles en una máquina, puedes utilizar el comando `netstat`. `netstat` es una herramienta de línea de comandos que muestra información sobre las conexiones de red y las estadísticas de la interfaz de red. Puedes combinar `netstat` con el comando `grep` para filtrar y contar los puertos TCP abiertos. Aquí tienes un ejemplo de cómo hacerlo:

```bash
netstat -tln | grep 'tcp' 
```

Desglose del comando:

- `netstat -tln`: Muestra una lista de las conexiones TCP locales (`-l`) y las escuchas de puertos (`-n`) en el sistema.

- `grep 'tcp'`: Filtra las líneas que contienen la palabra "tcp", lo que selecciona solo las entradas TCP.

Ejecutar este comando te dará el recuento de puertos TCP abiertos en la máquina. Ten en cuenta que algunos de estos puertos pueden ser puertos bien conocidos y reservados para servicios específicos, mientras que otros pueden ser puertos efímeros utilizados para conexiones temporales.

---
### 4.5 ¿Qué diferencias existen entre puertos TCP y UDP?

Los protocolos TCP (Transmission Control Protocol) y UDP (User Datagram Protocol) son dos de los protocolos de transporte más utilizados en la capa de transporte del modelo OSI (Open Systems Interconnection). Aunque ambos se utilizan para el intercambio de datos entre dispositivos en una red, tienen diferencias significativas en términos de características y aplicaciones. Aquí hay algunas diferencias clave entre TCP y UDP:

1. **Orientación a la conexión:**
   - TCP: Es un protocolo orientado a la conexión. Esto significa que se establece una conexión entre el remitente y el receptor antes de que se pueda intercambiar datos. TCP garantiza la entrega de los datos en el orden correcto y la detección y recuperación de paquetes perdidos.
   - UDP: Es un protocolo sin conexión. Los datagramas UDP se envían sin establecer previamente una conexión. Esto lo hace más rápido que TCP, pero no garantiza la entrega ni el orden de los datos.

2. **Fiabilidad:**
   - TCP: Es altamente confiable. Garantiza que los datos lleguen sin errores y en el orden correcto mediante mecanismos de confirmación y retransmisión.
   - UDP: No ofrece garantía de entrega ni confirmaciones. Los paquetes pueden perderse o llegan fuera de orden.

3. **Latencia y velocidad:**
   - TCP: Debido a sus mecanismos de confirmación y retransmisión, TCP puede introducir cierta latencia en la transmisión de datos. Puede ser más lento en comparación con UDP.
   - UDP: Debido a su naturaleza sin conexión y la falta de confirmaciones, UDP tiende a ser más rápido y tiene una menor latencia que TCP.

4. **Aplicaciones típicas:**
   - TCP: Se utiliza para aplicaciones que requieren una comunicación confiable y precisa, como transferencia de archivos, navegación web, correo electrónico, entre otras.
   - UDP: Se utiliza para aplicaciones en las que la velocidad es más importante que la confiabilidad, como streaming de video, juegos en línea y VoIP (Voz sobre Protocolo de Internet).

5. **Control de flujo y congestión:**
   - TCP: Proporciona control de flujo y congestión, lo que evita que el remitente abrume al receptor con más datos de los que puede manejar.
   - UDP: No proporciona control de flujo ni mecanismos de congestión. El remitente puede enviar datos a una velocidad más alta, lo que podría causar congestión en la red.

En resumen, TCP es más adecuado para aplicaciones que requieren una transmisión confiable y ordenada de datos, mientras que UDP es más adecuado para aplicaciones que priorizan la velocidad y pueden tolerar cierta pérdida de datos. La elección entre TCP y UDP depende de los requisitos específicos de la aplicación y de las características de la red en la que se utiliza.

---
### 4.6 ¿Cómo cambiar el servicio ssh de un puerto a otro puerto diferente en linux?

Para cambiar el puerto en el que el servicio SSH se está ejecutando en Linux, sigue estos pasos:

1. **Accede como superusuario:** Abre una terminal y asegúrate de tener privilegios de superusuario. Puedes usar el comando `sudo` o cambiar a la cuenta de superusuario con `su`.

2. **Edita el archivo de configuración SSH:** El archivo de configuración de SSH se llama generalmente `sshd_config` y se encuentra en el directorio `/etc/ssh/`. Utiliza un editor de texto en la línea de comandos, como `nano` o `vim`, para abrir el archivo:

   ```bash
   sudo nano /etc/ssh/sshd_config
   ```

3. **Busca la línea del puerto:** Busca la línea que define el puerto en el que SSH está escuchando actualmente. Por defecto, es `Port 22`. Cambia este número al nuevo puerto que deseas utilizar. Por ejemplo, para cambiarlo al puerto 2222:

   ```plaintext
   Port 2222
   ```

4. **Guarda y cierra el archivo:** En `nano`, presiona `Ctrl + O` para guardar los cambios y `Ctrl + X` para salir del editor.

5. **Reinicia el servicio SSH:** Después de realizar el cambio, reinicia el servicio SSH para que los cambios surtan efecto:

   ```bash
   sudo systemctl restart ssh
   ```

6. **Asegúrate de que el nuevo puerto esté permitido en el firewall:** Si tienes un firewall habilitado, asegúrate de permitir el nuevo puerto para que las conexiones SSH sean exitosas:

   ```bash
   sudo ufw allow 2222/tcp  # Si estás usando Uncomplicated Firewall (UFW)
   ```

7. **Prueba la conexión:** Ahora puedes probar la conexión SSH al nuevo puerto. Por ejemplo:

   ```bash
   ssh usuario@direccion_ip -p 2222
   ```

Asegúrate de usar el nuevo puerto cada vez que te conectes al servicio SSH en esta máquina. Cambiar el puerto es una buena práctica de seguridad para evitar escaneos automáticos de puertos y ataques bruteforce, pero también significa que necesitarás especificar el puerto al conectarte.

---


