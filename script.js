
$(document).ready(function () {
    var last_valid_selection = null;
    const maxAllowed = 2;
    $('#testbox').change(function (event) {
        if ($(this).val().length > maxAllowed) {
            $(this).val(last_valid_selection);
            alert('Możesz wybrać maksymalnie ' + maxAllowed + ' miasta');
        } else {
            last_valid_selection = $(this).val();
        }
    });
});

var isValidElement = function isValidElement(element) {
    return element.name && element.value;
};


var isValidValue = function isValidValue(element) {
    return !['checkbox', 'radio'].includes(element.type) || element.checked;
};

var getSelectValues = function getSelectValues(options) {
    return [].reduce.call(options, function (values, option) {
        return option.selected ? values.concat(option.value) : values;
    }, []);
};


var cityArray = [];

function submitCity(){
    var city = {};
    $("#formCity").find("input,select").each(function () {
        var inputType = this.tagName.toUpperCase() === "INPUT" && this.type.toUpperCase();
        if (inputType !== "BUTTON"){
            city[this.name] = $(this).val();
        }
    });
    var obj = { city: city };
    cityArray.push(obj);
    // console.log(obj);
    // console.log(cityArray);
    var select = document.getElementById("hehe");
    for (var i = 0; i < cityArray.length+1; i++) {
        console.log(cityArray[i]);
        
        // var opt = document.createElement('option');
        // opt.value = cityArray[i];
        // opt.innerHTML = cityArray[i];
        // select.appendChild(opt);
    }
    }
    // .appendChild(newDiv);
    // document.getElementsByClassName("road").addEventListener("click", submitCity(options) {
//     $(".road").append(<option value="option6">option43</option');
// });


function addInputCity(divName) {
    var choices = ["tak", "nie"];
    var newDiv = document.createElement('div');
    var selectHTML = "";
    var selectHTML = '<hr>';
    selectHTML += "<p>" + "Nazwa miasta:" + "</p>";
    selectHTML += '<input type="text" id="nazwa" name="nazwa" placeholder="Nazwa miasta">';
    selectHTML += "<p>" + "Czy miasto posiada jednostkę straży pożarnej?" + "<p>";
    selectHTML += "<select>";
    for (i = 0; i < choices.length; i = i + 1) {
        selectHTML += "<option value='" + choices[i] + "'>" + choices[i] + "</option>";
    }
    selectHTML += "</select>";
    selectHTML += '<input type="button" class="sCity" value="Zatwierdź miasto" onclick="submitCity()">';
    newDiv.innerHTML = selectHTML;
    document.getElementById(divName).appendChild(newDiv);
}

function addInputRoad(divName) {
    var newDiv = document.createElement('div');
    var selectHTML = "";
    var selectHTML = '<hr>';
    selectHTML += "<p>" + "Wybierz dwa miasta z listy dostępnych miast, w celu utworzenia nowej drogi:" + "</p>";
    selectHTML += '<select multiple= "true" class ="road" name"= "miasta">';
    for (i = 0; i < 5; i = i + 1) {
        selectHTML += '<option value='+i+'></option>';
    }
    selectHTML += "</select>";
    selectHTML += "<p>" + "Podaj czas przejazdu" + "<p>";
    selectHTML += '<input name="czas_przejazdu" type="number" value="1" min="1" placeholder="minimum 1" step="1">';
    newDiv.innerHTML = selectHTML;
    document.getElementById(divName).appendChild(newDiv);
}

// document.getElementsByClassName("demo").addEventListener("click", submitCity(options) {
//     $(".road").append(<option value="option6">option43</option');
// });


// var formToJSON = function formToJSON(elements) {
//     return [].reduce.call(elements, function (data, element) {
//             // data[element.form_city.name] = element.form_city.name;
//         if (isValidElement(element) && isValidValue(element)) {
//             if(element.options){
//                 data[element.name] = getSelectValues(element);
//             }
//             else{
//                 data[element.name] = element.value;
//             }
//         }
//         return data;
//     }, {});
// };


var handleFormSubmit = function handleFormSubmit(event) {

    // Stop the form from submitting since we’re handling that with AJAX.
    event.preventDefault();

    // Call our function to get the form data.
    const data = formToJSON(this.elements);

    // Demo only: print the form data onscreen as a formatted JSON object.
    var dataContainer = document.getElementsByClassName('results__display')[0];

    // Use `JSON.stringify()` to make the output valid, human-readable JSON.
    dataContainer.textContent = JSON.stringify(data, null, "   ");

    console.log(dataContainer);

};

var handleFormSubmit2 = function handleFormSubmit(event) {

    // Stop the form from submitting since we’re handling that with AJAX.
    event.preventDefault();

    // Call our function to get the form data.
    const data = formToJSON(this.elements);

    // Demo only: print the form data onscreen as a formatted JSON object.
    var dataContainer = document.getElementsByClassName('results__display2')[0];

    // Use `JSON.stringify()` to make the output valid, human-readable JSON.
    dataContainer.textContent = JSON.stringify(data, null, "   ");

    // var obj = JSON.parse(data);
    // obj.push({ "teamId": "4", "status": "pending" });
    // data = JSON.stringify(obj, null, "   ");

    // // Demo only: print the form data onscreen as a formatted JSON object.
    // var dataContainer = document.getElementsByClassName('results__display2')[0];

    // console.log(data);


};

// function parse(){
//     const data = formToJSON(form_city.elements);
//     var userData = JSON.parse(data);
//     console.log(userData.jednostka);
// }

// ...this is where we’d actually do something with the form data...
var form = document.getElementsByClassName('new')[0];
form.addEventListener('submit', handleFormSubmit);





// var out = JSON.parse(dataContainer);

// var addNewCity = function addNewCity() {
//     var jsonStr = '{"theTeam":[{"teamId":"1","status":"pending"},{"teamId":"2","status":"member"},{"teamId":"3","status":"member"}]}';

//     var obj = JSON.parse(jsonStr);
//     obj['theTeam'].push({ "teamId": "4", "status": "pending" });
//     jsonStr = JSON.stringify(obj);
// }






