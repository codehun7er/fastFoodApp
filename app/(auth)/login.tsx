import { CustomButton, CustomInput } from '@/components';
import { Link, router } from 'expo-router';
import { useState } from 'react';
import { Alert, Text, View } from 'react-native';

const Login = () => {
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [form, setForm] = useState({
		email: '',
		password: ''
	});

	const submit = async () => {
		if (!form.email || !form.password) {
			Alert.alert('error', 'Please enter valid email and password');
			return;
		}

		setIsSubmitting(true);

		try {
			// Appwrite login function

			Alert.alert('success', 'Login successful');
			router.replace('/');
		} catch (error: any) {
			Alert.alert('error', error.message);
		} finally {
			setIsSubmitting(false);
		}
	};

	return (
		<View className='gap-10 bg-white rounded-lg p-5 mt-5'>
			<CustomInput
				placeholder='Enter your email'
				value={form.email}
				onChangeText={text => setForm(prev => ({ ...prev, email: text }))}
				label='Email'
				keyboardType='email-address'
			/>

			<CustomInput
				placeholder='Enter your password'
				value={form.password}
				onChangeText={text => setForm(prev => ({ ...prev, password: text }))}
				label='Password'
				secureTextEntry={true}
			/>

			<CustomButton title='Login' isLoading={isSubmitting} onPress={submit} />

			<View className='flex justify-center mt-5 flex-row gap-2'>
				<Text className='base-regular text-gray-100'>Don&apos;t have an account?</Text>

				<Link href='/signup' className='base-bold text-primary'>
					Sign up
				</Link>
			</View>
		</View>
	);
};

export default Login;
