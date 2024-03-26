![[header_ethical_hacking.jpg]]
# `theHarvester`

---
**Tags:** #info #hacking #tool #kali #linux 
**Fecha creación:** 27.07.2023
**Fecha ultima modificación:** 03.08.2023

> [!info] Volver a [[Home]] | [[Ciberseguridad]] 

>[!tip] **Revisar la guía [[Kali Linux post-instalacion]]**

---

**TheHarvester** es una herramienta de código abierto desarrollada en Python que se utiliza para recopilar información y realizar investigaciones de inteligencia en línea. Su propósito principal es obtener información valiosa relacionada con dominios, direcciones de correo electrónico, nombres de usuario, subdominios y otras entidades de Internet. TheHarvester puede ser útil para analizar una organización o sitio web específico desde una perspectiva de ciberseguridad y también para fines legítimos, como pruebas de penetración y recopilación de información para investigaciones.

---
## Casos de uso de TheHarvester

1. **Búsqueda de dominios y subdominios**: TheHarvester puede ayudar a identificar dominios y subdominios asociados con una organización o sitio web objetivo. Esto es útil para comprender mejor la infraestructura y la presencia en línea de una entidad.

2. **Recopilación de direcciones de correo electrónico**: Puede utilizarse para encontrar direcciones de correo electrónico asociadas con un dominio específico. Esto es útil para realizar campañas de marketing, contactar a posibles clientes o analizar la exposición de correos electrónicos de una organización.

3. **Obtención de nombres de usuario**: TheHarvester puede recopilar nombres de usuario en línea asociados con un dominio o dirección de correo electrónico. Esta información puede ser relevante para analizar la exposición de nombres de usuario y la posibilidad de ataques de ingeniería social.

4. **Análisis de información pública**: TheHarvester puede extraer información pública disponible en línea y realizar investigaciones de inteligencia sobre una entidad, como direcciones físicas, números de teléfono y perfiles de redes sociales.

5. **Pruebas de penetración y seguridad**: Los profesionales de ciberseguridad pueden utilizar TheHarvester para obtener información sobre una organización objetivo antes de realizar pruebas de penetración o auditorías de seguridad. Esto puede ayudar a identificar posibles puntos débiles y áreas de mejora en la seguridad de la entidad.

6. **Investigación de amenazas**: TheHarvester puede ser útil para recopilar información sobre posibles amenazas o actores maliciosos que pueden estar relacionados con una organización objetivo.

---
## Ejemplos

Aquí tienes algunos ejemplos de cómo usar el comando "theHarvester" para realizar diversas investigaciones de inteligencia en línea:

1. **Búsqueda de correos electrónicos relacionados con un dominio específico**:

```
theHarvester -d example.com -b google
```

Este comando buscará correos electrónicos asociados al dominio "example.com" utilizando el motor de búsqueda de Google.

2. **Obtener subdominios de un sitio web**:

```
theHarvester -d example.com -b bing
```

Este comando buscará subdominios del dominio "example.com" utilizando el motor de búsqueda de Bing.

3. **Buscar nombres de usuario relacionados con un dominio específico**:

```
theHarvester -d example.com -b instagram
```

Este comando buscará nombres de usuario de Instagram asociados al dominio "example.com".

4. **Buscar información sobre una empresa o entidad**:

```
theHarvester -d example.com -b linkedin
```

Este comando buscará información sobre la empresa o entidad "example.com" utilizando el motor de búsqueda de LinkedIn.

5. **Realizar una búsqueda en múltiples motores de búsqueda**:

```
theHarvester -d example.com -b all
```

Este comando buscará información relacionada con el dominio "example.com" en todos los motores de búsqueda disponibles en "theHarvester".

6. **Guardar los resultados en un archivo de salida**:

```
theHarvester -d example.com -b google -f resultados.txt
```

Este comando buscará correos electrónicos asociados al dominio "example.com" utilizando el motor de búsqueda de Google y guardará los resultados en un archivo llamado "resultados.txt".

Recuerda que theHarvester admite varios motores de búsqueda y fuentes de datos públicas, por lo que puedes experimentar con diferentes combinaciones para obtener la información que necesitas en tus investigaciones. Siempre asegúrate de utilizar la herramienta de manera ética y respetando las políticas y leyes aplicables. Además, ten en cuenta que algunas fuentes pueden tener limitaciones de acceso o requerir autenticación, por lo que los resultados pueden variar según las restricciones de cada motor de búsqueda o plataforma en línea.

---

