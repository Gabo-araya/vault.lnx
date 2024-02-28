![[header_keyboard.jpg]]
# Datos iniciales GitHub

_Estos son los datos iniciales de GitHub._

---
Tags:  #github #codigo #linux #readme #ampliar #arreglar 

> [!info] Volver a [[Home]] | [[Configuración de GIT con GitHub]]

---
## 1. Configurar git local con github por primera vez

1. Instalar git
```bash
sudo apt install git
```

2. Mostrar la versión de git
```bash
git --version
```

3. Configuración global de usuario de github
```bash
git config --global user.name "Github-USER"
```

4. Configuración global de email de github
```bash
git config --global user.email "usuario@mail.com"
```

5. Mostrar lista de configuraciones de git
```bash
git config --list
```

6. Crear una clave ssh y agregarla al agente
```bash
ssh-keygen -t ed25519 -C "usuario@mail.com"
```

	6.1 Agregar el token de la cuenta de github
```bash
ghp_TOKEN_GENERADO_EN_GITHUB
```

	6.2 Se debe guardar en el archivo `/home/usuario/.ssh/id_ed25519`
```bash
/home/usuario/.ssh/id_ed25519
```

	6.3 El resultado es el siguiente
```bash
usuario@host:~$ ssh-keygen -t ed25519 -C "usuario@mail.com"
Generating public/private ed25519 key pair.
Enter file in which to save the key (/home/usuario/.ssh/id_ed25519): /home/usuario/.ssh/id_ed25519
Enter passphrase (empty for no passphrase): 
Enter same passphrase again: 
Your identification has been saved in /home/usuario/.ssh/id_ed25519
Your public key has been saved in /home/usuario/.ssh/id_ed25519.pub
The key fingerprint is:
SHA256:ZFdnJwbJ3KlNxBu/oJDs3KlNxSWJVJd13ZFdn[REDACTED] usuario@mail.com
The key\'s randomart image is:
+--[ED25519 256]--+
|    F    . .E**=+|
|       o =.o+XB+O|
|   X     X ..o+O+|
|  . .  * o . .+.o|
|      . S .  o.. |
|     o o      .  |
|    . o o        |
|       o .     8 |
|   (    .        |
+----[SHA256]-----+
```

7. Iniciar el agente ssh en segundo plano
```shell
$ eval "$(ssh-agent -s)"
> Agent pid 59566
```

8. Agregar la llave privada al ssh-agent
```shell
ssh-add ~/.ssh/id_ed25519
```

9. Agregar la llave ssh pública a la configuración de github
```shell
$ cat ~/.ssh/id_ed25519.pub
# Then select and copy the contents of the id_ed25519.pub file
# displayed in the terminal to your clipboard
```

10. Copiar la salida del comando anterior y agregarla como nueva llave SSH en github: [https://github.com/settings/keys](https://github.com/settings/keys)


---
## 2. Subir contenidos a github por primera vez

Ingresar a la carpeta que queremos subir a github
```bash
cd /home/usuario/obsidian/
```

Iniciar git en la carpeta
```bash
git init
```

Conocer el status de git en la carpeta
```bash
git status
```

Agregar todos los archivos al commit
```bash
git add .
```

Enviar el commit con un mensaje
```bash
git commit -m "Notas iniciales"
```

Cambiar a rama main
```bash
git branch -M main
```

Agregar origen para el repositorio
```bash
git remote add origin git@github.com:Github-USER/obsidian.git
```

Hacer push de los cambios al repositorio de github
```bash
git push -u origin main
```

---
## 3. Datos iniciales
### 3.1 Create a new repository on the command line

	echo "# obsidian" >> README.md
	git init
	git add README.md
	git commit -m "first commit"
	git branch -M main
	git remote add origin https://github.com/Github-USER/obsidian.git
	git push -u origin main

	git remote set-url origin https://github.com/Github-USER/obsidian.git

### 3.2 Push an existing repository from the command line

	git remote add origin git@github.com:Github-USER/obsidian.git
	[OLD] git remote add origin https://github.com/Github-USER/obsidian.git
	git branch -M main
	git push -u origin main

---
## 4. Desglose de comandos
### 4.1 Create a new repository on the command line

* Crear un archivo README.md

```
echo "# obsidian" >> README.md
```

* Inicializar un repositorio git

```
git init
```

* Agregar README.md en el repositorio git

```
git add README.md
```

  * Generar un commit con el comentario "first commit"

```
git commit -m "first commit"
```

 * Cambiarse a la rama "main"

```
git branch -M main
```

  * Agregar el origen externo de GitHub

```
git remote add origin https://github.com/Github-USER/obsidian.git
```

  * Enviar los cambios de la rama "main" del repositorio git local a la rama "main" del repositorio en GitHub

```
git push -u origin main
```

### 4.2 Push an existing repository from the command line

* Agregar el origen externo de GitHub

```
git remote add origin https://github.com/Github-USER/obsidian.git
```

* Cambiarse a la rama "main"

```
git branch -M main
```

* Enviar los cambios de la rama "main" del repositorio git local a la rama "main" del repositorio en GitHub

```
git push -u origin main
```

---
## 5. Consejos para realizar commits de calidad

Las descripciones de los commits son una forma importante de comunicar y documentar los cambios en el código. Una buena descripción facilita la colaboración y la comprensión del historial de cambios por parte de tu equipo y futuros desarrolladores.

Consejos para escribir descripciones útiles y claras al usar el comando `git commit -m "descripcion"`:

1. **Sé conciso pero descriptivo:** Intenta resumir el propósito del commit en una sola línea, pero asegúrate de que sea lo suficientemente descriptivo para que otros puedan entender de qué se trata el cambio.

2. **Usa un lenguaje claro:** Evita jerga o abreviaturas que puedan no ser comprensibles para otros miembros del equipo. Utiliza un lenguaje claro y preciso.

3. **Comienza con un verbo en tiempo presente:** Inicia la descripción con un verbo en tiempo presente que describa la acción principal del commit. Por ejemplo, "Corrige", "Agrega", "Actualiza", etc.

4. **Especifica qué se cambió:** Detalla qué se modificó o agregó en este commit. Esto ayuda a otros a comprender los cambios realizados.

5. **Menciona la razón o contexto:** Si es relevante, proporciona un contexto o una razón para el cambio. ¿Por qué se hizo esta modificación?

6. **Relaciónalo con tareas o problemas:** Si tu equipo utiliza una herramienta de seguimiento de problemas o tareas, considera mencionar el número o el título relacionado con la tarea que se está abordando en este commit.

7. **Evita descripciones genéricas:** Trata de evitar descripciones genéricas como "Arreglo de errores" o "Actualización de código". En lugar de eso, sé más específico sobre el problema o el aspecto del código que estás abordando.

8. **Utiliza el tiempo presente:** Aunque el commit se haya realizado en el pasado, utiliza el tiempo presente en la descripción para que parezca que está ocurriendo en el momento del commit.

9. **Agrega un máximo de 50-72 caracteres:** Intenta mantener la descripción en este rango para que sea fácil de leer en diferentes interfaces y herramientas.

10. **Revisa antes de confirmar:** Antes de hacer el commit, tómate un momento para leer la descripción y asegurarte de que sea precisa y comprensible.

11. **Evita cambios masivos en un solo commit:** Si es posible, intenta hacer cambios más pequeños y específicos en cada commit en lugar de cambios masivos en un solo commit. Esto hace que los cambios sean más manejables y fáciles de entender.



---
