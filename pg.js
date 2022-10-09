var count=0;
var selection=0; 

const u= ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];

const l= ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

const n = ['1','2','3','4','5','6','7','8','9','0'];

const s= ['!','@','#','$','%','^','&','*','?',';'];

var key = '';  

var num_sec=[],upper_sec=[],lower_sec=[],sp_sec=[];

var remember_Obj={
    "a": "apple ", "b": "box ", "c": "cat ", "d": "disco ", 
    "e": "egg ", "f": "fire ", "g": "good ", "h": "home ",
    "i": "iphone ", "j": "jam ", "k": "kick ", "l": "large ", "m": "music ", "n": "new ", "o": "orange ", "p": "park ", "q": "queen ", "r": "run ", "s": "star ", "t": "tokyo ", 
    "u": "usa ", "v": "visa ", "w": "winter ", "x": "xbox ", 
    "y": "yoga ", "z": "zip ",
    
    "A": "Apple ", "B": "Box ", "C": "Cat ", "D": "Disco ", "E": "Egg ", "F": "Fire ", "G": "Good ", "H": "Home ", "I": "Iphone ", "J": "Jam ", "K": "Kick ", "L": "Large ", "M": "Music ", "N": "New ", "O": "Orange ", "P": "Park ", "Q": "Queen ", "R": "Run ", "S": "Star ", "T": "Tokyo ", "U": "Usa ", "V": "Visa ", "W": "Winter ", "X": "Xbox ", "Y": "Yoga ", "Z": "Zip ",
}

var rem=[' You can remember the password by this -> ']; 

function reset() {
    num_sec=[];
    upper_sec=[];
    lower_sec=[];
    sp_sec=[];
    rem=[' You can remember the password by -> \n'];
}

function button_reset() {
    document.getElementById("b").disabled = false;
    document.getElementById("bs").disabled = false;
    document.getElementById("s").disabled = false;
    document.getElementById("hs").disabled = false;
    document.getElementById("output").value = "";
}

function change_selection_b(){
    reset();
    button_reset(); 
    selection=4;
    document.getElementById('pl').value=6; 
    document.getElementById("b").disabled = true; 
    document.getElementById('remember').innerHTML='Click on Generate Password ';
    document.getElementById('display').innerHTML='Now select Password length ';

}

function change_selection_bs(){
    reset();
    button_reset(); 
    selection=3;
    document.getElementById('pl').value=8; 
    document.getElementById("bs").disabled = true;
    document.getElementById('remember').innerHTML='Click on Generate Password ';
    document.getElementById('display').innerHTML='Now select Password length ';
}

function change_selection_s(){
    reset();
    button_reset(); 
    selection=2;
    document.getElementById('pl').value=10; 
    document.getElementById("s").disabled = true;
    document.getElementById('remember').innerHTML='Click on Generate Password ';
    document.getElementById('display').innerHTML='Now select Password length ';
}

function change_selection_hs(){
    reset();
    button_reset(); 
    selection=1;
    document.getElementById('pl').value=14; 
    document.getElementById("hs").disabled = true;
    document.getElementById('remember').innerHTML='Click on Generate Password ';
    document.getElementById('display').innerHTML='Now select Password length ';
}

function generate() {
    
    if(selection==1){
        hs_pwd();
        reset();
    }
    else if(selection==2){
        s_pwd();
        reset();
    }    
    if(selection==3){
        bs_pwd();
        reset();
    }    
    if(selection==4){

        b_pwd();
        reset();
    }    
    else{
        reset();
    }    

}

