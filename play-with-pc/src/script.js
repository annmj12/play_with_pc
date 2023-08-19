var guess =Math.floor(Math.random()*100+1);
var count = 1;//counting the attempts
document.getElementById("btn").onclick = function(){
  var n = document.getElementById("in").value;
  if(n == guess)
    {
      alert("Got the answer in "+ count +" guess/es");
    }
  else if(n > guess)
    {
      alert("Guess a smaller number");
      count++;
    }
  else
  {
    alert("Guess a greater number");
    count++;
  }
}