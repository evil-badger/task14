//Вам потрібно зробити конструктор сутності "Студент".
class Student {
    constructor(name, surname, birth, rates) {
        //Студент має ім'я, прізвище, рік народження — це властивості. 
        this.name = name,
            this.surname = surname,
            this.birth = birth,
            //Є масив з оцінками, це також властивість.
            this.rates = rates,
            //Ще у всіх Студентів є по масиву однакової довжини, у ньому 25 елементів, 
            //спочатку він не заповнений, але на 25 елементів.
            this.stat = new Array
    }

    //Це масив, в якому відзначається відвідуваність, щоразу коли ми викликаємо метод present() 
    //на чергове порожнє місце, в масив записується true, коли викликаємо .absent() - записується false.
    //Передбачте будь - який захист від того, щоб у масиві відвідуваності не могло бути більше 25 записів.
    present() {
        if (this.stat.length < 25) {
            return this.stat.push(true);
        }
    }

    absent() {
        if (this.stat.length < 25) {
            return this.stat.push(false);
        }
    }

    //І є можливість отримати вік студента та його середній бал – це методи.
    getAge() {
        return new Date().getFullYear() - this.birth;
    }

    getAverageRate() {
        //Масив – це властивість, present та absent – ​​методи.
        const average = this.rates.reduce((a, b) => a + b, 0) / this.rates.length;
        return average;
    }

    //Останній метод: .summary(), перевіряє середню оцінку і  середнє відвідування
    //(кількістьВідвідин / кількістьЗанять)
    summary() {
        let sumPresent = 0;
        for (const item of this.stat) {
            if (item == true) {
                sumPresent++;
            }
        }

        //Якщо середня оцінка більше 90, а середнє відвідування більше 0.9, 
        //то метод summary повертає рядок "Молодець!", 
        //якщо одне з цих значень менше, то - "Добре, але можна краще ", якщо обидва нижче - "Редиска!".
        const presentPercent = sumPresent / this.stat.length;
        const averageResult = this.getAverageRate();

        if (presentPercent < 0.9 && averageResult < 90) {
            return ("Идите на пересдачу");
        }
        else if (presentPercent < 0.9 || averageResult < 90) {
            return ("Добре, але можна краще")
        }

        else if (presentPercent > 0.9 && averageResult > 90) {
            return ("Молодець!")
        }
    }
}

// Не забудьте після того, як напишите цей конструктор,
// створити 2 - 3 екземпляри(конкретних студентів) і показати використання цих методів.
const excellent = new Student('Ruth', 'Ross', 1993, [100, 90, 95, 93, 91, 100, 90]);
const good = new Student('Aaron', 'Collins', 2000, [100, 90, 95, 93, 91, 100, 90]);
const unsatisfy = new Student('William', 'Burke', 1995, [60, 60, 60, 70, 80, 70, 90]);
excellent.present();
excellent.present();
excellent.present();
excellent.present();
excellent.present();
console.log(excellent.getAge());
console.log(excellent.getAverageRate());
console.log(excellent.summary());


good.present();
good.present();
good.absent();
good.absent();
good.absent();
console.log(good.getAge());
console.log(good.getAverageRate());
console.log(good.summary());

unsatisfy.absent();
unsatisfy.absent();
unsatisfy.absent();
unsatisfy.absent();
unsatisfy.present();
console.log(unsatisfy.getAge());
console.log(unsatisfy.getAverageRate());
console.log(unsatisfy.summary());