import React, { useEffect, useState } from 'react'
import { Dimensions, ImageRequireSource, TouchableOpacity } from 'react-native'
import { SharedStyles } from '.';
import { CustomActiviyRings } from './appleActivity'
import { CircleImage, Col, Input, InputWithOverlayContainer, PageWrapper, Row, StyledView, Text } from './shared.components'
const { width } = Dimensions.get("window");
const huskey = require('../../assets/imgs/husky.png') as ImageRequireSource;
const close = require('../../assets/imgs/close.png') as ImageRequireSource;

// props for the custom Activity Ring
const rings = {
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
}

const ActiviyInput = ({ color, activityType, threshold, handleOnChange, value }) => {

    return (
        <Col style={[SharedStyles.W100, SharedStyles.PH20, SharedStyles.start]}>
            <Text align={'flex-start'} fontWeight={'bold'}>
                {activityType}
            </Text>
            <InputWithOverlayContainer>
                <Input placeholder={'0 MIN'} fontSize={'22px'} color={color}
                    fontWeight={'bold'}
                    keyboardType={'numeric'}
                    defaultValue={value.toString()}
                    onChangeText={(value) =>
                        handleOnChange(value, activityType.toLocaleLowerCase())} />
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
                >{`${threshold}MIN`}</Text>
            </InputWithOverlayContainer>
        </Col>
    );
}

const ActivityWidgit = ({ handleClose }) => {

    const [total, setTotal] = useState(0);
    const [activity, setactivity] = useState({ run: 0, walk: 0, play: 0 });

    useEffect(() => {
        setactivity(rings.summary);
    }, [])

    useEffect(() => {
        let summedUp = Object.values(rings.summary).reduce((b, v) => b + v, 0);
        setTotal(summedUp);
    }, [total])

    useEffect(() => {

    }, [activity])

    const handleChangeValue = (value: number, activityType: 'run' | 'walk' | 'play') => {
        let updated;
        switch (activityType) {
            case 'run': {
                updated = { ...activity, run: value };
                break;
            }
            case 'walk': {
                updated = { ...activity, walk: value };
                break;
            }
            case 'play': {
                updated = { ...activity, play: value };
                break;
            }
        }
        setactivity(updated);
    }

    return (
        <PageWrapper backgroundColor={'#fff'}>
            <Row style={[SharedStyles.PH20, SharedStyles.MT20, SharedStyles.SB]}>
                <Text color={'#009B9A'} size={'24px'} fontWeight={'bold'}>{'Levi\'s Activity'}</Text>
                <TouchableOpacity onPress={handleClose}>
                    <CircleImage source={close} width={20} />
                </TouchableOpacity>
            </Row>
            {rings && <CustomActiviyRings ringsValues={rings.data} size={width * 0.5} strokeWidth={25} speed={2000} flex={0.4} imageSource={huskey} />}
            <Col style={{ flex: 0.1 }}>
                <Text fontWeight={'bold'} size={'14px'}>{`Today's Activity`}</Text>
                <Text fontWeight={'bold'} size={'30px'}>{`${total ? total : 0}/${rings.required.total}MIN`}</Text>
            </Col>
            <StyledView style={[SharedStyles.SA, SharedStyles.MB20, { flex: 0.5 }]}>
                <ActiviyInput color={'#FF821C'} activityType={'Run'} threshold={rings.required.total * rings.required.run } handleOnChange={handleChangeValue} value={activity.run} />
                <ActiviyInput color={'#00BFBF'} activityType={'Walk'} threshold={rings.required.total * rings.required.walk} handleOnChange={handleChangeValue} value={activity.walk} />
                <ActiviyInput color={'#48BFFD'} activityType={'Play'} threshold={rings.required.total * rings.required.play} handleOnChange={handleChangeValue} value={activity.play} />
            </StyledView>
        </PageWrapper>
    )
}

export default ActivityWidgit
