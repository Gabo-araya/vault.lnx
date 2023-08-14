![[header_keyboard.jpg]]
# Datos iniciales GitHub

_Estos son los datos iniciales de GitHub._

***
Tags:  #github #codigo #linux #readme #ampliar #arreglar 
***

## **Create a new repository on the command line**

* Crear un archivo README.md

```
echo "# gaboaraya" >> README.md
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
git remote add origin https://github.com/Gabo-araya/gaboaraya.git
```

  * Enviar los cambios de la rama "main" del repositorio git local a la rama "main" del repositorio en GitHub

```
git push -u origin main
```

## **Push an existing repository from the command line**

* Agregar el origen externo de GitHub

```
git remote add origin https://github.com/Gabo-araya/gaboaraya.git
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

## Datos iniciales GitHub

Estos son los datos iniciales de GitHub

### Create a new repository on the command line

	echo "# obsidian" >> README.md
	git init
	git add README.md
	git commit -m "first commit"
	git branch -M main
	git remote add origin https://github.com/Gabo-araya/obsidian.git
	git push -u origin main
	
	git remote set-url origin https://github.com/Gabo-araya/obsidian.git
	Token: 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

### Push an existing repository from the command line

	git remote add origin git@github.com:Gabo-araya/obsidian.git
	[OLD] git remote add origin https://github.com/Gabo-araya/obsidian.git
	git branch -M main
	git push -u origin main

---

