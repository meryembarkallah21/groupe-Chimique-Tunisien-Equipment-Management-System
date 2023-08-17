var table_room =  $('.table_room').DataTable({
			"fnRowCallback": function( nRow, aData, iDisplayIndex, iDisplayIndexFull ) {
                    if ( aData[0] == "Room 310" )
                    {
                        $('td', nRow).css('background-color', 'skyblue');
                    }
                },
		"ajax":
		{
			"url": "../class/display/display",
			"type": "POST",
			"data": {
				"key": "display_room"
			}
		},
		"columns": 
		[
			{
				"data": [0],
				"className": "text-center"
			},
			{
				"data": [1],
				"className": "text-center"
			},
			{
				"data": [2],
				"className": "text-center",
				"visible": false 
			}
		],
		dom: "Bfrtip",
		buttons: [
			{
				extend: "copy",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0]
				}
			},
			{
				extend: "csv",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0]
				}
			},
			{
				extend: "excel",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0]
				}
			},
			{
				extend: "pdfHtml5",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0]
				}
			},
			{
				extend: "print",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0]
				},
				message: '<img src="LMS/assets/mycustom/js/logo.png" height="100px" width="100px" style="position: absolute;top:0;left:80px;"><center><h4 style="margin-top:-40px;">REPUBLIC OF THE PHILIPPINES</h4>\
							<h5>CARLOS HILADO MEMORIAL STATE COLLEGE</h5>\
							<h6>DEPARTMENT OF INFORMATION SYSTEMS</h6>\
							</center>',
				customize: function ( win ) {
					$(win.document.body).find( 'table' ).append('<br<br/><br><br><br><h4 class="">Noted by:</h4><br><br><br><br><br><h4 class="">Prepared by:</h4>');
				}
			}
		]
});	
var table_member =  $('.table_member').DataTable({
	"ajax":
		{
			"url": "../class/display/display",
			"type": "POST",
			"data": {
				"key": "display_member"
			}
		},
		"columns": 
		[
			{
				"data": [0],
				"className": "text-center"
			},
			{
				"data": [1],
				"className": "text-center"
			},
			{
				"data": [2],
				"className": "text-center",
				"visible": false
			},
			{
				"data": [3],
				"className": "text-center",
				"visible": false
			},
			{
				"data": [4],
				"className": "text-center"
			},
			{
				"data": [6],
				"className": "text-center"
			},
			{
				"data": [5],
				"className": "text-center"
			},
			{
				"data": [7],
				"className": "text-center"
			},
			{
				"data": [2],
				"className": "text-center",
				"visible": false 
			},
			{
				"data": [8],
				"className": "text-center",
				"visible": false 
			},
			{
				"data": [9],
				"className": "text-center",
				"visible": false 
			},
			{
				"data": [10],
				"className": "text-center",
				"visible": false 
			}
		],
		dom: "Bfrtip",
		buttons: [
			{
				extend: "copy",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4,5,6]
				}
			},
			{
				extend: "csv",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4,5,6]
				}
			},
			{
				extend: "excel",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4,5,6]
				}
			},
			{
				extend: "pdfHtml5",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4,5,6]
				}
			},
			{
				extend: "print",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4,5,6]
				},
				message: '<img src="http://4.bp.blogspot.com/_5ydAHJv4lKc/TSm6Sr4vMWI/AAAAAAAAAAQ/B3oGPh3_26k/s1600/logo.png" height="100px" width="100px" style="position: absolute;top:0;left:80px;"><center><h4 style="margin-top:-40px;">REPUBLIC OF THE PHILIPPINES</h4>\
							<h5>CARLOS HILADO MEMORIAL STATE COLLEGE</h5>\
							<h6>DEPARTMENT OF INFORMATION SYSTEMS</h6>\
							</center>',
				customize: function ( win ) {
					$(win.document.body).find( 'table' ).append('<br<br/><br><br><br><h4 class="">Noted by:</h4><br><br><br><br><br><h4 class="">Prepared by:</h4>');
				}
			}
		]
});	
var table_user =  $('.table_user').DataTable({
		"ajax":
		{
			"url": "../class/display/display",
			"type": "POST",
			"data": {
				"key": "display_user"
			}
		},
		"columns": 
		[
			{
				"data": [0],
				"className": "text-center"
			},
			{
				"data": [1],
				"className": "text-center"
			},
			{
				"data": [2],
				"className": "text-center"
			},
			{
				"data": [3],
				"className": "text-center"
			},
			{
				"data": [4],
				"className": "text-center",
				"visible": false
			},
			{
				"data": [5],
				"className": "text-center",
				"visible": false
			}
		],
		dom: "Bfrtip",
		buttons: [
			{
				extend: "copy",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2]
				}
			},
			{
				extend: "csv",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2]
				}
			},
			{
				extend: "excel",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2]
				}
			},
			{
				extend: "pdfHtml5",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2]
				}
			},
			{
				extend: "print",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2]
				},
				message: '<img src="http://4.bp.blogspot.com/_5ydAHJv4lKc/TSm6Sr4vMWI/AAAAAAAAAAQ/B3oGPh3_26k/s1600/logo.png" height="100px" width="100px" style="position: absolute;top:0;left:80px;"><center><h4 style="margin-top:-40px;">REPUBLIC OF THE PHILIPPINES</h4>\
							<h5>CARLOS HILADO MEMORIAL STATE COLLEGE</h5>\
							<h6>DEPARTMENT OF INFORMATION SYSTEMS</h6>\
							</center>',
				customize: function ( win ) {
					$(win.document.body).find( 'table' ).append('<br<br/><br><br><br><h4 class="">Noted by:</h4><br><br><br><br><br><h4 class="">Prepared by:</h4>');
				}
			}
		]
});	

