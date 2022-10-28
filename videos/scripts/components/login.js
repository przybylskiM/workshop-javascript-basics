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