let btn = document.getElementById('btn');
let number = [Math.floor(Math.random()*100)]
let rfrshButton = document.getElementById('refresh');
let chance = 5;
let low=1;
let high=100;
btn.addEventListener('click',function(){
   
        let input = document.getElementById("userInput").value;
        chance = chance -1;
        document.getElementById("chance").innerHTML = "Chance Remaining: "+chance;
        if(input == number)
        {
            document.getElementById("outputtext").innerHTML = "You Guessed it right number is "+number; 
        }
        else if (input<number)
        {
            low = input;
            document.getElementById("outputtext").innerHTML = "Wrong: Number is between "+ low + ' & ' +high;  
        }
        else
        {
            high = input;
            document.getElementById("outputtext").innerHTML = "Wrong: Number is between "+ low + ' & ' +high;  
        }
        if(chance==0)
        {
        document.getElementById("btn").disabled= true;
        if(input == number)
        {
            document.getElementById("outputtext").innerHTML = "You Guessed it right number is "+number; 
        }
        else
        {
            document.getElementById('outputtext').innerHTML ="You Lost: Number was: "+number;
        }
        document.getElementById("replay").innerHTML ="Click Replay Button to play Again";
    }
   
})


rfrshButton.addEventListener('click',function(){
    window.location.reload();
})