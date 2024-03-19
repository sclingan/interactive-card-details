



function validate(e: Event) {
    e.preventDefault(); 

    const name: string =  document.getElementById('name')!;
    const nameValue: string = name.value;
    const number = document.getElementById('number')!.value;
    const expDate = document.getElementById('exp-date')?.value;
    

    // import variable as an object to get all properties
    function blank(input: string){
        const inputName: string = input.name.concat('-blank');
        console.log(inputName);
    if(input === '') {
        document.getElementById(inputName)?.classList.remove('sr-only');
        document.getElementById(inputName)?.classList.add('error');
    }else{
        document.getElementById(inputName)?.classList.remove('error');
        document.getElementById(inputName)?.classList.add('sr-only');
    }
    console.log('hello');
  }

  blank(nameValue);
}





export default validate