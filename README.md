#Sandy

Sandy is a sandbox intended for prototyping and user-testing new features that are still in the exploratory phase.

##File Structure

```
- /css
- /fonts
- /js
- /test
|- index.html
|- test.css

```

###css

This is the main stylesheet ripped out of the app.
Minified css.

###fonts

These these are the fonts (icon font included) needed to produce a convincing prototype,
the logo and button icons are in here.

###js

jQuery and any plugins, used for any/all tests.

###test

Basic rules for creating a new prototype:

- Each test gets its own `directory`
- Each test gets its own `image directory`
- Each test gets its own `css directory`

###test/index.html

- Inline the JavaScript at the bottom of the document.
- Each "page" or "state" is denoted as an element `<form class="shelf shelf--<shelf_name>">`, this is mostly beneficial for "flows" that need click-through progression.


##Why not Sass?

This is to force as little authoring as possible as well as to facilitate the app's given
css modules as much as possible.

