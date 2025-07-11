let config = {
  address: "0.0.0.0",
  port: 8080,
  ipWhitelist: [],
  language: "en",
  timeFormat: 24,
  units: "metric",
modules: [
		{
			module: "alert",
		},
		{
			module: "updatenotification",
			position: "top_bar"
		},
		{
			module: "clock",
			position: "top_left"
		},


		{
			module: "newsfeed",
			position: "bottom_left",
			config: {
				feeds: [
					{
						title: "The Hindu",
						url: "https://www.thehindu.com/news/international/feeder/default.rss"
					}
				],
				showSourceTitle: true,
				showPublishDate: true,
				broadcastNewsFeeds: true,
				broadcastNewsUpdates: true
			}
		},
		{
			module: "MMM-Wallpaper",
			position: "fullscreen_below",
			config: { // See "Configuration options" for more information.
			  source: "/r/wallpaper",
			  slideInterval: 180 * 1000 // Change slides every 3 minute
			}
		},
		{
			module: 'MMM-CustomText',
			position: 'bottom_right',
			config: {
				initialMessage: "<b>Don't Forget</b><br>Tracker <br> Racket <br> Bottle <br> Snacks",
				uniqueID: "myUniqueID",
				animationSpeed: 1000 * 2,
			},
		},
		{
		  module: 'MMM-MyPrayerTimes',
		  position: 'top_right',
		  header: 'My Prayer Times',
		  config: {
				mptLat: 12.9629,				// Replace with the latitude of your location - example mptLat: 12.34567
			  mptLon: 77.5775,				// Replace with the Longitude of your location - example mptLon: 76.54321
			  mptMethod: 3,				// Which calculation methode is used, see options below
			  mptOffset: "0,0,0,0,0,0,0,0,0",	// Time corrections for your location: Imsak, Fajr, Sunrise, Duhr, Asr, Sunset, Maghrib, Isha, Midnight
			  showSunrise: false,			// Display Sunrise, false if you want to hide
			  showSunset: false,			// Display Sunset, false if you want to hide
			  showMidnight: false,			// Display Midnight, false if you want to hide
			  showImsak: false,			// Display Imsak, false if you want to hide
			  show24Clock: true,			// Default display 24hour clock -> false is 12hour (AM/PM) clock
			  }
		},
		{
		  module: 'MMM-CalendarExt2',
		  config: {
			calendars : [
			  {
				name : "Zeba Calendar",
				url: "https://calendar.google.com/calendar/ical/family09332634814558387020%40group.calendar.google.com/public/basic.ics",
				afterDays: 6,
			  },
			],
			views: [
			  {
				   name: "myWeekView",
                mode: "daily",
                type: "row",
                position: "bottom_bar",
                slotCount: 7,
                locale: "en",
                hideOverflow: false,
			  },
			],
			scenes: [
			  {
				name: "DEFAULT",
				views: ["myWeekView"]
			  },
			],
		  },
		},

			
	]
};

/*************** DO NOT EDIT THE LINE BELOW ***************/
if (typeof module !== "undefined") { module.exports = config; }
