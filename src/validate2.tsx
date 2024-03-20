



function validate(e: Event) {
    e.preventDefault(); 

    const name: object =  document.getElementById('name')!;
    const number: object = document.getElementById('number')!;
    const expDate: object = document.getElementById('exp-date')!;
    const expDateYear: object = document.getElementById('exp-date-year')!;
    const cvc: object = document.getElementById('cvc')!;
    

    // import variable as an object to get all properties
    function blank(input: object){
        console.log(typeof(input));
        console.log(input.value);
        const inputName: string = input.name.concat('-blank');
        console.log(inputName);
    if(input.value === '') {
        document.getElementById(inputName)?.classList.remove('sr-only');
        document.getElementById(inputName)?.classList.add('error');
    }else{
        document.getElementById(inputName)?.classList.remove('error');
        document.getElementById(inputName)?.classList.add('sr-only');
    }
  }

    function format(input: object){
        if(input.value === ''){
            // blank(number);
        }else{
        if(/^\d+$/.test(input.value)){
            console.log('true');
            document.getElementById('error-format')?.classList.remove('error');
            document.getElementById('error-format')?.classList.add('sr-only');
        }else{
            console.log('false');
            document.getElementById('error-format')?.classList.remove('sr-only');
            document.getElementById('error-format')?.classList.add('error')
        }
      }
    }

    function valLen(input: object){
        /* make a test for each object/diff length input */
    }
    

  blank(number);
  format(number);
}





export default validate