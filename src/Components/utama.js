import React from "react";
import {Switch, Route} from "react-router-dom";

import Beranda from './beranda';
import Lingkungan from './Lingkungan';
import Gallery from './Gallery';
import Belanja from './Belanja';

const Utama = () => (
    <Switch>
        <Route exact path="/" component={Beranda}/>
        <Route path="/lingkungan" component={Lingkungan}/>
        <Route path="/gallery" component={Gallery}/>
        <Route path="/belanja" component={Belanja}/>
    </Switch>
)

export default Utama;