var table_equipment = $('.table_equipment').DataTable({
	"ajax":
		{
			"url": "../class/display/display",
			"type": "POST",
			"data": {
				"key": "display_equipment"
			}
		},
		"columns": 
		[
			{
				"data": [0],
				"className": "text-left"
			},
			{
				"data": [1],
				"className": "text-left"
			},
			{
				"data": [2],
				"className": "text-left"
			},
			{
				"data": [8],
				"className": "text-left"
			},
			{
				"data": [3],
				"visible":false,
				"className": "text-left"
			},
			{
				"data": [4],
				"className": "text-left"
			},
			{
				"data": [5],
				"className": "text-left"
			},
			{
				"data": [6],
				"className": "text-left"
			},
			{
				"data": [7],
				"className": "text-left"
			}


			// {
			// 	"data": [12],
			// 	// "visible": false,
			// 	"className": "text-center"
			// },
			// {
			// 	"data": [6],
			// 	"className": "text-left"
			// },
			// {
			// 	"data": [0],
			// 	"className": "text-center",
			// 	"visible": false,
			// },
			// {
			// 	"data": [1],
			// 	"className": "text-center"
			// },
			// {
			// 	"data": [2],
			// 	"className": "text-center"
			// },
			// {
			// 	"data": [11],
			// 	"className": "text-center"
			// },
			// {
			// 	"data": [3],
			// 	"visible": false,
			// 	"className": "text-center"
			// },
			// {
			// 	"data": [4],
			// 	"visible": false,
			// 	"className": "text-center"
			// },
			// {
			// 	"data": [5],
			// 	"className": "text-left"
			// },
			// {
			// 	"data": [6],
			// 	"visible": false,
			// 	"className": "text-center"
			// },
			// {
			// 	"data": [7],
			// 	"visible": false,
			// 	"className": "text-center"
			// },
			// {
			// 	"data": [8],
			// 	"visible": false,
			// 	"className": "text-center"
			// },
			// {
			// 	"data": [9],
			// 	"visible": false,
			// 	"className": "text-center"
			// },
			// {
			// 	"data": [10],
			// 	"visible": false,
			// 	"className": "text-center"
			// }
		],
		dom: "Bfrtip",
		buttons: [
			{
				extend: "copy",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3]
				}
			},
			{
				extend: "csv",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3]
				}
			},
			{
				extend: "excel",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3]
				}
			},
			{
				extend: "pdfHtml5",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3]
				}
			},
			{
				extend: "print",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3]
				},
				message: '<img src="http://4.bp.blogspot.com/_5ydAHJv4lKc/TSm6Sr4vMWI/AAAAAAAAAAQ/B3oGPh3_26k/s1600/logo.png" height="100px" width="100px" style="position: absolute;top:0;left:80px;"><center><h4 style="margin-top:-40px;">REPUBLIC OF THE PHILIPPINES</h4>\
							<h5>CARLOS HILADO MEMORIAL STATE COLLEGE</h5>\
							<h6>DEPARTMENT OF INFORMATION SYSTEMS</h6>\
							</center>',
				customize: function ( win ) {
					$(win.document.body).find( 'table' ).append('<br<br/><br><br><br><h4 class="">Noted by:</h4><br><br><br><br><br><h4 class="">Prepared by:</h4>');
				}
			}
		]
});

var table_inventory_new = $('.table_inventory_new').DataTable({
		"ajax":
		{
			"url": "../class/display/display",
			"type": "POST",
			"data": {
				"key": "display_equipment_new"
			}
		},
		"columns": 
		[
			{
				"data": [0],
				"className": "text-center"
			},
			{
				"data": [1],
				"className": "text-center"
			},
			{
				"data": [2],
				"className": "text-center"
			},
			{
				"data": [3],
				"className": "text-center"
			},
			{
				"data": [4],
				"className": "text-center"
			}
		],
		dom: "Bfrtip",
		buttons: [
			{
				extend: "copy",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4]
				}
			},
			{
				extend: "csv",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4]
				}
			},
			{
				extend: "excel",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4]
				}
			},
			{
				extend: "pdfHtml5",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4]
				}
			},
			{
				extend: "print",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4]
				},
				message: '<img src="http://4.bp.blogspot.com/_5ydAHJv4lKc/TSm6Sr4vMWI/AAAAAAAAAAQ/B3oGPh3_26k/s1600/logo.png" height="100px" width="100px" style="position: absolute;top:0;left:80px;"><center><h4 style="margin-top:-40px;">REPUBLIC OF THE PHILIPPINES</h4>\
							<h5>CARLOS HILADO MEMORIAL STATE COLLEGE</h5>\
							<h6>DEPARTMENT OF INFORMATION SYSTEMS</h6>\
							</center>',
				customize: function ( win ) {
					$(win.document.body).find( 'table' ).append('<br<br/><br><br><br><h4 class="">Noted by:</h4><br><br><br><br><br><h4 class="">Prepared by:</h4>');
				}
			}
		]
});

