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
  
    switch(xx) {
        case 0:
        case 5:
        case 6:
        case 7:
        case 8:
        case 9: {
            console.log(x,RUB.rubley);
            break;
        }
        case 1: {
            console.log(x, RUB.rubl);
            break;
        }
        case 2:
        case 3:
        case 4: {
            console.log(x, RUB.rublya);
            break;
        }

    }


}  else {
         console.log(x, RUB.rubley)
        }

    


}

main();