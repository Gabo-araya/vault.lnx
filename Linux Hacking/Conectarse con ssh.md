![[header_terminal.jpg]]
# Conectarse con SSH

---
Tags: #linux #readme #tool #ssh #kali 

> [!info] Volver a [[Home]] 

---

**SSH** (o **S**ecure **SH**ell, en español: intérprete de órdenes seguro) es el nombre de un [protocolo](https://es.wikipedia.org/wiki/Protocolo_(inform%C3%A1tica) "Protocolo (informática)") y del [programa](https://es.wikipedia.org/wiki/Programa_(computaci%C3%B3n) "Programa (computación)") que lo implementa cuya principal función es el [acceso remoto](https://es.wikipedia.org/wiki/Administraci%C3%B3n_remota "Administración remota") a un servidor por medio de un canal seguro en el que toda la información está cifrada. Además de la conexión a otros dispositivos, SSH permite copiar datos de forma segura (tanto archivos sueltos como simular sesiones [FTP](https://es.wikipedia.org/wiki/File_Transfer_Protocol "File Transfer Protocol") cifradas), gestionar [claves RSA](https://es.wikipedia.org/wiki/Claves_RSA "Claves RSA") para no escribir contraseñas al conectar a los dispositivos y pasar los datos de cualquier otra aplicación por un canal seguro [tunelizado](https://es.wikipedia.org/wiki/Protocolo_tunelizado "Protocolo tunelizado") mediante SSH y también puede redirigir el tráfico del ([Sistema de Ventanas X](https://es.wikipedia.org/wiki/Sistema_de_ventanas_X "Sistema de ventanas X")) para poder ejecutar programas gráficos remotamente. El puerto TCP asignado es el 22.

Es un protocolo que facilita las comunicaciones seguras entre dos sistemas usando una arquitectura cliente/servidor y que permite a los usuarios conectarse a un host remotamente. A diferencia de otros protocolos de comunicación remota tales como FTP o Telnet, SSH encripta la sesión de conexión, haciendo imposible que alguien pueda obtener contraseñas no encriptadas. SSH está diseñado para reemplazar los métodos más viejos y menos seguros para registrarse remotamente en otro sistema a través de la shell de comando, tales como telnet o rsh. Un programa relacionado, el scp, reemplaza otros programas diseñados para copiar archivos entre hosts como rcp. Ya que estas aplicaciones antiguas no encriptan contraseñas entre el cliente y el servidor.

Video de apoyo: [OpenSSH for Absolute Beginners](https://www.youtube.com/watch?v=3FKsdbjzBcc)

![](https://www.youtube.com/watch?v=3FKsdbjzBcc)

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
## Generar claves privadas: `ssh-keygen`

El comando `ssh-keygen -t ed25519 -f ~/.ssh/host -C "Comentario sobre esta llave"` se utiliza para generar un par de claves SSH utilizando el algoritmo Ed25519. La clave privada se guarda en `~/.ssh/host`, y la clave pública se guarda en `~/.ssh/host.pub`. Además, puedes incluir un comentario que te ayudará a identificar la clave en el futuro. Estas claves se pueden utilizar para autenticarse de manera segura en servidores remotos y establecer conexiones cifradas.

```
ssh-keygen -t ed25519 -f ~/.ssh/host -C "Comentario sobre esta llave"
```

- `ssh-keygen`: Es el comando utilizado para generar pares de claves SSH (Secure Shell) en sistemas Unix y Linux. Las claves SSH se utilizan para autenticarse en servidores remotos de manera segura y también para establecer conexiones cifradas.

- `-t ed25519`: Esta opción indica el tipo de algoritmo de clave a utilizar. En este caso, se está utilizando el algoritmo de clave Ed25519, que es una opción moderna y segura para generar pares de claves SSH. Ed25519 es más eficiente en términos de rendimiento y seguridad en comparación con algunos de los algoritmos más antiguos.

- `-f ~/.ssh/host`: Con esta opción, estás especificando la ruta y el nombre del archivo donde se guardarán las claves generadas. `~/.ssh/host` se refiere a la carpeta `.ssh` en el directorio de inicio del usuario, y el nombre del archivo será `host`. Esto generará dos archivos: `host` (clave privada) y `host.pub` (clave pública).

- `-C "Comentario sobre esta llave"`: Aquí, puedes proporcionar un comentario que se agregará a la clave pública. Este comentario es útil para identificar la clave en caso de que necesites gestionar múltiples claves en varios servidores. El comentario es opcional pero puede ser útil para recordar el propósito de la clave.

---
## Copiar clave pública al servidor: `ssh-copy-id`

El comando `ssh-copy-id -i .ssh/host.pub gabo@192.168.100.15` se utiliza para copiar una clave pública de SSH al servidor remoto con la dirección IP `192.168.100.15`, bajo el usuario `gabo`. Esto permitirá la autenticación sin contraseña utilizando la clave privada correspondiente en el cliente para acceder al servidor de manera segura. El archivo de clave pública `.ssh/host.pub` será copiado al directorio adecuado en el servidor remoto para establecer la autenticación basada en clave.

```
ssh-copy-id -i .ssh/host.pub gabo@192.168.100.15
```

Por supuesto, puedo explicarte en detalle cada componente y opción del comando `ssh-copy-id` que has proporcionado:

- `ssh-copy-id`: Es un comando que se utiliza para copiar la clave pública de SSH a un servidor remoto. Esto permite que el usuario pueda autenticarse en el servidor utilizando su clave privada correspondiente, en lugar de ingresar una contraseña cada vez.

- `-i .ssh/host.pub`: Esta opción especifica el archivo de clave pública que se copiará en el servidor remoto. `-i` se utiliza para indicar el archivo de clave pública a utilizar. En este caso, `.ssh/host.pub` es la ruta del archivo de clave pública que será copiado. El archivo `host.pub` contiene la clave pública del usuario que está realizando el proceso.

- `gabo@192.168.100.15`: Esto indica el nombre de usuario (`gabo`) y la dirección IP (`192.168.100.15`) del servidor remoto al que se copiará la clave pública. El usuario `gabo` debe tener permisos para acceder al servidor remoto y colocar la clave pública en el directorio adecuado para la autenticación.

---
## Desactivar autenticación a través de password en un servidor remoto

Ejecutamos `man sshd_config` para que muestre la ubicación del archivo. 
```
man sshd_config
```

En mi caso es `/etc/ssh/sshd_config`. En este archivo van todas las configuraciones de servidor de este protocolo. Se recomienda hacer una copia de seguridad antes. 
```
/etc/ssh/sshd_config
```


Para desactivar la autenticación a través de contraseñas (password) y permitir solo la autenticación basada en claves públicas en un servidor remoto a través de SSH, sigue estos pasos:

1. **Accede al Servidor Remoto**: Inicia sesión en el servidor remoto utilizando una conexión SSH con tu cuenta de usuario.

2. **Edita la Configuración SSH**: Abre el archivo de configuración SSH en el servidor. Dependiendo de la distribución de Linux o el sistema operativo que estés usando, el archivo de configuración puede encontrarse en diferentes ubicaciones. Los comandos para acceder al archivo de configuración suelen ser:

   Para sistemas basados en Debian/Ubuntu:
   ```bash
   sudo nano /etc/ssh/sshd_config
   ```

   Para sistemas basados en Red Hat/CentOS:
   ```bash
   sudo nano /etc/ssh/sshd_config
   ```

3. **Encuentra la Opción PasswordAuthentication**: Busca la línea que contiene la opción `PasswordAuthentication`. Por defecto, esta línea suele estar establecida en `yes`, lo que permite la autenticación mediante contraseña.

4. **Cambia el Valor de PasswordAuthentication**: Cambia el valor de `PasswordAuthentication` de `yes` a `no`. Esto desactivará la autenticación a través de contraseña en SSH.

5. **Guarda los Cambios y Cierra el Editor**: En el editor de texto, guarda los cambios que has realizado en el archivo de configuración SSH y cierra el editor.

6. **Reinicia el Servicio SSH**: Después de cambiar la configuración, reinicia el servicio SSH para que los cambios surtan efecto:

   Para sistemas basados en Debian/Ubuntu:
   ```bash
   sudo service ssh restart
   ```

   Para sistemas basados en Red Hat/CentOS:
   ```bash
   sudo systemctl restart sshd
   ```

Una vez que hayas realizado estos pasos, la autenticación a través de contraseñas estará desactivada en el servidor remoto y solo podrás acceder mediante la autenticación basada en claves públicas. Asegúrate de tener acceso a tu clave pública en el servidor antes de realizar este cambio para no quedarte bloqueado accidentalmente.

---
## Recomendaciones de seguridad

Aumentar la seguridad de SSH en un servidor remoto es una medida importante para proteger tus sistemas y datos. Aquí hay algunas configuraciones recomendadas para mejorar la seguridad de SSH:

1. **Utilizar Autenticación Basada en Claves Públicas**: En lugar de depender únicamente de contraseñas, configura la autenticación basada en claves públicas. Esto reduce el riesgo de ataques de fuerza bruta y evita que las contraseñas viajen por la red.

2. **Desactivar la Autenticación por Contraseña**: Como mencionamos anteriormente, desactivar la autenticación a través de contraseñas y permitir solo la autenticación por clave pública es una medida efectiva para prevenir ataques de fuerza bruta.

3. **Cambiar el Puerto SSH**: Cambiar el puerto predeterminado (22) en el que SSH escucha puede dificultar a los atacantes encontrar tu servidor. Sin embargo, esto no es una medida completa de seguridad, ya que los escaneos de puertos pueden revelar el nuevo puerto.

4. **Configurar Acceso Limitado**: Utiliza la opción `AllowUsers` o `AllowGroups` en el archivo de configuración SSH para permitir el acceso solo a usuarios o grupos específicos. Esto reduce la superficie de ataque y evita que usuarios no autorizados intenten acceder.

5. **Configurar Acceso Desde Direcciones IP Específicas**: Utiliza la opción `Match Address` en el archivo de configuración SSH para permitir el acceso solo desde direcciones IP confiables. Esto puede ser especialmente útil si solo necesitas acceder desde ubicaciones específicas.

6. **Usar Claves SSH con Contraseña**: Si bien la autenticación basada en claves es segura, puedes aumentar aún más la seguridad agregando contraseñas a tus claves privadas. Esto proporciona una capa adicional de protección en caso de que alguien obtenga acceso a tu clave privada.

7. **Actualizar Regularmente**: Mantén el software SSH actualizado con las últimas versiones y parches de seguridad. Esto asegura que las vulnerabilidades conocidas estén corregidas.

8. **Monitorización y Registros**: Habilita la monitorización y los registros de eventos de SSH. Esto te permitirá rastrear y auditar las actividades de acceso, lo que puede ser útil para la detección temprana de posibles amenazas.

9. **Desactivar Protocolos Obsoletos**: Desactiva protocolos y cifrados obsoletos o inseguros en la configuración SSH para asegurarte de que solo se utilicen protocolos seguros.

10. **Firewall**: Configura un firewall para restringir el acceso a servicios innecesarios y permitir solo tráfico esencial.

11. **Limitar Sesiones Concurrentes**: Limita el número de sesiones SSH concurrentes para prevenir posibles ataques de denegación de servicio.

12. **Restringe Sudo y Permisos de Usuarios**: Limita los permisos de usuario y utiliza el comando `sudo` de manera controlada. Evita utilizar cuentas de superusuario para tareas normales.

Recuerda que la seguridad cibernética es un proceso constante. Mantén tus sistemas y configuraciones actualizadas, realiza auditorías regulares y mantén una mentalidad de seguridad en todo momento.

---
## Copiar archivos a través de SSH con SCP

SCP hace uso de SSH (Secure Shell) para hacer copias seguras y encriptadas.
https://geekytheory.com/copiar-archivos-a-traves-de-ssh-con-scp/


Como administrador de un servidor Linux, hay momentos en los que tengo que copiar a dicho servidor un archivo que tengo en mi ordenador. Hay varias opciones para hacer esto. La primera es abrir un cliente FTP como puede ser Filezilla. La segunda es copiar los archivos por consola haciendo uso del comando SCP (Secure Copy). No me olvido de los usuarios de Mac, que pueden usar SCP igual que en Linux y, tampoco de los de Windows, que mediante WinSCP pueden hacer lo mismo.

SCP hace uso de SSH (Secure Shell) para hacer copias seguras y encriptadas. Personalmente, me gusta mucho la consola cuando tengo claro lo que quiero hacer. Por ejemplo, para subir una carpeta al servidor de Geeky, con un comando me basta y no necesito abrir Filezilla.

### Uso de SCP

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



