/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
// import React, { Component } from 'react';
import styled from 'styled-components';
import {Table} from 'antd';
import useHandleData from '../hooks/useHandleData';
import { connect } from 'react-redux';

const Characteres = ({Characteres, setCharacteres}) => {

	const [param, setParam] = useState("characters");
	const datos = useHandleData(param);
	const orderData = async () => {
		const allData = await datos();
        
		if(allData.length > 0){
			const dataNeed = allData.map((elemnt) => {
				const obj = {};
				obj.key = elemnt.id;
				obj.name = elemnt.name;
				obj.description = elemnt.description || "Sorry no description";
				return obj;
			});

			setData(dataNeed);
			setCharacteres(dataNeed);
		}else{
			setData([{}]);
		}
	}

	useEffect(() => {
		if(Object.keys(Characteres).length > 1){
			setData(Characteres);
		}else{
			orderData();
		}
	},[]);

	const [columns, setColumns] = useState([
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			width: 170,
		},
		{
			title: 'Description',
			dataIndex: 'description',
			key: 'description',
			width: 170,  
		}
	]);
	const [data, setData] = useState([]);

	const [viewDetails, setViewDetails] = useState(false);

	return(
		<>
		<TitlePage>
			<p>Characteres</p>
		</TitlePage>
		<ContainerCharacteres>
			<Table columns={columns} dataSource={data} pagination={{ current: 1, pageSize: 10 }} size='small' scroll={{ x: 500, y: 300 }} />
			<ContainerFavorites>
				<p>Favorites</p>
			</ContainerFavorites>
		</ContainerCharacteres>
		{viewDetails ?
		<ContainerCharacteresDescripcion>
			<CharacterExtra>
				<p>Nombre</p>
				<img />
			</CharacterExtra>
			<CharacterExtra>
				<p>Comics</p>
				<p>Descripcion</p>
			</CharacterExtra>
			<CharacterExtra>
				<p>Comics</p>
				<p>Descripcion</p>
			</CharacterExtra>
		</ContainerCharacteresDescripcion> : null}
		</>
	);
}

const ContainerCharacteres = styled.div`
	display: flex;
	justify-content: flex-start;
	flex-direction: row;
	padding-top: 2em;
`;

const ContainerCharacteresDescripcion = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	flex-direction: row;
	padding: 2em;
`;

const CharacterExtra = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	width: 100%;
	border: 1px solid #29a19c;
	border-radius: 5px;
	margin-bottom: 1em;
	color: white;
`;

const ContainerFavorites = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	height: 100%;
	width: 25%;

	p {
		color: white;
		font-family: 'Roboto', sans-serif;
		font-style: normal;
		font-weight: bold;
		
	}

	img {
		width: 50px;
		height: 50px;
	}
`;

const TitlePage = styled.div`
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding-left: 2em;
	p {
		font-family: 'Roboto', sans-serif;
		font-style: normal;
		font-weight: bold;
		font-size: 30px;
		color: #ffffff;
	}
`;

const mapStateToProps = (state) => {
	return {
	  Characteres: state.CharacteresReducer
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
	  setCharacteres: payload => dispatch({type: 'SET_CHARACTERES', payload})
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Characteres);