import { read } from "./console";
import { join } from "path";

async function main(): Promise<void>
{
/*    
Найти массив с максимальной суммой элементов. 
Сгенерировать десять массивов из случайных чисел. 
Вывести их и сумму их элементов в консоль. 
Найти среди них один с максимальной суммой элементов. 
Указать какой он по счету, повторно вывести этот массив и сумму его элементов. 
Генерация массивов и подсчет суммы их элементов оформить в виде отдельных функций.
*/

console.log('Введите размер массивов:');
var sizeMassive = Number(await read());
console.log('Введите количество массивов:');
var countMassive = Number(await read());

generateMassive(sizeMassive, countMassive);

}

main();



function generateMassive(sizeMassive:number, countMassive: number): number[] //Array<number[]> //генерация arrays
{
    var maxSum = 0;
    var nomerMassiva = 0;
    var massive = new Array(sizeMassive);

    //формирование массивов
    for (var i = 0; i<countMassive; i++) 
    {
        massive[i] = new Array(i);
        
        for (var j=0; j<sizeMassive; j++) 
        {
            
            massive[i][j] = (Math.trunc((Math.random()*200) - 50)); 
            
        }


    //сумма i - го массива    
        var sum = arraySum(massive[i]);
        console.log('Сумма ', i+1, 'массива = ', sum);

    //максимальная сумма + nomer massiva        
        
            if (maxSum < sum)
                    {
                        maxSum = sum;
                        nomerMassiva = i;
                    }
 
    }
 

    console.log(massive);
    console.log('Max Sum = ', maxSum, '. Номер массива = ', nomerMassiva+1, ' ', massive[nomerMassiva]);     
    return massive;

}


function arraySum(array): number {

    var sum = 0;
    for(var i = 0; i < array.length; i++)
    {
        if (isNaN(array[i]) === false) 
        {
        sum += array[i];
        }
    }
   // console.log(sum);
        return sum;
}


