![[header_ethical_hacking.jpg]]
# OpenVAS

---
**Tags:** #info #hacking #tool #openvas

> [!info] Volver a [[Home]] | [[Ciberseguridad]] 

---

OpenVAS (Open Vulnerability Assessment System) es un escáner de vulnerabilidades de red de código abierto que se utiliza para identificar y administrar las vulnerabilidades en sistemas informáticos y redes. Proporciona un conjunto completo de herramientas para detectar y evaluar posibles problemas de seguridad en redes y sistemas, incluyendo:

1. Escaneo de puertos: OpenVAS puede explorar los puertos de una red para identificar servicios y protocolos en ejecución, lo que ayuda a determinar posibles puntos de entrada para ataques.

2. Detección de vulnerabilidades: Utiliza una base de datos de firmas de vulnerabilidades para identificar posibles problemas de seguridad en sistemas operativos, aplicaciones y servicios en ejecución.

3. Análisis de configuración: OpenVAS puede evaluar la configuración de sistemas y aplicaciones en busca de configuraciones incorrectas o inseguras que podrían ser explotadas por atacantes.

4. Generación de informes: Ofrece capacidades de generación de informes detallados que permiten a los administradores de sistemas y seguridad analizar y priorizar las vulnerabilidades encontradas, así como realizar un seguimiento del progreso de las correcciones.

En resumen, OpenVAS es una herramienta esencial para evaluar la seguridad de una red o sistema informático al identificar posibles vulnerabilidades y ayudar a los administradores de seguridad a tomar medidas correctivas para mitigar los riesgos de seguridad.

---
## Instalar OpenVAS

```
sudo apt install openvas
```

```
sudo apt install gvm
```

Salida de terminal
```
┌──(kali㉿kali)-[~]
└─$ sudo apt install openvas
Reading package lists... Done
Building dependency tree... Done
Reading state information... Done
Note, selecting 'gvm' instead of 'openvas'
The following packages were automatically installed and are no longer required:
  libadwaita-1-0 libappstream5 libboost-dev libboost1.83-dev libopenblas-dev libopenblas-pthread-dev libopenblas0 libpython3-all-dev
  libpython3.12 libpython3.12-dev libstemmer0d libxmlb2 libxsimd-dev python3-all-dev python3-beniget python3-gast python3-pythran
  python3.12-dev xtl-dev zenity zenity-common
Use 'sudo apt autoremove' to remove them.
The following additional packages will be installed:
  greenbone-security-assistant gsad gvm-tools libmicrohttpd12
The following NEW packages will be installed:
  greenbone-security-assistant gsad gvm gvm-tools libmicrohttpd12
0 upgraded, 5 newly installed, 0 to remove and 0 not upgraded.
Need to get 5,153 kB of archives.
After this operation, 20.9 MB of additional disk space will be used.
Do you want to continue? [Y/n] Y
Get:2 http://kali.download/kali kali-rolling/main amd64 libmicrohttpd12 amd64 1.0.0-2 [152 kB]
Get:3 http://kali.download/kali kali-rolling/main amd64 gsad amd64 22.9.1-0kali1 [130 kB]
Get:1 http://elmirror.cl/kali kali-rolling/non-free amd64 greenbone-security-assistant all 22.9.1-1 [4,712 kB]
Get:4 http://http.kali.org/kali kali-rolling/main amd64 gvm all 23.11.2~kali1 [11.8 kB]
Get:5 http://kali.download/kali kali-rolling/main amd64 gvm-tools all 23.11.0-1 [147 kB]
Fetched 5,153 kB in 1s (3,949 kB/s)                                                     
Selecting previously unselected package greenbone-security-assistant.
(Reading database ... 405207 files and directories currently installed.)
Preparing to unpack .../greenbone-security-assistant_22.9.1-1_all.deb ...
Unpacking greenbone-security-assistant (22.9.1-1) ...
Selecting previously unselected package libmicrohttpd12:amd64.
Preparing to unpack .../libmicrohttpd12_1.0.0-2_amd64.deb ...
Unpacking libmicrohttpd12:amd64 (1.0.0-2) ...
Selecting previously unselected package gsad.
Preparing to unpack .../gsad_22.9.1-0kali1_amd64.deb ...
Unpacking gsad (22.9.1-0kali1) ...
Selecting previously unselected package gvm.
Preparing to unpack .../gvm_23.11.2~kali1_all.deb ...
Unpacking gvm (23.11.2~kali1) ...
Selecting previously unselected package gvm-tools.
Preparing to unpack .../gvm-tools_23.11.0-1_all.deb ...
Unpacking gvm-tools (23.11.0-1) ...
Setting up greenbone-security-assistant (22.9.1-1) ...
Setting up libmicrohttpd12:amd64 (1.0.0-2) ...
Setting up gvm-tools (23.11.0-1) ...
Setting up gsad (22.9.1-0kali1) ...
gsad.service is a disabled or a static unit, not starting it.
Setting up gvm (23.11.2~kali1) ...
Processing triggers for kali-menu (2023.4.7) ...
Processing triggers for libc-bin (2.37-12) ...
Processing triggers for man-db (2.12.0-3) ...
```

