import styled from "styled-components";

export const Card = styled.div`
width: 400px;
margin-left: auto;
margin-right: auto;
margin-bottom: 100px;
background-color: #fff;
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;

export const CardWrap = styled.div`
padding-top: 50px;
padding-bottom: 30px;
`;

export const Avatar = styled.img`
width: 200px;
margin-left: auto;
margin-right: auto;
margin-bottom: 40px;
`;

export const Description = styled.p`
text-align: center;
margin-bottom: 10px;
color: ${props => {
		switch (props.type) {
			case 'username':
				return '#262626';
			default:
				return '#737373'
		}
}};
	
font-weight: 500;
font-size: ${props => {
		switch (props.type) {
			case 'username':
				return '30px';
			default:
				return '18px'
		}
	}}
`;

export const Statistic = styled.ul`
display: flex;
justify-content: space-evenly;
align-items: center;
height: 100px;
background-color: #f0f0f0;
border-top: 2px solid #dedede;
`;

export const StatisticItem = styled.li`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
width: calc(100% / 3);
height: 100%;
gap: 8px;
&:not(:last-child){
	border-right: 2px solid #dedede;
}
`;

export const Span = styled.span`
font-size: 18px;
font-weight: ${props => {
		switch (props.type) {
			case 'number':
				return 700;
			default:
				return 400;
		}
	}
	}
`;