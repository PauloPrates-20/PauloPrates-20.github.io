function hpCalc(dice,pLvl,pCon,pFeat,pDwarf,pDragon){
    if(pLvl>1){
        let out=dice+((dice/2+1)+pCon+pFeat+pDwarf+pDragon)*pLvl;
        return out;
    }
    else{
        let out=dice+pCon+pFeat+pDwarf+pDragon;
        return out;
    }
}

const dices={
    artifice:8,
    barbaro:12,
    bardo:8,
    bruxo:8,
    clerigo:8,
    druida:8,
    feiticeiro:8,
    guerreiro:10,
    ladino:8,
    mago:6,
    monge:8,
    paladino:10,
    patrulheiro:10
};

var lvlIn=document.getElementById('level');
var classIn=document.getElementById('classes');
var conIn=document.getElementById('con');
var featIn=document.getElementById('tough');
var dwarfIn=document.getElementById('hill');
var dragonIn=document.getElementById('dragon');

var lvl=lvlIn.value;
var pClass=classIn.value;
var con=1;
var feat=0;
var dwarf=0;
var dragon=0;

var currentDice=dices[pClass];

var out=hpCalc(currentDice,lvl,con,feat,dwarf,dragon);
// console.log(out);

var outEm=document.getElementById("hpOut");
outEm.innerHTML=out;

lvlIn.addEventListener('input', function(){
    lvl=this.value*1;
    console.log(typeof lvl);
    // console.log(lvl);
    out=hpCalc(currentDice,lvl,con,feat,dwarf,dragon);
    // console.log(out);
    outEm.innerHTML=out;
});
classIn.addEventListener('input', function(){
    pClass=this.value;
    // console.log(pClass);
    currentDice=dices[pClass];
    out=hpCalc(currentDice,lvl,con,feat,dwarf,dragon);
    outEm.innerHTML=out;
})
conIn.addEventListener('input', function(){
    con=this.value*1;
    console.log(typeof con);
    console.log(con);
    out=hpCalc(currentDice,lvl,con,feat,dwarf,dragon);
    outEm.innerHTML=out;
})
featIn.addEventListener('input', function(){
    if(this.checked){
        feat=2;
    }
    else{
        feat=0;
    }
    console.log(feat);
    out=hpCalc(currentDice,lvl,con,feat,dwarf,dragon);
    outEm.innerHTML=out;
})
dwarfIn.addEventListener('input', function(){
    if(this.checked){
        dwarf=1;
    }
    else{
        dwarf=0;
    }
    out=hpCalc(currentDice,lvl,con,feat,dwarf,dragon);
    outEm.innerHTML=out;
})
dragonIn.addEventListener('input', function(){
    if(this.checked){
        dragon=1;
    }
    else{
        dragon=0;
    }
    out=hpCalc(currentDice,lvl,con,feat,dwarf,dragon);
    outEm.innerHTML=out;
})