
// PENTRU SIGNUP
function checkforcomplete()  //verifica daca inputul de la nume, prenume, email si password este completat si deblocheaza submit
    {
        var formularS = document.forms["signup"].elements;
        var submitactive = true;
	
        for (var i = 0; i < 4; i++) {
            if (formularS[i].value.length == 0) submitactive = false;
        }

        if (submitactive) {
            document.getElementById('submitSign').disabled = false;
        }
	else {
	    document.getElementById('submitSign').disabled = 'disabled';
	}
    }
    

//adaug optiune in select (CREATE ELEMENT)
var x = document.getElementById("ocupatie");
var option = document.createElement("option");
option.text="Cofetar";
//x.add(option); 


function show(val) {  //arat valoarea in dreapta range-ului
	document.getElementById('showrange').value=val;
}

function success() { //dupa submit afisez textul (event onclick)
	alert("Cont creat!");
}


function validatepassword() {  //parola validata cu regex
	var password = document.getElementById("psw").value;
	if (!((/[a-z]/.test(password))&&(/[A-Z]/.test(password))&&(/[0-9]/.test(password)))) {
		document.getElementById("psw").style.backgroundColor="red";
		document.getElementById("psw").style.color="white";
	}
	else {
		document.getElementById("psw").style.backgroundColor="white";
		document.getElementById("psw").style.color="black";
	}	

}

function ajaxrequest() {  //GET request cu AJAX
	var xttp = new XMLHttpRequest();
	xttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			console.log(this.responseText);			
			document.getElementById("get").innerHTML = this.responseText;
		}
	}
	xttp.open("GET", "https://jsonplaceholder.typicode.com/users/1", true);
	xttp.send();
}

//PENTRU LOGIN
//alerta ca te-ai logat
function logare() {
	alert("V-ati logat cu succes!");
}


//verifica daca persoana care se logheaza are cont
var persoana = {Nume:"Petre", Prenume:"Andreea", Email:"andreea.petre.16@gmail.com", Parola:"123abcQ_"};
function checkperson(){
	i = 0;
	
    if ((formularL[0] == persoana.Nume[i]) && (formularL[1] == persoana.Prenume[i]) && (formularL[2] == persoana.Email[i]) && (formularL[3] == persoana.Parola[i])){
		logare();
	}   

}






