import cardBack from '../public/images/bg-card-back.png'
import cardFront from '../public/images/bg-card-front.png'
import cardLogo from '../public/images/card-logo.svg'


function Header() {

  return (
    <header>
      <h1 className='sr-only'>Interactive Card Details</h1>
      <div className='card-container'>
        <img src={cardBack} alt="Back side of a credit card" className='card-back'></img>
        </div>
        <div className='card-container-front'>
        <img src={cardFront} alt="Front side of a credit card" className='card-front'></img> 
        <div className='card-info'>
          <img src={cardLogo} alt="A white circle and a clear circle" className='card-logo'></img>
           <p className='card-number'>0000 0000 0000 0000</p>
           <div className='card-user'>
             <p>Jane Appleseed</p>
             <p>00/00</p>
           </div>
         </div>
         </div>
         

    </header>
  )
}

export default Header