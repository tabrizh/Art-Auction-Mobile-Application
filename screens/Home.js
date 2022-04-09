import { Text, View, SafeAreaView, FlatList } from 'react-native';
import { useState } from 'react';
import { COLORS, ArtData } from '../constants';
import { ArtCard, HomeHeader, FocusedStatusBar } from '../components';

const Home = () => {
  const [artData, setArtData] = useState(ArtData);

  const handleSearch = value => {
    if (!value.length) return setArtData(ArtData);

    const filteredData = ArtData.filter(
      item =>
        item.name.toLowerCase().includes(value.toLowerCase()) ||
        item.creator.toLowerCase().includes(value.toLowerCase())
    );

    if (filteredData.length) {
      setArtData(filteredData);
    } else {
      setArtData(ArtData);
    }
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FocusedStatusBar background={COLORS.primary}></FocusedStatusBar>

      <View style={{ flex: 1 }}>
        <View style={{ zIndex: 0 }}>
          <FlatList
            data={artData}
            renderItem={({ item }) => <ArtCard data={item}></ArtCard>}
            keyExtractor={item => item.id}
            showsVerticalScrollIndicator={false}
            ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
          />
        </View>
        <View
          style={{
            position: 'absolute',
            top: 0,
            bottom: 0,
            right: 0,
            left: 0,
            zIndex: -1,
          }}
        >
          <View style={{ height: 300, backgroundColor: COLORS.primary }}></View>
          <View style={{ flex: 1, backgroundColor: COLORS.white }}></View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;
