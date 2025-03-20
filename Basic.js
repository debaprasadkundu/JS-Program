if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js").then((res) => {
    console.log("sw-", res);
  });
}

async function fetchData() {
  const url = "https://64b000abc60b8f941af50c67.mockapi.io/save";
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  let temp = "";
  result.forEach((element) => {
    temp += "<tr>";
    temp += "<td>" + element.id + "</td>";
    temp += "<td>" + element.name + "</td>";
    temp += "<td>" + element.email + "</td>";
    temp +=
      "<td><button onclick=edit(event)>Edit</button><button onclick=deletedata(event)>Delete</button></td></tr>";
  });
  document.getElementById("tbody").innerHTML = temp;
  document.getElementById("loader").style.display = "none";
}

fetchData();

function logSubmit(event) {
  document.getElementById("loader").style.display = "block";
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  document.getElementById("form").reset();

  const payload = {
    name: name,
    email: email,
    password: password,
  };

  const url = "https://64b000abc60b8f941af50c67.mockapi.io/save";
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  }).then((response) => {
    response.json().then((res) => {
      console.log(res);
      let temp = "";
      temp += "<tr>";
      temp += "<td>" + res.id + "</td>";
      temp += "<td>" + res.name + "</td>";
      temp += "<td>" + res.email + "</td>";
      temp +=
        "<td><button onclick=edit(event)>Edit</button><button onclick=deletedata(event)>Delete</button></td></tr>";
      document.getElementById("tbody").innerHTML += temp;
      document.getElementById("loader").style.display = "none";
    });
  });
  event.preventDefault();
}

function edit(e) {
  console.log("edit");
  const td = e.target.parentNode;
  const tr = td.parentNode;
  const id = tr.cells[0].innerHTML;
  const name = tr.cells[1].innerHTML;
  const email = tr.cells[2].innerHTML;
  document.getElementById("name").value = name;
  document.getElementById("email").value = email;
}

async function deletedata(e) {
  document.getElementById("loader").style.display = "block";
  document.querySelectorAll("button").forEach((item) => (item.disabled = true));
  console.log("delete");
  const td = e.target.parentNode;
  const tr = td.parentNode;
  const value = tr.cells[0].innerHTML;
  const url = `https://64b000abc60b8f941af50c67.mockapi.io/save/${value}`;
  const response = await fetch(url, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const result = await response.json();
  tr.parentNode.removeChild(tr);
  document.getElementById("loader").style.display = "none";
  document
    .querySelectorAll("button")
    .forEach((item) => (item.disabled = false));
}