var table_inventory_old = $('.table_inventory_old').DataTable({
		"ajax":
		{
			"url": "../class/display/display",
			"type": "POST",
			"data": {
				"key": "display_equipment_old"
			}
		},
		"columns": 
		[
			{
				"data": [0],
				"className": "text-center"
			},
			{
				"data": [1],
				"className": "text-center"
			},
			{
				"data": [2],
				"className": "text-center"
			},
			{
				"data": [3],
				"className": "text-center"
			},
			{
				"data": [4],
				"className": "text-center"
			}
		],
		dom: "Bfrtip",
		buttons: [
			{
				extend: "copy",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4]
				}
			},
			{
				extend: "csv",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4]
				}
			},
			{
				extend: "excel",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4]
				}
			},
			{
				extend: "pdfHtml5",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4]
				}
			},
			{
				extend: "print",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4]
				},
				message: '<img src="http://4.bp.blogspot.com/_5ydAHJv4lKc/TSm6Sr4vMWI/AAAAAAAAAAQ/B3oGPh3_26k/s1600/logo.png" height="100px" width="100px" style="position: absolute;top:0;left:80px;"><center><h4 style="margin-top:-40px;">REPUBLIC OF THE PHILIPPINES</h4>\
							<h5>CARLOS HILADO MEMORIAL STATE COLLEGE</h5>\
							<h6>DEPARTMENT OF INFORMATION SYSTEMS</h6>\
							</center>',
				customize: function ( win ) {
					$(win.document.body).find( 'table' ).append('<br<br/><br><br><br><h4 class="">Noted by:</h4><br><br><br><br><br><h4 class="">Prepared by:</h4>');
				}
			}
		]
});
var table_inventory_lost = $('.table_inventory_lost').DataTable({
		"ajax":
		{
			"url": "../class/display/display",
			"type": "POST",
			"data": {
				"key": "display_equipment_lost"
			}
		},
		"columns": 
		[
			{
				"data": [0],
				"className": "text-center"
			},
			{
				"data": [1],
				"className": "text-center"
			},
			{
				"data": [2],
				"className": "text-center"
			},
			{
				"data": [3],
				"className": "text-center"
			},
			{
				"data": [4],
				"className": "text-center"
			}
		],
		dom: "Bfrtip",
		buttons: [
			{
				extend: "copy",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4]
				}
			},
			{
				extend: "csv",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4]
				}
			},
			{
				extend: "excel",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4]
				}
			},
			{
				extend: "pdfHtml5",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4]
				}
			},
			{
				extend: "print",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4]
				},
				message: '<img src="http://4.bp.blogspot.com/_5ydAHJv4lKc/TSm6Sr4vMWI/AAAAAAAAAAQ/B3oGPh3_26k/s1600/logo.png" height="100px" width="100px" style="position: absolute;top:0;left:80px;"><center><h4 style="margin-top:-40px;">REPUBLIC OF THE PHILIPPINES</h4>\
							<h5>CARLOS HILADO MEMORIAL STATE COLLEGE</h5>\
							<h6>DEPARTMENT OF INFORMATION SYSTEMS</h6>\
							</center>',
				customize: function ( win ) {
					$(win.document.body).find( 'table' ).append('<br<br/><br><br><br><h4 class="">Noted by:</h4><br><br><br><br><br><h4 class="">Prepared by:</h4>');
				}
			}
		]
});
var table_inventory_damaged = $('.table_inventory_damaged').DataTable({
	"ajax":
		{
			"url": "../class/display/display",
			"type": "POST",
			"data": {
				"key": "display_equipment_damaged"
			}
		},
		"columns": 
		[
			{
				"data": [0],
				"className": "text-center"
			},
			{
				"data": [1],
				"className": "text-center"
			},
			{
				"data": [2],
				"className": "text-center"
			},
			{
				"data": [3],
				"className": "text-center"
			},
			{
				"data": [4],
				"className": "text-center"
			}
		],
		dom: "Bfrtip",
		buttons: [
			{
				extend: "copy",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4]
				}
			},
			{
				extend: "csv",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4]
				}
			},
			{
				extend: "excel",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4]
				}
			},
			{
				extend: "pdfHtml5",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4]
				}
			},
			{
				extend: "print",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4]
				},
				message: '<img src="http://4.bp.blogspot.com/_5ydAHJv4lKc/TSm6Sr4vMWI/AAAAAAAAAAQ/B3oGPh3_26k/s1600/logo.png" height="100px" width="100px" style="position: absolute;top:0;left:80px;"><center><h4 style="margin-top:-40px;">REPUBLIC OF THE PHILIPPINES</h4>\
							<h5>CARLOS HILADO MEMORIAL STATE COLLEGE</h5>\
							<h6>DEPARTMENT OF INFORMATION SYSTEMS</h6>\
							</center>',
				customize: function ( win ) {
					$(win.document.body).find( 'table' ).append('<br<br/><br><br><br><h4 class="">Noted by:</h4><br><br><br><br><br><h4 class="">Prepared by:</h4>');
				}
			}
		]
});
var table_inventory_pulledout = $('.table_inventory_pulledout').DataTable({
	"ajax":
		{
			"url": "../class/display/display",
			"type": "POST",
			"data": {
				"key": "display_equipment_pulled"
			}
		},
		"columns": 
		[
			{
				"data": [0],
				"className": "text-center"
			},
			{
				"data": [1],
				"className": "text-center"
			},
			{
				"data": [2],
				"className": "text-center"
			},
			{
				"data": [3],
				"className": "text-center"
			},
			{
				"data": [4],
				"className": "text-center"
			}
		],
		dom: "Bfrtip",
		buttons: [
			{
				extend: "copy",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4]
				}
			},
			{
				extend: "csv",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4]
				}
			},
			{
				extend: "excel",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4]
				}
			},
			{
				extend: "pdfHtml5",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4]
				}
			},
			{
				extend: "print",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4]
				},
				message: '<img src="http://4.bp.blogspot.com/_5ydAHJv4lKc/TSm6Sr4vMWI/AAAAAAAAAAQ/B3oGPh3_26k/s1600/logo.png" height="100px" width="100px" style="position: absolute;top:0;left:80px;"><center><h4 style="margin-top:-40px;">REPUBLIC OF THE PHILIPPINES</h4>\
							<h5>CARLOS HILADO MEMORIAL STATE COLLEGE</h5>\
							<h6>DEPARTMENT OF INFORMATION SYSTEMS</h6>\
							</center>',
				customize: function ( win ) {
					$(win.document.body).find( 'table' ).append('<br<br/><br><br><br><h4 class="">Noted by:</h4><br><br><br><br><br><h4 class="">Prepared by:</h4>');
				}
			}
		]
});

	
var table_inventory_all = $('.table_inventory_all').DataTable({
							"ajax":
							{
								"url": "../class/display/display",
								"type": "POST",
								"data": {
									"key": "display_equipment_all"
								}
							},
							"columns": 
							[
								{
									"data": [0],
									"className": "text-center"
								},
								{
									"data": [1],
									"className": "text-center"
								},
								{
									"data": [2],
									"className": "text-center"
								},
								{
									"data": [3],
									"className": "text-center"
								}
							],
							dom: "Bfrtip",
									buttons: [
										{
											extend: "copy",
											className: "btn-sm btn-success",
											exportOptions:{
												columns: [0,1,2,3,4,5,6]
											}
										},
										{
											extend: "csv",
											className: "btn-sm btn-success",
											exportOptions:{
												columns: [0,1,2,3,4,5,6]
											}
										},
										{
											extend: "excel",
											className: "btn-sm btn-success",
											exportOptions:{
												columns: [0,1,2,3,4,5,6]
											}
										},
										{
											extend: "pdfHtml5",
											className: "btn-sm btn-success",
											exportOptions:{
												columns: [0,1,2,3,4,5,6]
											}
										},
										{
											extend: "print",
											className: "btn-sm btn-success",
											exportOptions:{
												columns: [0,1,2,3,4,5,6]
											},
											message: '<center><h4>REPUBLIC OF THE PHILIPPINES</h4>\
														<h5>CARLOS HILADO MEMORIAL STATE COLLEGE</h5>\
														<h6>DEPARTMENT OF INFORMATION SYSTEMS</h6>\
														</center>',
											customize: function ( win ) {
												$(win.document.body).find( 'table' ).append('<br<br/><br><br><br><h4 class="">Noted by:</h4><br><br><br><br><br><h4 class="">Prepared by:</h4>');
											}
										}
									]
});

