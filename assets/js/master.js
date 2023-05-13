
_input = document.getElementById('addList')
let flag = 1

function _add() {


    _value = _input.value

    if (
        (_value == '')
        || (_value == null)) {
        alert('please fill the input')
    } else {
        _li = document.createElement('li')
        _li.classList.add('d-flex', 'align-items-center', 'my-2')
        _li.innerHTML = `
       <p id="val" class=" text-start text-capitalize col-9 ps-4 h5">${_value}</p>
       <input type="text" class="col-9 d-none  text-light text-capitalize text-start" placeholder="edit">
       <span onclick="_edit(this)" class="col-1 d-flex"><i class="bi bi-pencil-fill h5 text-light"></i></span>
       <span onclick="_delete(this)" class="col-1 d-flex"><i class="bi bi-trash-fill h5 text-light"></i></span>
      <i onclick="_done(this)" id="check"  class="bi bi-check-circle-fill"></i>
       
       
       `
        document.getElementById('list').appendChild(_li)
        _input.value = ''
        _input.focus()

    }

}
let num = 1
function _done(self) {

    if (num % 2) {
        self.style.color = 'green'
        self.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.style.textDecoration = 'line-through'
      

    } else {
        self.style.color = 'white'
        self.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.style.textDecoration = 'none'

    }
    num++
}

function _delete(x) {
    x.parentElement.remove()
    
   

}

function _edit(self) {

    if (flag % 2) {
        self.previousElementSibling.classList.remove('d-none')
        self.previousElementSibling.previousElementSibling.classList.add('d-none')
        self.previousElementSibling.value = self.previousElementSibling.previousElementSibling.innerText
        self.innerHTML = '<i class="bi bi-check-lg h5 text-light"></i>'

    } else {
        self.previousElementSibling.previousElementSibling.classList.remove('d-none')
        self.previousElementSibling.classList.add('d-none')
        self.innerHTML = '<i class="bi bi-pencil-fill h5 text-light">'
        self.previousElementSibling.previousElementSibling.innerText = self.previousElementSibling.value
    }
    flag++


}



