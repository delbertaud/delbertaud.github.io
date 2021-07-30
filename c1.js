content = ""
displayedCount = 0
function findCustomers() {
    displayedCount = 0
    searchForValue = document.getElementById('searchFor').value.toLowerCase();
    content = "<table id=searchTable";
    companies.forEach(checkContains);
    content += "</table>";
    document.getElementById("displayedData").innerHTML = content;
    return false;
    }
function checkContains(item, index) {
    if (item.toLowerCase().includes(searchForValue)) {
        if (displayedCount == 20) { return; }
        fields = item.split(":");
        ccCode = fields[1].trim();
        line = "<tr><td><div onclick=pickCustomer(item1)>item2</div></td></tr>";
        line = line.replace("item1", "'" + ccCode + "'");
        line = line.replace("item2", item);
        content += line;
        displayedCount += 1;
    }
}
function pickCustomer(itemToFind) {
    for (index in companies) {
        if (companies[index].includes(itemToFind)) {
            document.getElementById("searchFor").value = companies[index];
            findCustomers();
            break;
        }
    }  
}