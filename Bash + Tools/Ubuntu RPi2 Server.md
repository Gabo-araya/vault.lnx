![[header_tux.jpg]]
# Configuración de Ubuntu Server en RPi2

Instrucciones para montar un servidor UBUNTU headless en Raspberry Pi 2

---
**Tags:** #github #codigo #linux #readme #server #rpi #raspberrypi #ubuntu
**Fecha creación:** 03.08.2023
**Fecha ultima modificación:** 04.08.2023

> [!info] Volver a [[Home]] | [[Ciberseguridad]]

---
## 1. Preparar la RPi2

### 1.1 Descargar ubuntu server para RPi2

Descargar imagen de ubuntu server para raspberry pi 2, 3 o 4 desde acá:
- [https://ubuntu.com/download/raspberry-pi](https://ubuntu.com/download/raspberry-pi)

En mi caso, uso la imagen para Raspberry Pi 2 de 32 bits:
- `ubuntu-20.04.1-preinstalled-server-armhf+raspi.img.xz`

Se puede descargar desde acá:
- [https://ubuntu.com/download/raspberry-pi/thank-you?version=22.04.2&architecture=server-armhf+raspi](https://ubuntu.com/download/raspberry-pi/thank-you?version=22.04.2&architecture=server-armhf+raspi)

### 1.2 Instalar SO en tarjeta SD usando Balena Etcher

Usar micro SD de clase 10 en lo posible. Para poner la imagen en la tarjeta micro SD, se usa Balena Etcher.
- [https://www.balena.io/etcher](https://www.balena.io/etcher)
Luego se debe instalar tarjeta SD en la RPi2 y encender el aparato.

---
## 2. Instalar actualizaciones y configuraciones

```bash
sudo apt upgrade -y && sudo apt update -y
```

---
## 3. Activación de Wifi

[https://www.raspberrypi.org/documentation/configuration/wireless/headless.md](https://www.raspberrypi.org/documentation/configuration/wireless/headless.md)
Para tener wifi, se debe crear un archivo `wpa_supplicant.conf` y se debe copiar en la partición donde se puede escribir (`system boot`).
**Archivo:** wpa_supplicant.conf

```
# wpa_supplicant.conf
ctrl_interface=DIR=/var/run/wpa_supplicant GROUP=netdev
`update_config=1
country=CL`
network={
	ssid="NOMBRE_DE_LA_RED"
	psk="PASSWORD"
}
```

---
## 4. Activación de SSH

[https://www.raspberrypi.org/documentation/remote-access/README.md](https://www.raspberrypi.org/documentation/remote-access/README.md)

Para tener acceso vía ssh se debe poner un archivo vacío de nombre "ssh" en la partición donde se puede escribir.

Para ubicar la IP de la Raspberry Pi, se entra al router a mirar los dispositivos conectados. Se debe revisar la configuración de su router. 

>[!tip] **Revisar la guía de [[Conocer la IP del dispositivo]]

Para conectarse vía ssh se usa el comando
```
ssh usuario@ip 
```

Ejemplo
```
ssh ubuntu@192.168.100.9 
ssh ubuntu@192.168.100.15
```

La primera vez hay que cambiar el password

A continuación se muestran las credenciales predeterminadas para ubuntu, raspberry pi os y kali:

> [!info]
> * user:password
> * ubuntu:ubuntu
> * pi:raspberry


---
## 5. Gestión de usuarios

### 5.1 Crear un nuevo usuario

Información relacionada: https://docs.bluehosting.cl/tutoriales/servidores/como-administrar-sus-usuarios-y-grupos-en-linux.html
  
Crear un nuevo usuario:
```bash
sudo adduser gabo
```

Agregar usuario creado a sudoers:
```bash
sudo adduser gabo sudo
```
 
Grupos de usuarios en Ubuntu:
```bash
sudo adduser gabo sudo; sudo adduser gabo adm; sudo adduser gabo dialout; sudo adduser gabo cdrom; sudo adduser gabo floppy; sudo adduser gabo audio; sudo adduser gabo dip; sudo adduser gabo video; sudo adduser gabo plugdev; sudo adduser gabo netdev; sudo adduser gabo lxd
```

Grupos de usuarios en Raspberry Pi Os:
```bash
sudo adduser gabo adm; sudo adduser gabo dialout; sudo adduser gabo cdrom; sudo adduser gabo sudo; sudo adduser gabo audio; sudo adduser gabo video; sudo adduser gabo plugdev; sudo adduser gabo games; sudo adduser gabo users; sudo adduser gabo input; sudo adduser gabo netdev; sudo adduser gabo spi; sudo adduser gabo i2c; sudo adduser gabo gpio
```

### 5.2 Cambiar password de un usuario

El comando **para cambiar password del usuario que estamos usando en este momento** es el siguiente:
```bash
sudo passwd
```

Para cambiar el nombre de otro usuario:
```bash
passwd nombre_usuario
```
### 5.3 Eliminar un usuario

Para eliminar un usuario: 
```bash
sudo userdel -remove-home ubuntu
```

```bash
sudo userdel -remove ubuntu
```

```bash
sudo userdel -remove pi
```

```bash
sudo userdel -remove-home kali
```

```bash
sudo userdel -remove kali
```

---
## 6. Cambiar el nombre del host

Instalar `systemd`
```bash
sudo apt-get install systemd
```

Para ver los datos del sistema
```bash
hostnamectl
```

Para cambiar nombre de host editar `/etc/hostname` y escribir el nombre del servidor, como "nombre_del_server" 
```bash
sudo nano /etc/hostname
```

```bash
sudo nano /etc/hosts
```

Cambiar el texto de `127.0.0.1 localhost` a `127.0.0.1 nombre_del_server` 

Podemos **reiniciar el servicio systemd-hostnamed** para que los cambios surtan efecto
```bash
sudo systemctl restart systemd-hostnamed
```

Para terminar podemos **comprobar el nombre de host** actualizado
```bash
hostnamectl
```

Vamos a necesitar **reiniciar el sistema** para que los cambios se apliquen de manera correcta
```bash
sudo init 6
```

Para terminar, verificaremos el nombre de host actualizado usando el archivo /etc/hostname
```bash
cat /etc/hostname
```

---
## 7. Cambiar el idioma de Ubuntu Server a español

Teniendo en cuenta que Ubuntu Server no dispone de interfaz gráfica de usuario, y que normalmente utilizaremos este sistema operativo en un servidor dedicado, VPS o Cloud muy lejos de nosotros, la única forma de poder administrarlo remotamente y cambiar el idioma a español es hacer uso del protocolo SSH, el cual viene instalado de manera predeterminada.

Si la distribución de teclado la tienes en inglés, recuerda que debes usar los símbolos del teclado correctamente para evitar errores, en este caso, nuestra recomendación es que veas una foto de un teclado en inglés y procedas a teclear las teclas que aparecen ahí.

Usar el comando:
```bash
sudo dpkg-reconfigure locales
```
 
Cuando ejecutemos esta orden, nos saldrá un pequeño asistente de configuración del idioma. En este asistente tendremos que deseleccionar el idioma inglés, y elegir únicamente el idioma español que viene indicado como `es_ES.UTF-8`. Para seleccionar o deseleccionar deberemos usar la barra espaciadora para que nos muestre un asterisco. Ahora nos vamos hasta «OK» y pulsamos enter.

Elegimos el idioma por defecto del sistema operativo, en este caso el `es_ES` que es el único que tendremos en el servidor. Una vez seleccionado, pulsamos en «OK» y «Enter».

En estos instantes ya tendremos cambiado el idioma a español, tendremos que reiniciar el servidor para que se apliquen los cambios correctamente.

Al volver al sistema operativo, si ejecutamos el siguiente comando podremos comprobar que efectivamente lo tenemos en español:

```bash
locale
```

---
## 8. Cambiar la distribución del teclado de Ubuntu Server a español

Ahora que hemos cambiado el idioma a español del sistema operativo, vamos a cambiar la distribución del teclado. Vía SSH no tendríamos problemas porque conserva la distribución del teclado de origen, pero si vamos a entrar por terminal de manera local en el sistema operativo, entonces sí tendremos problemas si lo tenemos en inglés que es lo típico.

Antiguamente cambiar la distribución del teclado de cualquier sistema operativo Linux era bastante tedioso, editando diferentes archivos de configuración y teniendo que reiniciar el sistema operativo para guardar los cambios. Ahora, con tan solo ejecutar un comando por terminal con permisos de root y seguir el asistente de configuración que nos mostrará Ubuntu Server, podremos hacer este proceso en minutos.

Para cambiar rápidamente la distribución del teclado, debemos ejecutar la siguiente orden para que nos aparezca un asistente de configuración:

```bash
sudo dpkg-reconfigure keyboard-configuration
```

Cuando lo ejecutemos, nos saldrá un asistente donde seleccionaremos el modelo de teclado, si no lo sabemos o no nos aparece en el listado, dejamos la opción predeterminada o una similar a nuestro teclado. A continuación, por defecto lo tenemos en inglés, pero podremos cambiarlo a español fácilmente, bajando hasta la sección de «Spanish» y lo seleccionamos, pulsamos en OK para pasar al siguiente menú.

Cuando pulsemos en «Spanish», debemos elegir la primera opción que viene por defecto, aunque tenemos otras posibilidades como podéis ver en la galería de fotos. También tendremos la posibilidad de configurar la tecla **ALT-GR** de nuestro teclado, e incluso la tecla «FN» que tenemos en algunos teclados.

Una vez que lo hayamos configurado todo, nos indicará que los cambios se aplicarán al reiniciar el servidor, por tanto, deberemos ejecutar el típico «sudo reboot» para reiniciarlo y podremos disfrutar de la distribución del teclado en español.

---
## 9. Cambiar permisos de una carpeta a 777

Directorio del proyecto "elfaro" como 777
```bash
sudo chmod -R 777 /var/www/html/elfaro
```

To manage your web pages, you should change the permissions for your `/var/www/html/` folder. To do this, run the following commands:
```bash
pi@raspberrypi:~ $ ls -lh /var/www/
```

```bash
pi@raspberrypi:~ $ sudo chown -R pi:www-data /var/www/html/
```

```bash
pi@raspberrypi:~ $ sudo chmod -R 770 /var/www/html/
```

```bash
pi@raspberrypi:~ $ ls -lh /var/www/
```

---
## 7. Otros comandos

### 7.1 Comprobar el espacio en disco en Linux usando el comando `df`

>[!tip] **Revisar la guía de [[Comando df]]**

`df`, que significa **Disk Filesystem** se usa para chequear el espacio en el disco. Mostrará el almacenamiento disponible y utilizado de los sistemas de archivos en tu máquina. Para ejecutar el comando, sigue los siguientes pasos:

Presiona Control + Alt + T para abrir la Terminal. Introduce el comando
```bash
df -h
```

En la columna Available, verás el espacio disponible de las particiones de tu disco. Encontrarás tu partición principal en /dev/sda o /dev/sdb.

Al ejecutar este comando, verás las columnas por defecto: Filesystem, Size, Available, Used, Use% y Mounted On.

### 7.2 Comprobar el espacio en disco en Linux usando el comando `du`

>[!tip] **Revisar la guía de [[Comando du]]**

Otro comando muy útil es `du`, abreviación de **Disk Usage**. Te mostrará detalles sobre el uso del disco de los archivos y directorios en un ordenador o servidor Linux. Con el comando du, necesitas especificar qué carpeta o archivo quieres comprobar.

La sintaxis es la siguiente:
```bash
du <options> <location of directory or file>
```

Veamos un uso real del comando du con el directorio Desktop:

- `du /home/user/Desktop/`: esta línea de comandos permite a los usuarios ver el uso del disco de los archivos y las carpetas que están en el directorio Desktop (los subdirectorios se incluyen también).
- `du -h /home/user/Desktop/`: al igual que con df, la opción -h muestra información en un formato legible por humanos.
- `du -sh /home/user/Desktop/`: La opción -s nos da el tamaño total de una carpeta especifica (en este caso, el directorio Desktop).
- `du -m /home/user/Desktop/`: la opción -m nos proporciona los tamaños de carpetas y archivos en Megabytes (podemos usar -k para ver la información en Kilobytes).
- `du -h –time /home/user/Desktop/`: esto informa la última fecha de modificación de los archivos y carpetas mostrados.
- `df –help`: muestra una lista de opciones disponibles y para qué se pueden utilizar.

---



