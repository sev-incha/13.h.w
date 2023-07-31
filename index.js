

//инпуты
let studentSurname = document.querySelector('#student-surname')
let studentName = document.querySelector('#student-name')

//кнопки
let  addStudentButton = document.querySelector('.add-student')

//таблица
let  studentListElement = document.querySelector('.student-list')

let studentArray = []
  
addStudentButton.addEventListener('click', function(event){
    let studentSurnameValue = studentSurname.value
    let studentNameValue = studentName.value

    let studentString = `Фамилия: ${studentSurnameValue} Имя: ${studentNameValue}`

    studentArray.push(studentString)

    console.log(studentArray)
    let innerHtmlWithStudents = ''

    studentArray.forEach((item) => {
        innerHtmlWithStudents += `<div>${item}</div>`
    })

   studentListElement.innerHTML = innerHtmlWithStudents


 } )