
import './Tab5.css';
import { Geolocation } from '@capacitor/geolocation';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonPage } from '@ionic/react';

const Tab5: React.FC = () => {

// const coordinates = await Geolocation.getCurrentPosition();
  
//     console.log('Current position:', coordinates);
  return (
    <>
    <IonPage>
 {/* <IonCard>
  <IonCardHeader>
    <IonCardTitle>Coordinates</IonCardTitle>
  </IonCardHeader>
  <IonCardContent>
    <IonItem>Latitude: {{ latitude }}</IonItem>
    <IonItem>Longitude: {{ longitude }}</IonItem>
  </IonCardContent>
</IonCard> */}
</IonPage>
  </>
  )
};  

export default Tab5;
