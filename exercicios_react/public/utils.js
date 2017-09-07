export default class Convertidor {
    constructor() {}
    parseArray(iArray) {
        return iArray.map((value, key) => {
            debugger
            if (value % 3 == 0 && value % 5 == 0 ) {
                return 'FizzBuzz';
            }
            if (value % 3 == 0 || value.toString().indexOf('3') > -1) {
                return 'Fizz';
            }
            if (value % 5 == 0 || value.toString().indexOf('5') > -1) {
                return 'Buzz';
            }
            // y en el caso que no cumpla ninguna condición anterior? asumo que devuelvo el mismo número
            return value.toString();
        })
    }
}
    //
    // function parseArray(iArray){
    //     return iArray.map((value, key) => {
    //         debugger
    //         if (value % 3 == 0 && value % 5 == 0 ) {
    //             return 'FizzBuzz';
    //         }
    //         if (value % 3 == 0 || value.toString().indexOf('3') > -1) {
    //             return 'Fizz';
    //         }
    //         if (value % 5 == 0 || value.toString().indexOf('5') > -1) {
    //             return 'Buzz';
    //         }
    //         // y en el caso que no cumpla ninguna condición anterior? asumo que devuelvo el mismo número
    //         return value.toString();
    //     })
    // }
    // console.log(parseArray(iArray))

const iArray = [3, 5, 15, 4];
console.log(new Convertidor().parseArray(iArray));