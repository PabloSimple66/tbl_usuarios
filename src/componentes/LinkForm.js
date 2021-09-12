import React, {useState,useEffect} from "react";
import { db } from "../firebase";

export const LinkForm =(props)=>{

    const initialStateValues={
        
        ids:'',
        nombre:'',
        cedula:'',
        telefono:'',
        mail:''
    };

    const [values,setValues]=useState(initialStateValues);

    const hdInChange= e=>{
        const {name,value}=e.target;
        setValues({...values,[name]:value});

        
    };


    const hadlSum=e=>{
        e.preventDefault();
        
        props.addYed(values);
        setValues({...initialStateValues});

    };

    const getenla=async(id)=>{
        const doc=await db.collection('Usuarios').doc(id).get();
        setValues({...doc.data()});
    }

   
   
    useEffect(()=>{
        if(props.cuid===''){
            setValues({...initialStateValues})
        }else{
           getenla(props.cuid); 
        }
    },[props.cuid]);





    return(
        <form className="card card-body" onSubmit={hadlSum}>
            <div className="form-group input-group">
                <div className="input-group-text bg-ligth">
                  <i className="material-icons">assignment_ind</i>
                </div>
                <input
                 type="text"
                 className="form-control"
                 name="ids"
                 placeholder="Ingrese Id"
                 onChange={hdInChange}
                 value={values.ids}
                />
            </div>

            <div className="form-group input-group">
                <div className="input-group-text">
                </div>
            </div>
            
            <div className="form-group input-group">
                <div className="input-group-text bg-ligth">
                  <i className="material-icons">person</i>
                </div>
                <input
                 type="text"
                 className="form-control"
                 name="nombre"
                 placeholder="Ingrese Nombre"
                 onChange={hdInChange}
                 value={values.nombre}
                />
            </div>

            <div className="form-group input-group">
                <div className="input-group-text">
                </div>
            </div>

            <div className="form-group input-group">
                <div className="input-group-text bg-ligth">
                  <i className="material-icons">call_to_action</i>
                </div>
                <input
                 type="text"
                 className="form-control"
                 placeholder="Ingrese Cédula"
                 name="cedula"
                 onChange={hdInChange}
                 value={values.cedula}
                />
            </div>

            <div className="form-group input-group">
                <div className="input-group-text">
                </div>
            </div>

            <div className="form-group input-group">
                <div className="input-group-text bg-ligth">
                  <i className="material-icons">phone_in_talk</i>
                </div>
                <input
                 type="text"
                 className="form-control"
                 placeholder="Ingrese Teléfono"
                 name="telefono"
                 onChange={hdInChange}
                 value={values.telefono}
                />
            </div>

            <div className="form-group input-group">
                <div className="input-group-text">
                </div>
            </div>

            <div className="form-group input-group">
                <div className="input-group-text bg-ligth">
                  <i className="material-icons">email</i>
                </div>
                <input
                 type="text"
                 className="form-control"
                 placeholder="Ingrese mail"
                 name="mail"
                 onChange={hdInChange}
                 value={values.mail}
                />
            </div>

            <div className="form-group input-group">
                <div className="input-group-text">
                </div>
            </div>

            <button className="btn btn-primary btn-block">
                {props.cuid===''? 'Guardar':'Actualizar'}
            </button>
            



        </form>
    )
};

export default LinkForm