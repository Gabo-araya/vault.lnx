![[header_tux.jpg]]
# Install raspi-config on Ubuntu 20.04 (LTS)

---
**Tags:**  #github #codigo #linux #readme #server #rpi

> [!info] Volver a [[Home]] | [[Ciberseguridad]] 

---

Instrucciones para instalar montar un servidor UBUNTU headless en Raspberry Pi 2
https://linuxtut.com/en/a252676a3ce6bd1410da/

---

## Introduction

I was able to buy the Raspberry pi 4 (2GB) a little cheaper at the end of the year sale.

I didn't plan to use it right away, but after confirming the initial failure, I tried running Rosetta @ home (project software that supports analysis of the new Corona (COVID-19)) on the Raspberry pi.

A 64-bit environment is required to run Rosetta @ home, and instead of the standard OS of Raspberry pi 4 (Raspberry pi OS, official version is only 32-bit, 64-bit is still beta version), Ubuntu Server 20.04 LTS (64-bit) I installed it. However, raspi-config is not included and it was necessary to install it separately, so I will summarize it.

## Environment

The environment is quite suitable because it is mainly for initial defect confirmation.

Raspberry pi 4 (2GB) Ubuntu Server 20.04 LTS (64-bit)

At the time of writing (as of December 20, 2020), the Raspberry pi 4 available in Japan has a model with 2GB/4GB/8GB of installed memory. I chose the 2GB model simply because it was cheap

I chose the Ubuntu Server version because the Raspberry pi 4 I purchased had only 2GB of memory and I couldn't install the Desktop version, and I didn't need a GUI in the first place.

I chose Ubuntu 20.04 LTS because it was the only LTS version of Ubuntu that can be installed with Rasberry Pi Imager V1.5 (Windows version) at the time of writing (as of December 20, 2020) (18.04 LTS is also 2023). Supported until April). I chose the LTS version because I didn't plan to touch it for a while, so it would be better if the support period was long.

## raspi-config installation procedure

I referred to @ ivvakanni's Post "The story of installing raspi-config on ubuntu 18.04 and changing the initial setting of GPIO"

```
sudo echo "deb http://archive.raspberrypi.org/debian/ buster main" >> /etc/apt/sources.list
sudo apt-key adv --keyserver hkp://keyserver.ubuntu.com:80 --recv-keys 7FA3303E
sudo apt-get update
sudo apt-get install raspi-config
sudo mount /dev/mmcblk0p1 /boot
```

The point is to change jessie (debian 8.0) to buster (debian 10.0). If you leave jessie as it is, an error will occur.

In Ubuntu 20.04 LTS, / etc/debian_version is bullseye/sid, so it seems to be based on bullseye (debian 11.0). Since http://archive.raspberrypi.org/ does not have bullseye, I chose buster. There seems to be no problem so far.

## Finally

In the first place, it seems that raspi-config is not essential if you change various configuration files, but I plan to install a genuine GPIO fan (which can be set with raspi-config) in the future, so I installed it.

If it doesn't work when using GUI in desktop environment, please try it with CUI (console).


