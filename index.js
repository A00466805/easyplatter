console.log("hello world");
const x = document.querySelector("input");
x.addEventListener("change", () => {
  const fr = new FileReader();
  fr.onloadend = (e) => {
    let r = fr.result.split("\n").map((e) => {
      return e.split(",");
    });
    r.forEach((e) => {
      let m = e
        .map((e) => {
          return `<td>${e}</td>`;
        })
        .join("");
      const ce = document.createElement("tr");
      ce.innerHTML = m;

      if (ce.innerText !== "") {
        document.querySelector("table").append(ce);
      }
    });

    // console.log(r)
  };
  fr.readAsText(x.files[0]);
});
function searchLowerCI() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("lowerCI");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[4];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function searchPeriod() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("period");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[1];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}
