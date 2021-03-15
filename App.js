import 'react-native-gesture-handler';
import * as React from 'react';

// Contexts
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import store from './src/store';

// Router
import RootRouter from './src/routers/RootRouter';

const App = () => {
    return (
        <SafeAreaProvider>
            <Provider store={store}>
                <RootRouter />
            </Provider>
        </SafeAreaProvider>
    );
};

export default App;