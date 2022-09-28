import React from "react";

import { AreaStylePages } from '../pages/PagesStyle';


function Pages() {
    return (
        <AreaStylePages>
            <body>    
                <div className="container"> 

                    <section id="Home" className="Home">
                        <div className="principal">
                            <div className="MyName">
                                <h1> Olá eu sou,<br></br></h1>
                                    <span className="typing-animation"> 
                                        Vinicius Medeiros
                                    </span>
                                <h1> Desenvolvedor Full-Stack </h1>                            
                            </div>
                                <a href="#tecnologia">
                                    <p > scroll down <img src="./scroll.png"></img> </p>
                                </a>
                        </div>
                    </section>

                    <section id="branca1" className="Branco1">
                            
                    </section>

                    <section id="tecnologia"  className="Tecnologias">
                        <h1>
                            Tecnologias
                        </h1>
                    </section>
    
                    <section id="branca2" className="Branco2">
                        <h1> vamover</h1>
                    </section>

                    <section id="Contato" className="Contato">
                        <h1>
                            Contato
                        </h1>
                    </section>

                </div>
            </body>
            </AreaStylePages>   
    );
}

export default Pages;