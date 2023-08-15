![[header_keyboard.jpg]]
# Django - Información de Configuración

---
Tags:  #django #codigo #linux #readme 

> [!info] Volver a [[Home]]

>[!tip] **Revisar la guía [[Advanced Django Cheat Sheet]]**

---

>[!abstract] Temario
> * [[#1. Pre-requisitos]]
> * [[#2. Comandos para configuración local]]
> * [[#3. Comandos para configuración de Django]]
> * [[#4. Aplicaciones creadas]]
> * [[#5. Paquetes instalados]]

---
## 1. Pre-requisitos

_Esta es una lista de los paquetes que deben estar instalados previamente:_

* **Python 3**
	- [Ayuda - https://docs.microsoft.com/en-us/windows/python/beginners)](https://docs.microsoft.com/en-us/windows/python/beginners)
	- [Curso Django desde Cero en youtube](https://www.youtube.com/watch?v=vo4VF3neyrs)
	- [Video del proyecto por Dennis Ivy](https://www.youtube.com/watch?v=llbtoQTt4qw)

* **Pip**
	- [Ayuda - https://tecnonucleous.com/2018/01/28/como-instalar-pip-para-python-en-windows-mac-y-linux/](https://tecnonucleous.com/2018/01/28/como-instalar-pip-para-python-en-windows-mac-y-linux/)

* **Virtualenv**
	- [Ayuda - https://techexpert.tips/es/windows-es/instalacion-del-entorno-virtual-de-python-en-windows/](https://techexpert.tips/es/windows-es/instalacion-del-entorno-virtual-de-python-en-windows/)

---
## 2. Comandos para configuración local

* Crear entorno virtual
```
python3 -m venv /home/gabo/envs/gaboaraya/env
```

* Activar entorno virtual
```
source /home/gabo/envs/gaboaraya/env/bin/activate
```

* Congelar los paquetes instalados en el env
```
pip3 freeze > requirements.txt
```

* Instalar los requerimientos
```
python3 -m pip install -r requirements.txt
```

---
## 3. Comandos para configuración de Django

* Instalación de Django
```
pip3 install django
```

* Crear proyecto llamado "core". Por el punto al final, instala el proyecto en la misma carpeta en la que se encuentra el usuario.
```
django-admin startproject core .
```

* Crear migraciones
```
python3 manage.py makemigrations
```

* Crear migraciones con chequeo previo
```
python3 manage.py makemigrations --check
```

* Realizar migraciones creadas
```
python3 manage.py migrate
```

* Crear un superusuario
```
python3 manage.py createsuperuser
```

* Correr servidor en puerto 8000
```
python3 manage.py runserver
```

* Correr servidor en puerto 9000
```
python3 manage.py runserver 9000
```

---
## 4. Aplicaciones creadas

* Contiene lógica de login y recuperacion de password
```
python3 manage.py startapp login
```

* Contiene artículos de portafolio
```
python3 manage.py startapp portafolio
```

* Contiene artículos de website (FrontEnd)
```
python3 manage.py startapp website
```

* Contiene panel de administración (BackEnd)
```
python3 manage.py startapp panel
```

---
## 5. Paquetes instalados

* Editor WYSIWYG en campos textarea
```
pip3 install django-ckeditor
```

* Filtros automáticos en tablas
```
pip3 install django-filter
```

* Trabajar con imágenes
```
pip3 install Pillow
```

* Trabajar con static files en el mismo servidor cpanel
```
pip3 install whitenoise
```

* Esconder datos importantes en github
```
pip3 install python-decouple
```

* Trabajar con Choices en selects
```
pip3 install django-model-utils
```

* Usar mysql
```
pip3 install mysqlclient
```


