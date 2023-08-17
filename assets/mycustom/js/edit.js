// edit room
table_room.on('click', 'a.edit-room', function(e){
    e.preventDefault();
    
    $('.editroom-side').toggle(effect, options, duration);
    var data = table_room.row( $(this).parents('tr') ).data();
    var rm_name = data[0];
    var rm_id = data[2];
    $('input[name="edit_rm_name"]').val(rm_name);
    $('input[name="edit_rm_id"]').val(rm_id);

    $('.cancel_editroom').click(function(){
        $('.editroom-side').toggle(effect, options, duration);
    });

    $('.frm_editroom').submit(function(e){
        e.preventDefault();
        var a_name = $('input[name="edit_rm_name"]').val();

        if(a_name.toLowerCase() === rm_name.toLowerCase()){
	       	
	       	toastr.warning('No changes made');

        }else{
	       
        	var token = $(this).serialize()+'&key=edit_room';
	       	$.ajax({
	       		type: "POST",
	       		url: "../class/edit/edit",
	       		data: token
	       	})
	       	.done(function(data){
	       		if(data == 1){
	       			toastr.success('Room successfully updated.');
	       			$('.editroom-side').toggle(effect, options, duration);
	       			table_room.ajax.reload(null,false);
	       		}else if(data == 2){
	       			toastr.error('Room name already exist');
	       		}else if(data == 0){
	       			toastr.error('Failed to add room');
	       			$('.editroom-side').toggle(effect, options, duration);
	       		}
	       	})
	       	.fail(function(data){
	       		console.log(data);
	       	});

        }

    });
});


table_equipment.on('click', 'a.equip_details', function(e){
	e.preventDefault();
	
	var data = table_equipment.row( $(this).parents('tr') ).data();
	
    $('.equipment-view').toggle(effect, options, duration);

    $('.equipment-form').html('<div class="container-fluid">\
								<h4 class="alert bg-success">\
									<svg class="glyph stroked plus sign">\
										<use xlink:href="#stroked-plus-sign"/>\
									</svg>\
									Item Details\
								</h4>\
									<div class="form-group">\
										<label>Identification Key</label>\
										<input type="text" name="e_number" class="form-control" readonly value="'+data[0]+'">\
									</div>\
									<div class="form-group">\
										<label>Model</label>\
										<input type="text" name="e_number" class="form-control" readonly value="'+data[12]+'">\
									</div>\
									<div class="form-group">\
										<label>Category</label>\
										<input type="text" name="e_category" class="form-control" readonly value="'+data[6]+'">\
									</div>\
									<div class="form-group">\
										<label>Brand</label>\
										<input type="text" name="e_brand" class="form-control" readonly value="'+data[7]+'">\
									</div>\
									<div class="form-group">\
										<label>Description</label>\
										<textarea name="e_description" class="form-control" readonly>'+data[1]+'</textarea>\
									</div>\
									<div class="form-group">\
										<label>Quantity</label>\
										<input type="text" name="e_stock" class="form-control" value="'+data[2]+'" readonly>\
									</div>\
									<div class="form-group">\
										<label>Assign Room</label>\
										<input type="text" name="e_stock" class="form-control" value="'+data[3]+'" readonly>\
									</div>\
									<div class="form-group">\
										<label>Type</label>\
										<input type="text" name="e_type" class="form-control" readonly value="'+data[8]+'">\
									</div>\
									<div class="form-group">\
										<label>Status</label>\
										<input type="text" name="e_type" class="form-control" readonly value="'+data[4]+'">\
									</div>\
									<div class="form-group">\
										<button class="btn btn-block btn-success close-equipment">Close</button>\
									</div>\
							</div>');

    $('.close-equipment').click(function(e){
    	e.preventDefault();
    	$('.equipment-view').toggle(effect, options, duration);
    });

});

