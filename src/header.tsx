import cardBack from '../public/images/bg-card-back.png'
import cardFront from '../public/images/bg-card-front.png'
import cardLogo from '../public/images/card-logo.svg'


function Header() {

  return (
    <header>
        <img src={cardBack} alt="" className='card-back'></img>
        <img src={cardFront} alt="" className='card-front'></img>
        <div className='card-info'>
          <img src={cardLogo} alt="" className='card-logo'></img>
           <p className='card-number'>0000 0000 0000 0000</p>
           <div className='card-user'>
             <p>Jane Appleseed</p>
             <p>00/00</p>
           </div>
         </div>
         

         <p className='cvc-icon'>000</p>
    </header>
  )
}

export default Header