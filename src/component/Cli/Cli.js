import './Cli.css'
import '../../accest/css/utilities.css'
import '../../accest/css/global.css'

import imgCli from '../../accest/images/cli.png'
const Cli= (props)=>{
    return (
        <section className="cli">
            <div className="container grid">
                <img
                src={imgCli} alt=""/>
                <div className="card">
                <h3>Easy to use, cross platform CLI</h3>
                </div>
                <div className="card">
                <h3>Deploy in seconds</h3>
                </div>
            </div>
        </section>
    )
}
export default Cli


