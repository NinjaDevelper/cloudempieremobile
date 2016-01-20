cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "file": "plugins/com.bluefletch.motorola/www/datawedge.js",
        "id": "com.bluefletch.motorola.MotorolaDataWedge",
        "clobbers": [
            "datawedge"
        ]
    },
    {
        "file": "plugins/cordova-plugin-whitelist/whitelist.js",
        "id": "cordova-plugin-whitelist.whitelist",
        "runs": true
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "com.bluefletch.motorola": "0.1.0",
    "cordova-plugin-crosswalk-webview": "1.5.0",
    "cordova-plugin-whitelist": "1.2.0"
}
// BOTTOM OF METADATA
});