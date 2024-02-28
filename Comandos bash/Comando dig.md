![[header_ethical_hacking.jpg]]
# Comando `dig`

---
**Tags:** #info #hacking #tool #kali #linux #bash

> [!info] Volver a [[Home]] | [[Ciberseguridad]] 

---
## Descripción

El comando `dig` es una herramienta de línea de comandos utilizada principalmente en sistemas operativos basados en Unix y Linux para realizar consultas DNS (Domain Name System). DNS es el sistema que traduce los nombres de dominio legibles por humanos (como ejemplo.com) en direcciones IP que las computadoras utilizan para comunicarse entre sí en internet.

El comando `dig` es una herramienta poderosa para realizar diagnósticos de red y depurar problemas de resolución DNS, así como para obtener información detallada sobre la configuración de un nombre de dominio.

---
### Explicación del comando `dig`

El formato básico del comando `dig` es el siguiente:

```bash
dig [opciones] nombre_de_dominio [tipo_de_registro]
```

- `[opciones]`: Son las opciones adicionales que se pueden utilizar para personalizar la consulta DNS, como especificar el servidor DNS a consultar, establecer un tiempo límite, habilitar la recursión, entre otros.
  
- `nombre_de_dominio`: Es el nombre de dominio que se desea consultar.

- `[tipo_de_registro]`: Es opcional y especifica el tipo de registro DNS que se desea consultar, como A, AAAA, MX, CNAME, TXT, entre otros. Si no se especifica, se realiza una consulta de tipo de registro A por defecto.

### Casos de uso del comando `dig`:

1. **Consulta de dirección IP (registro A)**:
   
   ```bash
   dig example.com
   ```
   
   Esta consulta devolverá la dirección IP asociada al nombre de dominio `example.com`.

2. **Consulta de registros MX**:
   
   ```bash
   dig example.com MX
   ```
   
   Esta consulta devolverá los registros de intercambio de correo (MX) asociados al nombre de dominio `example.com`, que indican los servidores de correo responsables de recibir correos electrónicos para ese dominio.

3. **Consulta de registros de alias (registro CNAME)**:
   
   ```bash
   dig www.example.com CNAME
   ```
   
   Esta consulta devolverá el registro de alias (CNAME) asociado al nombre de dominio `www.example.com`, que indica el nombre de dominio al que está redirigido.

4. **Consulta de registros de texto (registro TXT)**:
   
   ```bash
   dig example.com TXT
   ```
   
   Esta consulta devolverá los registros de texto (TXT) asociados al nombre de dominio `example.com`, que a menudo se utilizan para almacenar información textual relacionada con el dominio, como SPF (Sender Policy Framework) para la autenticación de correo electrónico.

5. **Consulta de registros de servidores de nombres (registro NS)**:
   
   ```bash
   dig example.com NS
   ```
   
   Esta consulta devolverá los registros de servidores de nombres (NS) asociados al nombre de dominio `example.com`, que indican los servidores DNS autoritativos para ese dominio.

6. **Consulta de registros IPv6 (registro AAAA)**:
   
   ```bash
   dig example.com AAAA
   ```
   
   Esta consulta devolverá los registros IPv6 (AAAA) asociados al nombre de dominio `example.com`.

7. **Consulta de registros de autoridad (registro SOA)**:
   
   ```bash
   dig example.com SOA
   ```
   
   Esta consulta devolverá los registros de autoridad (SOA) asociados al nombre de dominio `example.com`, que contienen información sobre la zona DNS y los parámetros de configuración de la autoridad del dominio.

8. **Consulta de registros de servicio (registro SRV)**:
   
   ```bash
   dig _sip._udp.example.com SRV
   ```
   
   Esta consulta devolverá los registros de servicio (SRV) asociados al nombre de dominio `_sip._udp.example.com`, que se utilizan para describir servicios disponibles dentro de un dominio, como servicios de voz sobre IP (VoIP).

9. **Consulta a un servidor DNS específico**:
   
   ```bash
   dig example.com @8.8.8.8
   ```
   
   Esta consulta enviará la consulta DNS al servidor DNS con la dirección IP `8.8.8.8` en lugar de utilizar el servidor DNS configurado en el sistema.

10. **Consulta inversa (resolución de direcciones IP a nombres de dominio)**:
   
    ```bash
    dig -x 192.0.2.1
    ```
   
    Esta consulta realizará una resolución inversa de la dirección IP `192.0.2.1` para encontrar el nombre de dominio asociado.

11. **Consulta de registros de servicio de autodiscover (registro SRV) para Microsoft Exchange**:

    ```bash
    dig _autodiscover._tcp.example.com SRV
    ```

    Esta consulta devolverá los registros de servicio (SRV) asociados al nombre de dominio `_autodiscover._tcp.example.com`, que se utilizan para la configuración automática de clientes de correo electrónico en Microsoft Exchange.

12. **Consulta de registros de certificados (registro CERT)**:

    ```bash
    dig example.com CERT
    ```

    Esta consulta devolverá los registros de certificados (CERT) asociados al nombre de dominio `example.com`, que contienen información sobre certificados digitales utilizados en la infraestructura de seguridad de la web.

13. **Consulta de registros de ubicación geográfica (registro LOC)**:

    ```bash
    dig example.com LOC
    ```

    Esta consulta devolverá los registros de ubicación geográfica (LOC) asociados al nombre de dominio `example.com`, que contienen información sobre la ubicación física geográfica del servidor de nombres del dominio.

14. **Consulta de registros de mapeo de nombres a direcciones IP (registro NAPTR)**:

    ```bash
    dig example.com NAPTR
    ```

    Esta consulta devolverá los registros de mapeo de nombres a direcciones IP (NAPTR) asociados al nombre de dominio `example.com`, que se utilizan en la resolución de nombres en la infraestructura de VoIP y SIP.

15. **Consulta de registros DNSSEC (registro DNSKEY, DS, RRSIG, etc.)**:

    ```bash
    dig example.com DNSKEY
    dig example.com DS
    dig example.com RRSIG
    ```

    Estas consultas devolverán los registros relacionados con DNSSEC asociados al nombre de dominio `example.com`, que se utilizan para garantizar la autenticidad y la integridad de las respuestas DNS.

Estos son algunos ejemplos adicionales que muestran la versatilidad del comando `dig` para realizar una variedad de consultas DNS y obtener información detallada sobre la configuración de un nombre de dominio.



