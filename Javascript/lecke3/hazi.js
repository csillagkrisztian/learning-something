// A betegeknek kialakitunk egy automatikus gyógyszerosztó algoritmust
/* Feltételek: 
- Ha valaki magasabb mint 175cm - annak kell adni Brufen-t
- Ha valaki soványabb mint 70kg - annak kell adni Bensedin-t
- Ha valaki harminc évtől idősebb nem szabad, hogy Bensedin-t kapjon
- Ha valaki kövérebb mint 100kg - annak kell adni Glucophage-t
- Ha valaki idősebb 60 tól - annak kell adni Diclophen-t
- Ha valakinek nincs biztosítása, nem kaphat Glucophage-t, se Diclophen-t

A véglet így kell, hogy kinézzen: 
{
    "páciens neve":["gyógyszer","gyógyszer"] / vagy ha nincs, akkor null
}

***Hint***: 
    1. Hozzá lehet adni objektumhoz kulcsokat így: 

    **IGEN ha LISTA vagy OBJEKTUM akkor is const ha változtatjuk, ha érdekel, elmondom miért jövő órán**
        const gyogyszerObjektum = {};

        console.log(gyogyszerObjektum);
        // amit kimutat
        {}

        gyogyszerObjektum["Mari"] = ["Bensedin","Glucophage"];

        console.log(gyogyszerObjektum);
        // amit kimutat
        {
            Mari:["Bensedin","Glucophage"]
        }

    2. Hozzá lehet adni listákhoz adatokat így: 

        const valamiLista = [];

        console.log(valamiLista);
        // amit kimutat
        []

        valamiLista.push('cica');
        valamiLista.push('mica');

        console.log(valamiLista);
        // amit kimutat
        ['cica','mica']

***Challenge***: Mi van ha nem csak ez a két doktor van, hanem bármennyi? 
*/
