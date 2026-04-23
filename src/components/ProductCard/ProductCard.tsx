import { Text, View } from 'react-native';
import { ProductCardProps } from './ProductCard.types.ts';
import { styles } from './ProductCard.styles.ts';
import { CustomButton } from '../CustomButton';

export const ProductCard = ({
  title,
  price,
  handleButtonPress,
}: ProductCardProps) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.price}>{price}</Text>
        <CustomButton
          title={'See full'}
          onPress={handleButtonPress}
          style={styles.button}
        />
      </View>
    </View>
  );
};
