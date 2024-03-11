
export default function log(e: Event) {
    e.preventDefault();
    const name = document.getElementById('name')!;
    const number = document.getElementById('number')!;
    const numbers = number.value!;
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
            }
        }
    }

}