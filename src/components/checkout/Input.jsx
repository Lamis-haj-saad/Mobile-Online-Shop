import { useFormContext } from "react-hook-form";

export default function Input({id, children, classname='', required, textArea, ...props}){
    const { register, formState: { errors } } = useFormContext();
    const error = errors[id];
    return(
        <p id={id+"_field"} className="form-row form-row-first validate-required">
            <label className={classname?? ""} htmlFor={id}>
                {children}
                {required && <abbr title="required" className="required">*</abbr>}
            </label>
            {!textArea? 
            <input type="text" {...props} 
            {...register(id, {
            required: required ? `${typeof children === "string" ? children.trim() : id} is required` : false,
            })}
            id={id} 
            name={id} 
            className={`input-text ${error ? "input-error" : ""}`}/>
            : 
            <textarea cols="5" rows="2" 
            {...props}
            {...register(id, {
            required: required ? `${typeof children === "string" ? children.trim() : id} is required` : false,
            })}
            id={id} 
            name={id}
            className={`input-text ${error ? "input-error" : ""}`}
            ></textarea>}
            
        </p>
    )
}

