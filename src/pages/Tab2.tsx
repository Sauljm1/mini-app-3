
import ExploreContainer from '../components/ExploreContainer';
import './Tab2.css';
import { camera, watch, trash, close,  trashBin, trashOutline} from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
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
} from '@ionic/react';
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';


const Tab2: React.FC = () => {




  return (
    <IonPage>
      <IonHeader>
        <IonToolbar >
          <IonTitle >Workout History</IonTitle>
          <IonButton slot='end'>Log Out</IonButton> 

        </IonToolbar>
      </IonHeader>

      <IonContent>
        <br></br>
        <br></br>
        <br></br>
        <br></br>

      <IonButton>Start Workout</IonButton> 
    <IonCard color="light">
    <IonCardHeader>
      <IonCardTitle>Card Title</IonCardTitle>
      <IonCardSubtitle >Card Subtitle</IonCardSubtitle>
    </IonCardHeader>
    <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
    <IonButton fill="clear">
    <IonIcon aria-hidden="true" icon={trashOutline} />
    </IonButton>
  </IonCard>

  <IonCard color="#000000">
    <IonCardHeader>
      <IonCardTitle>Card Title</IonCardTitle>
      <IonCardSubtitle>Card Subtitle</IonCardSubtitle>
    </IonCardHeader>

    <IonCardContent>Here's a small text description for the card content. Nothing more, nothing less.</IonCardContent>
    <IonButton fill="clear">
    <IonIcon aria-hidden="true" icon={trashOutline} />
    </IonButton>
  </IonCard>

  <IonCard color="primary">
    <IonCardHeader>
      <IonCardTitle>Template: Arm Day</IonCardTitle>
      <IonCardSubtitle>Exercises</IonCardSubtitle>
    </IonCardHeader>
    <IonCardContent>Barbell Curl       10 lbs x 10 reps
      </IonCardContent>
      <IonButton fill="clear">
    <IonIcon aria-hidden="true" icon={trashOutline} />
    </IonButton>
  </IonCard>

  <IonCard color="secondary">
    <IonCardHeader>
      <IonCardTitle>Template: Arm Day</IonCardTitle>
      <IonCardSubtitle>Exercises</IonCardSubtitle>
    </IonCardHeader>
    <IonCardContent>Barbell Curl       10 lbs x 10 reps
      </IonCardContent>
      <IonButton fill="clear">
    <IonIcon aria-hidden="true" icon={trashOutline} />
    </IonButton>
  </IonCard>

  <IonCard color="primary">
    <IonCardHeader>
      <IonCardTitle>Template: Arm Day</IonCardTitle>
      <IonCardSubtitle>Exercises</IonCardSubtitle>
    </IonCardHeader>
    <IonCardContent>Barbell Curl       10 lbs x 10 reps
      </IonCardContent>
      <IonButton fill="clear">
    <IonIcon aria-hidden="true" icon={trashOutline} />
    </IonButton>
  </IonCard>

  <IonCard color="secondary">
    <IonCardHeader>
      <IonCardTitle>Template: Arm Day</IonCardTitle>
      <IonCardSubtitle>Exercises</IonCardSubtitle>
    </IonCardHeader>
    <IonCardContent>Barbell Curl       10 lbs x 10 reps
      </IonCardContent>
      <IonButton fill="clear">
    <IonIcon aria-hidden="true" icon={trashOutline} />
    </IonButton>
  </IonCard>
  </IonContent>
  
  </IonPage>
);
};

export default Tab2;