---
## Configurar OpenVAS

```
sudo gvm-setup
```

Salida de terminal
```
┌──(kali㉿kali)-[~]
└─$ sudo gvm-setup          

[>] Starting PostgreSQL service

[>] Creating GVM's certificate files

[>] Creating PostgreSQL database

[*] Creating database user

[*] Creating database

[*] Creating permissions
CREATE ROLE

[*] Applying permissions
GRANT ROLE

[*] Creating extension uuid-ossp
CREATE EXTENSION

[*] Creating extension pgcrypto
CREATE EXTENSION

[*] Creating extension pg-gvm
CREATE EXTENSION
[>] Migrating database
[>] Checking for GVM admin user
[*] Creating user admin for gvm
[*] Please note the generated admin password
[*] User created with password '238ba5a5-9XXX-436f-aa2a-35XXXXa96ce1'.
[*] Configure Feed Import Owner
[*] Define Feed Import Owner
[*] Update GVM feeds
Running as root. Switching to user '_gvm' and group '_gvm'.
Trying to acquire lock on /var/lib/openvas/feed-update.lock
Acquired lock on /var/lib/openvas/feed-update.lock
⠙ Downloading Notus files from rsync://feed.community.greenbone.net/community/vulnerability-feed/22.04/vt-data/notus/ to /var/lib/notus
⠼ Downloading NASL files from rsync://feed.community.greenbone.net/community/vulnerability-feed/22.04/vt-data/nasl/ to /var/lib/openvas/plugins⠴ Downloading NASL files from rsync://feed.community.greenbone.net/community/vulnerability-feed/22.04/vt-data/nasl/ to /var/lib/openvas/plugins⠏ Downloading NASL files from rsync://feed.community.greenbone.net/community/vulnerability-feed/22.04/vt-data/nasl/ to /var/lib/openvas/plugins
Releasing lock on /var/lib/openvas/feed-update.lock                                                                                       
                                                                                                                                          
Trying to acquire lock on /var/lib/gvm/feed-update.lock                                                                                   
Acquired lock on /var/lib/gvm/feed-update.lock                                                                                            
⠦ Downloading SCAP data from rsync://feed.community.greenbone.net/community/vulnerability-feed/22.04/scap-data/ to /var/lib/gvm/scap-data
⠧ Downloading CERT-Bund data from rsync://feed.community.greenbone.net/community/vulnerability-feed/22.04/cert-data/ to /var/lib/gvm/cert-data
⠦ Downloading gvmd data from rsync://feed.community.greenbone.net/community/data-feed/22.04/ to /var/lib/gvm/data-objects/gvmd/22.04
Releasing lock on /var/lib/gvm/feed-update.lock                                                                                           
                                                                                                                                          
[*] Checking Default scanner                                                                                                              
[*] Modifying Default Scanner                                                                                                             
Scanner modified.                                                                                                                         
                                                                                                                                          
[+] Done                                                                                                                                  
[*] Please note the password for the admin user                                                                                           
[*] User created with password '238ba5a5-9XXX-436f-aa2a-35XXXXa96ce1'.                                                                         
                                                                                                                                               
[>] You can now run gvm-check-setup to make sure everything is correctly configured  
```

