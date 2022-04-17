// constructor
function Car(modelname, modeldate, manufacture, color){
    this.modelname = modelname;
    this.modeldate = modeldate;
    this.manufacture = manufacture;
    this.color = color;
}
//styling constructor
function Carui(){}
Carui.prototype.addNewCar = (carsContent)=>{
    let addnewCar = document.querySelector('#addnewCar');
    let trow = document.createElement('tr');
    trow.innerHTML = `
        <td></td>
        <td>${carsContent.modelname}</td>
        <td>${carsContent.modeldate}</td>
        <td>${carsContent.manufacture}</td>
        <td>${carsContent.color}</td>
        <td><a href="#" ><i class="bi bi-x-circle-fill delete"></i></button></a>`;
    addnewCar.appendChild(trow)
}
Carui.prototype.showAlert = (message, alertClass)=>{
    let container = document.querySelector(".container");
    let row = document.querySelector(".row");
    let divvv = document.createElement('div');
    divvv.className = `alert alert-${alertClass}`
    divvv.innerText = `${message}`;
    container.insertBefore(divvv, row);
    setTimeout(()=>{
        document.querySelector('.alert').remove();
    }, 1000)
    
}
Carui.prototype.clearAllInputs = ()=>{
    document.querySelector('.u-full-width.modelname').value = '';
    document.querySelector('.u-full-width.modeldate').value = '';
    document.querySelector('.u-full-width.manufacture').value = '';
    document.querySelector('.u-full-width.color').value = '';
}
Carui.prototype.deleteInputs = (targetBtn)=>{
    if(targetBtn.className == 'bi bi-x-circle-fill delete'){
        targetBtn.parentElement.parentElement.parentElement.remove()
    }
    
}
//EventListener
let dataentry = document.querySelector("#dataentry");
dataentry.addEventListener('submit', function(eventTarget){
    let modelname = document.querySelector('.u-full-width.modelname').value;
    let modeldate = document.querySelector('.u-full-width.modeldate').value;
    let manufacture = document.querySelector('.u-full-width.manufacture').value;
    let color = document.querySelector('.u-full-width.color').value;
    if(modelname == '' || modeldate == '' || manufacture == '' || color == ''){
        const CarUI = new Carui();
        CarUI.showAlert('Please Fill All Fields', 'danger');
      
    }else{
        const cars = new Car(modelname,modeldate, manufacture , color);
        const CarUI = new Carui();
        CarUI.addNewCar(cars);
        
        CarUI.showAlert('Successfully Inserted', 'success');
        CarUI.clearAllInputs();
       
        
    }
    eventTarget.preventDefault();
    // console.log(eventTarget);
    
})
document.querySelector("#addnewCar").addEventListener('click',function(e){
    // document.querySelector('');
    
    const CarUI = new Carui();
    CarUI.deleteInputs(e.target)
    CarUI.showAlert('The Row Deleted Successfully!', 'success');
})
