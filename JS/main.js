
    
      
         function resumenes(){

                var nbr1=document.getElementById("nombre");
                var nbr=document.getElementById("nombre").value;
                var ape1=document.getElementById("apellido");
                var ape=document.getElementById("apellido").value;
                var mail1= document.getElementById("correo");
                var mail= document.getElementById("correo").value;
                var can1= document.getElementById("cantidades");
                var can= document.getElementById("cantidades").value;
                //choise devuelve un string
                var eleccion1=parseInt(document.getElementById("choise"));
                var eleccion=parseInt(document.getElementById("choise").value);
    
    
                
    
    
                var b=0;
    
                switch(eleccion)
                    { 
                    case(1):
                        b=200;
                        break;
    
                    case(2):
                    
                        b=40;
                        break;
                    
                    case(3):
                    
                        b=100;
                        break;
                    
                    case(4):
                    
                        b=170;
                        break;
                    
                    default:
                        b=0;
                       
                    }
               
                
                if(nbr.length==0)
                {
                    alert("Por favor escriba su Nombre");
                    nbr1.focus();
                    nbr1.style.borderColor = "red";
                    nbr1.style.boxShadow ="0 0 0 0.25rem rgba(253, 13, 13, 0.25)";
                    icono1.style.visibility ="visible";
     
                }
                
               
                
                if (nbr.length!=0 && ape.length==0)
                {
                    nbr1.style.boxShadow ="";   
                    icono1.style.visibility ="hidden"; 
                    nbr1.style.borderColor = "#ced4da";        
                    alert("Por favor escriba su Apellido");
                    icono2.style.visibility ="visible";
                    ape1.style.borderColor = "red";
                    ape1.style.boxShadow ="0 0 0 0.25rem rgba(253, 13, 13, 0.25)";
                  //  ape1.addEventListener('keypress', borrarAdv);
     
                }
                if (nbr.length!=0 && ape.length!=0 && mail.length==0)
                {
                    icono1.style.visibility ="hidden";
                    icono2.style.visibility ="hidden";
                    nbr1.style.boxShadow ="";    
                    nbr1.style.borderColor = "#ced4da";  
                    ape1.style.boxShadow ="";
                    ape1.style.borderColor = "#ced4da";
                    alert("Por favor escriba su Correo");
             
                    
                    icono3.style.visibility ="visible";
                    mail1.style.borderColor = "red";
                    mail1.style.boxShadow ="0 0 0 0.25rem rgba(253, 13, 13, 0.25)";
                }
                if (nbr.length!=0 && ape.length!=0 && mail.length!=0 && can.length==0 )
                {
                    icono1.style.visibility ="hidden";
                    icono2.style.visibility ="hidden";
                    icono3.style.visibility ="hidden";
                 
                    nbr1.style.boxShadow ="";    
                    nbr1.style.borderColor = "#ced4da";  
                    ape1.style.boxShadow ="";
                    ape1.style.borderColor = "#ced4da";
                    mail1.style.boxShadow =""; 
                    mail1.style.borderColor = "#ced4da";
                    alert("Por favor seleccione la cantidad de Tickets");
                  
                    icono4.style.visibility ="visible";
                    can1.style.borderColor = "red";
                    can1.style.boxShadow ="0 0 0 0.25rem rgba(253, 13, 13, 0.25)";
    
                }
                if (nbr.length!=0 && ape.length!=0 && mail.length!=0 && can.length!=0 && !(eleccion==1 || eleccion==2 ||  eleccion==3 ||  eleccion==4) )
                {
                    icono1.style.visibility ="hidden";
                    icono2.style.visibility ="hidden";
                    icono3.style.visibility ="hidden";
                    icono4.style.visibility ="hidden";
                  
                 
                    nbr1.style.boxShadow ="";    
                    nbr1.style.borderColor = "#ced4da";  
                    ape1.style.boxShadow ="";
                    ape1.style.borderColor = "#ced4da";
                    mail1.style.boxShadow =""; 
                    mail1.style.borderColor = "#ced4da";
                    can1.style.boxShadow ="";  
                    can1.style.borderColor = "#ced4da";
                    alert("Por favor seleccione la Categoría");
                    document.getElementById("saldo").innerHTML= " ";
                 
                }
    
                if(nbr.length!=0 && ape.length!=0 && mail.length!=0 && can.length!=0 && (eleccion==1 || eleccion==2 ||  eleccion==3 ||  eleccion==4)) 
                {
                    icono1.style.visibility ="hidden";
                    icono2.style.visibility ="hidden";
                    icono3.style.visibility ="hidden";
                    icono4.style.visibility ="hidden";
                  
                 
                    nbr1.style.boxShadow ="";    
                    nbr1.style.borderColor = "#ced4da";  
                    ape1.style.boxShadow ="";
                    ape1.style.borderColor = "#ced4da";
                    mail1.style.boxShadow =""; 
                    mail1.style.borderColor = "#ced4da";
                    can1.style.boxShadow ="";  
                    can1.style.borderColor = "#ced4da";   
                
                    var multi=can*b;
                    document.getElementById("saldo").innerHTML= " "+ multi;
                }
            }
    
            function borrar(){
                document.getElementById("nombre").value="";
                document.getElementById("apellido").value="";
                document.getElementById("correo").value="";
                document.getElementById("cantidades").value="";
                document.getElementById("choise").value="-- Seleccione --";
                document.getElementById("saldo").innerHTML="  ";
            }
    
            var icono1= document.getElementById("iconoAdv1");
            var icono2= document.getElementById("iconoAdv2");
            var icono3= document.getElementById("iconoAdv3");
            var icono4= document.getElementById("iconoAdv4");
            icono1.style.visibility = "hidden";
            icono2.style.visibility = "hidden";
            icono3.style.visibility = "hidden";
            icono4.style.visibility = "hidden";
    
            const botoncito= document.getElementById("resum")
            botoncito.addEventListener("click",resumenes);
            
            const btnBorrar= document.getElementById("brr")
            btnBorrar.addEventListener("click",borrar);
    
           
    