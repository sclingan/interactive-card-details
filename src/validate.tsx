
export default function log(e: Event) {
    e.preventDefault();
    const name = document.getElementById('name')!;
    const number = document.getElementById('number')!;
    const numbers = number.value!;
    const expMo = document.getElementById('MM')!;
    const expMonth = expMo.value!;
    const expYY = document.getElementById('YY')!;
    const expYear = expYY.value!; 
    const cvcNumber = document.getElementById('cvc')!;
    const cvc = cvcNumber.value!;

    /* check that name is not empty */
    if(name.value === ''){
        console.log('empty');
    }
    console.log(name.value);

    /* check that number is 16char long and all numbers */
    if(numbers === ''){
        console.log('empty number')
    }else{
        if(numbers.length < 16) {
            console.log('not enough numbers');
        }else{
            if(/^\d+$/.test(numbers)){
                console.log('true')
            }else{
                console.log('failed');
            }
        }
    }

    /* check exp date is not empty and numbers only */
    if(expMonth === ''){
        console.log('empty exp');
    }else{
        if(expMonth.length < 2){
            console.log('error numbers exp');
        }
    }

    /* check that exp date/year is not empty */
    if(expYear === ''){
        console.log('empty exp');
    }else{
        if(expYear.length < 2){
            console.log('error numbers exp');
        }
    }

    /* check that cvc is not empty or longer than 3 digitd */
    if(cvc === ''){
        console.log('empty cvc');
    }else{
        if(cvc.length < 3 || cvc.length > 3){
            console.log('not enough cvc');
        }
    }

}