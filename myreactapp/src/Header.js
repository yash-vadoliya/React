import Contact from './Contact';
import './Header.css'
import Home from './Home';

function Header()
{
    return(
        <>
            <h1>Header</h1>
            <div>
                <a href="./Header.js">Home</a>
                <a href="./Contact.js">Contact</a>
                <a href="">About</a>
            </div>
            <Home />
            <Contact />
        </>
        
    );
}


export default Header;