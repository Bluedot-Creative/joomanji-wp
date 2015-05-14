/*!
 * twinkle v0.1.0
 * Build date: 2014-11-12
 * Copyright 2014 SolarCity Corporation.
 */;(function($) {

(function(window, $, Modernizr, undefined) {
'use strict';

var Twinkle = {};

Twinkle.BackButton = (function() {
    var self = {},
        evt = 'click.Twinkle.BackButton',
        name = '.btn-back';

    self.init = function() {
        $(name).off(evt).on(evt, function(e) {
            e.preventDefault();
            window.history.back();
        });
    };

    return self;
})();

Twinkle.ComponentToggle = (function() {
    var self = {},
        evt = 'click.Twinkle.ComponentToggle',
        name = 'component-toggle',
        showClass = 'show';

    self.init = function() {
        $('[' + name + ']').off(evt).on(evt, function(e) {
            var target = $(this).attr(name);

            e.stopPropagation();
            $(target).toggleClass(showClass);
        });
    };

    return self;
})();

Twinkle.InputField = (function() {
    var self = {},
        evt = 'blur.Twinkle.InputField',
        name = '.input-wrapper input',
        populatedClass = 'populated';

    self.init = function() {
        $(name).off(evt).on(evt, function(e) {
            var $input = $(e.currentTarget),
                value = $input.val();
            
            if (value.length) {
                $input.addClass(populatedClass);
            } else {
                $input.removeClass(populatedClass);
            }
        });
    };

    return self;
})();

Twinkle.ListControl = (function() {
    var self = {},
        evt = 'click.Twinkle.ListControl',
        name = '.drawer-toggle',
        openClass = 'open';

    self.init = function() {
        $(name).off(evt).on(evt, function(e) {
            $(e.currentTarget).toggleClass(openClass);
        });
    };

    return self;
})();

Twinkle.Modernize = (function() {
    var self = {};

    self.init = function() {
        if (!Modernizr.svg) {
            $('img[src$=".svg"]').each(function() {
                var $this = $(this),
                    src = $this.attr('src');

                $this.attr('src', src.replace('.svg', '.png'));
            });
        }
    };

    return self;
})();

Twinkle.NavToggle = (function() {
    var self = {},
        evt = 'click.Twinkle.NavToggle',
        name = 'nav-toggle',
        openClass = 'open';

    self.init = function() {
        var navigation = [];

        $('[' + name + ']').each(function() {
            var menuItem = $(this).attr(name);

            if (navigation.indexOf(menuItem) < 0) {
                navigation.push(menuItem);
            }
        });

        $('[' + name + ']').off(evt).on(evt, function(e) {
            var target = $(this).attr(name);
            
            e.stopPropagation();
            $(target).toggleClass(openClass);
        });

        $('.wrapper').off(evt).on(evt, function() {
            navigation.forEach(function(e) {
                $(e).removeClass(openClass);
            });
        });

    };

    return self;
})();

Twinkle.TabControl = (function() {
    var self = {},
        evt = 'click.Twinkle.TabControl',
        name = 'tab-toggle',
        activeClass = 'active',
        showClass = 'show';

    self.init = function() {
        var navigation = [];

        $('[' + name + ']').each(function() {
            var tabItem = $(this).attr(name);

            if (navigation.indexOf(tabItem) < 0) {
                navigation.push(tabItem);
            }
        });

        $('[' + name + ']').off(evt).on(evt, function(e) {
            var target = $(this).attr(name);

            $(target).toggleClass(showClass);
            $(target).siblings('.tab-item').removeClass(showClass);

            $(this).parents('li').toggleClass(activeClass);
            $(this).parents('li').siblings('li').removeClass(activeClass);
            
            e.stopPropagation();
        });
    };

    return self;
})();

(function() {
    var methods = [];

    for (var method in Twinkle) {
        if (Twinkle.hasOwnProperty(method)) {
            methods.push(method);
        }
    }

    Twinkle.init = function() {
        methods.forEach(function(method) {
            Twinkle[method].init();
        }); 
    };
})();

$(document).ready(Twinkle.init);

if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = Twinkle;
} 
else if (typeof define === 'function' && define.amd) {
    define([], function() {
        return Twinkle;
    });
} else {
    window.Twinkle = Twinkle;
}

})(window, $, Modernizr);

})(jQuery);