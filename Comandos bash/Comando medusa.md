![[header_ethical_hacking.jpg]]
# Comando `medusa`

---
**Tags:** #info #hacking #tool #kali #linux #bash

> [!info] Volver a [[Home]] | [[Ciberseguridad]] 

>[!tip] **Revisar la guía [[Kali Linux post-instalacion]]**

---

## Descripción

El comando `medusa` es una herramienta de fuerza bruta que se utiliza para realizar ataques de autenticación automatizados en sistemas y servicios. Su objetivo principal es probar diferentes combinaciones de usuarios y contraseñas con el fin de encontrar credenciales válidas y ganar acceso no autorizado a sistemas protegidos. `medusa` es especialmente útil en situaciones de pruebas de penetración y evaluaciones de seguridad para determinar la resistencia de las contraseñas y las medidas de autenticación de un sistema.

Es importante mencionar que el uso de `medusa` y otras herramientas de fuerza bruta debe ser autorizado y realizado en entornos controlados y éticos, como pruebas de penetración legítimas. Utilizar estas herramientas de manera no ética o en sistemas a los que no tienes permiso puede ser ilegal y dañino. Siempre asegúrate de obtener permiso antes de realizar cualquier prueba de seguridad.

---
## Casos de Uso y Ejemplos

1. **Ataques de Fuerza Bruta en Servicios SSH:**
   El uso común de `medusa` es para realizar ataques de fuerza bruta en servicios SSH. Por ejemplo, para probar combinaciones de usuarios y contraseñas en un servidor SSH:

   ```bash
   medusa -H target_ip -U users.txt -P passwords.txt -M ssh
   ```

   Donde `target_ip` es la dirección IP del servidor SSH, `users.txt` es un archivo con posibles nombres de usuario y `passwords.txt` es un archivo con posibles contraseñas.

2. **Ataques de Fuerza Bruta en Servicios FTP:**
   Para probar credenciales en un servicio FTP:

   ```bash
   medusa -H target_ip -U users.txt -P passwords.txt -M ftp
   ```

3. **Ataques de Fuerza Bruta en Servicios HTTP:**
   Puedes usar `medusa` para probar credenciales en aplicaciones web. Por ejemplo:

   ```bash
   medusa -H target_ip -U users.txt -P passwords.txt -M http -m DIR:/admin
   ```

   Donde `-m DIR:/admin` se utiliza para especificar la URL de inicio.

4. **Ataques de Fuerza Bruta en Servicios RDP:**
   Para realizar ataques en el Protocolo de Escritorio Remoto (RDP):

   ```bash
   medusa -H target_ip -U users.txt -P passwords.txt -M rdp
   ```

5. **Ataques en Otros Protocolos:**
   `medusa` admite una variedad de protocolos y servicios, como MySQL, PostgreSQL, SMB, VNC, entre otros. Puedes consultar la documentación para ver la lista completa.

6. **Personalización y Configuración:**
   `medusa` permite personalizar parámetros como el tiempo de espera, el número de intentos, etc., para ajustarse a tus necesidades específicas.

---
## Otros ejemplos

Aquí tienes algunos ejemplos adicionales de cómo utilizar el comando `medusa` en diferentes situaciones:

1. **Ataque de Fuerza Bruta en Servicios MySQL:**
   Para probar credenciales en un servidor MySQL:

   ```bash
   medusa -H target_ip -U users.txt -P passwords.txt -M mysql
   ```

2. **Ataque de Fuerza Bruta en Servicios SNMP:**
   Para realizar un ataque en el protocolo SNMP (Simple Network Management Protocol):

   ```bash
   medusa -H target_ip -U users.txt -P passwords.txt -M snmp
   ```

3. **Ataque de Fuerza Bruta en Servicios Telnet:**
   Para probar credenciales en un servicio Telnet:

   ```bash
   medusa -H target_ip -U users.txt -P passwords.txt -M telnet
   ```

4. **Ataque de Fuerza Bruta en Servicios SMB:**
   Para realizar un ataque en el protocolo SMB (Server Message Block):

   ```bash
   medusa -H target_ip -U users.txt -P passwords.txt -M smbnt
   ```

5. **Personalización de Parámetros:**
   Puedes personalizar varios parámetros según tus necesidades, como el número de hilos (threads), el tiempo de espera y más. Por ejemplo:

   ```bash
   medusa -H target_ip -U users.txt -P passwords.txt -M http -T 5 -t 10
   ```

   Donde `-T 5` establece 5 hilos de ataque y `-t 10` establece un tiempo de espera de 10 segundos entre intentos.

6. **Guardar Resultados en un Archivo de Salida:**
   Puedes guardar los resultados de los intentos de autenticación en un archivo. Por ejemplo:

   ```bash
   medusa -H target_ip -U users.txt -P passwords.txt -M ssh -O output.txt
   ```

Estos son solo algunos ejemplos de cómo puedes utilizar `medusa` para realizar ataques de fuerza bruta en diferentes servicios y protocolos. Recuerda siempre realizar estas pruebas de manera ética y con el permiso adecuado para evitar cualquier actividad ilegal o no autorizada.

---
## Ejemplos de uso contra DVWA

Aquí tienes algunos ejemplos adicionales de cómo utilizar `medusa` en combinación con el entorno de práctica DVWA (Damn Vulnerable Web Application) y Metasploitable 2:

**Ataque de Fuerza Bruta en DVWA:**
Supongamos que deseas realizar un ataque de fuerza bruta en la página de inicio de sesión de DVWA utilizando `medusa`. Asegúrate de tener el entorno DVWA configurado y ejecutándose.

```bash
medusa -h http://localhost/dvwa/login.php -u admin -P passwords.txt -M http -m FORM -T 5
```

En este ejemplo, estamos utilizando `medusa` para atacar la página de inicio de sesión de DVWA. Estamos probando el usuario "admin" y usando una lista de contraseñas en el archivo `passwords.txt`. También estamos especificando que estamos tratando con un formulario web (`-m FORM`) y establecemos 5 hilos de ataque (`-T 5`).

**Ataque de Fuerza Bruta en Metasploitable 2 SSH:**
Supongamos que deseas realizar un ataque de fuerza bruta en el servicio SSH en la máquina virtual Metasploitable 2.

```bash
medusa -H 192.168.1.100 -U users.txt -P passwords.txt -M ssh
```

En este caso, estamos intentando probar combinaciones de usuarios y contraseñas en el servicio SSH de Metasploitable 2.

**Ataque de Fuerza Bruta en Metasploitable 2 FTP:**
También puedes realizar ataques de fuerza bruta en otros servicios en Metasploitable 2, como FTP.

```bash
medusa -H 192.168.1.100 -U users.txt -P passwords.txt -M ftp
```

Estos ejemplos muestran cómo utilizar `medusa` para realizar ataques de fuerza bruta en entornos de práctica como DVWA y Metasploitable 2. Sin embargo, es importante destacar que estas actividades deben realizarse en entornos controlados y con el permiso adecuado, ya que realizar pruebas sin autorización en sistemas en producción es ilegal y no ético.

---
