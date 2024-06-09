import type { NextPage } from 'next';
import Button_special, { IconName } from './Button_special'
import styled from "styled-components";

const Sidebar = styled.div`
backdrop-filter: blur(4px);
border-radius: 25px;
background-color: var(--color-black-opacity);
height: 100vh;
min-width: 320px;
width: 320px;
display: flex;
flex-direction: column;
align-items: start;
`;

const Logger = styled.img`
padding-left: 32px;
padding-top: 32px;
overflow: hidden;
height: 53px;
flex-shrink: 0;
object-fit: cover;
margin-bottom: 44px;
`;

const Title = styled.div`
padding-left: 25px;
font-size: var(--font-size-base);
line-height: 135.52%;
color: var(--color-gray-100);
text-align: center;
display:inline;
`;
const Row = styled.div`
padding-left: 32px;
display:flex;
flex-direction: column;
row-gap: var(--gap-5xs);
`;
const SeeAll = styled.div`
padding-left: 32px;
font-size: var(--font-size-base);
color: var(--white);
margin-left: 23px;
margin-top: 23px;
`;
const Rectangle: NextPage = () => {
    return (
        <Sidebar>
            <Logger alt="" src="images/fanfunded-white-1.png" />
            <Row>
                <Title>Menu</Title>
                <Button_special is_clicked={false} text="Home" icon_name={IconName.Soccer} />
            </Row>
            <Row>
                <Title>Top Sports</Title>
                <Button_special is_clicked={true} text="Football" icon_name={IconName.Football} />
                <Button_special is_clicked={false} text="Soccer" icon_name={IconName.Soccer} />
                <Button_special is_clicked={false} text="Basketball" icon_name={IconName.Basketball} />
                <Button_special is_clicked={false} text="Baseball" icon_name={IconName.Baseball} />
                <Button_special is_clicked={false} text="Hockey" icon_name={IconName.Hockey} />
                <Button_special is_clicked={false} text="Boxing" icon_name={IconName.Boxing} />
                <Button_special is_clicked={false} text="Golf" icon_name={IconName.Golf} />
                <Button_special is_clicked={false} text="Golf" icon_name={IconName.Golf} />
                <Button_special is_clicked={false} text="Tennish" icon_name={IconName.Tennish} />
            </Row>
            <SeeAll>
                SeeAll {'>'}
            </SeeAll>
        </Sidebar>
    );
};

export default Rectangle;
