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
## 1. Django

Django es un framework web de alto nivel que permite el desarrollo rápido de sitios web seguros y mantenibles. Desarrollado por programadores experimentados, Django se encarga de gran parte de las complicaciones del desarrollo web, por lo que puedes concentrarte en escribir tu aplicación sin necesidad de reinventar la rueda. Es gratuito y de código abierto, tiene una comunidad próspera y activa, una gran documentación y muchas opciones de soporte gratuito y de pago.

### 1.1 Modelo Vista Template
Django trabaja con la estructura de diseño Modelo-Vista-Template
![[modelo_vista_template.png]]

La lógica de negocio está en la vista y al usuario se le muestra un template, a diferencia del modelo Vista-Controlador, donde no existe lógica en la vista.

![[django_process.gif]]

### 1.2 Ventajas

#### 1.2.1 Completo

Django sigue la filosofía "Baterías incluidas" y provee casi todo lo que los desarrolladores quisieran que tenga "de fábrica". Porque todo lo que necesitas es parte de un único "producto", todo funciona a la perfección, sigue principios de diseño consistentes y tiene una amplia y actualizada documentación.

#### 1.2.2 Versátil

Django puede ser (y ha sido) usado para construir casi cualquier tipo de sitio web — desde sistemas manejadores de contenidos y wikis, hasta redes sociales y sitios de noticias. Puede funcionar con cualquier framework en el lado del cliente, y puede devolver contenido en casi cualquier formato (incluyendo HTML, RSS feeds, JSON, XML, etc).

Internamente, mientras ofrece opciones para casi cualquier funcionalidad que desees (distintos motores de base de datos, motores de plantillas, etc.), también puede ser extendido para usar otros componentes si es necesario.

#### 1.2.3 Seguro

Django ayuda a los desarrolladores evitar varios errores comunes de seguridad al proveer un framework que ha sido diseñado para "hacer lo correcto" para proteger el sitio web automáticamente. Por ejemplo, Django, proporciona una manera segura de administrar cuentas de usuario y contraseñas, evitando así errores comunes como colocar informaciones de sesión en cookies donde es vulnerable (en lugar de eso las cookies solo contienen una clave y los datos se almacenan en la base de datos) o se almacenan directamente las contraseñas en un hash de contraseñas.

Un hash de contraseña es un valor de longitud fija creado al enviar la contraseña a una cryptographic hash function. Django puede validar si la contraseña ingresada es correcta enviándola a través de una función hash y comparando la salida con el valor hash almacenado. Sin embargo, debido a la naturaleza "unidireccional" de la función, incluso si un valor hash almacenado se ve comprometido es difícil para un atacante resolver la contraseña original.

Django permite protección contra algunas vulnerabilidades de forma predeterminada, incluida la inyección SQL, scripts entre sitios, falsificación de solicitudes entre sitios y clickjacking.

#### 1.2.4 Escalable

Django usa un componente basado en la arquitectura “shared-nothing” (cada parte de la arquitectura es independiente de las otras, y por lo tanto puede ser reemplazado o cambiado si es necesario). Teniendo en cuenta una clara separación entre las diferentes partes significa que puede escalar para aumentar el tráfico al agregar hardware en cualquier nivel: servidores de caché, servidores de bases de datos o servidores de aplicación. Algunos de los sitios más concurridos han escalado a Django para satisfacer sus demandas (por ejemplo, Instagram y Disqus, por nombrar solo dos).

#### 1.2.5 Mantenible

El código de Django está escrito usando principios y patrones de diseño para fomentar la creación de código mantenible y reutilizable. En particular, utiliza el principio No te repitas "Don't Repeat Yourself" (DRY) para que no exista una duplicación innecesaria, reduciendo la cantidad de código. Django también promueve la agrupación de la funcionalidad relacionada en "aplicaciones" reutilizables y en un nivel más bajo, agrupa código relacionado en módulos (siguiendo el patrón Model View Controller (MVC)).

#### 1.2.6 Portable

Django está escrito en Python, el cual se ejecuta en muchas plataformas. Lo que significa que no está sujeto a ninguna plataforma en particular, y puede ejecutar sus aplicaciones en muchas distribuciones de Linux, Windows y Mac OS X. Además, Django cuenta con el respaldo de muchos proveedores de alojamiento web, y que a menudo proporcionan una infraestructura específica y documentación para el alojamiento de sitios de Django.

---
## 2. Pre-requisitos

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

---
## 3. Comandos para instalación y configuración de Django

### 3.1 Configuración de entorno local

* Revisar versión de python. Linux puede tener más de una versión de python instalada.
```
$ python3 --version
$ python --version // versión de python 2
```

* Instalacion de pip
`pip` es un sistema de gestión de paquetes utilizado para instalar y administrar paquetes de software escritos en Python. Para instalar paquetes pip en Python 3 se debe utilizar el comando `pip3`.
```
$ sudo apt install python-pip3
```

* Instalación de virtualenv
Video de apoyo: [Entornos Virituales (virtualenv) de Python en Visual Studio Code](https://www.youtube.com/watch?v=2kLYOzNb3uU)

![https://www.youtube.com/watch?v=2kLYOzNb3uU](https://www.youtube.com/watch?v=2kLYOzNb3uU)

```
pip3 install virtualenv
```

```
virtualenv --version
```

A veces también se necesita instalar el venv en python3

```
sudo apt-get python3-venv
```

### 3.2 Entorno virtual e instalación de Django

Por orden, es ideal que los entornos virtuales se guarden todos en el mismo lugar. Aunque algunos prefieren que vaya junto con cada proyecto. Para gustos, colores.

* Crear entorno virtual

Este comando creará un entorno virtual llamado `env` en el directorio `~/envs/usuario/`
```
python3 -m venv /home/gabo/envs/usuario/env
```


Si ya estás en la carpeta donde se guardarán los virtualenv:
```
python3 -m venv env
```

![[django_virtualenv.png]]

* Activar entorno virtual
```
source /home/gabo/envs/usuario/env/bin/activate
```

```
source ~/envs/usuario/env/bin/activate
```

* Para desactivar el entorno virtual y volver al entorno global se usa este comando:

```
(env) $ deactivate
```

* Congelar los paquetes instalados en el env
```
pip3 freeze > requirements.txt
```

* Instalar los requerimientos
```
python3 -m pip install -r requirements.txt
```

* Instalación de Django
```
pip3 install django
```

Para instalar una versión específica de Django
```
pip3 install django==3.0.7
```


### 3.2 Configuración de Django

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

![[django_manage.py_runserver.png]]

Una vez hecho esto, podemos acceder a la url: [http://127.0.0.1:8000/](http://127.0.0.1:8000/) para visitar esta instalación de Django

![[django_succesful_installation.png]]


---
### 3.3 Crear aplicaciones

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

Luego se debe ir a settings.py de la instalación de Django y agregar la aplicación a la lista INSTALLED_APPS

![[django_installed_apps.png]]

---
### 3.4 Instalar paquetes útiles

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


