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