function room_info(a,b){
	var table_roominfo = $('.table_roominfo').DataTable({
							"ajax":
								{
									"url": "../class/display/display",
									"type": "POST",
									"data": {
										"key": "display_roominfo",
										"id": b,
										"name": a
									}
								},
								"columns": 
								[
									{
										"data": [0],
										"className": "text-center"
									},
									{
										"data": [1],
										"className": "text-center"
									},
									{
										"data": [2],
										"className": "text-center"
									},
									{
										"data": [3],
										"visible":false,
										"className": "text-center"
									},
									{
										"data": [4],
										"className": "text-center"
									},
									{
										"data": [5],
										"visible":false,
										"className": "text-left"
									},
									{
										"data": [6],
										"visible":false,
										"className": "text-center"
									},
									{
										"data": [7],
										"className": "text-center"
									}
								],
								dom: "Bfrtip",
								buttons: [
									{
										extend: "copy",
										className: "btn-sm btn-success",
										exportOptions:{
											columns: [0,1,2,3,4,5,6]
										}
									},
									{
										extend: "csv",
										className: "btn-sm btn-success",
										exportOptions:{
											columns: [0,1,2,3,4,5,6]
										}
									},
									{
										extend: "excel",
										className: "btn-sm btn-success",
										exportOptions:{
											columns: [0,1,2,3,4,5,6]
										}
									},
									{
										extend: "pdfHtml5",
										className: "btn-sm btn-success",
										exportOptions:{
											columns: [0,1,2,3,4,5,6]
										}
									},
									{
										extend: "print",
										className: "btn-sm btn-success",
										exportOptions:{
											columns: [0,1,2,3,4,5,6]
										},
										message: '<center><h4>REPUBLIC OF THE PHILIPPINES</h4>\
													<h5>CARLOS HILADO MEMORIAL STATE COLLEGE</h5>\
													<h6>DEPARTMENT OF INFORMATION SYSTEMS</h6>\
													</center>',
										customize: function ( win ) {
											$(win.document.body).find( 'table' ).append('<br<br/><br><br><br><h4 class="">Noted by:</h4><br><br><br><br><br><h4 class="">Prepared by:</h4>');
										}
									}
								]
						});

	table_roominfo.on('click', '.transfer', function(e){
		e.preventDefault();

		var id = $(this).attr('data-id');
		$(".frm_transfer").find('input[name="id"]').val(id);

		$('.transfer').toggle(effect, options, duration);

		$('.frm_transfer').submit(function(e){
			e.preventDefault();

			var _this = $(this);
	
			$.ajax({
				type: 'POST',
				url: '../class/edit/edit',
				data: _this.serialize()
			})
			.done(function(data){
				console.log(data);
				// if(data == 1){
					$('.transfer').toggle(effect, options, duration);
					table_roominfo.ajax.reload(null,false);
					toastr.success(data);
				// }
			});
		});
	});

	


	table_roominfo.on('click', '.btn_return', function(e){
		e.preventDefault();
		var id = $(this).attr('data-id');
		$('.mymodal').modal('show');
		$('input[name="id"]').val(id);
	});

	$('.frm_returnroom').submit(function(e){
		e.preventDefault();
		var frm_data = $(this).serialize()+'&key=return_transfer';
			$.ajax({
				type: 'POST',
				url: '../class/edit/edit',
				data: frm_data
			})
			.done(function(data){
				console.log(data);
				table_roominfo.ajax.reload(null,false);
				toastr.success(data);
				$('.mymodal').modal('hide');
			})
	});
	
}




