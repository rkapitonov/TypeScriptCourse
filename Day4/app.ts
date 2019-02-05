import { read } from "./console";

/*
Создайте транспортное средство, которое состоит из двигателя, колес и бензобака. 
Все внутренние части тс должны взаимодействовать друг с другом. 
Внутренний механизм должен быть скрыт от клиента. 
Все, что ему нужно знать это accelerate(), brake(), turn() - 
эти методы должны быть частью интерфейса Drivable. 
Создайте автомобиль.
*/


// carWheel - koleso
// carEngine - dvigatel
// carBenzobak - benzobak

interface IDrivable {
    accelerate(turn: number): number;
    brake(wheel: number): number;
    turn(engine: number): number;
}

class Transport implements IDrivable{
    private transportWheel: number;
    private transportEngine: number;
    private transportBenzobak: number;

    constructor(wheel: number, engine: number, benzobak: number) {
        this.transportBenzobak = benzobak;
        this.transportEngine = engine;
        this.transportWheel = wheel;
    }

    accelerate(turn: number): number {
        return turn;
    }

    brake(wheel: number): number {
        return wheel;
    } 

    turn(engine: number): number {
        return engine;
    }

    

}

async function main(): Promise<void>
{
    let Mazda = new Transport(1,2,3);
    console.log(Mazda);
}
main();