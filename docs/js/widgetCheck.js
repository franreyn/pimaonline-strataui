import { accordionWidgetJs } from "./modules/widgets/accordion.js";
import { sliderWidgetJs } from "./modules/widgets/slider.js";
import { arrowsWidgetJs } from "./modules/widgets/arrows.js";
import { toggleButtonsJs } from "./modules/widgets/toggleButtons.js";
import { tabsWidgetJs } from "./modules/widgets/tabs.js";
import { footerWidgetJs } from "./modules/widgets/footer.js";

(function () {
  var widgetCheckPlugin = function (hook, vm) {

    // Function runs every time the page is changed to add any widget specific JS
    hook.doneEach(function () {
      accordionWidgetJs();
      sliderWidgetJs();
      arrowsWidgetJs();
      toggleButtonsJs();
      tabsWidgetJs();
      footerWidgetJs();
    })
  }

  // Add plugin to docsify's plugin array
  $docsify = $docsify || {};
  $docsify.plugins = [].concat($docsify.plugins || [], widgetCheckPlugin);
})();

