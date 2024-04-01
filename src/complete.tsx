import complete_icon from '../public/images/icon-complete.svg'

function Complete() {
    return (
        <aside className="sr-only" id='aside'>
            <img src={complete_icon} className='complete_icon'></img>
            <h2 className='thank_you'>Thank You!</h2>
            <p className='added'>We've added your card details</p>
            <button>Continue</button>
        </aside>
    )
}

export default Complete