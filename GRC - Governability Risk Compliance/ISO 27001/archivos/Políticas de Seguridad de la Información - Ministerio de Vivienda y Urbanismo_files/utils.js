$(document).ready(function() {

	$(".imgLiquidFill").imgLiquid();

	$('#carrusel-home').owlCarousel({
	    loop:true,
	    mouseDrag: false,
		autoplay:true,
		autoplayTimeout:10000,
		smartSpeed:2000,
	    margin:0,
		dots:false,
	    nav:false,
		items:1,
	});

	if ($('#dp6').length) {
		//calendario
		$('#dp6').datepicker({
			language: 'es'
		});
	}

	$('#btn6').click(function () {
		$('#dp6').datepicker();
	});

	$('#limpiar').click(function (e) {

		e.preventDefault();
		$('.datepicker').val("").datepicker('clearDates');

	});


	if ($('#dp7').length) {
		//calendario
		$('#dp7').datepicker({
			language: 'es'
		});
	}

	$('#btn7').click(function () {
		$('#dp7').datepicker();
	});


});

function myFunction() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

function myFunction2() {
  // Declare variables
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput2");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable2");
  tr = table.getElementsByTagName("tr");

  // Loop through all table rows, and hide those who don't match the search query
  for (i = 0; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

$(document).ready(function() {
    $('#exampletable').DataTable();
} );

