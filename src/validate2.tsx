import { FormEvent } from "react";


function validate(event: FormEvent) {
    event.preventDefault(); 

    const name: object =  document.getElementById('name')!;
    const number: object = document.getElementById('number')!;
    const expDate: object = document.getElementById('exp-date')!;
    const expDateYear: object = document.getElementById('exp-date-year')!;
    const cvc: object = document.getElementById('cvc')!;

    const inputs = [name, number, expDate, expDateYear, cvc];

    interface object1 {
        name: string,
        value: string 
    }
    

    // import variable as an object to get all properties
    function blank(input : object1){
        const name: string = input.name!;
        const inputName: string = `${name}-blank`;
        const value: string = input.value!;
    if(value === '') {
        document.getElementById(inputName)?.classList.remove('visually-hidden');
        document.getElementById(inputName)?.classList.add('error');
    }else{
        document.getElementById(inputName)?.classList.remove('error');
        document.getElementById(inputName)?.classList.add('visually-hidden');
    }
  }

    function format(input: object1){
        const value = input.value!;
        if(value === ''){
            // blank(number);
        }else{
        if(/^\d+$/.test(value)){
            document.getElementById('error-format')?.classList.remove('error');
            document.getElementById('error-format')?.classList.add('visually-hidden');
        }else{
            document.getElementById('error-format')?.classList.remove('visually-hidden');
            document.getElementById('error-format')?.classList.add('error')
        }
      }
    }
    
   for(const element of inputs){
       blank(element);
   }

   format(number);

   /* if all checks are passed , load completed page */
   const matches = document.querySelectorAll('p.error');
   if(matches.length === 0){
       document.getElementById('section')?.classList.remove('section');
       document.getElementById('section')?.classList.add('visually-hidden');
       document.getElementById('aside')?.classList.remove('visually-hidden');
       document.getElementById('aside')?.classList.add('complete');
   }
}





export default validate