function findCompanies() {
    searchForValue = document.getElementById('searchFor').value.toLowerCase();
    url = "https://c1apitest.delbertaud.com/" + searchForValue;
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() { 
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200) {
            findCompaniesCallBack(xmlHttp.responseText);
        }
    }
    xmlHttp.open("GET", url, true); 
    xmlHttp.send(null);
    return false;
}

function findCompaniesCallBack(response) {
    contents = ""
    data = JSON.parse(response);
    data.forEach(function(element) {
        contents += "<option value='element'>" + element + "</option>"
    });
    document.getElementById("companies").innerHTML = contents;
}

