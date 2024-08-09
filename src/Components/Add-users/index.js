import { useState } from 'react';
import hello from '../assets/esinais.png';
import './add-users.css';


const AddUsers = ( { cadastrarUsuario, valueInput, setFotoPerfil } ) => {

    //const [mostrarCampo, setMostrarCampo] = useState(false);
    
    return (

        <main className='addUsers'>
            <div className='addUsers__container'>
                <div className='addUsers__title'>
                    <img src={hello} alt="hello"/>
                    <div className='addUsers_greeting'>
                        <h1>Cadastrar Usuário</h1>
                        <p>* informações obrigatórias</p>
                    </div>
                </div>
                <form onSubmit={cadastrarUsuario}>
                    <div className='cardAddUser'>
                        <div className='alinharUs'>
                            <p className='text-primaryyUs-p'>CPF</p>
                            <input className='inputUs' type="text" name="cpf" placeholder="Digite o cpf" onChange={valueInput} /><br />

                        </div>
                        <div className='alinharUs'>
                            <p className='text-primaryyUs-p'>NOME</p>
                            <input className='inputUs' type="text" name="nome" placeholder="Digite o nome completo" onChange={valueInput} /><br />

                        </div>
                        <div className='alinharUs'>
                            <p className='text-primaryyUs-p'>E-MAIL</p>
                            <input className='inputUs' type="email" name="email" placeholder="Digite o email" onChange={valueInput} /><br />

                        </div>
                        <div className='alinharUs'>
                            <p className='text-primaryyUs-p'>ENDEREÇO</p>
                            <input className='inputUs' type="text" name="endereco" placeholder="Digite o endereco" onChange={valueInput} /><br />

                        </div>
                        <div className='alinharUs'>
                            <p className='text-primaryyUs-p'>TELEFONE</p>
                            <input className='inputUs' type="text" name="telefone" placeholder="Digite o telefone" onChange={valueInput} /><br />

                        </div>
                        <div className='alinharUs'>
                            <p className='text-primaryyUs-p'>SEXO</p>
                            <input type="radio" id="masculino" name="sexo" onChange={valueInput} value="masculino" />
                            <label for="masculino">MASCULINO</label>
                            <input type="radio" id="feminino" name="sexo"  onChange={valueInput} value="feminino"/>
                            <label for="feminino">FEMININO</label>
                        </div>
                        <div className='alinharUs'>
                            <p className='text-primaryyUs-p'>SENHA</p>
                            <input className='inputUs' type="password" name="senha" placeholder="Digite sua senha" autoComplete="on" onChange={valueInput} /><br />

                        </div>
                        <div className='alinharUs'>
                            <p className='text-primaryyUs-p'>CONFIRME SUA SENHA</p>
                            <input className='inputUs' type="password" name="senhaConfirmada" placeholder="Digite sua senha" autoComplete="on" /><br />

                        </div>
                        <div className='alinharUs'>
                            <p className='text-primaryyUs-p'>PERFIL</p>
                            <select className='selectUs' onChange={valueInput} name="perfil" id="perfil">
                                <option value="" selected>Selecione:</option>
                                <option value="administrador">Administrador</option>
                                <option value="autorizador">Autorizador</option>
                                <option value="padrao" >Padrão</option>
                                
                            </select>
                        </div>
                        <div className='alinharUs'>
                                <p className='text-primaryyUs-p'>FOTO DE PERFIL</p>
                                <input id="fotoPerfil" type="file" name="fotoPerfil" accept="image/png, image/jpeg, image/gif" onChange={e => setFotoPerfil(e.target.files[0])} ></input>
                        </div>
                        <div className=''>
                            <button className='buttonCadastrar' type="submit">Cadastrar</button>
                            <button className='buttonLimpar' type="submit">Limpar</button>
                        </div>
                    </div>
                   

                    

                </form>

            </div>
        </main>

    );
}
export default AddUsers;