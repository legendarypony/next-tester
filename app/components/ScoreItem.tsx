import type { NextPage } from 'next';
import styled from "styled-components";

const Div1 = styled.div`position: relative;
line-height: 135.52%;
font-weight: 500;
`;
const Div = styled.div`position: relative;
line-height: 135.52%;
font-weight: 500;
color: #b094ff;
`;
interface parameters{
    is_selected?: boolean;
    parameter1?: string;
    parameter2?: string;
};
const ParentRoot = styled.div<parameters>`flex: 1;
width: 100%;
position: relative;
border-radius: 5px;
background-color: var(--color-gray-300);
border: ${(props) => (props.is_selected ? '2px solid #5ea8ff' : '')};
box-sizing: ${(props) => (props.is_selected ? 'border-box' : '')};
border-image: ${(props) => (props.is_selected ? 'linear-gradient(to right, #5ea8ff, #FA00FF) 1' : '')}; /* Gradient for the border */
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 8px 0px;
height: 35px;
box-sizing: border-box;
gap: 10px;
text-align: left;
font-size: 14px;
color: #fff;
`;

const Frame:NextPage<parameters> = ({is_selected, parameter1, parameter2}) => {
    return (
        <ParentRoot is_selected={is_selected}>
            <Div1>{parameter1}</Div1>
            <Div>{parameter2}</Div>
        </ParentRoot>);
};

export default Frame;
