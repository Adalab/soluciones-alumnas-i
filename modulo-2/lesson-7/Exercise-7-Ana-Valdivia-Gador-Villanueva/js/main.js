'use strict';

const adalabers = [
    {name:'María',
     age: 29,
     job: 'diseñadora',
    },

    {name:'Lucía',
        age: 31,
        job: 'ingeniera química',
       },
    
    {name:'Susana',
        age: 34,
        job:'periodista',
       },

    {name:'Rocío',
        age: 25,
        job: 'actriz',
       },

    {name:'Inmaculada',
        age: 21,
        job: 'diseñadora',
       }
]

function countAdalabers(arr){
    let numAdalabers = arr.length;
    console.log(`There are ${numAdalabers} adalabers.`);
}



function averageAge(arr){
    let result=0;
    for (let i=0; i<arr.length; i++){
        result+= arr[i].age/arr.length;
    }
    console.log(`The average age of the group is ${result}.`);
}



function theYoungest(arr){
    let ageArr = [];
    for (let i=0; i<arr.length; i++){
        ageArr[i]=arr[i].age;
    }
    // console.log(ageArr);

    let result = Math.min.apply(null, ageArr);
    // console.log(result);

    for (let i=0; i<arr.length; i++){
        if (arr[i].age === result){
            console.log(`The youngest adalaber is ${arr[i].name}.`)

        }
    }
    
}

function countDesigners(arr){
    let acc=0;
    for (let i=0; i<arr.length; i++){
        if (arr[i].job === 'diseñadora'){
            acc += 1;
        }
    }
    console.log(`There are ${acc} designers.`)

}

countAdalabers(adalabers);
averageAge(adalabers);
theYoungest(adalabers);
countDesigners(adalabers)