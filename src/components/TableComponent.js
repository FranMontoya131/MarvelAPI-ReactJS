import React, { useState, useEffect } from 'react';
import { Table } from 'antd';
import styled from 'styled-components';

const ComponentTable = ({columnas, registros}) => {

	const col = columnas;
	const res = registros;

	return (
		<ContainerTable>
			
		</ContainerTable>
	);
}

const ContainerTable = styled.div`
	height: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	border: 5px solid green;
`;


export default ComponentTable;