//Application Window Component Constructor
function ApplicationWindow() {
  //load component dependencies
	
	var androidreviewtableloadevent = false;
	var androidaddedeventwinload = false;
	Ti.App.is_click_new_audit=false;
	//Ti.App.audit=0;
	Ti.App.appdetails=[];
	Ti.App.proarray=[];
	var LoginView = require('ui/common/android/LoginView'),
		Homepage = require('ui/common/android/Homepage'),
		Storeselection=require('ui/common/android/Storeselection'),
		Storeinfo=require('ui/common/android/Storeinfo'),
		Reviewmyaudict=require('ui/common/android/Reviewmyaudit'),
		Productsinfo=require('ui/common/android/Productsinfo');
		
	//create component instance
	var self = Ti.UI.createWindow({
		backgroundColor:'#ffffff',
		fullscreen:true,
		navBarHidden:true,
		exitOnClose:true
	});
		
	//construct UI
	var loginView = new LoginView();
	
	var homepage = new Homepage();
	var homepageWindow = Ti.UI.createWindow({
			fullscreen:true,
			navBarHidden:true,
			backgroundColor:'#ffffff'
		});
		
	var storepage=new Storeselection();
	var storepageWindow = Ti.UI.createWindow({
			fullscreen:true,
			navBarHidden:true,
			backgroundColor:'#ffffff'
		});
		
	var storeinfo=new Storeinfo();
	var storeinfoWindow = Ti.UI.createWindow({
			fullscreen:true,
			navBarHidden:true,
			backgroundColor:'#ffffff'
		});
		
	var review=new Reviewmyaudict();
	var reviewWindow = Ti.UI.createWindow({
			fullscreen:true,
			navBarHidden:true,
			backgroundColor:'#ffffff'
		});	
		
	var product=new Productsinfo();
	var productWindow = Ti.UI.createWindow({
			fullscreen:true,
			navBarHidden:true,
			backgroundColor:'#ffffff'
		});
		
	
			
	self.orientationModes=[Titanium.UI.PORTRAIT];
	homepageWindow.orientationModes=[Titanium.UI.PORTRAIT];
	storepageWindow.orientationModes=[Titanium.UI.PORTRAIT];
	storeinfoWindow.orientationModes=[Titanium.UI.PORTRAIT];
	reviewWindow.orientationModes=[Titanium.UI.PORTRAIT];
	productWindow.orientationModes=[Titanium.UI.PORTRAIT];
	
	productWindow.addEventListener('android:back', function (e) {
		//alert(productWindow.g)
		//productWindow.close();
		Ti.App.test='close';
		
		Ti.App.fireEvent('backbutton',e);
		//alert(Ti.App.test);
		
		if(Ti.App.test == 'close')
		{
			 		Ti.App.fireEvent('clearorder');
    	     		Ti.App.productarray=[];
		     		Ti.App.appdetails=[];
		    		Ti.App.orderarray1=[];
		    		Ti.App.selfarray=[];
		    		productWindow.close();
			
		}
		else
		{
			Ti.App.test='close';
		}
		
		
	});
	
	
	Ti.App.addEventListener('openhomepage',function(e){
		    //alert(e.remember);
		
		    var login_check=JSON.parse(e.jsontext);
		    //Ti.App.appdetails.push({userid:login_check.uid});
		   
        	if(login_check.Success == 0)
        	{
        		alert(login_check.ErrorMessage);
        	}
        	else if(login_check.Success==1)
        	{
        		//alert('Login Successfully!');
        		if(e.remember)
        		{
        		   remember_add_db(e.username,e.password);	
        		}
        		else
        		{
        			var db=Titanium.Database.open("remember_db");
        			try
        			{
        				db.execute("Delete From remember_login");
        			}
        			catch(e)
        			{
        				
        			}	
        		}
        		Ti.App.current_user_id=login_check.uid;
        		Ti.App.current_user=login_check.uname;
        		Ti.App.user_created_time=login_check.created;
        		homepageWindow.add(homepage);
	            homepageWindow.open();
	            Ti.App.fireEvent('changeusername',{});
        	}
		
	});
	
	homepageWindow.addEventListener('android:back', function (e) {
		//alert('pressed back button!');
		
		var activity = Titanium.Android.currentActivity;
        activity.finish();

		
	});
	
	function remember_add_db(username,password)
	{
		var db=Titanium.Database.open("remember_db");
		var return_details=new Array();
	    db.execute('create table if not exists remember_login(uname TEXT,pwd TEXT)');
	    var records=db.execute('Select * from remember_login');
		if(!records.isValidRow())
		{
			//alert('inserted');
			db.execute("Insert into remember_login values('"+ username +"','"+ password +"')");
		}
	    else
	    {
	    	db.execute("Delete From remember_login");
	    	db.execute("Insert into remember_login values('"+ username +"','"+ password +"')");
	    }
	}
	
	function remember_db_check(){
		var db=Titanium.Database.open("remember_db");
		var return_details=new Array(3);
		
	    
	    db.execute('create table if not exists remember_login(uname TEXT,pwd TEXT)');
	    var records=db.execute('Select * from remember_login');
		if(!records.isValidRow())
		{
		 return_details[0]='NO';	
		//Ti.API.info('Empty Table!');
		//db.execute("Insert into employee_login values('praveen','360i')");
		 
		}
		else
		{
			return_details[0]='YES';
			try
			{
				while(records.isValidRow())
				{
					
					return_details[1]=records.fieldByName("uname").toString();
					return_details[2]=records.fieldByName("pwd").toString()
					records.next();
				}
			}
			catch(ex)
			{
				
				Ti.API.info("Error:>>>>"+ex.toString());
			}
			
			
		}
		
		return return_details;
	}
	
	
	
	Ti.App.addEventListener('loginload',function(e){
		//alert('loaded');
		
		var details=remember_db_check();
		if(details[0]=='YES')
		{
			//alert('Remember Correct!');
			Ti.App.fireEvent('rememberlogin',{
				username:details[1],
				password:details[2]
			})
		}
		
	});
	
	
	homepage.addEventListener('click', function(e) {
		if(e.source.title=='Logout')
		{
			var db=Titanium.Database.open("remember_db");
			try
			{
				db.execute("Delete From remember_login");
			}
			catch(e)
			{
				
			}
			homepageWindow.close();
			Ti.App.fireEvent('clearlogin',{});
		}
		if(e.source.title=='New Audit')
		{
			//Ti.App.audit=1;
			//Ti.App.removeEventListener('ordered_pro_load',Ti.App.load_orderedproduct);
			Ti.App.poid=0;
			Ti.App.is_click_new_audit=true;
			if(!androidaddedeventwinload)
			{
			 
			  Ti.App.addEventListener('winload',Ti.App.load_products);	
			  androidaddedeventwinload=true;
			}
			storepageWindow.add(storepage);
			storepageWindow.open();
			Ti.App.fireEvent('storepageloaddropdown');
			
			
		}
		if(e.source.title=='Review My Audit')
		{
			//Ti.App.audit=0;
			//Ti.App.removeEventListener('winload',Ti.App.load_global);
			if(!androidreviewtableloadevent)
			{
			  Ti.App.addEventListener('ordered_pro_load',Ti.App.load_orderedproduct);
			  androidreviewtableloadevent=true;
			}
			reviewWindow.add(review);
			reviewWindow.open();
			Ti.App.fireEvent('reviewload',{});
		}
	});
	
	
	storepage.addEventListener('click', function(e) {
		if(e.source.title=='Back')
		{
			storepageWindow.close();
			///Ti.App.fireEvent('storepageloaddropdown');
		}
		
	
	});
	
	storepageWindow.addEventListener('android:back', function (e) {
		
		//Ti.App.fireEvent('storepageloaddropdown');
		storepageWindow.close();
		
	});
	
	
	Ti.App.addEventListener('openstoreinfopage',function(e){
		
		//Ti.App.appdetails.push({country:e.country,state:e.state,city:e.city,store:e.store});
		storeinfoWindow.add(storeinfo);
	    storeinfoWindow.open();	
	    Ti.App.fireEvent('storeinfoback');
	    	//alert(Ti.App.appdetails[0].country.toString());
	    Ti.App.fireEvent('autofillstoreinfo',{
	    	country: e.country,
	    	state:e.state,
	    	city:e.city,
	    	store:e.store
	    });
	    	
	});
	
	
	storeinfo.addEventListener('click', function(e) {
		if(e.source.title=='Back')
		{
			Ti.App.poid=0;
			storeinfoWindow.close();
			
		}
		
	
	});
	
	storeinfoWindow.addEventListener('android:back', function (e) {
		Ti.App.poid=0;
		Ti.App.fireEvent('storeinfoback');
		storeinfoWindow.close();
		
	});
	
	
	Ti.App.addEventListener('openproductpage',function(e){
		try{
			//alert('come events');
			//Ti.App.appdetails=[];
			//Ti.App.appdetails.push({str_id:e.str_id,store_ava:e.stravailable,store:e.strname,address:e.address,phone:e.phone,ppg:e.ppg,order:e.order,delay:e.delay,callfreq:e.call,account:e.accclass,manager:e.manager,assistant:e.assistant,rtd:e.rtdmanager,beer:e.beermanager,procon:e.proconin});
			Ti.App.str_idapp=e.str_id;
			Ti.App.store_avaapp=e.stravailable;
			Ti.App.storeapp=e.strname;
			Ti.App.addressapp=e.address;
			Ti.App.phoneapp=e.phone;
			Ti.App.ppgapp=e.ppg;
			Ti.App.orderapp=e.order;
			Ti.App.delayapp=e.delay;
			Ti.App.callfreqapp=e.call;
			Ti.App.accountapp=e.accclass;
			Ti.App.managerapp=e.manager;
			Ti.App.assistantapp=e.assistant;
			Ti.App.rtdapp=e.rtdmanager;
			Ti.App.beerapp=e.beermanager;
			Ti.App.procon=e.proconin;
			
			productWindow.add(product);
			productWindow.open();
			if(Ti.App.poid == 0 || Ti.App.poid== null)
			{
				Ti.App.fireEvent('products_load',{});
			}
			else
			{
				Ti.App.fireEvent('ordered_pro_load',Ti.App.load_orderedproduct);				
			}
		}
		catch(e)
		{
			alert(e.toString());
		}
	});
	
	review.addEventListener('click', function(e) {
		if(e.source.title=='Back')
		{
			reviewWindow.close();
		}
		});
		Ti.App.addEventListener('storeinfowindowopen',function(e){
			Ti.App.fireEvent('storeinfoback');
			storeinfoWindow.add(storeinfo);
			storeinfoWindow.open();
		});
			
		
	
	
	
	
	product.addEventListener('click', function(e) {
		if(e.source.title=='Back')
		{
			//alert(Ti.App.test);
			if(Ti.App.test == 'close')
			{
			Ti.App.fireEvent('backbutton',e);
			Ti.App.test='open';
			//productWindow.close();
			}
			else
			{
			 Ti.App.yesorno.show();
			 Ti.App.yesorno.addEventListener('click',function(e){
			 	if(e.index==0)
			 	{
			 		Ti.App.fireEvent('clearorder');
    	     		Ti.App.productarray=[];
		     		Ti.App.appdetails=[];
		    		Ti.App.orderarray1=[];
		    		Ti.App.selfarray=[];
		    		productWindow.close();
			 	}
			 });
		 	 
		    }
			
		}
   
	});
	
	Ti.App.addEventListener('close_windows',function(e){
			productWindow.close();
			storeinfoWindow.close();
			storepageWindow.close();
			reviewWindow.close();
	});
	
	
	
	
	
	self.add(loginView);
	return self;
}

//make constructor function the public component interface
module.exports = ApplicationWindow;
