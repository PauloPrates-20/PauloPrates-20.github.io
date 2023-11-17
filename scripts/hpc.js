function hpCalc(dice, pLvl, pCon, pFeat, pDwarf, pDragon, mcOne, mcTwo, mcThree, mcLvl) {
    let halfMain = dice / 2 + 1;
    let diceOne = 0;
    let diceTwo = 0;
    let diceThree = 0;

    if(mcOne > 0){
        diceOne = mcOne / 2 + 1;
        // console.log(diceOne);
    }
    if(mcTwo > 0){
        diceTwo = mcTwo / 2 + 1 ;
    }
    if(mcThree > 0){
        diceThree = mcThree / 2 + 1;
    }

    let halfDice = diceOne + diceTwo + diceThree;

    if (pLvl + mcLvl > 1) {
        out = (dice + pCon) + (halfMain + pCon) * (pLvl - 1) + (halfDice + pCon) * mcLvl + (pFeat + pDwarf + pDragon) * (pLvl + mcLvl);
        return out;
    }
    else {
        let out = dice + pCon + pFeat + pDwarf + pDragon;
        return out;
    }
}

const dices = {
    artifice: 8,
    barbaro: 12,
    bardo: 8,
    bruxo: 8,
    clerigo: 8,
    druida: 8,
    feiticeiro: 6,
    guerreiro: 10,
    ladino: 8,
    mago: 6,
    monge: 8,
    paladino: 10,
    patrulheiro: 10
};



var lvl = document.getElementById('level').value * 1;
var totalLvl = 1;
var pClass = document.getElementById('classes').value;

var currentDice = dices[pClass];

var con = document.getElementById('con').value * 1;
var feat = 0;
var dwarf = 0;
var dragon = 0;
var lvlOne = 0;
var lvlTwo = 0;
var lvlThree = 0;
var multOne = 0;
var multTwo = 0;
var multThree = 0;
var halfdOne = 0;
var halfdTwo = 0;
var halfdThree = 0;
var halfD = currentDice / 2 + 1;
var multLvl = 0;



var out = hpCalc(currentDice, con, feat, dwarf, dragon, multOne, multTwo, multThree, totalLvl);
// console.log(out);

var outEm = document.getElementById('hpOut');
var diceEm = document.getElementById('diceOut');
var hp1 = document.getElementById('lvl1');
var nextHp = document.getElementById('nextLvl');
outEm.innerHTML = out;
diceEm.innerHTML = '1d' + currentDice;
hp1.innerHTML = currentDice + con + feat + dwarf + dragon;
nextHp.innerHTML = (currentDice / 2 + 1) + con + feat + dwarf + dragon;

var inputs = document.getElementsByClassName('stats');
for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener('change', function () {
        // console.log(this.id);
        switch (this.id) {
            case 'level':
                lvl = this.value * 1;
                break;
            case 'classes':
                pClass = this.value;
                currentDice = dices[pClass];
                break;
            case 'con':
                con = this.value * 1;
            case 'tough':
                if (this.checked) {
                    feat = 2
                }
                else {
                    feat = 0;
                }
                break;
            case 'hill':
                if (this.checked) {
                    dwarf = 1;
                }
                else {
                    dwarf = 0;
                }
                break;
            case 'dragon':
                if (this.checked) {
                    dragon = 1;
                }
                else {
                    dragon = 0;
                }
            case 'lvlOne':
                lvlOne = this.value * 1;
                break;
            case 'lvlTwo':
                lvlTwo = this.value * 1;
                break;
            case 'lvlThree':
                lvlThree = this.value * 1;
                break;
            case 'multOne':
                if(this.value != "none"){
                    multOne = dices[this.value];
                    lvlOne = inputs[6].value * 1;
                    halfdOne = multOne / 2 + 1;
                    
                }
                else{
                    multOne = 0;
                    halfdOne = 0;
                }
                break;
            case 'multTwo':
                if(this.value != "none"){
                    multTwo = dices[this.value];
                    lvlTwo = inputs[8].value * 1;
                    halfdTwo = multTwo / 2 + 1;
                }
                else{
                    multTwo = 0;
                    halfdTwo = 0;
                }
                break;
            case 'multThree':
                if(this.value != "none"){
                    multThree = dices[this.value];
                    lvlThree = inputs[10].value * 1;
                    halfdThree = multThree / 2 + 1;
                }
                else{
                    multThree = 0;
                    halfdThree = 0;
                }
                break
        }
        halfD = currentDice / 2 + 1;
        multLvl = lvlOne + lvlTwo + lvlThree;
        // console.log(halfdOne, halfdTwo, halfdThree);
        // console.log(totalLvl);
        out = hpCalc(currentDice, lvl, con, feat, dwarf, dragon, multOne, multTwo, multThree, multLvl);
        outEm.innerHTML = out;
        diceEm.innerHTML = '1d' + currentDice;
        hp1.innerHTML = currentDice + con + feat + dwarf + dragon;
        nextHp.innerHTML = halfD + con + feat + dwarf + dragon;
    });
}