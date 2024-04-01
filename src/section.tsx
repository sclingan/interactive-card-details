import validate from '../src/validate2'

function Section() {

  return (
    <section id='section'>
        <form>
            <label htmlFor="name">Cardholder Name</label>
            <input type='text' name='name' id='name' placeholder="e.g. Jane Appleseed"></input>
            <p className='sr-only' id='name-blank'>Can't be blank</p>
            <label htmlFor="number">Card Number</label>
            <input type='text' name='number' id='number' placeholder="e.g. 1234 5678 9123 0000"></input>
            <p className='sr-only' id='error-format'>Wrong format, numbers only</p>
            <p className='sr-only' id='number-blank'>Can't be blank</p>
            <div className="exp">
            <label htmlFor="exp-date">Exp. Date (MM/YY)</label>
            <input type='number' name='exp-date' id='exp-date' placeholder="MM" min='1' max='12'></input>
            <p className='sr-only' id='exp-date-blank'>Can't be blank</p>
            <input type='number' id='exp-date-year' name='exp-date-year' placeholder="YY" min='00' max='99'></input>
            <p className='sr-only' id='exp-date-year-blank'>Can't be blank</p>
            <label htmlFor="cvc" id='cvc-label'>CVC</label>
            <input type='number' name='cvc' id='cvc' placeholder="e.g. 123" min='000' max='999'></input>
            <p className='sr-only' id='cvc-blank'>Can't be blank</p>
            </div>
            <button onClick={validate}>Confirm</button>
        </form>
    </section>
  )
}

export default Section