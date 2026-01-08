

// // import React, { useState } from 'react';
// // import {
// //     View,
// //     Image,
// //     Modal,
// //     TouchableOpacity,
// //     Text,
// // } from 'react-native';

// // import { useNavigation } from '@react-navigation/native';
// // import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// // import { RootStackParamList } from '../navigation/types';
// // import { headerStyles } from '../styles/header.styles';

// // const Header: React.FC = () => {
// //     const [visible, setVisible] = useState(false);

// //     const navigation =
// //         useNavigation<NativeStackNavigationProp<RootStackParamList>>();

// //     return (
// //         <>
// //             <View style={headerStyles.container}>
// //                 {/* LEFT */}
// //                 <View style={headerStyles.leftContainer}>
// //                     <Image
// //                         source={require('../assets/header/tittle.png')}
// //                         style={headerStyles.logo}
// //                     />
// //                 </View>

// //                 {/* RIGHT */}
// //                 <View style={headerStyles.rightContainer}>
// //                     {/* QR ICON */}
// //                     <TouchableOpacity onPress={() => setVisible(true)}>
// //                         <Image
// //                             source={require('../assets/header/qr.png')}
// //                             style={headerStyles.qrIcon}
// //                         />
// //                     </TouchableOpacity>

// //                     {/* CAMERA ICON (UPDATED) */}

// //                     <Image
// //                         source={require('../assets/header/camera.png')}
// //                         style={headerStyles.cameraIcon}
// //                     />


// //                     {/* THREE DOT ICON */}
// //                     <Image
// //                         source={require('../assets/header/kolan.png')}
// //                         style={headerStyles.icon}
// //                     />
// //                 </View>
// //             </View>

// //             {/* QR MODAL */}
// //             <Modal visible={visible} transparent animationType="fade">
// //                 <View
// //                     style={{
// //                         flex: 1,
// //                         backgroundColor: 'rgba(0,0,0,0.6)',
// //                         justifyContent: 'center',
// //                         alignItems: 'center',
// //                     }}
// //                 >
// //                     <View
// //                         style={{
// //                             backgroundColor: '#fff',
// //                             padding: 20,
// //                             borderRadius: 10,
// //                             alignItems: 'center',
// //                         }}
// //                     >
// //                         <Text style={{ fontSize: 16, fontWeight: '600' }}>
// //                             QR Code
// //                         </Text>

// //                         <Image
// //                             source={require('../assets/header/qr4.jpeg')}
// //                             style={{ width: 200, height: 200, marginVertical: 15 }}
// //                         />

// //                         <TouchableOpacity onPress={() => setVisible(false)}>
// //                             <Text style={{ color: 'blue' }}>Close</Text>
// //                         </TouchableOpacity>
// //                     </View>
// //                 </View>
// //             </Modal>
// //         </>
// //     );
// // };

// // export default Header;


// import React, { useState } from 'react';
// import {
//     View,
//     Image,
//     Modal,
//     TouchableOpacity,
//     Text,
// } from 'react-native';

// import { useNavigation, DrawerActions } from '@react-navigation/native';
// import { NativeStackNavigationProp } from '@react-navigation/native-stack';
// import { RootStackParamList } from '../navigation/types';
// import { headerStyles } from '../styles/header.styles';

// const Header: React.FC = () => {
//     const [visible, setVisible] = useState(false);

//     const navigation =
//         useNavigation<NativeStackNavigationProp<RootStackParamList>>();

//     return (
//         <>
//             <View style={headerStyles.container}>
//                 {/* LEFT */}
//                 <View style={headerStyles.leftContainer}>
//                     <Image
//                         source={require('../assets/header/tittle.png')}
//                         style={headerStyles.logo}
//                     />
//                 </View>

//                 {/* RIGHT */}
//                 <View style={headerStyles.rightContainer}>
//                     {/* QR ICON */}
//                     <TouchableOpacity onPress={() => setVisible(true)}>
//                         <Image
//                             source={require('../assets/header/qr.png')}
//                             style={headerStyles.qrIcon}
//                         />
//                     </TouchableOpacity>

