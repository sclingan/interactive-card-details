



function validate(e: Event) {
    e.preventDefault(); 

    const name: object =  document.getElementById('name')!;
    const number: object = document.getElementById('number')!;
    const expDate: object = document.getElementById('exp-date')!;
    const expDateYear: object = document.getElementById('exp-date-year')!;
    const cvc: object = document.getElementById('cvc')!;

    const inputs = [name, number, expDate, expDateYear, cvc];
    

    // import variable as an object to get all properties
    function blank(input: object){
        const name: string = input.name!;
        const inputName: string = `${name}-blank`;
        const value = input.value!;
    if(value === '') {
        document.getElementById(inputName)?.classList.remove('sr-only');
        document.getElementById(inputName)?.classList.add('error');
    }else{
        document.getElementById(inputName)?.classList.remove('error');
        document.getElementById(inputName)?.classList.add('sr-only');
    }
  }

    function format(input: object){
        const value = input.value!;
        if(value === ''){
            // blank(number);
        }else{
        if(/^\d+$/.test(value)){
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
    
   for(const element of inputs){
       blank(element);
   }
   format(number);
}





export default validate