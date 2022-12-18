document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  const dataDiv = document.getElementById("printData");
  dataDiv.appendChild(createNewDivWithData());

  // Implement local storage - API savedData.json
  // fetch("/savedData.json")
  //     .then(resp => resp.json)
  //     .then(result => console.log(result))
  //     .catch(err => console.log(err));
});

function getCurrentDate() {
  let currentDate = new Date();
  var dd = String(currentDate.getDate()).padStart(2, "0");
  var mm = String(currentDate.getMonth() + 1).padStart(2, "0");
  var yyyy = currentDate.getFullYear();
  currentDate = yyyy + "-" + mm + "-" + dd;
  return currentDate;
}
function calculateSum(telia, elektra, dujos, vanduo, bendrija) {
  const sum =
    parseFloat(telia) +
    parseFloat(elektra) +
    parseFloat(dujos) +
    parseFloat(vanduo) +
    parseFloat(bendrija);
  return sum;
}

function createNewDivWithData() {
  const telia = document.getElementById("telia").value;
  const elektra = document.getElementById("elektra").value;
  const dujos = document.getElementById("dujos").value;
  const dujosSkaitiklis = document.getElementById("dujosSkaitiklis").value;
  const karstasVanduo = document.getElementById("karstasVanduo").value;
  const saltasVanduo = document.getElementById("saltasVanduo").value;
  const saltasVanduoSkaitiklis = document.getElementById(
    "saltasVanduoSkaitiklis"
  ).value;
  const bendrija = document.getElementById("bendrija").value;

  const dateTime = getCurrentDate();
  const total = calculateSum(telia, elektra, dujos, saltasVanduo, bendrija);

  const printData = document.createElement("div");
  printData.classList.add("printDataField");
  printData.innerHTML = `<h2>${dateTime}</h2> <br> 
                            Telia - ${telia}Eur <br>
                            Elektra - ${elektra}Eur <br>
                            Dujos - ${dujos}Eur <br>
                            Šaltas vanduo - ${saltasVanduo}Eur <br>
                            Bendrija - ${bendrija}Eur <br> <br>
                            <h4>Viso sumokėta - ${total} Eur</h4> <br>
                            <h3>Skaitinkių rodmenys</h3> <br>
                            Dujos - ${dujosSkaitiklis}m^3 <br>
                            Karštas vanduo - ${karstasVanduo}m^3 <br>
                            Šaltas vanduo - ${saltasVanduoSkaitiklis}m^3`;
  return printData;
}
