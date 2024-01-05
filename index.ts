import add from "./module.js";
//importáljuk az add function, amit csináltunk a module.jsben, majd lefordítjuk a tsc index.ts-vel
/*
ezt kapjuk az index.js tetején -> 
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
így importálta be a modult, ez a commonjs-es verzió
commonjs -> 
könyvtárszerűség, ami be tud tölteni különböző modulokat és akkor használták, amikor 
még nem volt elterjedve az import exportos module rendszer a javascriptben 
ez már nem jó, mert évek óta teljesen jól müködik a javascriptes module rendszer 
és az összes böngészőnek az 5-6 évre visszamenőleges verziója tudja ezt
-> 
erre azt tudjuk mondani, hogy tsc --init, ahol át tudjuk állítani a module-t commonjs-ről  
*/
/*
Tuple

Gyakorlatilag egy tömb meghatározott tulajdonságokkal bíró elemekkel
*/

let personalData:[string, number, string] = ["Kis János", 25, "Budapest"];
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

function addToX(coord:[x:number, y:number], addition:number):[x:number, y:number]{ 
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
const newCoord = addToX([5, 5], 6);
console.log(newCoord); //[ 11, 5 ]

//tuple-t azért érdemes tudni, mert react-ban valaminek tuple-k lesznek a visszatérési értékek

/**************************************************************************************************************************************/

//Enumeráció -> pl. http statuszok leírására jó 

enum httpStatuses {
    OK = 200,
    CREATED = 201,
    REDIRECT = 301,
    NOTFOUND = 404,
    INTERNALSERVERERROR = 500
}

console.log(httpStatuses.CREATED);

/*
Tudni kell az enum-ról, hogy alapból rendelkeznek számértékekkel 
*/

enum Brands {
    Adidas = 5,
    Nike,
    Zara, 
    Reebok
}

console.log(Brands.Adidas);//0 lesz az értéke 
//viszont ha az Adidas 5 és szeretnénk a Nike-t kiírni, akkor ->
console.log(Brands.Nike);// -> így már 6 lesz a Nike, hogy elötte beállítottuk az Adidast 5-re
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

const httpStatus:httpStatuses = httpStatuses.CREATED;

switch(httpStatus) {
    case httpStatuses.CREATED:
        console.log("The resource has been created!");
    break;
}

enum HTTPMethods {
    //nem csak stringeket tudunk meghatározni értékként az enum elemek számára, hanem numbereket is pl. a httpStatusban
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
    PATCH = "PATCH",
    HEAD = "HEAD"
}
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

function ajax(url:string, data:object, httpMethod:HTTPMethods){
    fetch(url, { //itt van a http leíró obkejtumunk
        method:httpMethod, 
        body:JSON.stringify(data)
    })
}
/*
Van 3 darab paramétere az ajax függvénynek 
1. paraméter url, ami egy string 
2. paraméter data, ami egy object
3. paraméter httpMethod, ami HTTPMethod típusú

az enum HTTPMethods-ba meg tudunk határozni stringeket az értékeknek -> GET = "GET",
*/

//így tudjuk meghívni
ajax("htps://dummyjson.com/products/create", {"title":""}, HTTPMethods.POST);


/*
megadunk egy HEX kódot az enum Colorsban elkészített színeknek 
*/
enum Colors {
    green = "#06c406",
    blue = "#0000ff",
    red = "#ff0000",
    purpel = "#8800ff",
}
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

/*
Típusok
Arra jók, hogy meg tudunk határozni velük egy saját típusösszesítést 
*/

type Person = {
    firstName:string;
    lastName:string;
    age:number;
    settlement:string;
    /*itt még később meghatároztuk a favColors-ot 
    és mivel nincsen favColor kulcsa a p:Person objektumnak,
    ezért hibának minősül, de ha viszont odarakunk egy ? jelet, az azt jelenti, hogy nullable 
    nem kötelező megadni a p:Person-nál 
    */
    favColor?:string;
};
//saját különálló típusként müködik 

/*
készítünk egy p-t, aminek a típusa az, hogy Person
pontosan tudjuk, hogy ez az objektum milyen kulcsokat és értékeket képes illetve muszály tárolnia 
*/
const p:Person = {
    firstName:"Szabó",
    lastName:"Márton",
    age:25,
    settlement:"Budapest"
};

function registration(p:Person) { //megadjuk neki a p:Person paramétert 
    console.log(`${p.firstName} ${p.lastName} is successfully registered!`)
};

registration(p); // ha megadjuk neki p-t akkor müködőképes lesz 

/*
Viszont ha átadunk neki egy olyat, hogy type Car -> 
*/

type Car = {
    brand:string;
    type:string;
    year:number;
    color:Colors; // ami lehet Colors típusú, itt már hasznát is vesszük ennek a dolognak 
};
//csinálunk egy olyan objektumot, ami ezeket a tulajdonságokat felveszi 

const c:Car = {
    brand:"Opel",
    type:"Astra",
    year:1996,
    color:Colors.blue
}

registration(c);
/*
és ha ezt szeretnénk átadni a registration függvénynek, akkor az már nem fog sikerülni 
tekkintve, hogy teljesen más típusról van szó

Típusbiztossá tettük a registration-t és ha esetleg olyan típusú változót
adnánk meg paraméterként, ami nem müködőképes, akkor hibát fog jelezni
*/

/*
!!!!!!!!!!!!Összegzés 
1. csinálunk egy type-ot(típusösszuegzés), ahol meghatározzuk, hogy a kulcsok milyen típust vehetnek fel pl. string, number stb
2. ezt a típusösszegzést megadjuk egy változónak és csinálunk egy objektumot 
3. Ebben az objektumban megadjuk a típusösszegzésben meghatározott kulcsoknak az értékeit, aszerint ,hogy a típusösszegzésben 
az adott kulcshoz milyen típus irtunk pl. brand:string akkor a type-ban valami stringnek kell lenni az értékének pl.brand:"Opel"
4. ezt a type-ot átadjuk ilyen formában (p:Person) egy függvénynek, ahol dolgozunk vele 
5. registration(p); meghívjuk a függvényt, itt már nem p:Person lesz, hanem csak p
*/

//object-oriented.ts