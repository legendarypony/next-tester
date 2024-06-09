import type { NextPage } from 'next';
import styled from "styled-components";
import Button from "./Button"
import ScoreItem from './ScoreItem'
import PickSlip from './PickSlip'
const Content = styled.div`
flex: 1;
display: flex;
justify-content: center;
overflow-y: scroll;
`;
const Contain = styled.div`
flex: 1;
display: flex;
flex-direction: column;
gap: 30px;
max-width: 1438px;
padding:38px;
`;
const ImageBrand = styled.img`
overflow: hidden;
height: 316px;
flex-shrink: 0;
object-fit: contain;
`;
const TabList = styled.div`
width: 100%;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
gap: 43px;
text-align: left;
font-size: var(--font-size-lg);
color: var(--white);
font-family: var(--font-poppins);
`;
const Text1 = styled.div`
display: inline;
position: relative;
font-weight: 500;
color: var(--white);
font-size: var(--font-size-sm);
`;
const Text3 = styled.div`
display: inline;
position: relative;
font-weight: 500;
font-size: var(--font-size-base);
color: var(--white);
`;
const Text2 = styled.div`
font-size: var(--font-size-sm);
line-height: 135.52%;
color: #b6b6b6;`
const Table = styled.div`
flex:1;
backdrop-filter: blur(4px);
background-color: var(--color-black-opacity);
height: fit-content;
border-radius: var(--br-mini);
`;
const TableHeader = styled.div`
border-radius: 15px 15px 0 0;
display: flex;
align-items: center;
justify-content: space-between;
padding: 5px 23px;
background-color: var(--color-gray-200);
height: 42px;
`;
const TableRow = styled.div`
flex:1;
display: flex;
height: 90px;
align-items: center;
justify-content: space-between;
`;
const ColumnFootball = styled.b`
flex:1;
display:flex;
flex-direction: column;
justify-content: space-between;
font-size: var(--font-size-lg);
line-height: 135.52%;
text-align: left;
color: var(--white);
`;
const Rows = styled.div`
flex:1;
display: flex;
justify-content: space-between;
gap:var(--gap-5xs);
`
const Rows2 = styled.div`
flex:1;
display: flex;
justify-content: space-between;
`
const Rows1 = styled.div`
display: flex;
justify-content: space-between;
gap:41px;
`
const Score = styled.div`
flex:1;
height: 90px;
display: flex;
flex-direction: column;
justify-content: center;
padding-right: 17px;
border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
`;
const Cols = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
gap:var(--gap-5xs);
`
const ImageWrapper = styled.div`
display: flex;
align-items: start;
gap:var(--gap-5xs);
`
const TextTable = styled.div`
flex:1;
font-size: var(--font-size-sm);
line-height: 135.52%;
font-weight: 500;
text-align: center;
color: var(--white);
`
const LastTime = styled.div`
width: 50 px;
padding-left: 23px;
padding-right: 8px;
display: flex;
flex-direction: column;
justify-content: center;
gap: var(--gap-5xs);
border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
`;
const Time = styled.div`
width: 50 px;
padding-left: 23px;
padding-right: 8px;
display: flex;
flex-direction: column;
justify-content: center;
gap: var(--gap-5xs);
`;
const Club = styled.div`
flex:1;
display:flex;
justify-content:space-between;
Height: 90px;
align-items: center;
padding-left: 13px;
padding-right: 30px;
border-bottom: 0.5px solid rgba(255, 255, 255, 0.1);
border-left: 0.5px solid rgba(255, 255, 255, 0.1);
`
const ImageIcon = styled.img`
margin-right: 8px;
width: 24px;
height: 24px;
object-fit: cover;
`;
const MorePicks = styled.div`position: relative;
line-height: 135.52%;
`;
const UnionIcon = styled.img`width: 12.2px;
position: relative;
height: 6.7px;
`;
const UnionWrapper = styled.div`display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding: 3px 0px 0px;
`;
const MorePicksParentRoot = styled.div`
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
padding: 0px 0px 0px 32px;
box-sizing: border-box;
gap: 10px;
text-align: left;
font-size: 14px;
color: #b6b6b6;
font-family: Satoshi;
height: 40px;
`;
const Rectangle: NextPage = () => {
    return (
        <Content>
            <Contain>
                <ImageBrand src='images/image-83.png' />
                <TabList>
                    <Button Text='NFL' is_Icon={false} />
                    <Text1>Soccer</Text1>
                    <Text1>Basketball</Text1>
                    <Text1>Hockey</Text1>
                    <Text1>Boxing</Text1>
                </TabList>
                <Rows1>
                    <Table>
                        <TableHeader>
                            <ColumnFootball>Football</ColumnFootball>
                            <Rows>
                                <TextTable>Spread</TextTable>
                                <TextTable>Total</TextTable>
                                <TextTable>Moneyline</TextTable>
                            </Rows>
                        </TableHeader>
                        <TableRow>
                            <Rows2>
                                <Time>
                                    <Text1>19:30</Text1>
                                    <Text2>19 Apr</Text2>
                                </Time>
                                <Club>
                                    <Cols>
                                        <ImageWrapper><ImageIcon src='images\image-42.png'></ImageIcon><Text3>CHI Bulls</Text3></ImageWrapper>
                                        <ImageWrapper><ImageIcon src='images\image-43.png'></ImageIcon><Text3>MIL Bucks</Text3></ImageWrapper>
                                    </Cols>
                                    <Button Text='More Picks' />
                                </Club>
                            </Rows2>
                            <Score>
                                <Cols>
                                    <Rows>
                                        <ScoreItem is_selected={false} parameter1='+9' parameter2='-110' />
                                        <ScoreItem is_selected={true} parameter1='O 225.5' parameter2='-110' />
                                        <ScoreItem is_selected={false} parameter2='+320' />
                                    </Rows>
                                    <Rows>
                                        <ScoreItem is_selected={false} parameter1='+9' parameter2='-110' />
                                        <ScoreItem is_selected={true} parameter1='O 225.5' parameter2='-110' />
                                        <ScoreItem is_selected={false} parameter2='-410' />
                                    </Rows>
                                </Cols>
                            </Score>
                        </TableRow>
                        <TableRow>
                            <Rows2>
                                <Time>
                                    <Text1>19:30</Text1>
                                    <Text2>19 Apr</Text2>
                                </Time>
                                <Club>
                                    <Cols>
                                        <ImageWrapper><ImageIcon src='images\image-44.png'></ImageIcon><Text3>CHI Bulls</Text3></ImageWrapper>
                                        <ImageWrapper><ImageIcon src='images\image-45.png'></ImageIcon><Text3>MIL Bucks</Text3></ImageWrapper>
                                    </Cols>
                                    <Button Text='More Picks' />
                                </Club>
                            </Rows2>
                            <Score>
                                <Cols>
                                    <Rows>
                                        <ScoreItem is_selected={false} parameter1='+9' parameter2='-110' />
                                        <ScoreItem is_selected={false} parameter1='O 225.5' parameter2='-110' />
                                        <ScoreItem is_selected={true} parameter2='+320' />
                                    </Rows>
                                    <Rows>
                                        <ScoreItem is_selected={true} parameter1='+9' parameter2='-110' />
                                        <ScoreItem is_selected={false} parameter1='O 225.5' parameter2='-110' />
                                        <ScoreItem is_selected={false} parameter2='-410' />
                                    </Rows>
                                </Cols>
                            </Score>
                        </TableRow>
                        <TableRow>
                            <Rows2>
                                <Time>
                                    <Text1>19:30</Text1>
                                    <Text2>19 Apr</Text2>
                                </Time>
                                <Club>
                                    <Cols>
                                        <ImageWrapper><ImageIcon src='images\image-46.png'></ImageIcon><Text3>CHI Bulls</Text3></ImageWrapper>
                                        <ImageWrapper><ImageIcon src='images\image-47.png'></ImageIcon><Text3>MIL Bucks</Text3></ImageWrapper>
                                    </Cols>
                                    <Button Text='More Picks' />
                                </Club>
                            </Rows2>
                            <Score>
                                <Cols>
                                    <Rows>
                                        <ScoreItem is_selected={false} parameter1='+9' parameter2='-110' />
                                        <ScoreItem is_selected={false} parameter1='O 225.5' parameter2='-110' />
                                        <ScoreItem is_selected={true} parameter2='+320' />
                                    </Rows>
                                    <Rows>
                                        <ScoreItem is_selected={true} parameter1='+9' parameter2='-110' />
                                        <ScoreItem is_selected={false} parameter1='O 225.5' parameter2='-110' />
                                        <ScoreItem is_selected={false} parameter2='-410' />
                                    </Rows>
                                </Cols>
                            </Score>
                        </TableRow>
                        <TableRow>
                            <Rows2>
                                <Time>
                                    <Text1>19:30</Text1>
                                    <Text2>19 Apr</Text2>
                                </Time>
                                <Club>
                                    <Cols>
                                        <ImageWrapper><ImageIcon src='images\image-48.png'></ImageIcon><Text3>CHI Bulls</Text3></ImageWrapper>
                                        <ImageWrapper><ImageIcon src='images\image-49.png'></ImageIcon><Text3>MIL Bucks</Text3></ImageWrapper>
                                    </Cols>
                                    <Button Text='More Picks' />
                                </Club>
                            </Rows2>
                            <Score>
                                <Cols>
                                    <Rows>
                                        <ScoreItem is_selected={false} parameter1='+9' parameter2='-110' />
                                        <ScoreItem is_selected={false} parameter1='O 225.5' parameter2='-110' />
                                        <ScoreItem is_selected={true} parameter2='+320' />
                                    </Rows>
                                    <Rows>
                                        <ScoreItem is_selected={true} parameter1='+9' parameter2='-110' />
                                        <ScoreItem is_selected={false} parameter1='O 225.5' parameter2='-110' />
                                        <ScoreItem is_selected={false} parameter2='-410' />
                                    </Rows>
                                </Cols>
                            </Score>
                        </TableRow>
                        <TableRow>
                            <Rows2>
                                <Time>
                                    <Text1>19:30</Text1>
                                    <Text2>19 Apr</Text2>
                                </Time>
                                <Club>
                                    <Cols>
                                        <ImageWrapper><ImageIcon src='images\image-50.png'></ImageIcon><Text3>CHI Bulls</Text3></ImageWrapper>
                                        <ImageWrapper><ImageIcon src='images\image-51.png'></ImageIcon><Text3>MIL Bucks</Text3></ImageWrapper>
                                    </Cols>
                                    <Button Text='More Picks' />
                                </Club>
                            </Rows2>
                            <Score>
                                <Cols>
                                    <Rows>
                                        <ScoreItem is_selected={false} parameter1='+9' parameter2='-110' />
                                        <ScoreItem is_selected={true} parameter1='O 225.5' parameter2='-110' />
                                        <ScoreItem is_selected={false} parameter2='+320' />
                                    </Rows>
                                    <Rows>
                                        <ScoreItem is_selected={false} parameter1='+9' parameter2='-110' />
                                        <ScoreItem is_selected={true} parameter1='O 225.5' parameter2='-110' />
                                        <ScoreItem is_selected={false} parameter2='-410' />
                                    </Rows>
                                </Cols>
                            </Score>
                        </TableRow>
                        <TableRow>
                            <Rows2>
                                <LastTime>
                                    <Text1>19:30</Text1>
                                    <Text2>19 Apr</Text2>
                                </LastTime>
                                <Club>
                                    <Cols>
                                        <ImageWrapper><ImageIcon src='images\image-52.png'></ImageIcon><Text3>CHI Bulls</Text3></ImageWrapper>
                                        <ImageWrapper><ImageIcon src='images\image-53.png'></ImageIcon><Text3>MIL Bucks</Text3></ImageWrapper>
                                    </Cols>
                                    <Button Text='More Picks' />
                                </Club>
                            </Rows2>
                            <Score>
                                <Cols>
                                    <Rows>
                                        <ScoreItem is_selected={false} parameter1='+9' parameter2='-110' />
                                        <ScoreItem is_selected={false} parameter1='O 225.5' parameter2='-110' />
                                        <ScoreItem is_selected={true} parameter2='+320' />
                                    </Rows>
                                    <Rows>
                                        <ScoreItem is_selected={false} parameter1='+9' parameter2='-110' />
                                        <ScoreItem is_selected={false} parameter1='O 225.5' parameter2='-110' />
                                        <ScoreItem is_selected={true} parameter2='-410' />
                                    </Rows>
                                </Cols>
                            </Score>
                        </TableRow>
                        <TableRow>
                            <Rows2>
                                <Time>
                                    <Text1>19:30</Text1>
                                    <Text2>19 Apr</Text2>
                                </Time>
                                <Club>
                                    <Cols>
                                        <ImageWrapper><ImageIcon src='images\image-42.png'></ImageIcon><Text3>CHI Bulls</Text3></ImageWrapper>
                                        <ImageWrapper><ImageIcon src='images\image-43.png'></ImageIcon><Text3>MIL Bucks</Text3></ImageWrapper>
                                    </Cols>
                                    <Button Text='More Picks' />
                                </Club>
                            </Rows2>
                            <Score>
                                <Cols>
                                    <Rows>
                                        <ScoreItem is_selected={false} parameter1='+9' parameter2='-110' />
                                        <ScoreItem is_selected={true} parameter1='O 225.5' parameter2='-110' />
                                        <ScoreItem is_selected={false} parameter2='+320' />
                                    </Rows>
                                    <Rows>
                                        <ScoreItem is_selected={false} parameter1='+9' parameter2='-110' />
                                        <ScoreItem is_selected={true} parameter1='O 225.5' parameter2='-110' />
                                        <ScoreItem is_selected={false} parameter2='-410' />
                                    </Rows>
                                </Cols>
                            </Score>
                        </TableRow>
                        <TableRow>
                            <Rows2>
                                <Time>
                                    <Text1>19:30</Text1>
                                    <Text2>19 Apr</Text2>
                                </Time>
                                <Club>
                                    <Cols>
                                        <ImageWrapper><ImageIcon src='images\image-44.png'></ImageIcon><Text3>CHI Bulls</Text3></ImageWrapper>
                                        <ImageWrapper><ImageIcon src='images\image-45.png'></ImageIcon><Text3>MIL Bucks</Text3></ImageWrapper>
                                    </Cols>
                                    <Button Text='More Picks' />
                                </Club>
                            </Rows2>
                            <Score>
                                <Cols>
                                    <Rows>
                                        <ScoreItem is_selected={false} parameter1='+9' parameter2='-110' />
                                        <ScoreItem is_selected={false} parameter1='O 225.5' parameter2='-110' />
                                        <ScoreItem is_selected={true} parameter2='+320' />
                                    </Rows>
                                    <Rows>
                                        <ScoreItem is_selected={true} parameter1='+9' parameter2='-110' />
                                        <ScoreItem is_selected={false} parameter1='O 225.5' parameter2='-110' />
                                        <ScoreItem is_selected={false} parameter2='-410' />
                                    </Rows>
                                </Cols>
                            </Score>
                        </TableRow>
                        <TableRow>
                            <Rows2>
                                <Time>
                                    <Text1>19:30</Text1>
                                    <Text2>19 Apr</Text2>
                                </Time>
                                <Club>
                                    <Cols>
                                        <ImageWrapper><ImageIcon src='images\image-46.png'></ImageIcon><Text3>CHI Bulls</Text3></ImageWrapper>
                                        <ImageWrapper><ImageIcon src='images\image-47.png'></ImageIcon><Text3>MIL Bucks</Text3></ImageWrapper>
                                    </Cols>
                                    <Button Text='More Picks' />
                                </Club>
                            </Rows2>
                            <Score>
                                <Cols>
                                    <Rows>
                                        <ScoreItem is_selected={false} parameter1='+9' parameter2='-110' />
                                        <ScoreItem is_selected={false} parameter1='O 225.5' parameter2='-110' />
                                        <ScoreItem is_selected={true} parameter2='+320' />
                                    </Rows>
                                    <Rows>
                                        <ScoreItem is_selected={true} parameter1='+9' parameter2='-110' />
                                        <ScoreItem is_selected={false} parameter1='O 225.5' parameter2='-110' />
                                        <ScoreItem is_selected={false} parameter2='-410' />
                                    </Rows>
                                </Cols>
                            </Score>
                        </TableRow>
                        <MorePicksParentRoot>
                            <MorePicks>More Picks</MorePicks>
                            <UnionWrapper>
                                <UnionIcon alt="" src="images/union.svg" />
                            </UnionWrapper>
                        </MorePicksParentRoot>
                    </Table>
                    <PickSlip />
                </Rows1>
            </Contain>
        </Content >
    );
};
export default Rectangle;
