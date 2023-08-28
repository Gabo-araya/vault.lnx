![[header_kali.jpg]]
# Kali Linux Guía post-instalación - 2023

---
**Tags:** #kali #linux #hacking #tool 

> [!info] Volver a [[Home]] | [[Ciberseguridad]] 

>[!abstract] Temario
> * [[#1. Descargar Kali linux desde el sitio oficial]]
> * [[#2. Instalar Kali Linux en virtualBox y tomar un snapshot]]
> * [[#3. Cambiar la distribución del teclado (keyboard layout)]]
> 	* [[#Método 1 Línea de comandos]]
> 	* [[#Método 2 Interfaz gráfica]]
> * [[#4. Actualizar el sistema operativo]]
> * [[#5. Cambiar el password predeterminado]]
> 	* [[#Paso 1 Cambiar contraseña del usuario actual]]
> 	* [[#Paso 2 Cambiar contraseña del usuario root]]
> * [[#6. Tomar un snapshot!]]
> * [[#7. Habilitar portapapeles compartido y Arrastrar y soltar]]
> * [[#8. Gestión de usuarios]]
> 	* [[#Crear un nuevo usuario]]
> 	* [[#Eliminar un usuario]]
> * [[#9. Cambiar el nombre del host]]
> * [[#10. Eliminar paquetes innecesarios]]
> * [[#11. Actualizar la versión completa del sistema]]
> * [[#12. Instalar algún otro paquete necesario]]
> * [[#13. Tips and Tricks Fixing VirtualBox Kali Linux Black Screen]]

---

- Con ideas obtenidas desde: https://www.youtube.com/watch?v=sH20ovfcpGA y https://www.ceos3c.com/security/top-things-after-installing-kali-linux/?expand_article=1
- Revisar también: https://www.ceos3c.com/security/top-things-after-installing-kali-linux/?expand_article=1

 ![](https://www.youtube.com/watch?v=sH20ovfcpGA)

---
## 1. Descargar Kali linux desde el sitio oficial

Sitio web oficial: https://www.kali.org/get-kali/#kali-platforms

---
## 2. Instalar Kali Linux en virtualBox y tomar un snapshot
Si se usa una máquina virtual en VirtualBox, crear un snapshot de la instalación.

Instrucciones sobre snapshots acá: https://www.zdnet.com/article/what-are-virtualbox-guest-snapshots-and-how-do-you-take-them/

---
## 3. Cambiar la distribución del teclado (keyboard layout)

### Método 1: Línea de comandos

Ejecutar el comando para cargar el nuevo layout
```bash
sudo dpkg-reconfigure keyboard-configuration
```

Se deben navegar a través de las distintas opciones y marcar las adecuadas.

### Método 2: Interfaz gráfica

En el menú de aplicaciones de Kali linux
1. Abrir Settings > Keyboard
2. Acceder a pestaña "Layout"
3. Desactivar "Use system defaults" (para poder editar el layout)
4. Presionar el botón "+ Add"
5. Buscar el idioma "Español Latinoamericano" y agregarlo
6. Mover el layout escogido como primer elemento de la lista
7. Eliminar el layout "Inglés" (opcional)
8. Cerrar para guardar cambios.

---
## 4. Actualizar el sistema operativo

Utilizar el comando:
```bash
sudo apt update -y && sudo apt upgrade -y
```

Es posible también ejecutarlos separadamente
```bash
sudo apt update -y
sudo apt upgrade -y
```

Tenga en cuenta lo siguiente:

- La primera actualización puede tomar un tiempo largo, dependiendo de las capacidades de su equipo o su velocidad de internet. Tenga paciencia.
- Es posible que haya preguntas entremedio de la instalación, permanezca atento a los mensajes de su consola de comandos.
- Es una buena práctica reiniciar el sistema luego de la primera actualización.
  ```bash
  sudo reboot now
  ```
- Se pueden realizar otras tareas mientras el sistema se actualiza, como navegar por internet.
- Es posible que luego de la actualización no cargue la interfaz gráfica. En ese caso, luego de ingresar sus credenciales de usuario/password, ejecute el comando `startx` para cargar la interfaz.
  ```bash
  startx
  ```

---
## 5. Cambiar el password predeterminado

### Paso 1: Cambiar contraseña del usuario actual

Ejecutar el comando `passwd` para cambiar la contraseña del usuario que está actualmente logueado. Se debe ingresar 2 veces la contraseña.

```bash
passwd
```

### Paso 2: Cambiar contraseña del usuario root

Ejecutar el comando `passwd` con privilegios de administración para cambiar la contraseña del usuario root. **Se debe ingresar 3 veces la contraseña.**

```bash
sudo passwd root
```

---
## 6. Tomar un snapshot!

Este es un buen momento para tomar un snapshot de la máquina virtual de kali.

---
## 7. Habilitar portapapeles compartido y Arrastrar y soltar

Esto sirve para copiar archivos en el equipo host y pegarlos en el equipo virtualizado.

1. Seleccionar la máquina virtual de Kali Linux
2. Acceder a la configuración de la máquina virtual
3. Seleccionar la pestaña General
4. En la opción "Compartir portapapeles" seleccionar "Bidireccional"
5. En la opción "Arrastrar y soltar" seleccionar "Bidireccional"

---
## 8. Gestión de usuarios

### Crear un nuevo usuario

Para crear un nuevo usuario, ejecutar el comando `adduser [usuario]`, en este ejemplo usaremos el nombre "usuario"
```bash
sudo adduser usuario
```

Para verificar la creación del usuario, se puede revisar la existencia de la carpeta del usuario dentro de home
```bash
ls /home/
```

Es necesario agregar al nuevo usuario al grupo "sudo"
```bash
sudo usermod -aG sudo usuario
```

Agregar el path a bash para ese usuario
```bash
sudo chsh -s /bin/bash usuario
```

### Eliminar un usuario

* Eliminar usuario
    - `sudo userdel -remove kali`
    - `sudo userdel -remove-home kali`

---
## 9. Cambiar el nombre del host

Video de apoyo: [Change Linux Username & Hostname](https://www.youtube.com/watch?v=VM64fH6tEEU)

![Change Linux Username & Hostname](https://www.youtube.com/watch?v=VM64fH6tEEU)

* Instalar systemd
    - `sudo apt-get install systemd`

* Para ver los datos del sistema
	- `hostnamectl`

* Para cambiar nombre de host editar `/etc/hostname` y escribir el nuevo nombre, en este caso será "hostname".
    - `sudo nano /etc/hostname`
    - `sudo nano /etc/hosts`
        - de "127.0.0.1 localhost"
        - a "127.0.0.1 hostname"

* Podemos **reiniciar el servicio systemd-hostnamed** para que los cambios surtan efecto
    - `sudo systemctl restart systemd-hostnamed`

* Para terminar podemos **comprobar el nombre de host** actualizado
    - `hostnamectl`

* Vamos a necesitar **reiniciar el sistema** para que los cambios se apliquen de manera correcta
    - `sudo init 6`

* Para terminar, verificaremos el nombre de host actualizado revisando el archivo `/etc/hostname`
    - `cat /etc/hostname`

  De esta forma, tendremos nuestro sistema con un bash que indica (usuario@hostname):
  ```bash
  (usuario@hostname)-[~]
  ```

---
## 10. Eliminar paquetes innecesarios
Se pueden eliminar paquetes innecesarios con el comando
```bash
sudo apt autoremove -y
```

---
## 11. Actualizar la versión completa del sistema

```bash
sudo apt-get update && sudo apt-get autoclean && sudo apt-get clean && sudo apt-get autoremove
```

```bash
sudo apt full-upgrade
```

Se puede actualizar a la versión completa de Kali Linux con el comando
```bash
sudo apt dist-upgrade
```

También se pude usar el comando
```bash
sudo apt install kali-linux-large
```

---
## 12. Instalar algún otro paquete necesario

Se pueden INSTALAR nuevos paquetes con el comando
```bash
sudo apt install [paquete]
```

Se pueden BUSCAR nuevos paquetes con el comando
```bash
sudo apt search [paquete]
```

---
## 13. Tips and Tricks: Fixing VirtualBox Kali Linux Black Screen

Obtenido desde: https://haxez.org/2022/04/tricks-and-tips-fixing-virtualbox-kali-linux-black-screen/

Posted on [April 27, 2022](https://haxez.org/2022/04/tricks-and-tips-fixing-virtualbox-kali-linux-black-screen/)by [Jonobi Musashi](https://haxez.org/author/joe_g13568c7/)

![Kali Linux Black Screen](https://haxez.org/wp-content/uploads/2022/04/kaliblack-680x300.png)

Hello friends and welcome to [HaXeZ](https://haxez.org/). So, you have run in to the [VirtualBox](https://www.virtualbox.org/) [Kali Linux](https://www.kali.org/get-kali/) Black Screen Bug? After all that effort spent downloading it and importing the appliance, you’re excited, you attempt to login in and… nothing. Just a black screen. How disappointing. Do you reinstall it? Give up? Or do you fix it and add that knowledge to your mind palace.

### The Cause Of The Black Screen

The likely cause of this problem is due to the VirtualBox Guest Additions either not being installed or not being the correct version. Either way, we need to get them installed to rule this out as a problem.

![Kali Linux Black Screen](https://haxez.org/wp-content/uploads/2022/04/kali-login-1024x554.png)

Kali Linux Black Screen

### Grab A Shell

Start the Virtual Machine and wait for it to get to the login prompt. Before logging in press your right `CTRL key` (VirtualBox host key) and your `F2 key`. If you ever need to do this natively on Linux then it will be left `CTRL, ALT` and `F2`. This sends a signal to the operating system to spawn a virtual text only terminal or a TTY. To get back to the Desktop environment you need to press left `CTRL` and `F8`.

![](https://haxez.org/wp-content/uploads/2022/04/tty2.png)

### Install The Guest Additions

Now login to the Operating System using your credentials. If it is a Kali Virtual Machine downloaded from their website then the credentials are likely either `username: kali, password: kali` or `username: root, password: toor.` Once you have logged in you need to instruct VirtualBox to mount the guest additions CD. From the menu, Devices > Insert Guest Additions CD Image.

![Kali Linux Black Screen - Insert Guest Additions CD](https://haxez.org/wp-content/uploads/2022/04/devices-insert-guest.png)

Kali Linux Black Screen – Insert Guest Additions CD

### Mount The cdrom

In order to access the content of the Guest Additions CD, you first need to mount it. You could create a mountpoint manually or you could run the following command. As you can see, the command is mounting the device ‘`cdrom`’ (denoted by the ‘`/dev/`’ directory) to ‘`/media/cdrom`’ directory.

```
sudo mount /dev/cdrom /media/cdrom
```

Now, if you list out the contents of the ‘`/media/cdrom`’ directory you should see a file called `VBoxLinuxAdditions.run`.

![Kali Linux Black Screen - Contents of cdrom](https://haxez.org/wp-content/uploads/2022/04/mount-point.png)

Kali Linux Black Screen – Contents of cdrom

### Install The Guest Additions

In order to install the Guest Additions you need to run that VBoxLinuxAdditions.run file. To do this simply run the following command.

```
sudo /media/cdrom/VBoxLinuxAdditions.run
```

You may be prompted to press enter but wait for the process to complete and then reboot your system with the reboot command.

```
sudo reboot
```

![](https://haxez.org/wp-content/uploads/2022/04/vbox-run.png)

Kali Linux Black Screen – Install Linux Guest Additions

### Login In

Once the system has been rebooted, try logging in with your username and password. Hopefully you should now be presented with your desktop and are able to go about your nefarious hacking activities.

![Kali Linux Desktop](https://haxez.org/wp-content/uploads/2022/04/kali-desktop-1024x555.png)

Kali Linux Desktop

### Other Suggestions For Black Screen

If for some reason that didn’t work then there are some other things you could try. One of the other common reasons for this error is due to the display settings. Although changing this has never resolved the problem for me, I thought it was worth a mention. In VirtualBox, head to the settings and then the display settings. Try toggling 3D acceleration and changing the amount of video memory. I’ve heard this has resolved the issue for other people but again I’ve never been able to resolve the problem this way.

![VirtualBox - DIsplay Settings](https://haxez.org/wp-content/uploads/2022/04/display-settings.png)

VirtualBox – DIsplay Settings

---
