document.getElementById("submitToday").addEventListener("click", function(event) {
    console.log("I got clicked");
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
        });
        
});