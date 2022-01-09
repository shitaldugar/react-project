import React from "react";

class Form extends React.Component {
    
    render(){
     return( 
      <>
        <div id="form">
            <form>
                <input id="nome" type="name"placeholder="nome"disabled/>
                <input id="cognome" type="name"placeholder="Cognome"disabled/><br />
                <input id="email" type="email"placeholder="email"disabled/><br />
                <input id="text1" type="text"placeholder="Codice coupon"disabled/><br />
                <input id="text2" type="text"placeholder="nessun coupon inserito"disabled/><br />

                <button id="btn">Attiva</button>
            </form>
        </div>
        
      </>
     )

    }
}
export default Form;