document.getElementById("sa-success") &&
  document.getElementById("sa-success").addEventListener("click", function () {
    Swal.fire({
      title: "Congratulations !",
      text: "Form Submitted Successfully !",
      icon: "success",
      timer: 2e3,
      showCancelButton: !0,
      confirmButtonClass: "btn btn-primary w-xs me-2 mt-2",
      cancelButtonClass: "btn btn-danger w-xs mt-2",
      buttonsStyling: !1,
      showCloseButton: !1,
    });
  }),
  document.getElementById("sa-success1") &&
    document
      .getElementById("sa-success1")
      .addEventListener("click", function () {
        Swal.fire({
          title: "Congratulations !",
          text: "Form Submitted Successfully !",
          icon: "success",
          timer: 2e3,
          showCancelButton: !0,
          confirmButtonClass: "btn btn-primary w-xs me-2 mt-2",
          cancelButtonClass: "btn btn-danger w-xs mt-2",
          buttonsStyling: !1,
          showCloseButton: !1,
        });
      }),
  document.getElementById("sa-warning") &&
    document
      .getElementById("sa-warning")
      .addEventListener("click", function () {
        Swal.fire({
          title: "Are you sure want to delete ?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: !0,
          confirmButtonClass: "btn btn-primary w-xs me-2 mt-2",
          cancelButtonClass: "btn btn-danger w-xs mt-2",
          confirmButtonText: "Yes, delete it!",
          buttonsStyling: !1,
          showCloseButton: !0,
        }).then(function (t) {
          t.value &&
            Swal.fire({
              title: "Deleted!",
              text: "Your form has been deleted.",
              icon: "success",
              confirmButtonClass: "btn btn-primary w-xs mt-2",
              buttonsStyling: !1,
            });
        });
      });

// document.addEventListener("DOMContentLoaded", function () {
//   initializeTables();
// });

// function initializeTables() {
//   new DataTable("#example1");
// }
