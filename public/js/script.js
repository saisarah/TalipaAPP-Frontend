// Personal Details Automated Dropdowns Location
var my_handlers = {
    
    fill_provinces: function () {
        
        var region_code = $(this).val();
        $('#province').on('change', function() {
        $('input[name="province"]').val($('#province option:selected').text())
        });
        $('#province').ph_locations('fetch_list', [{ "region_code": region_code }]);
    },

    fill_cities: function () {

        var province_code = $(this).val();
        $('#municipality_or_city').on('change', function() {
        $('input[name="municipality_or_city"]').val($('#municipality_or_city option:selected').text())
        });
        $('#municipality_or_city').ph_locations('fetch_list', [{ "province_code": province_code }]);
    },

    fill_barangays: function () {

        var city_code = $(this).val();
        $('#barangay').on('change', function() {
        $('input[name="barangay_name"]').val($('#barangay option:selected').text())
        });
        $('#barangay').ph_locations('fetch_list', [{ "city_code": city_code }]);
    }

};

$(function () {
    $(my_handlers.fill_provinces);
    $('#province').on('change', my_handlers.fill_cities);
    $('#municipality_or_city').on('change', my_handlers.fill_barangays);

   // $('#region').ph_locations({ 'location_type': 'regions' });
    $('#province').ph_locations({ 'location_type': 'provinces' });
    $('#municipality_or_city').ph_locations({ 'location_type': 'cities' });
    $('#barangay').ph_locations({ 'location_type': 'barangays' });
    $('#province').ph_locations('fetch_list');
});