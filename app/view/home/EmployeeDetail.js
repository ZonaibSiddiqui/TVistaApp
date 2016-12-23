/**
 * Created by zonaib on 22/12/2016.
 */


Ext.define('TechVistaApp.view.home.EmployeeDetail', {
    extend: 'Ext.Panel',
    alias: 'widget.EmployeeDetail',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Label',
        'Ext.form.Panel'
    ],

    config: {
        id: 'EmployeeDetailId',
        layout: 'vbox',
        style : 'background:white;',
        scrollable : true,
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [
                    {
                        text : 'Back',
                        ui : 'back',
                        handler : function(){
                            app.application.redirectTo('home');
                        }
                    },

                    {xtype : 'spacer'},
                    {xtype : 'label',
                        html:'<span style="font-size: 0.8em;color:#ffffff;font-weight:bold;">Employees Details'
                    },{xtype : 'spacer'},

                    {
                        xtype: 'button',
                        align: 'right',
                        ui: 'decline',
                        text : 'Logout',
                        handler : function(){
                            app.application.redirectTo('login');
                        }
                    }
                ]
            },
            {
                xtype : 'fieldset',
                layout : {
                    type : 'vbox',
                    pack : 'center'
                },

                title: 'Employee Details',
                defaults : {
                    xtype: 'textfield',
                    labelAlign : 'top'
                },
                items: [
                    {
                        name: 'empName',
                        itemId: 'empDetailName',
                        label: 'Name'
                    },
                    {
                        name : 'empDept',
                        itemId : 'empDetailDept',
                        label : 'Department'
                    },
                    {
                        name : 'empDesignation',
                        itemId : 'empDetailDesignation',
                        label : 'Designation'
                    },
                    {
                        name : 'date',
                        itemId : 'dateDetail',
                        label : 'Date'
                    }
                ]
            }
        ]
    }

});