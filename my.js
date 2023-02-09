r = document.getElementById("right").innerHTML = 0;
w = document.getElementById("wrong").innerHTML = 0;
temp  = 0;

document.getElementById("num1").innerHTML = Math.floor(Math.random()*10000);
document.getElementById("num2").innerHTML = Math.floor(Math.random()*10000);
var num1 =  document.getElementById("num1").innerHTML;
    num1 = Number(num1);
var num2 =  document.getElementById("num2").innerHTML = Math.floor(Math.random()*10000);
    num2 = Number(num2);
function next(){
    document.getElementById("num1").innerHTML = Math.floor(Math.random()*10000);
    document.getElementById("num2").innerHTML = Math.floor(Math.random()*10000);
    var num1 =  document.getElementById("num1").innerHTML;
        num1 = Number(num1);
    var num2 =  document.getElementById("num2").innerHTML;
        num2 = Number(num2);
    var value = document.getElementById("ans").value="";
        value = Number(value);
        document.getElementById("complement").innerHTML="";
}
var ans =  document.getElementById("ans").value;
        ans = Number(ans)

       
  
        function csum(){
            var num1 =  document.getElementById("num1").innerHTML;
                num1 = Number(num1);
            var num2 =  document.getElementById("num2").innerHTML;
                num2 = Number(num2);
            var sum = num1 + num2;
            var ans =  document.getElementById("ans").value;
                ans = Number(ans)
              if(temp != ans){
                if(sum == ans ){
                    document.getElementById("complement").innerHTML="Hurry! You are Right";
                        r= r+1;
                        document.getElementById("right").innerHTML = r;
                        temp = ans; 
                        console.log(temp);
                }
                else{
                    document.getElementById("complement").innerHTML="Opps! try Again";
                    w= w+1;
                    document.getElementById("wrong").innerHTML = w;
                    temp =ans 
                }
              }else{
                document.getElementById("complement").innerHTML="Already Recorded";
              }
               
             
        }
