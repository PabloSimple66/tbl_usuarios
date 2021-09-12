import React,{useEffect,useState}from "react";
import LinkForm from "./LinkForm"
import{db} from '../firebase'
import {toas, toast} from 'react-toastify'

export const Link=()=>{

    const[links,setLiks]=useState([]);

    const[cuid,setCuid]=useState('');





    const addYed=async(LinkObjet)=>{
        try {
            if(cuid===''){
                await db.collection('Usuarios').doc().set(LinkObjet);
                toast('Nuevo Usuario Agregado',{
                 type:'success',
                 autoClose:1500,
             });
            }else{
                await db.collection('Usuarios').doc(cuid).update(LinkObjet);
                toast('Nuevo Actualizado',{
                    type:'info',
                    autoClose:1500,
                });
                setCuid('');
    
            }
            
        } catch (error) {
            
        }
    };

    const Borrar=async(id)=>{
        if(window.confirm("Desea borrar este usuario de manera permanente")){
            await db.collection('Usuarios').doc(id).delete();
            toast('Usuario Eliminado',{
                type:'danger',
                autoClose:2000,
            })
        }
    };

    const gLin=async()=>{
        db.collection('Usuarios').onSnapshot((querySnap)=>{
            const docs=[];
            querySnap.forEach((doc)=>{
                docs.push({...doc.data(), id:doc.id});
        });
         setLiks(docs);
        });
    };

    useEffect(()=>{
        gLin();
    },[]);



    return (
     <div>
       <div className="col-md-0 p-1">
       <LinkForm {...{addYed,cuid,links}}/>
       </div>  
       
       <div className="col-md-0 p-2">
         {links.map(link =>(
           <div className="card mb-1" key={link.id}>
               <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p>{link.ids}</p>
                  <div>
                     <i className="material-icons text-danger"
                     onClick={()=>Borrar(link.id)}>close</i>
                     <i className="material-icons"
                     onClick={()=>setCuid(link.id)}>create</i>
                  </div>
                </div>
                <p>{link.nombre}</p>
                <p>{link.cedula}</p>
                <p>{link.telefono}</p>
                <p>{link.mail}</p>
               </div>   
           </div>
         ))}
     </div>
     </div>
    );
};

export default Link;