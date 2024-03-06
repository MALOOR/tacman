class Time {

    constructor(){

        this.time = Date.now(); //me guarda la hora actual del sistema
        this.mDeltaTime = 0; //creamos una variable temporal
        this.updateTime(); //funcion de actualizar tiempo
    }

    updateTime(){

        this.mDeltaTime = (Date.now() - this.time) * 0.001; //decimos que deltaTime es igual al tiempo actual menos el tiempo que tenemos guardado.
        this.time = Date.now(); //actualizo variable a la hora actual
        requestAnimationFrame(this.updateTime.bind(this)); //actualizo la misma funcion, recursiva e infinita (60 veces por segundo)
    }

    deltaTime(){

        return this.mDeltaTime; //una funcion es retornada
    }

   

};

let Timer = {

    now:  "",
    day: 0,
    month: 0,
    year: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    miliSeconds: 0      
};

function InitTimer(){

    while(true){

        Timer.now = new Date();
        Timer.hours = Timer.now.getHours();
        Timer.minutes = Timer.now.getMinutes();
        Timer.seconds = Timer.now.getSeconds();
        Timer.miliSeconds = Timer.now.getMiliseconds();
        Timer.day = Timer.now.getDate();
        Timer.month = Timer.now.getMonth();
        Timer.year = Timer.now.getFullYear();

    }
}