![[OpenVAS_gvm-setup.png]]

---
### Checkear configuración de OpenVAS

```
sudo gvm-check-setup
```

Salida de terminal
```
┌──(kali㉿kali)-[~]
└─$ sudo gvm-check-setup    
[sudo] password for kali: 
Sorry, try again.
[sudo] password for kali: 
gvm-check-setup 23.11.0
  Test completeness and readiness of GVM-23.11.0
Step 1: Checking OpenVAS (Scanner)... 
        OK: OpenVAS Scanner is present in version 22.7.9.
        OK: Notus Scanner is present in version 22.6.2.
        OK: Server CA Certificate is present as /var/lib/gvm/CA/servercert.pem.
Checking permissions of /var/lib/openvas/gnupg/*
        OK: _gvm owns all files in /var/lib/openvas/gnupg
        OK: redis-server is present.
        OK: scanner (db_address setting) is configured properly using the redis-server socket: /var/run/redis-openvas/redis-server.sock
        OK: the mqtt_server_uri is defined in /etc/openvas/openvas.conf
        OK: _gvm owns all files in /var/lib/openvas/plugins
        OK: NVT collection in /var/lib/openvas/plugins contains 88901 NVTs.
        OK: The notus directory /var/lib/notus/products contains 456 NVTs.
Checking that the obsolete redis database has been removed
Could not connect to Redis at /var/run/redis-openvas/redis-server.sock: No such file or directory
        OK: No old Redis DB
        Starting ospd-openvas service
        Waiting for ospd-openvas service
        OK: ospd-openvas service is active.
        OK: ospd-OpenVAS is present in version 22.6.2.
Step 2: Checking GVMD Manager ... 
        OK: GVM Manager (gvmd) is present in version 23.3.0.
Step 3: Checking Certificates ... 
        OK: GVM client certificate is valid and present as /var/lib/gvm/CA/clientcert.pem.
        OK: Your GVM certificate infrastructure passed validation.
Step 4: Checking data ... 
        OK: SCAP data found in /var/lib/gvm/scap-data.
        OK: CERT data found in /var/lib/gvm/cert-data.
Step 5: Checking Postgresql DB and user ... 
        OK: Postgresql version and default port are OK.
 gvmd      | _gvm     | UTF8     | libc            | en_US.UTF-8 | en_US.UTF-8 |            |           | 
16436|pg-gvm|10|2200|f|22.6||
        OK: At least one user exists.
Step 6: Checking Greenbone Security Assistant (GSA) ... 
        OK: Greenbone Security Assistant is present in version 22.9.1~git.
Step 7: Checking if GVM services are up and running ... 
        Starting gvmd service
        Waiting for gvmd service
        OK: gvmd service is active.
        Starting gsad service
        Waiting for gsad service
        OK: gsad service is active.
Step 8: Checking few other requirements...
        OK: nmap is present.
        OK: ssh-keygen found, LSC credential generation for GNU/Linux targets is likely to work.
        OK: nsis found, LSC credential package generation for Microsoft Windows targets is likely to work.
        OK: xsltproc found.
        WARNING: Your password policy is empty.
        SUGGEST: Edit the /etc/gvm/pwpolicy.conf file to set a password policy.
Step 9: Checking greenbone-security-assistant...
        OK: greenbone-security-assistant is installed

It seems like your GVM-23.11.0 installation is OK.

                                                                                                                                               
┌──(kali㉿kali)-[~]
└─$ 
```

### Actualizar feeds de vulnerabilidades en OpenVAS

Este comando reemplaza al antiguo `gvm-feed-update`
```
sudo greenbone-feed-sync
```


