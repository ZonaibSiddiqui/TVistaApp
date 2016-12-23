Ext.define('TechVistaApp.bootstrap', {});

loadMask = function(){
    var obj = { xtype: 'loadmask', message: 'Please wait...'};
    Ext.Viewport.setMasked(obj);
}

hideMask = function(){
    Ext.Viewport.setMasked(false);
}

add_item_in_panel = function(pnlXtype, pnlId, dir){
    Ext.Viewport.removeAll(true);
    if(Ext.Viewport.getComponent(pnlId) == undefined){
        Ext.Viewport.setActiveItem({
            xtype: pnlXtype
        });
        //Ext.Viewport.animateActiveItem({ xtype: pnlXtype }, { type: 'slide', direction: dir });
    }else{

        Ext.Viewport.setActiveItem(Ext.getCmp(pnlId));
        //Ext.Viewport.animateActiveItem({ xtype: pnlXtype }, { type: 'slide', direction: dir });
    }

}


config = {
    mob:{
        //for server
        //rootUrl : '',
        //loginUrl : ''
    }
}