table_equipment.on('click', 'a.equip_moveroom', function(e){
	$('.equipment-view').toggle(effect, options, duration);


	var tr = table_equipment.row( $(this).parents('tr') ).data();
	var id = tr[10];
	var tbl_id = tr[9];

	$.ajax({
    type: "POST",
    url: "../class/display/display",
    data: {
        key: "display_roomtype1",
        id: id
	    }
	})
	.done(function(data){
	   if(data != 0 ){
	        var a = JSON.parse(data);
	        var select = '';
	        $.each(a, function(x,y){
	            select += '<option value="'+y[0]+'">'+y[1]+'</option>';
	        });
	        $('body select[name="e_assigned1"]').html(select);
	   }
	});

	var container = $('.equipment-form');
	var appendhtml = '	<div class="container-fluid">\
							<form class="frm_moveequip">\
								<h4 class="alert bg-success">\
									<svg class="glyph stroked plus sign">\
										<use xlink:href="#stroked-plus-sign"/>\
									</svg>\
									Move Room\
								</h4>\
								<div class="form-group">\
									<label>Current Room</label>\
									<input type="text" class="form-control" value="'+tr[3]+'" readonly>\
									<input type="hidden" name="current" value="'+id+'">\
								</div>\
								<div class="form-group">\
									<label>Move to</label>\
									<select class="form-control" name="e_assigned1">\
									</select>\
								</div>\
								<div class="form-group">\
									<label>No. of Items to move</label>\
									<input type="number" class="form-control" name="move_item" required="required">\
								</div>\
								<div class="form-group">\
									<button type = "button" class="btn btn-danger cancel-move">Cancel</button>\
									<button type = "submit" class="btn btn-success">Move</button>\
								</div>\
							</form>\
						</div>';

	container.html(appendhtml);
	$('.cancel-move').click(function(e){
		e.preventDefault();
		$('.equipment-view').toggle(effect, options, duration);
	});


	$('.frm_moveequip').submit(function(e){
		e.preventDefault();
		var vv = $(this).serialize()+'&key=edit_moveroom&tbl_id='+tbl_id;

		$.ajax({
			type: "POST",
			url: "../class/edit/edit",
			data: vv
		})
		.done(function(data){
			console.log(data);
			if(data == 1 ){
				toastr.success('Item moved successfully.');
				table_equipment.ajax.reload(null,false);				
				$('.equipment-view').toggle(effect, options, duration);
			}else{
				toastr.success('Failed to move.');				
				$('.equipment-view').toggle(effect, options, duration);
			}
		});
	});

});

$('.item-edit').click(function(){
    $('.equipment-info').toggle(effect, options, duration);

   var deviceid = $('.e_id').text();
	var e_category = $('.e_category').text();
	var e_model = $('.e_model').text();
	var e_brand = $('.e_brand').text();
	var e_description = $('.e_description').text();
	var e_stock = $('.e_stock').text();
	var e_stockleft = $('.e_stockleft').text();
	var e_assign = $('.e_assign').text();
	var e_type = $('.e_type').text();
	var e_status = $('.e_status').text();
	var e_photo= $('.e_photo').text();
	var e_mr= $('.e_mr').text();
	var e_price= $('.e_price').text();
	
	// console.log
	var id = getequipmentid();


     var append = '  <form class="frm_edititem">\
                        <h4 class="alert bg-success">Edit Item</h4>\
                        <div class="form-group">\
						<label>Device ID</label>\
							<input type="text" name="e_number" class="form-control" value="'+deviceid+'" required>\
							<input type="hidden" name="e_id" value="'+id+'">\
							<input type="hidden" name="key" value="edititem">\
						</div>\
						<div class="form-group">\
						<label>Photo</label>\
							<input type="file" name="e_photo" class="form-control" value="'+e_photo+'" required>\
						</div>\
						<label>Model</label>\
							<input type="text" name="e_model" class="form-control" value="'+e_model+'" required>\
						</div>\
						<div class="form-group">\
							<label>Category</label>\
							<select name="e_category" class="form-control" required>\
								<option selected>'+e_category+'</option>\
								<option>Mouse</option>\
								<option>Keyboard</option>\
								<option>Monitor</option>\
								<option>Projector</option>\
								<option>Remote</option>\
								<option>DLP Screen</option>\
								<option>Aircon</option>\
								<option>TV</option>\
								<option>AVR</option>\
								<option>Extension</option>\
								<option>UPS</option>\
								<option>Router</option>\
								<option>Table</option>\
								<option>Chair</option>\
								<option>Switch Hub</option>\
							</select> \
						</div>\
						<div class="form-group">\
							<label>Brand</label>\
							<input type="text" name="e_brand" class="form-control" value="'+e_brand+'" required>\
						</div>\
						<div class="form-group">\
							<label>Description</label>\
							<textarea name="e_description" class="form-control" required>'+e_description+'</textarea>\
						</div>\
						<div class="form-group">\
							<label>Type</label>\
							<select type="text" name="e_type" class="form-control" required>\
								<option selected>'+e_type+'</option>\
								<option>Consumable</option>\
								<option>Non-consumable</option>\
							</select>\
						</div>\
						</div>\
						<label>MR</label>\
							<input type="text" name="e_mr" class="form-control" value="'+e_mr+'" required>\
						</div>\
						</div>\
						<label>Price</label>\
							<input type="number" name="e_price" class="form-control" value="'+e_price+'" required>\
						</div>\
						<hr/>\
                        <div class="form-group">\
                            <button class="btn btn-danger cancel-equipmentinfo" type="button">Cancel</button>\
                            <button class="btn btn-primary" type="submit">Update</button>\
                        </div>\
                    </form>';

    $('.equipment-forminfo').html(append);

    $('.frm_edititem').submit(function(e){
    	e.preventDefault();
	var _this = $(this);
	var formData = new FormData();
	var fileData = _this.find('input[type="file"]').prop('files')[0];
	formData.append("e_photo",fileData);
	var otherFormData = _this.serializeArray();
	$.each(otherFormData,function(key,input){
		formData.append(input.name,input.value);
	});

	$.ajax({
		type: "POST",
		url: "../class/edit/edit",
		data: formData,
		async: true,
		cache: false,
		contentType: false,
		processData: false 
	})
	.done(function(data){
			toastr.success("Item successfully updated.");
			table_equipment.ajax.reload(null,false);
			$('.cancel-equipmentinfo').click();
			$('.frm_edititem').find('input').val('');
	})
	.fail(function(data){
		console.log(data);
	});


    });
});

