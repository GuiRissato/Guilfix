import React from 'react';

function FormField({tag, label, type, name, value, onChange }){
    return(
        <div>
        <label>
        {label}
        {tag === "textarea" ? <textarea
          type={type}
            value={value}
            name={name}
            onChange={onChange}
          >  
            </textarea>     
           : 
          <input
            type={type}
            value={value}
            name={name}
            onChange={onChange}
          />
        }
        </label>
      </div>

        
    )
}

export default FormField;