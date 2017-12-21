import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import Home from './screens/Home';

EStyleSheet.build({
  $primaryBlue: '#4F6D7A',
  $white: '#FFFFFF',
  $border: '#E5E5E5',
  $inputText: '#797979',
  $lightGray: '#E3E3E3',
});

export default () => <Home />;
