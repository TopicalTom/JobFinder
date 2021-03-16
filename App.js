import 'react-native-gesture-handler';
import * as React from 'react';

// Contexts
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import configureStore from './src/store';

// Router
import RootRouter from './src/routers/RootRouter';

const App = () => {
    const { persistor, store } = configureStore();
    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <PersistGate persistor={persistor}>
                    <RootRouter />
                </PersistGate>
            </Provider>
        </SafeAreaProvider>
    );
};

export default App;