import { read } from "./console";

async function main(): Promise<void>
{
    console.log('Введите строку');
    var x = await read();
    var afterSplit = x.split(' ');
    var b = afterSplit.length;
    var arr: string[] = [];
    var answer: string = '';                        
    var j = -1;                                     //номер элементов массива arr[j+1]

    for (var i=afterSplit.length; i>0; i--) {       //от последнего элемента массива до первого
        arr[j+1] = afterSplit[i-1];                 //создаем новый массив наоборот     
        answer += arr[j+1] + ' ';                   //создаем строку из этого массива
    }
    console.log(answer);
}

main();