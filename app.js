/*
    This file is generated and updated by Sencha Cmd. You can edit this file as
    needed for your application, but these edits will have to be merged by
    Sencha Cmd when it performs code generation tasks such as generating new
    models, controllers or views and when running "sencha app upgrade".

    Ideally changes to this file would be limited and most work would be done
    in other places (such as Controllers). If Sencha Cmd cannot merge your
    changes and its generated code, it will produce a "merge conflict" that you
    will need to resolve manually.
*/

Ext.application({
    name: 'TechVistaApp',

    requires: [
        'Ext.MessageBox',
        'TechVistaApp.bootstrap',
        'Ext.Ajax',
        'Ext.LoadMask'
    ],

    views: [
        //'Main'
    ],

    controllers : [
        'Login',
        'Employee'
    ],

    icon: {
        '57': 'resources/icons/Icon.png',
        '72': 'resources/icons/Icon~ipad.png',
        '114': 'resources/icons/Icon@2x.png',
        '144': 'resources/icons/Icon~ipad@2x.png'
    },

    isIconPrecomposed: true,

    startupImage: {
        '320x460': 'resources/startup/320x460.jpg',
        '640x920': 'resources/startup/640x920.png',
        '768x1004': 'resources/startup/768x1004.png',
        '748x1024': 'resources/startup/748x1024.png',
        '1536x2008': 'resources/startup/1536x2008.png',
        '1496x2048': 'resources/startup/1496x2048.png'
    },

    launch: function() {
        // Destroy the #appLoadingIndicator element
        Ext.fly('appLoadingIndicator').destroy();

        // Initialize the main view
        app = this;
        window.location.hash = 'login';
        if (Ext.os.is('Android')) {
            document.addEventListener("backbutton", Ext.bind(onBackKeyDown, this), false);
            function onBackKeyDown(eve) {
                eve.preventDefault();
                if(window.location.hash.split('#')[1] == 'home'){
                    app.application.redirectTo('login');
                }else if(window.location.hash.split('#')[1] == 'empdetails'){
                    app.application.redirectTo('home');
                }else if(window.location.hash.split('#')[1] == 'login'){
                    navigator.app.exitApp();
                }else if(window.location.hash.split('#')[1] == 'addemp'){
                    app.application.redirectTo('home');
                }
            }
        }

        Ext.Ajax.on('requestcomplete',function(connection,options) {
            Ext.Viewport.setMasked(false);
        });

        Ext.Ajax.on('requestexception', function (conn, response, options) {
            Ext.Viewport.setMasked(false);
            return;
        });
    },

    onUpdated: function() {
        Ext.Msg.confirm(
            "Application Update",
            "This application has just successfully been updated to the latest version. Reload now?",
            function(buttonId) {
                if (buttonId === 'yes') {
                    window.location.reload();
                }
            }
        );
    }
});