var tbl_newtransaction = $('.tbl_newtransaction').DataTable({
		"ajax":
		{
			"url": "../class/display/display",
			"type": "POST",
			"data": {
				"key": "display_newtransaction"
			}
		},
		"columns": 
		[
			{
				"data": [0],
				"className": "text-center"
			},
			{
				"data": [1],
				"className": "text-center"
			},
			{
				"data": [2],
				"className": "text-center"
			},
			{
				"data": [3],
				"className": "text-center"
			},
			{
				"data": [4],
				"className": "text-center"
			},
			{
				"data": [5],
				"className": "text-left"
			}
		]
	});

var tbl_borrow = $('.tbl_borrow').DataTable({
	"ajax":
		{
			"url": "../class/display/display",
			"type": "POST",
			"data": {
				"key": "display_borrow"
			}
		},
		"columns": 
		[
			{
				"data": [0],
				"className": "text-center"
			},
			{
				"data": [1],
				"className": "text-center"
			},
			{
				"data": [2],
				"className": "text-center"
			},
			{
				"data": [4],
				"className": "text-center"
			},
			{
				"data": [3],
				"className": "text-center"
			}
		],
		dom: "Bfrtip",
		buttons: [
			{
				extend: "copy",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3]
				}
			},
			{
				extend: "csv",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3]
				}
			},
			{
				extend: "excel",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3]
				}
			},
			{
				extend: "pdfHtml5",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3]
				}
			},
			{
				extend: "print",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3]
				},
				message: '<img src="http://4.bp.blogspot.com/_5ydAHJv4lKc/TSm6Sr4vMWI/AAAAAAAAAAQ/B3oGPh3_26k/s1600/logo.png" height="100px" width="100px" style="position: absolute;top:0;left:80px;"><center><h4 style="margin-top:-40px;">REPUBLIC OF THE PHILIPPINES</h4>\
							<h5>CARLOS HILADO MEMORIAL STATE COLLEGE</h5>\
							<h6>DEPARTMENT OF INFORMATION SYSTEMS</h6>\
							</center>',
				customize: function ( win ) {
					$(win.document.body).find( 'table' ).append('<br<br/><br><br><br><h4 class="">Noted by:</h4><br><br><br><br><br><h4 class="">Prepared by:</h4>');
				}
			}
		]
});

function selectMonthData()
{
	return $("#selectMonth").val();
}

function selectYearData()
{
	return $("#selectYear").val();
}

var tbl_return = $('.tbl_return').DataTable({
	"ajax":
		{
			"url": "../class/display/display",
			"type": "POST",
			"data": function(d){
		        d.key = "display_return";
		        d.month = selectMonthData();
		        d.year = selectYearData();
	      	}
		},
		"columns": 
		[
			{
				"data": [0],
				"className": "text-center"
			},
			{
				"data": [1],
				"className": "text-center"
			},
			{
				"data": [3],
				"className": "text-center"
			},
			{
				"data": [2],
				"className": "text-center"
			}
		],
		dom: "Bfrtip",
		buttons: [
			{
				extend: "copy",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2]
				}
			},
			{
				extend: "csv",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2]
				}
			},
			{
				extend: "excel",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2]
				}
			},
			{
				extend: "pdfHtml5",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2]
				}
			},
			{
				extend: "print",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2]
				},
				message: '<img src="http://4.bp.blogspot.com/_5ydAHJv4lKc/TSm6Sr4vMWI/AAAAAAAAAAQ/B3oGPh3_26k/s1600/logo.png" height="100px" width="100px" style="position: absolute;top:0;left:80px;"><center><h4 style="margin-top:-40px;">REPUBLIC OF THE PHILIPPINES</h4>\
							<h5>CARLOS HILADO MEMORIAL STATE COLLEGE</h5>\
							<h6>DEPARTMENT OF INFORMATION SYSTEMS</h6>\
							</center>',
				customize: function ( win ) {
					$(win.document.body).find( 'table' ).append('<br<br/><br><br><br><h4 class="">Noted by:</h4><br><br><br><br><br><h4 class="">Prepared by:</h4>');
				}
			}
		]
});

