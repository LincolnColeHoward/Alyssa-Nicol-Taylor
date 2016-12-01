'use strict'
(function () {

  class MenuComponent extends HTMLElement {

    attachedCallback () {
      // attributes
      let title = this.getAttribute ('title');
      // find all tabs
      let xtabs = new FN ('x-tab');
      // create the shadow root and import bootstrap
      let shadow = this.createShadowRoot ();
      shadow.dom ('style').html ('@import url("/css/bootstrap.css");');
      // create the navbar element
      let navbar = shadow.dom ('nav.navbar.navbar-light.bg-faded');
      // create tab links
      xtabs.forEach (function (xtab) {
        
      });
    }

  }

  document.register ('x-menu', MenuComponent);

})()