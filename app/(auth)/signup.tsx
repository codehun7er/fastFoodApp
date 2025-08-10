import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';

const Signup = () => {
	return (
		<View>
			<Text>Signup</Text>
			<Button title='Login' onPress={() => router.push('/login')} />
		</View>
	);
};

export default Signup;
