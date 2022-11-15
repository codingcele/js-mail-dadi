
let tastoWinner = document.getElementById("genera");

tastoWinner.addEventListener('click',
    function() {
        let pc = Math.round(Math.random()*5)+1;

        let user = Math.round(Math.random()*5)+1;

        document.getElementById("numPc").innerHTML = pc;
        document.getElementById("numUser").innerHTML = user;
        if (pc > user) {
            document.getElementById("winner").innerHTML = "Pc wins.";
        }
        else if (pc < user) {
            document.getElementById("winner").innerHTML = "User wins.";
        }
        else {
            document.getElementById("winner").innerHTML = "The two numbers are equal!";
        } 
    }
);




