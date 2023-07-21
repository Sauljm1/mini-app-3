import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonSearchbar, IonText, IonDatetime } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import { searchCircle, trash } from 'ionicons/icons';

import './Tab4.css';

const Tab4: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
        <IonTitle>Toolbar</IonTitle>
      </IonToolbar>
      <IonToolbar>
        <IonSearchbar></IonSearchbar>
      </IonToolbar>
    </IonHeader>
      
      <IonContent>
      <IonDatetime color="rose"></IonDatetime>;
        <IonText> Basic Search</IonText>
        <IonSearchbar></IonSearchbar>
        <IonText> Basic Search with placeholder</IonText>
        <IonSearchbar placeholder="Custom Placeholder"></IonSearchbar>
        <IonText> Basic Search disabled</IonText>
        <IonSearchbar disabled={true} placeholder="Disabled"></IonSearchbar>
        <IonText> Basic Search</IonText>
        <IonSearchbar value="Value"></IonSearchbar>
        <IonText> Animated search</IonText>
        <IonSearchbar animated={true} placeholder="Animated"></IonSearchbar>
        <IonText> Ability to change to any icon</IonText>
        <IonSearchbar searchIcon={searchCircle} placeholder="Custom Search Icon"></IonSearchbar>

        <IonSearchbar showCancelButton="focus" placeholder="Show on Focus"></IonSearchbar>
      <IonSearchbar showCancelButton="always" placeholder="Always Show"></IonSearchbar>
      <IonSearchbar showCancelButton="never" placeholder="Never Show"></IonSearchbar>
      <IonSearchbar
        showCancelButton="always"
        cancelButtonText="Custom Cancel"
        cancelButtonIcon={trash}
        placeholder="Custom Cancel Button"
      ></IonSearchbar>
      </IonContent>
    </IonPage>
  );
};

export default Tab4;
