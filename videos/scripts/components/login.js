function setupLogin() {
    const $form = document.querySelector("#login-form");
    $form?.addEventListener("submit", (evt) => {
      evt.preventDefault();
  
      const formData = new FormData($form);
  
      const fields = Object.fromEntries(formData.entries());
  
      const freshSerializedUsers = localStorage.getItem("users") ?? "[]";
  
      const users = JSON.parse(freshSerializedUsers);
  
      const foundUser = users.find((user) => {
        return user.email === fields.email && user.password === fields.password;
      });
  
      if (foundUser !== undefined) {
        console.log("użytkownik zalogowany");
        sessionStorage.setItem(
          "loggedUser",
          JSON.stringify({
            name: `${foundUser.name} ${foundUser.surname}`,
          })
        );
      } else {
        console.log("użytkownik nie zalogowany");
      }
    });
  }
  
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
    
    setupLogin();
  }