// Create Constructor Employee

function Employee(fname, lname, gender, height){
    this.fname = fname;
    this.lname = lname;
    this.gender = gender;
    this.height = height;
}



function EmployeeStylingTable(){}

EmployeeStylingTable.prototype.addNewEmployee = function(empo){
    let tbodyTable = document.querySelector("#tbodyTable");
    let trow  = document.createElement("tr");
    trow.innerHTML = `
        <td>${Math.floor(Math.random(10 * 3))}</td>
        <td>${empo.fname}</td>
        <td>${empo.lname}</td>
        <td>${empo.gender}</td>
        <td>${empo.height}</td>
        <td><a href="" class="btn-danger">X</a></td>
    `
    tbodyTable.appendChild(trow)
}


// EmployeeStylingTable.prototype.checkValidation = function(){

// }



// EventListener
let forminput = document.querySelector("#forminput");
forminput.addEventListener('submit', function(e){
    // console.log('you clicked')
   let firstname = document.querySelector('.form-control.firstname').value;
   let lastname = document.querySelector('.form-control.lastname').value;
   let gender = document.querySelector('.gender');
   let checkedgender = gender.checked ? 'Male' : 'Female'
   let height = document.querySelector('.height').value;

   if(firstname == '' || lastname == '' || checkedgender == '' || height == ''){
       let forms = document.querySelector('.container.koko');
       let forminput = document.querySelector('#forminput');
        let div = document.createElement('div');
        div.className = 'alert alert-danger'
        div.innerText = "Please Fill All Fields"
        forminput.insertBefore(div, forms)

        // setInterval(()=>{   
        //     let alerts = document.querySelector('.alert');
        //     alerts.remove();
        // }, 1000)

   }else{


        let emp1 = new Employee(firstname, lastname, checkedgender, height)
        let empStyle = new EmployeeStylingTable();
        empStyle.addNewEmployee(emp1)
        let forms = document.querySelector('.container.koko');
        let div = document.createElement('div');
        let forminput = document.querySelector('#forminput');
        div.className = 'alert alert-success'
        div.innerText = "Successfully Inserted!"
        forminput.insertBefore(div, forms)

   }


    // console.log(emp1)
    e.preventDefault()
});