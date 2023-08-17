/*
*
*
	all add function
*
*/

$('.frm_addroom').submit(function(e){
	e.preventDefault();
	var a = $('input[name="room_name"]');
	
	$.ajax({
		type: "POST",
		url: "../class/add/add",
		data: {
			name: a.val(),
			key: 'add_room'
		}
	})
	.done(function(data){
		a.val('');
		if(data == 1){
			toastr.success("Room added.");
			table_room.ajax.reload(null,false);
			$('.cancel_room').click();
		}
		else if(data == 2){
			toastr.warning("Room already exist");

		}else if(data == 0){
			toastr.error("Failed to add room");
			$('.cancel_room').click();

		}
	})
	.fail(function(data){
		console.log(data);
	});

});


$('.frm_student_sign').submit(function(e){
	e.preventDefault();
	var datas = $(this).serialize()+'&key=sign_student';	

	$.ajax({
		type: "POST",
		data: datas,
		url : '../class/add/add',
		beforeSend: function(){
			$('.btn_student').attr('disabled', true);
		}
	})
	.done(function(data){
		$('.btn_student').removeAttr('disabled');
		if(data == 1){
			
			toastr.success('Successfully signup', 'Redirecting page');
			setTimeout(function(){
				window.location = 'login';
			},3000);

		}else if(data == 2){
			toastr.warning('Employee already exist');
		}else if(data == 0){
			toastr.error('Failed to signup');
		}
	})
	.fail(function(data){
		console.log(data);
	});

});

$('.frm_faculty_sign').submit(function(e){
	e.preventDefault();
	var datas = $(this).serialize()+'&key=sign_faculty';

	$.ajax({
		type: "POST",
		data: datas,
		url : '../class/add/add'
	})
	.done(function(data){
		console.log(data);
		$('.btn_faculty').removeAttr('disabled');
		if(data == 1){
			
			toastr.success('Successfully signup', 'Redirecting page');
			setTimeout(function(){
				window.location = 'login';
			},3000);

		}else if(data == 2){
			toastr.warning('Company already exist');
		}else if(data == 0){
			toastr.error('Failed to signup');
		}
	})
	.fail(function(data){
		console.log(data);
	});

});


$('.frm_addequipment').submit(function(e){
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
		url: "../class/add/add",
		data: formData,
		async: true,
		cache: false,
		contentType: false,
		processData: false 
	})
	.done(function(data){
		console.log(data);
		if(data == 1){
			toastr.success("Item added.");
			table_equipment.ajax.reload(null,false);
			$('.cancel-equipment').click();
			$('.frm_addequipment').find('input').val('');
		}else if(data == 0){
			toastr.error("Failed to add item");
			$('.cancel-equipment').click();
			$('.frm_addequipment').find('input').val('');
		}
	})
	.fail(function(data){
		console.log(data);
	});

});


$(".frm_addmember").submit(function(e){
	e.preventDefault();

	var formData = new FormData($(this)[0]);

	console.log(formData);

	$.ajax({
		type: "POST",
		url: "../class/add/add",
		data: formData,
		contentType: false,
		cache: false,
		processData:false,
	})
	.done(function(data){
		if(data == 1){
			toastr.success("Members added successfully.");
			table_member.ajax.reload(null,false);
			$('.member-side').toggle(effect, options, duration);
		}else if(data == 0){
			toastr.error("Failed to add member");
			$('.member-side').toggle(effect, options, duration);
		}
	});

});


$('.item-add').click(function(){
    $('.equipment-info').toggle(effect, options, duration);
    var id = getequipmentid();
    console.log(id);
    var append = '  <form class="frm_eadditem">\
                        <h4 class="alert bg-success">Add Quantity</h4>\
                        <div class="form-group">\
                            <label>Quantity</label>\
                            <input type="number" name="item_qty" class="form-control" min="1" required autofocus="on">\
                            <input type="hidden" name="id" value="'+id+'">\
                            <input type="hidden" name="key" value="add_itemqty">\
                        </div>\
                        <div class="form-group">\
                            <button class="btn btn-danger cancel-equipmentinfo" type="button">Cancel</button>\
                            <button class="btn btn-primary" type="submit">Add</button>\
                        </div>\
                    </form>';

    $('.equipment-forminfo').html(append);

    $('form.frm_eadditem').submit(function(e){
        e.preventDefault();
        var c = $(this).serialize();

        $.ajax({
            type: "POST",
            url: "../class/add/add",
            data: c
        })
        .done(function(data){
        	var ab = data.split('|');
        	$('.e_stock').html(ab[0]);
        	$('.e_stockleft').html(ab[1]);
        	toastr.success('Successful');
        	$('.equipment-info').toggle(effect, options, duration);
        	$('input[name="item_qty"]').val('');
        });

    });
});


