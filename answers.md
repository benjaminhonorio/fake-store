# Preguntas

## ¿Cuáles son las ceremonias más importantes de un Sprint y cuál es la idea de cada una?

- Sprint Planning: Donde se planifica lo que se hará en el sprint por el tiempo que este dure. Se reune no solo el equipo de desarrolladores, sino el product owner tambien. La idea es priorizar lo que se debe hacer durante el sprint.
- Daily Meetings: Donde se reune el equipo por un espacio de tiempo corto como 15 minutos, para informar el progreso de los miembros del equipo.
- Sprint Review: Donde se reune el equipo para compartir lo que se ha completado durante el sprint, asi como para recibir feedback del cliente.
- Retrospective: Donde se reune el equipo para revisar la forma de trabajo del equipo para mejorar el siguiente sprint.

## ¿Qué son los Wireframes? Nombra al menos una herramienta que podamos utilizar.

Son bocetos de una pagina web generalmente en escala de grises que permite visualizar la estructura general de la pagina web. Se puede utilizar Moqup, Figma, entre otras herramientas para realziar estos wireframes y mas.

## Explicar la diferencia entre var, let y const. Y dar un ejemplo en qué caso se utilizará.

Se utilizan para declarar variables. Var es la forma antigua para hacerlo. Una variable declarada con var tendra scope local y puede cambiar su valor.
Let y const son las formas modernas de declarar variables.
Let es similar a var en que puede cambiar su valor pero usa lexical scoping, es decir existe siempre dentro del bloque donde fue declarado.
Por otro lado const no permite cambiar el valor de la variable declarada con el y tambien usa lexical scoping.

## ¿Cuáles son los tres comandos que se pueden utilizar para crear una nueva rama llamada rama-1?

- git branch rama-1
  Las siguientes se usan para crear una rama y pasarse a ella de inmediato
- git checkout -b rama-1
- git switch -c rama-1

## Explicar la diferencia entre git merge y git rebase.

git merge permite unir ramas distintas y sus commits en una sola. Puede hacerlo a traves de un nuevo commit si usa three way merge, o no, si usa fast-forward merge.
git rebase hace lo mismo de unir ramas pero mueve la historia de una rama y la coloca encima de la otra. Esto evita la creacion de commits merge y da el aspecto de una rama mas limpia.

## ¿Cuál es la diferencia entre Pull Request (PR) y el comando git pull?

git pull permite traer cambios de un repositorio remoto al local, uniendo (si puede) las historias de la rama remota y local. Si no puede alerta al desarrollador para realizar cambios y hacer merge.
git pull es la union de git fetch y git merge en un solo comando.
Un pull request es cuando un desarrollador propone integrar sus cambios a una rama de algun proyecto.

## ¿Qué es el Virtual DOM?

El Virtual DOM es la representacion javascript del DOM que hace React para que los desarrolladores la manipulen sin afectar al DOM real.

## Dado el siguiente codePen, el cual solo tiene un HTML, por medio de css llegar a esta respuesta. Imagen. (Para mostrar los servicios debes usar CSS Flexbox o CSS Grid).

Aqui mi respuesta: [codePen](https://codepen.io/carloshonorio/pen/YzrQXeo)
