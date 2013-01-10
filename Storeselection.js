function Storeselection() {
  var self = Ti.UI.createView();
	
	
	Ti.Geolocation.preferredProvider = "gps";
    var locationAdded = false;
	var var_country,var_state,var_city,var_store;
	
	var header = Ti.UI.createView({
		top:'0dp',
		height:'50dp',
		backgroundColor:'black'
	});
	var head_lbl = Ti.UI.createLabel({
		text:'STORE SELECTION',
		color:'white'
	});
	var head_back = Ti.UI.createButton({
		title:'Back',
		left:'5dp',
	});
	
	
	var content = Ti.UI.createView({
		top:'50dp',
		backgroundColor:'white',
	});
	var country_lbl = Ti.UI.createLabel({
		text:'COUNTRY',
		top:'40dp',
		left:'30dp',
		color:'black'
	});
	var state_lbl = Ti.UI.createLabel({
		text:'STATE',
		top:'90dp',
		left:'30dp',
		color:'black'
	});
	var city_lbl = Ti.UI.createLabel({
		text:'CITY',
		top:'140dp',
		left:'30dp',
		color:'black'
	});
	var store_lbl = Ti.UI.createLabel({
		text:'STORE',
		top:'190dp',
		left:'30dp',
		color:'black'
	});
	var addr_lbl = Ti.UI.createLabel({
		text:'ADDRESS',
		top:'240dp',
		left:'30dp',
		color:'black'
	});
	var btn = Ti.UI.createButton({
		title:'Begin',
		top:'300dp',
		width:'100dp',
		height:'auto',
		value1:'12.30',
		value2:'152.0'
	});
	var addr = Ti.UI.createLabel({
		text:'Addressline1\nAddressline2',
		top:'240dp',
		left:'120dp',
		color:'black'
	});
	
	
	
	var con_pic = Ti.UI.createPicker({
		width:'165dp',
		top:'30dp',
		left:'120dp',
		returnKeyType:Titanium.UI.RETURNKEY_NEXT
	});
	
	//con_pic.add(pic_data);
	
	var sta_pic = Ti.UI.createPicker({
		width:'165dp',
		top:'80dp',
		left:'120dp',
		returnKeyType:Titanium.UI.RETURNKEY_NEXT
	})	
	var city_pic = Ti.UI.createPicker({
		width:'165dp',
		top:'130dp',
		left:'120dp',
		returnKeyType:Titanium.UI.RETURNKEY_NEXT
	})
	var str_pic = Ti.UI.createPicker({
		width:'165dp',
		top:'180dp',
		left:'120dp',
		returnKeyType:Titanium.UI.RETURNKEY_DONE
	});

   
    Ti.App.GeoApp = {};

	Ti.Geolocation.preferredProvider = Titanium.Geolocation.PROVIDER_GPS;
	Ti.Geolocation.purpose = "testing";
	Titanium.Geolocation.accuracy = Titanium.Geolocation.ACCURACY_BEST;
	Titanium.Geolocation.distanceFilter = 10;

   
   
   	Ti.App.addEventListener('findcurrentlocation',function(e){
		
		Titanium.Geolocation.getCurrentPosition(function(e)
		{
		    if (e.error)
		    {
		    	var toast = Titanium.UI.createNotification({
    					duration: Ti.UI.NOTIFICATION_DURATION_LONG,
    					message:'Unable to get your location.'
                });
                toast.show();
		        
		        return;
		    }
		 
		    var longitude = e.coords.longitude;
		    var latitude = e.coords.latitude;
		    var altitude = e.coords.altitude;
		    var heading = e.coords.heading;
		    var accuracy = e.coords.accuracy;
		    var speed = e.coords.speed;
		    var timestamp = e.coords.timestamp;
		    var altitudeAccuracy = e.coords.altitudeAccuracy;
		 
		    //alert(e.coords.longitude);
		    locationCallback(e);
		 
		});
    
    });
    
    
    var locationCallback = function(e)
	{
		var dlg = Titanium.UI.createActivityIndicator();
		dlg.setMessage('Loading...');
       
       	try
  		{
    		var longitude = e.coords.longitude;
    		var latitude = e.coords.latitude;
    	}
    	catch(e)
      	{
      		
       	}
    	var streetname,city,state,pincode,country;
    	
    	var addrUrl = "http://maps.googleapis.com/maps/api/geocode/json?sensor=true&latlng="+latitude+","+longitude;
		//web-service call 
		var addrReq = Titanium.Network.createHTTPClient({
    	onload: function(e){
    	var response = JSON.parse(this.responseText);
  		if(response.status == "OK")
  		{
        	var resLen = response.results[0].address_components.length;
        	for(var i=0; i < resLen; i++) 
        	{
	            switch (response.results[0].address_components[i].types[0])
    	        {
        	        case "street_number":
            	        //Ti.API.info("street number : "+response.results[0].address_components[i].long_name);
                	    break;
                	case "route":
                    	//Ti.API.info("street name : "+response.results[0].address_components[i].long_name);
                    	streetname=response.results[0].address_components[i].long_name;
                    	break;
                	case "locality":
                    	//Ti.API.info("city name : "+response.results[0].address_components[i].long_name);
                    	city=response.results[0].address_components[i].long_name;
                    	break;
                	case "administrative_area_level_1":
                    	//Ti.API.info("state name : "+response.results[0].address_components[i].long_name);
                    	state =response.results[0].address_components[i].long_name;
                    	break;
                	case "postal_code":
	                    //Ti.API.info("zip code : "+response.results[0].address_components[i].long_name);
	                    pincode=response.results[0].address_components[i].long_name;
    	                break;
        	        case "country":
            	        //Ti.API.info("country name : "+response.results[0].address_components[i].long_name);
            	        country=response.results[0].address_components[i].long_name;
                	    break;
                }
        	}
        	//con_pic.value=country;
        	//sta_pic.value=state;
        	//city_pic.value=city;
        	//str_pic.value=streetname;
        	
        	//alert(country+","+state+","+city);
        	country=country.toUpperCase();
        	state=state.toUpperCase();
        	city=city.toUpperCase();
        	
        	
        	var index=-1;
        	
        	if(con_pic.columns[0])
		    {
			var _col = con_pic.columns[0];
			var len = _col.rowCount;
			//alert(len);
        	    for(var x = len-1; x >= 0; x-- )
        	    {
                   var _row = _col.rows[x];
                   _row.title=_row.title.toUpperCase();
                  // alert(_row.title + country);
                   if(_row.title == country)
                   {
               	     index=x;
               	    // alert(x);
                   }
               
        	     }
		    }
		    
        	
        	if(index != -1)
            {
            	con_pic.setSelectedRow(0,index);
            	index=-1;
            }
        	
        	
        	if(sta_pic.columns[0])
		    {
			var _col = sta_pic.columns[0];
			var len = _col.rowCount;
        	    for(var x = len-1; x >= 0; x-- )
        	    {
                   var _row = _col.rows[x];
                    _row.title=_row.title.toUpperCase();
                   if(_row.title==state)
                   {
               	     index=x;
                   }
        	     }
		    }
		    
		    if(index != -1)
            {
            	sta_pic.setSelectedRow(0,index);
            	index=-1;
            }
		    
		    
        	if(city_pic.columns[0])
		    {
			    var _col = city_pic.columns[0];
			    var len = _col.rowCount;
        	    for(var x = len-1; x >= 0; x-- )
        	    {
                   var _row = _col.rows[x];
                  
                    _row.title=_row.title.toUpperCase();
                    // alert(_row.title+city);
                   if(_row.title==city)
                   {
               	     index=x;
                   }
        	    }
		    }
        	
        	if(index != -1)
            {
            	city_pic.setSelectedRow(0,index);
            	index=-1;
            }
        	
        	
        }
       
       	dlg.hide();	
    	},
    	onerror: function(e){
        	
        	dlg.hide();
        	Ti.API.debug(e.error);
        	alert("Can't find the location");
    	},
    		timeout:60000  
		});
		addrReq.open("GET",addrUrl);
		addrReq.send(null);
        dlg.show();
		
	}
    
    

   
	btn.addEventListener('click',function(e){
		
		if(var_country==""||var_state==""||var_city==""||var_store=="")
		{
			//alert("Pleae selec the details");
		}	
		else
		{
			//alert(var_country+","+var_state+","+var_city+","+var_store);
			Ti.App.fireEvent('openstoreinfopage',{
				country:var_country,
				state:var_state,
				city:var_city,
				store:var_store
			});
		
		}
		
		/*var index=-1;
		
		if(con_pic.columns[0])
		{
			var _col = con_pic.columns[0];
			var len = _col.rowCount;
        	for(var x = len-1; x >= 0; x-- )
        	{
                var _row = _col.rows[x];
               // _col.removeRow(_row);
               //alert(_row.title);
               if(_row.title=="test123")
               {
               	index=x;
               }
               
        	}
		}*/
		
		//con_pic.setSelectedRow(0,index);
		
		
		//alert(con_pic.getSelectedRow(0).title);
		//con_pic.getSelectedRow(0).title='test123';
  
         /*if(con_pic.columns[0]) {
    		var _col = con_pic.columns[0];
        	var len = _col.rowCount;
        	for(var x = len-1; x >= 0; x-- )
        	{
                var _row = _col.rows[x];
                _col.removeRow(_row);
        	}
		}*/		

		//con_pic.columns=[];
		
	});
	
	con_pic.addEventListener('change',function(e){
	    var_country=con_pic.getSelectedRow(0).title;
	   //alert(con_pic.getSelectedRow(0).title);	
	   //load_details_dropdown("SELECT DISTINCT state FROM store_master WHERE country ='"+ con_pic.getSelectedRow(0).title  +"'",sta_pic);
	   load_details_dropdown("SELECT DISTINCT state FROM store_master WHERE country=",sta_pic,2,con_pic.getSelectedRow(0).title);
	   sta_pic.setSelectedRow(0,0);
	});
	
	sta_pic.addEventListener('change',function(e){
		var_state=sta_pic.getSelectedRow(0).title;
		//alert(sta_pic.getSelectedRow(0).title);
		load_details_dropdown("SELECT DISTINCT city FROM store_master WHERE state=",city_pic,3,sta_pic.getSelectedRow(0).title);
		city_pic.setSelectedRow(0,0);
	});
	
	
	
	city_pic.addEventListener('change',function(e){
		if(city_pic.getSelectedRow(0).title != null)
		{
		  var_city=city_pic.getSelectedRow(0).title;
		  load_details_dropdown("SELECT s_name FROM store_master WHERE city=",str_pic,4,city_pic.getSelectedRow(0).title);
		  str_pic.setSelectedRow(0,0);	
		}
		
	});
	
	str_pic.addEventListener('change',function(e){
		
		var_store=str_pic.getSelectedRow(0).title;
	
		load_address('SELECT address FROM store_master WHERE country=/"'+ var_country +'/" and state=/"'+ var_state +'/" and city=/"'+ var_city +'/" and s_name=/"'+ var_store +'/"');
		
	});
	
	Ti.App.addEventListener('storepageloaddropdown',function(e){
		if(con_pic.columns[0])
		{
			var _col = con_pic.columns[0];
			var len = _col.rowCount;
        	for(var x = len-1; x >= 0; x-- )
        	{
                var _row = _col.rows[x];
                _col.removeRow(_row);
        	}
		}
		
		if(str_pic.columns[0])
		{
			var _col = str_pic.columns[0];
			var len = _col.rowCount;
        	for(var x = len-1; x >= 0; x-- )
        	{
                var _row = _col.rows[x];
                _col.removeRow(_row);
        	}
		}
		if(sta_pic.columns[0])
		{
			var _col = sta_pic.columns[0];
			var len = _col.rowCount;
        	for(var x = len-1; x >= 0; x-- )
        	{
                var _row = _col.rows[x];
                _col.removeRow(_row);
        	}
		}
		if(city_pic.columns[0])
		{
			var _col = city_pic.columns[0];
			var len = _col.rowCount;
        	for(var x = len-1; x >= 0; x-- )
        	{
                var _row = _col.rows[x];
                _col.removeRow(_row);
        	}
		}
		
		
		load_details_dropdown("SELECT DISTINCT country FROM store_master",con_pic,1);
		con_pic.setSelectedRow(0, 0);
         
		
		
		//con_pic.value="";
		//str_pic.value="";
		//sta_pic.value="";
		//city_pic.value="";
	});
	
	var country_change=function(firstcountry)
	{
		load_details_dropdown("SELECT DISTINCT state FROM store_master WHERE country=",sta_pic,2,firstcountry);	
		//if(sta_pic.columns[0])
	    //{		 
	     
		//}
		
	}
	
	var state_change=function(firststate)
	{
		var _col = sta_pic.columns[0];
		var len = _col.rowCount;
		if(len>1)
	    {
		 sta_pic.setSelectedRow(0,1);
		 sta_pic.setSelectedRow(0,0);
		}
		else
		{
		  load_details_dropdown("SELECT DISTINCT city FROM store_master WHERE state=",city_pic,3,firststate);	
		}
		
		//load_details_dropdown("SELECT DISTINCT city FROM store_master WHERE state=",city_pic,3,firststate);	
		//city_pic.setSelectedRow(0,0);
	}
	
	var city_change=function(firstcity)
	{
		
		var _col = city_pic.columns[0];
		var len = _col.rowCount;
		//alert(len);
		if(len>1)
	    {
		 city_pic.setSelectedRow(0,1);
		 city_pic.setSelectedRow(0,0);
		}
		else
		{
		 load_details_dropdown("SELECT s_name FROM store_master WHERE city=",str_pic,4,firstcity);	
		}
		
		
	   // 
	   // str_pic.setSelectedRow(0,0);
	}
	
	var store_change=function(firststore)
	{
		var _col = str_pic.columns[0];
		var len = _col.rowCount;
		if(len>1)
	    {
		 str_pic.setSelectedRow(0,1);
		 str_pic.setSelectedRow(0,0);
		}
		else
		{
			var_store=firststore;
		    load_address('SELECT address FROM store_master WHERE country=/"'+ var_country +'/" and state=/"'+ var_state +'/" and city=/"'+ var_city +'/" and s_name=/"'+ var_store +'/"');
		}
		
		if(Ti.App.is_click_new_audit == true)
		{
			Ti.App.fireEvent('findcurrentlocation');
			Ti.App.is_click_new_audit =false;
		}
	}
	
	var dlg = Ti.UI.createActivityIndicator();
	dlg.setMessage('Please,Loading...');
	
	var load_details_dropdown=function(query,dropdown,index_var,search)
	{
		
		var url = "http://192.168.1.55:8080/enterprise_project/autosuggestion";
		var xhr = Ti.Network.createHTTPClient({
    	onload: function(e) {
    		//alert(this.responseText);
    		try
    		{
    			
    		var json_obj=JSON.parse(this.responseText);
    		if(json_obj.is_row == 1)
    		{
    		 //var current_pic = Ti.UI.createPicker({});	
    		 //current_pic=dropdown.source;
    			if(dropdown.columns[0])
				{
					var _col = dropdown.columns[0];
					var len = _col.rowCount;
        			for(var x = len-1; x >= 0; x-- )
        			{
                		var _row = _col.rows[x];
                		_col.removeRow(_row);
        			}
			    }
			    var pic_data=[];
	            var first_index;
	            if(json_obj.autosugvalues.length !=0)
	            {
	            	for(var j=0;j<json_obj.autosugvalues.length;j++)
			      {
			    	if(j==0)
			    	{
			    		first_index=json_obj.autosugvalues[j].sugvalue;
			    	}
			       	pic_data.push(Ti.UI.createPickerRow({title:json_obj.autosugvalues[j].sugvalue}));
			      }
	            }
			    
			    
			    dropdown.add(pic_data);
			    
			    if(index_var == 1)
			    {
			    	var_country=first_index;
			    	country_change(first_index);
			    }
			    else if(index_var == 2)
			    {
			    	var_state=first_index;
			    	state_change(first_index);
			    }
			    else if(index_var == 3)
			    {
			    	var_city=first_index;
			    	city_change(first_index);
			    }
			    else if(index_var === 4)
			    {
			    	var_store =first_index;
			    	store_change(first_index);
			    } 
    		}
    		else
    		{
    			alert(this.responseText);
       		}
    		
    		dlg.hide();
    		
    		}
    		catch(e)
    		{
    			dlg.hide();
    		}
    	},
    	onerror: function(e) {
        	// this function is called when an error occurs, including a timeout
        	dlg.hide();
        	Ti.API.debug(e.error);
        	alert("Can't Find Server,Make Sure you are connected to internet.Try again!");
    	},
    		timeout:60000  /* in milliseconds */
		});
		
		var loginpost;
		if(index_var ==1)
		{
			loginpost = {
    		    json: "{'query':'"+ query +"','search':''}"
		    };
		}
		else
		{
			loginpost = {
    		    json: "{'query':'"+ query +"','search':'"+ search +"'}"
		    };
		}
		
		
		
		
		
		xhr.open("POST", url);
		
		xhr.send(loginpost);  // request is actually sent with this statement
		dlg.show();
	}
	
	
	var load_address=function(query)
	{
	   
		var url = "http://192.168.1.55:8080/enterprise_project/autosuggestion";
		var xhr = Ti.Network.createHTTPClient({
    	onload:function(e){
    		//alert(this.responseText);
    		var json_obj=JSON.parse(this.responseText);
    		addr.text="address is loading...";
    		if(json_obj.autosugvalues.length  != 0)
    		{
    		  addr.text=json_obj.autosugvalues[0].sugvalue;
    		}
    		
    		dlg.hide();
    		
    	},
    	onerror: function(e) {
        	// this function is called when an error occurs, including a timeout
        	dlg.hide();
        	Ti.API.debug(e.error);
        	alert("Can't Find Server,Make Sure you are connected to internet.Try again!");
    	},
    		timeout:60000  /* in milliseconds */
		});
		
		var loginpost = {
    		json: "{'query':'"+ query  +"','search':''}"
		};
		
		xhr.open("POST", url);
		
		xhr.send(loginpost);  // request is actually sent with this statement
		dlg.show();	
	}
	
	
	
	
	
	
	
	header.add(head_lbl);
	header.add(head_back);
	
	content.add(con_pic);
	content.add(sta_pic);
	content.add(str_pic);
	content.add(city_pic);
	content.add(country_lbl);
	content.add(state_lbl);
	content.add(city_lbl);
	content.add(store_lbl);
	content.add(addr);
	content.add(addr_lbl);
	content.add(btn);
    
    self.add(header);
	self.add(content);
	return self;
};

module.exports = Storeselection;
