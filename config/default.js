const path = require('path');

module.exports = {
  // secret data can be moved to env variables
  // or a separate config
  port: process.env.PORT || 3000,
  secret: 'mysecret',
  root: process.cwd(),
  templatesRoot: path.join(process.cwd(), 'templates'),
  publicRoot: path.join(process.cwd(), 'public'),
  workersRoot: path.join(process.cwd(), 'workers'),

  // imported json params
  inputJsonParams: ['title', 'entry_date', 'author_lf', 'author_code', 'ISBN','cover'],
  bdJsonParams: ['title', 'date', 'author', 'description', 'isbn', 'image'], 
  qp: {
    queryOperators: ['', 'LIKE', '=','>','<','<=','>=','!='],
    queryLimit: ['', 10,20,30,50,100,200,500,1000],
    sorting: ['', 'ASC', 'DESC'],
  },

  monthNames: { Jan: 01, Feb: 02, Mar: 03, Apr: 04, May: 05, Jun: 06, Jul: 07, Aug: 08, Sep: 09, Oct: 10, Nov: 11, Dec: 12 },
  // 2500
  names: ['Aaran', 'Aaren', 'Aarez', 'Aarman', 'Aaron', 'Aaron-James', 'Aarron', 'Aaryan', 'Aaryn', 'Aayan', 'Aazaan', 'Abaan', 'Abbas', 'Abdallah', 'Abdalroof', 'Abdihakim', 'Abdirahman', 'Abdisalam', 'Abdul', 'Abdul-Aziz', 'Abdulbasir', 'Abdulkadir', 'Abdulkarem', 'Abdulkhader', 'Abdullah', 'Abdul-Majeed', 'Abdulmalik', 'Abdul-Rehman', 'Abdur', 'Abdurraheem', 'Abdur-Rahman', 'Abdur-Rehmaan', 'Abel', 'Abhinav', 'Abhisumant', 'Abid', 'Abir', 'Abraham', 'Abu', 'Abubakar', 'Ace', 'Adain', 'Adam', 'Adam-James', 'Addison', 'Addisson', 'Adegbola', 'Adegbolahan', 'Aden', 'Adenn', 'Adie', 'Adil', 'Aditya', 'Adnan', 'Adrian', 'Adrien', 'Aedan', 'Aedin', 'Aedyn', 'Aeron', 'Afonso', 'Ahmad', 'Ahmed', 'Ahmed-Aziz', 'Ahoua', 'Ahtasham', 'Aiadan', 'Aidan', 'Aiden', 'Aiden-Jack', 'Aiden-Vee', 'Aidian', 'Aidy', 'Ailin', 'Aiman', 'Ainsley', 'Ainslie', 'Airen', 'Airidas', 'Airlie', 'AJ', 'Ajay', 'A-Jay', 'Ajayraj', 'Akan', 'Akram', 'Al', 'Ala', 'Alan', 'Alanas', 'Alasdair', 'Alastair', 'Alber', 'Albert', 'Albie', 'Aldred', 'Alec', 'Aled', 'Aleem', 'Aleksandar', 'Aleksander', 'Aleksandr', 'Aleksandrs', 'Alekzander', 'Alessandro', 'Alessio', 'Alex', 'Alexander', 'Alexei', 'Alexx', 'Alexzander', 'Alf', 'Alfee', 'Alfie', 'Alfred', 'Alfy', 'Alhaji', 'Al-Hassan', 'Ali', 'Aliekber', 'Alieu', 'Alihaider', 'Alisdair', 'Alishan', 'Alistair', 'Alistar', 'Alister', 'Aliyaan', 'Allan', 'Allan-Laiton', 'Allen', 'Allesandro', 'Allister', 'Ally', 'Alphonse', 'Altyiab', 'Alum', 'Alvern', 'Alvin', 'Alyas', 'Amaan', 'Aman', 'Amani', 'Ambanimoh', 'Ameer', 'Amgad', 'Ami', 'Amin', 'Amir', 'Ammaar', 'Ammar', 'Ammer', 'Amolpreet', 'Amos', 'Amrinder', 'Amrit', 'Amro', 'Anay', 'Andrea', 'Andreas', 'Andrei', 'Andrejs', 'Andrew', 'Andy', 'Anees', 'Anesu', 'Angel', 'Angelo', 'Angus', 'Anir', 'Anis', 'Anish', 'Anmolpreet', 'Annan', 'Anndra', 'Anselm', 'Anthony', 'Anthony-John', 'Antoine', 'Anton', 'Antoni', 'Antonio', 'Antony', 'Antonyo', 'Anubhav', 'Aodhan', 'Aon', 'Aonghus', 'Apisai', 'Arafat', 'Aran', 'Arandeep', 'Arann', 'Aray', 'Arayan', 'Archibald', 'Archie', 'Arda', 'Ardal', 'Ardeshir', 'Areeb', 'Areez', 'Aref', 'Arfin', 'Argyle', 'Argyll', 'Ari', 'Aria', 'Arian', 'Arihant', 'Aristomenis', 'Aristotelis', 'Arjuna', 'Arlo', 'Armaan', 'Arman', 'Armen', 'Arnab', 'Arnav', 'Arnold', 'Aron', 'Aronas', 'Arran', 'Arrham', 'Arron', 'Arryn', 'Arsalan', 'Artem', 'Arthur', 'Artur', 'Arturo', 'Arun', 'Arunas', 'Arved', 'Arya', 'Aryan', 'Aryankhan', 'Aryian', 'Aryn', 'Asa', 'Asfhan', 'Ash', 'Ashlee-jay', 'Ashley', 'Ashton', 'Ashton-Lloyd', 'Ashtyn', 'Ashwin', 'Asif', 'Asim', 'Aslam', 'Asrar', 'Ata', 'Atal', 'Atapattu', 'Ateeq', 'Athol', 'Athon', 'Athos-Carlos', 'Atli', 'Atom', 'Attila', 'Aulay', 'Aun', 'Austen', 'Austin', 'Avani', 'Averon', 'Avi', 'Avinash', 'Avraham', 'Awais', 'Awwal', 'Axel', 'Ayaan', 'Ayan', 'Aydan', 'Ayden', 'Aydin', 'Aydon', 'Ayman', 'Ayomide', 'Ayren', 'Ayrton', 'Aytug', 'Ayub', 'Ayyub', 'Azaan', 'Azedine', 'Azeem', 'Azim', 'Aziz', 'Azlan', 'Azzam', 'Azzedine', 'Babatunmise', 'Babur', 'Bader', 'Badr', 'Badsha', 'Bailee', 'Bailey', 'Bailie', 'Bailley', 'Baillie', 'Baley', 'Balian', 'Banan', 'Barath', 'Barkley', 'Barney', 'Baron', 'Barrie', 'Barry', 'Bartlomiej', 'Bartosz', 'Basher', 'Basile', 'Baxter', 'Baye', 'Bayley', 'Beau', 'Beinn', 'Bekim', 'Believe', 'Ben', 'Bendeguz', 'Benedict', 'Benjamin', 'Benjamyn', 'Benji', 'Benn', 'Bennett', 'Benny', 'Benoit', 'Bentley', 'Berkay', 'Bernard', 'Bertie', 'Bevin', 'Bezalel', 'Bhaaldeen', 'Bharath', 'Bilal', 'Bill', 'Billy', 'Binod', 'Bjorn', 'Blaike', 'Blaine', 'Blair', 'Blaire', 'Blake', 'Blazej', 'Blazey', 'Blessing', 'Blue', 'Blyth', 'Bo', 'Boab', 'Bob', 'Bobby', 'Bobby-Lee', 'Bodhan', 'Boedyn', 'Bogdan', 'Bohbi', 'Bony', 'Bowen', 'Bowie', 'Boyd', 'Bracken', 'Brad', 'Bradan', 'Braden', 'Bradley', 'Bradlie', 'Bradly', 'Brady', 'Bradyn', 'Braeden', 'Braiden', 'Brajan', 'Brandan', 'Branden', 'Brandon', 'Brandonlee', 'Brandon-Lee', 'Brandyn', 'Brannan', 'Brayden', 'Braydon', 'Braydyn', 'Breandan', 'Brehme', 'Brendan', 'Brendon', 'Brendyn', 'Breogan', 'Bret', 'Brett', 'Briaddon', 'Brian', 'Brodi', 'Brodie', 'Brody', 'Brogan', 'Broghan', 'Brooke', 'Brooklin', 'Brooklyn', 'Bruce', 'Bruin', 'Bruno', 'Brunon', 'Bryan', 'Bryce', 'Bryden', 'Brydon', 'Brydon-Craig', 'Bryn', 'Brynmor', 'Bryson', 'Buddy', 'Bully', 'Burak', 'Burhan', 'Butali', 'Butchi', 'Byron', 'Cabhan', 'Cadan', 'Cade', 'Caden', 'Cadon', 'Cadyn', 'Caedan', 'Caedyn', 'Cael', 'Caelan', 'Caelen', 'Caethan', 'Cahl', 'Cahlum', 'Cai', 'Caidan', 'Caiden', 'Caiden-Paul', 'Caidyn', 'Caie', 'Cailaen', 'Cailean', 'Caileb-John', 'Cailin', 'Cain', 'Caine', 'Cairn', 'Cal', 'Calan', 'Calder', 'Cale', 'Calean', 'Caleb', 'Calen', 'Caley', 'Calib', 'Calin', 'Callahan', 'Callan', 'Callan-Adam', 'Calley', 'Callie', 'Callin', 'Callum', 'Callun', 'Callyn', 'Calum', 'Calum-James', 'Calvin', 'Cambell', 'Camerin', 'Cameron', 'Campbel', 'Campbell', 'Camron', 'Caolain', 'Caolan', 'Carl', 'Carlo', 'Carlos', 'Carrich', 'Carrick', 'Carson', 'Carter', 'Carwyn', 'Casey', 'Casper', 'Cassy', 'Cathal', 'Cator', 'Cavan', 'Cayden', 'Cayden-Robert', 'Cayden-Tiamo', 'Ceejay', 'Ceilan', 'Ceiran', 'Ceirin', 'Ceiron', 'Cejay', 'Celik', 'Cephas', 'Cesar', 'Cesare', 'Chad', 'Chaitanya', 'Chang-Ha', 'Charles', 'Charley', 'Charlie', 'Charly'], 
  //1000
  lastNames: ['Abbott','Acevedo','Acosta','Adams','Adkins','Aguilar','Aguirre','Albert','Alexander','Alford','Allen','Allison','Alston','Alvarado','Alvarez','Anderson','Andrews','Anthony','Armstrong','Arnold','Ashley','Atkins','Atkinson','Austin','Avery','Avila','Ayala','Ayers','Bailey','Baird','Baker','Baldwin','Ball','Ballard','Banks','Barber','Barker','Barlow','Barnes','Barnett','Barr','Barrera','Barrett','Barron','Barry','Bartlett','Barton','Bass','Bates','Battle','Bauer','Baxter','Beach','Bean','Beard','Beasley','Beck','Becker','Bell','Bender','Benjamin','Bennett','Benson','Bentley','Benton','Berg','Berger','Bernard','Berry','Best','Bird','Bishop','Black','Blackburn','Blackwell','Blair','Blake','Blanchard','Blankenship','Blevins','Bolton','Bond','Bonner','Booker','Boone','Booth','Bowen','Bowers','Bowman','Boyd','Boyer','Boyle','Bradford','Bradley','Bradshaw','Brady','Branch','Bray','Brennan','Brewer','Bridges','Briggs','Bright','Britt','Brock','Brooks','Brown','Browning','Bruce','Bryan','Bryant','Buchanan','Buck','Buckley','Buckner','Bullock','Burch','Burgess','Burke','Burks','Burnett','Burns','Burris','Burt','Burton','Bush','Butler','Byers','Byrd','Cabrera','Cain','Calderon','Caldwell','Calhoun','Callahan','Camacho','Cameron','Campbell','Campos','Cannon','Cantrell','Cantu','Cardenas','Carey','Carlson','Carney','Carpenter','Carr','Carrillo','Carroll','Carson','Carter','Carver','Case','Casey','Cash','Castaneda','Castillo','Castro','Cervantes','Chambers','Chan','Chandler','Chaney','Chang','Chapman','Charles','Chase','Chavez','Chen','Cherry','Christensen','Christian','Church','Clark','Clarke','Clay','Clayton','Clements','Clemons','Cleveland','Cline','Cobb','Cochran','Coffey','Cohen','Cole','Coleman','Collier','Collins','Colon','Combs','Compton','Conley','Conner','Conrad','Contreras','Conway','Cook','Cooke','Cooley','Cooper','Copeland','Cortez','Cote','Cotton','Cox','Craft','Craig','Crane','Crawford','Crosby','Cross','Cruz','Cummings','Cunningham','Curry','Curtis','Dale','Dalton','Daniel','Daniels','Daugherty','Davenport','David','Davidson','Davis','Dawson','Day','Dean','Decker','Dejesus','Delacruz','Delaney','Deleon','Delgado','Dennis','Diaz','Dickerson','Dickson','Dillard','Dillon','Dixon','Dodson','Dominguez','Donaldson','Donovan','Dorsey','Dotson','Douglas','Downs','Doyle','Drake','Dudley','Duffy','Duke','Duncan','Dunlap','Dunn','Duran','Durham','Dyer','Eaton','Edwards','Elliott','Ellis','Ellison','Emerson','England','English','Erickson','Espinoza','Estes','Estrada','Evans','Everett','Ewing','Farley','Farmer','Farrell','Faulkner','Ferguson','Fernandez','Ferrell','Fields','Figueroa','Finch','Finley','Fischer','Fisher','Fitzgerald','Fitzpatrick','Fleming','Fletcher','Flores','Flowers','Floyd','Flynn','Foley','Forbes','Ford','Foreman','Foster','Fowler','Fox','Francis','Franco','Frank','Franklin','Franks','Frazier','Frederick','Freeman','French','Frost','Fry','Frye','Fuentes','Fuller','Fulton','Gaines','Gallagher','Gallegos','Galloway','Gamble','Garcia','Gardner','Garner','Garrett','Garrison','Garza','Gates','Gay','Gentry','George','Gibbs','Gibson','Gilbert','Giles','Gill','Gillespie','Gilliam','Gilmore','Glass','Glenn','Glover','Goff','Golden','Gomez','Gonzales','Gonzalez','Good','Goodman','Goodwin','Gordon','Gould','Graham','Grant','Graves','Gray','Green','Greene','Greer','Gregory','Griffin','Griffith','Grimes','Gross','Guerra','Guerrero','Guthrie','Gutierrez','Guy','Guzman','Hahn','Hale','Haley','Hall','Hamilton','Hammond','Hampton','Hancock','Haney','Hansen','Hanson','Hardin','Harding','Hardy','Harmon','Harper','Harrell','Harrington','Harris','Harrison','Hart','Hartman','Harvey','Hatfield','Hawkins','Hayden','Hayes','Haynes','Hays','Head','Heath','Hebert','Henderson','Hendricks','Hendrix','Henry','Hensley','Henson','Herman','Hernandez','Herrera','Herring','Hess','Hester','Hewitt','Hickman','Hicks','Higgins','Hill','Hines','Hinton','Hobbs','Hodge','Hodges','Hoffman','Hogan','Holcomb','Holden','Holder','Holland','Holloway','Holman','Holmes','Holt','Hood','Hooper','Hoover','Hopkins','Hopper','Horn','Horne','Horton','House','Houston','Howard','Howe','Howell','Hubbard','Huber','Hudson','Huff','Huffman','Hughes','Hull','Humphrey','Hunt','Hunter','Hurley','Hurst','Hutchinson','Hyde','Ingram','Irwin','Jackson','Jacobs','Jacobson','James','Jarvis','Jefferson','Jenkins','Jennings','Jensen','Jimenez','Johns','Johnson','Johnston','Jones','Jordan','Joseph','Joyce','Joyner','Juarez','Justice','Kane','Kaufman','Keith','Keller','Kelley','Kelly','Kemp','Kennedy','Kent','Kerr','Key','Kidd','Kim','King','Kinney','Kirby','Kirk','Kirkland','Klein','Kline','Knapp','Knight','Knowles','Knox','Koch','Kramer','Lamb','Lambert','Lancaster','Landry','Lane','Lang','Langley','Lara','Larsen','Larson','Lawrence','Lawson','Le','Leach','Leblanc','Lee','Leon','Leonard','Lester','Levine','Levy','Lewis','Lindsay','Lindsey','Little','Livingston','Lloyd','Logan','Long','Lopez','Lott','Love','Lowe','Lowery','Lucas','Luna','Lynch','Lynn','Lyons','Macdonald','Macias','Mack','Madden','Maddox','Maldonado','Malone','Mann','Manning','Marks','Marquez','Marsh','Marshall','Martin','Martinez','Mason','Massey','Mathews','Mathis','Matthews','Maxwell','May','Mayer','Maynard','Mayo','Mays','Mcbride','Mccall','Mccarthy','Mccarty','Mcclain','Mcclure','Mcconnell','Mccormick','Mccoy','Mccray','Mccullough','Mcdaniel','Mcdonald','Mcdowell','Mcfadden','Mcfarland','Mcgee','Mcgowan','Mcguire','Mcintosh','Mcintyre','Mckay','Mckee','Mckenzie','Mckinney','Mcknight','Mclaughlin','Mclean','Mcleod','Mcmahon','Mcmillan','Mcneil','Mcpherson','Meadows','Medina','Mejia','Melendez','Melton','Mendez','Mendoza','Mercado','Mercer','Merrill','Merritt','Meyer','Meyers','Michael','Middleton','Miles','Miller','Mills','Miranda','Mitchell','Molina','Monroe','Montgomery','Montoya','Moody','Moon','Mooney','Moore','Morales','Moran','Moreno','Morgan','Morin','Morris','Morrison','Morrow','Morse','Morton','Moses','Mosley','Moss','Mueller','Mullen','Mullins','Munoz','Murphy','Murray','Myers','Nash','Navarro','Neal','Nelson','Newman','Newton','Nguyen','Nichols','Nicholson','Nielsen','Nieves','Nixon','Noble','Noel','Nolan','Norman','Norris','Norton','Nunez','Obrien','Ochoa','Oconnor','Odom','Odonnell','Oliver','Olsen','Olson','Oneal','Oneil','Oneill','Orr','Ortega','Ortiz','Osborn','Osborne','Owen','Owens','Pace','Pacheco','Padilla','Page','Palmer','Park','Parker','Parks','Parrish','Parsons','Pate','Patel','Patrick','Patterson','Patton','Paul','Payne','Pearson','Peck','Pena','Pennington','Perez','Perkins','Perry','Peters','Petersen','Peterson','Petty','Phelps','Phillips','Pickett','Pierce','Pittman','Pitts','Pollard','Poole','Pope','Porter','Potter','Potts','Powell','Powers','Pratt','Preston','Price','Prince','Pruitt','Puckett','Pugh','Quinn','Ramirez','Ramos','Ramsey','Randall','Randolph','Rasmussen','Ratliff','Ray','Raymond','Reed','Reese','Reeves','Reid','Reilly','Reyes','Reynolds','Rhodes','Rice','Rich','Richard','Richards','Richardson','Richmond','Riddle','Riggs','Riley','Rios','Rivas','Rivera','Rivers','Roach','Robbins','Roberson','Roberts','Robertson','Robinson','Robles','Rocha','Rodgers','Rodriguez','Rodriquez','Rogers','Rojas','Rollins','Roman','Romero','Rosa','Rosales','Rosario','Rose','Ross','Roth','Rowe','Rowland','Roy','Ruiz','Rush','Russell','Russo','Rutledge','Ryan','Salas','Salazar','Salinas','Sampson','Sanchez','Sanders','Sandoval','Sanford','Santana','Santiago','Santos','Sargent','Saunders','Savage','Sawyer','Schmidt','Schneider','Schroeder','Schultz','Schwartz','Scott','Sears','Sellers','Serrano','Sexton','Shaffer','Shannon','Sharp','Sharpe','Shaw','Shelton','Shepard','Shepherd','Sheppard','Sherman','Shields','Short','Silva','Simmons','Simon','Simpson','Sims','Singleton','Skinner','Slater','Sloan','Small','Smith','Snider','Snow','Snyder','Solis','Solomon','Sosa','Soto','Sparks','Spears','Spence','Spencer','Stafford','Stanley','Stanton','Stark','Steele','Stein','Stephens','Stephenson','Stevens','Stevenson','Stewart','Stokes','Stone','Stout','Strickland','Strong','Stuart','Suarez','Sullivan','Summers','Sutton','Swanson','Sweeney','Sweet','Sykes','Talley','Tanner','Tate','Taylor','Terrell','Terry','Thomas','Thompson','Thornton','Tillman','Todd','Torres','Townsend','Tran','Travis','Trevino','Trujillo','Tucker','Turner','Tyler','Tyson','Underwood','Valdez','Valencia','Valentine','Valenzuela','Vance','Vang','Vargas','Vasquez','Vaughan','Vaughn','Vazquez','Vega','Velasquez','Velazquez','Velez','Villarreal','Vincent','Vinson','Wade','Wagner','Walker','Wall','Wallace','Waller','Walls','Walsh','Walter','Walters','Walton','Ward','Ware','Warner','Warren','Washington','Waters','Watkins','Watson','Watts','Weaver','Webb','Weber','Webster','Weeks','Weiss','Welch','Wells','West','Wheeler','Whitaker','White','Whitehead','Whitfield','Whitley','Whitney','Wiggins','Wilcox','Wilder','Wiley','Wilkerson','Wilkins','Wilkinson','William','Williams','Williamson','Willis','Wilson','Winters','Wise','Witt','Wolf','Wolfe','Wong','Wood','Woodard','Woods','Woodward','Wooten','Workman','Wright','Wyatt','Wynn','Yang','Yates','York','Young','Zamora','Zimmerman'],


  dbConfig: {
  user: 'postgres',
  host: 'localhost',
  database: 'postgres',
  password: 'password', // По умолчанию пароля нет
  port: 5432, // Порт по умолчанию
	},

  dbConfigTest: {
  user: 'fmbgvretygpced' || 'postgres',
  host: 'ec2-46-137-170-51.eu-west-1.compute.amazonaws.com' ||'localhost',
  database: 'd7s0rt7hoktqrg' || 'koa_api',
  password: '8bb8899bd98882c847f6c92002d348e91bd44d37dae40e3b4c145bbada80e006' || 'password', // По умолчанию пароля нет
  port: 5432, // Порт по умолчанию
  },

};
