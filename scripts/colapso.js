var coll=document.getElementsByClassName("collapsible");
var i;

window.onload=function(){
    for(i=0;i<coll.length;i++){
        coll[i].classList.toggle("expanded");
        var content=coll[i].nextElementSibling;
        content.style.maxHeight=content.scrollHeight+"px";
    }
}

for(i=0;i<coll.length;i++){
    coll[i].addEventListener("click", function(){
        this.classList.toggle("expanded");
        var content=this.nextElementSibling;
        if(content.style.maxHeight){
            content.style.maxHeight=null;
        }
        else{
            content.style.maxHeight=content.scrollHeight+"px";
        }
    });
}