import React from "react" 


export default function NavBar(props) {
   
    return <>
     
     <nav className={`navbar navbar-expand-lg navbar-${props.modes} bg-${props.modes}`}>
     <div className="container-fluid">
       
       <a className="navbar-brand" href="/react-text-utils">{props.title}</a>
       <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
         <span className="navbar-toggler-icon"></span>
       </button>
       <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
         
           
        </ul>

         <div className= "form-check form-switch" id="navRightSection">
            
            <section>
              <input className="form-check-input" type="checkbox" role="switch" id="setMode" onChange={props.handleMode}/>
              <label className={`form-check-label text-${props.modes === 'light' ? 'dark' : 'light'}`} htmlFor="setMode">{props.modes === 'light' ? 'Disable Light Mode' : 'Enable Light Mode'}</label>
            </section>
          </div>
       </div>
     </div>
 </nav>
 </>
};

