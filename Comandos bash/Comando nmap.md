![[header_hacking.jpg]]
# Comando `nmap`

---
**Tags:** #info #hacking #tool #kali #linux #bash
**Fecha creación:** 03.08.2023
**Fecha ultima modificación:** 03.08.2023

> [!info] Volver a [[Home]] | [[Ciberseguridad]] 

>[!tip] **Revisar la guía [[Kali Linux post-instalacion]]**

---

**Nmap** (Network Mapper) es una herramienta de código abierto ampliamente utilizada para el escaneo de redes y la auditoría de seguridad. Su función principal es descubrir hosts y servicios en una red, así como mapear los puertos abiertos en los dispositivos conectados. Nmap ofrece una amplia gama de opciones y funcionalidades que permiten a los administradores de red y profesionales de ciberseguridad obtener información valiosa sobre la seguridad y el estado de la red.

---
## Casos de uso de Nmap

1. **Descubrimiento de hosts**: Nmap puede utilizarse para identificar y enumerar todos los hosts activos en una red. Esto es útil para garantizar la visibilidad de todos los dispositivos conectados y para identificar posibles dispositivos desconocidos o no autorizados en la red.

2. **Escaneo de puertos**: Nmap es conocido por su capacidad para escanear y mapear los puertos abiertos en los hosts de la red. Esto ayuda a los administradores a identificar servicios en ejecución, así como posibles puertas traseras y servicios no autorizados.

3. **Detección de sistemas operativos**: Nmap tiene la capacidad de detectar el sistema operativo que se ejecuta en un host objetivo. Esta información es útil para fines de inventario de la red y para identificar sistemas que puedan necesitar actualizaciones o correcciones de seguridad.

4. **Escaneo de vulnerabilidades**: Nmap puede utilizar scripts personalizados (NSE - Nmap Scripting Engine) para buscar vulnerabilidades conocidas en los servicios y protocolos encontrados durante el escaneo. Esto permite a los profesionales de seguridad identificar posibles riesgos y tomar medidas para mejorar la postura de seguridad.

5. **Análisis de firewall**: Nmap puede ser utilizado para identificar reglas de firewall y políticas de filtrado de paquetes en los dispositivos de red. Esto ayuda a los administradores a comprender y verificar la efectividad de sus políticas de seguridad.

6. **Pruebas de penetración (penetration testing)**: Nmap es una herramienta comúnmente utilizada en pruebas de penetración y auditorías de seguridad. Permite a los expertos en seguridad evaluar la seguridad de una red y encontrar posibles vulnerabilidades o debilidades.

7. **Monitoreo de cambios en la red**: Al realizar escaneos periódicos de la red, Nmap puede ayudar a identificar cambios no autorizados o inesperados en la infraestructura de la red.

8. **Optimización de red**: Nmap también puede ser útil para identificar cuellos de botella y puntos débiles en la infraestructura de red, lo que permite a los administradores optimizar el rendimiento y la eficiencia de la red.

Es importante destacar que Nmap es una herramienta poderosa que puede utilizarse para fines legítimos de administración de redes y seguridad. Sin embargo, también puede ser mal utilizada para fines maliciosos, como el escaneo no autorizado de sistemas y redes. Siempre asegúrate de obtener permiso y actuar dentro de los límites legales y éticos al utilizar Nmap o cualquier otra herramienta de seguridad en un entorno de producción o en sistemas que no te pertenezcan.

---
## Ejemplos

Aquí tienes algunos ejemplos de cómo usar el comando "nmap", una popular herramienta de escaneo de redes y auditoría de seguridad:

1. **Escaneo de puertos en una dirección IP**:

```
nmap 192.168.1.1
```

Este comando realizará un escaneo de puertos en la dirección IP "192.168.1.1" para detectar qué puertos están abiertos y respondiendo.

2. **Escaneo de puertos en un rango de direcciones IP**:

```
nmap 192.168.1.1-100
```

Este comando realizará un escaneo de puertos en el rango de direcciones IP desde "192.168.1.1" hasta "192.168.1.100" para detectar qué puertos están abiertos y respondiendo en cada dirección.

3. **Escaneo de puertos en un rango de direcciones IP específico y guardando resultados en un archivo**:

```
nmap -oN resultados.txt 192.168.1.1-100
```

Este comando realizará un escaneo de puertos en el rango de direcciones IP desde "192.168.1.1" hasta "192.168.1.100" y guardará los resultados en un archivo llamado "resultados.txt".

4. **Escaneo de puertos en una red completa**:

```
nmap 192.168.1.0/24
```

Este comando realizará un escaneo de puertos en toda la red 192.168.1.0/24 para detectar qué puertos están abiertos y respondiendo en cada dirección IP de la red.

5. **Escaneo de puertos con detección de servicios y versiones**:

```
nmap -sV 192.168.1.1
```

Este comando realizará un escaneo de puertos en la dirección IP "192.168.1.1" y tratará de detectar los servicios y versiones que están detrás de los puertos abiertos.

6. **Escaneo rápido de puertos más comunes**:

```
nmap -F 192.168.1.1
```

Este comando realizará un escaneo rápido de los puertos más comunes en la dirección IP "192.168.1.1".

7. **Escaneo de puertos con detección de sistemas operativos**:

```
nmap -O 192.168.1.1
```

Este comando realizará un escaneo de puertos en la dirección IP "192.168.1.1" y tratará de detectar el sistema operativo que está ejecutándose en el host objetivo.

8. **Escaneo usando scripts de Nmap (NSE)**:

```
nmap --script vuln 192.168.1.1
```

Este comando realizará un escaneo de puertos en la dirección IP "192.168.1.1" y ejecutará scripts de Nmap para buscar vulnerabilidades conocidas en los servicios detectados.

9. **Nmap (selección personal)**:

```
sudo nmap -O -oN resultado.txt 192.168.100.0/24
```

```
nmap -oN resultado2.txt 192.168.100.0/24
```

---
## Nmap tutorial

>[!tip] Más info
>Youtube: [Nmap Tutorial to find Network Vulnerabilities](https://www.youtube.com/watch?v=4t4kBkMsDbQ)

Escanear toda la red para encontrar hosts
```
nmap -sP 192.168.100.0/24
```

Escanear toda la red para encontrar puertos abiertos en los hosts
```
sudo nmap -sT -p 80,443 192.168.100.0/24
```













