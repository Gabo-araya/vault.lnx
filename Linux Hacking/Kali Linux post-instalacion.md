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
## Descripción

Kali Linux es una distribución de Linux basada en Debian diseñada específicamente para la ciberseguridad y las pruebas de penetración. Se desarrolló como una sucesora de BackTrack Linux y se ha convertido en una de las distribuciones más populares y ampliamente utilizadas en el campo de la seguridad informática. 

Kali Linux es una distribución de Linux especializada en ciberseguridad que proporciona una plataforma robusta y versátil para profesionales de la seguridad informática y entusiastas que desean realizar pruebas, análisis y auditorías de seguridad. Su amplia gama de herramientas y su comunidad activa la convierten en una elección popular en el campo de la ciberseguridad.

1. **Herramientas de Ciberseguridad**: Kali Linux se suministra con una amplia gama de herramientas de ciberseguridad, incluidas herramientas de pruebas de penetración, análisis forense, auditoría de seguridad, análisis de vulnerabilidades y más. Estas herramientas están preinstaladas y configuradas para su uso inmediato.

2. **Entorno de Pruebas Éticas**: Kali Linux se utiliza principalmente como un entorno de pruebas éticas. Esto significa que está destinado a ser utilizado por profesionales de la seguridad y auditores para evaluar y mejorar la seguridad de sistemas y redes de manera legal y ética.

3. **Entorno Controlado**: Se instala típicamente en una máquina virtual o en un dispositivo dedicado para crear un entorno controlado y aislado. Esto permite a los profesionales de seguridad realizar pruebas sin riesgo de dañar sistemas en producción.

4. **Actualizaciones Constantes**: Kali Linux se mantiene y actualiza constantemente para incorporar nuevas herramientas y actualizaciones de seguridad. Esto asegura que los profesionales siempre tengan acceso a las últimas técnicas y herramientas de seguridad.

5. **Documentación y Comunidad**: Kali Linux cuenta con una comunidad activa de usuarios y desarrolladores. Ofrece una amplia documentación, foros de soporte y recursos en línea que ayudan a los usuarios a aprender y resolver problemas relacionados con la seguridad informática.

6. **Legalidad y Ética**: Es importante destacar que Kali Linux debe utilizarse de manera legal y ética. Los profesionales de seguridad deben obtener permisos adecuados antes de realizar pruebas en sistemas que no sean de su propiedad y deben seguir las leyes y regulaciones locales y globales de ciberseguridad.

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

Este comando agrega al usuario `usuario` al grupo `sudo`. La opción `-aG` se utiliza para agregar (`-a`) el usuario a un grupo suplementario (`-G`). Es importante usar `-a` para asegurar que el usuario no sea eliminado de otros grupos en los que pueda estar. Después de ejecutar este comando, el usuario `usuario` tendrá permisos de superusuario (sudo), lo que le permitirá ejecutar comandos como root. Es posible que necesites reiniciar la sesión del usuario o cerrar y volver a abrir la terminal para que los cambios surtan efecto.

Agregar el path a bash para ese usuario
```bash
sudo chsh -s /bin/bash usuario
```

El comando `chsh` se utiliza para cambiar el shell de inicio de sesión del usuario. La opción `-s` se utiliza para especificar el shell, en este caso, `/bin/bash`. Este comando cambia el shell de inicio de sesión del usuario `usuario` a Bash. Bash es un shell popular que proporciona una interfaz de línea de comandos para interactuar con el sistema operativo. Este cambio es útil si deseas que el usuario utilice Bash como su shell predeterminado.

### Asignar grupos a un usuario
 
Para saber los grupos que tiene un usuario: 
```bash
groups {user}
```
 
Asignar grupos de usuarios en Kali:
```bash
sudo adduser user kali; sudo adduser user adm; sudo adduser user dialout; sudo adduser user cdrom; sudo adduser user floppy; sudo adduser user sudo; sudo adduser user audio; sudo adduser user dip; sudo adduser user video; sudo adduser user plugdev; sudo adduser user users; sudo adduser user netdev; sudo adduser user bluetooth; sudo adduser user scanner; sudo adduser user wireshark; sudo adduser user kaboxer; sudo adduser user vboxsf;
```

### Eliminar un usuario

1. `sudo userdel -remove kali`
   Este comando elimina el usuario `kali` del sistema. La opción `-remove` instruye al comando `userdel` para eliminar el grupo principal del usuario si no hay otros usuarios que sean miembros de este grupo. Esto es útil para mantener limpio el sistema de grupos innecesarios. Además, este comando no elimina el directorio home ni el buzón de correo del usuario. Si necesitas que también se elimine el directorio home, deberías usar la opción `-r` o `-remove-home`.

2. `sudo userdel -remove-home kali`
   Este comando también elimina el usuario `kali`, pero además de la eliminación del usuario, también elimina su directorio home. Esto es útil cuando quieres asegurarte de que todos los archivos asociados con el usuario se eliminen completamente del sistema. Al igual que con la opción `-remove`, este comando no elimina el buzón de correo del usuario. Si necesitas que también se elimine el buzón de correo, deberías usar la opción `-r` .

Es importante mencionar que si el usuario que deseas eliminar todavía está conectado o si hay procesos en ejecución que pertenecen a este usuario, el comando `userdel` no permitirá eliminar el usuario. En esta situación, se recomienda cerrar sesión del usuario y matar todos los procesos en ejecución con el comando `killall`:

`sudo killall -u kali`

Otra opción es usar la opción `-f` (force) que le dice a `userdel` que elimine forzosamente la cuenta de usuario, incluso si el usuario todavía está conectado o si hay procesos en ejecución que pertenecen al usuario:

`sudo userdel -f kali`

---
## 9. Cambiar el nombre del host

Video de apoyo: [Change Linux Username & Hostname](https://www.youtube.com/watch?v=VM64fH6tEEU)

![Change Linux Username & Hostname](https://www.youtube.com/watch?v=VM64fH6tEEU)

* Instalar systemd
    - `sudo apt-get install systemd`

* Para ver los datos del sistema
	- `hostnamectl`

Este comando se utiliza para mostrar o configurar el nombre del sistema, el estado de la red, y otros detalles relacionados con el sistema operativo. `hostnamectl` es parte del paquete `systemd`, el sistema de inicio y el administrador de servicios en sistemas Linux modernos. Este comando es útil para verificar la configuración del sistema, como el nombre de host, el estado de la red, y otros detalles del sistema. Sin opciones, `hostnamectl` simplemente muestra la información actual del sistema. Puedes utilizar opciones como `hostnamectl set-hostname` para cambiar el nombre del sistema o `hostnamectl set-static-hostname` para establecer un nombre de host estático.

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
