import * as React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { useRef } from 'react';
import RBSheet from 'react-native-raw-bottom-sheet';
import WalletExtraOptionsScreen from '../../screens/WalletScreens/WalletExtraOptionsScreen';
import colors from '../../config/colors';

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingHorizontal: 16,
        paddingVertical: 19,
        borderRadius: 4,
        alignItems: 'center',
        backgroundColor: colors.cta_primary,
    },
    buttonIcon: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        width: 4,
        height: 4,
        borderRadius: 50,
        marginRight: 6,
    },
    buttonIconPop: {
        flexDirection: 'row',
        backgroundColor: colors.white,
        width: 4,
        height: 4,
        borderRadius: 50,
    },
});

type CustomBtnProps = {
    currentPage: string;
};

export default function ButtonPopUpEtc(props: CustomBtnProps) {
    const { currentPage } = props;
    const refRBSheet: any = useRef(currentPage);

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
                refRBSheet.current.open();
            }}
        >
            <Text style={styles.buttonIcon} />
            <Text style={styles.buttonIcon} />
            <Text style={styles.buttonIconPop} />
            <RBSheet
                ref={refRBSheet}
                closeOnDragDown
                height={180}
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
                <WalletExtraOptionsScreen describe="" title="" currentPage="" />
            </RBSheet>
        </TouchableOpacity>
    );
}
