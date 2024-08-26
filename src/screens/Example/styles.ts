import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
	},
	header: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingHorizontal: 16,
		paddingVertical: 8,
		backgroundColor: '#AF0C6E',
	},
	searchContainer: {
		flex: 1,
		flexDirection: 'row',
		backgroundColor: 'white',
		borderRadius: 20,
		alignItems: 'center',
		paddingHorizontal: 10,
	},
	searchBar: {
		flex: 1,
		height: 40,
		paddingHorizontal: 10,
	},
	cancelButton: {
		marginLeft: 5,
		padding: 5,
	},
	cancelButtonText: {
		color: 'white',
		fontWeight: 'bold',
		fontSize: 16,
	},
	pagerView: {
		flex: 1,
		backgroundColor: 'red',
	},
	tabBarContainer: {
		flexDirection: 'row',
		borderRadius: 20,
		marginHorizontal: 10,
		marginVertical: 10,
		overflow: 'hidden',
	},
	tabItem: {
		padding: 10,
		alignItems: 'center',
		marginRight: 15,
	},
	activeTab: {
		backgroundColor: 'white',
		borderRadius: 20,
		borderWidth: 1,
		borderColor: '#AF0C6E',
	},
	inactiveTab: {
		backgroundColor: '#F8F8FA',
		borderColor: 'grey',
		borderRadius: 20,
	},
	activeTabText: {
		color: '#AF0C6E',
		fontWeight: 'bold',
	},
	inactiveTabText: {
		color: '#828282',
	},
	friendItem: {
		flexDirection: 'row',
		alignItems: 'center',
		padding: 16,
	},
	avatar: {
		width: 50,
		height: 50,
		borderRadius: 25,
		marginRight: 16,
	},
	defaultAvatar: {
		width: 50,
		height: 50,
		borderRadius: 25,
		backgroundColor: '#ddd',
		alignItems: 'center',
		justifyContent: 'center',
		marginRight: 16,
		marginTop: 16,
	},
	avatarText: {
		fontSize: 18,
		color: '#fff',
	},
	friendInfo: {
		flex: 1,
	},
	friendName: {
		fontWeight: 'bold',
		fontSize: 16,
	},
	friendPhone: {
		color: '#777',
	},
	favoriteButton: {
		padding: 8,
		width: 30,
		height: 30,
	},
	favoriteText: {
		color: '#f25a5a',
	},
	separator: {
		height: 1,
		backgroundColor: '#f0f0f0',
		marginBottom: 16,
	},
	smallIcon: {
		position: 'absolute',
		right: 0,
		bottom: 0,
		width: 15,
		height: 15,
		borderRadius: 10,
	},
	sectionHeader: {
		backgroundColor: '#F8F8FA',
		paddingVertical: 8,
		paddingHorizontal: 16,
	},
	sectionHeaderText: {
		fontSize: 16,
		fontWeight: 'bold',
		color: '#828282',
	},
	clearButtonImage: {
		width: 20,
		height: 20,
	},
});

// import { useTheme } from '@/theme';
// import { StyleSheet } from 'react-native';

// export const useStyles = () => {
// 	const theme = useTheme();

// 	return StyleSheet.create({
// 		container: {
// 			flex: 1,
// 			// backgroundColor: theme.backgrounds.primary,
// 		},
// 		header: {
// 			flexDirection: 'row',
// 			alignItems: 'center',
// 			// paddingHorizontal: theme.gutters.medium,
// 			// paddingVertical: theme.gutters.small,
// 			backgroundColor: theme.colors.primary,
// 		},
// 		searchContainer: {
// 			flex: 1,
// 			flexDirection: 'row',
// 			// backgroundColor: theme.colors.white,
// 			// borderRadius: theme.borders.radius.medium,
// 			alignItems: 'center',
// 			// paddingHorizontal: theme.gutters.small,
// 		},
// 		searchBar: {
// 			flex: 1,
// 			// height: theme.fonts.sizes.large,
// 			// paddingHorizontal: theme.gutters.small,
// 		},
// 		cancelButton: {
// 			// marginLeft: theme.gutters.small,
// 			// padding: theme.gutters.extraSmall,
// 		},
// 		cancelButtonText: {
// 			// color: theme.fonts.colors.white,
// 			fontWeight: 'bold',
// 			// fontSize: theme.fonts.sizes.medium,
// 		},
// 		pagerView: {
// 			flex: 1,
// 		},
// 		tabBarContainer: {
// 			flexDirection: 'row',
// 			// borderRadius: theme.borders.radius.medium,
// 			// marginHorizontal: theme.gutters.medium,
// 			// marginVertical: theme.gutters.small,
// 			overflow: 'hidden',
// 		},
// 		tabItem: {
// 			// padding: theme.gutters.small,
// 			alignItems: 'center',
// 			// marginRight: theme.gutters.small,
// 		},
// 		activeTab: {
// 			// backgroundColor: theme.colors.white,
// 			// borderRadius: theme.borders.radius.medium,
// 			// borderWidth: theme.borders.widths.small,
// 			borderColor: theme.colors.primary,
// 		},
// 		inactiveTab: {
// 			backgroundColor: theme.colors.gray50,
// 			borderColor: theme.colors.gray200,
// 			// borderRadius: theme.borders.radius.medium,
// 		},
// 		activeTabText: {
// 			color: theme.colors.primary,
// 			fontWeight: 'bold',
// 		},
// 		inactiveTabText: {
// 			color: theme.colors.gray400,
// 		},
// 		friendItem: {
// 			flexDirection: 'row',
// 			alignItems: 'center',
// 			// padding: theme.gutters.medium,
// 		},
// 		avatar: {
// 			width: 50,
// 			height: 50,
// 			// borderRadius: theme.borders.radius.full,
// 			// marginRight: theme.gutters.medium,
// 		},
// 		defaultAvatar: {
// 			width: 50,
// 			height: 50,
// 			// borderRadius: theme.borders.radius.full,
// 			backgroundColor: theme.colors.gray100,
// 			alignItems: 'center',
// 			justifyContent: 'center',
// 			// marginRight: theme.gutters.medium,
// 		},
// 		avatarText: {
// 			// fontSize: theme.fonts.sizes.large,
// 			// color: theme.fonts.colors.white,
// 		},
// 		friendInfo: {
// 			flex: 1,
// 		},
// 		friendName: {
// 			fontWeight: 'bold',
// 			// fontSize: theme.fonts.sizes.medium,
// 		},
// 		friendPhone: {
// 			// color: theme.fonts.colors.gray400,
// 		},
// 		favoriteButton: {
// 			// padding: theme.gutters.extraSmall,
// 			width: 30,
// 			height: 30,
// 		},
// 		favoriteText: {
// 			color: theme.colors.red500,
// 		},
// 		separator: {
// 			height: 1,
// 			backgroundColor: theme.colors.gray100,
// 			// marginBottom: theme.gutters.small,
// 		},
// 		smallIcon: {
// 			position: 'absolute',
// 			right: 0,
// 			bottom: 0,
// 			width: 15,
// 			height: 15,
// 			// borderRadius: theme.borders.radius.full,
// 		},
// 		sectionHeader: {
// 			backgroundColor: theme.colors.gray50,
// 			// paddingVertical: theme.gutters.small,
// 			// paddingHorizontal: theme.gutters.medium,
// 		},
// 		sectionHeaderText: {
// 			// fontSize: theme.fonts.sizes.medium,
// 			fontWeight: 'bold',
// 			// color: theme.fonts.colors.gray400,
// 		},
// 		clearButtonImage: {
// 			width: 20,
// 			height: 20,
// 		},
// 	});
// };
