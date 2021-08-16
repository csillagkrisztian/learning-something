
const paciens1 = {
    nev: "Csilla",
    kor: 25,
    magassag: 168 + "cm",
    suly: 57 + "kg",
    id: 1,
};

const paciens2 = {
    nev: "Viola",
    kor: 40,
    magassag: 165 + "cm",
    suly: 65 + "kg",
    id: 2, 
};

const paciens3 = {
    nev: "Gyuri",
    kor: 48,
    magassag: 186 + "cm",
    suly: 97 + "kg",
    id: 3,
};

const paciens4 = {
    nev: "Viktor",
    kor: 30,
    magassag: 180 + "cm",
    suly: 102 + "kg",
    id: 4,
};

const doktor1 = {
    nev: "Bertalan",
    paciensek: [paciens1,paciens2]
}

const doktor2 = {
    nev: "Jozsef",
    paciensek: [paciens3,paciens4]
}

const korhazBajmok = {
    nev: "St' Bajmok", 
    doktorok:[doktor1, doktor2]
}

//m
module.exports = korhazBajmok;
