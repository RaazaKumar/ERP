import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from './res/navigation/TabNavigator';

export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}
