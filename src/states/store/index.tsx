import { createStore } from "redux";
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import rootReducer from "../reducer/index";

const persistConfig = {
    key: 'claimForm',
    storage: storage,
    whitelist: ['claimForm'] // which reducer want to store
};

const persReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(persReducer);

const persistor = persistStore(store);

export { persistor, store };