import RadioSelector from './js/radio.selector.js';
import Selector from './js/selector.js';
import zenscroll from "zenscroll";

zenscroll.setup(500, 0);

window.fancySelector = {
    createRadioSelector: function( button, options ){ return new RadioSelector( button, options ); },
    RADS_360: Selector.RADS_360,
    RADS_90: Selector.RADS_90,
    RADS_180: Selector.RADS_360 / 2,
    RADS_45: Selector.RADS_90 / 2,
    RADS_30: Selector.RADS_90 / 3,
    RADS_0: 0  
};

export default window.fancySelector;