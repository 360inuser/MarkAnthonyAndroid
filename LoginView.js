function LoginView() {
  
	var self = Ti.UI.createView({	
	});
	
	
	var header = Ti.UI.createView({
		top:'0dp',
		height:'50dp',
		backgroundColor:'black'
	});
	var head_lbl = Ti.UI.createLabel({
		text:'LOGIN',
		color:'white'
	});
	
	
	var content = Ti.UI.createView({
		top:'50dp',
		height:'auto',
		backgroundColor:'white',
	})
	var user_log = Ti.UI.createLabel({
		text:'Username',
		color:'black',
		top:'60dp',
		left:'30dp',
	});
	var pass_log = Ti.UI.createLabel({
		text:'Password',
		color:'black',
		top:'110dp',
		left:'30dp',
	});
	var user_in = Ti.UI.createTextField({
		width:'165dp',
		top:'50dp',
		left:'120dp',
		returnKeyType:Titanium.UI.RETURNKEY_NEXT
	});
	var pass_in = Ti.UI.createTextField({
		passwordMask:true,
		width:'165dp',
		top:'100dp',
		left:'120dp',
		returnKeyType:Titanium.UI.RETURNKEY_DONE
	});
	var log_cbox = Ti.UI.createSwitch({
		style:Ti.UI.Android.SWITCH_STYLE_CHECKBOX,
		left:'120dp',
		top:'140dp',
	    title:'Remember Me',
	    color:'black'
	});
	var log_btn = Ti.UI.createButton({
		title:'Login',
		top:'200dp',
		width:'100dp',
		height:'auto'
	});
	
	
	user_in.addEventListener('return', function() {
    pass_in.focus();
    });
    
    Ti.App.addEventListener('clearlogin',function(e){
		user_in.value="";
		pass_in.value="";
		log_cbox.value=false;
	});
	
	Ti.App.addEventListener('rememberlogin',function(e){
		user_in.value=e.username;
		pass_in.value=e.password;
		log_cbox.value=true;
		rememberme_check();
	});
	

	function rememberme_check()
	{
		var dlg = Ti.UI.createActivityIndicator();
		dlg.setMessage('Please,Loading...');
		var url = "http://192.168.1.55:8080/enterprise_project/loginjsonparse";
		var xhr = Ti.Network.createHTTPClient({
    	onload: function(e) {
    		
    		
    		Ti.App.fireEvent('openhomepage',{
    			jsontext:this.responseText,
    			remember:log_cbox.value,
    			username:user_in.value,
    			password:pass_in.value
    		});
    		
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
    		json: "{'uname':'"+ user_in.value +"','pwd':'"+ pass_in.value +"'}"
		};
		
		xhr.open("POST", url);
		
		xhr.send(loginpost);  // request is actually sent with this statement
		dlg.show();
		
	}

	
	log_btn.addEventListener('click',function(e){
	    user_in.blur();
	    pass_in.blur();	
	    if(user_in.value=="" || pass_in.value=="")
		{
		alert("Enter the Username or Password");
		}
		else
		{
		rememberme_check();
		}
	});
	
	header.add(head_lbl);
	
	content.add(log_cbox);
	content.add(log_btn);
	content.add(user_in);
	content.add(pass_in);
	content.add(user_log);
	content.add(pass_log);
	
	self.add(content);
	self.add(header);
	return self;
};

module.exports = LoginView;
