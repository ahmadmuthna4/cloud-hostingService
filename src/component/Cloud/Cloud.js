import './Cloud.css'
import '../../accest/css/utilities.css'
import '../../accest/css/global.css'

import cloudImg from '../../accest/images/cloud.png'

const Cloud= (props)=>{
    return (
        <section className="cloud my-2 py-2">
            <div className="container grid bg-secondaryss ">
                <div className="text-center">
                <h2 className="lg text-light">Extreme Cloud Hosting</h2>
                <p className="lead my-1">
                    Cloud hosting like you've never seen. Fast, efficient and scalable
                </p>
                <a href="#features" className="btn btn-dark">Read More</a>
                </div>
                <img
                src={cloudImg}alt=""/>
            </div>
        </section>
        
    )
}
export default Cloud


// .contact .container .content .information {
//     width: 100%;
//     height: 61%;
//     justify-content: normal;
//     /* transform: translate(-304px, -408px); */
//     position: absolute;
//     top: -358px;
//     background-color: var(--main-color);
//     left: 13px;
// }