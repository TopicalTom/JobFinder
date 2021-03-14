import 'react-native-gesture-handler';
import * as React from 'react';

// Contexts
import { SafeAreaProvider } from 'react-native-safe-area-context';

// Stack
import RootStack from './src/stacks/RootStack';

const App = () => {
    return (
        <SafeAreaProvider>
            <RootStack />
        </SafeAreaProvider>
    );
};

export default App;