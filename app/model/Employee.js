/**
 * Created by zonaib on 22/12/2016.
 */

Ext.define('TechVistaApp.model.Employee', {
    extend: 'Ext.data.Model',

    requires: [
        'Ext.data.Field'
    ],

    config: {
        fields: [
            {
                name: 'empId',
                type: 'int'
            },
            {
                name: 'empName',
                type: 'string'
            },
            {
                name: 'empDept',
                type: 'auto'
            },
            {
                name: 'empDesignation',
                type: 'auto'
            },
            {
                name: 'date',
                type: 'auto'
            }
        ]
    }
});