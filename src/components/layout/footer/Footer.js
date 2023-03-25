import React from 'react'
import './Footer.modules.css'
import { Link } from 'react-router-dom'
import { FaFacebookSquare } from 'react-icons/fa'
import { FaYoutube } from 'react-icons/fa'
import { FaPinterest} from 'react-icons/fa'
import { FaInstagram } from 'react-icons/fa'

function Footer() {
    return (
        <footer className="Footer">
            <div className="Footer__row">
                <div className="Footer__column Footer__column--1">
                    <h3 className="Footer__title">Contact Us</h3>
                    <ul className="Footer__list">
                        <li className="Footer__item"><Link to="/">hello@basics.com</Link></li>
                        <li className="Footer__item"><Link to ="/">+1 999 999 9999</Link></li>
                    </ul>
                </div>
                <div className="Footer__column Footer__column--2">
                    <h3 className="Footer__title">Links</h3>
                    <ul className="Footer__list">
                        <li className="Footer__item"><Link to ="/">About</Link></li>
                        <li className="Footer__item"><Link to ="/">Pricing</Link></li>
                        <li className="Footer__item"><Link to ="/">Resources</Link></li>
                    </ul>
                </div>
            </div>
            <div className="Footer__row">
                <div className="Footer__column Footer__column--3">
                    <h3 className="Footer__title">Products</h3>
                    <ul className="Footer__list">
                        <li className="Footer__item"><Link to ="/">Illustrations</Link></li>
                        <li className="Footer__item"><Link to ="/">Icons</Link></li>
                        <li className="Footer__item"><Link to ="/">Themes</Link></li>
                        <li className="Footer__item"><Link to ="/">Templates</Link></li>
                    </ul>
                </div>
                <div className="Footer__column Footer__column--4">
                    <h3 className="Footer__title">Follow Us</h3>
                    <ul className="Footer__list Footer__list-social">
                        <li className="Footer__item Footer__item-social"><Link to ="/"><FaFacebookSquare /></Link></li>
                        <li className="Footer__item Footer__item-social"><Link to ="/"><FaInstagram/></Link></li>
                        <li className="Footer__item Footer__item-social"><Link to ="/"><FaPinterest /></Link></li>
                        <li className="Footer__item Footer__item-social"><Link to ="/"><FaYoutube /></Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer