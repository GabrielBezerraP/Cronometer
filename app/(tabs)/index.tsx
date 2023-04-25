import { Button, StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { Text, View } from '../../components/Themed';
import { useState } from 'react';

export default function TabOneScreen() {
  const [seconds, setSeconds] = useState(0)
  const [minutes, setMinutes] = useState(0)
  const [customInterval, setCustomInterval] = useState<NodeJS.Timer>();

  const startTimer = () => {
    if(seconds == 0 && minutes == 0) {
    setCustomInterval(
      setInterval(() => {
      changeTimer();
    }, 1000)
    )
  }
  };

  const stopTimer = () => {
    if(customInterval)
      clearInterval(customInterval);
  };

  const clearTimer = () => {
    stopTimer();
    setMinutes(0);
    setSeconds(0);
  };

  const changeTimer = () => {
    setSeconds((prevState) => {
        if(prevState + 1 == 60) {
          setMinutes(minutes + 1)
          return 0;
        }
      return prevState + 1;
    });
  }


  return (
    <View style={styles.container}>
      <Text style={styles.textTimer}>
        {minutes < 10? '0' + minutes : minutes} : {seconds < 10? '0' + seconds : seconds}
      </Text>
      <View style={styles.containerButton}>
          <Button title='Inicio' onPress={startTimer}/>
          <Button title='Pausa' onPress={stopTimer}/>
          <Button title='Limpar' onPress={clearTimer}/>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textTimer: {
    fontSize: 40,
    fontWeight: 'bold',
  },

  containerButton: {
    width: "60%",
    paddingTop: "10%",
    flexDirection: "row",
    justifyContent: "space-around",
    backgroundColor: 'purple'
  },

  ButtonTimer: {
    borderRadius: 5,
    color: 'white',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'purple'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
