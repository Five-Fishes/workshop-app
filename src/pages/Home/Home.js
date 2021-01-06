import * as React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView
} from 'react-native';
import Background from "../../components/Background/Background";


const Home = ({ navigation }) => {
  return (
    <Background>
    <SafeAreaView style={{ flex: 1 }}>
      <View style={{flexDirection:"row",paddingRight:10}}>
        <View style = {{height:122,width: 180,backgroundColor:"white", borderRadius:8,marginTop:18,marginHorizontal:13,padding:13,paddingTop:18}}>
          <View style={{  paddingHorizontal: 10, flexDirection:"row" }}>
            <Text style={{
              fontSize: 14, paddingHorizontal:2
              }}>
                  RM   
              </Text>
              <Text style={{
              fontSize: 22, fontWeight:"bold"
              }}>
                  233.00   
              </Text>
          </View>
          <View style={{  paddingHorizontal: 8, flexDirection:"row" }}>
              <Text style={{
              fontSize: 14,
              }}>
                  Sales Today   
              </Text>
          </View>
        </View>
        <View style = {{ width: 180,backgroundColor:"white", borderRadius:8,marginTop:18,padding:13,paddingTop:18}}>
            <View style={{  paddingHorizontal: 18, flexDirection:"row" }}>
                <Text style={{
                fontSize: 22, fontWeight:"bold"
                }}>
                  88
                </Text>
            </View>
            <View style={{  paddingHorizontal: 8, flexDirection:"row" }}>
                <Text style={{
                fontSize: 14,
                }}>
                  Accepted Order
                </Text>
            </View>
        </View>
      </View>
        <View style={{ padding: 10, flexDirection:"column",margin:10,flex:1,borderRadius:3,backgroundColor:"white" }}>
            <Text
              style={{
                fontSize: 25,
                marginBottom: 16,
                textAlign:"center"
              }}>
              Chart?
            </Text>
               
        </View>
        <View style={{ padding: 10, flexDirection:"column",margin:10,flex:1,borderRadius:3,backgroundColor:"white" }}>
            <Text
              style={{
                fontSize: 22,
                marginBottom: 16,
                textAlign:"center"
              }}>
              Pending Request
            </Text>
               
        </View>
    </SafeAreaView>
    </Background>

  );
}

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderRadius:20,
    backgroundColor: '#E4E4E8',
    padding: 10,
    width: 188,
    marginTop: 16,
  },
});
export default Home;
