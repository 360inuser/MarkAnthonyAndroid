function Storeinfo(){

  var self = Titanium.UI.createView();
	
	var header = Ti.UI.createView({
		top:'0dp',
		height:'50dp',
		backgroundColor:'black'
	});
	var head_lbl = Ti.UI.createLabel({
		text:'STORE INFO',
		color:'white'
	});
	var head_back = Ti.UI.createButton({
		title:'Back',
		left:'5dp',
	});
	var head_next = Ti.UI.createButton({
		title:'Next',
		right:'5dp',
	});
	
	var content = Ti.UI.createScrollView({
		top:'50dp',
		contentHeight:'auto',
		backgroundColor:'white',
	});
	var store = Ti.UI.createLabel({
		text:'Store/District',
		color:'black',
		top:'40dp',
		left:'25dp',
	});
	var store_in = Ti.UI.createTextField({
		width:'165dp',
		top:'30dp',
		left:'125dp',
		returnKeyType:Titanium.UI.RETURNKEY_NEXT
	});
	var address = Ti.UI.createLabel({
		text:'Address',
		color:'black',
		top:'90dp',
		left:'25dp',
	});
	var address_in = Ti.UI.createTextField({
		width:'165dp',
		top:'80dp',
		left:'125dp',
		returnKeyType:Titanium.UI.RETURNKEY_NEXT
	});
	var phone = Ti.UI.createLabel({
		text:'Phone',
		color:'black',
		top:'140dp',
		left:'25dp',
	});
	var phone_in = Ti.UI.createTextField({
		width:'165dp',
		top:'130dp',
		left:'125dp',
		returnKeyType:Titanium.UI.RETURNKEY_NEXT,
		keyboardType:Ti.UI.KEYBOARD_NUMBER_PAD,
	});
	var ppg = Ti.UI.createLabel({
		text:'PPG \nClassification',
		color:'black',
		top:'182dp',
		left:'25dp',
	});
	var ppg_in = Ti.UI.createTextField({
		width:'165dp',
		top:'180dp',
		left:'125dp',
		returnKeyType:Titanium.UI.RETURNKEY_NEXT
	});
	var line = Ti.UI.createView({
		height:'2',
		top:'230dp',
		left:'5dp',
		right:'5dp',
		backgroundColor:'black'
	});
	var order = Ti.UI.createLabel({
		text:'Order Days',
		color:'black',
		top:'250dp',
		left:'25dp',
	});
	var order_in = Ti.UI.createTextField({
		width:'165dp',
		top:'240dp',
		left:'125dp',
		returnKeyType:Titanium.UI.RETURNKEY_NEXT,
		keyboardType:Ti.UI.KEYBOARD_NUMBER_PAD,
	});
	var delay = Ti.UI.createLabel({
		text:'Delay Days',
		color:'black',
		top:'300dp',
		left:'25dp',
	});
	var delay_in = Ti.UI.createTextField({
		width:'165dp',
		top:'290dp',
		left:'125dp',
		returnKeyType:Titanium.UI.RETURNKEY_NEXT,
		keyboardType:Ti.UI.KEYBOARD_NUMBER_PAD,
	});
	var callfreq = Ti.UI.createLabel({
		text:'Call Freq Days',
		color:'black',
		top:'350dp',
		left:'25dp',
	});
	var callfreq_in = Ti.UI.createTextField({
		width:'165dp',
		top:'340dp',
		left:'125dp',
		returnKeyType:Titanium.UI.RETURNKEY_NEXT,
		keyboardType:Ti.UI.KEYBOARD_NUMBER_PAD,
	});
	var accclass = Ti.UI.createLabel({
		text:'Account Calss',
		color:'black',
		top:'400dp',
		left:'25dp',
	});
	var accclass_in = Ti.UI.createPicker({
		width:'165dp',
		top:'390dp',
		left:'125dp'
	});
	
	var pic_data=[Ti.UI.createPickerRow({title:'AAA'}),Ti.UI.createPickerRow({title:'AA'}),Ti.UI.createPickerRow({title:'A'}),Ti.UI.createPickerRow({title:'B'}),Ti.UI.createPickerRow({title:'C'}),Ti.UI.createPickerRow({title:'D'})];
	
	accclass_in.add(pic_data);
	
	var line1 = Ti.UI.createView({
		height:'2',
		top:'440dp',
		left:'5dp',
		right:'5dp',
		backgroundColor:'black'
	});
	var manager = Ti.UI.createLabel({
		text:'Manager',
		color:'black',
		top:'460dp',
		left:'25dp',
	});
	var manager_in = Ti.UI.createTextField({
		width:'165dp',
		top:'450dp',
		left:'125dp',
		returnKeyType:Titanium.UI.RETURNKEY_NEXT
	});
	var assistant = Ti.UI.createLabel({
		text:'Assistant',
		color:'black',
		top:'510dp',
		left:'25dp',
	});
	var assistant_in = Ti.UI.createTextField({
		width:'165dp',
		top:'500dp',
		left:'125dp',
		returnKeyType:Titanium.UI.RETURNKEY_NEXT
	});
	var rtdmanager = Ti.UI.createLabel({
		text:'RTD Manager',
		color:'black',
		top:'560dp',
		left:'25dp',
	});
	var rtdmanager_in = Ti.UI.createTextField({
		width:'165dp',
		top:'550dp',
		left:'125dp',
		returnKeyType:Titanium.UI.RETURNKEY_NEXT
	});
	var beermanager = Ti.UI.createLabel({
		text:'Beer Manager',
		color:'black',
		top:'610dp',
		left:'25dp',
	});
	var beermanager_in = Ti.UI.createTextField({
		width:'165dp',
		top:'600dp',
		left:'125dp',
		returnKeyType:Titanium.UI.RETURNKEY_NEXT
	});
	var productcon = Ti.UI.createLabel({
		text:'Product \nConsultant',
		color:'black',
		top:'652dp',
		left:'25dp',
	});
	var productcon_in = Ti.UI.createTextField({
		width:'165dp',
		top:'650dp',
		left:'125dp',
		bottom:'30dp',
		returnKeyType:Titanium.UI.RETURNKEY_DONE
	});
	
	
	
	store_in.addEventListener("change",function(e){
		if(e.value.length>15)
		{
			store_in.value=e.value.substr(0,15);
		}
	});
   
    ppg_in.addEventListener("change",function(e){
		if(e.value.length>20)
		{
			ppg_in.value=e.value.substr(0,20);
		}
	});
	
	
	
	store_in.addEventListener('return', function() {
    address_in.focus();
    });
    address_in.addEventListener('return', function() {
    phone_in.focus();
    });
    phone_in.addEventListener('return', function() {
    ppg_in.focus();
    });
    ppg_in.addEventListener('return', function() {
    order_in.focus();
    });
    order_in.addEventListener('return', function() {
    delay_in.focus();
    });
    delay_in.addEventListener('return', function() {
    callfreq_in.focus();
    });
    manager_in.addEventListener('return', function() {
    assistant_in.focus();
    });
    assistant_in.addEventListener('return', function() {
    rtdmanager_in.focus();
    });
    rtdmanager_in.addEventListener('return', function() {
    beermanager_in.focus();
    });
    beermanager_in.addEventListener('return', function() {
    productcon_in.focus();
    });
	header.add(head_back);
	header.add(head_lbl);
	header.add(head_next);
	
	content.add(store);
	content.add(store_in);
	content.add(address);
	content.add(address_in);
	content.add(phone);
	content.add(phone_in);
	content.add(ppg);
	content.add(ppg_in);
	content.add(line);
	content.add(order);
	content.add(order_in);
	content.add(delay);
	content.add(delay_in);
	content.add(callfreq);
	content.add(callfreq_in);
	content.add(accclass);
	content.add(accclass_in);
	content.add(line1);
	content.add(manager);
	content.add(manager_in);
	content.add(assistant);
	content.add(assistant_in);
	content.add(rtdmanager);
	content.add(rtdmanager_in);
	content.add(beermanager);
	content.add(beermanager_in);
	content.add(productcon);
	content.add(productcon_in);
	
	
	var store_ava=0;
	var store_id=0;
	
	Ti.App.addEventListener('autofillstoreinfo',function(e){
		
		store_in.value="";
		address_in.value="";
		phone_in.value="";
		ppg_in.value="";
	 	order_in.value="";
	 	delay_in.value="";
	 	callfreq_in.value="";
	 	accclass_in.value="";
	 	manager_in.value="";
	 	assistant_in.value="";
	 	rtdmanager_in.value="";
	 	beermanager_in.value="";
	 	productcon_in.value="";
	 	
		//
		var dlg = Ti.UI.createActivityIndicator();
		dlg.setMessage('Loading...');
		var url = "http://192.168.1.55:8080/enterprise_project/Store_selection";
		var xhr = Ti.Network.createHTTPClient({
    	onload: function(e) {
    		dlg.hide();
    		//alert(this.responseText);
    		var response = JSON.parse(this.responseText);
    		if(response.Success == '1')
  			{
  			
  			store_ava=1;
  			store_id=response.Store_id;
    		store_in.value=response.Store_name;
    		address_in.value=response.address;
    		phone_in.value=response.phone;
    		manager_in.value=response.Manager;
    		assistant_in.value=response.Assistant;
    		rtdmanager_in.value=response.RTD_Manager;
    		beermanager_in.value=response.Beer_Manager;
    		productcon_in.value=response.Pro_consultant;
    		}
    		
    	},
    	onerror: function(e) {
        	// this function is called when an error occurs, including a timeout
        	dlg.hide();
        	Ti.API.debug(e.error);
        	//alert("Can't Find Server,Make Sure you are connected to internet.Try again!");
    	},
    		timeout:60000  /* in milliseconds */
		});
		
		var loginpost = {
    		json: "{'country':'"+ e.country +"','state':'"+ e.state +"','city':'"+ e.city +"','store':'"+ e.store +"'}"
    		
		};
		
		xhr.open("POST", url);
		
		xhr.send(loginpost);  // request is actually sent with this statement
		dlg.show();
	});
	
	Ti.App.addEventListener('reviewautofillstoreinfo',function(e){
		
		var poid=e.poid;
		var dlg = Ti.UI.createActivityIndicator();
		dlg.setMessage('Loading...');
		var url = "http://192.168.1.55:8080/enterprise_project/get_ordered_store_details";
		var xhr = Ti.Network.createHTTPClient({
    	onload: function(e) {
    		dlg.hide();
    		//alert(this.responseText);
    		var response = JSON.parse(this.responseText);
    		store_in.value=response.s_name;
    		address_in.value=response.address;
    		phone_in.value=response.phone;
    		ppg_in.value=response.ppg;
    		order_in.value=response.ord_days;
    		delay_in.value=response.del_days;
    		callfreq_in.value=response.call_days;
    		//accclass_in.value=response.acunt_class;
    		
    		var check_acc=response.acunt_class.toUpperCase();
        	
        	
        	var index=-1;
        	
        	if(accclass_in.columns[0])
		    {
			var _col = accclass_in.columns[0];
			var len = _col.rowCount;
			//alert(len);
        	    for(var x = len-1; x >= 0; x-- )
        	    {
                   var _row = _col.rows[x];
                   _row.title=_row.title.toUpperCase();
                  // alert(_row.title + country);
                   if(_row.title == check_acc)
                   {
               	     index=x;
               	    // alert(x);
                   }
               
        	     }
		    }
		    
        	
        	if(index != -1)
            {
            	accclass_in.setSelectedRow(0,index);
            	index=-1;
            }
    		
    		
    		manager_in.value=response.manager;
    		assistant_in.value=response.assistant;
    		rtdmanager_in.value=response.rtd_manager;
    		beermanager_in.value=response.beer_manager;
    		productcon_in.value=response.product_consultant;
    	},
    	onerror: function(e) {
        	// this function is called when an error occurs, including a timeout
        	dlg.hide();
        	Ti.API.debug(e.error);
        	//alert("Can't Find Server,Make Sure you are connected to internet.Try again!");
    	},
    		timeout:60000  /* in milliseconds */
		});
		
		var poidpost = {
    		json: "{'po_id':'"+ poid +"'}"
    		
		};
		
		xhr.open("POST", url);
		
		xhr.send(poidpost);  // request is actually sent with this statement
		dlg.show();
		
	});
	
	 head_next.addEventListener('singletap',function(e){
	 	if(store_in.value==""||address_in.value==""||phone_in.value==""||ppg_in.value==""||
	 	order_in.value==""||delay_in.value==""||callfreq_in.value==""||
	 	manager_in.value==""||assistant_in.value==""||rtdmanager_in.value==""||beermanager_in.value==""||productcon_in.value=="")
		{
			alert("Please fill all the details");
		}	
		else
		{
			try
			{
			    var formatted_addr=address_in.value;
			    formatted_addr= formatted_addr.replace(/[\r\n]/g, "\\n");
				
				Ti.App.ppg=ppg_in.value;
				Ti.App.order=order_in.value;
				Ti.App.delay=delay_in.value;
				Ti.App.call=callfreq_in.value;
				Ti.App.accclass=accclass_in.getSelectedRow(0).title;
				Ti.App.manager=manager_in.value;
				Ti.App.assistant=assistant_in.value;
				Ti.App.rtdmanager=rtdmanager_in.value;
				Ti.App.beermanager=beermanager_in.value;
				Ti.App.proconin=productcon_in.value;
				Ti.App.store_name=store_in.value;
				Ti.App.address_store=formatted_addr;
				Ti.App.store_phone_no=phone_in.value;
				
				
				
			    Ti.App.fireEvent('openproductpage',{
				str_id:store_id,
				stravailable:store_ava,
				strname:store_in.value,
				address:address_in.value,
				phone:phone_in.value,
				ppg:ppg_in.value,
				order:order_in.value,
				delay:delay_in.value,
				call:callfreq_in.value,
				accclass:accclass_in.getSelectedRow(0).title,
				manager:manager_in.value,
				assistant:assistant_in.value,
				rtdmanager:rtdmanager_in.value,
				beermanager:beermanager_in.value,
				proconin:productcon_in.value
			    });
			   
			   
			  
			   //alert(formatted_addr);
			}
			catch(e)
			{
				alert(e.toString());
			}
		}
	 });
	

	self.add(content);
	self.add(header);
	Ti.App.addEventListener('storeinfoback',function(e){
		    store_in.value="";
			address_in.value="";
			phone_in.value="";
			ppg_in.value="";
			order_in.value="";
			delay_in.value="";
			callfreq_in.value="";
			accclass_in.value="";
			manager_in.value="";
			assistant_in.value="";
			rtdmanager_in.value="";
			beermanager_in.value="";
			productcon_in.value="";
	});
	return self;
};
module.exports = Storeinfo;
