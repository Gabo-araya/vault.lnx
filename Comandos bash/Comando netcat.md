![[header_hacking.jpg]]
# Comando `netcat`

---
**Tags:** #info #hacking #tool #kali #linux #python #bash #chatGPT
**Fecha creación:** 03.08.2023
**Fecha ultima modificación:** 03.08.2023

> [!info] Volver a [[Home]] | [[Ciberseguridad]] 

>[!tip] **Revisar la guía [[Kali Linux post-instalacion]]**

---

**Netcat** (también conocido como "nc") es una utilidad de línea de comandos que proporciona una interfaz de red versátil y flexible. Su objetivo principal es la transferencia de datos a través de redes de computadoras utilizando protocolos TCP o UDP. Netcat se conoce como "la navaja suiza de las herramientas de red" debido a su capacidad para crear conexiones de red, actuar como servidor o cliente, y transferir datos en tiempo real.

Es importante tener en cuenta que Netcat es una herramienta poderosa y puede tener usos malintencionados si no se utiliza adecuadamente. Por lo tanto, es esencial utilizarla de manera ética y responsable, y asegurarse de obtener permiso para realizar pruebas o transferencias de datos en redes que no sean de su propiedad.
## Casos de uso de Netcat

1. **Transferencia de archivos**: Netcat puede utilizarse para transferir archivos entre máquinas en una red. Por ejemplo, en el host receptor, puedes ejecutar:
   ```
   nc -l -p 1234 > archivo_recibido.txt
   ```
   
   Y en el host emisor, puedes enviar el archivo así:
   ```
   nc host_destino 1234 < archivo_a_enviar.txt
   ```

2. **Chat o mensajería**: Netcat puede usarse como un sencillo chat de texto en tiempo real entre dos terminales en la misma red. En el host que actúa como servidor, ejecutas:
   ```
   nc -l -p 1234
   ```
   
   Y en el host cliente, puedes iniciar la conversación así:
   ```
   nc host_servidor 1234
   ```

3. **Escaneo de puertos**: Netcat es útil para verificar la disponibilidad de puertos en una máquina remota. Por ejemplo, para escanear los puertos 80 y 443 de un servidor web:
   ```
   nc -vz host_servidor 80 443
   ```

4. **Pruebas de conectividad**: Puedes usar Netcat para probar la conectividad entre dos máquinas y verificar que los puertos estén abiertos y accesibles. Por ejemplo, para probar la conectividad en el puerto 22 (SSH) de un servidor remoto:
   ```
   nc -vz host_remoto 22
   ```

5. **Creación de túneles**: Netcat puede usarse para crear túneles entre dos máquinas, permitiendo el acceso remoto a servicios internos sin exponerlos directamente a Internet. Por ejemplo, para redirigir el tráfico del puerto 8080 en la máquina local al puerto 80 en un servidor remoto:
   ```
   nc -l -p 8080 -c "nc host_servidor 80"
   ```

---
## Más ejemplos 

Estos ejemplos ilustran algunas de las capacidades avanzadas de Netcat para el escaneo de puertos y la creación de túneles, que son especialmente útiles en escenarios de red complejos donde se necesita acceder a servicios internos o probar la conectividad de puertos en máquinas remotas. Sin embargo, recuerda que Netcat debe utilizarse con responsabilidad y siempre con el permiso adecuado del propietario de los sistemas y redes involucrados.

A continuación, más ejemplos de la función de escaneo de puertos y creación de túneles con Netcat:

### Escaneo de puertos

1. **Escaneo de un solo puerto**: Para verificar si un puerto específico está abierto en una máquina remota, puedes usar el siguiente comando:
   ```
   nc -vz host_remoto puerto
   ```
   Por ejemplo, para escanear el puerto 22 (SSH) en el servidor remoto con dirección IP 192.168.1.100:
   ```
   nc -vz 192.168.1.100 22
   ```

2. **Escaneo de múltiples puertos**: Puedes escanear varios puertos al mismo tiempo utilizando un bucle en el shell. Por ejemplo, para escanear los puertos 80, 443 y 8080 en el servidor remoto:
   ```
   for port in 80 443 8080; do nc -vz host_remoto $port; done
   ```

3. **Escaneo de un rango de puertos**: Puedes escanear un rango de puertos utilizando un bucle en el shell. Por ejemplo, para escanear los puertos del 1 al 100 en el servidor remoto:
   ```
   for port in {1..100}; do nc -vz host_remoto $port; done
   ```

### Creación de túneles

1. **Túnel para acceso remoto a un servicio interno**: Puedes utilizar Netcat para crear un túnel que permita acceder a un servicio interno de una máquina a través de una máquina accesible desde Internet. Por ejemplo, para redirigir el tráfico del puerto 3306 (MySQL) en la máquina local a un servidor MySQL interno en la red:
   ```
   nc -l -p 3306 -c "nc host_servidor_mysql 3306"
   ```
   Esto permitirá que los clientes remotos se conecten al servidor MySQL interno utilizando la dirección IP y el puerto de la máquina local.