$('.frm_borrow').submit(function(e){
	e.preventDefault();
	var data = $(this).serialize()+'&key=add_borrower';
	$.ajax({
		type: "POST",
		url: "../class/add/add",
		data: data,
		dataType: 'json'
	})
	.done(function(data){
		
		if(data.response == 1)
		{
			toastr.success(data.message);
			$(".borrowitem").select2('val', 'All');
			$("select[name='borrow_membername']").select2('val', 'All');
			$.get('../views/printBorrow?borrowIds=' + data.borrowIds, function(htmlData){
	            var w = window.open();
	            w.document.write(htmlData);
	            w.setTimeout(function(){
	                w.print();  
	                w.close();
	            },250);
	        });
		}
		else
		{
			toastr.error(data.message);
		}
	});
});


$('.frmadd_users').submit(function(e){
	e.preventDefault();
	var data = $(this).serialize()+'&key=add_users';

	$.ajax({
		type: "POST",
		url: "../class/add/add",
		data: data
	})
	.done(function(data){
		console.log(data);
		if(data == 1){
			toastr.success('Successfully added.');
			table_user.ajax.reload(null,false);
			$('.user-side').toggle(effect, options, duration);
			$('.frmadd_users').find('input select').val('');
		}else if(data == 2){
			toastr.warning('Name or username already taken');
		}else{
			toastr.error('Failed to add');
		}
	});

});

$('.client_reservation').submit(function(e){
	e.preventDefault();
	var frmdata = $(this).serialize()+'&key=addclient_reservation';

	$.ajax({
		type: "POST",
		url: "../class/add/add",
		data: frmdata
	})
	.done(function(data){
		console.log(data);
		if(data == 1){
			toastr.success('Successful. Check your reservation status if your reservation was accomodated');
			$('input[name="reserved_date"]').val('');
			$('input[name="reserved_time"]').val('');
			$('select[name="reserve_room"]').val('');
			$(".client_reservation").find('select').select2('val', 'All');
			tbl_pendingres.ajax.reload(null,false);

		}else if(data == 2){
			toastr.warning('Your reservation cannot process. You can only make one reservation per day.');
			$('input[name="reserved_date"]').val('');
			$('input[name="reserved_time"]').val('');
			$('select[name="reserve_room"]').val('');
			$(".client_reservation").find('select').select2('val', 'All');
			tbl_pendingres.ajax.reload(null,false);
		}else{
			toastr.error('Your reservation cannot process right now.');
		}
	});

});

