
![[header_ethical_hacking.jpg]]
# Clase 24.08.2023

Notas clase taller ciberseguridad UNAB - 24.08.2023

---
**Tags:** #info #bash #linux #ciberseguridad #tool 

> [!info] Volver a [[Home]] | [[Ciberseguridad]]

---
### Objetivo de la clase

Enumeración de equipos de red usando software de línea de comandos en Kali Linux.









   ```bash
   wget https://example.com/archivo.txt
   ```



---

Revisión de trabajo
Kali en modo bridge network (Adaptador Puente)

identificar la mayor cantidad de computadores o elementos con IP encendida

1. Tomar imagen de ipconfig e ifconfig
   
2. 
3. -Pn
4. Cada vez qeu se ejecute un nmap, guardar archivos html y agregarlos como anexo
5. Dejar metasplotaible como modo puente


Para guardar los resultados de la búsqueda utilizamos el comando
- -oN para .txt
- -oX para XML

Ejemplo: nmap -p- --open -sV 10.0.2.8 -oX escan_nmap_def.xml
Para leer el archivo recién creado podemos usar:
xsltproc escan_nmap_def.xml -o escan_nmap_def.html

---

Para este host, identificado con la IP `192.168.100.46` se utilizó el comando `nmap` con las siguientes opciones:
```
nmap -p 3306,1433,5432 192.168.100.46 -oX resultado_escaneo_BD_192.168.100.46.xml
```

Usando el comando `xsltproc` se exportaron los resultados a `HTML`.
  ```
xsltproc /usr/share/nmap/nmap.xsl resultado_escaneo_BD_192.168.100.46.xml > resultado_escaneo_BD_192.168.100.46.html
  ```

---

**nmap -p- 192.168.100.46 -oX resultado_escaneo_profundo_192.168.100.46.xml**


```
nmap -p- 192.168.100.46 -oX resultado_escaneo_profundo_192.168.100.46.xml
```


Para la fase de escaneo:
- Nessus es buena a nivel de infraestructura
- Burpsuite
- Acunetix (de invicti)
- Ridge
- Qualys
- Tenable
- Gartner
- OWASP Zap
- Vega application security tool
- Nikto (busca problemas de configuración en sitios web)

Aplicación para probar vulnerabilidades
- [http://scanme.nmap.org/](http://scanme.nmap.org)
- testphp.vulnweb.com
- [http://altoromutual.com](http://altoromutual.com/ "http://altoromutual.com")

Nmap tiene también un buscador de vulnerabilidades
- locate *.nse

Kali - CMS & Framework Identification

gvmstart

---

**Riesgo residual:** Toma relevancia en aplicaciones web
qué es?

Diferencia entre ambiente de testing, desarrollo y producción en servidores

