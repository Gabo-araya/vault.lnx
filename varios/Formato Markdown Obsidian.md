![[header.jpg]]
# Formato Markdown Obsidian

Este es el readme de mi configuración de Obsidian
***
**Tags:**  #docs #obsidian #readme #info

> [!info] Volver a [[Home]]

***

>[!abstract] Temario
> * [[#1. Obsidian docs]]
> * [[#2. Ejemplos de formato]]
> 	* [[#2.1 Títulos]]
> 	* [[#2.2 Formato de texto]]
> * [[#3. Código]]
> 	* [[#3.1 Inline code]]
> 	* [[#3.2 Code blocks]]
> 	* [[#3.3 Code Structure]]
> * [[#4. External links]]
> * [[#5. Callouts]]
> * [[#6. External images]]
> * [[#7. Lists]]
> * [[#8. Task lists]]
> * [[#9. Horizontal bar]]
> * [[#10. Tables]]
> 	* [[#10.1 Format content within a table]]
> * [[#11. Footnotes]]
> * [[#12. Comments]]
> * [[#13. Learn more]]

---
## 1. Obsidian docs

* Ayuda de Obsidian
	* [Basic formatting](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax)
	* [Advanced formatting](https://help.obsidian.md/Editing+and+formatting/Advanced+formatting+syntax)

Video de ayuda: [Every USEFUL Markdown Syntax That I Use in Obsidian](https://www.youtube.com/watch?v=d8fXEhWy_rY)

![](https://www.youtube.com/watch?v=d8fXEhWy_rY)

---
## 2. Ejemplos de formato
Estos son algunos ejemplos de formato que se pueden usar

### 2.1 Títulos

> [!example] Títulos
> # This is a heading 1 
> ## This is a heading 2 
> ### This is a heading 3 
> #### This is a heading 4 
> ##### This is a heading 5 
> ###### This is a heading 6

### 2.2 Formato de texto

> [!example] Formato de texto
> **Bold text**
> *Italic text*
> ~~Striked out text~~
> ==Highlighted text==
> **Bold text and _nested italic_ text**
> ***Bold and italic text***

---
## 3. Código

### 3.1 Inline code

You can format code within a sentence using single backticks.

```md
Text inside `backticks` on a line will be formatted like code.
```

Text inside `backticks` on a line will be formatted like code.

### 3.2 Code blocks

To format a block of code, surround the code with triple backticks.

````
```
cd ~/Desktop
```
````

```md
cd ~/Desktop
```

You can also create a code block by indenting the text using `Tab` or 4 blank spaces.

```md
    cd ~/Desktop
```

You can add syntax highlighting to a code block, by adding a language code after the first set of backticks.

````md
```js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```
````

```js
function fancyAlert(arg) {
  if(arg) {
    $.facebox({div:'#foo'})
  }
}
```

Obsidian uses Prism for syntax highlighting. For more information, refer to [Supported languages](https://prismjs.com/#supported-languages).

>[!Note]
>[Live Preview mode](https://help.obsidian.md/Live+preview+update) doesn't support PrismJS and may render syntax highlighting differently.

### 3.3 Code Structure

```
Now Ui Kit
├── CHANGELOG.md
├── assets
│   ├── css
│   │   ├── bootstrap.min.css
│   │   ├── demo.css
│   │   └── now-ui-kit.css
│   ├── fonts
│   ├── img
│   ├── js
│   │   ├── core
│   │   │   ├── bootstrap.min.js
│   │   │   ├── jquery.3.2.1.min.js
│   │   │   └── popper.min.js
│   │   ├── now-ui-kit.js
│   │   └── plugins
│   │       ├── bootstrap-datetimepicker.js
│   │       ├── bootstrap-switch.js
│   │       └── nouislider.min.js
├── documentation
│   ├── template.html
│   └── tutorial-components.html
├── examples
│   ├── landing-page.html
│   ├── login-page.html
│   └── profile-page.html
├── index.html
└── nucleo-icons.html
```

---
## 4. External links

If you want to link to an external URL, you can create an inline link by surrounding the link text in brackets (`[ ]`), and then the URL in parentheses (`( )`).

```md
[Obsidian Help](https://help.obsidian.md)
```

[Obsidian Help](https://help.obsidian.md/)

>[!Tip] Tip
> If you want to link to a file inside your vault, consider using an [internal link](https://help.obsidian.md/Linking+notes+and+files/Internal+links) instead.
> See also this post: [URL Scheme: direct navigation to heading](https://forum.obsidian.md/t/url-scheme-direct-navigation-to-heading/5907/26)

You can also create external links to files in other vaults, by linking to an [Obsidian URI](https://help.obsidian.md/Advanced+topics/Using+Obsidian+URI).

```md
[Note](obsidian://open?vault=MainVault&file=Note.md)
```

### 4.1 Escape blank spaces in links

If your URL contains blank spaces, you need to escape them by replacing them with `%20`.

```md
[My Note](obsidian://open?vault=MainVault&file=My%20Note.md)
```

You can also escape the URL by wrapping it with angled brackets (`< >`).

```md
[My Note](<obsidian://open?vault=MainVault&file=My Note.md>)
```

***
## 5. Callouts 

Para crear citas o mensajes

> **Cita**
> Human beings face ever more complex and urgent problems, and their effectiveness in dealing with these problems is a matter that is critical to the stability and continued progress of society. 
\ - Doug Engelbart, 1961


> [!info] Cita
> Human beings face ever more complex and urgent problems, and their effectiveness in dealing with these problems is a matter that is critical to the stability and continued progress of society. 


> [!tip] Title-only callout


> [!info] 
> Here's a callout block. 
> It supports **Markdown**, [[Internal link|Wikilinks]], and [[Embed files|embeds]]!


> [!note] 
> Lorem ipsum dolor sit amet


> [!warning] 
> Lorem ipsum dolor sit amet


> [!abstract] 
> Lorem ipsum dolor sit amet
> Aliases: `summary`, `tldr`


> [!info] 
> Lorem ipsum dolor sit amet


> [!todo] 
> Lorem ipsum dolor sit amet


> [!tip] Tip
> Lorem ipsum dolor sit amet
> Aliases: `hint`, `important`


> [!success] 
> Lorem ipsum dolor sit amet
> Aliases: `check`, `done`


> [!question]
> Lorem ipsum dolor sit amet
> Aliases: `help`, `faq`


> [!warning] 
> Lorem ipsum dolor sit amet
> Aliases: `caution`, `attention`


> [!failure] 
> Lorem ipsum dolor sit amet
> Aliases: `fail`, `missing`


> [!danger] 
> Lorem ipsum dolor sit amet
> Alias: `error`


> [!bug] 
> Lorem ipsum dolor sit amet


> [!example] 
> Lorem ipsum dolor sit amet


> [!quote] 
>  Lorem ipsum dolor sit amet
>  Alias: `cite`


> [!faq]- Are callouts foldable?
> Yes! In a foldable callout, the contents are hidden when the callout is collapsed.


> [!question] Can callouts be nested? 
> > [!todo] Yes!, they can. 
> > > [!example] You can even use multiple layers of nesting.

---
## 6. External images

You can add images with external URLs, by adding a `!` symbol before an [external link](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#External%20links).

```md
![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

![Engelbart](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)

You can change the image dimensions, by adding `|640x480` to the link destination, where 640 is the width and 480 is the height.

```md
![Engelbart|100x145](https://history-computer.com/ModernComputer/Basis/images/Engelbart.jpg)
```

If you only specify the width, the image scales according to its original aspect ratio. For example, `![[Engelbart.jpg|100]]`.

>[!Tip]
>If you want to add an image from inside your vault, you can also [embed an image in a note](https://help.obsidian.md/Linking+notes+and+files/Embedding+files#Embed%20an%20image%20in%20a%20note).


***
## 7. Lists

You can create an unordered list by adding a `-`, `*`, or `+` before the text.

```md
- First list item
- Second list item
- Third list item
```

- First list item
- Second list item
- Third list item

To create an ordered list, start each line with a number followed by a `.` symbol.

```md
1. First list item
2. Second list item
3. Third list item
```

1. First list item
2. Second list item
3. Third list item

You can create a nested list by indenting one of more list items.

```md
1. First list item
   1. Ordered nested list item
2. Second list item
   - Unordered nested list item
```

1. First list item
    1. Ordered nested list item
2. Second list item
    - Unordered nested list item

You can press `Tab` or `Shift+Tab` to indent or unindent one of more selected list items.

## 8. Task lists

To create a task list, start each list item with a hyphen and space followed by `[ ]`.

```md
- [x] This is a completed task.
- [ ] This is an incomplete task.
```

- [x] This is a completed task.
- [ ] This is an incomplete task.

You can toggle a task in Reading view by selecting the checkbox.

Tip

You can use any character inside the brackets to mark it as complete.

```md
- [x] Milk
- [?] Eggs
- [-] Eggs
```

- [x] Milk
- [x] Eggs
- [x] Eggs

***
## 9. Horizontal bar

You can use three or more stars `***`, hypens `---`, or underscore `___` on its own line to add a horizontal bar. You can also separate symbols using spaces.

```md
***
****
* * *
---
----
- - -
___
____
_ _ _
```

---
## 10. Tables

You can create table using vertical bars (`|`) and hyphens (`-`). Vertical bars separate columns, and hyphens define the column header.

```md
| First name | Last name |
| ---------- | --------- |
| Max        | Planck    |
| Marie      | Curie     |
```

|First name|Last name|
|---|---|
|Max|Planck|
|Marie|Curie|

The vertical bars or either side of the table are optional.

Cells don't need to be perfectly aligned with the columns. Each header row must have at least two hyphens.

```md
First name | Last name
-- | --
Max | Planck
Marie | Curie
```

### 10.1 Format content within a table

You can use [basic formatting syntax](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax) to style content within a table.

|First column|Second column|
|---|---|
|[Internal links](https://help.obsidian.md/Linking+notes+and+files/Internal+links)|Link to a file _within_ your **vault**.|
|[Embedding files](https://help.obsidian.md/Linking+notes+and+files/Embedding+files)||

Vertical bars in tables

If you want to use [aliases](https://help.obsidian.md/Linking+notes+and+files/Aliases), or to [resize an image](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax#External%20images) in your table, you need to add a `\` before the vertical bar.

```md
First column | Second column
-- | --
[[Basic formatting syntax\|Markdown syntax]] | ![[og-image.png\|200]]
```

|First column|Second column|
|---|---|
|[Markdown syntax](https://help.obsidian.md/Editing+and+formatting/Basic+formatting+syntax)||

You can align text to the left, right, or center of a column by adding colons (`:`) to the header row.

```md
Left-aligned text | Center-aligned text | Right-aligned text
:-- | :--: | --:
Content | Content | Content
```

|Left-aligned text|Center-aligned text|Right-aligned text|
|:--|:-:|--:|
|Content|Content|Content|

***
## 11. Footnotes

You can add footnotes[[1]](https://publish.obsidian.md/#fn-1-b3ba8c86f59306d6) to your notes using the following syntax:

```md
This is a simple footnote[^1].

[^1]: This is the referenced text.
[^2]: Add 2 spaces at the start of each new line.
  This lets you write footnotes that span multiple lines.
[^note]: Named footnotes still appears as numbers, but can make it easier to identify and link references.
```

You can also inline footnotes in a sentence. Note that the caret goes outside the brackets.

```md
You can also use inline footnotes. ^[This is an inline footnote.]
```

---
## 12. Comments

You can add comments by wrapping text with `%%`. Comments are only visible in Editing view.

```md
This is an %%inline%% comment.

%%
This is a block comment.

Block comments can span multiple lines.
%%
```

%%
This is a block comment.

Block comments can span multiple lines.
%%

***
## 13. Learn more

To learn more advanced formatting syntax, such as tables, diagrams, and math expressions, refer to [Advanced formatting syntax](https://help.obsidian.md/Editing+and+formatting/Advanced+formatting+syntax).

To learn more about how Obsidian parses Markdown, refer to [Obsidian Flavored Markdown](https://help.obsidian.md/Editing+and+formatting/Obsidian+Flavored+Markdown).

---

1. This is a footnote.[↩︎](https://publish.obsidian.md/#fnref-1-b3ba8c86f59306d6)


