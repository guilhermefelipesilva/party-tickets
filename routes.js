import { StackNavigator } from 'react-navigation';
import { PartyDetailScreen } from './components/PartyDetail';
import { PartiesScreen } from './components/Parties';

export const PartyTicketsApp = StackNavigator({
    Parties: { screen: PartiesScreen },
    PartyDetail: { screen: PartyDetailScreen },
  });
  