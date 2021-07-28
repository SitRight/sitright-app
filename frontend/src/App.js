import React from 'react';
import './App.css';
import Camera from './components/Camera';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Checkout from './components/Checkout/Checkout';
import Dashboard from './components/Dashboard/Dashboard';
import Marketplace from './components/Marketplace/Marketplace';
import Settings from './components/Settings/Settings';
import Reports from './components/Reports/Reports';
import Week from './components/Reports/Week';
import Month from './components/Reports/Month';
import Year from './components/Reports/Year';
import AllTime from './components/Reports/AllTime';
import { Switch, Route } from "react-router-dom";
import DailyLog from './components/Reports/DailyLog'
import Welcome from './components/Onboarding/Welcome';
import TakeGoodPics from './components/Onboarding/TakeGoodPics';
import TakeBadPics from './components/Onboarding/TakeBadPics';
import Tour from './components/Onboarding/Tour';

function App() {
  return (
      <main>
          <Switch>
              <Route path="/" component={Camera} exact />
              <Route path="/checkout" component={Checkout} />
              <Route path="/dashboard" component={Dashboard} />
              <Route path="/marketplace" component={Marketplace} />
              <Route path="/settings" component={Settings} />
              <Route path="/reports" component={Reports} />
              <Route path="/reports/week" component={Week} />
              <Route path="/reports/month" component={Month} />
              <Route path="/reports/year" component={Year} />
              <Route path="/reports/alltime" component={AllTime} />
              <Route path="/signup" component={SignUp} />
              <Route path="/signin" component={SignIn} />
              <Route path="/dailylog" component={DailyLog} />
              <Route path="/welcome" component={Welcome} />
              <Route path="/good" component={TakeGoodPics} />
              <Route path="/bad" component={TakeBadPics} />
              <Route path="/tour" component={Tour} />
          </Switch>
      </main>
  )
}

export default App;