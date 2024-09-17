import * as Font from 'expo-font';

export const fonts = {
  Bold: 'Poppins-Bold',
  Light: 'Poppins-Light',
  Medium: 'Poppins-Medium',
  Regular: 'Poppins-Regular',
  SemiBold: 'Poppins-SemiBold',
};

// Function to load all the fonts
export const loadFonts = async () => {
  await Font.loadAsync({
    [fonts.Bold]: require('../assets/fonts/Poppins-Bold.ttf'),
    [fonts.Light]: require('../assets/fonts/Poppins-Light.ttf'),
    [fonts.Medium]: require('../assets/fonts/Poppins-Medium.ttf'),
    [fonts.Regular]: require('../assets/fonts/Poppins-Regular.ttf'),
    [fonts.SemiBold]: require('../assets/fonts/Poppins-SemiBold.ttf'),
  });
};