$("#btnReloadList").on('click', function(){
	tbl_return.ajax.reload();
});

var tbl_pendingres = $('.tbl_pendingres').DataTable({
		"ajax":
			{
				"url": "../class/display/display",
				"type": "POST",
				"data": {
					"key": "pending_reservation"
				}
			},
		"columns": 
		[
			{
				"data": [0],
				"className": "text-center"
			},
			{
				"data": [1],
				"className": "text-center"
			},
			{
				"data": [2],
				"className": "text-center"
			},
			{
				"data": [3],
				"className": "text-center"
			},
			{
				"data": [4],
				"className": "text-center"
			}
		],
		dom: "Bfrtip",
		buttons: [
			{
				extend: "copy",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3]
				}
			},
			{
				extend: "csv",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3]
				}
			},
			{
				extend: "excel",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3]
				}
			},
			{
				extend: "pdfHtml5",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3]
				}
			},
			{
			extend: "print",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3]
				},
				message: '<img src="http://4.bp.blogspot.com/_5ydAHJv4lKc/TSm6Sr4vMWI/AAAAAAAAAAQ/B3oGPh3_26k/s1600/logo.png" height="100px" width="100px" style="position: absolute;top:0;left:80px;"><center><h4 style="margin-top:-40px;">REPUBLIC OF THE PHILIPPINES</h4>\
							<h5>CARLOS HILADO MEMORIAL STATE COLLEGE</h5>\
							<h6>DEPARTMENT OF INFORMATION SYSTEMS</h6>\
							</center>',
				customize: function ( win ) {
					$(win.document.body).find( 'table' ).append('<br<br/><br><br><br><h4 class="">Noted by:</h4><br><br><br><br><br><h4 class="">Prepared by:</h4>');
				}
			}
		]
});

var tbl_reserved = $('.tbl_reserved').DataTable({
		"ajax":
			{
				"url": "../class/display/display",
				"type": "POST",
				"data": {
					"key": "accept_reservation"
				}
			},
		"columns": 
		[
			{
				"data": [0],
				"className": "text-center"
			},
			{
				"data": [1],
				"className": "text-center"
			},
			{
				"data": [2],
				"className": "text-center"
			},
			{
				"data": [3],
				"className": "text-center"
			},
			{
				"data": [4],
				"className": "text-center"
			}
		],
		dom: "Bfrtip",
		buttons: [
			{
				extend: "copy",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3]
				}
			},
			{
				extend: "csv",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3]
				}
			},
			{
				extend: "excel",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3]
				}
			},
			{
				extend: "pdfHtml5",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3]
				}
			},
			{
			extend: "print",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3]
				},
				message: '<img src="http://4.bp.blogspot.com/_5ydAHJv4lKc/TSm6Sr4vMWI/AAAAAAAAAAQ/B3oGPh3_26k/s1600/logo.png" height="100px" width="100px" style="position: absolute;top:0;left:80px;"><center><h4 style="margin-top:-40px;">REPUBLIC OF THE PHILIPPINES</h4>\
							<h5>CARLOS HILADO MEMORIAL STATE COLLEGE</h5>\
							<h6>DEPARTMENT OF INFORMATION SYSTEMS</h6>\
							</center>',
				customize: function ( win ) {
					$(win.document.body).find( 'table' ).append('<br<br/><br><br><br><h4 class="">Noted by:</h4><br><br><br><br><br><h4 class="">Prepared by:</h4>');
				}
			}
		]
});

var tbluser_reservation = $('.tbluser_reservation').DataTable({
		"ajax":
			{
				"url": "../class/display/display",
				"type": "POST",
				"data": {
					"key": "tbluser_reservation",
				}
			},
		"columns": 
		[
			{
				"data": [0],
				"className": "text-center"
			},
			{
				"data": [1],
				"className": "text-center"
			},
			{
				"data": [2],
				"className": "text-center"
			},
			{
				"data": [4],
				"className": "text-center"
			},
			{
				"data": [3],
				"className": "text-center"
			}
		],
		dom: "Bfrtip",
		buttons: [
			{
				extend: "copy",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2]
				}
			},
			{
				extend: "csv",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2]
				}
			},
			{
				extend: "excel",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2]
				}
			},
			{
				extend: "pdfHtml5",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2]
				}
			},
			{
			extend: "print",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2]
				},
				message: '<img src="http://4.bp.blogspot.com/_5ydAHJv4lKc/TSm6Sr4vMWI/AAAAAAAAAAQ/B3oGPh3_26k/s1600/logo.png" height="100px" width="100px" style="position: absolute;top:0;left:80px;"><center><h4 style="margin-top:-40px;">REPUBLIC OF THE PHILIPPINES</h4>\
							<h5>CARLOS HILADO MEMORIAL STATE COLLEGE</h5>\
							<h6>DEPARTMENT OF INFORMATION SYSTEMS</h6>\
							</center>',
				customize: function ( win ) {
					$(win.document.body).find( 'table' ).append('<br<br/><br><br><br><h4 class="">Noted by:</h4><br><br><br><br><br><h4 class="">Prepared by:</h4>');
				}
			}
		]
});


