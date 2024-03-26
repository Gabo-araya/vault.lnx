![[header_tux.jpg]]
# Script para ejecutar nmap en múltiples subdominios

---
**Tags:** #info #hacking #tool #kali #revisar 

> [!info] Volver a [[Home]] | [[Ciberseguridad]] 

---

Se asume que el usuario está usando un sistema linux basado en Debian con gestor de paquetes apt o aptitude. Kali Linux ya tiene instalado nmap.

---
## `subdominios_scan_nmap.py`

```python
# -*- coding: utf-8 -*-
"""
Script: subdominios_scan_nmap.py
Versión: 1.0
Fecha: 19.08.2023

Instrucciones:
 - Asegúrate de tener instalado "nmap" en tu sistema.
 - Modifica la lista "subdominios_unab" con los nombres de dominios y subdominios que necesites.
 - Ejecuta este script para realizar las consultas con "nmap" y guardar los resultados en un archivo.
"""

import subprocess

def escanear_puertos(archivo_subdominios):
    with open(archivo_subdominios, 'r') as archivo:
        subdominios = archivo.read().splitlines()
    for subdominio in subdominios:
        # Construir el nombre del archivo de resultados para el subdominio actual
        nombre_archivo = f"resultados_{subdominio.replace('.', '_')}.txt"

        # Construir y ejecutar el comando nmap para escanear todos los puertos del subdominio
        comando_nmap = f'nmap -sV -Pn {subdominio}'
        resultado = subprocess.run(comando_nmap, shell=True, capture_output=True, text=True)

        # Guardar los resultados en el archivo correspondiente al subdominio
        with open(nombre_archivo, 'w') as archivo_salida:
            archivo_salida.write(f"Resultados para {subdominio}:\n")
            archivo_salida.write(resultado.stdout)
            archivo_salida.write("\n" + "=" * 40 + "\n\n")
            print(f"{subdominio} analizado y guardado.\n")

if __name__ == '__main__':
    archivo_subdominios = 'ips_unab.txt'
    escanear_puertos(archivo_subdominios)
    print("Escaneo de puertos completado. Resultados guardados en archivos individuales.")


    with open(archivo_salida, 'w') as archivo_salida:
        for subdominio in subdominios:
            # Construir y ejecutar el comando nmap para el escaneo
            comando_nmap = f'nmap -sV --script safe,discovery {subdominio}'
            resultado = subprocess.run(comando_nmap, shell=True, capture_output=True, text=True)
            
            # Escribir los resultados en el archivo de salida
            archivo_salida.write(f"Resultados para {subdominio}:\n")
            archivo_salida.write(resultado.stdout)
            archivo_salida.write("\n" + "=" * 40 + "\n\n")

if __name__ == '__main__':
    archivo_subdominios = 'subdominios_unab.txt'
    archivo_salida = 'resultados_vulnerabilidades_subdominios_unab.txt'
    
    # Llamar a la función para realizar el escaneo de vulnerabilidades
    escanear_subdominios(archivo_subdominios, archivo_salida)
    
    print("Escaneo de vulnerabilidades completado. Resultados guardados en", archivo_salida)
```

---