2. **Túnel SSH**: Netcat puede utilizarse para crear un túnel SSH inverso, que permite acceder a una máquina desde la que no es posible establecer conexiones directas. Por ejemplo, para crear un túnel inverso SSH desde la máquina local hacia un servidor remoto:
   ```
   nc -l -p 2222 -e ssh usuario@host_servidor
   ```
   Luego, desde la máquina remota, puedes conectarte a la máquina local utilizando SSH a través del puerto 2222:
   ```
   ssh -p 2222 usuario@localhost
   ```

---
## Ejemplo de aplicación en python

Sí, es posible crear un programa en Python para escanear todos los puertos de un host particular utilizando el módulo `subprocess` para ejecutar comandos de Netcat desde Python. También se puede utilizar el módulo `logging` para guardar los resultados en un archivo de log.

>[!danger] REVISAR código!!!
>El siguiente código fue generado por chatGPT. Es necesario revisarlo.

Aquí hay un ejemplo de cómo podría ser un programa en Python que realiza el escaneo de puertos y crea un túnel remoto al puerto de telnet:

```python
import subprocess
import logging

# Configuración del archivo de log
logging.basicConfig(filename='escaneo.log', level=logging.INFO, format='%(asctime)s - %(message)s')

def escanear_puertos(ip):
    # Escaneo de puertos utilizando Netcat
    for puerto in range(1, 65536):  # Escanea todos los puertos del 1 al 65535
        try:
            subprocess.check_output(['nc', '-zv', ip, str(puerto)], stderr=subprocess.STDOUT)
            logging.info(f'Puerto {puerto} en {ip} está abierto.')
        except subprocess.CalledProcessError as e:
            logging.info(f'Puerto {puerto} en {ip} está cerrado.')

def crear_tunel_telnet(ip, puerto_telnet):
    # Creación de túnel remoto al puerto de telnet utilizando Netcat
    try:
        subprocess.check_output(['nc', '-l', '-p', str(puerto_telnet), '-e', 'nc', ip, '23'], stderr=subprocess.STDOUT)
    except subprocess.CalledProcessError as e:
        logging.error('Error al crear el túnel remoto de telnet.')

if __name__ == "__main__":
    ip_a_escanear = input("Ingrese la IP a escanear: ")
    escanear_puertos(ip_a_escanear)

    puerto_telnet = int(input("Ingrese el puerto de telnet para crear el túnel remoto: "))
    crear_tunel_telnet(ip_a_escanear, puerto_telnet)
```

Este programa primero solicita al usuario la IP que desea escanear. Luego, realiza un escaneo de todos los puertos en la IP especificada utilizando Netcat y registra los resultados en el archivo de log. A continuación, el programa solicita al usuario el puerto de telnet que desea utilizar para crear el túnel remoto, y luego crea el túnel remoto al puerto de telnet en el host especificado.

Recuerda que realizar escaneos o acciones de este tipo en sistemas y redes que no sean de tu propiedad puede ser ilegal y poco ético. Siempre obtén el permiso adecuado antes de realizar este tipo de pruebas. Además, ten en cuenta que Netcat puede ser peligroso en manos equivocadas y se debe utilizar con responsabilidad.

---

## Ejemplo de aplicación en bash

Claro, también se puede realizar el mismo programa utilizando un script de Bash. Bash tiene la ventaja de que no necesita invocar a Python para ejecutar comandos de Netcat, ya que puede ejecutarlos directamente en el shell. 

>[!danger] REVISAR código!!!
>El siguiente código fue generado por chatGPT. Es necesario revisarlo.

Aquí tienes un ejemplo de cómo sería el programa en Bash:

```bash
#!/bin/bash

# Archivo de log
log_file="escaneo.log"

escanear_puertos() {
    # Escaneo de puertos utilizando Netcat
    for (( puerto=1; puerto<=65535; puerto++ )); do
        if nc -zv $1 $puerto >/dev/null 2>&1; then
            echo "Puerto $puerto en $1 está abierto." | tee -a $log_file
        else
            echo "Puerto $puerto en $1 está cerrado." | tee -a $log_file
        fi
    done
}

crear_tunel_telnet() {
    # Creación de túnel remoto al puerto de telnet utilizando Netcat
    nc -l -p $1 -e "nc $2 23" 2>&1 | tee -a $log_file
}

read -p "Ingrese la IP a escanear: " ip_a_escanear
escanear_puertos $ip_a_escanear

read -p "Ingrese el puerto de telnet para crear el túnel remoto: " puerto_telnet
crear_tunel_telnet $puerto_telnet $ip_a_escanear
```

Guarda este código en un archivo con extensión `.sh` (por ejemplo, `escaneo_puertos.sh`) y asegúrate de darle permisos de ejecución:

```
chmod +x escaneo_puertos.sh
```

Luego, puedes ejecutar el script en el terminal:

```
./escaneo_puertos.sh
```

Este script realiza el mismo escaneo de puertos y la creación de túnel remoto al puerto de telnet que el programa en Python. Los resultados se almacenan en el archivo de log especificado.

Al igual que antes, recuerda que realizar escaneos o acciones de este tipo en sistemas y redes que no sean de tu propiedad puede ser ilegal y poco ético. Siempre obtén el permiso adecuado antes de realizar este tipo de pruebas. Además, ten en cuenta que Netcat puede ser peligroso en manos equivocadas y se debe utilizar con responsabilidad.