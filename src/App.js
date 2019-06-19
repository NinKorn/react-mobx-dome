import React from 'react';
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import routes from './router/router';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
            <div>
                <Switch>
                    {
                        routes.map((item, i) => {
                            if(item.exact){
                                return <Route exact path={item.path} component={item.component}  key={i}/>
                            }else{
                                return <Route path={item.path} component={item.component}  key={i}/>
                            }
                        }) 
                    }
                </Switch> 
            </div>
        </Router>
    </div>
  );
}

export default App;
