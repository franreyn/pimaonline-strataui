import { accordionWidgetJs } from "./modules/widgets/accordion.js";
import { sliderWidgetJs } from "./modules/widgets/slider.js";
import { arrowsWidgetJs } from "./modules/widgets/arrows.js";
import { toggleButtonsJs } from "./modules/widgets/toggleButtons.js";
import { tabsWidgetJs } from "./modules/widgets/tabs.js";
import { footerWidgetJs } from "./modules/widgets/footer.js";
import { responsiveTablesJs } from "./modules/widgets/responsiveTables.js";

(function () {
  var widgetCheckPlugin = function (hook, vm) {

    // Function runs every time the page is changed to add or re-initialize widgets
    hook.doneEach(function () {

			console.log("hook ran")

      // Initialize or re-initialize widgets
      accordionWidgetJs();
      sliderWidgetJs();
      arrowsWidgetJs();
      toggleButtonsJs();
      tabsWidgetJs();
      footerWidgetJs();
      responsiveTablesJs();
    });
  };

  // Add plugin to Docsify's plugin array
  $docsify = $docsify || {};
  $docsify.plugins = [].concat($docsify.plugins || [], widgetCheckPlugin);
})();
