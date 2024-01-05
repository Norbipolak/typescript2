"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//importáljuk az add function, amit csináltunk a module.jsben, majd lefordítjuk  
/*
Tuple

Gyakorlatilag egy tömb meghatározott tulajdonságokkal bíró elemekkel
*/
var personalData = ["Kis János", 25, "Budapest"];
/*
A personalData minden string number string 3-asra megfelel
az is jó lenne, ha azt mondanánk, hogy üres string 4 üres string ->
*/
personalData = ["", 4, ""];
console.log(personalData[0]);
/*
personalData[0] az lesz, hogy Kis János -> ugy tudjuk kezelni, mint egy tömböt
és ha lefordítjuk js-re, akkor tömb is lesz, csak az annyiban más a tömbtöl, hogy itt meg van
az határozva, hogy az egyes elemek milyen típusuak lesznek
*/
/***********************************************************************************************************************************************
Ezt olyasmire lehet, használni ha van egy kordinátánk egy két dimenziós kordinátarendszerben
és az x kordinátához szeretnénk, hozzáadni

A függvény vár egy tuple-t, ami két number -> (coord:[x:number, y:number]) és egy addition-t, ami szintén egy number
*/
function addToX(coord, addition) {
    return [coord[0] + addition, coord[1]];
}
/*
és az egész majd egy tuple-t add majd vissza visszatérési értékként, aminek van egy x és egy y koordinátája -> :[x:number, y:number]

(coord:[x:number, y:number], addition:number ->
van két paraméterem
1. paraméter egy tuple, ami egy x és y koordinátát tárolm mindkettő number
2. paraméter az addition, amivel hozzáadunk az x koordinátához valamennyit
*/
//ehhez, így tudunk hozzáférni -> 
var newCoord = addToX([5, 5], 6);
console.log(newCoord); //[ 11, 5 ]
//tuple-t azért érdemes tudni, mert react-ban valaminek tuple-k lesznek a visszatérési értékek
/**************************************************************************************************************************************/
//Enumeráció -> pl. http statuszok leírására jó 
var httpStatuses;
(function (httpStatuses) {
    httpStatuses[httpStatuses["OK"] = 200] = "OK";
    httpStatuses[httpStatuses["CREATED"] = 201] = "CREATED";
    httpStatuses[httpStatuses["REDIRECT"] = 301] = "REDIRECT";
    httpStatuses[httpStatuses["NOTFOUND"] = 404] = "NOTFOUND";
    httpStatuses[httpStatuses["INTERNALSERVERERROR"] = 500] = "INTERNALSERVERERROR";
})(httpStatuses || (httpStatuses = {}));
console.log(httpStatuses.CREATED);
/*
Tudni kell az enum-ról, hogy alapból rendelkeznek számértékekkel
*/
var Brands;
(function (Brands) {
    Brands[Brands["Adidas"] = 5] = "Adidas";
    Brands[Brands["Nike"] = 6] = "Nike";
    Brands[Brands["Zara"] = 7] = "Zara";
    Brands[Brands["Reebok"] = 8] = "Reebok";
})(Brands || (Brands = {}));
console.log(Brands.Adidas); //0 lesz az értéke 
//viszont ha az Adidas 5 és szeretnénk a Nike-t kiírni, akkor ->
console.log(Brands.Nike); // -> így már 6 lesz a Nike, hogy elötte beállítottuk az Adidast 5-re
/*
Ha number értéket adunk meg az egyes elemknek, akkor nem muszály az összesnek megadni értéket, mert
ha 5-tel kezdünk akkor a következők 6,7,8.... lesznek
de ezzel vigyázni is kell, mert ha pl.
    NOTFOUND = 404,
    INTERNALSERVERERROR = ha itt nem adjuk meg az 500-t mint felül, csak üresen hagyjuk, akkor 405 lesz, mert az elötti 404 volt
*/
/*
Bele tudjuk rakni egy switchbe is
*/
var httpStatus = httpStatuses.CREATED;
switch (httpStatus) {
    case httpStatuses.CREATED:
        console.log("The resource has been created!");
        break;
}
var HTTPMethods;
(function (HTTPMethods) {
    //nem csak stringeket tudunk meghatározni értékként az enum elemek számára, hanem numbereket is pl. a httpStatusban
    HTTPMethods["GET"] = "GET";
    HTTPMethods["POST"] = "POST";
    HTTPMethods["PUT"] = "PUT";
    HTTPMethods["DELETE"] = "DELETE";
    HTTPMethods["PATCH"] = "PATCH";
    HTTPMethods["HEAD"] = "HEAD";
})(HTTPMethods || (HTTPMethods = {}));
/*
Ha ezt egyszer megírjuk, akkor innentől kezdve pl a PATCH-nek az lesz az értéke ,hogy "PATCH"
viszont ha a httpMethod az nem HTTPMethod, hanem -> httpMethod:string, akkor elírhatom, így meg csak egyszer kell figyelni
az enum HTTPMethods megírásánál, hogy minden jó legyen és akkor folyamatosan az lesz
nem fontos, hogy GET = "GET", "GET" legyen a neve, megadhatunk neki bármit
->
enumeráció arra jó, hogy a hibáknak a valószínűségét csökkentsük
mert ha meghívásnál - ajax("htps://dummyjson.com/products/create", {"title":""}, HTTPMethods.POST);
nem httpMethods-ot alkalmazunk, hanem csak egy sima stringet httpMethod:string
akkor el tudom írni a postot vagy amit oda szeretnék írni -> ajax("htps://dummyjson.com/products/create", {"title":""}, "POTS");
és azt mondja, hogy nincsen ilyen http metódus
*/
function ajax(url, data, httpMethod) {
    fetch(url, {
        method: httpMethod,
        body: JSON.stringify(data)
    });
}
/*
Van 3 darab paramétere az ajax függvénynek
1. paraméter url, ami egy string
2. paraméter data, ami egy object
3. paraméter httpMethod, ami HTTPMethod típusú

az enum HTTPMethods-ba meg tudunk határozni stringeket az értékeknek -> GET = "GET",
*/
//így tudjuk meghívni
ajax("htps://dummyjson.com/products/create", { "title": "" }, HTTPMethods.POST);
/*
megadunk egy HEX kódot az enum Colorsban elkészített színeknek
*/
var Colors;
(function (Colors) {
    Colors["green"] = "#06c406";
    Colors["blue"] = "#0000ff";
    Colors["red"] = "#ff0000";
    Colors["purpel"] = "#8800ff";
})(Colors || (Colors = {}));
console.log(Colors.blue);
/*Ha mondjuk a HEX kód nem olyan egyszerű, mint pl. itt a green,
akkor nem kell megjegyeznünk, mert megcsináltuk itt és ezt majd
fel tudjuk használni ott ahol szeretnénk -> Colors.green
*************************************************************************************************************************************/
/*
tsc --init nevű parancs, ami létrehoz egy tsconfig.json-t
itt meg tudunk határozni egy pár addicionális beállítást
"target": "es2016" jelenlegi beállítsá echmascript 2016-os verziója, amit át lehet írni "ec2022"- re pl.
és a "module": "commonjs"-t is
kitöröljük a tsconfig.json és megnézzük, amikor még nem volt ez a module, akkor hogy importáltak, exportáltak dolgokat
->
module.ts
*/ 
