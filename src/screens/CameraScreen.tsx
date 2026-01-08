// import React, { useEffect, useState } from 'react';
// import { View, Text, TouchableOpacity } from 'react-native';
// import { Camera, useCameraDevice } from 'react-native-vision-camera';

// const CameraScreen = ({ navigation }: any) => {
//     const [hasPermission, setHasPermission] = useState(false);

//     // ✅ Correct API
//     const device = useCameraDevice('back');

//     useEffect(() => {
//         (async () => {
//             const permission = await Camera.requestCameraPermission();
//             setHasPermission(permission === 'granted');
//         })();
//     }, []);

//     if (!device || !hasPermission) {
//         return <Text>Camera not available</Text>;
//     }

//     return (
//         <View style={{ flex: 1 }}>
//             <Camera
//                 style={{ flex: 1 }}
//                 device={device}
//                 isActive={true}
//             />

//             <TouchableOpacity
//                 onPress={() => navigation.goBack()}
//                 style={{
//                     position: 'absolute',
//                     bottom: 30,
//                     alignSelf: 'center',
//                 }}
//             >
//                 <Text style={{ color: '#fff', fontSize: 16 }}>
//                     Close Camera
//                 </Text>
//             </TouchableOpacity>
//         </View>
//     );
// };

// export default CameraScreen;
