import type { NextPage } from 'next';
import styled from "styled-components";

const Icon = styled.img`
width: 10px;
position: relative;
height: 12px;
`;
const Wrapper = styled.div`
width: 24px;
border-radius: 60px;
background-color: var(--white);
height: 24px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
`;
const Text = styled.b`position: relative;
line-height: 135.52%;
font-weight: 500;
`;
const FrameGroup = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
padding: 0px 33px;
gap: var(--gap-3xs);
`;
const StraightWrapper = styled.div`
flex: 1;
border-bottom: 2px solid #d000cc;
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: var(--padding-9xs) var(--padding-mid) var(--padding-5xs);
`;
const ParlayWrapper = styled.div`flex: 1;
border-bottom: 2px solid rgba(255, 255, 255, 0.15);
display: flex;
flex-direction: row;
align-items: center;
justify-content: center;
padding: var(--padding-9xs) var(--padding-mid) var(--padding-5xs);
`;
const FrameContainer = styled.div`align-self: stretch;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
font-size: var(--font-size-xl);
color: var(--color-gainsboro);
`;
const FrameHeader = styled.div`
align-self: stretch;
border-radius: var(--br-mini) var(--br-mini) 0px 0px;
background-color: rgba(32, 32, 32, 0.65);
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
padding: 13px 0px 0px;
gap: var(--gap-3xs);
font-size: var(--font-size-lg);
`;
const Label = styled.div`position: relative;
letter-spacing: 0.2px;
line-height: 140%;
font-weight: 500;
`;
const LabelWrapper = styled.div`display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
`;
const CloseIcon = styled.img`
width: 28px;
position: relative;
height: 28px;
overflow: hidden;
flex-shrink: 0;
`;
const FrameParent1 = styled.div`align-self: stretch;
flex: 1;
display: flex;
flex-direction: row;
align-items: center;
justify-content: space-between;
`;
const Label1 = styled.div`position: relative;
letter-spacing: 0.2px;
line-height: 140%;
text-transform: capitalize;
font-weight: 500;
`;
const Label2 = styled.b`position: relative;
letter-spacing: 0.2px;
line-height: 140%;
text-transform: capitalize;
color: var(--color-springgreen);
`;
const LabelParent = styled.div`align-self: stretch;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: space-between;
font-size: var(--font-size-base);
`;
const Div = styled.div`
position: relative;
font-size: var(--font-size-base);
line-height: 135.52%;
font-weight: 500;
`;
const LabelGroup = styled.div`
flex: 1;
border-radius: var(--br-8xs);
background-color: var(--color-gray-300);
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: center;
padding: var(--padding-6xs) var(--padding-xs);
`;
const FrameParent2 = styled.div`align-self: stretch;
display: flex;
flex-direction: row;
align-items: flex-start;
justify-content: flex-start;
gap: var(--gap-8xs);
font-size: var(--font-size-3xs);
`;
const FrameDiv = styled.div`align-self: stretch;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
padding: var(--padding-3xs) var(--padding-mini);
gap: var(--gap-8xs);
`;
const FrameWrapper = styled.div`
width: 355px;
color: white;
display: flex;
flex-direction: column;
gap: 5px;
`;
const PickslipInner = styled.div`
width: 100%;
background-color: var(--color-gray-300);
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding: var(--padding-mini) 0px;
`;
const Label3 = styled.b`position: relative;
letter-spacing: 0.2px;
line-height: 140%;
text-transform: capitalize;
color: #ff4545;
`;
const LabelWrapper1 = styled.div`
width: 148px;
display: flex;
flex-direction: row;
align-items: center;
justify-content: flex-start;
padding: 0px var(--padding-19xl) 0px 0px;
box-sizing: border-box;
`;
const FrameWrapper1 = styled.div`
width: 355px;
align-self: center;
padding: var(--padding-3xs) 0px;
border-bottom: 0.5px solid var(--color-gray-300);
display: flex;
justify-content: space-between;
`;
const FrameWrapper2 = styled.div`
padding: var(--padding-3xs) 0px;
width: 355px;
align-self: center;
display: flex;
justify-content: space-between;
`;
const FrameParent3 = styled.div`
width: 100%;
display: flex;
flex-direction: column;
padding: var(--padding-9xs) 0px;
`;
const PickslipInner1 = styled.div`
width: 100%;
background-color: var(--color-black-opacity);
backdrop-filter: blur(4px);
display: flex;
flex-direction: column;
padding: var(--padding-mini) 0px;
`;
const FrameChild = styled.img`
position: absolute;
top: 1px;
left: 1.18px;
border-radius: var(--br-8xs);
width: 143.6px;
height: 49px;
`;
const Clear = styled.b`
position: absolute;
top: calc(50% - 12px);
left: calc(50% - 26.53px);
line-height: 24px;
text-transform: uppercase;
`;
const ClearButton = styled.div`
width: 146px;
position: relative;
height: 52px;
`;
const FrameItem = styled.img`position: absolute;
top: 0px;
left: 0.18px;
border-radius: var(--br-8xs);
width: 203.6px;
height: 49px;
`;
const PlacePick = styled.b`position: absolute;
top: calc(50% - 12px);
left: calc(50% - 47.53px);
line-height: 24px;
text-transform: uppercase;
background: linear-gradient(90.22deg, #8b2bd7, #d000cc);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
`;
const PlaceButton = styled.div`
width: 204px;
position: relative;
height: 50px;
`;
const FrameParent4 = styled.div`
width: 100%;
display: flex;
flex-direction: row;
justify-content: center;
gap: var(--gap-3xs);
`;
const PickslipInner2 = styled.div`
width: 100%;
background-color: var(--color-gray-300);
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
padding: 20px 0px;
box-sizing: border-box;
text-align: center;
font-size: var(--font-size-base);
`;
const Frame = styled.div`position: absolute;
top: 0px;
left: 20px;
border-radius: var(--br-981xl);
background-color: var(--white);
border: 2px solid #5ea8ff;
box-sizing: border-box;
width: 24px;
height: 24px;
overflow: hidden;
`;
const Component = styled.div`
width: 44px;
position: relative;
border-radius: var(--br-981xl);
background: linear-gradient(265.38deg, #5ea8ff, #fa00ff);
height: 24px;
overflow: hidden;
flex-shrink: 0;
`;
const PickslipInner3 = styled.div`align-self: stretch;
display: flex;
align-items: center;
justify-content: space-between;
padding: var(--padding-6xs) 37px;
font-size: var(--font-size-lg);
`;
const PickslipRoot = styled.div`position: relative;
border-radius: var(--br-mini);
background-color: var(--color-gray-200);
width: 410px;
display: flex;
justify-content: start;
flex-direction: column;
text-align: left;
font-size: var(--font-size-3xl);
color: var(--white);
font-family: var(--font-poppins);
height: fit-content;
`;


const PickslipWhite: NextPage = () => {
    return (
        <PickslipRoot>
            <FrameHeader>
                <FrameGroup>
                    <Wrapper>
                        <Icon alt="" src="images/4.svg" />
                    </Wrapper>
                    Pickslip
                </FrameGroup>
                <FrameContainer>
                    <StraightWrapper>
                        <Text>Straight</Text>
                    </StraightWrapper>
                    <ParlayWrapper>
                        <Text>Parlay</Text>
                    </ParlayWrapper>
                </FrameContainer>
            </FrameHeader>
            <PickslipInner>
                <FrameWrapper>
                    <FrameParent1>
                        <LabelWrapper>
                            <Label>Chicago Bulls</Label>
                        </LabelWrapper>
                        <CloseIcon alt="" src="images/close.svg" />
                    </FrameParent1>
                    <LabelParent>
                        <Label1>Moneyline</Label1>
                        <Label2>-110</Label2>
                    </LabelParent>
                    <FrameParent2>
                        <LabelGroup>
                            <Label1>Pick</Label1>
                            <Div>$450</Div>
                        </LabelGroup>
                        <LabelGroup>
                            <Label1>To Win</Label1>
                            <Div>$850</Div>
                        </LabelGroup>
                    </FrameParent2>
                </FrameWrapper>
            </PickslipInner>
            <PickslipInner>
                <FrameWrapper>
                    <FrameParent1>
                        <LabelWrapper>
                            <Label>Chicago Bulls</Label>
                        </LabelWrapper>
                        <CloseIcon alt="" src="images/close.svg" />
                    </FrameParent1>
                    <LabelParent>
                        <Label1>Spread</Label1>
                        <Label2>-122</Label2>
                    </LabelParent>
                    <FrameParent2>
                        <LabelGroup>
                            <Label1>Pick</Label1>
                            <Div>$450</Div>
                        </LabelGroup>
                        <LabelGroup>
                            <Label1>To Win</Label1>
                            <Div>$850</Div>
                        </LabelGroup>
                    </FrameParent2>
                </FrameWrapper>
            </PickslipInner>
            <PickslipInner>
                <FrameWrapper>
                    <FrameParent1>
                        <LabelWrapper>
                            <Label>Under 45.5</Label>
                        </LabelWrapper>
                        <CloseIcon alt="" src="images/close.svg" />
                    </FrameParent1>
                    <LabelParent>
                        <Label1>Total Match Points</Label1>
                        <Label3>-110</Label3>
                    </LabelParent>
                    <FrameParent2>
                        <LabelGroup>
                            <Label1>Pick</Label1>
                            <Div>$450</Div>
                        </LabelGroup>
                        <LabelGroup>
                            <Label1>To Win</Label1>
                            <Div>$850</Div>
                        </LabelGroup>
                    </FrameParent2>
                </FrameWrapper>
            </PickslipInner>
            <PickslipInner1>
                <FrameWrapper1>
                    <LabelWrapper>
                        <Label>Total Odds</Label>
                    </LabelWrapper>
                    <LabelWrapper1>
                        <Label>28.7</Label>
                    </LabelWrapper1>
                </FrameWrapper1>
                <FrameWrapper2>
                    <LabelWrapper>
                        <Label>Possible Win:</Label>
                    </LabelWrapper>
                    <LabelWrapper1>
                        <Label>$280.7</Label>
                    </LabelWrapper1>
                </FrameWrapper2>
            </PickslipInner1>
            <PickslipInner2>
                <FrameParent4>
                    <ClearButton>
                        <FrameChild alt="" src="images/rectangle-3.svg" />
                        <Clear>Clear</Clear>
                    </ClearButton>
                    <PlaceButton>
                        <FrameItem alt="" src="images/rectangle-4.svg" />
                        <PlacePick>place pick</PlacePick>
                    </PlaceButton>
                </FrameParent4>
            </PickslipInner2>
            <PickslipInner3>
                <Label>Accept all odds changes</Label>
                <Component>
                    <Frame />
                </Component>
            </PickslipInner3>
        </PickslipRoot>);
};

export default PickslipWhite;
