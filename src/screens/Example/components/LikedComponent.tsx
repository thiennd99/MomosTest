import { useState } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { LocalSvg } from 'react-native-svg/css';
import ImageSource from '@/theme/assets/images';

const styles = StyleSheet.create({
	likedIcon: {
		width: 30,
		height: 30,
	},
});

function LikedComponent() {
	const [liked, setLiked] = useState<boolean>(false);

	const handlePress = () => {
		setLiked(() => !liked);
	};

	return (
		<TouchableOpacity onPress={handlePress}>
			{liked ? (
				<LocalSvg
					asset={ImageSource.ic_heart_fulfilled}
					style={styles.likedIcon}
				/>
			) : (
				<LocalSvg
					asset={ImageSource.ic_heart_outlined}
					style={styles.likedIcon}
				/>
			)}
		</TouchableOpacity>
	);
}

export default LikedComponent;
