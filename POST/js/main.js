console.log("Подключено")

function send(){
	let name = document.getElementById("name").value;
	let surname = document.getElementById("surname").value;
	let age = document.getElementById("age").value;

	console.log(name)
	console.log(surname)
	console.log(age)

	let API = "YOUR COOL API URL";

	$.ajax({
        url:            API,
        data:           {
            name: name,
            suranme: surname,
            age: age
        },
        // dataType:       'json',

        /* Very important */
        contentType:    'application/json',
    })

    .done(function(data){
    	console.log(data)
    });

}