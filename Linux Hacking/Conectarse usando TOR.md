![[header_tux.jpg]]
# Conectarse usando la red TOR

---
**Tags:** #info #hacking #tool #tor #kali 

> [!info] Volver a [[Home]] | [[Ciberseguridad]] 

>[!tip] Relacionado: [[Navegar de forma anónima]]

>[!abstract] Temario
> * [[#1. Pasos previos]]
> 	* [[#1.1 Actualizar el sistema operativo]]
> 	* [[#1.2 Instalar Tor Browser (OPCIONAL)]]
> 	* [[#1.3 Instalar otros paquetes que pueden ser necesarios más adelante]]
> * [[#3. Revisar la configuración de `proxychains`]]
> * [[#4. Trabajar con el servicio `tor.service`]]
> * [[#5. Navegar usando la red `tor`]]

---

Se asume que el usuario está usando un sistema linux basado en Debian con gestor de paquetes apt o aptitude. Kali Linux ya tiene instalado este servicio.

>[!tip] **Revisar la guía [[Kali Linux post-instalacion]]**

---
## 1. Pasos previos
### 1.1 Actualizar el sistema operativo

```bash
sudo apt update && sudo apt upgrade -y
```
### 1.2 Instalar Tor Browser (OPCIONAL)

El navegador del proyecto tor se puede instalar con el siguiente comando:
```bash
sudo apt install torbrowser-launcher
```

En las pruebas que realicé en Linux Mint TorBrowser-Launcher no se instaló correctamente
 - Pero es mejor instalarlo desde el sitio web oficial: https://www.torproject.org/download/
 - Video de instrucciones acá: https://www.youtube.com/watch?v=NN9fQwiomAU

### 1.3 Instalar otros paquetes que pueden ser necesarios más adelante

El siguiente comando instala los paquetes:

- `wget`: Wget es un programa útil, que se ejecuta a través de la línea de comandos de tu computadora y sirve para recuperar material en línea. Puede ser de utilidad en las siguientes situaciones: Recuperar o duplicar (crear una copia exacta) de un sitio web completo.

- `curl`: Los comandos de cURL están diseñados para funcionar como una forma de verificar la conectividad a las URL y como una gran herramienta para transferir datos.

- `git`: Git es un sistema de control de versiones distribuido, lo que significa que un clon local del proyecto es un repositorio de control de versiones completo. Estos repositorios locales plenamente funcionales permiten trabajar sin conexión o de forma remota con facilidad.

- `nano`: Editor de textos en línea de comandos o GUI.

- `gedit`: Editor de textos en línea de comandos o GUI.

  ```bash
sudo apt install wget curl git nano gedit
```

---

## 2. Instalar el servicio `tor` y `proxychains`

El parámetro `-y` es para que no solicite confirmación
```bash
sudo apt install tor proxychains -y
```

---
## 3. Revisar la configuración de `proxychains`

Ingresar al directorio `/etc/` con `cd /etc/` y listar los archivos con `ls` para identificar el archivo proxychains. En algunas distribuciones de linux el archivo de configuración de proxychains puede aparecer como `proxychains.conf` o `proxychains4.conf`
```bash
cd /etc/ && ls
```

Revisar la información presente en el archivo de configuración de proxychains.
```bash
cat /etc/proxychains.conf
cat /etc/proxychains4.conf
```

Si se requiere editar el archivo, se puede utilizar el editor `nano` o `gedit`
```bash
sudo nano /etc/proxychains.conf
sudo gedit /etc/proxychains.conf
```

Agregar las siguientes líneas al final del archivo
```bash
socks4 127.0.0.1 9050
socks5 127.0.0.1 9050
```

---
## 4. Trabajar con el servicio `tor.service`

> [!tip] Revisar la guía de [[Comando systemctl]]

Primero se debe **habilitar** el servicio `tor`
```bash
sudo systemctl enable tor.service
```

Para **INICIAR** EL SERVICIO tor se debe ejecutar el siguiente comando
```bash
sudo systemctl start tor.service
```

Para **DETENER** EL SERVICIO tor se debe ejecutar el siguiente comando
```bash
sudo systemctl stop tor.service
```

Para **REVISAR STATUS** DEL SERVICIO tor se debe ejecutar el siguiente comando
```bash
sudo systemctl status tor.service
```

---
## 5. Navegar usando la red `tor`

A DNS leak test provides users with information about their VPN connection, including the active IP address and location. This can be compared against their real IP address and location for a DNS leak check.

Este comando ejecuta firefox conectado a través de proxychains y carga el sitio `dnsleaktest.com`. DNS Leak Test muestra la geolocalización de tu IP

```bash
proxychains firefox dnsleaktest.com
```

Este comando ejecuta firefox conectado a través de proxychains y carga el sitio `ipchicken.com`. IPChicken te muestra tu IP.
```bash
proxychains firefox ipchicken.com
```

---

