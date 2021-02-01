$(function () {
  $(".mapcontainer span")
    .html("Loading JSON data")
    .css({ color: "blue", "font-weight": "bold" });

  //import json
  setTimeout(function () {
    // Get the data
    $.getJSON("../list_of_areas.json", function (result) {
      // Success
      // This variable will hold all the plots of our map
      var areas = result;
      console.log("areas", areas);
      // Parse each elements
      // $.each(result.data, function (key, value) {
      //   areas.name = value.NAMA_KEL;
      //   areas.konfirmasi = value.KONFIRMASI;
      //   areas.sembuh = value.SEMBUH;
      //   areas.dirawat = value.DIRAWAT;
      //   areas.isoman = value.ISOLASI_MANDIRI;
      //   areas.meinggal = value.MENINGGAL;
      // });

      // Create map
      $(".mapcontainer").mapael({
        map: {
          // Set the name of the map to display
          name: "madiun_districts",
          defaultArea: {
            attrs: {
              stroke: "#ffffff",
              width: 1,
              fill: "#352c3a",
            },
            attrsHover: {
              "stroke-width": 0.5,
              fill: "#00f7fe",
            },
          },
        },
        legend: {
          area: {
            title: "Terkonfirmasi Positif COVID-19",
            mode: "horizontal",
            labelAttrsHover: {
              fill: "#0700fe",
            },
            slices: [
              {
                min: 0,
                max: 20,
                attrs: {
                  fill: "#96ce27",
                  width: 50,
                },
                label: "0 - 20 kasus",
              },
              {
                min: 20,
                max: 40,
                attrs: {
                  fill: "#5abd30",
                  width: 50,
                },
                label: "20 - 40 kasus",
              },
              {
                min: 40,
                max: 60,
                attrs: {
                  fill: "#fe8600",
                  width: 50,
                },
                label: "40 - 60 kasus",
              },
              {
                min: 60,
                attrs: {
                  fill: "#ff3c00",
                  width: 50,
                },
                label: "60 kasus",
              },
            ],
          },
        },
        areas: areas,
      });
    }).fail(function () {
      // Error
      $(".mapcontainer span")
        .html("Failed to load JSON data")
        .css({ color: "red" });
    });
  }, 200);
});
