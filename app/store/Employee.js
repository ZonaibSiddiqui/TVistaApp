/**
 * Created by zonaib on 22/12/2016.
 */

Ext.define('TechVistaApp.store.Employee', {
    extend: 'Ext.data.Store',

    requires: [
        'TechVistaApp.model.Employee'
    ],

    config: {
        model: 'TechVistaApp.model.Employee',
        storeId: 'EmployeeListStore',
        autoLoad : true,
        sorters: {
            property: 'empName'
        },
        grouper: {
            groupFn: function(record) {
                return record.get('empName')[0];
            }
        }
    }
});