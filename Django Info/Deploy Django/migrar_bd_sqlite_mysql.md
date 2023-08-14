
# Migrar base de datos Sqlite a MySql

***
Tags:   #codigo #sqlite #mysql
***

1. Instalar el paquete para manejar BD de mysql
```
pip install mysqlclient
```

2. Acceder al directorio donde se encuentra manage.py
```
cd /home/usuario/proyecto
```

3. Para acceder al shell de la base de datos Sqlite
```
python manage.py dbshell
```

4. Exportar Sqlite db a json
```
python manage.py dumpdata > mysqldb.json
```

5. Crear nueva base de datos mysql
	- https://www.pythonanywhere.com/user/gaboaraya/databases/
	- Crear una base de datos
	- Agregar el password y confirmarlo

6. Editar archivo `settings.py`
	- Comentar sección de base de datos de Sqlite
	- Escribir un código similar al siguiente:

```
DATABASES = {
	'default': {
		'ENGINE': 'django.db.backends.mysql',
		'NAME': '[nombre de bd]',
		'USER': '[usuario]',
		'PASSWORD': '[password]',
		'HOST': '[proyecto.mysql.pythonanywhere-services.com]',
		'PORT': '3306',
	}
}
```

7. Ejecutar comando de migración de BD para crear la estructura
```
python manage.py migrate
```

8. Cargar archivo json con la información de la BD
```
python manage.py loaddata mysqldb.json
```

9. Para asegurarse que Django está usando la nueva BD MySql
```
python manage.py dbshell
```


