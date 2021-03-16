import React from 'react'
import { Dimensions, ImageRequireSource, TouchableOpacity } from 'react-native'
import { SharedStyles } from '.';
import { CustomActiviyRings, IRing } from './appleActivity'
import { CircleImage, Col, Input, InputWithOverlayContainer, PageWrapper, Row, StyledView, Text } from './shared.components'
const { width } = Dimensions.get("window");
const huskey = require('../../assets/imgs/husky.png') as ImageRequireSource;
const close = require('../../assets/imgs/close.png') as ImageRequireSource;

// props for the custom Activity Ring
const rings: IRing[] = [{
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
}];

const ActiviyInput = ({ color, activityType }) => {

    return (
        <Col style={[SharedStyles.W100, SharedStyles.PH20, SharedStyles.start]}>
            <Text align={'flex-start'} fontWeight={'bold'}>
                {activityType}
            </Text>
            <InputWithOverlayContainer>
                <Input placeholder={'0 MIN'} fontSize={'22px'} color={color}
                    fontWeight={'bold'} keyboardType={'numeric'} />
                <Text
                    style={{
                        position: 'absolute',
                        right: 16,
                        top: '50%',
                        zIndex: 100,
                        transform: [{ translateY: -13 }],
                    }}
                    color={color}
                    fontWeight={'bold'}
                    size={'22px'}
                >{'30MIN'}</Text>
            </InputWithOverlayContainer>
        </Col>
    );
}

const ActivityWidgit = ({handleClose}) => {
    return (
        <PageWrapper backgroundColor={'#fff'}>
            <Row style={[SharedStyles.PH20, SharedStyles.MT20, SharedStyles.SB]}>
                <Text color={'#009B9A'} size={'24px'} fontWeight={'bold'}>{'Levi\'s Activity'}</Text>
                <TouchableOpacity onPress={handleClose}>
                    <CircleImage source={close} width={20} />
                </TouchableOpacity>
            </Row>
            {rings && <CustomActiviyRings ringsValues={rings} size={width * 0.5} strokeWidth={25} speed={2000} flex={0.4} imageSource={huskey} />}
            <Col style={{ flex: 0.1 }}>
                <Text fontWeight={'bold'} size={'14px'}>{`Today's Activity`}</Text>
                <Text fontWeight={'bold'} size={'30px'}>{`52/70MIN`}</Text>
            </Col>
            <StyledView style={[SharedStyles.SA, SharedStyles.MB20, { flex: 0.5 }]}>
                <ActiviyInput color={'#FF821C'} activityType={'Run'} />
                <ActiviyInput color={'#00BFBF'} activityType={'Walk'} />
                <ActiviyInput color={'#48BFFD'} activityType={'Play'} />
            </StyledView>
        </PageWrapper>
    )
}

export default ActivityWidgit
