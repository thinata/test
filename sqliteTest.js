var sqlite = require('sqlite3').verbose();                                          
var db = new sqlite.Database('test.sqlite');

db.serialize(function() {

    // テーブルがなければ作成
    db.run('CREATE TABLE IF NOT EXISTS students(name TEXT, age INT)');
   
    // プリペアードステートメントでデータ挿入
    var stmt = db.prepare('INSERT INTO students VALUES(?,?)');
    stmt.run(["Tanaka", 12]);
    stmt.run(["Sato", 13]);
    stmt.run(["Nakamura", 15]);
    stmt.finalize();
  
   });
  
  db.close();
  