var table_history = $('.table_history').DataTable({
		"ajax":
			{
				"url": "../class/display/display",
				"type": "POST",
				"data": {
					"key": "table_history",
				}
			},
		"columns": 
		[
			{
				"data": [0],
				"className": "text-center"
			},
			{
				"data": [1],
				"className": "text-center"
			},
			{
				"data": [2],
				"className": "text-center"
			}
		],
		dom: "Bfrtip",
		buttons: [
			{
				extend: "copy",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2]
				}
			},
			{
				extend: "csv",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2]
				}
			},
			{
				extend: "excel",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2]
				}
			},
			{
				extend: "pdfHtml5",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2]
				}
			},
			{
			extend: "print",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2]
				},
				message: '<img src="http://4.bp.blogspot.com/_5ydAHJv4lKc/TSm6Sr4vMWI/AAAAAAAAAAQ/B3oGPh3_26k/s1600/logo.png" height="100px" width="100px" style="position: absolute;top:0;left:80px;"><center><h4 style="margin-top:-40px;">REPUBLIC OF THE PHILIPPINES</h4>\
							<h5>CARLOS HILADO MEMORIAL STATE COLLEGE</h5>\
							<h6>DEPARTMENT OF INFORMATION SYSTEMS</h6>\
							</center>',
				customize: function ( win ) {
					$(win.document.body).find( 'table' ).append('<br<br/><br><br><br><h4 class="">Noted by:</h4><br><br><br><br><br><h4 class="">Prepared by:</h4>');
				}
			}
		]
});

var table_dashboard = $('.table_dashboard').DataTable({
	"ajax":
			{
				"url": "../class/display/display",
				"type": "POST",
				"data": {
					"key": "table_dashboard",
				}
			},
		"columns": 
		[
			{
				"data": [0],
				"className": "text-center"
			},
			{
				"data": [1],
				"className": "text-center"
			},
			{
				"data": [2],
				"className": "text-center"
			},
			{
				"data": [3],
				"visible":false,
				"className": "text-center"
			},
			{
				"data": [4],
				"className": "text-center"
			},
			{
				"data": [5],
				"className": "text-center"
			}
		],
	dom: "Bfrtip",
		buttons: [
			{
				extend: "copy",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4,5]
				}
			},
			{
				extend: "csv",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4,5]
				}
			},
			{
				extend: "excel",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4,5]
				}
			},
			{
				extend: "pdfHtml5",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4,5]
				}
			},
			{
			extend: "print",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4,5]
				},
				message: '<img src="http://4.bp.blogspot.com/_5ydAHJv4lKc/TSm6Sr4vMWI/AAAAAAAAAAQ/B3oGPh3_26k/s1600/logo.png" height="100px" width="100px" style="position: absolute;top:0;left:80px;"><center><h4 style="margin-top:-40px;">REPUBLIC OF THE PHILIPPINES</h4>\
							<h5>CARLOS HILADO MEMORIAL STATE COLLEGE</h5>\
							<h6>DEPARTMENT OF INFORMATION SYSTEMS</h6>\
							</center>',
				customize: function ( win ) {
					$(win.document.body).find( 'table' ).append('<br<br/><br><br><br><h4 class="">Noted by:</h4><br><br><br><br><br><h4 class="">Prepared by:</h4>');
				}
			}
		]
});

function member_profile(id)
{

	var tbl_member_profile = $('.tbl_member_profile').DataTable({
		"ajax":
			{
				"url": "../class/display/display",
				"type": "POST",
				"data": {
					"key": "tbl_member_profile",
					"id": id
				}
			},
		"columns": 
		[
			{
				"data": [0],
				"className": "text-center"
			},
			{
				"data": [1],
				"className": "text-center"
			},
			{
				"data": [2],
				"className": "text-center"
			},
			{
				"data": [3],
				"className": "text-center"
			}
		],
		dom: "Bfrtip",
			buttons: [
				{
					extend: "copy",
					className: "btn-sm btn-success",
					exportOptions:{
						columns: [0,1,2,3]
					}
				},
				{
					extend: "csv",
					className: "btn-sm btn-success",
					exportOptions:{
						columns: [0,1,2,3]
					}
				},
				{
					extend: "excel",
					className: "btn-sm btn-success",
					exportOptions:{
						columns: [0,1,2,3]
					}
				},
				{
					extend: "pdfHtml5",
					className: "btn-sm btn-success",
					exportOptions:{
						columns: [0,1,2,3]
					}
				},
				{
				extend: "print",
					className: "btn-sm btn-success",
					exportOptions:{
						columns: [0,1,2,3]
					},
				message: '<img src="http://4.bp.blogspot.com/_5ydAHJv4lKc/TSm6Sr4vMWI/AAAAAAAAAAQ/B3oGPh3_26k/s1600/logo.png" height="100px" width="100px" style="position: absolute;top:0;left:80px;"><center><h4 style="margin-top:-40px;">REPUBLIC OF THE PHILIPPINES</h4>\
							<h5>CARLOS HILADO MEMORIAL STATE COLLEGE</h5>\
							<h6>DEPARTMENT OF INFORMATION SYSTEMS</h6>\
							</center>',
				customize: function ( win ) {
					$(win.document.body).find( 'table' ).append('<br<br/><br><br><br><h4 class="">Noted by:</h4><br><br><br><br><br><h4 class="">Prepared by:</h4>');
				}
				}
			]
	});

}

