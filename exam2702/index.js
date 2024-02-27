class User {
  constructor(username, loginCount = 0) {
    this.username = username;
    this.loginCount = loginCount;
  }
}

function saveUsername() {
  const username = document.getElementById("username").value;
  let users = [];

  const storedUsers = localStorage.getItem("users");
  if (storedUsers) {
    users = JSON.parse(storedUsers);
    const existingUser = users.find((user) => user.username === username);

    if (existingUser) {
      existingUser.loginCount++;
      existingUser.lastLogin = new Date().toLocaleString();
    } else {
      users.push(new User(username, 1, new Date().toLocaleString()));
    }
  } else {
    users.push(new User(username, 1, new Date().toLocaleString()));
  }
  localStorage.setItem("users", JSON.stringify(users));
  window.location.href = "data.html";
}

const storedUsers = localStorage.getItem("users");
if (storedUsers) {
  const users = JSON.parse(storedUsers);
  const usernameInput = document.getElementById("username");

  if (users.length > 0) {
    usernameInput.value = users[0].username;
  }
  usernameInput.value = "";
}
