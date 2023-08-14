![[header_kali.jpg]]
# Kali Linux Guía post-instalación - 2023

---
**Tags:** #kali #linux #hacking #tool 
**Fecha:** 05.08.2023

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

---

- Con ideas obtenidas desde: https://www.youtube.com/watch?v=sH20ovfcpGA y https://www.ceos3c.com/security/top-things-after-installing-kali-linux/?expand_article=1
- Revisar también: https://www.ceos3c.com/security/top-things-after-installing-kali-linux/?expand_article=1

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

Ejecutar el comando `passwd` con privilegios de administración para cambiar la contraseña del usuario root. Se debe ingresar 3 veces la contraseña.

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

Se puede actualizar la versión de Kali con el comando
```bash
sudo apt dist-upgrade
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


