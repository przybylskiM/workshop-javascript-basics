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
    
    setupRegistration();
  }