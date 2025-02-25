import { useEffect } from 'react';
import { View, StyleSheet } from 'react-native';
import { authorize, Scopes } from 'react-native-tiktok';

export default function App() {
  useEffect(() => {
    authorize({
      redirectURI: '<YOUR_REDIRECT_URL>',
      scopes: [Scopes.user.info.basic, Scopes.video.list],
      callback: (authCode, codeVerifier, error, errorDescription) => {
        if (error) {
          console.error(
            'TikTok authorization failed:',
            error,
            errorDescription
          );
        } else {
          console.log(
            'TikTok authorization succeeded:',
            authCode,
            codeVerifier
          );
        }
      },
    });
  }, []);

  return <View style={styles.container} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'pink',
  },
});
