/*
    Az objektum-orientált programozás a valós élet 
    objektumait másolja 

    A valós élet objeltumai két alapvető attributummal rendelkeznek 
        * tulajdonságok -> mezőknek nevezzük az objektum orientált programozásban 
        * müködési/viselkedési formák -> metódusok 
*/ 

/*
Az egésznek az alapját a class(osztályok) képezik
*/ 

class Vehicle {
    //rendelkezhet bizonyos tulajdonságokkal, mezőkkel -> 
    private _vehicleType:VehicleTypes; //private nem férhető hozzá példányon keresztül
    public brand:string;
    public type:string;
    public color:Colors;
    public wheelNumbers:number;
    public wingNumbers:number;
    public weight:number;
    /*
    itt nem csak azt tudjuk csinálni, hogy létrehozunk különböző mezőket, hanem a mezőket is 
    elláthatjuk láthatósági módosítokkal 
    3 fajta létezik -> 
    1. public
    2. private
    3. protected
    */

    /*
    setter arra jó, hogy a private mezőnek vagy bármilyen mezőnek az értékét be tudjuk állítani paramétereken keresztül 
    ez azért jó, mert az osztályon kivülről látjuk a példányon keresztül nem tudjuk meghatározni vehicleType-ot,
    visznt az osztályon belül vagyunk ezért hozzá tudunk férni a this._vehicleType-hoz 
    és megkapja a paraméterül adott értéket vt
    */
    set vehicleType(vt:VehicleTypes){
        this._vehicleType = vt;
    }

    get vehicleType():VehicleTypes { // vehicleTypes enum típus 
        return this._vehicleType;
    }
    /*
    Azzal, hogy csináltunk egy settert és egy gettert el tudjuk érni a private mezőnket kivülről
    viszont, ha nem lenne a getter akkor kivülről még ugyanugy nem lenne elérhető 
    mert a setter önmagában csak beállítja az értéket, de nem adja vissza 
    getterrel meg visszakapjuk azt 

    Ilyen helyzetben nincsen ennek semmi értelme, mert ha alapból publikussá állítottam volna be, 
    akkor ugyanezeket a funkciókat kaptuk volna meg naggyából 6 sorral kevesebből 
    -> 
    csak a getterek, setterek bemutatása miatt, meg a private, public 

    
    Ha az összes mezőt private-ra állítanánk annak is van értelme
    itt jönnek képbe a constructorok 
    ->
    constructorok speciális metódusok 
        * nincs visszatérési értéke 
        * fogadhat paramétereket 
        * minden példányosításnál lefut!!!!!!!!!!!!!
        * constructor kulcsszóval érhető el 
        * egy darab lehet belőle

    Amikor létrehozzuk a példányt abban a pillanatban le fog futni a constructorunk 
    */

    constructor(vehicleType:VehicleTypes, brand:string, type:string, color:Colors, wheelNumbers:string, wingNumbers:string, weight:number = 100) {
        //ugy van értelme a constructornak, ha fogad paramétereket
        this._vehicleType = vehicleType;
        this.brand = brand;
        this.type = type;
        this.color = color;
        this.wheelNumbers = wheelNumbers;
        this.wingNumbers = wingNumbers;  
        this.weight = weight;
        /*
        a this. mindig az osztály mezeire utal és a nem this.-es mindig a constructor paraméterre utal 
        */
    }
}

/*
Ha van constructorunk, akkor így észítünk egy példányt belőle
Innentől kezdve a constructoron keresztül meghatároztuk az összes mezőnek az értékét
Így mindent a constructor segítségével állítottunk meg, méghozzá típusbiztossan -> 
sokkal kevesebb a hibalehetőség mintha külön-külön megadnánk vagy véletlenül elfelejtenénk megadni az egyes 
mezőknek az értékeit -> 
construcotor arra jó, hogy kötelező megadni paramétereket vagy amiket nem kötelező megadni, annak csinálunk
a constructorben egy alapértelmezett értéket pl. weight:number = 100
*/
const car:Vehicle = new Vehicle(
    VehicleTypes.car, "BMW", "3", Colors.purple,
    4, 0, 1200
);

//ne felejtsük el ezeket megadni a class Vehicle-be -> public vehicleType:VehicleTypes
enum VehicleTypes {
    car = "autó",
    ship = "hajó",
    plane = "repülőgép",
    bicycle = "bicikli"
}

enum Colors {
    blue = "#3e9ecf",
    green = "#14db71",
    red = "#d42e00",
    purple = "#9e00ed",

}

/*
készítünk belőle egy példányt 
hiába nem adtunk meg értékeket, nem fog olyan hibát generálni, hogy ne tudjon lefutni
*/
const car:Vehicle = new Vehicle();//vehicle osztály másolata egy car nevezető változóban, akkor pontos, ha beírjuk, hogy egy vehicle típus
car.vehicleType = VehicleTypes.car; //nem tudjuk ezt mondani, ha private-ra van állítva a class-ban 
car.brand = "BMW";
car.type = "3";
car.color = Colors.purple; //amire itt megszeretnénk határozni arra csinálunk egy enum colors-ot 
car.wheelNumbers = 4;
car.wingNumbers = 0;
car.weight = 1200;

/*
Eddig teljesen ugyanaz az enum-okat leszámítva mint a javascriptben
annyi a különbség, hogy átírom a class Vehicle-ben a vehicleType-ot private-ra
akkor ez alá lesz itt húzva -> 
const car = new Vehicle();
car.vehicleType = VehicleTypes.car; -> ez lesz aláhúzva 
mert, hogy a private az a példányon keresztül nem férhető hozzá 

ez a példány -> const car = new Vehicle()
azért hívjuk példánynak mert simán csinálhatunk egy másikat 
mondjuk egy car2-t ami teljesen másféle tulajdonságokkal bír 
*/

//másik példány 
const car2:Vehicle = new Vehicle();//implicit meghatározom, hogy egy vehicle típus, de itt most meghatároztuk explicit is :Vehicle-vel

/*
Ha private valami az osztályban, akkor kizárólag csak az osztályban férhető hozzá 
átírtuk az osztályban a vehicleType-ot _vehicleType-ra és csinálunk az osztályban egy 
settert és egy gettert

set vehicleType(vt:VehicleTypes){
        this._vehicleType = vt;
    }

és a példányban így lesz majd elérhető ->
car.vehicleType = VehicleTypes.car;
a private-hoz írtunk egy alsóvonást -> private _vehicleType:VehicleTypes
_vehicleType a private mezőnk 
a sima vehicleType pedig a setterem 
és a _vehicleType nem tudom elérni a példányban csak a vehicleType

programozási konvenció, hogy a private mezőknek alsóvonalat adunk 
paraktikus, mert ha mindegyik simán vehicleType lenne, akkor nem 
tudná megkülönböztetni a fordítonk, hogy mi-micsoda

létrehozunk egy gettert az osztályunkban 
*/