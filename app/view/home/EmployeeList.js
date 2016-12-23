/**
 * Created by zonaib on 22/12/2016.
 */
Ext.define('TechVistaApp.view.home.EmployeeList', {
    extend: 'Ext.Panel',
    alias: 'widget.Employee',

    requires: [
        'Ext.Toolbar',
        'Ext.Button',
        'Ext.Label',
        'Ext.field.Select',
        'Ext.dataview.List',
        'Ext.XTemplate'
    ],

    config: {
        id: 'EmployeeId',
        layout: 'vbox',
        items: [
            {
                xtype: 'toolbar',
                docked: 'top',
                items: [

                    {xtype : 'spacer'},
                    {xtype : 'label',
                        html:'<span style="font-size: 0.8em;color:#ffffff;font-weight:bold;">Employees'
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
                xtype: 'list',
                flex: 1,
                disableSelection: true,
                emptyText: 'No Employees are Found',
                indexBar:true,
                itemId: 'employeeListId',
                itemTpl: [
                    '<tpl for=".">'+
                        '<div>Name: {empName}</div>'+
                        '<div>Designation: {empDesignation}</div>'+
                        '<div>Department: {empDept}</div>'+
                    '</tpl>'
                ],
                store: 'EmployeeListStore',
                grouped: true,
                striped: true
            },
            {
                xtype: 'toolbar',
                docked: 'bottom',
                items: [
                    {xtype : 'spacer'},
                    {
                        xtype : 'button',
                        text : 'Add Employee',
                        handler: function() {
                           app.application.redirectTo('addemp')
                        }
                    },{xtype : 'spacer'}
                ]
            }
        ]
    }

});