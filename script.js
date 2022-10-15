document.getElementById("submitToday").addEventListener("click", function(event) {
    event.preventDefault();
    const url = "https://api.nasa.gov/planetary/apod?api_key=gm0TeJrQxC2U0XcqjehKiGgxBjgcgfjgSaxw7dNg";
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            let results = "";
            console.log(json);
            results += '<img style="width: 100%;" src="' + json.url + '"/>'
            document.getElementById("todayResults").innerHTML = results;
            document.getElementById("todayExplanation").innerHTML = json.explanation
            if(json.copyright){
                document.getElementById("todayCopyright").innerHTML = "&#169" + json.copyright
            }
        });
        
});

document.getElementById("submitDate").addEventListener("click", function(event) {
    event.preventDefault();
    const value = document.getElementById("dateInput").value;
    if (value === "")
        return;
    console.log(value);
    const url = "https://api.nasa.gov/planetary/apod?api_key=gm0TeJrQxC2U0XcqjehKiGgxBjgcgfjgSaxw7dNg&date=" + value;
    fetch(url)
        .then(function(response) {
            return response.json();
        }).then(function(json) {
            let results = "";
            console.log(json);
            results += '<img style="width: 100%;" src="' + json.url + '"/>'
            document.getElementById("dateResults").innerHTML = results;
            document.getElementById("dateExplanation").innerHTML = json.explanation
            if(json.copyright){
                document.getElementById("dateCopyright").innerHTML = "&#169;&nbsp;" + json.copyright
            }
            });
        
});