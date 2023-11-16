import styled from "styled-components";

export const Table = styled.table`
width: 800px;
margin-left: auto;
margin-right: auto;
margin-bottom: 50px;
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;

export const RowHead = styled.tr`
height: 40px;
background-color:  #00cccc;
`;

export const RowBody = styled.tr`
height: 40px;
&:nth-child(2n){
	background-color:  #e6e6e6;
}
`;

export const ColumnHead = styled.th`
font-size: 18px;
text-transform: uppercase;
color: #f2f2f2;

`;

export const ColumnBody = styled.td`
text-align: center;
font-weight: 600;
color: #808080;
text-transform: ${props => {
		switch (props.type) {
			case 'transaction':
				return 'capitalize';
			default:
				return 'none';
		}
	}
	}
`;