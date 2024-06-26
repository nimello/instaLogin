import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import Logo from '../components/Logo';
import CustomButton from '../components/Button';

const Login: React.FC = () => {
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const handleLogin = () => {
    Alert.alert('Login', `Username: ${username}, Password: ${password}`);
  };

  return (
    <View style={styles.container}>
      <Logo />
      <TextInput
        style={styles.input}
        placeholder="Número, nome de usuário ou email"
        value={username}
        onChangeText={setUsername}
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <TouchableOpacity style={styles.forgotPassword}>
        <Text style={styles.forgotPasswordText}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      <CustomButton title="Entrar" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: 'white',
  },
  input: {
    height: 50,
    borderColor: 'lightgray',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 20,
    marginVertical: 10,
    marginHorizontal: 15
  },
  forgotPassword: {
    marginBottom: 20,
    marginHorizontal: 20,
    alignItems: 'flex-end'
  },
  forgotPasswordText: {
    color: '#0366d6',
    fontSize: 14,
  },
});

export default Login;