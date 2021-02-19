const wordcrossDateInfo = () => {
      const todaysDate = new Date();

      const todaysFullDate = todaysDate.toLocaleDateString(undefined, {
        weekday: "long",
        year: "numeric",
        month: "short",
        day: "numeric",
      });

      const yesterdaysDate = new Date();
      yesterdaysDate.setDate(todaysDate.getDate() - 1);

      // ***  Though the body will always display today's date, I hardcode   ***
      // ***  the wordcross's date under the hood. Since I'm not going to    ***
      // ***  add new Micro and Daily wordcrosses every day like the NYT, I  ***
      // ***  implement a case statement that determines which of my seven   ***
      // ***  seeded wordcrosses gets displayed in the body based on the     ***
      // ***  current day of the week.                                       ***

      switch (todaysDate.getDay()) {
        case 0:
          return {
            todaysDate: todaysDate,
            todaysFullDate: todaysFullDate,
            yesterdaysDate: yesterdaysDate,
            microDate: "2020-08-03",
            dailyDate: "2019-01-27",
            dailyType: "Sunday"
          }
        case 1:
          return {
            todaysDate: todaysDate,
            todaysFullDate: todaysFullDate,
            yesterdaysDate: yesterdaysDate,
            microDate: "2020-10-22",
            dailyDate: "2020-07-06",
            dailyType: "Monday"
          }
        case 2:
          return {
            todaysDate: todaysDate,
            todaysFullDate: todaysFullDate,
            yesterdaysDate: yesterdaysDate,
            microDate: "2020-10-26",
            dailyDate: "2017-11-21",
            dailyType: "Tuesday"
          }
        case 3:
          return {
            todaysDate: todaysDate,
            todaysFullDate: todaysFullDate,
            yesterdaysDate: yesterdaysDate,
            microDate: "2019-09-22",
            dailyDate: "2019-07-24",
            dailyType: "Wednesday"
          }
        case 4:
          return {
            todaysDate: todaysDate,
            todaysFullDate: todaysFullDate,
            yesterdaysDate: yesterdaysDate,
            microDate: "2020-10-25",
            dailyDate: "2020-07-23",
            dailyType: "Thursday"
          }
        case 5:
          return {
            todaysDate: todaysDate,
            todaysFullDate: todaysFullDate,
            yesterdaysDate: yesterdaysDate,
            microDate: "2020-10-21",
            dailyDate: "2020-07-17",
            dailyType: "Friday"
          }
        case 6:
          return {
            todaysDate: todaysDate,
            todaysFullDate: todaysFullDate,
            yesterdaysDate: yesterdaysDate,
            microDate: "2020-08-08",
            dailyDate: "2020-02-15",
            dailyType: "Saturday"
          }
      }
};

export default wordcrossDateInfo;