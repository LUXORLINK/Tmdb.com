import { FC } from 'react';
import './Footer.scss';
import { NavLink } from 'react-router-dom';

const Footer: FC = () => {
    return (
        <footer className="footer">
            <div className="container container_2">
                <div className="footer-content">
                    <div className="footer-section about">
                        <h2 className="logo">Logo</h2>
                        <p>Краткое описание о компании или сайте.</p>
                        <div className="contact">
                            <span>Addres: Уметалиева 113 рыскулова 34</span>
                            <span>Phone:+996-502-001-764</span>
                            <span>Email: Luxor@gmail.com</span>
                        </div>
                    </div>
                    <div className="footer-section links">
                        <h2>Quick Links</h2>
                        <ul>
                        <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/people">Actors</NavLink></li>
                            <li><NavLink to="/about">About</NavLink></li>
                        </ul>
                    </div>
                    <div className="footer-section social">
                        <h2>Follow Us</h2>
                        <div className="social-links">
                            <a href="https://facebook.com"><i className="fab fa-facebook"></i></a>
                            <a href="https://twitter.com"><i className="fab fa-twitter"></i>@Twitter</a>
                            <a href="https://www.instagram.com/king_of_generations?igsh=aXMxeGduN3hkY2Z2">@instagram<i className="fab fa-instagram"></i></a>
                            <a href="https://linkedin.com"><i className="fab fa-linkedin">@linkedin</i></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} Company Metalabs. All Rights Reserved</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
