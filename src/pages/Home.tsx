import React, { useRef } from 'react'
import { Dimensions, ImageRequireSource } from 'react-native'
import styled from 'styled-components/native';
import { CustomActiviyRings } from '../components/appleActivity';
import ActivityRings from 'react-native-activity-rings';
import RBSheet from 'react-native-raw-bottom-sheet';
import ActivityWidgit from '../components/ActivityWidgit.component';
import { SharedStyles } from '../components/styles/Shared.style';
import { CircleImage, Col, PageWrapper, Row, StyledScrollView, Text } from '../components/shared.components';

const { width, height } = Dimensions.get("window");
const huskey = require('../../assets/imgs/husky.png') as ImageRequireSource;

// props for the custom Activity Ring
const rings = [
    {
        data: [{
            start: "#FFF5ED",
            end: "#FF821C",
            bg: "#FFF5ED",
            theta: 0.27
        }, {
            start: "#D1EDEC",
            end: "#00BFBF",
            bg: "#D1EDEC",
            theta: 0.43
        }, {
            start: "#D7F1FF",
            end: "#48BFFD",
            bg: "#D7F1FF",
            theta: 0.73
        }], summary: { walk: 12, play: 5, run: 8 }
        , required: { total: 70, walk: 0.4, play: 0.1, run: 0.5 }
    }, {
        data: [{
            start: "#FFF5ED",
            end: "#FF821C",
            bg: "#FFF5ED",
            theta: 0.77
        }, {
            start: "#D1EDEC",
            end: "#00BFBF",
            bg: "#D1EDEC",
            theta: 0.83
        }, {
            start: "#D7F1FF",
            end: "#48BFFD",
            bg: "#D7F1FF",
            theta: 0.4
        }], summary: { walk: 24, run: 6, play: 2 }
        , required: { total: 40, walk: 0.7, play: 0.1, run: 0.2 }
    }];

// props for the Activity Ring package
const activityData = [
    {
        label: "Run",
        value: 0.77,
        color: "#FF821C",
        backgroundColor: "#FFF5ED"
    },
    {
        label: "Walk",
        value: 0.83,
        color: "#00BFBF",
        backgroundColor: "#D1EDEC"
    },
    {
        label: "Play",
        value: 0.4,
        color: "#48BFFD",
        backgroundColor: "#D7F1FF"
    }
];
const activityConfig = {
    width: 170,
    height: 170,
    radius: 20,
    ringSize: 15,
};

const Home = () => {

    const RNSheet = useRef(null);
    const handleCloseSheet = () => RNSheet.current?.close();

    return (
        <>
            <PageWrapper>
                <StyledScrollView>
                    {rings && rings.map(({ data, summary, required }, i) =>
                        <WidgitWrapper key={i} onPress={() => RNSheet.current?.open()}>
                            <Col style={[SharedStyles.W50, SharedStyles.start]}>
                                <CircleImage source={huskey} width={70} style={SharedStyles.MB16} />
                                <Row>
                                    <Circle color={`#FF821C`} />
                                    <Text color={`#FF821C`}>{`Run ${summary.run}/${required.total * required.run}MIN`}</Text>
                                </Row>
                                <Row style={SharedStyles.MT8}>
                                    <Circle color={`#00BFBF`} />
                                    <Text color={`#00BFBF`}>{`Walk ${summary.walk}/${required.total*required.walk}MIN`}</Text>
                                </Row>
                                <Row style={SharedStyles.MT8}>
                                    <Circle color={`#48BFFD`} />
                                    <Text color={'#48BFFD'}>{`Play ${summary.play}/${required.total*required.play}MIN`}</Text>
                                </Row>
                            </Col>
                            <CustomActiviyRings ringsValues={data} size={width * 0.36} strokeWidth={20} speed={2000} flex={1} />
                        </WidgitWrapper>)}


                    <WidgitWrapper>
                        <Col style={[SharedStyles.W50, SharedStyles.start]}>
                            <CircleImage source={huskey} width={70} style={SharedStyles.MB16} />
                            <Row>
                                <Circle color={`#FF821C`} />
                                <Text color={`#FF821C`}>{'Run 23/30MIN'}</Text>
                            </Row>
                            <Row style={SharedStyles.MT8}>
                                <Circle color={`#00BFBF`} />
                                <Text color={`#00BFBF`}>{'Walk 25/30MIN'}</Text>
                            </Row>
                            <Row style={SharedStyles.MT8}>
                                <Circle color={`#48BFFD`} />
                                <Text color={'#48BFFD'}>{'Play 4/10MIN'}</Text>
                            </Row>
                        </Col>
                        <ActivityRings data={activityData} config={activityConfig} />
                    </WidgitWrapper>

                </StyledScrollView>
            </PageWrapper>
            <RBSheet
                ref={RNSheet}
                height={height - 60}
                animationType={'slide'}
                closeOnDragDown={true}
                closeOnPressMask={true}
                minClosingHeight={10}
                customStyles={{
                    wrapper: {
                        backgroundColor: '#50505050',
                    },
                    container: {
                        borderTopEndRadius: 30,
                        borderTopStartRadius: 30,
                    },
                }}
            >
                <ActivityWidgit handleClose={handleCloseSheet} />
            </RBSheet>
        </>
    );
}


const WidgitWrapper = styled.TouchableOpacity<{ backgroundColor?: string }>`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-radius: 16px;
    margin: 8px 20px;
    padding: 16px;
    box-shadow: 0px 0px 5px #e6e6e6;
    background-color: ${({ backgroundColor }) => backgroundColor ? backgroundColor : '#fff'};
`;

const Circle = styled.View<{ color: string, dimentions?: number }>`
    height: ${({ dimentions }) => dimentions ? dimentions : 22}px;
    width: ${({ dimentions }) => dimentions ? dimentions : 22}px;
    margin: 0 8px;
    border-radius: ${({ dimentions }) => dimentions ? dimentions / 2 : 11}px;
    background-color: ${({ color }) => color};
`;

export default Home;
