function loaddoc(){
   const xhttp = new XMLHttpRequest();
   xhttp.onload = function(){
    if(this.readyState==4 && this.status == 200){
        // console.log(this.readyState)
    document.getElementById("demo").innerHTML = 
    this.responseText;
   }
}
   xhttp.open("Get","ajax_info.txt" ,true);
   xhttp.send();
}