$('.item-change').click(function(){
    $('.equipment-info').toggle(effect, options, duration);

    var id = getequipmentid();
   	var status = $('.e_status').html();
   	var stock = $('.e_stockleft').html(); 

   	$.ajax({
   		type: "POST",
   		url: "../class/display/display",
   		data: {
   			key: 'view_equipment',
   			id: id
   		}
   	})
   	.done(function(data){
   		console.log(data);
   		var ndata = JSON.parse(data);
   		var ss = "";

   		$.each(ndata, function(x,y){
   			ss += "<option value='"+y[1]+"' selected>"+y[0]+"</option>";
   		});

   		$('body select[name="change_room"]').html(ss);

   	});

   	// <option value="Old">Old</option>\
    //

    var append = '  <form class="frm_echangeitem">\
                        <h4 class="alert bg-success">Change item status</h4>\
                        <div class="form-group">\
                            <label>Status</label>\
                            <select name="change_status" class="form-control" required="required">\
                             	<option value="2">Old</option>\
                             	<option value="3">Lost</option>\
                            	<option value="4">Damage</option>\
                            </select>\
                            <input type="hidden" name="id" value="'+id+'">\
                            <input type="hidden" name="key" value="edit_equipmentstatus">\
                        </div>\
                        <div class="form-group hide">\
                            <label>From room</label>\
                            <select name="change_room" class="form-control" required="required">\
                            </select>\
                        </div>\
                        <div class="form-group">\
                        	<label>No. of Items</label>\
                            <input type="number" name="item_emove" min="1" max="'+stock+'" class="form-control" required>\
                        </div>\
                        <div class="form-group">\
                        	<label>Remarks</label>\
                        	<textarea class="form-control" name="e_remarks" required></textarea>\
                        </div>\
                        <div class="form-group">\
                            <button class="btn btn-danger cancel-equipmentinfo" type="button">Cancel</button>\
                            <button class="btn btn-primary" type="submit">Update</button>\
                        </div>\
                    </form>';

	$('.equipment-forminfo').html(append);

	// $('select[name="change_status"]').val(status);
	// $('select[name="change_status"] option[value='+status+']').attr('disabled','disabled');
	// $("select[name='change_status'] option:contains('"+status+"')").attr("disabled","disabled").addClass('hide');	

	$('.frm_echangeitem').submit(function(e){
		e.preventDefault();
		var aa = $(this).serialize();

		$.ajax({
			type: "POST",
			data: aa,
			url: "../class/edit/edit"
		})
		.done(function(data){
			console.log(data);
			$('.equipment-info').toggle(effect, options, duration);
			toastr.success(data);

			setTimeout(function(){
				window.location.reload();
			},3000);
			
		});


	});

});


tbl_borrow.on('click', 'button', function(e){
	e.preventDefault();

	var id = $(this).attr('data-id');

	$.ajax({
		type: "POST",
		data: {
			id: id,
			key: 'return_item'
		},
		url: "../class/edit/edit"
	})
	.done(function(data){
		console.log(data);
		if(data != 0){
			toastr.success('Successully returned items');
			tbl_borrow.ajax.reload(null,false);
			tbl_return.ajax.reload(null,false);
		}else{
			toastr.error('Failed');
		}
	});

});


