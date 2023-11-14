//Component which display the name of the app, my name and current date

function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Welcome to the app</Text>
      <Text style={styles.text}>My name is: </Text>
      <Text style={styles.text}>Current date is: </Text>
    </View>
  );
}
