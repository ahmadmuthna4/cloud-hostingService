
import '../../accest/css/utilities.css'
import './Languages.css'
import '../../accest/css/global.css'
import Card from './component/cardLanguages'

import nodejsImg from '../../accest/images/node.png'
import pythonImg from '../../accest/images/python.png'
import csharpImg from '../../accest/images/csharp.png'
import rubyImg from '../../accest/images/ruby.png'
import scalaImg from '../../accest/images/scala.png' 
import clojureImg from '../../accest/images/clojure.png' 

const Languages= ()=>{
    return (
            <section className="languages">
                <h2 className="md text-center my-2">Supported Languages</h2>
                <div className="container flex">
                    <Card titele='Node.js' pathImg={nodejsImg}/>   
                    <Card titele='Python' pathImg={pythonImg}/>   
                    <Card titele='C#' pathImg={csharpImg}/>   
                    <Card titele='Ruby' pathImg={rubyImg}/>   
                    <Card titele='Scala' pathImg={scalaImg}/>   
                    <Card titele='Clojure' pathImg={clojureImg}/>                  
                </div>
        </section>
    )
}
export default Languages