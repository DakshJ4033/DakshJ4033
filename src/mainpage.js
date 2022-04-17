import NavBar from './navbar';
import './mainpage.css';
import {Container, Row, Col} from "react-bootstrap";
import { stack as Menu } from 'react-burger-menu'

function MainPage() {

    return (
        <Menu>
            <div className='test'>
                <a id="home" className="menu-item" href="/">Home</a>
            </div>
            <div className='test'>
                <a id="myjournals" className="menu-item" href="/myjournals">My Journals</a>
            </div>
        </Menu>
    );
}

export default MainPage;