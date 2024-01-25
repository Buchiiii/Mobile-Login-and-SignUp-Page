import {
  View,
  TextInput,
  Text,
  SafeAreaView,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import logo from "../assets/Rectangle.png";
import { Link, useRouter } from "expo-router";
import facebook from "../assets/facebook.png";
import twitter from "../assets/twitter.png";
import google from "../assets/google.png";
import { Divider } from "react-native-paper";

const Login = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.logoContainer}>
          <Image source={logo} />
        </View>
        <View style={styles.container}>
          <View>
            <Text style={styles.loginText}>Login to your account</Text>
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Email" />
          </View>
          <View style={styles.inputContainer}>
            <TextInput style={styles.input} placeholder="Password" />
            <View>
              <Image></Image>
            </View>
          </View>
          <View style={styles.linkContainer}>
            <Link style={styles.link} href={""}>
              Forget Password?
            </Link>
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Sign in</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.dividerContainer}>
          <Divider bold style={styles.divider} />
          </View>
          <View style={styles.othersContainer}>
            <Text style={styles.othersText}>Or sign in with</Text>
          </View>
          <View style={styles.othersButtonContainer}>
            <TouchableOpacity style={styles.othersButton}>
              <Image
                style={styles.image}
                resizeMode="contain"
                source={google}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.othersButton}>
              <Image
                style={styles.image}
                resizeMode="contain"
                source={facebook}
              />
            </TouchableOpacity>
            <TouchableOpacity style={styles.othersButton}>
              <Image
                style={styles.image}
                resizeMode="contain"
                source={twitter}
              />
            </TouchableOpacity>
          </View>
          <View style={styles.signupContainer}>
            <Text>
              Don't have an account?{" "}
              <Link style={styles.link} href={"/signup"}>
                Sign up
              </Link>
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Login;

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: "white" },
  logoContainer: { alignItems: "center" },
  loginText: {
    color: "#000",

    fontSize: 20,
    fontStyle: "normal",
    fontWeight: "500",
    lineHeight: 20,

    marginTop: 20,
    marginBottom: 20,
  },

  container: {
    width: 336,
    marginLeft: 25,
    flex: 1,
  },

  inputContainer: {
    marginTop: 20,

    height: 47,
    width: 336,
    borderRadius: 10,
    backgroundColor: "rgba(217, 217, 217, 0.28)",
    marginBottom: 15,
  },

  input: {
    color: "#000",

    fontSize: 15,

    fontStyle: "normal",
    fontWeight: "400",
    paddingLeft: 20,

    borderRadius: 10,
    height: 47,
  },
  linkContainer: {
    alignItems: "flex-end",
  },
  link: {
    color: "#390050",
  },

  buttonContainer: {
    marginTop: 20,
  },

  button: {
    width: "100%",
    backgroundColor: "#390050",
    height: 58,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  buttonText: {
    color: "white",

    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 30,
  },

  dividerContainer: {
    marginTop: 20,
    alignItems: "center",
  },

  othersContainer: {
    marginTop: 20,
    alignItems: "center",
  },

  othersText: {
    color: "black",

    fontSize: 15,
    fontStyle: "normal",
    fontWeight: "600",
    lineHeight: 30,
  },

  othersButtonContainer: {
    marginTop: 20,
    alignItems: "center",
    //backgroundColor: "#C5C5C5",
    flexDirection: "row",
    columnGap: 20,
    justifyContent: "center",
  },

  othersButton: {
    width: 47,
    height: 47,
    backgroundColor: "white",
    borderRadius: 50,
    shadowColor: "#C5C5C5",
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 0.6,
    justifyContent: "center",
    alignItems: "center",
  },

  signupContainer: {
    marginTop: 30,
    alignItems: "center",
  },
  image: {
    height: "60%",
    width: "60%",
  },
  divider: {
    width: 250,
  },
});
