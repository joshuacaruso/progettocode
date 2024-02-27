function backToHome() {
  window.location.href = "index.html";
}
const storedUsers = localStorage.getItem("users");
if (storedUsers) {
  const users = JSON.parse(storedUsers);
  const userTableBody = document.getElementById("userTableBody");

  users.forEach((user) => {
    const row = document.createElement("tr");
    const usernameCell = document.createElement("td");
    const loginCountCell = document.createElement("td");
    const lastLoginCell = document.createElement("td");

    usernameCell.textContent = user.username;
    loginCountCell.textContent = user.loginCount;
    lastLoginCell.textContent = user.lastLogin;

    row.appendChild(usernameCell);
    row.appendChild(loginCountCell);
    row.appendChild(lastLoginCell);

    userTableBody.appendChild(row);
  });
}