Salida de terminal
```
┌──(kali㉿kali)-[~]
└─$ sudo greenbone-feed-sync  
Running as root. Switching to user '_gvm' and group '_gvm'.
Trying to acquire lock on /var/lib/openvas/feed-update.lock
Acquired lock on /var/lib/openvas/feed-update.lock
⠸ Downloading Notus files from rsync://feed.community.greenbone.net/community/vulnerability-feed/22.04/vt-data/notus/ to /var/lib/notus
⠴ Downloading NASL files from rsync://feed.community.greenbone.net/community/vulnerability-feed/22.04/vt-data/nasl/ to /var/lib/openvas/plugins
Releasing lock on /var/lib/openvas/feed-update.lock

Trying to acquire lock on /var/lib/gvm/feed-update.lock
Acquired lock on /var/lib/gvm/feed-update.lock
⠇ Downloading SCAP data from rsync://feed.community.greenbone.net/community/vulnerability-feed/22.04/scap-data/ to /var/lib/gvm/scap-data
⠇ Downloading CERT-Bund data from rsync://feed.community.greenbone.net/community/vulnerability-feed/22.04/cert-data/ to /var/lib/gvm/cert-data
⠇ Downloading gvmd data from rsync://feed.community.greenbone.net/community/data-feed/22.04/ to /var/lib/gvm/data-objects/gvmd/22.04
Releasing lock on /var/lib/gvm/feed-update.lock
```


### Iniciar servicio OpenVAS

```
sudo gvm-start
```

```
┌──(kali㉿kali)-[~]
└─$ sudo gvm-start
[>] Please wait for the GVM services to start.
[>]
[>] You might need to refresh your browser once it opens.
[>]
[>]  Web UI (Greenbone Security Assistant): https://127.0.0.1:9392

● gsad.service - Greenbone Security Assistant daemon (gsad)
     Loaded: loaded (/usr/lib/systemd/system/gsad.service; disabled; preset: disabled)
     Active: active (running) since Thu 2024-03-14 11:16:34 EDT; 13ms ago
       Docs: man:gsad(8)
             https://www.greenbone.net
   Main PID: 4893 (gsad)
      Tasks: 1 (limit: 2274)
     Memory: 1.6M (peak: 1.8M)
        CPU: 5ms
     CGroup: /system.slice/gsad.service
             └─4893 /usr/sbin/gsad --foreground --listen 127.0.0.1 --port 9392

Mar 14 11:16:34 kali systemd[1]: Starting gsad.service - Greenbone Security Assistant daemon (gsad)...
Mar 14 11:16:34 kali systemd[1]: Started gsad.service - Greenbone Security Assistant daemon (gsad).

● gvmd.service - Greenbone Vulnerability Manager daemon (gvmd)
     Loaded: loaded (/usr/lib/systemd/system/gvmd.service; disabled; preset: disabled)
     Active: active (running) since Thu 2024-03-14 11:16:29 EDT; 5s ago
       Docs: man:gvmd(8)
    Process: 4812 ExecStart=/usr/sbin/gvmd --osp-vt-update=/run/ospd/ospd.sock --listen-group=_gvm (code=exited, status=0/SUCCESS)
   Main PID: 4813 (gvmd)
      Tasks: 4 (limit: 2274)
     Memory: 267.3M (peak: 492.8M)
        CPU: 4.008s
     CGroup: /system.slice/gvmd.service
             ├─4813 "gvmd: Waiting " --osp-vt-update=/run/ospd/ospd.sock --listen-group=_gvm
             ├─4836 "gvmd: Syncing " --osp-vt-update=/run/ospd/ospd.sock --listen-group=_gvm
             ├─4859 sh -c "xml_split -s40Mb split.xml && head -n 2 split-00.xml > head.xml && echo '</cpe-list>' > tail.xml && for F in split-*.xml; do    awk 'NR>3 {print last} {last=\$0}' \$F > body.xml    && cat head.xml body.xml tail.xml > \$F;    done"                             
             └─4860 /usr/bin/perl -w /usr/bin/xml_split -s40Mb split.xml

Mar 14 11:16:29 kali systemd[1]: Starting gvmd.service - Greenbone Vulnerability Manager daemon (gvmd)...
Mar 14 11:16:29 kali systemd[1]: gvmd.service: Can't open PID file /run/gvmd/gvmd.pid (yet?) after start: No such file or directory
Mar 14 11:16:29 kali systemd[1]: Started gvmd.service - Greenbone Vulnerability Manager daemon (gvmd).

● ospd-openvas.service - OSPd Wrapper for the OpenVAS Scanner (ospd-openvas)
     Loaded: loaded (/usr/lib/systemd/system/ospd-openvas.service; disabled; preset: disabled)
     Active: active (running) since Thu 2024-03-14 11:16:22 EDT; 12s ago
       Docs: man:ospd-openvas(8)
             man:openvas(8)
    Process: 4706 ExecStart=/usr/bin/ospd-openvas --config /etc/gvm/ospd-openvas.conf --log-config /etc/gvm/ospd-logging.conf (code=exited, status=0/SUCCESS)
   Main PID: 4728 (ospd-openvas)
      Tasks: 5 (limit: 2274)
     Memory: 204.3M (peak: 230.1M)
        CPU: 2.677s
     CGroup: /system.slice/ospd-openvas.service
             ├─4728 /usr/bin/python3 /usr/bin/ospd-openvas --config /etc/gvm/ospd-openvas.conf --log-config /etc/gvm/ospd-logging.conf
             └─4732 /usr/bin/python3 /usr/bin/ospd-openvas --config /etc/gvm/ospd-openvas.conf --log-config /etc/gvm/ospd-logging.conf

Mar 14 11:16:21 kali systemd[1]: Starting ospd-openvas.service - OSPd Wrapper for the OpenVAS Scanner (ospd-openvas)...
Mar 14 11:16:22 kali systemd[1]: Started ospd-openvas.service - OSPd Wrapper for the OpenVAS Scanner (ospd-openvas).

[>] Opening Web UI (https://127.0.0.1:9392) in: 5... 4... 3... 2... 1... 
                                                                                                                                               
┌──(kali㉿kali)-[~]
└─$ 

```

