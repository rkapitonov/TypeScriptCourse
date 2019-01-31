import { read } from "./console";

function generateMassive(sizeMassive:number, countMassive: number): number[] //генерация arrays
{
    var massive: number[] = [];
    var mnogoMassivov: Array<number[]>;
    
    for (var i; i<sizeMassive; i++) {
        massive[i] = (Math.trunc((Math.random()*200) - 50));
    }
    
    for (let j=0; j<countMassive; i++) {

        mnogoMassivov[]

    }
    
    
    
    
    
    console.log(massive);
    return massive;
    
}




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
var countMassive = Number(await read())


generateMassive(sizeMassive, countMassive);



}

main();