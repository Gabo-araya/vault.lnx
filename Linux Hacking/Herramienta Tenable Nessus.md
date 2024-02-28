![[header_ethical_hacking.jpg]]
# Tenable `Nessus`

---
**Tags:** #info #hacking #tool #kali #linux 

> [!info] Volver a [[Home]] | [[Ciberseguridad]] 

---
## Descripción de Nessus

Tenable Nessus es una herramienta de escaneo de vulnerabilidades ampliamente utilizada en el ámbito de la ciberseguridad. Su función principal es identificar y evaluar vulnerabilidades en sistemas informáticos, redes y aplicaciones.

Aquí hay una explicación básica sobre el uso de Tenable Nessus:

**Instalación y configuración**
Antes de utilizar Nessus, es necesario instalarlo en un sistema compatible. Una vez instalado, se realiza una configuración inicial que incluye la definición de políticas de escaneo y la configuración de credenciales de acceso a los sistemas que se van a escanear.

**Creación de políticas de escaneo**
Nessus permite crear políticas de escaneo personalizadas para adaptarse a las necesidades específicas de seguridad de una organización. Estas políticas determinan qué tipos de pruebas y análisis se llevarán a cabo durante el escaneo.

**Ejecución de escaneos**
Una vez configurada la política de escaneo, se puede proceder a ejecutar el escaneo en los sistemas o redes de interés. Durante el escaneo, Nessus identifica activos, servicios y posibles vulnerabilidades en los sistemas analizados.

**Análisis de resultados**
Una vez completado el escaneo, Nessus genera un informe detallado que enumera las vulnerabilidades encontradas, su gravedad y recomendaciones para mitigar los riesgos identificados. Estos informes son fundamentales para comprender la postura de seguridad de una organización y priorizar acciones correctivas.

**Gestión de vulnerabilidades**
Nessus también ofrece funcionalidades para la gestión de vulnerabilidades, lo que incluye la capacidad de programar escaneos periódicos, integración con otros sistemas de gestión de seguridad, seguimiento de la evolución de las vulnerabilidades a lo largo del tiempo, entre otras características.

## Descarga

Para descargar Nessus, dirigirse a la página de descargas. Asegúrate de seleccionar la versión adecuada para tu sistema operativo y arquitectura. Para este ejemplo, escogeremos la opción "Linux - Ubuntu - amd64".

El vínculo directo es este: https://www.tenable.com/downloads/nessus?loginAttempted=true

![[Selección_1379.png]]

En mi caso, voy a utilizar la opción de descarga usando curl. Primero, ingreso al directorio donde quiero realizar la descarga y luego ejecuto el siguiente comando:

```
curl --request GET 
--url 'https://www.tenable.com/downloads/api/v2/pages/nessus/files/Nessus-10.7.0-ubuntu1404_amd64.deb' 
--output 'Nessus-10.7.0-ubuntu1404_amd64.deb'
```


![[Selección_1365.png]]

## Instalación

Luego de descargarlo, se debe ejecutar el comando dpkg con privilegios de administrador para instalar el software.

```
sudo dpkg -i Nessus-10.7.0-ubuntu1404_amd64.deb
```

![[Selección_1368.png]]

## Inicio del servicio

Luego de instalarlo, para iniciar el daemon de Nessus se debe ejecutar systemctl:

```
sudo /bin/systemctl start nessusd.service
```

También se puede usar `sudo service nessusd start`

Para revisar el estado del daemon, se debe ejecutar el siguiente comando:

```
sudo /bin/systemctl status nessusd.service
```

![[Selección_1369.png]]

## Configuración 

>[!tip] Configuración desde línea de comandos
> Una vez que Nessus esté instalado, puedes configurarlo ejecutando el siguiente comando en la terminal:
> 
> ```
> sudo /opt/nessus/sbin/nessuscli fetch --register clave_de_activación
> ```
> 
> Reemplaza "clave_de_activación" con la clave de activación que recibiste al registrarte en el sitio web de Tenable y sigue las instrucciones para completar el proceso de configuración.

Luego de levantar el servicio Nessus, se debe ingresar a la dirección: 

```
https://localhost:8834
```

En mi caso utilizaré la siguiente url:

```
https://kali:8834/
```


![[Selección_1370.png]]

En la pantalla de bienvenida, se debe indicar de qué forma de desplegará Nessus. En mi caso, dado que no tengo una licencia comercial, voy a escoger la opción "Register for Nessus Essentials", que se refiere a la versión gratuita para educadores, estudiantes y aficionados.

![[Selección_1371.png]]

En la pantalla siguiente, se debe registrar con su nombre y correo electrónico. A continuación se entrega un código de activación para esta instalación.

![[Selección_1372b.png]]

En la pantalla siguiente, se realiza la descarga de plugins.

![[Selección_1374.png]]

Luego, es necesario ingresar con el correo electrónico y contraseña indicados anteriormente.

![[Selección_1377.png]]

## Instrucciones de uso

Estas son algunas instrucciones básicas para comenzar a usar Nessus en Kali Linux. Para obtener más detalles sobre el uso de Nessus y sus funciones avanzadas, consulta la documentación oficial de Nessus o realiza cursos de capacitación disponibles en línea.

### Iniciar Nessus

Abre tu navegador web y ve a la dirección https://localhost:8834 (o la dirección que hayas especificado durante la configuración). Se debe iniciar sesión con las credenciales que se proporcionaron durante la configuración.

![[Selección_1377.png]]

A continuación se presenta la pantalla de dashboard de Nessus, desde donde se pueden realizar escaneos.

![[Selección_1375.png]]

### Crear un nuevo escaneo

Una vez que hayas iniciado sesión, haz clic en "New Scan" (Nuevo Escaneo) para comenzar a configurar un nuevo escaneo de vulnerabilidad.


### Configurar el escaneo

En la página de configuración del escaneo, puedes especificar el objetivo del escaneo (por ejemplo, una dirección IP, un rango de direcciones IP o un nombre de host), seleccionar el tipo de escaneo (por ejemplo, escaneo rápido, escaneo completo, escaneo de credenciales, etc.), y configurar otras opciones según tus necesidades.


### Iniciar el escaneo

Después de configurar el escaneo según tus requisitos, haz clic en "Launch Scan" (Iniciar Escaneo) para comenzar el escaneo de vulnerabilidades.


### Revisar los resultados del escaneo

Una vez que el escaneo esté completo, podrás ver los resultados en la interfaz web de Nessus. Esta página mostrará una lista de las vulnerabilidades encontradas, junto con detalles sobre cada una de ellas, incluyendo una descripción de la vulnerabilidad, el nivel de gravedad, la solución recomendada y más.


### Generar informes

Nessus te permite generar informes detallados sobre las vulnerabilidades encontradas durante el escaneo. Puedes personalizar estos informes según tus necesidades y descargarlos en varios formatos, como PDF, HTML, CSV, etc.


### Tomar medidas correctivas

Basándote en los resultados del escaneo, toma las medidas correctivas necesarias para remediar las vulnerabilidades encontradas en tus sistemas y redes.


### Programar escaneos periódicos

Para mantener la seguridad de tus sistemas de manera continua, considera programar escaneos periódicos con Nessus para identificar y abordar nuevas vulnerabilidades a medida que surjan.

















