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