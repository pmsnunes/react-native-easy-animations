import React, { useState } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from 'react-native';
import { Fade, Spin } from 'react-native-easy-animations';


const App = () => {
  /**
   * fadeIn = true, fadeOut = false => Fade In animation on start.
   * fadeIn = false, fadeOut = true => Fade Out animation on start.
   * If both start as true, the starting opacity is 0. 
   * If they are both false, the starting opacity is 1
   */
  const [fadeIn, setFadeIn] = useState(true);
  const [fadeOut, setFadeOut] = useState(true);

  const triggerFadeIn = ()=>{
    setFadeIn(true);
    setFadeOut(false);
  }

  const triggerFadeOut = ()=>{
    setFadeIn(false);
    setFadeOut(true);
  }


  return (
    <View style={styles.wrapper}>
    
      <Fade duration={500} fadeIn={fadeIn} fadeOut={fadeOut}>
        <Text>I am a very good fade example</Text>
      </Fade>

      <Spin duration={3000} start={360} end={180}>
        <Text>I Spin a lot!</Text>
      </Spin>
      
      <View>
        <TouchableOpacity onPress={triggerFadeIn}>
          <Text>Fade In</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={triggerFadeOut}>
          <Text>Fade Out</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    flex: 1
  }
});

export default App;
