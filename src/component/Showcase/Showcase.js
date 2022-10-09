import './Showcase.css'
import '../../accest/css/utilities.css'
import '../../accest/css/global.css'


const Showcase= ()=>{
    return (
        <section className="showcase" id="demo">
            <div className="container grid">
                <div className="showcase-text">
                <h1>Easier Deployment</h1>
                <p>
                    Deploy web apps of all kinds, from large scale enterprise APIs to
                    static websites for individuals. Fill out the form to try a demo of
                    our platform
                </p>
                <a href="#features" className="btn btn-outline">Learn More</a>
                </div>
                <div className="showcase-form card">
                <h2>Request a Demo</h2>
                <form onsubmit="event.preventDefault()">
                    <div className="form-control">
                    <input type="text" name="name" placeholder="Name" required />
                    </div>
                    <div className="form-control">
                    <input
                        type="text"
                        name="company"
                        placeholder="Company Name"
                        required
                    />
                    </div>
                    <div className="form-control">
                    <input type="email" name="email" placeholder="Email" required />
                    </div>
                    <input type="submit" value="Send" className="btn btn-primary" />
                </form>
                </div>
            </div>
        </section>
    )
}
export default Showcase