import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useRef } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import colors from '../../config/colors';
import WalletExtraOptionsScreen from '../../screens/WalletScreens/WalletExtraOptionsScreen';

const styles = StyleSheet.create({
    button: {
        paddingHorizontal: 16,
        paddingVertical: 19,
        borderRadius: 4,
        alignItems: 'center',
        backgroundColor: colors.cta_primary,
    },
    text: {
        fontSize: 14,
        color: colors.white,
    },
});

type CustomBtnProps = {
    currentPage: string;
    textButton: string;
    title: string;
    describe: string;
};

export default function ButtonPopUpText(props: CustomBtnProps) {
    const { currentPage, textButton, title, describe } = props;
    const refRBSheet: any = useRef(currentPage);

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
                refRBSheet.current.open();
            }}
        >
            <Text style={styles.text}>{textButton}</Text>
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown
                height={280}
                customStyles={{
                    wrapper: {
                        backgroundColor: 'transparent',
                    },
                    draggableIcon: {
                        backgroundColor: colors.black,
                    },
                    container: {
                        backgroundColor: colors.cta_primary,
                        borderTopLeftRadius: 20,
                        borderTopRightRadius: 20,
                    },
                }}
            >
                <WalletExtraOptionsScreen currentPage={currentPage} title={title} describe={describe} />
            </RBSheet>
        </TouchableOpacity>
    );
}
