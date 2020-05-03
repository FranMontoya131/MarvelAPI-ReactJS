import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import LogoMarvel from '../img/marvelIcono.svg';
import Me from '../img/me.jpg';
import { Link } from 'react-router-dom';

const Header = () => {


	return (
		<Container>
			<div className='logoApp'>
				<img src={LogoMarvel} alt='MarvelLogo' />
			</div>
			<div className='opcionesMenu'>
				<ul>
					<li><Link to='/characteres'>Characters</Link></li>
					<li><Link to='/comics'>Comics</Link></li>
					{/* <li><Link to='/stories'>Stories</Link></li> */}
				</ul>
			</div>
			<div className='perfilUsuario'>
				<div>
					<img src={Me} alt='Javier Montoya'/>
				</div>
				<p>Javier Montoya</p>
			</div>
		</Container>
	);
}

const Container = styled.div`
	/* width: 100%; */
	height: 60px;
	background-color: #222831;
	padding: 5px 5px 5px 5px;
	display: flex;
	flex-direction: row;
	justify-content: space-around;
	align-items: center;

	.logoApp {
		display: flex;
		justify-content: center;
		width: 33.33%;

		img {
			width: 100px;
			height: 100px;
		}

	}

	.opcionesMenu {
		display: flex;
		width: 33.33%;
		
		ul {
			color: white;
			list-style-type: none;
			padding: 0px;
			font-family: 'Roboto', sans-serif;
			font-style: normal;
			li {
				display: inline;
				padding:15px;
				font-size: 19px;
				border-radius: 5px;

				a {
					text-decoration: none;
					color: white !important;
					padding: 10px;
				}
			}

			li:hover{
				background-color: #ef4339;
				cursor: pointer;
			}
		}
	}

	.perfilUsuario{
		display: flex;
		justify-content: flex-end;
		align-items: center;
		flex-direction: row;
		width: 33.33%;
		padding-right: 10px;
		p {
			color: white;
		}

		div{
			border-radius: 50%;
			border: 4px solid #a3f7bf;
			height: 45px;
			width: 45px;
			margin-right: 5px;
			img {
				height: 45px;
				width: 45px;
				border-radius: 50%;
			}
		}
	}
	
		
	}


`;

export default Header;