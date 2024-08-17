import { FC, useState } from 'react';
import './Sidebar.scss';
import { Page_List } from '../../app/routes/AppRouter';
import { NavLink } from 'react-router-dom';
import imgs2 from '../../assets/images/123bookmark_99967.png';

export const Sidebar: FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='fon'>
            <button className="toggle-button" onClick={toggleSidebar}>
                ☰
            </button>
            <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
                <nav>
                    <ul className='sidebar__menu'>
                        <li>
                            <NavLink 
                                to={Page_List.Selected}
                                className={({ isActive }) => `link ${isActive ? 'active' : ''}`}
                            >
                                <img src={imgs2} alt="Movies" className='imgs2'/>
                            </NavLink>
                        </li>
               
                    </ul>
                </nav>
            </aside>
        </div>
    );
};

export default Sidebar;
