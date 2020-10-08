import { 
    StyleSheet,
    SafeAreaView,
    View,
    Text 
} from 'react-native';
import React from 'react';

const Home = () => {
    return (
      <SafeAreaView>
        <View style={styles.container}>
          <Text>
            Test
          </Text>
        </View>
      </SafeAreaView>
    );
};
  
const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        width: '100%'
    }
});

export default Home;
