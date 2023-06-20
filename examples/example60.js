var scope = function () {
        return "global";
};
function checkscope() {
        var scope = function () {
                return "local";
        };
        scope(); //1
}
checkscope(); //1
scope(); //1