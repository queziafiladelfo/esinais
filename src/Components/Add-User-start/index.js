import React, { useState } from 'react';
import './AddUserStart.css';
import ModalSucesso from './../Modal-success'; // Import the success modal component
import api from '../../config/configApi';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function CadastroUsuarioTelaInicial(props) {
  const [verificadorDeCpf, setVerificadorDeCpf] = useState(true);
  const [verificadorDeNome, setVerificadorDeNome] = useState(true);
  const [verificadorDeEmail, setVerificadorDeEmail] = useState(true);
  const [verificadorDeSexo, setVerificadorDeSexo] = useState(true);
  const [verificadorDeSenha, setVerificadorDeSenha] = useState(true);
  const [verificadorDeSenhaConfirmada, setVerificadorDeSenhaConfirmada] = useState(false);
  const [validarFormulario, setValidarFormulario] = useState(false);
  const [showModalSucesso, setShowModalSucesso] = useState(false);
  const [showModalErro, setShowModalErro] = useState(false);
  const [statusMessage, setStatusMessage] = useState('');

  const verificarCpf = e => {
    let cpf = document.getElementById('cpf').value;
    if (cpf === "") {
      setVerificadorDeCpf(true);
    } else {
      setVerificadorDeCpf(false);
      setValidarFormulario(true);
    }
  };

  const verificarNome = e => {
    let nome = document.getElementById('nome').value;
    if (nome === "") {
      setVerificadorDeNome(true);
    } else {
      setVerificadorDeNome(false);
      setValidarFormulario(true);
    }
  };

  const verificarEmail = e => {
    let email = document.getElementById('email').value;
    setVerificadorDeEmail(email === "" || !email.includes("@"));
    if (email === "") {
      setVerificadorDeEmail(true);
    } else {
      setVerificadorDeEmail(false);
      setValidarFormulario(true);
    }
  };

  const verificarSexo = e => {
    let sexo = document.querySelector('input[name=sexo]:checked').value;
    if (!(sexo !== "")) {
      setVerificadorDeSexo(true);
    } else {
      setVerificadorDeSexo(false);
      setValidarFormulario(true);
    }
  };

  const verificarSenha = e => {
    let senha = document.getElementById('senha').value;
    if (senha === "") {
      setVerificadorDeSenha(true);
    } else {
      setVerificadorDeSenha(false);
      setValidarFormulario(true);
    }
  };

  const verificarSenhaConfirmacao = e => {
    let senha = document.getElementById('senha').value;
    let senhaConfirmacao = document.getElementById('senhaConfirmada').value;
    setVerificadorDeSenhaConfirmada(senha !== senhaConfirmacao || senhaConfirmacao === "");
    if (senha !== senhaConfirmacao) {
      setVerificadorDeSenhaConfirmada(true);
    } else {
      setVerificadorDeSenhaConfirmada(false);
      setValidarFormulario(true);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    if (validarFormulario) {
      try {
        const formData = {
          cpf: document.getElementById('cpf').value,
          nome: document.getElementById('nome').value,
          email: document.getElementById('email').value,
          sexo: document.querySelector('input[name=sexo]:checked').value,
          senha: document.getElementById('senha').value
        };
        
        const response = await api.post('/usuarios/quick', formData, {
          headers: {
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          }
        });

        setStatusMessage(response.data.message);
        alert(response.data.message);
        props.setTrigger(false);
      } catch (err) {
        if (err.response) {
          alert(err.response.data.message)
          setStatusMessage(err.response.data.message);
        } else {
          alert("Erro ao cadastrar as informações");
          alert(err.response.data.message)  
        }
        
        props.setTrigger(false);
      }
    }
  };

  return (props.trigger) ? (
    <div className="createUser">
      <div className="createUser-inner">
        <Container fluid="xxl" className="bg-ligth">
          <Row>
            <Col>
              <h5 className="text-center texto-titulo-createUser text-uppercase">Criar conta</h5>
            </Col>
            <Col xs={2}>
              <button className="close-btn btn btn-danger" onClick={() => props.setTrigger(false)}>Fechar</button>
            </Col>
          </Row>
          <form onSubmit={handleSubmit}>
            <Row>
              <Col xs={3} className="mt-2">
                <p className='text-primaryyUs-p'>CPF</p>
                <input className='inputCpf' type="text" id="cpf" name="cpf" placeholder="Digite o cpf" onChange={verificarCpf} />
                {(verificadorDeCpf) && (<p className="texto-cor-poup texto-senha-nao-confere">Campo Obrigatório</p>)}
              </Col>
              <Col className="mt-2">
                <p className='text-primaryyUs-p'>NOME</p>
                <input className='inputNome' type="text" id="nome" name="nome" placeholder="Digite o nome completo" onChange={verificarNome} />
                {(verificadorDeNome) && (<p className="texto-cor-poup texto-senha-nao-confere">Campo Obrigatório</p>)}
              </Col>
            </Row>
            <Row>
              <Col className="mt-2">
                <p className='text-primaryyUs-p'>E-MAIL</p>
                <input className='inputEmail' type="email" id="email" name="email" placeholder="Digite o email" onChange={verificarEmail} />
                {(verificadorDeEmail) && (<p className="texto-cor-poup texto-senha-nao-confere">Campo Obrigatório</p>)}
              </Col>
              <Col className="mt-2">
                <p className='text-primaryyUs-p'>SEXO</p>
                <input type="radio" id="masculino" name="sexo" value="masculino" onChange={verificarSexo} />
                <label htmlFor="masculino">MASCULINO</label>
                <input type="radio" id="feminino" name="sexo" value="feminino" onChange={verificarSexo} />
                <label htmlFor="feminino">FEMININO</label>
                {(verificadorDeSexo) && (<p className="texto-cor-poup texto-senha-nao-confere">Campo Obrigatório</p>)}
              </Col>
            </Row>
            <br />
            <Row>
              <Col>
                <p className='text-primaryyUs-p'>SENHA</p>
                <input className='inputUps' type="password" id="senha" name="senha" placeholder="Digite sua senha" autoComplete="on" onChange={verificarSenha} />
                {(verificadorDeSenha) && (<p className="texto-cor-poup texto-senha-nao-confere">Campo Obrigatório</p>)}
              </Col>
              <Col>
                <span>
                  {(verificadorDeSenhaConfirmada) ? (<p className='text-primaryyUs-p texto-cor-poup'>CONFIRME SUA SENHA</p>) : (<p className='text-primaryyUs-p'>CONFIRME SUA SENHA</p>)}
                  <input className='inputUps' type="password" id="senhaConfirmada" name="senhaConfirmada" placeholder="Digite sua senha" autoComplete="on" onChange={verificarSenhaConfirmacao} />
                  {(verificadorDeSenhaConfirmada) && (<p className="texto-cor-poup texto-senha-nao-confere">Senhas não confere</p>)}
                  
                </span>
              </Col>
            </Row>
            <br />
            <Row>
              <Col xs={4}></Col>
              <Col>
                <button className="send-btn btn btn-success" type="submit">Cadastrar</button>
              </Col>
              <Col xs={5}></Col>
            </Row>
          </form>
        </Container>
        {props.children}
      </div>

      {showModalSucesso && <ModalSucesso message={statusMessage} setShowModal={setShowModalSucesso} />}
      
    </div>
  ) : "";
}

export default CadastroUsuarioTelaInicial;
