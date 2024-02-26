import cardBack from '../public/images/bg-card-back.png'
import cardFront from '../public/images/bg-card-front.png'


function Header() {

  return (
    <header>
        <img src={cardBack} alt="" className='card-back'></img>
        <img src={cardFront} alt="" className='card-front'></img>
         0000 0000 0000 0000
         Jane Appleseed
         00/00
         

         000
    </header>
  )
}

export default Header