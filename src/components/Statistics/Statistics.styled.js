import styled from "styled-components";

export const Section = styled.section`
width: 600px;
margin-left: auto;
margin-right: auto;
margin-bottom: 100px;
background-color: #fff;
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;

export const Title = styled.h2`
text-transform: uppercase;
letter-spacing: 1px;
text-align: center;
color:  #595959;
padding-top: 30px;
padding-bottom: 30px;
`;

export const List = styled.ul`
display: flex;
justify-content: space-evenly
`;

export const ListItem = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height: 100px;
width: 100%;
background-color: ${() => (
		`#${Math.floor(Math.random() * 16777215)
			.toString(16)
			.padStart(6, 0)}`
	)
	};
`;

export const Data = styled.p`
text-align: center;
margin-bottom: 10px;
color:#e6e6e6;
font-weight: 500;
font-size: ${props => {
		switch (props.type) {
			case 'number':
				return '32px';
			default:
				return '18px'
		}
	}
	}
`;

