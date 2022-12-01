//REACT
import { Platform } from 'react-native'
//REACT MAVIGATION
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
//PHOSPHOR ICONS
import {
  PlusCircle,
  House,
  MapPin,
  User,
  Suitcase
} from 'phosphor-react-native'
//SCREENS
import { Home } from '../screens/Home'
import { Location } from '../screens/Location'
import { Add } from '../screens/Add'
import { UserInfo } from '../screens/User'
import { Vagas } from '../screens/Vagas'
import { useTheme } from 'styled-components'
import { SignIn } from '../screens/SignIn'
import { SignUp } from '../screens/SignUp'

const { Screen, Navigator } = createBottomTabNavigator()
const Stack = createNativeStackNavigator()

export function AppRoutes() {
  const { COLORS } = useTheme()

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.PRIMARY_900,
        tabBarInactiveTintColor: COLORS.TEXT,
        tabBarHideOnKeyboard: true,
        tabBarLabelPosition: 'below-icon',
        tabBarStyle: {
          backgroundColor: COLORS.BACKGROUND,
          position: 'absolute',
          borderTopWidth: 0,
          height: 60
        },
        tabBarItemStyle: {
          position: 'relative',
          top: Platform.OS === 'android' ? 0 : -10
        },
        tabBarLabelStyle: {
          fontSize: 15
        }
      }}
    >
      <Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return (
              <House
                weight={focused === true ? 'duotone' : 'thin'}
                color={color}
                size={32}
              />
            )
          },
          tabBarLabel: 'Inicio'
        }}
      />
      <Screen
        name="Location"
        component={Location}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return (
              <MapPin
                weight={focused === true ? 'duotone' : 'thin'}
                color={color}
                size={32}
              />
            )
          },
          tabBarLabel: 'Local'
        }}
      />
      <Screen
        name="Add"
        component={Add}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return (
              <PlusCircle
                weight={focused === true ? 'duotone' : 'thin'}
                color={color}
                size={32}
              />
            )
          },
          tabBarLabel: 'Adicionar'
        }}
      />
      <Screen
        name="User"
        component={UserInfo}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return (
              <User
                weight={focused === true ? 'duotone' : 'thin'}
                color={color}
                size={32}
              />
            )
          },
          tabBarLabel: 'Perfil'
        }}
      />
      <Screen
        name="Vagas"
        component={Vagas}
        options={{
          tabBarIcon: ({ color, focused }) => {
            return (
              <Suitcase
                weight={focused === true ? 'duotone' : 'thin'}
                color={color}
                size={32}
              />
            )
          },
          tabBarLabel: 'Vagas'
        }}
      />
    </Navigator>
  )
}

export function AppRoutesWithoutTab() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  )
}
