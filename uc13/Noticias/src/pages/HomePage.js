import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import DashboardPage from './DashboardPage';
import NoticiasPage from './NoticiasPage';

const Tab = createBottomTabNavigator();

export default function HomePage() {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Dashboard" component={DashboardPage} />
            <Tab.Screen name="Noticias" component={NoticiasPage} />
        </Tab.Navigator>
    );
}