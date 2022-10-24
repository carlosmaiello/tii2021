import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginPage from "./pages/LoginPage";
import NewsPage from "./pages/NewsPage";
import RegisterPage from "./pages/RegisterPage";
import SettingsPage from "./pages/SettingsPage";
import { AuthContext } from "./contexts/Auth";
import NewsDetailPage from "./pages/NewsDetailPage";

const Tab = createBottomTabNavigator();

function Home() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="News" component={NewsPage} />
            <Tab.Screen name="Settings" component={SettingsPage} />
        </Tab.Navigator>
    );
}


const Stack = createNativeStackNavigator();

export default function AppRoutes() {
    const { authorized } = React.useContext(AuthContext);

    return (
        <Stack.Navigator initialRouteName='Home'>
            <Stack.Group>
                {authorized ? (
                    <>
                        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
                    </>
                ) : (
                    <>
                        <Stack.Screen name="Login" component={LoginPage} options={{ headerShown: false }} />
                        <Stack.Screen name="Register" component={RegisterPage} options={{ headerShown: false }} />
                    </>
                )}
            </Stack.Group>
            <Stack.Group screenOptions={{ presentation: 'transparentModal', headerShown: false }}>
                <Stack.Screen name="NewsDetail" component={NewsDetailPage} />
            </Stack.Group>
        </Stack.Navigator>
    )
}