import SQLite from 'react-native-sqlite-storage';

const db = SQLite.openDatabase(
  {name: 'gLocation', location: 'default'},
  () => {
    createTable();
    console.log('DB connected scuccessfully');
  },
  error => {
    console.log('DB Error: ', error);
  },
);

const createTable = async () => {
  await db.transaction(async tx => {
    await tx.executeSql(
      'CREATE TABLE IF NOT EXISTS locations (id INTEGER PRIMARY KEY AUTOINCREMENT,name TEXT, lat TEXT, lng Text);',
    );
  });
};
export default db;
