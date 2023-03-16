const userdiv = document.getElementById('username');
const userinput = document.getElementById('user-input');
const userset = document.getElementById('user-set');
var username = '';


// username input
userset.addEventListener('click', ()=> {
    if(userinput.value == '' || userinput.value.length > 10){
        console.log('invalid username');
    } else {
        username = userinput.value;
        console.log(userinput.value);
        userinput.value = '';
        
    }
})

