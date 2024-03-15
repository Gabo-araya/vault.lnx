# Scan: kila.devel.newtenberg.com - 03.2024


## Credenciales de acceso

**User**

```
admin
```


**Password**

```
238ba5a5-91b3-436f-aa2a-3599f5a96ce1
```


## 1. Traceroute domain

```
traceroute kila.devel.newtenberg.com
```

Salida de terminal
```
┌──(kali㉿kali)-[~]
└─$ traceroute kila.devel.newtenberg.com  
traceroute to kila.devel.newtenberg.com (161.0.162.166), 30 hops max, 60 byte packets
 1  10.0.2.2 (10.0.2.2)  0.183 ms  0.140 ms  0.117 ms
 2  _gateway (192.168.100.1)  2.504 ms  1.329 ms  2.457 ms
 3  100.64.0.1 (100.64.0.1)  4.858 ms  4.837 ms  4.810 ms
 4  10.84.21.19 (10.84.21.19)  4.790 ms  5.137 ms  4.746 ms
 5  10.87.0.46 (10.87.0.46)  5.890 ms  6.614 ms  6.187 ms
 6  Orbyta-262237.SCL.PITChile.cl (45.68.16.60)  5.740 ms  5.899 ms  5.859 ms
 7  166.162.0.161.orbyta.com.in-addr.arpa (161.0.162.166)  5.834 ms  5.469 ms  5.868 ms

```


## 2. nmap -sP

```
nmap -sP 161.0.162.0/24
```

Salida de terminal
```
┌──(kali㉿kali)-[~]
└─$ nmap -sP 161.0.162.0/24
Starting Nmap 7.94SVN ( https://nmap.org ) at 2024-03-14 12:10 EDT
Nmap scan report for 26.162.0.161.orbyta.com.in-addr.arpa (161.0.162.26)
Host is up (0.049s latency).
Nmap scan report for 33.162.0.161.orbyta.com.in-addr.arpa (161.0.162.33)
Host is up (0.0053s latency).
Nmap scan report for 42.162.0.161.orbyta.com.in-addr.arpa (161.0.162.42)
Host is up (0.034s latency).
Nmap scan report for 58.162.0.161.orbyta.com.in-addr.arpa (161.0.162.58)
Host is up (0.0053s latency).
Nmap scan report for 66.162.0.161.orbyta.com.in-addr.arpa (161.0.162.66)
Host is up (0.039s latency).
Nmap scan report for 82.162.0.161.orbyta.com.in-addr.arpa (161.0.162.82)
Host is up (0.040s latency).
Nmap scan report for 83.162.0.161.orbyta.com.in-addr.arpa (161.0.162.83)
Host is up (0.040s latency).
Nmap scan report for 84.162.0.161.orbyta.com.in-addr.arpa (161.0.162.84)
Host is up (0.040s latency).
Nmap scan report for 85.162.0.161.orbyta.com.in-addr.arpa (161.0.162.85)
Host is up (0.040s latency).
Nmap scan report for smtp.servidorcorreo.cl (161.0.162.86)
Host is up (0.040s latency).
Nmap scan report for 87.162.0.161.orbyta.com.in-addr.arpa (161.0.162.87)
Host is up (0.040s latency).
Nmap scan report for 90.162.0.161.orbyta.com.in-addr.arpa (161.0.162.90)
Host is up (0.049s latency).
Nmap scan report for 91.162.0.161.orbyta.com.in-addr.arpa (161.0.162.91)
Host is up (0.026s latency).
Nmap scan report for 94.162.0.161.orbyta.com.in-addr.arpa (161.0.162.94)
Host is up (0.035s latency).
Nmap scan report for 100.162.0.161.orbyta.com.in-addr.arpa (161.0.162.100)
Host is up (0.0059s latency).
Nmap scan report for 101.162.0.161.orbyta.com.in-addr.arpa (161.0.162.101)
Host is up (0.0065s latency).
Nmap scan report for 107.162.0.161.orbyta.com.in-addr.arpa (161.0.162.107)
Host is up (0.0058s latency).
Nmap scan report for 114.162.0.161.orbyta.com.in-addr.arpa (161.0.162.114)
Host is up (0.0072s latency).
Nmap scan report for 122.162.0.161.orbyta.com.in-addr.arpa (161.0.162.122)
Host is up (0.029s latency).
Nmap scan report for 146.162.0.161.orbyta.com.in-addr.arpa (161.0.162.146)
Host is up (0.048s latency).
Nmap scan report for 154.162.0.161.orbyta.com.in-addr.arpa (161.0.162.154)
Host is up (0.0074s latency).
Nmap scan report for 162.162.0.161.orbyta.com.in-addr.arpa (161.0.162.162)
Host is up (0.0044s latency).
Nmap scan report for 163.162.0.161.orbyta.com.in-addr.arpa (161.0.162.163)
Host is up (0.0060s latency).
Nmap scan report for 164.162.0.161.orbyta.com.in-addr.arpa (161.0.162.164)
Host is up (0.0050s latency).
Nmap scan report for 165.162.0.161.orbyta.com.in-addr.arpa (161.0.162.165)
Host is up (0.0059s latency).
Nmap scan report for 166.162.0.161.orbyta.com.in-addr.arpa (161.0.162.166)
Host is up (0.0059s latency).
Nmap scan report for 167.162.0.161.orbyta.com.in-addr.arpa (161.0.162.167)
Host is up (0.0055s latency).
Nmap scan report for 168.162.0.161.orbyta.com.in-addr.arpa (161.0.162.168)
Host is up (0.0063s latency).
Nmap scan report for 169.162.0.161.orbyta.com.in-addr.arpa (161.0.162.169)
Host is up (0.0054s latency).
Nmap scan report for 170.162.0.161.orbyta.com.in-addr.arpa (161.0.162.170)
Host is up (0.0053s latency).
Nmap scan report for 171.162.0.161.orbyta.com.in-addr.arpa (161.0.162.171)
Host is up (0.032s latency).
Nmap scan report for 184.162.0.161.orbyta.com.in-addr.arpa (161.0.162.184)
Host is up (0.0057s latency).
Nmap scan report for 185.162.0.161.orbyta.com.in-addr.arpa (161.0.162.185)
Host is up (0.0057s latency).
Nmap scan report for 186.162.0.161.orbyta.com.in-addr.arpa (161.0.162.186)
Host is up (0.0058s latency).
Nmap scan report for 187.162.0.161.orbyta.com.in-addr.arpa (161.0.162.187)
Host is up (0.021s latency).
Nmap scan report for 188.162.0.161.orbyta.com.in-addr.arpa (161.0.162.188)
Host is up (0.0069s latency).
Nmap scan report for 189.162.0.161.orbyta.com.in-addr.arpa (161.0.162.189)
Host is up (0.0052s latency).
Nmap scan report for 190.162.0.161.orbyta.com.in-addr.arpa (161.0.162.190)
Host is up (0.0067s latency).
Nmap scan report for 235.162.0.161.orbyta.com.in-addr.arpa (161.0.162.235)
Host is up (0.029s latency).
Nmap scan report for 237.162.0.161.orbyta.com.in-addr.arpa (161.0.162.237)
Host is up (0.012s latency).
Nmap scan report for 238.162.0.161.orbyta.com.in-addr.arpa (161.0.162.238)
Host is up (0.029s latency).
Nmap scan report for 243.162.0.161.orbyta.com.in-addr.arpa (161.0.162.243)
Host is up (0.0063s latency).
Nmap scan report for 246.162.0.161.orbyta.com.in-addr.arpa (161.0.162.246)
Host is up (0.0080s latency).
Nmap scan report for 248.162.0.161.orbyta.com.in-addr.arpa (161.0.162.248)
Host is up (0.0075s latency).
Nmap scan report for 250.162.0.161.orbyta.com.in-addr.arpa (161.0.162.250)
Host is up (0.0074s latency).
Nmap scan report for 252.162.0.161.orbyta.com.in-addr.arpa (161.0.162.252)
Host is up (0.0069s latency).
Nmap scan report for 253.162.0.161.orbyta.com.in-addr.arpa (161.0.162.253)
Host is up (0.0069s latency).
Nmap scan report for 254.162.0.161.orbyta.com.in-addr.arpa (161.0.162.254)
Host is up (0.0073s latency).
Nmap done: 256 IP addresses (48 hosts up) scanned in 8.91 seconds

```

