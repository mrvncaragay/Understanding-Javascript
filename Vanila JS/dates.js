//Getting Date objects

let date = new Date();

//.getDay() -> 0-6 Sunday = 0, Monday = 1
//.getMonth() -> 0-11 January = 0, December = 11
//.getDate()
//.getFullYear()
//.getHours() -> 0-23 Midnight = 0
//.getMonutes()
//.getSeconds()
//.getMilliseconds()
//.getTime()

process.stdout.write(date.getHours().toString());