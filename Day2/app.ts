import { read } from "./console";

async function main(): Promise<void>
{
    /*В программу вводят произвольное число, а программа должна вывести в от словосочетание со словом рубль, в правильном склонении
К примеру:

- 1 рубль
- 3 рубля
- и т. д.*/

    console.log('введите число:');
 //   var x = Number(await read());
    enum RUB {rubley = 'рублей', rubl = 'рубль', rublya = 'рубля'};


    var rublei : number[] = [0, 5, 6, 7, 8, 9];
    var rublya : number[] = [2,3,4];
    var rubl : number[] = [1];

    var b = Number(await read());

    
    if (isNaN(b) === false)              //проверка - число это или нет         
{
 
    var bb = b%10; //остаток от деления на 10
    var i: number = 0;
   
    if ((b>20) || (b<10)) {
    while (i <= 9) 
{

    switch (bb) {
        case rublei[i]: {
            console.log(b, RUB.rubley);
            break;
        }
        case rublya[i]: {
            console.log(b, RUB.rublya);
            break;
        }
        case rubl[i]: {
            console.log(b, RUB.rubl);
            break;
        }
    }
    i++;
}

    }
    else {
        console.log(b, RUB.rubley);
       }


}  
else {console.warn('Для ввода доступны только число')};


}

main();