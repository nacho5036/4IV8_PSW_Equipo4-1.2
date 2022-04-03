function Problema1(){
    var N1=document.getElementById("num1").value;
    var N2=document.getElementById("num2").value;

            if(N1==N2){

                var multi=N1*N2;
                document.getElementById("resultado").innerHTML=
                  
                +multi;

            }
            else if(N1>N2){
                var rest=(N1*1)-(N2*1);
                document.getElementById("resultado").innerHTML=
                
                +rest;     



            }
            else if (N1<N2){
                var  sum=(N1*1)+(N2*1);
                document.getElementById("resultado").innerHTML=
                 
                +sum;     




            }
                        



}