$('.add_student').click(function(){
	
	$('.divedit-member').toggle(effect, options, duration);

	var form = '<form class="frm_add_student">\
					<br/><br/><h4 class=""></h4>\
					<hr>\
					<div class="form-group">\
						<label>ID Number</label>\
						<input type="number" name="sid_number" class="form-control" required autocomplete="off">\
					</div>\
					<div class="form-group">\
						<label>First Name</label>\
						<input type="text" name="s_fname" class="form-control text-capitalize" required autocomplete="off">\
					</div>\
					<div class="form-group">\
						<label>Last Name</label>\
						<input type="text" name="s_lname" class="form-control text-capitalize" required autocomplete="off">\
					</div>\
					<div class="form-group">\
						<label>Gender</label>\
						<select name="s_gender" class="form-control" required>\
							<option disabled selected>Your gender</option>\
							<option>Male</option>\
							<option>Female</option>\
						</select>\
					</div>\
					<div class="form-group">\
						<label>Contact Number</label>\
						<input type="tel" name="s_contact" class="form-control" required autocomplete="off">\
					</div>\
					<div class="form-group">\
						<label>Department</label>\
						<select name="s_department" class="form-control" required>\
							<option disabled selected>Select department</option>\
							<option>AB</option>\
							<option>BEED</option>\
							<option>BSED</option>\
							<option>BSCE</option>\
							<option>BSHRM</option>\
							<option>BSIS</option>\
							<option>BSIT</option>\
						</select>\
					</div>\
					<div class="form-group hide">\
						<label>Major</label>\
						<input type="text" name="s_major" class="form-control" autocomplete="off">\
					</div>\
					<div class="form-group">\
						<div class="row">\
							<div class="col-md-6">\
								<label>Year</label>\
								<select name="s_year" class="form-control" required>\
									<option selected disabled>Select year</option>\
									<option>1st</option>\
									<option>2nd</option>\
									<option>3rd</option>\
									<option>4th</option>\
									<option>5th</option>\
								</select>\
							</div>\
							<div class="col-md-6">\
								<label>Section</label>\
								<input type="text" name="s_section" class="form-control text-capitalize" required autocomplete="off">\
							</div>\
						</div>\
					</div>\
					<div class="form-group">\
						<button class="btn btn-primary btn_faculty" type="submit"><i class="fa fa-plus"></i> Add</button>\
						<button class="btn btn-danger btn_frm_add" type="reset"><i class="fa fa-remove"></i> Cancel</button>\
					</div>\
				</form>';

		$('.member-form').html(form);
		$('.btn_frm_add').click(function(e){
			$('.divedit-member').toggle(effect, options, duration);
		});

		$('.frm_add_student').submit(function(e){
			e.preventDefault();
			var frmdata = $(this).serialize()+'&key=add_newstudent';

			$.ajax({
				type: "POST",
				url: "../class/add/add",
				data: frmdata
			})
			.done(function(data){
				// console.log(data);
				if(data == 1){
					toastr.success('Employee successfully added.');
					$('.btn_frm_add').click();
					table_member.ajax.reload(null,false);
					
				}else if(data == 2){
					toastr.warning('Employee already exist.');
				}else{
					toastr.error('Failed to add.');
				}
			});

		});

});

$('.add_faculty').click(function(){
	
	$('.divedit-member').toggle(effect, options, duration);

	var mform = '<form class="add_frm_faculty">\
					<br/><br/><h4 class=""></h4>\
					<hr>\
					<div class="form-group">\
						<label>ID Number</label>\
						<input type="number" name="f_id" class="form-control" required autocomplete="off">\
					</div>\
					<div class="form-group">\
						<label>First Name</label>\
						<input type="text" name="f_fname" class="form-control" required autocomplete="off">\
					</div>\
					<div class="form-group">\
						<label>Last Name</label>\
						<input type="text" name="f_lname" class="form-control" required autocomplete="off">\
					</div>\
					<div class="form-group">\
						<label>Gender</label>\
						<select name="f_gender" class="form-control" required>\
							<option disabled selected>Your gender</option>\
							<option>Male</option>\
							<option>Female</option>\
						</select>\
					</div>\
					<div class="form-group">\
						<label>Contact Number</label>\
						<input type="tel" name="f_contact" class="form-control" required autocomplete="off">\
					</div>\
					<div class="form-group">\
						<label>Department</label>\
						<select name="f_department" class="form-control" required>\
							<option disabled selected>Select department</option>\
							<option>CIT</option>\
							<option>COED</option>\
							<option>SAS</option>\
						</select>\
					</div>\
					<div class="form-group">\
						<button class="btn btn-primary btn_faculty" type="submit"><i class="fa fa-plus"></i> Add</button>\
						<button class="btn btn-danger btn_frm_add" type="reset"><i class="fa fa-remove"></i> Cancel</button>\
					</div>\
				</form>';

		$('.member-form').html(mform);

		$('.btn_frm_add').click(function(e){
			$('.divedit-member').toggle(effect, options, duration);
		});

		$('.add_frm_faculty').submit(function(e){
			e.preventDefault();
			var frmdata = $(this).serialize()+'&key=add_newfaculty';

			$.ajax({
				type: "POST",
				url: "../class/add/add",
				data: frmdata
			})
			.done(function(data){
				// console.log(data);
				if(data == 1){
					toastr.success('Company successfully added.');
					$('.btn_frm_add').click();
					table_member.ajax.reload(null,false);
					
				}else if(data == 2){
					toastr.warning('Company already exist.');
				}else{
						toastr.success('Company successfully added.');
					table_member.ajax.reload(null,false);
				}
			});

		});

});