table_member.on('click', 'a.edit-member', function(e){
	e.preventDefault();
	$('.divedit-member').toggle(effect, options, duration);
	var tr = table_member.row( $(this).parents('tr') ).data();
	var yrs = tr[5].split('-');

	var form = '<form class="frm_student_sign">\
					<hr>\
					<div class="form-group">\
						<label>ID Number</label>\
						<input type="number" name="sid_number" value="'+tr[0]+'" class="form-control" required autocomplete="off">\
					</div>\
					<div class="form-group">\
						<label>First Name</label>\
						<input type="text" name="s_fname" class="form-control" value="'+tr[8]+'" required autocomplete="off">\
					</div>\
					<div class="form-group">\
						<label>Last Name</label>\
						<input type="text" name="s_lname" class="form-control" value="'+tr[9]+'" required autocomplete="off">\
					</div>\
					<div class="form-group">\
						<label>Gender</label>\
						<select name="s_gender" class="form-control" required>\
							<option selected>'+tr[2]+'</option>\
							<option>Male</option>\
							<option>Female</option>\
						</select>\
					</div>\
					<div class="form-group">\
						<label>Contact Number</label>\
						<input type="tel" name="s_contact" class="form-control" value="'+tr[3]+'" required autocomplete="off">\
					</div>\
					<div class="form-group">\
						<label>Department</label>\
						<select name="s_department" class="form-control" required>\
							<option selected>'+tr[4]+'</option>\
							<optgroup label ="STUDENT">\
							<option>AB</option>\
							<option>BEED</option>\
							<option>BSED</option>\
							<option>BSCE</option>\
							<option>BSHRM</option>\
							<option>BSIS</option>\
							<option>BSIT</option>\
							</optgroup>\
							<optgroup label="FACULTY">\
							<option>CIT</option>\
							<option>COED</option>\
							<option>SAS</option>\
							</optgroup>\
						</select>\
					</div>\
					<div class="form-group">\
						<div class="row">\
							<div class="col-md-6">\
								<label>Year</label>\
								<select name="s_year" class="form-control" required>\
									<option selected>'+yrs[0]+'</option>\
									<option>      </option>\
									<option>1st</option>\
									<option>2nd</option>\
									<option>3rd</option>\
									<option>4th</option>\
									<option>5th</option>\
								</select>\
							</div>\
							<div class="col-md-6">\
								<label>Section</label>\
								<input type="text" name="s_section" class="form-control" value="'+yrs[1]+'" required autocomplete="off">\
								<input type="hidden" name="app_id" value="'+tr[10]+'">\
							</div>\
						</div>\
					</div>\
					<div>\
						<label>Type</label>\
						<select name="s_type" class="form-control" required>\
							<option selected>'+tr[6]+'</option>\
							<option disabled>Employee</option>\
							<option disabled>Company</option>\
						</select><br/>\
					</div>\
					<div class="form-group">\
						<button class="btn btn-primary" type="submit">Update</button>\
						<button class="btn btn-danger cancelmember" type="button">Cancel</button>\
					</div>\
				</form>';
	$('.member-form').html(form);


	$('body .cancelmember').click(function(){
		$('.divedit-member').toggle(effect, options, duration);
	});


	$('.frm_student_sign').submit(function(e){
		e.preventDefault();
		var frmdata = $(this).serialize()+'&key=edit_member';

		$.ajax({
			type: "POST",
			url: "../class/edit/edit",
			data: frmdata
		})
		.done(function(data){
			console.log(data);
			if(data == 1){
				table_member.ajax.reload(null,false);
				toastr.success('Successully updated');
				$('.divedit-member').toggle(effect, options, duration);
			}else{
				toastr.error('Failed to update');
				$('.divedit-member').toggle(effect, options, duration);
			}
		});
	});

});

table_member.on('click', '.activate-member', function(e){
	e.preventDefault();
	var tr = table_member.row( $(this).parents('tr') ).data();
	id = tr[10];

	$.ajax({
		type: "POST",
		url: "../class/edit/edit",
		data: {
			id: id,
			key: 'activate_member'
		}
	})
	.done(function(data){
		console.log(data);
		if(data == 1){
			toastr.success('Borrower successfully activate');
			table_member.ajax.reload(null,false);
		}else{
			toastr.error('Failed to activate');
		}
	});

});

