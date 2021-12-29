import { createUseStyles } from 'react-jss';
import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Todos from './components/Todos';
import { configureStore } from './store';

import globalStyles from './__styles__/global.styles.js';

const useGlobalStyles = createUseStyles(globalStyles);

const { store, persistor } = configureStore();

function App() {
    useGlobalStyles();

    return (
        <ReduxProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Todos />
            </PersistGate>
        </ReduxProvider>
    );
}

export default App;
