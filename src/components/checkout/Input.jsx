import { useFormContext } from "react-hook-form";

export default function Input({id, children, classname='', required, textArea, ...props}){
    
    return(
        <p id={id+"_field"} className="form-row form-row-first validate-required">
            <label className={classname?? ""} htmlFor={id}>
                {children}
                {required && <abbr title="required" className="required">*</abbr>}
            </label>
            {!textArea? 
            <input type="text" {...props} 
            id={id} 
            name={id} 
            className="input-text"/>
            : 
            <textarea cols="5" rows="2" 
            {...props}
            id={id} 
            name={id}
            className="input-text"
            ></textarea>}
            
        </p>
    )
}

