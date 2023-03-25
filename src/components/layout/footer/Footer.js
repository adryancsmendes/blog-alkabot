import React from 'react'
import './Footer.modules.css'
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
                        <li className="Footer__item"><a href="#">hello@company.com</a></li>
                        <li className="Footer__item"><a href="#">+1 999 999 9999</a></li>
                    </ul>
                </div>
                <div className="Footer__column Footer__column--2">
                    <h3 className="Footer__title">Links</h3>
                    <ul className="Footer__list">
                        <li className="Footer__item"><a href="#">About</a></li>
                        <li className="Footer__item"><a href="#">Pricing</a></li>
                        <li className="Footer__item"><a href="#">Resources</a></li>
                    </ul>
                </div>
            </div>
            <div className="Footer__row">
                <div className="Footer__column Footer__column--3">
                    <h3 className="Footer__title">Products</h3>
                    <ul className="Footer__list">
                        <li className="Footer__item"><a href="#">Illustrations</a></li>
                        <li className="Footer__item"><a href="#">Icons</a></li>
                        <li className="Footer__item"><a href="#">Themes</a></li>
                        <li className="Footer__item"><a href="#">Templates</a></li>
                    </ul>
                </div>
                <div className="Footer__column Footer__column--4">
                    <h3 className="Footer__title">Follow Us</h3>
                    <ul className="Footer__list Footer__list-social">
                        <li className="Footer__item Footer__item-social"><a href="#"><FaFacebookSquare /></a></li>
                        <li className="Footer__item Footer__item-social"><a href="#"><FaInstagram/></a></li>
                        <li className="Footer__item Footer__item-social"><a href="#"><FaPinterest /></a></li>
                        <li className="Footer__item Footer__item-social"><a href="#"><FaYoutube /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer