import React, { useEffect, useState } from "react";
import { View, Text, TouchableOpacity, FlatList, Image, Alert  } from "react-native";
import Background from "../../components/Background/Background";
import styles from "./DispatchServiceStyle";
import { GeneralStyles } from "../../components";
import { ALL_DISPATCH_SERVICES, UPDATE_DISPATCH_SERVICE } from "../../graphql";
import { useLazyQuery, useMutation } from "@apollo/client";
import { getUserInfo } from "../../utils/AuthenticationUtils";
import { showLocation } from "react-native-map-link";
import * as Location from "expo-location";

const userImagePlaceholder = require("../../staticResources/images/userPlaceholder.png");

const DispatchService = ({navigation, route} ) => {
  const [userInfo, setUserInfo] = useState();
  const [userLocation, setuserLocation] = useState(null);

  useEffect(() => {
    if (!userInfo) {
      getUserInfo()
      .then(res => {
        setUserInfo(res)
        const filter = {
          status: ["PENDING", "ACCEPTED"],
          branch: res.employmentBranch.toString()
        }
        getALlDispatchServices({variables: JSON.stringify(filter)});
      })
    }
    // Request User Location permission
    (async () => {
      let { status } = await Location.requestPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Permission to access location was denied');
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setuserLocation(location);
    })()
  }, [])

  const DISPATCH_STATUS = {
    PENDING: "PENDING",
    ACCEPTED: "ACCEPTED",
    REJECTED: "REJECTED",
    COMPLETED: "COMPLETED",
    CANCELLED: "CANCELLED",
  }

  const [getALlDispatchServices, 
    {data: dispatchServiceList, error: getDispatchServiceErr, called: getDispatchServiceCalled}] = useLazyQuery(ALL_DISPATCH_SERVICES);

  const [updateDispatchService, {data: updatedDispatchService, error: updateDispatchServiceErr}] = useMutation(UPDATE_DISPATCH_SERVICE, {
    refetchQueries: [ {query: ALL_DISPATCH_SERVICES, variables: {
      filter: JSON.stringify({
        status: ["PENDING", "ACCEPTED"]
        // branch: userInfo.employmentBranch.toString()
      })
    }} ]
  });

  if (dispatchServiceList) {
    console.log(dispatchServiceList)
  }
  if (updateDispatchServiceErr) {
    Alert.alert("Error Updating", updateDispatchServiceErr.message);
  }

  const handleUpdate = (dispatchService, status) => {
    console.log("UPDATING: ", dispatchService)
    updateDispatchService({variables: {
      id: dispatchService.id,
      dispatchTimeStampd: dispatchService.dispatchTimeStamp,
      branch: dispatchService.branch.id,
      customer: dispatchService.customer.id,
      service: dispatchService.service.id,
      vehicle: dispatchService.vehicle,
      customerLocationDesc: dispatchService.customerLocationDesc,
      serviceLocation: dispatchService.serviceLocation,
      foremanCurrentLocation: dispatchService.foremanCurrentLocation,
      foremanDepartTime: dispatchService.foremanDepartTime,
      estimatedArrivalTime: dispatchService.estimatedArrivalTime,
      status: status,
      employee: userInfo.userId,
    }})
  }

  const navigate = (location) => {
    // const coordinate = location.split(",");
    const coordinate = [3.137538, 101.599061];
    console.log(coordinate);
    console.log(userLocation.coords);
    if(coordinate.length === 2) {
      showLocation({
        latitude: location[0],
        longitude: location[1],
        // sourceLatitude: userLocation.coords.latitude,  // optionally specify starting location for directions
        // sourceLongitude: userLocation.coords.longitude,  // not optional if sourceLatitude is specified
        // title: 'The White House',  // optional
        // googleForceLatLon: false,  // optionally force GoogleMaps to use the latlon for the query instead of the title
        // googlePlaceId: 'ChIJGVtI4by3t4kRr51d_Qm_x58',  // optionally specify the google-place-id
        // alwaysIncludeGoogle: true, // optional, true will always add Google Maps to iOS and open in Safari, even if app is not installed (default: false)
        dialogTitle: 'Navigation', // optional (default: 'Open in Maps')
        dialogMessage: 'Navigate to Customer Location', // optional (default: 'What app would you like to use?')
        cancelText: 'Cancel Navigate', // optional (default: 'Cancel')
        appsWhiteList: ['waze', 'google-maps', 'apple-maps'], // optionally you can set which apps to show (default: will show all supported apps installed on device)
        // naverCallerName: 'com.example.myapp' // to link into Naver Map You should provide your appname which is the bundle ID in iOS and applicationId in android.
        // appTitles: { 'google-maps': 'My custom Google Maps title' } // optionally you can override default app titles
        // app: 'uber'  // optionally specify specific app to use
      })
    }
    console.log(coordinate);
  }

  return (
    <Background>
      <View style={styles.container}>
        {dispatchServiceList && (
          <FlatList
            style={styles.listView}
            data={dispatchServiceList.getDispatchServices}
            extraData={getDispatchServiceCalled}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({item}) => (
              <View style={styles.smallcon}>
                {console.log("item", item.dispatchTimeStamp)}
                <View style={styles.itemList}>
                  <Image source={userImagePlaceholder} style={styles.pic} />
                  <View style={styles.itemList3}>
                    {item.customer.firstName && (<Text style = {styles.name}>{ item.customer.firstName + " " + item.customer.lastName }</Text>)}
                    {item.service.serviceNm && (<Text style = {styles.time}>{ item.service.serviceNm }</Text>)}
                    <Text style = {styles.time}>{ (new Date(parseInt(item.dispatchTimeStamp)).toDateString()) }</Text>
                  </View>
                </View>
                <View style={styles.buttoncon2}>
                  {item.status === "PENDING" && (
                    <TouchableOpacity 
                      style={styles.buttonaccept}
                      onPress={() => {
                        handleUpdate(item, "ACCEPTED")
                      }}
                    >
                      <Text style={GeneralStyles.whiteText}>Accpet</Text>
                  </TouchableOpacity>
                  )}
                  {item.status === "ACCEPTED" && (
                    <View style={styles.inlineView}>
                      <TouchableOpacity 
                        style={styles.buttonnavigate}
                        onPress={() => {
                          navigate(item.serviceLocation)
                        }}
                      >
                        <Text style={GeneralStyles.whiteText}>Navigate</Text>
                      </TouchableOpacity>
                      <TouchableOpacity 
                        style={styles.buttonComplete}
                        onPress={() => {
                          navigate(item.serviceLocation)
                        }}
                      >
                        <Text style={GeneralStyles.whiteText}>Complete</Text>
                      </TouchableOpacity>
                    </View>
                  )}
                </View>
              </View>
            )}
          >
          </FlatList>
        )}
        {Boolean(getDispatchServiceErr) && (
          <View>
            <Text style={GeneralStyles.errorText}>{getDispatchServiceErr.message}</Text>
          </View>
        )}
        {/* <View style={styles.buttoncon}>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => {
              triggerTab(tabs.PENDING)
            }}
          >
            <Text>{tabs.PENDING}</Text>
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.button}
            onPress={() => {
              triggerTab(tabs.ACCEPTED)
            }}
          >
            <Text>{tabs.ACCEPTED}</Text>
          </TouchableOpacity>
        </View> */}
        <View>
          
        </View>
      </View>
    </Background>
  );
};

export default DispatchService;