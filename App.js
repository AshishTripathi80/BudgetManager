import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import AsyncStorage from "@react-native-async-storage/async-storage";
import thunk from "redux-thunk";
//import rootReducer from "./reducers";
import budgetReducer from "./src/reducers/budgetReducer";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BudgetEntryScreen from "./src/components/BudgetEntryScreen";
import BudgetListingScreen from "./src/components/BudgetListingScreen";

const Stack = createStackNavigator();

const persistConfig = {
  key: "root",
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, budgetReducer);
const store = createStore(persistedReducer, applyMiddleware(thunk));
const persistor = persistStore(store);

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="BudgetEntry">
            <Stack.Screen name="BudgetEntry" component={BudgetEntryScreen} />
            <Stack.Screen
              name="BudgetListing"
              component={BudgetListingScreen}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
