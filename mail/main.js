
let element = document.getElementById("check");

element.addEventListener('click',
    
    function() {
        let mailList = ["topogigio@gmail.com", "alessiomaterazzi@gmail.com", "conormcgregor@gmail.com", "eleonoramsnsm@gmail.com", "diegorosaria@gmail.com"];
        let mail = document.getElementById("mail").value;

        for (let i = 0; i <= mailList.length; i++) {
            if (i === mailList.length) {
                document.getElementById("checkMail").innerHTML = "Access denied";
            }
            else if (mail === mailList[i]) {
                document.getElementById("checkMail").innerHTML = "Access granted.";
                break
            }
        }

    }
);

let annulla = document.getElementById("annulla");

annulla.addEventListener('click',
        
    function() {
        document.getElementById("mail").value = "";
        document.getElementById("checkMail").innerHTML = "";
    }
);

