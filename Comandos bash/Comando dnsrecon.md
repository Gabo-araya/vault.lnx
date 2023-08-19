![[header_ethical_hacking.jpg]]
# Comando `dnsrecon`

---
**Tags:** #info #hacking #tool #kali #linux #bash

> [!info] Volver a [[Home]] | [[Ciberseguridad]] 

---
## Descripción

El comando `dnsrecon` es una herramienta de enumeración y recolección de información que se utiliza para realizar análisis de dominios y DNS. Su objetivo principal es ayudar a los profesionales de seguridad y administradores de red a descubrir información valiosa sobre la infraestructura de dominios, registros DNS y posibles vulnerabilidades relacionadas con el DNS. `dnsrecon` es una herramienta de código abierto y es útil para la recopilación de información en pruebas de penetración y evaluaciones de seguridad.

`dnsrecon` ofrece una variedad de opciones y modos de escaneo para analizar y recopilar información sobre dominios y DNS. Es importante mencionar que esta herramienta debe utilizarse de manera ética y con el permiso adecuado, ya que la enumeración de información de DNS puede tener implicaciones legales y éticas.

## Casos de Uso y Ejemplos

1. **Enumeración de Subdominios:**
   `dnsrecon` es útil para descubrir subdominios asociados con un dominio dado. Por ejemplo:

   ```bash
   dnsrecon -d example.com -t std
   ```

2. **Enumeración de Registros DNS:**
   Puedes usar `dnsrecon` para identificar registros DNS, como servidores de correo electrónico (MX) o servidores de nombres (NS):

   ```bash
   dnsrecon -d example.com -t axfr
   ```

3. **Buscar Dominios Relacionados:**
   Para buscar dominios relacionados en la misma red o empresa:

   ```bash
   dnsrecon -d example.com -t rvl
   ```

4. **Identificar Servidores DNS Abiertos:**
   Puedes identificar servidores DNS abiertos que pueden ser utilizados en ataques de amplificación:

   ```bash
   dnsrecon -t sniffer
   ```

5. **Enumeración Inversa de Direcciones IP:**
   Realizar una enumeración inversa de direcciones IP para descubrir dominios asociados:

   ```bash
   dnsrecon -r 192.168.1.0/24
   ```

6. **Enumeración de Servidores de Nombres (NS):**
   Enumerar servidores de nombres para un dominio:

   ```bash
   dnsrecon -d example.com -t ns
   ```

7. **Enumeración de Subdominios con Wordlist:**
   Usar una lista de palabras personalizada para buscar subdominios:

   ```bash
   dnsrecon -d example.com -D /path/to/wordlist.txt
   ```

---
## Otros ejemplos

Por supuesto, aquí tienes algunos ejemplos adicionales de cómo utilizar el comando `dnsrecon` en diferentes situaciones:

1. **Enumaración de Subdominios y Exportación a un Archivo:**
   Enumerar subdominios de un dominio y guardar los resultados en un archivo:

   ```bash
   dnsrecon -d example.com -t std -j /path/to/output.json
   ```

2. **Enumaración de Registros MX:**
   Descubrir servidores de correo electrónico (registros MX) asociados con un dominio:

   ```bash
   dnsrecon -d example.com -t mx
   ```

3. **Escaneo de Rango de Direcciones IP:**
   Realizar un escaneo de rango de direcciones IP para encontrar subdominios:

   ```bash
   dnsrecon -r 192.168.1.0/24 -t std
   ```

4. **Búsqueda de Dominios de Correo Electrónico:**
   Buscar dominios de correo electrónico asociados con un dominio principal:

   ```bash
   dnsrecon -d example.com -t e -j /path/to/output.json
   ```

5. **Enumaración de Registros DNS SRV:**
   Enumerar registros DNS SRV (servicio) para un dominio:

   ```bash
   dnsrecon -d example.com -t srv
   ```

6. **Búsqueda de Subdominios con Diccionario Personalizado:**
   Utilizar un diccionario personalizado para buscar subdominios:

   ```bash
   dnsrecon -d example.com -D /path/to/custom_dict.txt -t std
   ```

7. **Enumeración de Subdominios con Filtro de Longitud:**
   Enumerar subdominios que tienen una longitud específica:

   ```bash
   dnsrecon -d example.com -t std --length 5
   ```

8. **Escaneo de Rango de Puertos en Subdominios:**
   Realizar un escaneo de puertos en subdominios encontrados:

   ```bash
   dnsrecon -d example.com -t std -p 80,443,8080
   ```

Recuerda que el uso de `dnsrecon` y otras herramientas de enumeración y recopilación de información debe realizarse de manera ética y con el permiso adecuado. La recopilación de información de DNS puede ser una actividad sensible y puede tener implicaciones legales y de seguridad.

---
## Ejemplos de uso contra DVWA

Aquí tienes más ejemplos de cómo usar `dnsrecon` en combinación con los entornos de práctica DVWA (Damn Vulnerable Web Application) y Metasploitable 2:

**Enumeración de Subdominios en DVWA:**
Supongamos que deseas enumerar subdominios de un sitio web en DVWA. Asegúrate de tener el entorno DVWA configurado y ejecutándose.

```bash
dnsrecon -d dvwa.local -t std
```

**Enumeración de Subdominios en Metasploitable 2:**
Supongamos que deseas enumerar subdominios de un sitio web en Metasploitable 2.

```bash
dnsrecon -d metasploitable.local -t std
```

**Enumeración de Registros MX en DVWA:**
Para encontrar servidores de correo electrónico (registros MX) asociados con un dominio DVWA:

```bash
dnsrecon -d dvwa.local -t mx
```

**Enumeración de Registros DNS SRV en Metasploitable 2:**
Enumerar registros DNS SRV (servicio) para un dominio Metasploitable 2:

```bash
dnsrecon -d metasploitable.local -t srv
```

**Búsqueda de Dominios de Correo Electrónico en DVWA:**
Buscar dominios de correo electrónico asociados con el dominio DVWA:

```bash
dnsrecon -d dvwa.local -t e
```

Recuerda que estas prácticas deben realizarse en entornos controlados y con el permiso adecuado. Utilizar herramientas de enumeración como `dnsrecon` en sistemas en producción o sin autorización puede tener implicaciones legales y éticas.

---

