
//3 parks
//4 streets

//all parks have a name and build year

//write a report
//1. tree density # of trees / number of park
//2. average age of trees and park
//3. the name o the park that as more than 1000 trees
//4. total and average length of the town's street
//5. Size classification of all streets: tiny/small/normal/huge/big/huge if
    //the side is unknown, the default is normal

class Town {
    constructor(name, byear) {
        this.name = name;
        this.byear = byear;
    }
}

class Park extends Town{
    constructor(name, byear, numT, ...area) {
        super(name, byear);
        this.numT = numT;
        this.area = area;
    }

    getTreeDen() {
        if (this.area.length === 2) {
            return this.numT / (this.area[0] * this.area[1]);

        } else {
            return `Must input valid area`;
        }
    }
}

class Street extends Town{
    constructor(name, byear, size = 'normal') {
        super(name, byear);
        this.size = size;
    }
}

let park1 = new Park('Talmaye Park', 1990, 313, 40, 50);
let park2 = new Park('Calwith Park', 1995);
let park3 = new Park('Zulton Park', 2011);

let street1 = new Street('Maple Street', 1987);
let street2 = new Street('Timber Street', 1996);
let street3 = new Street('Antioch Street', 2003);
let street4 = new Street('Lone Tree Street', 1987);

console.log(park1.getTreeDen());

