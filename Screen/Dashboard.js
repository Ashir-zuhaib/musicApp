import React, { useState } from 'react'
import { View,StyleSheet, Text, TextInput, KeyboardAvoidingView,ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Image } from 'react-native'
import search from '../assets/search.png'
import draw from '../assets/draw.png'
import BackButton from '../Components/BackButton'
import { MyPlaylist } from '../Components/MyPlaylist'
import { withSafeAreaInsets } from 'react-native-safe-area-context'
import { LinearGradient } from 'expo-linear-gradient';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Recently } from '../Components/RecentPlayList'
import { POPULAR } from '../Components/POPULAR.js'
import cover from '../assets/cover.png'
export default function Dashboard(){
    return(
        <ScrollView style={{backgroundColor:'#1E272E'}}>
            <View style={styles.header}>
            <View><Text style={styles.font}>Good Morning Rebecca!</Text></View>
            <View style={styles.search}>
                <Image height={35} width={35} source={search}  />
            <Image style={{marginHorizontal:20, backgroundColor:'#fff'}} height={35} width={35}  source={draw} />
            </View>
            </View>
            <View style={{marginTop:10}}>
                <Text style={styles.myplay}>MY PLAYLIST</Text></View>
                <ScrollView
             horizontal={true}
             showsHorizontalScrollIndicator={false} 
             style={styles.list} >
                {MyPlaylist.map((myplaylist, index)=>(
                   <View key={index}>
                       <Image source={myplaylist.image} style={styles.imagestyle}  />
                       <Text style={styles.playTextTitle}>{myplaylist.title}</Text>
                       <Text style={styles.playTextDate}>{myplaylist.date}</Text>
                   </View>
                ))}
        </ScrollView>
        <View style={styles.exposearch}>
            <View>
                <LinearGradient  colors={['#F46D1F', '#9250A6']} start={{ x: 0, y: 0.5 }}
    end={{ x: 1, y: 0.5 }} style={styles.explore}>
          <Text style={styles.exploreText}>Explore</Text>
          </LinearGradient>
          </View>
          <View style={styles.searchInput}>
          <AntDesign name="search1" size={15} color="white" style={styles.searchimageStyle1 }/>
                <TextInput
                label="Search"
                placeholder='Search your favorite song...'
                // underlineColorAndroid="transparent"
                
                />
                <FontAwesome style={styles.searchimageStyle1} name="microphone" size={24} color="white" />
                </View>
                </View>
                <View><Text style={styles.rpText}>RECENTLY PLAYED</Text></View>
                <ScrollView
             horizontal={true}
             showsHorizontalScrollIndicator={false} 
             style={styles.list} >
                {Recently.map((recent, index)=>(
                   <View key={index}>
                       <Image source={recent.image} style={styles.recentimagestyle}  />
                       <Text style={styles.recentText} >{recent.name}</Text>
                       
                   </View>
                ))}
                
        </ScrollView>
        <View style={styles.ppbox}><Text style={styles.pp}>POPULAR</Text></View>
                <ScrollView
             horizontal={true}
             showsHorizontalScrollIndicator={false} 
             style={styles.list} >
                {POPULAR.map((popular, index)=>(
                   <View key={index}>
                       <Image source={popular.image} style={styles.imagestyle}  />
                       <Text style={styles.popularText} >{popular.title}</Text>
                       <Text style={styles.popularText} >{popular.date}</Text>
                       
                   </View>
                ))}
        </ScrollView>
        <View><Text style={styles.pp} >FEATURED</Text></View>
        <View>
            <Image source={cover} height={157}  width={375}/>
            <TouchableOpacity  style={styles.button1}>
          <Text style={styles.checktext}>Check it out Up</Text>
      </TouchableOpacity>
        </View>

        </ScrollView>

    )
}
const styles = StyleSheet.create({
    header:{
        marginTop:50,
        flexDirection:'row',
        justifyContent:'space-between',
        marginHorizontal:10
    },
    search:{
        flexDirection:'row',
    },
    list:{
        marginTop:20
    },
    imagestyle:{
        width:147,
        height:144,
        marginRight:10
    },
    playTextTitle:{
        color:'#fff',
        position:'absolute',
        bottom:70,
        fontSize:14,
        right:80
    },
    playTextDate:{
        color:'#fff',
        position:'absolute',
        bottom:40,
        fontSize:10,
        right:50
    },
    exposearch:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    explore:{
        textAlign:'center',
        alignContent:'center',
        alignItems:'center',
        width:115,
        height:35,
        borderRadius:20,  
        marginTop:20, 
        marginBottom:20
    },
    exploreText:{
        alignItems:'center',
        color:'#ffffff',
        fontSize:12,
        letterSpacing:4,
        // fontWeight:'bold',
        paddingTop:10,
    },
    searchimageStyle: {
        padding: 10,
        margin: 10,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'center',
      },
    searchimageStyle1: {
        padding: 10,
        margin: 10,
        marginLeft: 180,
        height: 25,
        width: 25,
        resizeMode: 'stretch',
        alignItems: 'flex-end',
      },
      searchInput:{
          flexDirection:'row',
          color:'#fff',
          backgroundColor:'#50575C',
          width:226,
          height:35,
          borderRadius:30,
          marginRight:30,
          marginTop:20
      },
      recentimagestyle:{
          height:118,
          width:118,
          borderRadius:50,
          marginRight:20,
      },
      recentText:{
        color:'#fff',
        marginTop:10,
        marginLeft:10,
        letterSpacing:1,
        fontSize:12,
      },
      button1:{
        width:228,
        height:56,
        borderRadius:20,
        marginHorizontal:78,
        marginTop:16,
        borderWidth:2,
        borderColor:'#ffffff',
        position:'absolute',
        top:0,

    },
    checktext: {
        fontSize: 20,
        // lineHeight: 21,
        textAlign: 'center',
        marginTop:5,
        color:'#ffffff'
      },
      font:{
          fontSize:14,
          color: '#fff',
          letterSpacing:4,
        fontFamily:'robotto'},
        myplay:{
            color:'#fff',
            fontSize:18,
            letterSpacing:4,
            fontFamily:"require('../assets/fonts/Poppins-Medium.ttf')"
        },
        rpText:{
            color:'#fff',
            letterSpacing:2,
            fontSize:18
        },
        ppbox:{
            marginVertical:20,
        },
    pp:{
        color:'#fff',
        fontSize:18,
        letterSpacing:2
    },
    popularText:{
        color:'#fff'
    }
})