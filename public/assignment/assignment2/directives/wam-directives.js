/**
 * Created by vishruthkrishnaprasad on 22/3/17.
 */
(function () {
    angular
        .module('WebAppMaker')
        .directive('wamDirectives', sortableDir);

    function sortableDir() {
        function linkFunc(element) {
            element.sortable({axis: 'y'})

        }
        return {
            link : linkFunc
        };
    }

})();