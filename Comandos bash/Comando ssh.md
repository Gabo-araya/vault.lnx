![[header_terminal.jpg]]
# Conectarse con SSH

---
Tags: #linux #readme #tool #ssh #kali 

> [!info] Volver a [[Home]] 

>[!tip] **Revisar la guía [[Kali Linux post-instalacion]]**

---

**SSH** (o **S**ecure **SH**ell, en español: intérprete de órdenes seguro) es el nombre de un [protocolo](https://es.wikipedia.org/wiki/Protocolo_(inform%C3%A1tica) "Protocolo (informática)") y del [programa](https://es.wikipedia.org/wiki/Programa_(computaci%C3%B3n) "Programa (computación)") que lo implementa cuya principal función es el [acceso remoto](https://es.wikipedia.org/wiki/Administraci%C3%B3n_remota "Administración remota") a un servidor por medio de un canal seguro en el que toda la información está cifrada. Además de la conexión a otros dispositivos, SSH permite copiar datos de forma segura (tanto archivos sueltos como simular sesiones [FTP](https://es.wikipedia.org/wiki/File_Transfer_Protocol "File Transfer Protocol") cifradas), gestionar [claves RSA](https://es.wikipedia.org/wiki/Claves_RSA "Claves RSA") para no escribir contraseñas al conectar a los dispositivos y pasar los datos de cualquier otra aplicación por un canal seguro [tunelizado](https://es.wikipedia.org/wiki/Protocolo_tunelizado "Protocolo tunelizado") mediante SSH y también puede redirigir el tráfico del ([Sistema de Ventanas X](https://es.wikipedia.org/wiki/Sistema_de_ventanas_X "Sistema de ventanas X")) para poder ejecutar programas gráficos remotamente. El puerto TCP asignado es el 22.

Es un protocolo que facilita las comunicaciones seguras entre dos sistemas usando una arquitectura cliente/servidor y que permite a los usuarios conectarse a un host remotamente. A diferencia de otros protocolos de comunicación remota tales como FTP o Telnet, SSH encripta la sesión de conexión, haciendo imposible que alguien pueda obtener contraseñas no encriptadas. SSH está diseñado para reemplazar los métodos más viejos y menos seguros para registrarse remotamente en otro sistema a través de la shell de comando, tales como telnet o rsh. Un programa relacionado, el scp, reemplaza otros programas diseñados para copiar archivos entre hosts como rcp. Ya que estas aplicaciones antiguas no encriptan contraseñas entre el cliente y el servidor.

---

## SSH Local

1. Instalar SSH server

```
sudo apt-get install openssh-server
```

2. Instalar SSH client

```
sudo apt-get install openssh-client
```

3. Comprobar status de ssh

```
sudo systemctl status ssh
```

4. Autorizar acceso a ssh
_ufw: Uncomplicated FireWall_

```
sudo ufw allow ssh
```

5. Conocer mi direccion ip

>[!tip] **Revisar la guía [[Conocer la IP del dispositivo]]**

```
ip a
```

* 192.168.100.15
* 192.168.100.3

6. Conectarse a un equipo

```
ssh gabo@192.168.100.15
```

---

###  Configuraciones

Ejecutamos `man sshd_config` para que muestre la ubicación del archivo. 
```
man sshd_config
```

En mi caso es `/etc/ssh/sshd_config`. En este archivo van todas las configuraciones de servidor de este protocolo. Se recomienda hacer una copia de seguridad antes. 
```
/etc/ssh/sshd_config
```

---
## Copiar archivos a través de SSH con SCP

SCP hace uso de SSH (Secure Shell) para hacer copias seguras y encriptadas.
https://geekytheory.com/copiar-archivos-a-traves-de-ssh-con-scp/


Como administrador de un servidor Linux, hay momentos en los que tengo que copiar a dicho servidor un archivo que tengo en mi ordenador. Hay varias opciones para hacer esto. La primera es abrir un cliente FTP como puede ser Filezilla. La segunda es copiar los archivos por consola haciendo uso del comando SCP (Secure Copy). No me olvido de los usuarios de Mac, que pueden usar SCP igual que en Linux y, tampoco de los de Windows, que mediante WinSCP pueden hacer lo mismo.

SCP hace uso de SSH (Secure Shell) para hacer copias seguras y encriptadas. Personalmente, me gusta mucho la consola cuando tengo claro lo que quiero hacer. Por ejemplo, para subir una carpeta al servidor de Geeky, con un comando me basta y no necesito abrir Filezilla.

## Uso de SCP

Tenemos que tener claros los parámetros de los que consta la instrucción:

  - **Usuario:** el nombre de usuario que utilicemos en el servidor.
  - **Host:** dirección IP o dominio del servidor remoto.
  - **Archivo origen:** ruta del archivo que queremos copiar.
  - **Directorio origen:** ruta del directorio completo que queremos copiar.
  - **Directorio destino:** ruta donde queremos copiar el archivo.

1. COPIAR ARCHIVOS DE LOCAL A SERVIDOR

Si queremos subir el archivo archivo.txt de nuestro ordenador a la carpeta /home/usuario del servidor, hacemos lo siguiente:

  - `$ scp archivo.txt usuario@dominio.com:/home/usuario`

2. COPIAR ARCHIVOS DE SERVIDOR A LOCAL

Si queremos copiar el fichero archivo.txt del servidor a nuestro ordenador en la carpeta Documentos, hacemos lo siguiente:

  - `$ scp usuario@dominio.com:/home/usuario/archivo.txt Documentos`

3. COPIAR ARCHIVOS DE SERVIDOR A SERVIDOR

Para copiar un archivo de un servidor a otro, hacemos lo siguiente:

  - `$ scp usuario1@dominio1.com:/home/usuario1/archivo.txt usuario2@dominio2.com:/home/usuario2/`

4. COPIAR UN DIRECTORIO COMPLETO

Para copiar un directorio completo de mi ordenador al servidor, por ejemplo `/home/mario/carpeta` a `/home/usuario`, añadimos un `-r` en el comando:

  - `$ scp -r /home/mario/carpeta usuario@dominio.com:/home/usuario`

5. LIMITAR EL ANCHO DE BANDA

Para no sobrecargar demasiado el servidor, es posible limitar el ancho de banda de la transferencia. Con el parámetro -l podemos indicar la velocidad (en Kbps).

  - `$ scp -l limite usuario@dominio.com:/home/usuario/archivo.txt Documentos`



