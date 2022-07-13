const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('test2.db');

let sql = `
select store.id, store.name, place.name as name2,menu.name as name3 
from store 
inner join place on store.place_id = place.id
inner join menu on store.menu_id = menu.id;
`

db.serialize( () => {
	db.all( sql, (error, row) => {
		if(error) {
			console.log('Error: ', error );
			return;
		}
		for( let data of row ) {
			console.log( data.id + ' : ' + data.name + ' : ' + data.name2 + ' : ' + data.name3 );
		}
	});
});
