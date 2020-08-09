import React from "react";
import { Route, Switch } from "react-router-dom";

import ListingPage from "./containers/listing";
import DetailsPage from "./containers/details";

function App() {
  return (
    <Switch>
      <Route path="/details/:id" component={DetailsPage} />
      <Route path="/" component={ListingPage} />
    </Switch>
  );
}

export default App;
