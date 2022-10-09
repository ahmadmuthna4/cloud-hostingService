import './App.css'
// import './accest/css/global.css'


import Navbar from './component/Navbar/Navbar'
import Showcase from './component/Showcase/Showcase'
import Stats from './component/Stats/Stats'
import Cli from './component/Cli/Cli'
import Cloud from './component/Cloud/Cloud'
import Languages from './component/Languages/Languages'
import Features from './component/Features/Features'
import Docs from './component/Docs/Docs'
import Footer from './component/Footer/Footer'

const App = ()=>{
    return(
        <>
         <Navbar />
         <Showcase />
         <Stats />
         <Cli />
         <Cloud />
         <Languages />
         <Features />
         <Docs />
         <Footer />
        </>
    )
}
export default App