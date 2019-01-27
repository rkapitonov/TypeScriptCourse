import { read } from "./console";

async function main(): Promise<void>
{
    /*В программу вводят произвольное число, а программа должна вывести в от словосочетание со словом рубль, в правильном склонении
К примеру:

- 1 рубль
- 3 рубля
- и т. д.*/

    console.log('введите число:');
    var x = Number(await read());
    enum RUB {rubley = 'рублей', rubl = 'рубль', rublya = 'рубля'};

    if ((x>20) || (x<10))
{
    var xx = x%10;
    
    if (xx===0) {
        console.log(x, RUB.rubley);
    } else if (xx===1) {
        console.log(x, RUB.rubl);
    } else if ((xx>1) && (xx<5)) {
        console.log(x, RUB.rublya);
    } else if (xx>4) {
        console.log(x, RUB.rubley)
    } 


}  else {
         console.log(x, RUB.rubley)
        }

    


}

main();