import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { watch, trash, close } from 'ionicons/icons';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonMenu,
  IonButtons,
  IonMenuButton,
  IonRoute,
  IonFab,
  IonFabButton,
  IonGrid,
  IonRow,
  IonCol,
  IonImg,
  IonActionSheet,
  IonButton,
  IonText
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import './Home.css';

const Home: React.FC = () => {
  return (
    <>
 
    <IonPage>
    <IonHeader>
        <IonToolbar className='' >
          <IonButtons slot="start">
            <IonMenuButton ></IonMenuButton>
          </IonButtons>
          <IonTitle>Menu</IonTitle>
          <IonButton slot='end'>Log In</IonButton> 
        </IonToolbar>
      </IonHeader>
      <IonContent  className="ion-padding">
        <br></br>
        <br></br>
        <br></br>
        <IonTitle className='title' >
        <h1>Welcome to the USSF Fitness Tracker</h1>
        </IonTitle>
        <br></br>
        <IonText></IonText>
      <h3>This USSF fitness tracker enables Guardians to track their fitness exercises. Using a fitness tracker may help you:</h3>
                <ol className ='fitnessgoals'>
                    <li>Monitor your fitness progress</li>
                    <li>Keep yourself motivated</li>
                    <li>Accountability to yourself and your goals</li>
                    <li>More likely to reach and surpass you fitness goals</li>
                    <li>Allows you to be more efficient in your time and workouts.</li>
                    <li>It can be motivating and reinforcing to remind you why you are doing what you are.</li>
                    <li>Keeps you committed to your plan</li>
                </ol>
      </IonContent>
    </IonPage>
  </>
  );
};

export default Home;
