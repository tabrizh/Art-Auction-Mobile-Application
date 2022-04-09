import { View, Text, Image } from 'react-native';

import { ArtPrice } from './SubInfo';
import { COLORS, SIZES, FONTS } from '../constants';

const DetailsBid = ({ bid }) => {
  return (
    <View
      style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: SIZES.base,
        paddingHorizontal: SIZES.medium,
      }}
    >
      <Image
        source={bid.image}
        resizeMode="contain"
        style={{
          width: 48,
          height: 48,
          borderRadius: 200,
        }}
      />

      <View style={{ width: 155 }}>
        <Text
          style={{
            fontFamily: FONTS.semiBold,
            fontSize: SIZES.small,
            color: COLORS.primary,
          }}
        >
          Bid Placed by {bid.name}
        </Text>
        <Text
          style={{
            fontFamily: FONTS.regular,
            fontSize: 10,
            color: COLORS.secondary,
            marginTop: 3,
          }}
        >
          {bid.date}
        </Text>
      </View>
      <ArtPrice price={bid.price} />
    </View>
  );
};

export default DetailsBid;
