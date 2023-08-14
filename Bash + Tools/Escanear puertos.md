![[header_hacking.jpg]]
# Escanear puertos

---
**Tags:** #info #linux #bash 
**Fecha creación:** 03.08.2023
**Fecha ultima modificación:** 05.08.2023

> [!info] Volver a [[Home]] | [[Ciberseguridad]]

>[!tip] **Revisar la guía [[Kali Linux post-instalacion]]**

---

## Algunos programas de línea de comandos

Existen varios programas de línea de comandos aparte de Netcat que se utilizan para escanear puertos en sistemas Unix y Unix-like. Cada uno tiene sus propias características y ventajas, y la elección del "mejor" programa dependerá de las necesidades específicas y preferencias del usuario. 

El "mejor" programa de escaneo de puertos dependerá de tus necesidades específicas y nivel de experiencia. Nmap es ampliamente considerado como uno de los mejores debido a su amplia gama de funciones y capacidades avanzadas. Sin embargo, otros programas como Masscan, Hping y Unicornscan también son excelentes opciones en situaciones específicas, como escaneos de alta velocidad o pruebas avanzadas de conectividad. Es recomendable familiarizarse con varios de estos programas y elegir el que mejor se adapte a tus requerimientos y habilidades.

Algunos de los programas más populares para escanear puertos son:

1. **[[Comando nmap]]**: Nmap es una herramienta de escaneo de puertos y detección de servicios de red extremadamente potente y ampliamente utilizada. Ofrece una variedad de técnicas de escaneo, detección de sistemas operativos y detección de versiones de servicios. Nmap se considera una herramienta imprescindible para cualquier administrador de redes y es altamente valorada por su flexibilidad y capacidades avanzadas.
    
2. **masscan**: Masscan es una herramienta de escaneo de puertos de alta velocidad diseñada para escanear rápidamente grandes redes. Es conocida por su velocidad y eficiencia, lo que lo convierte en una excelente opción para escanear redes masivas.
    
3. **hping**: Hping es una herramienta de escaneo de puertos que utiliza paquetes personalizados para realizar escaneos. Ofrece opciones avanzadas para pruebas de conectividad y escaneos de cortafuegos.
    
4. **unicornscan**: Unicornscan es una herramienta de escaneo de puertos diseñada para ser rápida y flexible. Puede escanear puertos de forma rápida y precisa utilizando técnicas avanzadas.
    
5. **sNmap**: sNmap es una versión simplificada y más amigable de Nmap que proporciona una interfaz de usuario más simple y fácil de usar. Está diseñada para usuarios menos experimentados que deseen realizar escaneos básicos de puertos.
    

---

### Tabla comparativa 

Esta tabla te proporciona una visión general de las ventajas y desventajas de cada programa, lo que te ayudará a elegir la herramienta más adecuada según tus necesidades y objetivos específicos. Es importante recordar que cada herramienta tiene sus propias capacidades y se adapta mejor a ciertos escenarios, por lo que es útil tener varias opciones a considerar dependiendo de la tarea que desees realizar.

Tabla comparativa con las ventajas y desventajas de los programas mencionados, incluyendo TheHarvester y Netcat:

| Programa     | Ventajas                                                      | Desventajas                                                |
|--------------|---------------------------------------------------------------|------------------------------------------------------------|
| [[Comando nmap]]         | - Amplia variedad de técnicas de escaneo                     | - Puede ser más lento en escaneos exhaustivos             |
|              | - Detección de sistemas operativos y versiones de servicios   | - Mayor curva de aprendizaje                               |
|              | - Gran comunidad de usuarios y soporte                       |                                                            |
|              | - Integración con otras herramientas                         |                                                            |
| Masscan      | - Altamente rápido y eficiente en escaneos masivos           | - Menos opciones y capacidades que Nmap                   |
|              | - Escaneos de red a alta velocidad                           | - No detecta sistemas operativos ni versiones de servicios |
| Hping        | - Escaneos utilizando paquetes personalizados                | - Menos amigable para usuarios no expertos                 |
|              | - Pruebas avanzadas de conectividad                          |                                                            |
|              | - Flexibilidad en la construcción de paquetes                |                                                            |
| Unicornscan  | - Rápido y preciso en escaneos de puertos                    | - Menos opciones que Nmap y Hping                         |
|              | - Flexible y personalizable                                 | - Menos soporte y comunidad que otras herramientas        |
| sNmap        | - Interfaz de usuario simple y fácil de usar                 | - Funcionalidad limitada en comparación con Nmap          |
|              | - Escaneos básicos de puertos                                | - Menos opciones avanzadas                                 |
| [[Herramienta theHarvester]] | - Especializado en recopilación de información en Internet   | - No es una herramienta de escaneo de puertos              |
|              | - Capacidad para buscar correos electrónicos y subdominios   |                                                            |
|              | - Útil para inteligencia de fuentes abiertas y análisis OSINT|                                                            |
| [[Comando netcat]]       | - Herramienta versátil para transferencia de datos           | - No ofrece técnicas avanzadas de escaneo de puertos       |
|              | - Capacidad para crear túneles y conexiones remotas          | - Requiere comandos adicionales para escaneo de puertos    |

---
## Software OSINT

Aquí tienes una lista de algunos programas de línea de comandos para Linux que se utilizan en OSINT (Inteligencia de Fuentes Abiertas) junto con una breve descripción de cada uno:

1. **theHarvester**: Herramienta diseñada para recopilar información de fuentes públicas como motores de búsqueda, redes sociales, subdominios y correos electrónicos asociados a un dominio específico.

>[!tip] **Revisar la guía de [[Herramienta theHarvester]]**

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



