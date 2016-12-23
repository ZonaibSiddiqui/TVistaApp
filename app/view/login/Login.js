/**
 * Created by zonaib on 22/12/2016.
 */
Ext.define('TechVistaApp.view.login.Login', {
    extend: 'Ext.Panel',
    xtype: 'Login',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        id: 'LoginId',
        style : 'background:white;',
        scrollable : true,
        items: [
            {
                docked: 'top',
                xtype: 'titlebar',
                title: 'Welcome'
            },
            {
                xtype : 'fieldset',
                layout : {
                    type : 'vbox',
                    pack : 'center'
                },

                title: 'Please enter Credentials',
                items : [
                    {
                        xtype : 'textfield',
                        label : 'Username',
                        itemId : 'tfLoginUsername',
                        placeHolder : 'Enter username'
                    },
                    {
                        xtype: 'passwordfield',
                        label: 'Password',
                        itemId : 'pfLoginPassword',
                        margin : '5 0 20 0',
                        ui : 'confirm-round',
                        placeHolder : 'Enter password'
                    },
                    {
                        xtype : 'button',
                        itemId : 'btnLogin',
                        text : 'Login',
                        margin : '0 10 20 10',
                        ui : 'confirm'
                    }
                ]
            }
        ]
    }
});
