![[header_hacking.jpg]]
# Comando `arp-scan`

---
**Tags:** #info #hacking #tool #kali #linux #bash
**Fecha creación:** 15.08.2023
**Fecha ultima modificación:** 15.08.2023

> [!info] Volver a [[Home]] | [[Ciberseguridad]] 

>[!tip] **Revisar la guía sobre [[Escanear puertos]]**

---

`arp-scan` es una herramienta de línea de comandos en sistemas basados en Linux que se utiliza para escanear y descubrir dispositivos en una red local utilizando el protocolo ARP (Address Resolution Protocol). Permite identificar direcciones IP y direcciones MAC de dispositivos activos en la red local.

`arp-scan` es útil para identificar y descubrir dispositivos activos en una red local. Puede ser utilizado por administradores de red para monitorear la conectividad y la presencia de dispositivos en la red, así como para detectar dispositivos no autorizados.

## Casos de uso y ejemplos de `arp-scan`

1. **Escaneo de dispositivos en la red:**

   ```bash
   sudo arp-scan --localnet
   ```

   Este comando escanea la red local y muestra una lista de direcciones IP y direcciones MAC de los dispositivos activos.

2. **Escaneo en una subred específica:**

   ```bash
   sudo arp-scan 192.168.1.0/24
   ```

   Escanea una subred específica (en este caso, `192.168.1.0` con máscara de red `/24`) en busca de dispositivos activos.

3. **Especificar la interfaz de red:**

   ```bash
   sudo arp-scan -I eth0 192.168.0.0/16
   ```

   Escanea la subred `192.168.0.0` utilizando la interfaz de red `eth0`.

4. **Guardar resultados en un archivo:**

   ```bash
   sudo arp-scan 192.168.2.0/24 > resultados.txt
   ```

   Redirige la salida del comando a un archivo de texto llamado `resultados.txt` para futura referencia.

5. **Escaneo silencioso (modo tranquilo):**

   ```bash
   sudo arp-scan --quiet --interface wlan0 10.0.0.0/24
   ```

   Realiza un escaneo silencioso, solo mostrando los resultados en lugar de información adicional.

6. **Escaneo en modo promiscuo:**

   ```bash
   sudo arp-scan --interface eth1 --promisc 192.168.10.0/24
   ```

   Realiza un escaneo en modo promiscuo en la interfaz de red `eth1`, lo que puede ayudar a detectar más dispositivos en la red.

7. **Escaneo con resolución de nombres DNS:**

   ```bash
   sudo arp-scan --dns 192.168.3.0/24
   ```

   Realiza un escaneo y resuelve nombres DNS para las direcciones IP encontradas.


---













