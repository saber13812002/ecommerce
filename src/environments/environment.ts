// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  system: {
    // type: 'laravel',
    type: 'wordpress'
  },
  pods: {
    baseUrl: 'https://shopsirans.ir',
    api_prefix_wp: '/wp-json/wp/v2/',
    drivers_url: 'product',
    plugin_otp_wp: '/wp-content/plugins/berimbasket-otp2/',
    per_page: '?_embed&per_page=50&page=1',
    media_url: 'media',
  },
  laravel: {
    baseUrl: 'https://api.raahee.ir',
    drivers_url: 'drivers',
    drivers_url_all: 'drivers/all',
    api_prefix_lara: '/api/v1/',
  },
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