### Detener servicio OpenVAS

```
sudo gvm-stop
```

---
## Configuraciones extra

### Revisar status de feed

Acceder a Administration > Feed status

![[OpenVAS_feed_status.png]]

### Agregar nueva lista de puertos

Acceder a Configuration > PortLists

![[OpenVAS_new_port_list.png]]

### Modificar Scan Config 

1. Clonar Scan Config "Full and fast"
   Ponerle de nombre "Full and fast - Clone + Port Scanner"

![[OpenVAS_scan_configs.png]]

2. Editar Scan Config clonada y activar Port Scanners

![[OpenVAS_edit_config_clone_portscanner.png]]

### Modificar greenbone-security-assistant.service

Se pueden hacer modificaciones adicionales en:
`/lib/systemd/system/greenbone-security-assistant.service`

```
┌──(kali㉿kali)-[~]
└─$ cat /lib/systemd/system/greenbone-security-assistant.service
[Unit]
Description=Greenbone Security Assistant daemon (gsad)
Documentation=man:gsad(8) https://www.greenbone.net
After=network.target gvmd.service
Wants=gvmd.service

[Service]
Type=exec
User=_gvm
Group=_gvm
RuntimeDirectory=gsad
RuntimeDirectoryMode=2775
PIDFile=/run/gsad/gsad.pid
ExecStart=/usr/sbin/gsad --foreground --listen 127.0.0.1 --port 9392
Restart=always
TimeoutStopSec=10

[Install]
WantedBy=multi-user.target
Alias=greenbone-security-assistant.service
```

En el parámetro `ExecStart` se puede modificar la IP de acceso

### Crear un nuevo objetivo


![[OpenVAS_new_target.png]]

## Fuentes y documentación

Basado en los siguientes videos:

* https://www.youtube.com/watch?v=LGh2SetiKaY
![](https://www.youtube.com/watch?v=LGh2SetiKaY)

* https://www.youtube.com/watch?v=poD-4UGF5aE
![](https://www.youtube.com/watch?v=poD-4UGF5aE)


> [!tip] Más información:
> - https://www.looklinux.com/how-to-install-openvas-on-ubuntu-debian-or-kali-linux-machine/
> - https://www.youtube.com/watch?v=k1Pfsl-dKN4
> - https://www.youtube.com/watch?v=k6EZOO61kOk
> - https://www.youtube.com/watch?v=LGh2SetiKaY
> - https://www.youtube.com/watch?v=poD-4UGF5aE

