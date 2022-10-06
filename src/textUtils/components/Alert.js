import React from 'react'

export default function Alert(props){
const titleCase = (word) => {
        
       if(word === 'danger') word = 'falied'
        const str = word.toLowerCase();
        return str.charAt(0).toUpperCase() + str.slice(1);

    }
return <>
        
        <div style={{height: '50px'}}>
        {
        props.alert && <div className={`alert alert-${props.alert.type ? props.alert.type : 'success'}`}role="alert">
            <strong>{props.alert.type ?  `${titleCase(props.alert.type)} : ` : ""}</strong> {props.alert.msg}
        </div>}
        </div>
        </>
        
}



