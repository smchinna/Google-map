import ReactGA from 'react-ga';
import config from 'config';
import guard from 'sl-guard';

const { enabled, trackingCode } = config.analytics;

export function init() {
    if (!enabled) {
        return () => {
            console.log(`[PAGEVIEW] ${window.location.pathname}`);
        };
    }

    ReactGA.initialize(trackingCode);
    ReactGA.pageview(window.location.pathname);

    // Return a function used to do future page tracking in the router.
    return () => {
        ReactGA.pageview(window.location.pathname);
    }
}

export function setUser(uid) {
    if (!enabled) {
        console.log(`[USER] uid:${uid}`);
        return;
    }

    ReactGA.set({ userId: uid });
}

export function trackEvent(category, action, label, value) {
    guard(category).isString().isNotEmpty().isRequired().check('must specify category string');
    guard(action).isString().isNotEmpty().isRequired().check('must specify action string');
    guard(label).isString().isNotEmpty().check('label must be a non-empty string');
    guard(value).isNumber().isRequired().check('value must be an number');

    if (!enabled) {
        console.log(`[EVENT] c:${category}, a:${action}, l:${label}, v:${value}`);
        return;
    }

    ReactGA.event({
        category,
        action,
        label,
        value,
    });
}

export function trackTiming(category, action, elapsed, label) {
    guard(category).isString().isNotEmpty().isRequired().check('must specify category string');
    guard(action).isString().isNotEmpty().isRequired().check('must specify action string');
    guard(elapsed).isNumber().isRequired().check('must specify elapsed time in ms');
    guard(label).isString().isNotEmpty().check('label must be a non-empty string');

    if (!enabled) {
        console.log(`[TIMING] c:${category}, a:${action}, e:${elapsed}, l:${label}`);
        return;
    }

    ReactGA.timing({
        category,
        action,
        value: elapsed,
        label,
    });
}
