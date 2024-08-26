import { StatusBar, StyleSheet, View } from 'react-native';
import type { PropsWithChildren } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

import { useTheme } from '@/theme';

function SafeScreen({ children }: PropsWithChildren) {
	const { layout, colors } = useTheme();
	const insets = useSafeAreaInsets();

	const styles = StyleSheet.create({
		header: {
			backgroundColor: colors.primary,
			paddingTop: insets.top,
			paddingBottom: 0,
			paddingLeft: insets.left,
			paddingRight: insets.right,
		},
	});

	return (
		<View style={[layout.flex_1, styles.header]}>
			<StatusBar barStyle="light-content" backgroundColor={colors.primary} />
			{children}
		</View>
	);
}

export default SafeScreen;
