![[header_terminal.jpg]]
# Conocer la IP del dispositivo

---
**Tags:** #info #bash 
**Fecha creación:** 03.08.2023
**Fecha ultima modificación:** 03.08.2023

> [!info] Volver a [[Home]] | [[Ciberseguridad]]

---

>[!abstract] Temario
> * [[#Conocer la ip del dispositivo]]
> * [[#Conectarse vía ssh al servidor]]

---

## Conocer la ip del dispositivo

```
hostname -I
```

```
ifconfig
```

```
ifconfig eth0
```

```
ip addr
```

```
ip addr show
```

```
ip a
```

```
curl ifconfig.me
```

```
nmcli -p device show
```


---
## Conectarse vía ssh al servidor

> [!tip] **Revisar la guía [[Comando ssh]]**

```
ssh 192.168.2.40
```

Ingresar contraseña

---
