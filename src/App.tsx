import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  setupIonicReact
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { images, square, triangle, alarmOutline, home, fishOutline, calendarOutline } from 'ionicons/icons';
import Home from './pages/Home';
import Tab2 from './pages/Tab2';
import Tab3 from './pages/Tab3';
import Tab4 from './pages/Tab4';
import Tab5 from './pages/Tab5';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
     
    <IonReactRouter>
      <IonTabs>
        <IonRouterOutlet>
          <Route exact path="/home">
            <Home />
          </Route>
          <Route exact path="/tab2">
            <Tab2 />
          </Route>
          <Route path="/tab3">
            <Tab3 />
          </Route>
          <Route exact path="/tab4">
            <Tab4 />
          </Route>
          <Route exact path="/tab5">
            <Tab5 />
          </Route>
          <Route exact path="/">
            <Redirect to="/tab1" />
          </Route>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">

          <IonTabButton tab="Home" href="/home">
            <IonIcon icon={home} />
            <IonLabel>Home</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tab2" href="/Tab2">
            <IonIcon icon={fishOutline} />
            <IonLabel>History</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tab3" href="/Tab3">
          <IonIcon icon={calendarOutline} />
            <IonLabel>Photos</IonLabel>
          </IonTabButton>

          <IonTabButton tab="tab4" href="/Tab4">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Search/Calandar</IonLabel>
          </IonTabButton>
          <IonTabButton tab="tab5" href="/Tab5">
            <IonIcon aria-hidden="true" icon={square} />
            <IonLabel>Exercises</IonLabel>
          </IonTabButton>
          

        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
