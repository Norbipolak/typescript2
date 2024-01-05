"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function add(a, b) {
    return a + b;
}
exports.default = add;
;
/*
Ez így is müködik, olyan mintha külön megírnánk a function add-at és add-at írnánk ide
csak most nem kell ugy leírni külön, de mindkettő jó megoldás

ezzel a module-val visszadjuk a functiont és majd beimportáljuk az index.ts-ben legfelül
*/ 
