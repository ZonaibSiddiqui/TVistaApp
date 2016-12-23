/**
 * Created by zonaib on 23/12/2016.
 */


Ext.define('TechVistaApp.view.home.EmployeeAdd', {
    extend: 'Ext.Panel',
    xtype: 'EmployeeAdd',
    requires: [
        'Ext.TitleBar',
        'Ext.Video'
    ],
    config: {
        id: 'EmployeeAddId',
        style : 'background:white;',
        scrollable: true,
        defaults : {
            xtype: 'textfield'
        },
        items: [
            {
                docked: 'top',
                xtype: 'toolbar',
               items: [
                   {
                       xtype: 'button',
                       align: 'right',
                       ui: 'back',
                       text : 'Back',
                       handler : function(){
                           app.application.redirectTo('home');
                       }
                   },
                    {xtype : 'spacer'},
                    {xtype : 'label',
                        html:'<span style="font-size: 0.8em;color:#ffffff;font-weight:bold;">Add Employees'
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
                defaults : {
                    xtype: 'textfield',
                    labelWidth : '40%'
                },
                title: 'Please enter Emp info',
                items : [
                    {
                        name: 'addEmpName',
                        itemId: 'addEmpName',
                        label: 'Name'
                    },
                    {
                        name : 'addEmpDept',
                        itemId : 'addEmpDept',
                        label : 'Department'
                    },
                    {
                        name : 'addEmpDesignation',
                        itemId : 'addEmpDesignation',
                        label : 'Designation'
                    },
                    {
                        xtype : 'panel',
                        layout : {
                            type : 'hbox',
                            pack :'center'
                        },
                        margin : '10',
                        items : [
                            {
                                xtype : 'button',
                                text : 'Cancel',
                                ui : 'decline',
                                width : '30%',
                                margin : '0 10 0 0',
                                handler : function(){
                                    Ext.ComponentQuery.query('textfield[itemId=addEmpName]')[0].reset('');
                                    Ext.ComponentQuery.query('textfield[itemId=addEmpDept]')[0].reset('');
                                    Ext.ComponentQuery.query('textfield[itemId=addEmpDesignation]')[0].reset('');
                                    me.overlay.hide();
                                }
                            },
                            {
                                xtype : 'button',
                                text : 'Save',
                                width : '30%',
                                ui : 'confirm',
                                itemId : 'addEmpSaveBtn'
                            }
                        ]
                    }
                ]
            }
        ]
    }
});
