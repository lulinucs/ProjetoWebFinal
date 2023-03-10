import './App.css'
import React, { useState } from 'react'
import { gapi } from "gapi-script";
import Axios from "axios";

import GoogleLogin from 'react-google-login';
import ListaEventos from './componentes/ListaEventos'
import CardCadastro from './componentes/layout/CardCadastro'
import CadastroEventos from './componentes/CadastroEventos'
import Card from './componentes/layout/Card.jsx'
import Staff from './componentes/Staff.jsx'
import Admin from './componentes/Admin.jsx'

export default function App() {

	var [googleId, setGoogleId] = useState(false)
	var [admin, setAdmin] = useState(false)

	function login(googleData){
		Axios.post("http://luli.ferreira.lucas.vms.ufsc.br:8081/cadastrar", googleData).then((response) => {
			console.log("RESPONSE CADASTRO: ")	
			console.log(response)
			console.log(response.data.googleId)
			setGoogleId(response.data.googleId)
			console.log(admin);
		})
	}

	const responseGoogle = (response) => {
		login(response)
		console.log(response)
	};

	const handleChange = event => {
		if (event.target.checked) {
			console.log("checkbox true");
		} else {
			console.log("checkbox false");
		}
		setAdmin(current => !current);
	}


	return(

		<div className="App">
		
			{googleId != false ? 
			
			(admin ? (<Admin googleId={googleId} admin={admin}/>) : (<Staff googleId={googleId} admin={admin}/>)

			) : (
			
			<div className="home">
			<Card titulo="Login">

					<input type="checkbox" id="checkAdmin" value={admin} onChange={handleChange}/>
					<h5>Logar como produtor</h5>

				<GoogleLogin 
				clientId="37207957043-ecnp4grtj6naao34efml5ml3t4jo3u3p.apps.googleusercontent.com"
				buttonText="Continuar com o Google"
				onSuccess={responseGoogle} />
			</Card>
			</div>
			)}
		</div>
		

)}