function b_pwd(){
    var num_sec, upper_sec; 
    var size = document.getElementById('pl').value; 
    if(size<6 && size >4){
        document.getElementById('display').innerHTML='This password is very weak! ';
    }
    else if(size>18){
        document.getElementById('output').value=' Error! too big password !';
        document.getElementById('display').innerHTML=' '; 
        document.getElementById('remember').innerHTML='password length greater than 18 is not accepted in basic password type!'; 
        return;
    }
    else if(size<5){
        document.getElementById('output').value=' Error! too small password !';
        document.getElementById('display').innerHTML=''; 
        document.getElementById('remember').innerHTML='Minimum length of 5 is required otherwise it will be very poor password!'; 
        return;       
    }
    else{
        document.getElementById('display').innerHTML='  \nThis is a basic password.';
    }
    
    num_sec= Math.floor(Math.random() * 10); 
    num_sec= n[num_sec];

    upper_sec= Math.floor(Math.random() * 26); 
    upper_sec= u[upper_sec];

    for( var i =0 ; i<size-2 ; i++) 
    {
        lower_sec.push(l[Math.floor(Math.random() * 26)]); 
    }

    lower_sec.splice(Math.floor(Math.random()*size-1),0,num_sec); 

    lower_sec.splice(Math.floor(Math.random()*size-1),0,upper_sec); 
    lower_sec= lower_sec.join('');  
    key = lower_sec.toString(); 

    document.getElementById('output').value=key; 
    remember();
}

function bs_pwd(){
    var size = document.getElementById('pl').value; 
    if(size<8 && size>6){
        document.getElementById('display').innerHTML=' This password is weak!';
    }
    else if(size>20){
        document.getElementById('output').value=' Error! too big password !';
        document.getElementById('display').innerHTML=' '; 
        document.getElementById('remember').innerHTML='Length greater than 20 is not accepted in aveage type!'; 
        return;
    }
    else if(size<7){
        document.getElementById('output').value=' Error! too small password !';
        document.getElementById('display').innerHTML=' '; 
        document.getElementById('remember').innerHTML=' Minimum password length of 7 is required for average password!'; 
        return;
    }    
    else{
        document.getElementById('display').innerHTML='  \nThis is an average password.';
    }
    
    for( var i =0 ; i<2 ; i++) 
    {
       num_sec.push(n[Math.floor(Math.random() * 10)]); 
    }

    for( var i =0 ; i<2 ; i++) 
    {
       upper_sec.push(u[Math.floor(Math.random() * 26)]); 
    }


       sp_sec.push(s[Math.floor(Math.random() * 10)]); 
    

    for( var i =0 ; i<size-5 ; i++) 
    {
        lower_sec.push(l[Math.floor(Math.random() * 26)]); 
    }

    lower_sec.splice(Math.floor(Math.random()*size-1),0,num_sec[0]);
    lower_sec.splice(Math.floor(Math.random()*size-1),0,num_sec[1]);

    lower_sec.splice(Math.floor(Math.random()*size-1),0,upper_sec[0]); 
    lower_sec.splice(Math.floor(Math.random()*size-1),0,upper_sec[1]); 
    lower_sec.splice(Math.floor(Math.random()*size-1),0,sp_sec[0]); 

    lower_sec= lower_sec.join('');  
    key = lower_sec.toString(); 

    document.getElementById('output').value=key; 
    remember();

}

function s_pwd(){

       var size = document.getElementById('pl').value; 
    if(size>24){
           document.getElementById('output').value=' Error! too big password !';
           document.getElementById('display').innerHTML=' '; 
           document.getElementById('remember').innerHTML=' Length less than 25 is accepted! '; 
           return;
       }
       else if(size<9){
           document.getElementById('output').value=' Error! too small password !';
           document.getElementById('display').innerHTML=' '; 
           document.getElementById('remember').innerHTML=' Length should be greater than 8 in standerd password type ! ';           
           return;
       }    
       else{
           document.getElementById('display').innerHTML='  \n This is a strong standerd password. ';
       }
       
       for( var i =0 ; i<3 ; i++) 
       {
          num_sec.push(n[Math.floor(Math.random() * 10)]); 
       }
   
       for( var i =0 ; i<2 ; i++) 
       {
          upper_sec.push(u[Math.floor(Math.random() * 26)]); 
       }

       for( var i =0 ; i<2 ; i++) 
       {
          sp_sec.push(s[Math.floor(Math.random() * 10)]); 
       }       
       for( var i =0 ; i<size-7 ; i++) 
       {
           lower_sec.push(l[Math.floor(Math.random() * 26)]); 
       }
   
       lower_sec.splice(Math.floor(Math.random()*size-1),0,num_sec[0]);
       lower_sec.splice(Math.floor(Math.random()*size-1),0,num_sec[1]);
       lower_sec.splice(Math.floor(Math.random()*size-1),0,num_sec[2]);
   
       lower_sec.splice(Math.floor(Math.random()*size-1),0,upper_sec[0]); 
       lower_sec.splice(Math.floor(Math.random()*size-1),0,upper_sec[1]); 

       lower_sec.splice(Math.floor(Math.random()*size-1),0,sp_sec[0]); 
       lower_sec.splice(Math.floor(Math.random()*size-1),0,sp_sec[1]); 
   
       lower_sec= lower_sec.join('');  
       key = lower_sec.toString(); 
   
       document.getElementById('output').value=key; 
       remember();
   
   }

