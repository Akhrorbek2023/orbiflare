import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
import { faInstagram, faLinkedinIn, faTelegram } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-regular-svg-icons'

const web = [
    {
        title: 'Telegram',
        image: <FontAwesomeIcon icon={faTelegram} />,
        href: ''
    },
    {
        title: 'Email',
        image: <FontAwesomeIcon icon={faEnvelope} />,
        href: ''
    },
    {
        title: 'LinkedIn',
        image: <FontAwesomeIcon icon={faLinkedinIn} />,
        href: ''
    },
    {
        title: 'Instagram',
        image: <FontAwesomeIcon icon={faInstagram} />,
        href: ''
    },
]

const SelectOpt = () => {
    return (
        <div className=''>

          
          <ul className='bg-white text-black px-5 py-3 rounded absolute right-0 shadow-lg z-50'>
             {
               web.map((item) => (
                <li className='px-3 py-2 rounded text-blue-500 hover:bg-blue-500 hover:text-white'>
                <Link className='flex items-center space-x-2 ' to={item.href}>
                   {item.image} <span className='mr-4'></span> {item.title}
                </Link>
                
            </li>
               ))
             }
          </ul>
          {/* <div className='bg-white text-black inline-block p-4 absolute right-5 top-6 shadow-lg'>
            <div className='flex items-center gap-2 p-3 hover:bg-slate-300'>
                <img className='w-5 h-5' src={Telegram} alt="telegram" />
                <h1>Telegram</h1>
            </div>
            <div className='flex items-center gap-2 p-3 hover:bg-slate-300'>
                <img className='w-5 h-5' src={Email} alt="email" />
                <h1>Email</h1>
            </div>
            <div className='flex items-center gap-2 p-3 hover:bg-slate-300'>
                <img className='w-5 h-5' src={LinkedIn} alt="linkedin" />
                <h1>LinkedIn</h1>
            </div>
            <div className='flex items-center gap-2 p-3 hover:bg-slate-300'>
                <img className='w-5 h-5' src={Instagram} alt="instagram" />
                <h1>Instagram</h1>
            </div>
          </div> */}

        </div>
    )
}

export default SelectOpt