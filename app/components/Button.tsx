import type { NextPage } from 'next';
import styled from "styled-components";

const PhfootballIcon = styled.img`width: 20px;
position: relative;
height: 20px;
overflow: hidden;
flex-shrink: 0;
`;
const Text1 = styled.div`position: relative;
font-weight: 500;
`;
const UnionIcon = styled.img`width: 12px;
position: relative;
height: 7px;
`;
const UnionWrapper = styled.div`display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
padding: 3px 0px 0px;
`;
const ButtonRoot = styled.div`position: relative;
border-radius: 8px;
background: linear-gradient(265.38deg, #5ea8ff, #fa00ff);
overflow: hidden;
flex-shrink: 0;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: 8px 18px;
box-sizing: border-box;
gap: var(--gap-5xs);
mix-blend-mode: normal;
text-align: left;
font-size: var(--font-size-base);
color: var(--white);
font-family: var(--font-poppins);
height: 35px;
`;
interface parameters {
    Text?: string;
    is_Icon?: boolean;
}

const Button: NextPage<parameters> = ({ Text, is_Icon }) => {
    return (
        <ButtonRoot>
            {is_Icon?<PhfootballIcon alt="" src="images/ph-football.svg" />:""}
            <Text1>{Text}</Text1>
            <UnionWrapper>
                <UnionIcon alt="" src="images/union.svg" />
            </UnionWrapper>
        </ButtonRoot>);
};

export default Button;