table_member.on('click', '.deactivate-member', function(e){
	e.preventDefault();
	var tr = table_member.row( $(this).parents('tr') ).data();
	id = tr[10];

	$.ajax({
		type: "POST",
		url: "../class/edit/edit",
		data: {
			id: id,
			key: 'deactivate_member'
		}
	})
	.done(function(data){
		console.log(data);
		if(data == 1){
			toastr.success('Borrower successfully deactivate');
			table_member.ajax.reload(null,false);
		}else{
			toastr.error('Failed to deactivate');
		}
	});

});

table_user.on('click', 'a.edit-user', function(e){
	e.preventDefault();
	$('.userdiv').toggle(effect, options, duration);
	var tr = table_user.row( $(this).parents('tr') ).data();
	var id = tr[4];
	// console.log(tr[0])


	var form = '<form class="edit_user">\
				<br><br><br><h4 class="alert bg-success">Edit User</h4>\
				<div class="form-group">\
					<label>Name</label>\
					<input type="text" name="u_fname" class="form-control" value="'+tr[0]+'" required="required">\
				</div>\
				<div class="form-group">\
					<label>Username</label>\
					<input type="text" name="u_username" class="form-control" value="'+tr[2]+'" required="required">\
				</div>\
				<div class="form-group">\
					<input type="hidden" name="u_id" class="form-control" value="'+id+'" required="required">\
				</div>\
				<div class="form-group">\
					<label>User Type</label>\
					<select class="form-control" name="u_type" required="required">\
						<option disabled selected value="">'+tr[1]+'</option>\
						<option value="1">Administrator</option>\
						<option value="2">Staff/ Sudent Assistant</option>\
					</select>\
				</div>\
				<div class="form-group">\
					<div class="row">\
						<div class="col-md-6">\
							<button class="btn btn-danger btn-block cancel_edituser" type="button">\
								CANCEL\
							</button>\
						</div>\
						<div class="col-md-6">\
							<button class="btn btn-primary btn-block" type="submit">\
								UPDATE\
							</button>\
						</div>\
					</div>\
				</div>\
			</form>';
	$('.edit-userside').html(form);

	$('.cancel_edituser').click(function(e){
		e.preventDefault();
		$('.userdiv').toggle(effect, options, duration);
	});

	$('.edit_user').submit(function(e){
		e.preventDefault();
		var frm_data = $(this).serialize()+'&key=edit_user';

		$.ajax({
			type: "POST",
			url: "../class/edit/edit",
			data: frm_data
		})
		.done(function(data){
			console.log(data);
			if(data == 1){
				table_user.ajax.reload(null,false);
				toastr.success('Successully updated');
				$('.userdiv').toggle(effect, options, duration);
			}else{
				toastr.error('Failed to update');
				$('.userdiv').toggle(effect, options, duration);
			}
		});

	})

});

table_user.on('click', 'a.activate-user', function(e){
	e.preventDefault();
	var tr = table_user.row( $(this).parents('tr') ).data();
	var id = tr[4];

	$('.userdiv').toggle(effect, options, duration);

	$.ajax({
		type: "POST",
		url: "../class/edit/edit",
		data: {
			id: id,
			key: 'activate_user'
		}
	})
	.done(function(data){
		if(data == 1){
			toastr.success('User successfully activate');
			table_user.ajax.reload(null,false);
		}else{
			toastr.error('Failed to activate');
		}
	});

});

table_user.on('click', 'a.deactivate-user', function(e){
	e.preventDefault();
	var tr = table_user.row( $(this).parents('tr') ).data();
	var id = tr[4];

	$.ajax({
		type: "POST",
		url: "../class/edit/edit",
		data: {
			id: id,
			key: 'deactivate_user'
		}
	})
	.done(function(data){
		if(data == 1){
			toastr.success('User successfully deactivate');
			table_user.ajax.reload(null,false);
		}else{
			toastr.error('Failed to deactivate');
		}
	});

});


