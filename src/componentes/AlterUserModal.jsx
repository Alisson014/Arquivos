import React from "react";
import { useState } from "react";
import '../styles/AlterUserModal.css';

function AlterUserModal({classN, disable}){
    
    const [form, setform] = useState('update');

    function Activer(){
        form === 'update' ? setform('delete') : setform('update')
    }
    

    return(
        <div className={classN}>
            <button className="x" onClick={disable} > X </button>
        
        <div className="AlterUserModal">
            
            <div className={`UpdateUser ${ form === 'update' ? 'ShowUpdate' : 'HideUpdate'}`}>
                <h1>Atualizar dados</h1>
                <p className="altform" onClick={ () => { Activer() } } > Deletar </p>
                <form>
                    <label htmlFor="nome">Nome: </label>
                    <input type="text" name="nome" id="nome" placeholder="completo..." required/>

                    <label htmlFor="email">E-mail: </label>
                    <input type="email" name="email" id="email"  required/>
                    
                    <label htmlFor="idade">Idade: </label>
                    <input type="number" min={14} name="idade" id="idade" required/>
                    
                    <label htmlFor="telefone">Telefone: </label>
                    <input type="text" name="telefone" id="telefone" required/>
                    
                    <label htmlFor="endereco">Endereço: </label>
                    <input type="text" name="endereco" id="endereco" placeholder="logradouro completo" required/>

                    <button>Atualizar</button>
                </form>
                
            </div>

            <div className={`DeleteUser ${ form === 'delete' ? 'ShowDelete' : 'HideDelete'}`}>
                <h1>Deletar Conta</h1>
                <p className="altform" onClick={ () => { Activer() } } > Atualizar </p>
                <br/><br/>
                <p>Esta ação não poderá ser defeita.</p>
                <br/>
                <button> Deletar </button>
            </div>
        </div>
        </div>
    );
};

export default AlterUserModal;