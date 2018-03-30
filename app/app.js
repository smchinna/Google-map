/**
 * app.js
 *
 * This is the entry file for the application, only setup and boilerplate
 * code.
 */

 // Needed for redux-saga es6 generator support
 import 'babel-polyfill';

 import React from 'react';
 import ReactDOM from 'react-dom';
 import { Provider } from 'react-redux';
 import { ConnectedRouter } from 'react-router-redux';
 import createHistory from 'history/createBrowserHistory';
 import FontFaceObserver from 'fontfaceobserver';
 import 'sanitize.css/sanitize.css';
 
 import ScrollToTop from 'components/ScrollToTop';
 import App from 'containers/App';
 

 /* eslint-enable import/no-unresolved, import/extensions */
 
 import { init as initializeAnalytics } from 'analytics';
 import { configureStore } from 'store';

 
 const history = createHistory();
 const store = configureStore({}, history);
 
 const trackPage = initializeAnalytics();
 history.listen((loc, action) => {
     trackPage();
 });
 
 ReactDOM.render(
     <Provider store={store}>
         <ConnectedRouter history={history}>
             <ScrollToTop>
                 <App />
             </ScrollToTop>
         </ConnectedRouter>
     </Provider>,
     document.getElementById('app')
 )
 
 // Install ServiceWorker and AppCache in the end since
 // it's not most important operation and if main code fails,
 // we do not want it installed
 if (process.env.NODE_ENV === 'production') {
     require('offline-plugin/runtime').install();
 }
 