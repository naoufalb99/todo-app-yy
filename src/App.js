import { Provider as ReduxProvider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import Todos from './components/Todos';
import { configureStore } from './store';
import './__styles__/global.css';

const { store, persistor } = configureStore();

function App() {
    return (
        <ReduxProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Todos />
            </PersistGate>
        </ReduxProvider>
    );
}

export default App;
