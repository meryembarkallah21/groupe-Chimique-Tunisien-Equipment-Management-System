var effect = 'slide';
var options = { direction: 'right' };
var duration = 300;

$(".add_room").click(function () {
    $('.room-side').toggle(effect, options, duration);
});

$(".cancel_room").click(function () {
    $('.room-side').toggle(effect, options, duration);
});


$(".add_member").click(function () {
    $('.member-side').toggle(effect, options, duration);
});

$(".cancel_member").click(function () {
    $('.member-side').toggle(effect, options, duration);
});



$(".add_user").click(function () {
    $('.user-side').toggle(effect, options, duration);
});

$(".cancel_user").click(function () {
    $('.user-side').toggle(effect, options, duration);
});


$('select[name="select_membertype"]').on('change keyup', function(){
    var a = $(this).val();
    if(a == 1){
        $('.frm_student_sign').removeClass('hide');
        $('.frm_faculty_sign').addClass('hide');
    }else if(a == 2){
        $('.frm_faculty_sign').removeClass('hide');
        $('.frm_student_sign').addClass('hide');
    }
});



toastr.options = {
    "closeButton": true,
    "debug": false,
    "newestOnTop": false,
    "progressBar": false,
    "positionClass": "toast-bottom-right",
    "preventDuplicates": false,
    "onclick": null,
    "showDuration": "200",
    "hideDuration": "3000",
    "timeOut": "3000",
    "extendedTimeOut": "3000",
    "showEasing": "swing",
    "hideEasing": "linear",
    "showMethod": "fadeIn",
    "hideMethod": "fadeOut"
}


$('.add_equipment').click(function(){
    $('.equipment-side').toggle(effect, options, duration);
});

$('.cancel-equipment').click(function(){
    $('.equipment-side').toggle(effect, options, duration);
});

$('.employee-div').click(function(){
    $('.frm_student_sign').removeClass('hide');
    $('.frm_faculty_sign').addClass('hide');
});

$('.company-div').click(function(){
    $('.frm_student_sign').addClass('hide');
    $('.frm_faculty_sign').removeClass('hide');
});


$.ajax({
    type: "POST",
    url: "../class/display/display",
    data: {
        key: "display_roomtype"
    }
})
.done(function(data){
    // console.log(data)
   if(data != 0 ){
        var a = JSON.parse(data);
        var select = '';
        $.each(a, function(x,y){
            select += '<option value="'+y[0]+'" selected>'+y[1]+'</option>';
        });
        $('select[name="e_assigned"]').html(select);
        $('body select[name="e_assigned1"]').html(select);
   }else{
        $('select[name="e_assigned"]').html('<option disabled selected>Please select assign room</option>');
   }
})
.fail(function(data){
    console.log(data);
});

$.ajax({
    type: "POST",
    url: "../class/display/display",
    data: {
        key: "display_item_borrow",
        }
    })
    .done(function(data){
        if(data != ''){
            var ndata = JSON.parse(data);
            
            var select = "";
            $.each(ndata, function(a,x){
                // console.log(x);
                select += "<option value='"+x.id+"'>"
                            + x.deviceid +" - "
                            + x.category +" -  "
                            + x.brand +" -  ["
                            + x.stockleft+" in stock]  - "
                            + x.status
                            + "</option>";
            });
            // console.log(select);
            $('.borrowitem').html(select).select2({
                placeholder: "Select item to borrow",
                maximumSelectionLength: 5,
                tokenSeparators: [',', ' ']
            });
        }else{

        }
})
.fail(function(data){
    console.log(data.statusText);
});


