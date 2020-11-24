function check(){
    let tmarks =document.getElementById("tmarks").value
    let omarks = document.getElementById("omarks").value 
    
    let persent =(omarks/tmarks*100)
 persent=parseInt(persent)

    document.getElementById("pr").innerHTML=persent



if (persent  >= 80 && persent <= 100){
    document.getElementById("result").innerHTML="A+"
}
else if(persent>=70 && persent <80){
    document.getElementById("result").innerHTML="A"
}
else if(persent>=60 && persent < 70){
    document.getElementById("result").innerHTML="B"
}
else if(persent>=50 && persent < 60){
    document.getElementById("result").innerHTML="C"
}
else{
    document.getElementById("result").innerHTML="try again"

}
}
