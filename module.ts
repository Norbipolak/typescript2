export default function add(a:number, b:number):number {
    return a + b;
};
/*
Ez így is müködik, olyan mintha külön megírnánk a function add-at és add-at írnánk ide 
csak most nem kell ugy leírni külön, de mindkettő jó megoldás 

ezzel a module-val visszadjuk a functiont és majd beimportáljuk az index.ts-ben legfelül
*/