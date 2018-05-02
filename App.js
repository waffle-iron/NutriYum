import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { VisualRecognitionV3 } from 'watson-developer-cloud'
// import Camera from './Camera'
// import fs from 'fs'

// const VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3')

// VisualRecognitionV3 = new VisualRecognitionV3({
//     api_key: '<b9f2f8bb3e2e8a67a0456ba3f816c09b1ba963e6>',
//     version: '2018-03-19',
//     headers: {
//       'X-Watson-Learning-Opt-Out': 'true'
//   }
// })
// const classifier_ids = ["food"];

// var params = {
//   images_file: fs.createReadStream('./apple'),
//   classifier_ids: classifier_ids
// };

// visualRecognition.classify(params, function(err, res) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(JSON.stringify(res, null, 2));
//   }
// });





export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
      
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