function hs_pwd(){
 
    var size = document.getElementById('pl').value; 
 if(size>24){
        document.getElementById('output').value=' Error! too big password !';
        document.getElementById('display').innerHTML=' '; 
        document.getElementById('remember').innerHTML='Length less than 25 is accepted! '; 
        return;
    }
    else if(size<12){
        document.getElementById('output').value=' Error! too small password !';
        document.getElementById('display').innerHTML=' '; 
        document.getElementById('remember').innerHTML=' Length should be greater than 12 for maximum security! ';            
        return;
    }    
    else{
        document.getElementById('display').innerHTML='  \nThis is a  very strong password.';
    }
    
    for( var i =0 ; i<3 ; i++) 
    {
       num_sec.push(n[Math.floor(Math.random() * 10)]); 
    }

    for( var i =0 ; i<3 ; i++) 
    {
       upper_sec.push(u[Math.floor(Math.random() * 26)]); 
    }

    for( var i =0 ; i<3 ; i++) 
    {
       sp_sec.push(s[Math.floor(Math.random() * 10)]); 
    }       
    for( var i =0 ; i<size-9 ; i++) 
    {
        lower_sec.push(l[Math.floor(Math.random() * 26)]); 
    }

    lower_sec.splice(Math.floor(Math.random()*size-1),0,num_sec[0]);
    lower_sec.splice(Math.floor(Math.random()*size-1),0,num_sec[1]);
    lower_sec.splice(Math.floor(Math.random()*size-1),0,num_sec[2]);

    lower_sec.splice(Math.floor(Math.random()*size-1),0,upper_sec[0]); 
    lower_sec.splice(Math.floor(Math.random()*size-1),0,upper_sec[1]); 
    lower_sec.splice(Math.floor(Math.random()*size-1),0,upper_sec[2]); 

    lower_sec.splice(Math.floor(Math.random()*size-1),0,sp_sec[0]); 
    lower_sec.splice(Math.floor(Math.random()*size-1),0,sp_sec[1]); 
    lower_sec.splice(Math.floor(Math.random()*size-1),0,sp_sec[2]); 

    lower_sec= lower_sec.join('');  
    key = lower_sec.toString(); 

    document.getElementById('output').value=key; 
    remember();

}

function remember() {
    var ele=null,val=null;
    for(ele of key){
       if(ele in remember_Obj)
       {
            val = remember_Obj[ele];
            rem.push(val);
            rem.push(' ');
       }
       else{
        rem.push(ele);
        rem.push(' ');
       }
    }
    rem=rem.join('');
    rem=rem.toString();
    document.getElementById('remember').innerHTML = rem;
}

function copy() {
    var copyText = document.getElementById("output");
    console.log(copyText);
    if(copyText.value=='')
    {
        alert("select type then click on generate password");
        return;
    }
    else if(copyText.value==' Error! too small password !')
    {
        alert("Password length is too small");
        return;       
    }
    else if(copyText.value==' Error! too big password !')
    {
        alert("Password length is too big");
        return;       
    }


  copyText.select();
  copyText.setSelectionRange(0, 99999); 

  navigator.clipboard.writeText(copyText.value);
  alert("Copied the Password: " + copyText.value);
}

function dark_mode() {
    count++;
    if(count%2==0){
        document.getElementById('dm').innerHTML='Dark mode'
    }
    else
    document.getElementById('dm').innerHTML='Light mode'
    
        $('body').toggleClass('dark');
        $('.container').toggleClass('dark'); 
        $('input').toggleClass('dark'); 
        $('#display').toggleClass('dark'); 
        $('#remember').toggleClass('dark'); 
}