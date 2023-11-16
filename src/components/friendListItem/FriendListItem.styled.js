import styled from "styled-components";

export const ListItem = styled.div`
display: flex;
align-items: center;
gap: 80px;
height: 100%;
padding-left: 20px;
padding-right: 20px;
border-radius: 20px;
background-color: #fff;
box-shadow: 0px 1px 6px rgba(46, 47, 66, 0.08),
    0px 1px 1px rgba(46, 47, 66, 0.16), 0px 2px 1px rgba(46, 47, 66, 0.08);
`;

export const Marker = styled.span`
display: block;
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${props =>(props.$status ? "#00ff00" : "#ff0000")
};
`;

export const Avatar = styled.img`
width: 60px;
`;

export const Name = styled.p`
font-size: 24px;
font-weight: 700;
color: #595959;
`;