// const fs = require("fs");
const dataStorage = {};
const prefixID = "stID-";
let storageID = 0;
let fullID;
// const dataStorage = require("./data.json");

document.querySelector("form").addEventListener("submit", (event) => {
  event.preventDefault();
  storageID++;
  fullID = prefixID + storageID;

  const dataDiv = document.getElementById("printData");
  dataDiv.appendChild(createNewDivWithData(fullID));
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

  const dateTime = getCurrentDate(fullID);
  const total = calculateSum(telia, elektra, dujos, saltasVanduo, bendrija);
  // saving data
  dataStorage[fullID] = {
    dateTime,
    telia,
    elektra,
    dujos,
    dujosSkaitiklis,
    karstasVanduo,
    saltasVanduo,
    saltasVanduoSkaitiklis,
    total,
    bendrija,
  };

  console.log(dataStorage, fullID);

  // fs.writeFileSync("data.json", dataStorage);

  const printData = document.createElement("div");
  printData.classList.add("printDataField");
  printData.innerHTML = `<h2>${dataStorage[fullID].dateTime}</h2> <br> 
                    Telia - ${dataStorage[fullID].telia}Eur <br>
                    Elektra - ${dataStorage[fullID].elektra}Eur <br>
                    Dujos - ${dataStorage[fullID].dujos}Eur <br>
                    Šaltas vanduo - ${dataStorage[fullID].saltasVanduo}Eur <br>
                    Bendrija - ${dataStorage[fullID].bendrija}Eur <br> <br>
                    <h4>Viso sumokėta - ${dataStorage[fullID].total} Eur</h4> <br>
                    <h3>Skaitinkių rodmenys</h3> <br>
                    Dujos - ${dataStorage[fullID].dujos}m^3 <br>
                    Karštas vanduo - ${dataStorage[fullID].karstasVanduo}m^3 <br>
                    Šaltas vanduo - ${dataStorage[fullID].saltasVanduo}m^3`;
  return printData;
}
