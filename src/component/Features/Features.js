
import '../../accest/css/utilities.css'
import '../../accest/css/global.css'
import './Features.css'


import Card from './component/cardLFeatures'
import serverImg from'../../accest/images/server.png'
import server2Img from'../../accest/images/server2.png'

const Features= (props)=>{
    return (
        <section id="features">
            <div className="features-head bg-primary py-3">
                <div className="container grid">
                <div>
                    <h1 className="xl">Features</h1>
                    <p className="lead">
                    Check out the features of Loruki that separate us from the
                    competition
                    </p>
                </div>
                <img src={serverImg} alt=""/>
                </div>
            </div>

            <div className="features-sub-head bg-light py-3">
                <div className="container grid">
                <div>
                    <h1 className="md">The Loruki Platform</h1>
                    <p>
                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolor
                    cupiditate dignissimos temporibus perspiciatis quae! Suscipit qui,
                    consectetur ea consequatur, doloribus repellendus quasi, aut
                    corporis nam alias culpa. Nostrum, inventore accusantium!
                    </p>
                </div>
               <img src={server2Img} alt=""/>
                </div>
            </div>
            <div className="features-main my-2">
                <div className="container grid grid-3">


                    <Card icon="fas fa-server fa-3x" description="  Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas
                        nemo saepe corrupti et dolorem voluptate at, nostrum rem
                        voluptatem ab alias quia molestiae ea, libero nihil deserunt.
                        Molestias, eum? Necessitatibus!"/>
                    <Card icon="fas fa-network-wired fa-3x" description="  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ducimus
                        recusandae perferendis culpa, reiciendis a itaque debitis qui vel
                        dignissimos ipsum!"/>
                    <Card icon="fas fa-laptop-code fa-3x" description="   Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
                        magnam."/>
                    <Card icon="fas fa-power-off fa-3x" description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero, a!"/>
                    <Card icon="fas fa-server fa-3x" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
                        magnam."/>
                    <Card icon="fas fa-upload fa-3x" description="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Debitis,
                        magnam."/>
                </div>
            </div>
        </section>
        
    )
}
export default Features

