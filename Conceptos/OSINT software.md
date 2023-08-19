![[header_ethical_hacking.jpg]]
# OSINT software

---
**Tags:** #info #arreglar 
**Fecha creación:** 03.08.2023
**Fecha ultima modificación:** 03.08.2023

> [!info] Volver a [[Home]] | [[Ciberseguridad]]

>[!tip] **Revisar la guía [[Kali Linux post-instalacion]]**

---
OSINT significa "Inteligencia de Fuentes Abiertas" (Open Source Intelligence, en inglés) y se refiere a la recopilación, análisis y utilización de información de fuentes públicas y disponibles libremente para obtener conocimiento sobre personas, organizaciones, eventos o cualquier otro tema de interés. Estas fuentes abiertas pueden incluir sitios web públicos, redes sociales, foros en línea, bases de datos públicas, documentos, entre otros.

El OSINT es ampliamente utilizado en el ámbito de la seguridad informática, investigaciones de ciberdelitos, análisis de amenazas, evaluación de riesgos, análisis de inteligencia, análisis de reputación en línea, y muchas otras áreas donde la información pública puede proporcionar una visión valiosa. Sin embargo, siempre se debe utilizar de manera ética y respetando las leyes y políticas de privacidad, evitando la recopilación de información sensible o privada sin el consentimiento adecuado.

### Características de OSINT
1. **Accesibilidad**: La información obtenida a través de OSINT está disponible públicamente o es accesible para cualquiera sin la necesidad de acceso especial o autorización.

2. **Legalidad**: OSINT se basa en la recopilación de información de fuentes abiertas y no implica la vulneración de sistemas o la obtención de información de forma ilegal.

3. **Multidisciplinario**: OSINT abarca diversas disciplinas como seguridad informática, inteligencia, análisis de redes sociales, análisis de datos, entre otros.

4. **Diversidad de Fuentes**: Utiliza una amplia gama de fuentes abiertas, incluyendo sitios web, redes sociales, documentos, registros públicos, etc.

5. **Proceso Iterativo**: El proceso de OSINT implica iterar entre búsqueda, recopilación, análisis y verificación de información para obtener resultados precisos.

6. **Herramientas Especializadas**: Se pueden utilizar herramientas especializadas para agilizar la recopilación y análisis de información, como las mencionadas previamente.

### Metodología de OSINT

La metodología de OSINT varía según los objetivos específicos de la investigación, pero generalmente sigue un proceso similar:

1. **Definición de Objetivos**: Se define claramente lo que se busca obtener con la investigación y qué información se necesita.

2. **Recopilación**: Se identifican y utilizan diversas fuentes abiertas para recopilar información relevante relacionada con los objetivos.

3. **Análisis**: La información recopilada se analiza para encontrar conexiones, patrones o relaciones entre los datos.

4. **Verificación**: Se verifica la autenticidad y confiabilidad de la información recopilada para asegurar su precisión.

5. **Presentación de Resultados**: Los resultados se presentan de manera clara y organizada, a menudo utilizando informes o visualizaciones.


---
## Software OSINT de línea de comandos 

Aquí tienes una lista de algunos programas de línea de comandos para Linux que se utilizan en OSINT (Inteligencia de Fuentes Abiertas) junto con una breve descripción de cada uno:

1. **theHarvester**: Herramienta diseñada para recopilar información de fuentes públicas como motores de búsqueda, redes sociales, subdominios y correos electrónicos asociados a un dominio específico.

   Ejemplo de uso:
   ```
   theHarvester -d example.com -b google
   ```

2. **Maltego**: Una poderosa herramienta de OSINT con una interfaz gráfica y también una versión de línea de comandos. Ayuda a descubrir conexiones y relaciones entre entidades en Internet.

   Ejemplo de uso:
   ```
   maltego-ce --quiet -e example@example.com
   ```

3. **Shodan**: Un motor de búsqueda especializado en dispositivos conectados a Internet, como cámaras web, servidores, enrutadores, entre otros.

   Ejemplo de uso:
   ```
   shodan search apache
   ```

4. **theZoo**: Una colección de herramientas de OSINT para recopilar información sobre dominios, correos electrónicos, direcciones IP y más.

   Ejemplo de uso:
   ```
   cd theZoo
   ./theHarvester.py -d example.com -b google
   ```