### Comando que extrae las IP limpias
```
nmap -sP 161.0.162.0/24 | awk '/is up/ {print up}; {gsub (/\(|\)/,""); up = $NF}'
```

Salida de terminal
```
┌──(kali㉿kali)-[~]
└─$ nmap -sP 161.0.162.0/24 | awk '/is up/ {print up}; {gsub (/\(|\)/,""); up = $NF}'
161.0.162.26
161.0.162.33
161.0.162.42
161.0.162.58
161.0.162.66
161.0.162.82
161.0.162.83
161.0.162.84
161.0.162.85
161.0.162.86
161.0.162.87
161.0.162.90
161.0.162.91
161.0.162.94
161.0.162.100
161.0.162.101
161.0.162.107
161.0.162.114
161.0.162.122
161.0.162.146
161.0.162.154
161.0.162.162
161.0.162.163
161.0.162.164
161.0.162.165
161.0.162.166
161.0.162.167
161.0.162.168
161.0.162.169
161.0.162.170
161.0.162.171
161.0.162.184
161.0.162.185
161.0.162.186
161.0.162.187
161.0.162.188
161.0.162.189
161.0.162.190
161.0.162.235
161.0.162.237
161.0.162.238
161.0.162.243
161.0.162.246
161.0.162.248
161.0.162.250
161.0.162.252
161.0.162.253
161.0.162.254

```

## 3. OpenVAS Scans > New Task


![[Selección_851.png]]

QoD: Quality of Detection

Se recomienda realizar 2 escaneos, uno con QoD 70% y otro con QoD 30% porque es posible que con QoD 70% no aparezcan algunas vulnerabilidades.

Además, se configuró:
* "Maximum concurrently scanned hosts" de 20 a 2
* "Maximum concurrently executed NVTs per hosts" se mantuvo en 4

En paralelo, se revisó el funcionamiento de la máquina kali con `htop`

![[Selección_852.png]]





















