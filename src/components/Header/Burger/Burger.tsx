import { FC } from 'react'
import './Burger.scss'
import { NavLink } from 'react-router-dom'
import { Page_List } from '../../../app/routes/AppRouter'

export interface I {} 

const Burger: FC<I> = () => {
    return (
         <>
            <nav className="burger">
				<input type="checkbox" id="burger" hidden />
				<label htmlFor="burger" className="burger__btn">
					<span className="burger__line"></span>
				</label>
				<div className="burger__menu">
					<label className="burger__exit" htmlFor="burger"></label>
					<ul className="burger__list">
                    <NavLink to={Page_List.Section} className='burger__link'>ФИЛЬМЫ</NavLink>
                    <NavLink to={Page_List.People} className='burger__link'>АКТЕРЫ</NavLink>
                    <NavLink to={Page_List.About} className='burger__link'>О НАС</NavLink>
					</ul>
				</div>
			</nav>
        </>
     )
 }
export default Burger