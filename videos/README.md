# videos

## Features 

* [x] Display thumbnails with title
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
    
    12. Edit: data/videos.json: copy response of http://www.piecioshka.io/videos

13. Edit: main.js: make a HTTP request

    ```js
    fetch("data/videos.json")
        .then((response) => {
            return response.json();
        })
        .then((videos) => {
            console.log(videos)
        });
    ```

14. Edit: main.js: create a function:

    ```js
    function displayVideos(videos) {
        const $main = document.querySelector("main");
        const $videoList = document.createElement('div');
        $videoList.classList.add('video-list');
        videos.forEach((video) => {
             const $thumb = document.createElement("img");
            $thumb.src = video.thumbUrl;
            
            const $title = document.createElement("h3");
            $title.textContent = video.title;
            const $body = document.createElement("p");
            $body.textContent = video.description;
            
            const $container = document.createElement("section");
            $container.classList.add('video');
            $container.append($thumb);
            $container.append($title);
            $container.append($body);
            
            $videoList.append($container);
        });
          $main.append($videoList);
    }
    ```

15. Edit: styles/components/video-list.css

    ```css
    .video-list {
        display: flex;
        justify-content: space-around;
        flex-wrap: wrap;
    }
    .video-list .video {
        width: 300px;
        margin: 0 10px;
    }
    .video-list .video h3 {
        margin: 0 0 5px 0;
    }
    ```

16. Edit: index.html: attach `styles/components/video-list.css`

    ```html
    <link rel="stylesheet" href="styles/components/video-list.css" />
    ```
    
17. Edit: main.js: extract making a request to data/videos.json to function

    ```js
    function fetchVideos() {
        return fetch("data/videos.json").then((response) => {
            return response.json();
        });
    }
    ```

    so `main` function will looks like:

    ```js
    function main() {
        fetchVideos().then((videos) => {
            displayVideos(videos);
        });
    }
    ```
    18. Edit: `scripts/components/video-list.js`: move `displayVideos` fn to this file

19. Edit: `index.html`: attach `scripts/components/video-list.js`

    ```html
    <script src="scripts/components/video-list.js" defer></script>
    ```

20. Edit: `scripts/services/videos.js`: move `fetchVideo` fn to this file

21. Edit: `index.html`: attach `scripts/services/videos.js`

    ```html
    <script src="scripts/services/videos.js" defer></script>
    ```

22. Edit: `scripts/main.js`: use `addEventListener` to wait for page load

    ```js
    window.addEventListener('load', main);
    ```
    23. Edit: `scripts/components/registration.js`: create a fn `displayRegistration`:

    ```js
    function displayRegistration() {
        
    }
    ```

24. Edit: `index.html`: attach `scripts/components/registration.js`

    ```html
    <script src="scripts/components/registration.js" defer></script>
    ```

25. Edit: `scripts/components/registration.js`: create a markup

    ```js
    function displayRegistration() {
        const template = `
            <form id="registration-form">
                <div>
                    <label>
                        E-mail:
                        <input type="text" name="email" placeholder="E-mail" value="piecioshka@gmail.com">
                    </label>
                </div>
                <div>
                    <label>
                        Hasło:
                        <input type="text" name="password" placeholder="Hasło" value="123">
                    </label>
                </div>
                <div>
                    <label>
                        Imię:
                        <input type="text" name="name" placeholder="Imię" value="Piotr">
                    </label>
                </div>
                <div>
                    <label>
                        Nazwisko:
                        <input type="text" name="surname" placeholder="Nazwisko" value="Kowalski">
                    </label>
                </div>
                <button type="submit">Zarejestruj się</button>
            </form>
            `;
        const $main = document.querySelector("main");
        $main.innerHTML = template;
    }
    ```
    
    26. Edit: `scripts/components/registration.js`: create `setupRegistration`

    ```js
    function setupRegistration() {
        const $form = document.querySelector("#registration-form");
        $form?.addEventListener("submit", (evt) => {
            // Stop refresh the page
            evt.preventDefault();
            // Collect data from <form>
            const formData = new FormData($form);
            // Convert data to object literal , eg. { name: 'Piotr' }
            const fields = Object.fromEntries(formData.entries());
            // LocalStorage: get item
            const freshSerializedUsers = localStorage.getItem("users") ?? "[]";
            // Deserialization
            const users = JSON.parse(freshSerializedUsers);
            // Mutate an Array (add new item)
            users.push(fields);
            // Serialization
            const serializedUsers = JSON.stringify(users);
            // LocalStorage: update item
            localStorage.setItem("users", serializedUsers);
        });
    }
    ```
    
    27. Edit: `index.html`: attach `scripts/components/login.js`
    ```html
    <script src="scripts/components/login.js" defer></script>
    ```
28. Edit: `scripts/components/login.js`: display login form
    ```js
    function displayLogin() {
        const template = `
            <form id="login-form">
                <div>
                    <label>
                        E-mail:
                        <input type="text" name="email" placeholder="E-mail" value="piecioshka@gmail.com">
                    </label>
                </div>
                <div>
                    <label>
                        Hasło:
                        <input type="text" name="password" placeholder="Hasło" value="123">
                    </label>
                </div>
                <button type="submit">Zaloguj się</button>
            </form>
        `;
        const $main = document.querySelector("main");
        $main.innerHTML = template;
    }
    ```
    