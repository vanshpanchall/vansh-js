const usersData = [
  {
    id: 432,
    first_name: "Asd",
    last_name: "paerl",
    email: "abc@gmail.com",
    phone: "+919394099203",
  },
  {
    id: 342,
    first_name: "dsf",
    last_name: "paerl",
    email: "sdf@gmail.com",
    phone: "+919394099089",
  },
  {
    id: 765,
    first_name: "dfgf",
    last_name: "dfg",
    email: "muyjgh@gmail.com",
    phone: "+919394054345",
  },
  {
    id: 123,
    first_name: "sdxfg",
    last_name: "gdfd",
    email: "werrew@gmail.com",
    phone: "+915464569203",
  },
];

function createTable(value) {
  const main = document.querySelector(".main");
  const table = document.createElement("table");

  const tableHead = document.createElement("tr");
  for (let key in value[0]) {
    let addHead = document.createElement("th");
    addHead.innerHTML = key;
    tableHead.appendChild(addHead);
  }
  // tableHead.innerHTML = `
  //   <th>Serial Number</th>
  //   <th>First Name</th>
  //   <th>Last Name</th>
  //   <th>Email</th>
  //   <th>Phone Number</th>
  //    `;
  tableHead.style.color = "yellow";
  table.appendChild(tableHead);

  for (let i = 0; i < value.length; i++) {
    const row = document.createElement("tr");
    for (let key in value[i]) {
      let data = document.createElement("td");
      data.innerHTML = value[i][key];
      row.appendChild(data);
    }
    table.appendChild(row);
  }
  main.appendChild(table);
}
createTable(usersData);
