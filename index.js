// // let nameStudent = prompt('Введите свое имя')
// let age = +prompt('Введите свой возраст')
// // let gender = prompt('Введите ваш пол М или Ж')
// let number ="9"
// let hello = 'Hello Sevinch'
// let a = true
// let b =false
// // if(age >18){
// //     alert(`Здраствуйте ${nameStudent}`)
// // }
// // else if(gender=='Ж'){
// //     alert(`Здраствуйте ${nameStudent}`)
// // }
// // else{
// //     alert(`Привет ${nameStudent}`)
// // }

// switch (age) {
//     case 12:
//     case 1:
//     case 2:
//         alert('Зима')
//         break;
//     case 3:
//     case 4:
//     case 5:
//         alert('Весна')
//         break;
//     case 6:
//     case 7:
//     case 8:
//         alert('Лето')
//         break;
//     case 9:
//     case 10:
//     case 11:
//         alert('Осень')    
//     default:
//         alert('Такого времени года нету')
//         break;
// }

//let addBtn = document.querySelector(".add-product")

//if("Условие"){
    'Что должно произойти'

// // Инпуты
// let productType = document.querySelector('#type-select') 
// let productName = document.querySelector('#product-name') 

// // Кнопки
// let addProductButton = document.querySelector('.add-product')

// //Таблица
// let productsListElement = document.querySelector('.products-list')

// let productsArray = []
// let countId = 0

// addProductButton.addEventListener('click', addProductm)

// function addProductm() {
//   let productTypeValue = productType.value
//   let productNameValue = productName.value

//  countId +=1
  
//   let productId = countId;

//   let productObj = {
//     productId: productId,
//     productTypeKey: productTypeValue,
//     productNameKey: productNameValue
//   }

// productsArray.push(productObj)
//   rerederProductsTable()
// }

// function deleteProduct(productId){
//     // через filter
//     // productsArray= productsArray.filter(product => product.productId !== productId)
//     // через splece
//     let productIdx = productsArray.findIndex(product => product.productId === productId)
//     productsArray.splice(productIdx, 1)
//     rerederProductsTable ()
//   }
  
//   function rerederProductsTable () {
//     let innerHtmlWithProducts= ''
  
//     productsArray.forEach((item) => {
//       innerHtmlWithProducts += `<div  class='product'>
//       <div class='description-wrapper'>
//           <p> тип: ${item.productTypeKey}</p>
//           <p> название: ${item.productNameKey}</p>
//           <p> количество: ${item.productCountKey}</p>
//           <button class= "remove-button" onclik="deleteProduct(${item.productId})"> Удалить </button>
//         </div>
//       </div>`
//     })
//     productsListElement.innerHTML = innerHtmlWithProducts
//   }


//инпуты
let studentSurname = document.querySelector('#stdent-surname')
let studentName = document.querySelector('#student-name')

//кнопки
let  addStudentButton = document.querySelector('.add-student')

//таблица
let  studentListElement = document.querySelector('.studend-list')

let studentArray = []
  
addStudentButton.addEventListener('click', function(event){
    let studentSurnameValue = studentSurname.value
    let studentNameValue = studentName.value

    let studentString = `Фамилия: ${studentSurnameValue} Имя: ${studentNameValu}`

    studentArray.push(studentString)

    console.log(studentArray)
    let innerHtmlWithStudents = ''

    studentArray.forEach((item) => {
        innerHtmlWithStudents += `<div>${item}</div>`
    })

   studentListElement.innerHTML = innerHtmlWithStudents

    // let studentObj = {
    //     studendId: studendId,
    //     studentSurnameKey: studentSurnameValue,
    //     studentNameKey: studentnameValue
    // }

    // studentArray.push(studentObj)
    // rerederStudentTable()


 } )