import React, { useEffect } from "react";
import { StyleSheet, View, Text, Image, Pressable } from "react-native";
import { useSelector } from "react-redux";
import logo from "../assets/LogoLB.png";
import { apiUrl as url } from "../config";

const Index = ({ navigation }) => {
  const user = useSelector((state) => state.authUser.user);
  const [error, setError] = React.useState(null);

  useEffect(() => {
    fetch(url)
      .then(response => {
        if (!response.ok) {
          throw new Error('500 Internal Server Error');
        }
        /*        return response.json(); */
      })
      .then(data => console.log(data))
      .catch(error => {
        console.error('Error:', error);
        setError(error.message); // Set error message in state
      });
  }, []); // Empty array as dependency to run only once

  const handleLogin = () => {
    if (user) {
      navigation.navigate("Home");
    } else {
      navigation.navigate("Login");
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo_image} />
      <Text style={styles.textIndex}>
        ประวัติโดยย่อแบบคร่าวๆ ก่อนโหลดหน้าจอสู่หน้าล็อคอินขั้นต่อไป
      </Text>
      <Pressable style={styles.button} onPress={handleLogin}>
        <Text style={styles.textLogin}>เริ่มใช้งาน</Text>
      </Pressable>
      {error && <Text style={styles.errorNetwork}>{error}</Text>}
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: "35%",
  },
  logo_image: {
    width: 300,
    height: 300,
  },
  textIndex: {
    fontSize: 16,
    marginTop: 42,
    marginBottom: 42,
    width: "60%",
    textAlign: "center",
  },
  button: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: 170,
    height: 42,
    borderRadius: 50,
    backgroundColor: "#0085FF",
  },
  textLogin: {
    color: "#FFFFFF",
    fontSize: 16,
  },
  errorNetwork: {
    color: "red",
    fontSize: 18,
    marginTop: 8
  }
});