//                     {/* CAMERA ICON */}
//                     <Image
//                         source={require('../assets/header/camera.png')}
//                         style={headerStyles.cameraIcon}
//                     />

//                     {/* THREE DOT ICON → OPEN DRAWER */}
//                     <TouchableOpacity
//                         onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
//                     >
//                         <Image
//                             source={require('../assets/header/kolan.png')}
//                             style={headerStyles.icon}
//                         />
//                     </TouchableOpacity>
//                 </View>
//             </View>

//             {/* QR MODAL */}
//             <Modal visible={visible} transparent animationType="fade">
//                 <View
//                     style={{
//                         flex: 1,
//                         backgroundColor: 'rgba(0,0,0,0.6)',
//                         justifyContent: 'center',
//                         alignItems: 'center',
//                     }}
//                 >
//                     <View
//                         style={{
//                             backgroundColor: '#fff',
//                             padding: 20,
//                             borderRadius: 10,
//                             alignItems: 'center',
//                         }}
//                     >
//                         <Text style={{ fontSize: 16, fontWeight: '600' }}>
//                             QR Code
//                         </Text>

//                         <Image
//                             source={require('../assets/header/qr4.jpeg')}
//                             style={{ width: 200, height: 200, marginVertical: 15 }}
//                         />

//                         <TouchableOpacity onPress={() => setVisible(false)}>
//                             <Text style={{ color: 'blue' }}>Close</Text>
//                         </TouchableOpacity>
//                     </View>
//                 </View>
//             </Modal>
//         </>
//     );
// };

// export default Header;
import React, { useState } from 'react';
import {
    View,
    Image,
    Modal,
    TouchableOpacity,
    Text,
} from 'react-native';

import { useNavigation, DrawerActions } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';

import { headerStyles } from '../styles/header.styles';
import { HomeDrawerParamList } from '../navigation/HomeDrawerNavigator';

const Header: React.FC = () => {
    const [visible, setVisible] = useState(false);

    const navigation =
        useNavigation<DrawerNavigationProp<HomeDrawerParamList>>();

    return (
        <>
            <View style={headerStyles.container}>
                {/* LEFT */}
                <View style={headerStyles.leftContainer}>
                    <Image
                        source={require('../assets/header/tittle.png')}
                        style={headerStyles.logo}
                    />
                </View>

                {/* RIGHT */}
                <View style={headerStyles.rightContainer}>
                    {/* QR ICON */}
                    <TouchableOpacity onPress={() => setVisible(true)}>
                        <Image
                            source={require('../assets/header/qr.png')}
                            style={headerStyles.qrIcon}
                        />
                    </TouchableOpacity>

                    {/* CAMERA ICON */}
                    <Image
                        source={require('../assets/header/camera.png')}
                        style={headerStyles.cameraIcon}
                    />

                    {/* THREE DOT ICON → OPEN DRAWER */}
                    <TouchableOpacity
                        onPress={() =>
                            navigation.dispatch(DrawerActions.openDrawer())
                        }
                    >
                        <Image
                            source={require('../assets/header/kolan.png')}
                            style={headerStyles.icon}
                        />
                    </TouchableOpacity>
                </View>
            </View>

            {/* QR MODAL */}
            <Modal visible={visible} transparent animationType="fade">
                <View
                    style={{
                        flex: 1,
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}
                >
                    <View
                        style={{
                            backgroundColor: '#fff',
                            padding: 20,
                            borderRadius: 10,
                            alignItems: 'center',
                        }}
                    >
                        <Text style={{ fontSize: 16, fontWeight: '600' }}>
                            QR Code
                        </Text>

                        <Image
                            source={require('../assets/header/qr4.jpeg')}
                            style={{ width: 200, height: 200, marginVertical: 15 }}
                        />

                        <TouchableOpacity onPress={() => setVisible(false)}>
                            <Text style={{ color: 'blue' }}>Close</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </>
    );
};

export default Header;
