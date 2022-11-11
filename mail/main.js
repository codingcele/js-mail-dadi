
let mailList = ["topogigio@gmail.com", "alessiomaterazzi@gmail.com", "conormcgregor@gmail.com", "eleonoramsnsm@gmail.com", "diegorosaria@gmail.com"];
let mail = document.getElementById("userMail").value;

let element = document.getElementById("check");

element.addEventListener('click',
    
    function() {

        for (let i = 0; i <= mailList.length; i++) {
            if (document.getElementById("userMail").value === "") {
                document.getElementById("checkMail").innerHTML = "Please enter your mail.";
                console.log(i);
                break;
            }
            else {
                if (i === mailList.length) {
                    document.getElementById("checkMail").innerHTML = "Access denied!";
                    console.log(i);
                    break;
                }
                else if (document.getElementById("userMail").value === mailList[i]) {
                    document.getElementById("checkMail").innerHTML = "Access granted.";
                    console.log(i);
                    break;
                }
            }            
        }
    }
);

let annulla = document.getElementById("annulla");

annulla.addEventListener('click',
        
    function() {
        document.getElementById("userMail").value = "";
        document.getElementById("checkMail").innerHTML = "";
    }
);

