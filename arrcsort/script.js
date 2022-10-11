'use strict';


//filter
const names = ['Ivan', 'Ann', 'Ksenia','Voldemart'];

const shortNames = names.filter(name=> name.length >5);



//map

const answers = ['IvAn','AnnA','Hello'];

const result = answers.map(item =>item.toLowerCase());


// every/some

const some = [4,'qwq', 'sfreferf'];

console.log(some.some(item=> typeof(item) === 'number'));

console.log(some.every(item=> typeof(item) === 'number'));

//reduce

const arr = [4,5,1,3,2,6];

const res = arr.reduce((sum,current)=> sum + current);

console.log(res)



const arr = ['apple' , 'pear','plum'];

const res = arr.reduce((sum,current)=> sum + ', ' + current);

console.log(res)

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog:'animal',
    cat:'animal'
};


const newArr = Object.entries(obj).filter(item=> item[1] === 'persone').map(item=> item[0]);

console.log(newArr);


//Реализация методов альтернативным путем

//filter
const filterThis = [2,4,3,6,8,9];

const filter = (arr, callback) => {
    const filteredArr = [];
    for(let elem of arr ){
        if(callback(elem)) filteredArr.push(elem);
    }
    return filteredArr; 

};

console.log(filter(filterThis, elem => elem % 3 == 0));



//some
const someOfThis = ['Java', 'JavaScript', 'Python'];

const some = (arr, callback) => {

    for (let elem of arr ){
        return callback(elem) ?  true :  false;
    }
    
};

console.log(some(someOfThis, elem => typeof(elem) == 'string' ));

//map
const mapMe = [1000, 800, 2400, 500];
mapMe.sort((a,b) => a-b) ;
const map = (arr, callback) => {
    const maps = []
    for (let elem of arr ){
        maps.push(callback(elem));
    }
    
    return maps;
};

console.log(map(mapMe, elem => elem + 200));

 

//Еще способы фильтрации

const cities = [
    {name: 'Moscow', population: 12506468},
    {name: 'Saint Peterburg', population: 5351935},
    {name: 'Novosibirsk', population: 1612833},
    {name: 'Kaliningrad', population: 482443},
    {name: 'Kaluga', population: 336726}
];

const filtr = (check) => {
    const millionPlusCities = [];
    for (var i = 0; i < check.length; i++) {
        if (check[i].population > 1000000){
            millionPlusCities.push(check[i]);
        }
    }
   return millionPlusCities;
}

console.log(filtr(cities));



