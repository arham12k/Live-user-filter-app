const result = document.getElementById("result");
// console.log(result);
const filter = document.getElementById("filter");

const listItmes = [];

async function getData() {
  const res = await fetch("https://randomuser.me/api?results=1000");
  console.log(res);

  const { results } = await res.json();

  console.log(results);

  //   clear results
  result.innerHTML = "";
  results.forEach((user) => {
    const li = document.createElement("li");
    listItmes.push(li);

    li.innerHTML = `
    <img src="${user.picture.large}" alt="${user.name.first}">
    <div class="user-info">
    <h4>${user.name.first} ${user.name.last}</h4>
    <p>${user.location.city}, ${user.location.country}</p>
    </div>
       `;

    result.appendChild(li);
  });
}

getData();

filter.addEventListener("input", (e) => {
  filterData(e.target.value);
});

function filterData(searchTerm) {
  //   console.log(searchTerm);
  listItmes.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm.toLowerCase())) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}
