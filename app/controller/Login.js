/**
 * Created by zonaib on 22/12/2016.
 */


Ext.define('TechVistaApp.controller.Login', {
    extend: 'Ext.app.Controller',
    config : {
        views : [
            'login.Login'
        ],
        refs : {

            username : 'textfield[itemId=tfLoginUsername]',
            password : 'passwordfield[itemId=pfLoginPassword]'
        },
        control : {
            'button[itemId=btnLogin]': {
                tap: 'onLoginBtnClick'
            }

        },
        routes : {
            login : 'LoginPage'
        }
    },

    /**
     * Method Name : LoginPage
     * This method is called then login page is rendered.
     * @constructor
     */
    LoginPage : function(){
        add_item_in_panel('Login','LoginId', 'left')
    },

    /**
     * Method Name : onLoginBtnClick
     * This method is called then login button is being pressed and validate user and redirect to the home page witt list.
     * @constructor
     */
    onLoginBtnClick : function(){
        var me = this;
        var username = me.getUsername().getValue();
        var password = me.getPassword().getValue();
        if(username != '' && password != ''){
            me.sqliteSave();
            app.application.redirectTo('home')
        }else{
            Ext.Msg.alert('Caution', 'Please enter valid credentails (use any username/password)')
        }
    },

    sqliteSave : function(){
        var me = this;
        var EmpData= [
            {
                empId : '1',
                empName : 'Employee 1',
                empDept : 'Development',
                empDesignation : 'Software Engineer',
                date : '23/12/2016'
            },{
                empId : '2',
                empName : 'Employee 2',
                empDept : 'Development',
                empDesignation : 'Software Engineer',
                date : '24/12/2016'
            },{
                empId : '3',
                empName : 'Employee 3',
                empDept : 'Graphic Designing',
                empDesignation : 'Graphic Designer',
                date : '24/12/2016'
            },{
                empId : '4',
                empName : 'Employee 4',
                empDept : 'DataBase',
                empDesignation : 'DB admin',
                date : '25/12/2016'
            },{
                empId : '5',
                empName : 'Employee 5',
                empDept : 'Human Resource',
                empDesignation : 'Asst. HR',
                date : '25/12/2016'
            }

        ];
        Ext.getStore('EmployeeListStore').setData(EmpData)
        // open DB
        var EmployeesTbl = window.openDatabase("EmployeesTbl", "1.1", "Employees Data", 864320);
        EmployeesTbl.transaction(execEmpTbl, errorCB, successCB);

        //TODO: create db for Employees
        function execEmpTbl(tx) {
            tx.executeSql('DROP TABLE IF EXISTS EmployeesTbl');
            tx.executeSql('CREATE TABLE IF NOT EXISTS EmployeesTbl (empId INTEGER PRIMARY KEY AUTOINCREMENT, empName NVARCHAR,' +
                ' empDept NVARCHAR, empDesignation NVARCHAR, date NVARCHAR);');

            // insert values into db.
            for(var i in EmpData){
                tx.executeSql('INSERT INTO EmployeesTbl (empName, empDept, empDesignation, date) ' +
                    'VALUES ("'+EmpData[i].empName+'", "'+EmpData[i].empDept+'", "'+EmpData[i].empDesignation+'", "'+EmpData[i].date+'");');
            }

        }
        //TODO: callbacks for DB transactions
        function errorCB(err) {
            console.log("Error processing SQL: "+err);
        }

        function successCB() {
            console.log("success!");
        }
    }

});

