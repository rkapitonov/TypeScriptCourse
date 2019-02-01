import { read } from "./console";

/*
Создайте транспортное средство, которое состоит из двигателя, колес и бензобака. 
Все внутренние части тс должны взаимодействовать друг с другом. 
Внутренний механизм должен быть скрыт от клиента. 
Все, что ему нужно знать это accelerate(), brake(), turn() - 
эти методы должны быть частью интерфейса Drivable. 
Создайте автомобиль.
*/

async function main(): Promise<void>
{
    
}

main();


// carWheel - koleso
// carEngine - dvigatel
// carBenzobak - benzobak

interface IDrivable {
    accelerate(): number;
    brake(): number;
    turn(): number;
}

class Car {
    private carWheel: number;
    private carEngine: string;
    private carBenzobak: number;







}