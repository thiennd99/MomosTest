import { View, DimensionValue } from 'react-native';
import ImageSource from '@/theme/assets/images';

import { ImageVariant } from '@/components/atoms';
import { useTheme } from '@/theme';
import { isImageSourcePropType } from '@/types/guards/image';

type Props = {
	height?: DimensionValue;
	width?: DimensionValue;
	mode?: 'contain' | 'cover' | 'stretch' | 'repeat' | 'center';
};

function Brand({ height = 200, width = 200, mode = 'contain' }: Props) {
	const { layout } = useTheme();

	if (
		!isImageSourcePropType(ImageSource.ic_logo_light) ||
		!isImageSourcePropType(ImageSource.ic_log_dark)
	) {
		throw new Error('Image source is not valid');
	}

	return (
		<View testID="brand-img-wrapper" style={{ height, width }}>
			<ImageVariant
				testID="brand-img"
				style={[layout.fullHeight, layout.fullWidth]}
				source={ImageSource.ic_logo_light}
				sourceDark={ImageSource.ic_log_dark}
				resizeMode={mode}
			/>
		</View>
	);
}

export default Brand;
