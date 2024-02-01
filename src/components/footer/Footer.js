import React from 'react'
import './footer.css'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className='footer__container container'>
                <h1 className='footer__title'>Vishal Piprotar</h1>

                <ul className='footer__list'>
                    <li>
                        <a href='#about' className='footer__link'>About</a>
                    </li>

                    <li>
                        <a href='#portfolio' className='footer__link'>Projects</a>
                    </li>

                    <li>
                        <a href='#services' className='footer__link'>Services</a>
                    </li>
                </ul>

                <div className='footer__social'>
                    <a href='https://www.facebook.com/profile.php?id=100091669077763&sk=about' className='footer__social-link' target='_blank'>
                        <i class="bx bxl-facebook"></i>
                    </a>

                    <a href='https://instagram.com/mr_vishal_099' className='footer__social-link' target='_blank'>
                        <i class="bx bxl-instagram-alt"></i>
                    </a>

                    <a href='https://www.linkedin.com/in/Vishal-Piprotar' className='footer__social-link' target='_blank'>
                        <i class='bx bxl-linkedin'></i>
                    </a>
                </div>

                <span className='footer__copy'> &#169; Vishal Piprotar. All rights reserved</span>
            </div>
        </footer>
    )
}

export default Footer
