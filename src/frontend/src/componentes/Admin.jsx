import React, { useState } from "react";
import GoogleLogin from 'react-google-login';
import Axios from "axios";

import Card from './layout/Card.jsx'
import ListaMeusEventos from './ListaMeusEventos.jsx'
import CadastroEventos from './CadastroEventos'


export default (props) => {
	var updater = foiUpdate.bind(this)
	var [valor, setValor] = useState(0)

	function foiUpdate() {
		setValor(valor + 1)
		console.log(valor)
	}

	return(
		<>
		<div>
		<h2>Cadastrar Eventos</h2>
		<Card titulo="Novo Evento">
			<CadastroEventos googleId={props.googleId} updater={updater} />
		</Card>
		</div>
		<ListaMeusEventos googleId={props.googleId} admin={props.admin} valor={valor}/>
		</>
	)}