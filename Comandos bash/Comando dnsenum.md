
![[header_ethical_hacking.jpg]]
# Comando dnsenum

---
**Tags:** #info #bash #linux #ciberseguridad #tool 

> [!info] Volver a [[Home]] | [[Ciberseguridad]]

---
### Descripción

El comando `dnsenum` es una herramienta de línea de comandos utilizada para realizar una enumeración exhaustiva de información sobre dominios, subdominios y registros DNS. Esta herramienta automatiza el proceso de recopilación de información DNS para identificar posibles vulnerabilidades y puntos de entrada en una infraestructura.

**Casos de Uso y Ejemplos:**

1. **Enumeración de Subdominios:**
   `dnsenum` es ampliamente utilizado para enumerar subdominios de un dominio objetivo. Puede identificar subdominios que no son fácilmente visibles en la superficie. Ejemplo:

   ```bash
   dnsenum example.com
   ```

   Esto realizará una enumeración de subdominios en `example.com`.

2. **Enumera Todos los Tipos de Registros DNS:**
   Puedes usar `dnsenum` para enumerar todos los tipos de registros DNS disponibles para un dominio. Ejemplo:

   ```bash
   dnsenum example.com --enum
   ```

   Esto enumerará todos los registros DNS para `example.com`.

3. **Utiliza una Lista de Servidores DNS Personalizada:**
   Puedes especificar servidores DNS específicos para la enumeración utilizando la opción `-server`. Ejemplo:

   ```bash
   dnsenum example.com --server 8.8.8.8
   ```

   Esto realizará una enumeración de subdominios en `example.com` utilizando el servidor DNS de Google (`8.8.8.8`).

4. **Genera un Informe en Formato XML:**
   `dnsenum` permite generar un informe en formato XML que contiene la información recopilada. Ejemplo:

   ```bash
   dnsenum example.com --xml output.xml
   ```

   Esto generará un informe en formato XML llamado `output.xml`.

5. **Enumera Subdominios Utilizando Fuentes Externas:**
   Puedes utilizar archivos de texto con nombres de subdominios predefinidos para la enumeración. Ejemplo:

   ```bash
   dnsenum example.com --enum -w subdomains.txt
   ```

   Esto realizará una enumeración de subdominios en `example.com` utilizando la lista de subdominios en `subdomains.txt`.

6. **Realiza Enumeración Inversa (IP a Dominio):**
   Además de la enumeración de subdominios, `dnsenum` también puede realizar la enumeración inversa, buscando nombres de dominio asociados a direcciones IP. Ejemplo:

   ```bash
   dnsenum 8.8.8.8 --ip
   ```

   Esto buscará nombres de dominio asociados a la dirección IP `8.8.8.8`.

En resumen, `dnsenum` es una herramienta útil para la enumeración y recopilación de información DNS en un dominio objetivo. Puede ayudar a identificar subdominios, registros DNS y posibles áreas de mejora en la seguridad de la infraestructura de un dominio.