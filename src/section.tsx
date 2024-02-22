
function Section() {

  return (
    <section>
        <form>
            <label htmlFor="name">Cardholder Name</label>
            <input type='text' name='name' id='name' placeholder="e.g. Jane Appleseed"></input>
            <label htmlFor="number">Card Number</label>
            <input type='text' name='number' id='number' placeholder="e.g. 1234 5678 9123 0000"></input>
            <label htmlFor="exp-date">Exp. Date (MM/YY)</label>
            <input type='number' name='exp-date' id='exp-date' placeholder="MM"></input>
            <input type='number' placeholder="YY"></input>
            <label htmlFor="cvc">CVC</label>
            <input type='number' name='cvc' id='cvc' placeholder="e.g. 123"></input>
            <button>Confirm</button>
        </form>
    </section>
  )
}

export default Section