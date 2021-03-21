alert(getDataWithPrefix("Ani"))
alert(getDataWithPrefix("Ev"))
alert(getDataWithPrefix("Open"))

function getDataWithPrefix(prefix) {
    var response = []; 

    // make sync request to endpoint
    var request = new XMLHttpRequest();
    request.open("GET", "https://api.publicapis.org/categories", false);
    request.send();

    if (request.status == 200) {
        response = request.responseText;

        // parse string to array
        var arr = JSON.parse(response);

        // filter array with prefix
        var filteredArr = arr.filter(item => {
            return item.startsWith(prefix);
        });

        return filteredArr;
    } else {
       return null; // null as error
    }



}