5. **recon-ng**: Una herramienta de reconocimiento de código abierto que automatiza tareas de OSINT mediante módulos para diversas fuentes de información.

   Ejemplo de uso:
   ```
   recon-ng
   modules load recon/domains-hosts/bing_domain_web
   options set domain example.com
   run
   ```

6. **SpiderFoot**: Una herramienta de OSINT que realiza un análisis automático de dominios, subdominios, direcciones IP, correos electrónicos y más.

   Ejemplo de uso:
   ```
   spiderfoot -l 0.0.0.0
   ```

7. **h8mail**: Una herramienta de OSINT para encontrar direcciones de correo electrónico filtradas en bases de datos públicas.

   Ejemplo de uso:
   ```
   h8mail -t target@example.com
   ```

8. **Censys**: Un motor de búsqueda que proporciona información sobre dispositivos y hosts conectados a Internet, así como certificados SSL y más.

   Ejemplo de uso:
   ```
   censys search example.com
   ```

Estas herramientas son solo algunas de las disponibles para OSINT en línea de comandos en Linux. Cada una tiene su enfoque y funcionalidad específica, y su elección dependerá de tus necesidades y el tipo de información que estés buscando. Recuerda utilizar estas herramientas de manera ética y con el permiso adecuado para evitar problemas legales o de privacidad.

---
## Otros de interés

Existen muchos otros programas de código abierto y comerciales que se utilizan para realizar tareas de OSINT (Inteligencia de Fuentes Abiertas) en línea de comandos en Linux. Aquí hay algunos más que podrían ser de interés:

1. **Metagoofil**: Herramienta para extraer metadatos de archivos públicos en Internet, como documentos, imágenes y videos.
    
2. **FOCA**: Herramienta para recopilar metadatos y buscar información en documentos y correos electrónicos.
    
3. **theHarvester-ng**: Una versión más reciente y mejorada de theHarvester con más fuentes y opciones.
    
4. **Photon**: Un buscador de información que extrae enlaces, subdominios y direcciones de correo electrónico de un sitio web.
    
5. **subfinder**: Herramienta para encontrar subdominios asociados a un dominio.
    
6. **sn0int**: Una herramienta modular de OSINT que automatiza la búsqueda y recopilación de información en la web.
    
7. **datasploit**: Una herramienta de inteligencia de datos que reúne información de fuentes abiertas y públicas para una dirección IP, correo electrónico, nombre de usuario y más.
    
8. **EyeWitness**: Herramienta para capturar capturas de pantalla de sitios web y visualizarlas en un informe.
    
9. **the-endorser**: Herramienta para encontrar posibles cuentas asociadas a una dirección de correo electrónico.
    
10. **TIDoS-Framework**: Una colección de herramientas de OSINT y pruebas de penetración.

----
## Presentes en kali linux

Kali Linux es una distribución de Linux diseñada específicamente para pruebas de penetración y seguridad informática. Viene preinstalada con una amplia variedad de herramientas de seguridad y OSINT que son útiles para los profesionales de la seguridad y las pruebas de penetración. A continuación, te muestro cuáles de los programas mencionados anteriormente están incluidos de forma predeterminada en Kali Linux:

1. **theHarvester**: Sí, theHarvester está incluido en Kali Linux y es una herramienta muy útil para la recopilación de información de fuentes abiertas.
    
2. **Maltego**: Kali Linux incluye Maltego en su versión CE (Community Edition), que es la versión gratuita. También se puede obtener la versión comercial para obtener más funcionalidades.
    
3. **Shodan**: Shodan no viene preinstalado en Kali Linux, pero se puede instalar fácilmente desde el repositorio oficial o mediante la descarga desde su sitio web.
    
4. **theZoo**: theZoo no está incluido de forma predeterminada en Kali Linux, pero puedes instalarlo manualmente si lo deseas.
    
5. **recon-ng**: Recon-ng está preinstalado en Kali Linux y es una excelente herramienta para OSINT y reconocimiento.
    
6. **SpiderFoot**: SpiderFoot no viene preinstalado en Kali Linux, pero puedes instalarlo manualmente si lo necesitas.
    
7. **h8mail**: h8mail no está incluido de forma predeterminada en Kali Linux, pero puedes instalarlo desde su repositorio oficial.
    
8. **Censys**: Censys no viene preinstalado en Kali Linux, pero puedes acceder a su motor de búsqueda en línea desde su sitio web.