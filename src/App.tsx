import { QueryClient } from '@tanstack/react-query';
import 'react-native-gesture-handler';
import { MMKV } from 'react-native-mmkv';

import { ThemeProvider } from '@/theme';

// import { queryClient } from './services/networkConfig';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createAsyncStoragePersister } from '@tanstack/query-async-storage-persister';
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client';
import ApplicationNavigator from './navigators/Application';
import './translations';

export const queryClient = new QueryClient();

// const queryClient = new QueryClient({
// 	defaultOptions: {
// 		queries: {
// 			// gcTime: 1000 * 60 * 60 * 24, // 24 hours
// 		},
// 	},
// });

const asyncStoragePersister = createAsyncStoragePersister({
	storage: AsyncStorage,
});

export const storage = new MMKV();

function App() {
	return (
		<PersistQueryClientProvider
			client={queryClient}
			persistOptions={{ persister: asyncStoragePersister }}
		>
			<ThemeProvider storage={storage}>
				<ApplicationNavigator />
			</ThemeProvider>
		</PersistQueryClientProvider>
	);
}

export default App;
