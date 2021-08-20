document.getElementById("submitButton").addEventListener("click", showContentIFrameDiv);
document.getElementById("showAboutButton").addEventListener("click", showAboutDiv)
document.getElementById("closeAboutButton").addEventListener("click", closeAboutDiv)
document.getElementById("closeContentIFrameButton").addEventListener("click", closeContentIFrameDiv)
findCompanies();
function findCompanies() {
    document.getElementById("submitButton").disabled = true;
    searchForValue = document.getElementById("searchForTextbox").value.toLowerCase();
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
    contents = "";
    data = JSON.parse(response);
    data.forEach(function(element) { contents += `<option value="${element}">${element}</option>` });
    document.getElementById("companyList").innerHTML = contents;
}

document.getElementById("searchForTextbox").onkeyup = function(e) {
    if (!e) e = window.event;
    keyCode = e.code || e.key;
    if (keyCode == "Tab") {
        return;
    }
    if (keyCode == "ArrowDown"){
        document.getElementById("companyList").focus()
        return;
    }
    if (keyCode == "ArrowUp" || keyCode == "ArrowRight" || keyCode == "ArrowLeft"){
        return;
    }
    findCompanies();
}

document.getElementById("companyList").onfocus = function(e) {
    if (document.getElementById("companyList").selectedIndex == -1) {
        document.getElementById("companyList").selectedIndex = 0;
        document.getElementById("submitButton").disabled = false;
        document.getElementById("searchForTextbox").value = document.getElementById("companyList").selectedOptions[0].innerText;
    }
}

document.getElementById("companyList").onchange = function(e) {
    document.getElementById("searchForTextbox").value = document.getElementById("companyList").selectedOptions[0].innerText;
    document.getElementById("submitButton").disabled = false;
}

function showAboutDiv() {
    document.getElementById("searchDiv").style.visibility = "hidden";
    document.getElementById("aboutDiv").style.visibility = "visible";
}
function closeAboutDiv() {
    document.getElementById("aboutDiv").style.visibility = "hidden";
    document.getElementById("searchDiv").style.visibility = "visible";
}
function showContentIFrameDiv() {
    document.getElementById("searchDiv").style.visibility = "hidden";
    document.getElementById("contentIframeDiv").style.visibility = "visible";
    customerCode = document.getElementById("companyList").selectedOptions[0].innerText.split(":")[1]
    document.getElementById("customerCodeDiv").innerHTML = customerCode + " dashboard to be shown here.";
    document.getElementById("contentIFrameURL").src = "https://c1apitest.delbertaud.com/" + customerCode;
}
function closeContentIFrameDiv() {
    document.getElementById("contentIframeDiv").style.visibility = "hidden";
    document.getElementById("searchDiv").style.visibility = "visible";
}