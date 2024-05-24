let display = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let buttonsArray = Array.from(buttons);

let string = '';

buttonsArray.forEach(btn => {

    btn.addEventListener('click', (e) => {

        if(e.target.innerHTML === 'DEL'){
            string = string.substring(0,string.length-1);
            display.value = string;
        }else if(e.target.innerHTML == 'AC'){
            string = '';
            display.value = string;
        }else if (e.target.innerHTML == '%') {
            // Extract the two numbers for percentage calculation
            let numbers = string.split('%');
            if (numbers.length === 2) {
                let percentage = (parseFloat(numbers[0]) * parseFloat(numbers[1])) / 100;
                string = percentage.toString();
                display.value = string;
            } else {
                // Invalid input for percentage calculation
                display.value = 'Invalid Input';
            }
        }else if(e.target.innerHTML == '='){
            string = eval(string);
            display.value = string;
        }
        else{

        string += e.target.innerHTML;
        display.value = string;
        }

    });

});