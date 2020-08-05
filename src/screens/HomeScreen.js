import React, { useEffect, useState } from 'react';
import { ActivityIndicator, Platform, ScrollView, StatusBar, StyleSheet, Text, View } from 'react-native';
import colors from '../config/colors';
import DeviceInfo from 'react-native-device-info';

const HomeScreen = () => {

    const [androidID, setAndroidID] = useState('');
    const [apiLevel, setApiLevel] = useState('');
    const [appName, setAppName] = useState('');
    const [batteryLevel, setBatteryLevel] = useState('');
    const [brand, setBrand] = useState('');
    const [buildNumber, setBuildNumber] = useState('');
    const [bundleID, setBundleID] = useState('');
    const [carrier, setCarrier] = useState('');
    const [device, setDevice] = useState('');
    const [deviceID, setDeviceID] = useState('');
    const [mac, setMac] = useState('');
    const [uniqueID, setUniqueID] = useState('');
    const [isEmulator, setIsEmulator] = useState('');
    const [deviceType, setDeviceType] = useState('');
    const [supportedProcessorArch, setSupportedProcessorArch] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    DeviceInfo.getAndroidId().then(androidId => {
        setAndroidID(androidId);
    });

    DeviceInfo.getApiLevel().then(apiLevel => {
        setApiLevel(apiLevel);
    });

    DeviceInfo.getBatteryLevel().then(batteryLevel => {
        setBatteryLevel(batteryLevel);
    });

    DeviceInfo.getCarrier().then(carrier => {
        setCarrier(carrier);
    });

    DeviceInfo.getDevice().then(device => {
        setDevice(device);
    });

    DeviceInfo.getMacAddress().then(mac => {
        setMac(mac);
    });

    DeviceInfo.isEmulator().then(emu => {
        setIsEmulator(emu);
    });

    DeviceInfo.supportedAbis().then(abis => {
        setSupportedProcessorArch(abis);
    });

    useEffect(() => {
        setAppName(DeviceInfo.getApplicationName);
        setBrand(DeviceInfo.getBrand);
        setBuildNumber(DeviceInfo.getBuildNumber);
        setBundleID(DeviceInfo.getBundleId);
        setDeviceID(DeviceInfo.getDeviceId);
        setUniqueID(DeviceInfo.getUniqueId);
        setDeviceType(DeviceInfo.getDeviceType);

        setInterval(() => {
            setIsLoading(false)
        },3000);

    }, []);

    if (!isLoading) {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <StatusBar hidden/>
                    <Text style={styles.headerTitle}>DEVICE INFORMATION</Text>

                    <View style={styles.listContainer}>
                        <View style={styles.listRow}>
                            <Text style={styles.infoTitle}>Android ID</Text>
                            <Text style={styles.infoDetail}>{androidID}</Text>
                        </View>

                        <View style={styles.listRow}>
                            <Text style={styles.infoTitle}>API Level</Text>
                            <Text style={styles.infoDetail}>{apiLevel}</Text>
                        </View>

                        <View style={styles.listRow}>
                            <Text style={styles.infoTitle}>Application Name</Text>
                            <Text style={styles.infoDetail}>{appName}</Text>
                        </View>

                        <View style={styles.listRow}>
                            <Text style={styles.infoTitle}>Battery Level</Text>
                            <Text style={styles.infoDetail}>{batteryLevel * 100}%</Text>
                        </View>

                        <View style={styles.listRow}>
                            <Text style={styles.infoTitle}>Brand</Text>
                            <Text style={styles.infoDetail}>{brand}</Text>
                        </View>

                        <View style={styles.listRow}>
                            <Text style={styles.infoTitle}>BuildNumber</Text>
                            <Text style={styles.infoDetail}>{buildNumber}</Text>
                        </View>

                        <View style={styles.listRow}>
                            <Text style={styles.infoTitle}>Bundle ID</Text>
                            <Text style={styles.infoDetail}>{bundleID}</Text>
                        </View>

                        <View style={styles.listRow}>
                            <Text style={styles.infoTitle}>Carrier</Text>
                            <Text style={styles.infoDetail}>{carrier}</Text>
                        </View>

                        <View style={styles.listRow}>
                            <Text style={styles.infoTitle}>Device</Text>
                            <Text style={styles.infoDetail}>{device}</Text>
                        </View>

                        <View style={styles.listRow}>
                            <Text style={styles.infoTitle}>Device ID</Text>
                            <Text style={styles.infoDetail}>{deviceID}</Text>
                        </View>

                        <View style={styles.listRow}>
                            <Text style={styles.infoTitle}>MAC Address</Text>
                            <Text style={styles.infoDetail}>{mac}</Text>
                        </View>

                        <View style={styles.listRow}>
                            <Text style={styles.infoTitle}>Unique ID</Text>
                            <Text style={styles.infoDetail}>{uniqueID}</Text>
                        </View>

                        <View style={styles.listRow}>
                            <Text style={styles.infoTitle}>Is Emulator</Text>
                            <Text style={styles.infoDetail}>{isEmulator ? 'Yes' : 'No'}</Text>
                        </View>

                        <View style={styles.listRow}>
                            <Text style={styles.infoTitle}>Device Type</Text>
                            <Text style={styles.infoDetail}>{deviceType}</Text>
                        </View>

                        <View style={styles.listRow}>
                            <Text style={styles.infoTitle}>Supported Processor Architecture</Text>
                            <Text style={styles.infoDetail}>{supportedProcessorArch}</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    } else {
        return (
            <View style={{
                flex: 1,
                backgroundColor: colors.DARK.PRIMARY,
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <StatusBar hidden/>
                <ActivityIndicator color={'white'} size={24}/>
                <Text style={{ color: colors.WHITE, marginTop: 8 }}>LOADING</Text>
            </View>
        );
    }

};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.DARK.PRIMARY,
        paddingTop: Platform.OS === 'ios' ? 40 : 30,
        justifyContent: 'flex-start',
    },
    headerTitle: {
        textAlign: 'center',
        fontSize: 20,
        color: colors.WHITE,
    },
    listContainer: {
        flexDirection: 'column',
        paddingVertical: 30,
        paddingHorizontal: 12,
    },
    listRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 24,
        borderRadius: 24,
        backgroundColor: colors.DARK.SECONDARY,
        marginBottom: 8,
    },
    infoTitle: {
        color: colors.WHITE,
        fontSize: 16,
    },
    infoDetail: {
        color: colors.WHITE,
        fontSize: 16,
    },
});

export default HomeScreen;