var tbluser_inbox = $('.tbluser_inbox').DataTable({
	"ajax":
			{
				"url": "../class/display/display",
				"type": "POST",
				"data": {
					"key": "tbluser_inbox",
				}
			},
		"columns": 
		[
			{
				"data": [0],
				"visible":false,	
				"className": "text-center"
			},
			{
				"data": [1],
				"className": "text-center"
			},
			{
				"data": [2],
				"className": "text-center"
			}
		],
		dom: "Bfrtip",
			buttons: [
				{
					extend: "copy",
					className: "btn-sm btn-success",
					exportOptions:{
						columns: [0,1,2]
					}
				},
				{
					extend: "csv",
					className: "btn-sm btn-success",
					exportOptions:{
						columns: [0,1,2]
					}
				},
				{
					extend: "excel",
					className: "btn-sm btn-success",
					exportOptions:{
						columns: [0,1,2]
					}
				},
				{
					extend: "pdfHtml5",
					className: "btn-sm btn-success",
					exportOptions:{
						columns: [0,1,2]
					}
				},
				{
				extend: "print",
					className: "btn-sm btn-success",
					exportOptions:{
						columns: [0,1,2]
					},
				message: '<img src="http://4.bp.blogspot.com/_5ydAHJv4lKc/TSm6Sr4vMWI/AAAAAAAAAAQ/B3oGPh3_26k/s1600/logo.png" height="100px" width="100px" style="position: absolute;top:0;left:80px;"><center><h4 style="margin-top:-40px;">REPUBLIC OF THE PHILIPPINES</h4>\
							<h5>CARLOS HILADO MEMORIAL STATE COLLEGE</h5>\
							<h6>DEPARTMENT OF INFORMATION SYSTEMS</h6>\
							</center>',
				customize: function ( win ) {
					$(win.document.body).find( 'table' ).append('<br<br/><br><br><br><h4 class="">Noted by:</h4><br><br><br><br><br><h4 class="">Prepared by:</h4>');
				}
				}
			]
});

function selectMonthTransferData()
{
	return $("#selectMonthTransferred").val();
}

function selectYearTransferData()
{
	return $("#selectYearTransferred").val();
}

var table_inventory_transfer = $('.table_inventory_transfer').DataTable({
	"ajax":
		{
			"url": "../class/display/display",
			"type": "POST",
			"data": function(d){
		        d.key = "display_inventory_transfer";
		        d.month = selectMonthTransferData();
		        d.year = selectYearTransferData();
	      	}
		},
		"columns": 
		[
			{
				"data": [0],
				"className": "text-center"
			},
			{
				"data": [1],
				"className": "text-center"
			},
			{
				"data": [2],
				"className": "text-center"
			},
			{
				"data": [3],
				"className": "text-center"
			},
			{
				"data": [4],
				"className": "text-center"
			},
			{
				"data": [6],
				
				"className": "text-center"
			},
			{
				"data": [5],
				
				"className": "text-center"
			},
			{
				"data": [7],
				
				"className": "text-center"
			}
			
		],
		dom: "Bfrtip",
		buttons: [
			{
				extend: "copy",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4]
				}
			},
			{
				extend: "csv",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4]
				}
			},
			{
				extend: "excel",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4]
				}
			},
			{
				extend: "pdfHtml5",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4]
				}
			},
			{
				extend: "print",
				className: "btn-sm btn-success",
				exportOptions:{
					columns: [0,1,2,3,4]
				},
				message: '<img src="http://4.bp.blogspot.com/_5ydAHJv4lKc/TSm6Sr4vMWI/AAAAAAAAAAQ/B3oGPh3_26k/s1600/logo.png" height="100px" width="100px" style="position: absolute;top:0;left:80px;"><center><h4 style="margin-top:-40px;">REPUBLIC OF THE PHILIPPINES</h4>\
							<h5>CARLOS HILADO MEMORIAL STATE COLLEGE</h5>\
							<h6>DEPARTMENT OF INFORMATION SYSTEMS</h6>\
							</center>',
				customize: function ( win ) {
					$(win.document.body).find( 'table' ).append('<br<br/><br><br><br><h4 class="">Noted by:</h4><br><br><br><br><br><h4 class="">Prepared by:</h4>');
				}
			}
		]
});

$("#btnReloadTransferredList").on('click', function(){
	table_inventory_transfer.ajax.reload();
});
// function member_profile(id)
// {
// 	$.ajax({
// 		type: "POST",
// 		url: "../class/display/display",
// 		data: {
// 			key: "tbl_member_profile",
// 			id: id
// 		}
// 	})
// 	.done(function(data){
// 		console.log(data);
// });
// }