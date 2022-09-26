import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import Menu from './src/components/Menu';
import DivisivelPage from './src/pages/DivisivelPage';
import MmcPage from './src/pages/MmcPage';

export default function App() {
  const [page, setPage] = React.useState("mmc");

  const menus = [
    {
      name: "divisivel",
      title: "Divisível Por"
    },
    {
      name: "mmc",
      title: "MMC"
    }
  ]

  const select = (name) => {
    setPage(name)
  }
  return (
    <View style={styles.container}>
      {page == "divisivel" && <DivisivelPage />}
      {page == "mmc" && <MmcPage />}
      <Menu items={menus} onSelect={select} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
