//RESUELVE LOS EJERCICIOS AQUI
//Ej 1 
let numbers = [4, 5, 6, 7, 8, 9, 10]
function elevados () {
    return numbers.map(num => {
        return num ** num; 
    })
}
//console.log(elevados(numbers));
//Ej 2
let foodList = ['Pizza', 'Ramen', 'Paella', 'Entrecot']
let result2 = foodList.map(food => {
    if (food === 'Pizza'){
        return `Como soy de Italia, amo comer ${food}`
    } else if (food === 'Ramen'){
        return `Como soy de Japón, amo comer ${food}`
    } else if (food === 'Paella'){
        return `Como soy de Valencia, amo comer ${food}`
    } else if (food === 'Entrecot') {
        return `Aunque no como carne, el ${food} es sabroso`
    }
})
//Ej 3
staff = [
    {
    name: 'Pepe',
    role: 'The Boss',
    hobbies: ['leer', 'ver pelis']
  },
  {
    name: 'Ana',
    role: 'becaria',
    hobbies: ['nadar', 'bailar']
  },
  {
    name: 'Luis',
    role: 'programador',
    hobbies: ['dormir', 'comprar']
  },
  {
    name: 'Carlos',
    role: 'secretario',
    hobbies: ['futbol', 'queso']
  }
];
let result3 = staff.map(staf => {
    return `${staf.name} es ${staf.role} y le gusta ${staf.hobbies[0]} y ${staf.hobbies[1]}`
});
//Ej 4
const numbers2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let result4 = numbers2.filter(num => {
    return num % 2 !== 0
});
//Ej 5
const foodList2 =[
{
  name: 'Tempeh',
  isVeggie: true
},
{
  name: 'Cheesbacon burguer',
  isVeggie: false
},
{
  name: 'Tofu burguer',
  isVeggie: true
},
{
  name: 'Entrecot',
  isVeggie: false
}];

let veggie = foodList2.filter(food => {
    return food.isVeggie == true
}); 
let result5 = veggie.map(foo => {
    if (foo.name === 'Tempeh'){
        return `Que rico ${foo.name} me voy a comer!`;
    } else if (foo.name === 'Tofu burguer') {
        return `Que rica ${foo.name} me voy a comer!`;
    }
})

//Ej 6

const inventory = [
  {
    name: 'Mobile phone',
    price: 199
  },
  {
    name: 'TV Samsung',
    price: 459
  },
  {
    name: 'Viaje a Cancún',
    price: 600
  },
  {
    name: 'Mascarilla',
    price: 1
  }
];
let caro = inventory.filter(obj => {
    return obj.price > 300;
})
let result6 = caro.map(nom => {
    return nom.name;

})

//Ej 7
let numeros3 = [39, 2, 4, 25, 62];
let result7 = numeros3.reduce((acc, curr) => acc * curr,);
//Ej 8
const sentenceElements = [
  'Me',
  'llamo',
  'Miguel',
  'y',
  'quiero',
  'sentir',
  'la',
  'fuerza',
  'con',
  'javascript'
];
let result8 = sentenceElements.reduce((acc, curr) => acc + ' ' + curr);
//Ej 9 
const books = [
  {
    name: ' JS for dummies',
    author: 'Emily A. Vander Veer',
    price: 20,
    category: 'code'
  },
  {
    name: 'Don Quijote de la Mancha',
    author: 'Cervantes',
    price: 14,
    category: 'novel'
  },
  {
    name: 'Juego de tronos',
    author: 'George R. Martin',
    price: 32,
    category: 'Fantasy'
  },
  {
    name: 'javascript the good parts',
    author: 'Douglas Crockford',
    price: 40,
    category: 'code'
  }
];

let code = books.filter(book => {
    return book.category === 'code';
})
let price = code.map(cod => {
    return cod.price;
})
let result9 = price.reduce((acc, curr) => {
        return acc + curr;
    })

