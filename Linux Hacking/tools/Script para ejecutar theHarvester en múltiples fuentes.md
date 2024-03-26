![[header_tux.jpg]]
# Script para ejecutar theHarvester en múltiples fuentes

---
**Tags:** #info #hacking #tool #kali #revisar 

> [!info] Volver a [[Home]] | [[Ciberseguridad]] 

---

Se asume que el usuario está usando un sistema linux basado en Debian con gestor de paquetes apt o aptitude. Kali Linux ya tiene instalado theHarvester.

---
## `multi_theHarvester_1.0.py`

```python
# -*- coding: utf-8 -*-
"""
Script: multi_theHarvester_1.0.py
Versión: 1.0
Fecha: 28.07.2023

Instrucciones:
 - Asegúrate de tener instalado "theHarvester" en tu sistema.
 - Modifica la lista "servicios_dispontibles" con los nombres de servicios de "theHarvester".
 - Ejecuta este script para realizar las consultas con "theHarvester" y guardar los resultados en archivos de registro individuales.
"""

import subprocess
import multiprocessing

target = "example.com"

def execute_theHarvester(servicio):
    # Comando theHarvester con el nombre como argumento
    # command = f"theHarvester -d google.com -l 200 -b {servicio} -f log_{servicio}.html"
    command = f"theHarvester -d {target} -l 200 -b {servicio}"
    
    # Ejecutar el comando y capturar la salida
    try:
        output = subprocess.check_output(command, shell=True, text=True)
    except subprocess.CalledProcessError as e:
        output = f"Error al ejecutar theHarvester para {servicio}: {e}"

    # Escribir la salida en el archivo de log
    nombre_archivo = f"log.txt"
    with open(nombre_archivo, "a") as log_file:
        log_file.write(f"Resultados para {servicio}:\n")
        log_file.write(output)
        log_file.write("\n\n")

# Lista de nombres de servicios
nombres_servicios = ["anubis", "baidu", "bevigil", "binaryedge", "bing", "bingapi", "bufferoverun", "brave", "censys", "certspotter", "criminalip", "crtsh", "dnsdumpster", "duckduckgo", "fullhunt", "github-code", "hackertarget", "hunter", "hunterhow", "intelx", "otx", "pentesttools", "projectdiscovery", "rapiddns", "rocketreach", "securityTrails", "sitedossier", "subdomainfinderc99", "threatminer", "urlscan", "virustotal", "yahoo", "zoomeye"]

# Función auxiliar para el procesamiento en paralelo
def process_name(servicio):
    execute_theHarvester(servicio)
    print(f"Ejecutando {servicio}")

# Pool de procesos con el mismo número de núcleos del CPU
num_cores = multiprocessing.cpu_count()
pool = multiprocessing.Pool(processes=num_cores)

# Utilizar el método map para asignar los nombres a los procesos de la pool
pool.map(process_name, nombres_servicios)

# Cerrar la pool y esperar a que todos los procesos finalicen
pool.close()
pool.join()
```

---
