/**
 * Created by zonaib on 22/12/2016.
 */


Ext.define('TechVistaApp.controller.Employee', {
    extend: 'Ext.app.Controller',
    config : {
        models : ['Employee'],
        stores : ['Employee'],
        views : [
            'home.EmployeeList',
            'home.EmployeeAdd',
            'home.EmployeeDetail'
        ],
        refs : {
            empDetailName : 'textfield[itemId=empDetailName]',
            addEmpName : 'textfield[itemId=addEmpName]',
            empDetailDept : 'textfield[itemId=empDetailDept]',
            addEmpDept : 'textfield[itemId=addEmpDept]',
            empDetailDesignation : 'textfield[itemId=empDetailDesignation]',
            addEmpDesignation : 'textfield[itemId=addEmpDesignation]',
            dateDetail : 'textfield[itemId=dateDetail]'
        },
        control : {
            'list[itemId=employeeListId]': {
                itemtap: 'onEmployeeListTap'
            },
            'button[itemId=addEmpSaveBtn]': {
                tap: 'onAddEmpSaveTap'
            }
        },
        routes : {
            home : 'HomePage',
            addemp : 'AddEmp',
            empdetails : 'EmpDetails'
        }
    },

    /**
     * Method Name : HomePage
     * This method is called then home page is rendered.
     * @constructor
     */
    HomePage : function(){
        var me = this;
        Ext.getStore('EmployeeListStore').clearFilter();
        add_item_in_panel('Employee','EmployeeId', 'left')
    },
    AddEmp : function(){
        var me = this;
        Ext.getStore('EmployeeListStore').clearFilter();
        add_item_in_panel('EmployeeAdd','EmployeeAddId', 'left')
    },

    onEmployeeListTap : function(list, index, target, record, e, eOpts){
        var me = this;
        localStorage.setItem('empId',record.get('empId'));
        app.application.redirectTo('empdetails');
    },

    EmpDetails : function(){
        var me = this;
        add_item_in_panel('EmployeeDetail','EmployeeDetailId', 'left');

        var empId = localStorage.getItem('empId');
        var EmpStore = Ext.getStore('EmployeeListStore');
        EmpStore.filter("empId", empId);
        var EmpData = EmpStore.getAt(0).data;

        me.getEmpDetailName().setValue(EmpData.empName);
        me.getEmpDetailDept().setValue(EmpData.empDept);
        me.getEmpDetailDesignation().setValue(EmpData.empDesignation);
        me.getDateDetail().setValue(EmpData.date);
    },

    onAddEmpSaveTap : function(){
        var me = this;
        var addEmpName = me.getAddEmpName().getValue();
        var addEmpDept = me.getAddEmpDept().getValue();
        var addEmpDesignation = me.getAddEmpDesignation().getValue();
        if(addEmpName == ''){
            Ext.Msg.alert('Caution', 'Please enter Employee name');
            return;
        }
        if(addEmpDept == ''){
            Ext.Msg.alert('Caution', 'Please enter Employee Department');
            return;
        }
        if(addEmpDesignation == ''){
            Ext.Msg.alert('Caution', 'Please enter Employee Designation');
            return;
        }
        var todate = Ext.Date.format(new Date(),'d/m/Y');

        // open DB
        var EmployeesTbl = window.openDatabase("EmployeesTbl", "1.1", "Employees Data", 864320);
        EmployeesTbl.transaction(execEmpTbl, errorCB, successCB);

        //TODO: create db for Employees
        function execEmpTbl(tx) {
            tx.executeSql('CREATE TABLE IF NOT EXISTS EmployeesTbl (empId INTEGER PRIMARY KEY AUTOINCREMENT, empName NVARCHAR,' +
                ' empDept NVARCHAR, empDesignation NVARCHAR, date NVARCHAR);');

            // insert values into db.
            tx.executeSql('INSERT INTO EmployeesTbl (empName, empDept, empDesignation, date) ' +
                'VALUES ("'+addEmpName+'", "'+addEmpDept+'", "'+addEmpDesignation+'", "'+todate+'");');

            app.application.redirectTo('home');
        }

        //TODO: callbacks for DB transactions
        function errorCB(err) {
            console.log(err);
        }

        function successCB() {
            console.log("success!");
            setTimeout(function(){
                me.updateEmpList();
            },15000)
        }
    },

    updateEmpList : function(){
        var me = this;
        //TODO:  open db and fetch data from sqlite for employees
        var EmployeesTblData = window.openDatabase("EmployeesTbl", "1.1", "Employees Data", 864320);
        EmployeesTblData.transaction(execEmpDataTbl);
        var EmpArr = new Array();

        function execEmpDataTbl(tx) {
            var getEmps = 'SELECT * FROM EmployeesTbl;';

            tx.executeSql(getEmps, [], function(txs, results){
                var len = results.rows.length;
                for (var i = 0; i < len; i++) {
                    EmpArr[i] = results.rows[i]
                }
                setTimeout(function(){
                    if(EmpArr.length > 0){
                        //TODO:  load data into store and redirect to the list.
                        Ext.getStore('EmployeeListStore').setData(EmpArr);
                    }
                },500)
            });
        }
    }
});

