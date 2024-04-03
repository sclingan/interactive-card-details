import complete_icon from '../public/images/icon-complete.svg'

function Complete() {
    return (
        <aside className="visually-hidden" id='aside'>
            <img src={complete_icon} className='complete_icon' alt='A white checkmark in a blue circle'></img>
            <h2 className='thank_you'>Thank You!</h2>
            <p className='added'>We've added your card details</p>
            <button>Continue</button>
        </aside>
    )
}

export default Complete