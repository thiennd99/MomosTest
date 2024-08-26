import { SafeScreen } from '@/components/template';
import { fetchUsers } from '@/services/users';
import { useTheme } from '@/theme';
import ImageSource from '@/theme/assets/images';
import { User } from '@/types/schemas/user';
import { removeAccents } from '@/utilities/format';
import { useQuery } from '@tanstack/react-query';
import { useCallback, useMemo, useRef, useState } from 'react';
import {
	ActivityIndicator,
	Dimensions,
	Keyboard,
	SectionList,
	Text,
	TextInput,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
} from 'react-native';
import { LocalSvg } from 'react-native-svg/css';
import {
	NavigationState,
	Route,
	SceneRendererProps,
	TabView,
} from 'react-native-tab-view';
import LikedComponent from './components/LikedComponent';
import { styles } from './styles';
import { groupContacts, UserGroup } from './components/ultilities';

const windowWidth = Dimensions.get('window').width;

function ContactList({ contacts }: { contacts: UserGroup[] }) {
	const { layout, gutters } = useTheme();
	const renderSectionHeader = useCallback(
		(info: { section: UserGroup }) => (
			<View style={styles.sectionHeader}>
				<Text style={styles.sectionHeaderText}>{info.section.title}</Text>
			</View>
		),
		[],
	);

	const renderItem = useCallback((props: { item: User; index: number }) => {
		const { item, index } = props;
		return (
			<View
				style={[
					layout.row,
					layout.itemsCenter,
					gutters.paddingHorizontal_16,
					gutters.paddingBottom_16,
					gutters.paddingTop_0,
				]}
			>
				<View style={styles.defaultAvatar}>
					<Text style={styles.avatarText}>{item.avatarName}</Text>
					<LocalSvg asset={ImageSource.ic_momo_pink} style={styles.smallIcon} />
				</View>
				<View
					style={[
						layout.flex_1,
						index !== 0 ? gutters.marginTop_0 : gutters.marginTop_16,
					]}
				>
					{index !== 0 && <View style={styles.separator} />}
					<View style={[layout.flex_1, layout.row]}>
						<View style={styles.friendInfo}>
							<Text style={styles.friendName}>{item.fullName}</Text>
							<Text style={styles.friendPhone}>{item.phoneNumber}</Text>
						</View>
						<LikedComponent />
					</View>
				</View>
			</View>
		);
	}, []);

	return (
		<SectionList
			sections={contacts}
			renderItem={renderItem}
			renderSectionHeader={renderSectionHeader}
			keyExtractor={(item: User) => item.phoneNumber}
		/>
	);
}

function Example() {
	const { layout, colors } = useTheme();
	const [index, setIndex] = useState(0);
	const [routes] = useState([
		{ key: 'friends', title: 'Bạn bè' },
		{ key: 'bankAccounts', title: 'Tài khoản ngân hàng' },
	]);
	const inputRef = useRef<TextInput>(null);
	const [searchText, setSearchText] = useState('');
	const [showClear, setShowClear] = useState(false);
	const { error, isError, data, isFetching, isRefetching } = useQuery({
		queryKey: ['users'],
		queryFn: fetchUsers,
	});

	// Memoize the filtered data based on search text
	const filteredData = useMemo(() => {
		if (!data) {
			return [];
		}

		if (!searchText) {
			return data.contacts;
		}

		return data.contacts.filter(
			item =>
				item.removedAccentsFullName
					.toLowerCase()
					.includes(removeAccents(searchText).toLowerCase()) ||
				item.phoneNumber.includes(searchText),
		);
	}, [searchText, data]);

	// Transform the contacts data
	const combinedData = useMemo(
		() => groupContacts(filteredData),
		[filteredData],
	);

	const renderTabBar = useCallback(
		(
			props: SceneRendererProps & { navigationState: NavigationState<Route> },
		) => {
			return (
				<View style={styles.tabBarContainer}>
					{props.navigationState.routes.map((route, i) => {
						const isActive = index === i;
						return (
							<TouchableOpacity
								key={route.key}
								onPress={() => props.jumpTo(route.key)}
								style={[
									styles.tabItem,
									isActive ? styles.activeTab : styles.inactiveTab,
								]}
							>
								<Text
									style={
										isActive ? styles.activeTabText : styles.inactiveTabText
									}
								>
									{route.title}
								</Text>
							</TouchableOpacity>
						);
					})}
				</View>
			);
		},
		[index],
	);

	const handleSearch = useCallback((text: string) => {
		if (!text) {
			setShowClear(false);
		} else {
			setShowClear(true);
		}
		setSearchText(text);
	}, []);

	const renderScene = useCallback(
		(props: { route: Route }) => {
			switch (props.route.key) {
				case 'friends':
					return <ContactList contacts={combinedData} />;
				case 'bankAccounts':
					return <ContactList contacts={combinedData} />;
				default:
					return null;
			}
		},
		[combinedData],
	);

	const clearText = useCallback(
		(action: string) => {
			if (action === 'onClickCancel') {
				Keyboard.dismiss();
			}
			handleSearch('');
			setShowClear(false);
		},
		[handleSearch],
	);

	return (
		<SafeScreen>
			<View style={styles.container}>
				<View style={styles.header}>
					<TouchableWithoutFeedback onPress={() => inputRef.current?.focus()}>
						<View style={styles.searchContainer}>
							<LocalSvg asset={ImageSource.ic_search} />
							<TextInput
								ref={inputRef}
								value={searchText}
								onChangeText={handleSearch}
								style={styles.searchBar}
								placeholder="Nhập tên, số điện thoại hoặc số tài khoản"
								placeholderTextColor="grey"
							/>
							{showClear && (
								<TouchableOpacity onPress={() => clearText('onClickClear')}>
									<LocalSvg
										asset={ImageSource.ic_clear}
										style={styles.clearButtonImage}
									/>
								</TouchableOpacity>
							)}
						</View>
					</TouchableWithoutFeedback>
					<TouchableOpacity
						style={styles.cancelButton}
						onPress={() => clearText('onClickCancel')}
					>
						<Text style={styles.cancelButtonText}>Huỷ</Text>
					</TouchableOpacity>
				</View>
				<TabView
					navigationState={{ index, routes }}
					renderScene={renderScene}
					onIndexChange={setIndex}
					initialLayout={{ width: windowWidth }}
					renderTabBar={renderTabBar}
				/>
				{isFetching && !isRefetching && (
					<View
						style={[
							layout.flex_1,
							layout.itemsCenter,
							layout.justifyCenter,
							layout.absolute,
							layout.top0,
							layout.bottom0,
							layout.left0,
							layout.right0,
						]}
					>
						<ActivityIndicator size="large" color={colors.primary} />
					</View>
				)}
				{isError && (
					<View
						style={[layout.flex_1, layout.itemsCenter, layout.justifyCenter]}
					>
						<Text style={{ color: colors.primary }}>{error.message}</Text>
					</View>
				)}
			</View>
		</SafeScreen>
	);
}

export default Example;
