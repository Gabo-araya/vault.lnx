![[header_hacker.jpg]]
# Dataview ejemplos
tags: #obsidian 

---

> [!info] Volver a [[Home]] 

---

> [!tip] Note: This tip requires the use of a community plugin called [Dataview](https://blacksmithgu.github.io/obsidian-dataview/). See [how to use community plugins here](https://obsidian.rocks/how-to-use-community-plugins-in-obsidian/).
> Más informacion en los siguientes vínculos:
> - https://willcodefor.beer/posts/dataview
> - https://obsidian.rocks/dataview-in-obsidian-a-beginners-guide/
> - https://obsidian.rocks/quick-tip-quickly-organize-notes-in-obsidian/
> - https://blacksmithgu.github.io/obsidian-dataview/
> - https://s-blu.github.io/basic-dataview-query-builder/
> - Se pueden revisar más ejemplos en este video: [Tutorial DATAVIEW 2023 con ejemplos - El mejor plugin de OBSIDIAN](https://www.youtube.com/watch?v=PDJH-IoLD28)
> - Otro video: https://www.youtube.com/watch?v=8yjNuiSBSAM
> - Cómo crear MOCs: https://www.youtube.com/watch?v=WUq8Pun28FI


![](https://www.youtube.com/watch?v=PDJH-IoLD28)

---
### Lista simple
```dataview
LIST
FROM ""
WHERE file.name = "Home"
```
---
### Lista con atributos

Fecha de creación
```dataview
LIST file.ctime
FROM ""
WHERE file.name = "Home"
```


Fecha de modificación
```dataview
LIST file.mtime
FROM ""
WHERE file.name = "Home"
```

---
### Tabla un solo archivo

```dataview
TABLE 
FROM ""
WHERE file.name = "Dataview ejemplos"
```

```dataview
TABLE file.ctime AS "Creado", file.mtime AS "Modif.", file.tags AS "Tags"
FROM ""
WHERE file.name = "Home"
```

---
### Tabla con tags

```dataview
TABLE file.ctime AS "Creado", file.mtime AS "Modif.", file.tags AS "Tags"
FROM ""
```
---
### Tabla sin tags

```dataview
TABLE file.ctime AS "Creado", file.mtime AS "Modif."
FROM ""
```













