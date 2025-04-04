function initializeTables() {
  new DataTable("#MyTrips_tbl"),
    new DataTable("#Delegated_tbl"),
    new DataTable("#History_tbl"),
    new DataTable("#localExpense_tbl"),
    new DataTable("#Petty_tbl"),
    new DataTable("#Stay_tbl"),
    new DataTable("#travel_desk_dashboard"),
    new DataTable("#normal_salary_tbl"),
    new DataTable("#vendor_process_tbl"),
    new DataTable("#stay_tbl"),
    new DataTable("#Tickets_tbl"),
    new DataTable("#city_classification_tbl"),
    new DataTable("#Designation_tbl"),
    new DataTable("#Privilege_tbl"),
    new DataTable("#car_class_tbl"),
    new DataTable("#Train_tbl"),
    new DataTable("#bus_area_tbl"),
    new DataTable("#department_tbl"),
    ///////
    new DataTable("#state_sap_code_tbl"),
    new DataTable("#db_post_tbl"),
    new DataTable("#code_tbl"),
    new DataTable("#radio_tbl"),
    new DataTable("#Solution_tbl"),
    new DataTable("#Estate_Portal_tbl"),
    new DataTable("#DNA_tbl"),
    new DataTable("#Magazine_tbl"),
    new DataTable("#Power_tbl"),
    new DataTable("#Exxoils_tbl"),
    new DataTable("#Digital_tbl"),
    new DataTable("#Mobile_tbl"),
    new DataTable("#Printers_tbl"),
    ///////

    new DataTable("#service_provider_tbl"),
    new DataTable("#hotel_tbl"),
    new DataTable("#service_tbl"),
    // new DataTable("#department_tbl"),

    new DataTable("#scroll-vertical", {
      scrollY: "210px",
      scrollCollapse: !0,
      paging: !1,
    }),
    // new DataTable("#scroll-horizontal", { scrollX: !0 }),
    // new DataTable("#alternative-pagination", { pagingType: "full_numbers" }),
    // new DataTable("#fixed-header", { fixedHeader: !0 }),
    // new DataTable("#model-datatables", {
    //   responsive: {
    //     details: {
    //       display: $.fn.dataTable.Responsive.display.modal({
    //         header: function (a) {
    //           a = a.data();
    //           return "Details for " + a[0] + " " + a[1];
    //         },
    //       }),
    //       renderer: $.fn.dataTable.Responsive.renderer.tableAll({
    //         tableClass: "table",
    //       }),
    //     },
    //   },
    // }),

    new DataTable("#reports_tbl", {
      dom: "Bfrtip",
      buttons: ["copy", "csv", "excel", "print"],
    });

  new DataTable("#ajax-datatables", { ajax: "assets/json/datatable.json" });
  var a = $("#add-rows").DataTable(),
    e = 1;
  $("#addRow").on("click", function () {
    a.row
      .add([
        e + ".1",
        e + ".2",
        e + ".3",
        e + ".4",
        e + ".5",
        e + ".6",
        e + ".7",
        e + ".8",
        e + ".9",
        e + ".10",
        e + ".11",
        e + ".12",
      ])
      .draw(!1),
      e++;
  }),
    $("#addRow").trigger("click");
}
document.addEventListener("DOMContentLoaded", function () {
  initializeTables();
});
