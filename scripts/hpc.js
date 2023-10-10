function hpCalc(dice, pLvl, pCon, pFeat, pDwarf, pDragon) {
    if (pLvl > 1) {
        let out = dice + pCon + ((dice / 2 + 1) + pCon + pFeat + pDwarf + pDragon) * (pLvl - 1);
        // console.log(dice/2+1);
        // console.log(pCon);
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
    feiticeiro: 8,
    guerreiro: 10,
    ladino: 8,
    mago: 6,
    monge: 8,
    paladino: 10,
    patrulheiro: 10
};

var lvl = document.getElementById('level').value * 1;
var pClass = document.getElementById('classes').value;
var con = document.getElementById('con').value * 1;
var feat = 0;
var dwarf = 0;
var dragon = 0;

var currentDice = dices[pClass];

var out = hpCalc(currentDice, lvl, con, feat, dwarf, dragon);
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
        }
        out = hpCalc(currentDice, lvl, con, feat, dwarf, dragon);
        outEm.innerHTML = out;
        diceEm.innerHTML = '1d' + currentDice;
        hp1.innerHTML = currentDice + con + feat + dwarf + dragon;
        nextHp.innerHTML = (currentDice / 2 + 1) + con + feat + dwarf + dragon;
    });
}