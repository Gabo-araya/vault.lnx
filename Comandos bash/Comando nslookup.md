![[header_ethical_hacking.jpg]]
# Comando `nslookup`

---
**Tags:** #info #hacking #tool #kali #linux #bash 

> [!info] Volver a [[Home]] | [[Ciberseguridad]] 

---

El programa `nslookup`, que significa "Name Server Lookup", es una herramienta de línea de comandos utilizada para realizar consultas DNS (Domain Name System) y obtener información relacionada con nombres de dominio y direcciones IP. Su principal objetivo es resolver nombres de dominio en direcciones IP y viceversa. A continuación, te proporciono una descripción y ejemplos de casos de uso:

`nslookup` es una utilidad de red que permite a los usuarios realizar consultas DNS para obtener información sobre nombres de dominio, direcciones IP y registros DNS. Puede ser útil para diagnosticar problemas de resolución DNS, verificar la configuración de servidores de nombres y obtener información sobre servidores DNS específicos.

## Casos de Uso y Ejemplos

1. **Resolución de Nombres de Dominio:**
   Puedes usar `nslookup` para resolver nombres de dominio en direcciones IP. Por ejemplo:

   ```bash
   nslookup www.google.com
   ```

   Esto mostrará la dirección IP asociada con el nombre de dominio "www.google.com".

2. **Resolución Inversa:**
   Puedes realizar una resolución inversa para obtener el nombre de dominio a partir de una dirección IP. Por ejemplo:

   ```bash
   nslookup 8.8.8.8
   ```

   Esto mostrará el nombre de dominio asociado con la dirección IP "8.8.8.8".

3. **Consulta a un Servidor DNS Específico:**
   Puedes especificar un servidor DNS específico para realizar la consulta. Por ejemplo:

   ```bash
   nslookup www.example.com 8.8.4.4
   ```

   Esto consulta el servidor DNS "8.8.4.4" para obtener información sobre "www.example.com".

4. **Consulta de Tipos de Registro Específicos:**
   Puedes consultar tipos de registros DNS específicos, como registros MX (Mail Exchange) o registros TXT (texto). Por ejemplo:

   ```bash
   nslookup -type=mx example.com
   ```

   Esto mostrará los registros MX asociados con el dominio "example.com".

5. **Salida Detallada:**
   Puedes obtener una salida más detallada utilizando la opción "-debug". Por ejemplo:

   ```bash
   nslookup -debug www.example.com
   ```

   Esto mostrará información detallada sobre el proceso de consulta.

En resumen, `nslookup` es una herramienta útil para realizar consultas DNS y obtener información sobre nombres de dominio y direcciones IP. Puede ser utilizado para verificar la configuración DNS, diagnosticar problemas de resolución y obtener detalles específicos sobre registros DNS.