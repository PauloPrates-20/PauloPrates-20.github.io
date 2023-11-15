function colapso(){
    for(i=0;i<coll.length;i++){
        coll[i].classList.toggle("expanded");
        var content=coll[i].nextElementSibling;
        content.style.maxHeight=content.scrollHeight+"px";
    }
}

function createTable(table, type, colFunc){
    let tierDiv = $("table");
    let tier = "";
    let ref = "";
    let id = 0;

    tierDiv.each(function(){
        tier = $(this).attr("class").split(" ").pop();
        type = $(this).attr("class").split(" ")[1];
        

        // console.log(tier);

        for(id = 0; id < table.length; id++){
            if(table[id].tier == tier){
                // console.log(table[id], true);
                switch(type){
                    case "potionTable":  
                        $(this).append("<tr><td><a>" + table[id].item + "</a></td><td>" + table[id].value + "</td></tr>");
                        break
                    case "horseTable":
                        $(this).append("<tr><td><a>" + table[id].item + "</a></td><td>" + table[id].value + "</td></tr>");
                        break;
                    case "itemTable":
                        $(this).append("<tr><td><a>" + table[id].item + "</a></td><td>" + table[id].eng + 
                        "</td><td>" + table[id].value + "</td><td>" + table[id].sint + "</td><td>" + table[id].reforge + 
                        "</td></tr>");
                        break;
                }
            }
        }
    });
    id = 0;
    ref = $(tierDiv).find("a");
    ref.each(function(){
        $(this).attr("href", table[id].ref);
        id += 1;
    });

    colFunc();
}

async function getJsonObj(fileName, type, tableFunction){
    let response = await fetch("/" + fileName);
    let table = await response.json();

    // console.log(table);

    tableFunction(table, type, colapso);
}

var coll=document.getElementsByClassName("collapsible");
var i;


$(document).ready(function(){
    let type = $("table:first").attr("class").split(" ")[1];
    getJsonObj(type + ".json", type, createTable);
});