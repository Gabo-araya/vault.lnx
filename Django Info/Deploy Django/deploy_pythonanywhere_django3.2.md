# Despliegue en PythonAnywhere

_Configuraciones para instalar este proyecto Django 3.2 en PythonAnywhere._

***
Tags:  #django #codigo #linux #readme 
***

## Información inicial

> [!info] 
> Lo primero a tener en cuenta si estás usando una cuenta gratuita, es tener paciencia. Estas instrucciones sirven para una instalación de un blog creado en Django usando un diseño personalizado.
> 
> Se sugiere revisar la documentación oficial de PyhtonAnywhere: [Deploying an existing Django project on PythonAnywhere](https://help.pythonanywhere.com/pages/DeployExistingDjangoProject/)
> 
> Se usaron las siguientes versiones base en local:
> * Lenguaje de programación: Pyhton 3.6.9
> * Gestor de paquetes: Pip 9.0.1
> * Framework web: Django 3.2.16
> * Base de datos: Sqlite3
>
>Estas son las versiones en servidor pythonanywhere actualmente:
>
>* Lenguaje de programación: Pyhton 3.6.15
>* Gestor de paquetes: pip 21.3.1 from /home/usuario/.virtualenvs/venv/lib/python3.6/site-packages/pip (python 3.6)
>* Framework web: Django 3.2.16
>* Base de datos: Sqlite3

### Ayuda

[Deploy a Django web app to Python Anywhere [FREE]](https://www.youtube.com/watch?v=xtnUwvjOThg)

![](https://www.youtube.com/watch?v=xtnUwvjOThg)

[How to Deploy Django Web App to Pythonanywhere (with static files and media)](https://www.youtube.com/watch?v=Gnwm7fQnt2c)

![](https://www.youtube.com/watch?v=Gnwm7fQnt2c)


---

## Pasos para Despliegue 📦

Acceder a pythonanywhere
- [PythonAnywhere.com/gaboaraya](https://www.pythonanywhere.com/user/gaboaraya/)
- Agregar usuario y password
- [https://www.pythonanywhere.com/user/gaboaraya/](https://www.pythonanywhere.com/user/gaboaraya/)

Abrir una nueva consola de bash
- Versiones de python se ubican en `/usr/bin/`
- Revisamos la versión instalada de Python en el virtualenv con `python3 --version`
- Revisamos la versión instalada de Pip en el virtualenv con `pip --version`
- Revisamos la versión instalada de Django en el virtualenv con `python3 manage.py --version`

---
### 1. Comandos generales para configuración en servidor

Generar token en github para el servidor (no usar este)
```
ghp_gfpEiMWfNyrTZOT8o4STKfxf7y6YkP3QL3v3
```

Clonar repositorio privado de github
```
git clone https://[username]:[token]@github.com/[username]/[repo]
```

```
git clone https://Gabo-araya:ghp_gfpEiMWfNyrTZOT8o4STKfxf7y6YkP3QL3v3@github.com/Gabo-araya/repositorio
```

Instalar los requerimientos
```
pip install -r requirements.txt
```

Crear entorno virtual "venv"
```
mkvirtualenv --python=/usr/bin/python3.6 venv
```

Activar entorno virtual
 ```
 source /home/usuario/.virtualenvs/venv/bin/activate
 ```

---
### 2. Pasos de configuración para creación de nueva webapp en pythonanywhere

* Crear nueva web app:
	- [https://www.pythonanywhere.com/user/gaboaraya/webapps/](https://www.pythonanywhere.com/user/gaboaraya/webapps/)
	- Nombre: `gaboaraya.pythonanywhere.com`
* **Paso: Crear nuevo framework de python**
	- Escoger **configuración manual**
	- Manual Configuration
		- La configuración manual implica editar su propio archivo de configuración WSGI en `/var/www/`. Por lo general, esto importa una aplicación compatible con WSGI que ha almacenado en otro lugar
		- Cuando haga clic en "Siguiente", crearemos un archivo WSGI para usted, incluida una aplicación simple "Hello World" que puede usar para comenzar, así como algunos comentarios sobre cómo usar otros marcos.
		- También podrá especificar un virtualenv para usar en su aplicación.
* **Paso: Seleccionar versión de python**
	- Versiones desde 3.6 a 3.10
	- Escoger Python 3.6
* **Paso: Seleccionar `virtualenv`**
	* Bajar hasta la sección `virtualenv`
	- Agregar el virtualenv `venv` creado anteriormente
	
```
/home/usuario/.virtualenvs/venv
```

---
### 3. Configurar static files

Revisar: [How to setup static files in Django](https://help.pythonanywhere.com/pages/DjangoStaticFiles)

1. Bajar hasta la sección "Static files"
2. Agregar datos de static
**URL**
```
/static/
```

**Directory**
```
/home/usuario/proyecto
```

3. Agregar datos de media
**URL**
```
/media/
```

**Directory**
```
/home/usuario/proyecto
```

4. Agregar datos de staticfiles
**URL**
```
/staticfiles/
```
 
**Directory**	
```
/home/usuario/proyecto
```

5. Luego, en la terminal insertar el comando para recolectar los archivos estáticos
```
python manage.py collectstatic
```
 
---
### 4. Modificar WSGI

Acceder al archivo de configuracioń WSGI

1. Bajar hasta la sección de "Code"
2. Pinchar en WSGI configuration file para editar: `/var/www/proyecto_pythonanywhere_com_wsgi.py`
3. Bajar hasta la sección de Django
	- (Opcional): eliminar el codigo comentado no usado
	- Estructura de `path = /home/[usuario]/[proyecto]/`
	- Asegurarse de cambiar `os.environ['DJANGO_SETTINGS_MODULE'] = '[proyecto].settings'`
	- Descomentar las líneas comentadas hasta conseguir un código similar al siguiente:

```
# +++++++++++ DJANGO +++++++++++
# To use your own django app use code like this:
import os
import sys

## assuming your django settings file is at 
## '/home/usuario/proyecto/core/settings.py'
## and your manage.py is is at '/home/usuario/proyecto/manage.py'

path = '/home/usuario/proyecto'
if path not in sys.path:
	sys.path.append(path)

os.environ['DJANGO_SETTINGS_MODULE'] = 'core.settings'

## then:
from django.core.wsgi import get_wsgi_application
application = get_wsgi_application()
```

  ---
### 5. Otras configuraciones

**Modificar settings.py**
- Agregar "proyecto.pythonanywhere.com" dentro de allowed_hosts
- `ALLOWED_HOSTS = ['proyecto.pythonanywhere.com']`
- Cambiar `DEBUG = False`

**Recargar web app**
- https://www.pythonanywhere.com/user/gaboaraya/webapps/
- Presionar botón `Reload proyecto.pythonanywhere.com`
- Finalmente, para acceder al sitio del proyecto: [https://proyecto.pythonanywhere.com/](https://proyecto.pythonanywhere.com/)

> [!warning] Importante
> Cada vez que se hacen cambios a las configuraciones es necesario recargar la webapp.

---
### 6. Otra info

* [Using MySQL](https://help.pythonanywhere.com/pages/UsingMySQL/)
* [How To Migrate Sqlite To MySql Database In Django On PythonAnyWhere](https://www.youtube.com/watch?v=e8fD9lU6qy4)

---
