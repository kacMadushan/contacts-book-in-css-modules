import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Contacts from '../components/views/Contacts/Contacts';
import NewContact from '../components/views/NewContact/NewContact';
import EditContact from '../components/views/EditContact/EditContact';
import NotFound from '../components/views/NotFound/NotFound';

const AppRouter = () => (
    <Switch>
        <Route path="/" component={Contacts} exact={true} />
        <Route path="/new-contact" component={NewContact} />
        <Route path="/edit-contact/:id" component={EditContact} />
        <Route component={NotFound} />
    </Switch>
);

export default AppRouter;