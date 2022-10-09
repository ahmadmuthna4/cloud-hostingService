import './Navbar.css'
import '../../accest/css/utilities.css'
import '../../accest/css/global.css'

const Navbar= ()=>{
    return (
       
        
            <div className="navbar">
                <div className="container flex">
                    <h1 className="logo">Loruki.</h1>
                    <nav>
                    <ul>
                        <li><a href="#demo">Demo</a></li>
                        <li><a href="#features">Features</a></li>
                        <li><a href="#docs">Docs</a></li>
                    </ul>
                    </nav>
                </div>
            </div>
       
    )
}
export default Navbar