//borrow transaction
$.ajax({
 type: "POST",
 url: "../class/display/display",
 data: {
        key: "display_memberselect"
     }
 })
 .done(function(data){
    var a = JSON.parse(data);
    var b = "";
    $.each(a, function(x,y){
        b += "<option value="+y[2]+">"+y[1]+" -- "+y[0]+"</option>";
    });
    $('select[name="borrow_membername"]').html("<option disabled selected></option>"+b).select2({
        placeholder: 'Please select borrower'
    });
});


 function equipment_info(id){
    $.ajax({
        type: "POST",
        url: "../class/display/display",
        data: {
            key: "display_equipmentinfo",
            id: id
        }
    })
    .done(function(data){
        var a = JSON.parse(data);
      
        $('.e_id').html(a[0]['e_deviceid']);
        $('.e_category').html(a[0]['e_category']);
        $('.e_brand').html(a[0]['e_brand']);
        $('.e_description').html(a[0]['e_description']);
        $('.e_stock').html(a[0]['e_stock']);
        $('.e_stockleft').html(a[0]['e_stockleft']);
        $('.e_assign').html(a[0]['room_name']);
        $('.e_type').html(a[0]['e_type']);
        $('.e_status').html(a[0]['e_status']);
        $('.e_model').html(a[0]['e_model']);
        $('.e_mr').html(a[0]['e_mr']);
        $('.e_price').html(a[0]['e_price']);
        $('.e_photo').html("<img src='../uploads/"+a[0]['e_photo']+"' style='width:400px; height:250px;' />");

        function getequipmentstat(){
            return a[0]['e_status'];
        }
    });
 }






$('body').on('click', '.equipment-forminfo .cancel-equipmentinfo', function(e){
    e.preventDefault();
    $('.equipment-info').toggle(effect, options, duration);
});






$.ajax({
 type: "POST",
 url: "../class/display/display",
 data: {
        key: "count_pendingres"
     }
 })
 .done(function(data){
   // console.log(data);
   $('.peding_val').text(data);
});

$.ajax({
 type: "POST",
 url: "../class/display/display",
 data: {
        key: "count_acceptres"
     }
 })
 .done(function(data){
   // console.log(data); 
   $('.accept_val').text(data);
});

$.ajax({
 type: "POST",
 url: "../class/display/display",
 data: {
        key: "count_cancelres"
     }
 })
 .done(function(data){
   // console.log(data); 
   $('.cancel_val').text(data);
});

$.ajax({
 type: "POST",
 url: "../class/display/display",
 data: {
        key: "count_client"
     }
 })
 .done(function(data){
   // console.log(data); 
   $('.active_user').text(data);
});


$.ajax({
    type: "POST",
    url: "../class/display/display",
    data: {
        key: "dashboard_history"
    }
})
.done(function(data){
    // console.log(data);
    var nn = JSON.parse(data);
    if(data != 0){
        var htm = "";
        $.each(nn, function(x,y){
            htm += '<li class="todo-list-item">\
                        <div class="checkbox">\
                            <label for="checkbox">'+y[0]+'</label>\
                        </div>\
                    </li>'; 
        });
        $('.todo-list').html(htm);
    }

});


$.ajax({
    type: "POST",
    url: "../class/display/display",
    data: {
        key: "display_room_reserve"
    }
})
.done(function(data){
    var a = JSON.parse(data);
    var b = '';
    $.each(a, function(x,y){
        b += '<option value="'+y[1]+'">'+y[0]+'</option>';
    });
    $('select[name="reserve_room"]').html('<option disabled selected>Please select room</option>'+b);

    // reserve_room
});


$.ajax({
    type: "POST",
    url: "../class/display/display",
    data: {
        key: "display_rooms"
    }
})
.done(function(data){
    var a = JSON.parse(data);
    // console.log(a)
    var b = '';
    $.each(a, function(x,y){
        b += '<option value="'+y[0]+'">'+y[1]+'</option>';
    });
    $('select[name="transfer_room"]').html(b);

    // reserve_room
});

$('.cancel-transfer').click(function(){
   window.location.reload();
});


$.ajax({
    type: "POST",
    url: "../class/display/display",
    data: {
        key: "count_reservation"
    }
})
.done(function(data){
    $('.today_reservation').text(data);
    $('#reserveBadge').text(data);
});

$(document).ready( function(){
    $.ajax({
        type: "POST",
        url: "../class/display/display",
        data: {
            key: "count_due_borrow"
        }
    })
    .done(function(data){
        $('#dueBorrow').text(data);
        $('#dueBadge').text(data);
    });
});

// $.ajax({
//     type: "POST",
//     url: "../class/display/display",
//     data: {
//         key: "display_equipment_all",
//     }
// })
// .done(function(data){
//    console.log(data);
// });