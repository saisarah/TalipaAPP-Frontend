

export default {
    currentUser: ['users', 'current'],

    regions: ['address', 'regions'],

    provinces: (region) => ['address', 'provinces', region],

    cities: (region, province) => ["address", "cities", region, province],

    barangays: (region, province, city) => ["address", "barangays", region, province, city],
}