import { useFormContext } from "react-hook-form";

export default function Input({id, children, classname='', required, textArea, ...props}){
    const methods = useFormContext();
    if (!methods) {
        console.error("useFormContext is being used outside of FormProvider.");
        return null; // Prevents component from rendering if FormProvider is missing
      }
    const { register, formState: { errors } } = methods;
    
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
            {...register(id, { required: required })}
            className={`input-text ${errors[id] ? "input-error" : ""}`}/>
            : 
            <textarea cols="5" rows="2" 
            {...props}
            {...register(id, { required: required })} 
            id={id} 
            name={id}
            className={`input-text ${errors[id] ? "input-error" : ""}`}
            ></textarea>}
            {errors[id] && (
            <p className="error-message">{errors[id]?.message || `${children} is required.`}</p>
            )}
        </p>
    )
}

