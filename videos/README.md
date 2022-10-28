# videos

## Features 

* [] Display thumbnails with title
* [] Register user + store user in LocalStorage
* [] Login user + store login status in SessionStorage
* [] Logout user
* [] Profile page with other videos
* [] Navigation: redirect to home page when click on logo

## Step by step

## Build a project

* Terminal: `npm init -y`
* Terminal: `npm i -D http-server`
* Create file: `.gitignore`

    node_modules/

* Create file: `index.html`

    hello world

* Edit: `package.json`

   ```json
    "scripts": {
        "start": "http-server"
    },
    ```

* Terminal: `npm start`

## Step by step 🐾

1. Create files:
    + index.html
    + scripts/main.js
    + styles/main.css
    
2. Edit: main.js: create a main function and call it

    ```js
    function main() {
        console.log('main');
    }

    main();
    ```
3. Edit: index.html: embed "scripts/main.js"

    ```html
    <script src="scripts/main.js" defer></script>
    ```
4. Edit: index.html: embed "styles/main.css"

    ```html
    <link rel="stylesheet" href="styles/main.css">
    ```
5. Edit: main.css: set background-color for `body`

    Use: https://colors.piecioshka.pl/
    ```css
    body {
        background-color: #efefef;
    }
    ```
6. Edit: index.html: create basic layout

    ```html
    <div id="app">
        <header>
            <h1>Videos</h1>
            <h1>
                <a href="#">Videos</a>
            </h1>
            <p>Zobacz swoje ulubione filmy</p>

            <nav id="menu">
                <ul>
                    <li>
                        <a href="#/registration">Rejestracja</a>
                    </li>
                    <li>
                        <a href="#/login">Logowanie</a>
                    </li>
                </ul>
            </nav>
        </header>

        <main></main>

        <footer>
            <p>Copyright &copy; 2022</p>
        </footer>
    </div>
    ```
    
    7. Edit: main.css: draw basic layout

    ```css
    #page {
        width: 960px;
        margin: 0 auto;
    }
    main {
        padding: 10px 0;
    }
    footer {
         background-color: #918bbe;
        text-align: center;
        padding: 5px 0;
    }
    ```
    
    
8. Edit: index.html: set title

    ```html
    <title>Videos</title>
    ```
    
      Good practice: title should be before any `<link>` & `<script>` tags


9. Edit: index.html: set document type

    ```html
    <!DOCTYPE html>
    ```
    
    10. Edit: styles/components/menu.css: create basic layout

    ```css
    #menu {
        background-color: #918bbe;
    }
    #menu ul {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: flex-end;
    }
    #menu ul li {
        margin: 5px;
    }
    #menu ul li a {
        color: #fff;
    }
    ```

11. Edit: index.html: add menu.css

    ```html
    <link rel="stylesheet" href="styles/components/menu.css" />
    ```
    