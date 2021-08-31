const funkciok = require('./lecke5');

describe('Funkcio tesztek', () => {
    it('ossze kene hogy adjon', () => {
        const a = 5;
        const b = 8;
        expect(funkciok.osszeadas(a,b)).toEqual(13);
})})
