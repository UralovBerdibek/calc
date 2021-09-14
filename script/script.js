// Цикл

// ++ - +1
// -- - -1

// while (a <= 10) {
//     console.log('Hello ' + a);
//     a = a + 1
// }

// do {
//     var a = prompt('Son kiriting')
// } while (a <= 10);

// for (var i = 1; i <= 10; i++) {
//     console.log('Hello ' + i)
// }

// var a = +prompt('son kiriting')
// var b = +prompt('son kiriting')

// for (let i = 1; i < a; i++) {

//     for (let j = 1; j < b; j++) {
//         console.log(`${i} * ${j} = ${i*j}`);
//     }

// }

// for (let i = 0; i < a; i++) {
//     var p = ''
//     for (let j = 0; j < b; j++) {
//         if (i % 2 === 0) {
//             if (j % 2 == 0) {
//                 p = p + '[x]'
//             } else {
//                 p = p + '[ ]'
//             }
//         } else {
//             if (j % 2 !== 0) {
//                 p = p + '[x]'
//             } else {
//                 p = p + '[ ]'
//             }
//         }
//     }
//     console.log(p);
// }


var calcForm = document.querySelector('.calc__input')
var calcItem = document.querySelectorAll('.calc__item')
var equal = document.querySelector('.calc__item-4')
let remove = document.querySelector('.calc__item-1')
let history = document.querySelector('.calc__item-2')
let strip = document.querySelector('.calc__item-3')

const hist = []

for (let i = 0; i < calcItem.length; i++) {
    let a = calcItem[i]
    a.addEventListener('click', (e) => {
        calcForm.value = calcForm.value + a.innerHTML
    })
}

equal.addEventListener('click', () => {
    var result = eval(calcForm.value)
    if (result) {
        calcForm.value = result
        hist.push(result)
    }

})

remove.addEventListener('click', function () {
    calcForm.value = ''
})

strip.addEventListener('click', function () {
    console.log(calcForm.value);
    calcForm.value = calcForm.value.substring(0, calcForm.value.length - 1)
    
})

history.addEventListener('click', function () {
    calcForm.value = hist
})