table_user.on('click', 'a.edit-upass', function(e){
	e.preventDefault();

	$('.userdiv').toggle(effect, options, duration);
	var tr = table_user.row( $(this).parents('tr') ).data();
	var id = tr[4];

	var form = '<form class="changepass">\
				<br><br><br><h4 class="alert bg-success">Change Password</h4>\
				<div class="form-group">\
					<label>Current Password</label>\
					<input type="password" name="c_pass" class="form-control" value="'+tr[5]+'" required="required" disabled>\
				</div>\
				<div class="form-group">\
					<label>New Password</label>\
					<input type="password" name="n_pass" class="form-control" required="required">\
					<input type="checkbox" class="click_show"> <span class="show-text">Show password</span>\
				</div>\
				<div class="form-group">\
					<input type="hidden" name="u_id" class="form-control" value="'+id+'" required="required">\
				</div>\
				<div class="form-group">\
					<div class="row">\
						<div class="col-md-6">\
							<button class="btn btn-danger btn-block cancel_changeuser" type="button">\
								CANCEL\
							</button>\
						</div>\
						<div class="col-md-6">\
							<button class="btn btn-primary btn-block" type="submit">\
								UPDATE\
							</button>\
						</div>\
					</div>\
				</div>\
			</form>';
	$('.edit-userside').html(form);

	$('.cancel_changeuser').click(function(e){
		e.preventDefault();
		$('.userdiv').toggle(effect, options, duration);
	});

	$('.click_show').change(function(){
		var a = this.checked;
		if(a === true){
			$('.show-text').text('Hide password');
			$('input[name="n_pass"]').attr('type', 'text');
		}else{
			$('.show-text').text('Show password');
			$('input[name="n_pass"]').attr('type', 'password');
		}
	});

	$('.changepass').submit(function(e){
		e.preventDefault();
		var frmdata = $(this).serialize()+'&key=changepassword';
		$.ajax({
			type: "POST",
			url: "../class/edit/edit",
			data: frmdata
		})
		.done(function(data){
			$('.userdiv').toggle(effect, options, duration);
			if(data == 1){
				toastr.success('Password successfully changed');
				table_user.ajax.reload(null,false);
			}else{
				toastr.error('Password failed to change');
			}
		});

	});

	
});



tbl_pendingres.on('click', 'button.btn-accept', function(e){
	e.preventDefault();
	var a = $(this).attr('data-id');
	$.ajax({
		type: "POST",
		url: "../class/edit/edit",
		data: {
			key: 'accept_reservation',
			code: a
		}
	})
	.done(function(data){
		console.log(data);
		if(data > 0){
			toastr.success('Successully accept reservation');
			tbl_pendingres.ajax.reload(null,false);
			tbl_reserved.ajax.reload(null,false);
		}else{
			toastr.error('Failed to accept reservation');
		}
	});
});

tbl_pendingres.on('click', 'button.btn-cancel', function(e){
	e.preventDefault();
	var a = $(this).attr('data-id');
	$('input[name="codereserve"]').val(a);

	$('.modal').modal('show');
	// $.ajax({
	// 	type: "POST",
	// 	url: "../class/edit/edit",
	// 	data: {
	// 		key: 'cancel_reservation',
	// 		code: a
	// 	}
	// })
	// .done(function(data){
	// 	console.log(data);
	// 	if(data > 0){
	// 		toastr.success('Successfully cancelled reservation');
	// 		tbl_pendingres.ajax.reload(null,false);
	// 		tbl_reserved.ajax.reload(null,false);
	// 	}else{
	// 		toastr.error('Failed to cancel reservation');
	// 	}
	// });
});

$('.frm_cancelreservation').submit(function(e){
	e.preventDefault();
	var ab = $(this).serialize()+'&key=cancel_reservation';
	console.log(ab);
	$.ajax({
		type: "POST",
		url: "../class/edit/edit",
		data: ab
	})
	.done(function(data){
		console.log(data);
		$('.modal').modal('hide');
		if(data > 0){
			toastr.success('Successfully cancelled reservation');
			tbl_pendingres.ajax.reload(null,false);
			tbl_reserved.ajax.reload(null,false);
		}else{
			toastr.error('Failed to cancel reservation');
		}
	});
});


tbl_reserved.on('click', 'button.borrowreserve', function(e){
	e.preventDefault();
	var a = $(this).attr('data-id');
	

	$.ajax({
		type: "POST",
		dataType: 'json',
		url: "../class/edit/edit",
		data: {
			key: 'borrowreserve',
			code: a
		}
	})
	.done(function(data){
		console.log(data);
		if(data.response == 1){
			toastr.success('Successfully borrowed reservation');
			tbl_pendingres.ajax.reload(null,false);
			tbl_reserved.ajax.reload(null,false);

			$.get('../views/printBorrow?borrowIds=' + data.borrowIds, function(htmlData){
	            var w = window.open();
	            w.document.write(htmlData);
	            w.setTimeout(function(){
	                w.print();  
	                w.close();
	            },250);
	        });

		}else{
			toastr.error('Failed to borrow reservation');
		}
	});

});