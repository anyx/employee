'use strict';

app
    .directive('menu', function($rootScope, $state, $timeout) {
        return {
            restrict: 'A',
            scope: {
                sectionPrefix: '='
            },
            link: function($scope, element, $attrs) {
                var activeClass = $attrs.navMenu || 'active';
                var markActiveLink = function(stateName, currentState) {
                    var activeLink;
                    element.find('> li > [data-section]').each(function() {
                        $(this).removeClass(activeClass);
                        var $section = $(this);

                        var sections = $(this).data('section').split(',');
                        _.each(sections, function(section) {
                            var sectionPrefixes = $scope.sectionPrefix ? $scope.sectionPrefix.split(',') : [''];
                            _.each(sectionPrefixes, function(sectionPrefix) {
                                var fullSection = sectionPrefix + section;

                                if (stateName.indexOf(fullSection) === 0) {
                                    if ($section.data('section-verify-expression') && $section.data('section-verify-value')) {
                                        if ($interpolate('{{' + $section.data('section-verify-expression') + '}}')(currentState.locals.globals) === $section.data('section-verify-value')) {
                                            activeLink = $section;
                                        }
                                    } else {
                                        activeLink = $section;
                                    }
                                }
                            });
                        });
                    });

                    if (activeLink && activeLink.length) {
                        activeLink.addClass(activeClass);
                    }
                };

                $rootScope.$on('$stateChangeSuccess', function() {
                    markActiveLink($state.current.name, $state.$current);
                });

                $timeout(function() {
                    markActiveLink($state.current.name, $state.$current);
                }, 10);
            }
        };
    });
