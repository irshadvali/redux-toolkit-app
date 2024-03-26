import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';
import { apiServices } from '../../ts_service/apiService';

const store = configureStore({
  reducer: {
    [apiServices.reducerPath]: apiServices.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiServices.middleware),
});

// Infer the type of the store
export type RootState = ReturnType<typeof store.getState>;

// Infer the type of the dispatch function
export type AppDispatch = typeof store.dispatch;

// Enable refetching data on certain events
setupListeners(store.dispatch);

export default store;
