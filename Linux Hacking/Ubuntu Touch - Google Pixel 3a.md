![[header_terminal.jpg]]
# Ubuntu Touch - Google Pixel 3a

---
Tags: #info

> [!info] Volver a [[Home]] | [[Ciberseguridad]]

---
## Instalar Ubuntu Touch en Google Pixel 3a XL

>[!tip] Instrucciones en Youtube
>- [Installing Ubuntu Touch on Google Pixel 3a XL](https://www.youtube.com/watch?v=v3nZSKsedr4&ab_channel=Lumpology)
>- [Desbloquear bootloader Google pixel 3A (Bootloader unlocked)](https://www.youtube.com/watch?v=uNET60AYnvw&pp=ygUkZ29vZ2xlIHBpeGVsIDNhIHhsIHVubG9jayBib290bG9hZGVy)
>- [All Google Pixel Bootloader Unlock Instant [Flash/Root/Custom OS Install] - 2021](https://www.youtube.com/watch?v=Px_vJZH5oKU&ab_channel=NUnlocker)

Para desbloquear el bootloader, se deben poner los siguientes comandos con el teléfono conectado al computador. 

Para montar los dispositivos móviles conectados
```
fastboot devices 
```

Para desbloquear el dispositivo
```
fastboot flashing unlock
```

---
## Actualizar Ubuntu Touch

Ingresar como superusuario
  - `sudo -s`
  - [Ingresar contraseña]

Comando para montar el sistema para escritura
```
sudo mount -o remount,rw /
````

Actualizar el sistema operativo
```
sudo apt update && sudo apt upgrade -y
```

---



