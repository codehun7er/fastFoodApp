import { router } from 'expo-router';
import { Button, Text, View } from 'react-native';

const Login = () => {
	return (
		<View>
			<Text>SignIn</Text>
			<Button title='Signup' onPress={() => router.push('/signup')} />
		</View>
	);
};

export default Login;
