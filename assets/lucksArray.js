const lucks = [
  'В същата крачка продължавай и на инат не се предавай!',
  'С приятели нови напред - това ще бъде твоят нов късмет.',
  'Трудолюбив бъди и много спечели!',
  'Не всичко в живота е пари, но в изобилие ще ги имаш ти.',
  'Труди се и учи - стипендия хвани!',
  'На пакости да се отдадеш - това ще бъде твоят нов стремеж!',
  'Сбъдва се твоята мечта - ще летиш с прасета в Космоса!',
  'Мъдростта от теб не бяга, и все повече ще ти приляга!',
  'Ех, късмет, късмет! Всичко ще ти е на берекет!',
  'Кесията ти да бъде яка, защото те чака повишение на заплата!',
  'Ред е на ново облекчение - голямо данъчно намаление!',
  'Метлата зарежи и със спокойствие се зареди!',
  'Чакат те нови заложби - ще спретнеш свои изложби!',
  'И без златна пелерина - в професията си ще бъдеш Прима!',
  'Дори в президентските двори за твоите способности ще се говори!',
  'Косата заглади - ще те дават по всички новини!',
  'Без спирка и умора - избран си за купонджията на народа!',
  'Дори и без най-добрия издател - ще станеш най-четения писател!',
  'Старите митове ти остави - Творчеството в теб ти намери!',
  'И без да ставаш феномен, предстои ти сексуален подем!',
  'Ще смениш старата къща - ще живееш във фантазията мъжка!',
  'Падна ти се радостта, да надскочиш най-високата планина.',
  'Отивай за нов тиган - ще хванеш великан шаран!',
  'Ще заминеш за западните ширини, за да оставиш своите следи.',
  'Дори северното сияние, няма да попречи на твоето прекрасно очарование!',
  'Пътят ти с мъдрост ще се освети, щом на изток ще тръгнеш ти.',
  'Ако сте в лошо настроение, направете си подарък.',
  'Когато нещата се вършат с радост, те стават извор на повече радост.',
  'Който почива на лаврите си, ги износва.',
  'Давай повече, отколкото се очаква. И го прави с желание.',
  'Идеите са като децата – няма по-прекрасни от вашите собствени.',
  'Странно нещо е животът – ако откажеш да приемеш друго, освен най- доброто, много често го получаваш.',
  'Неизреченото ти желание е пътят, по който не си поел. ',
  'Прави повече от това да слушаш – чувай!',
  'Използвайте чувството си за хумор. Ще ви свърши добра работа.',
  'Не позволявайте амбициите ви да надвишават възможностите ви.',
  'Всичко, което се повтаря, губи своя чар.',
  'Когато човек се радва, си удължава живота.',
  'Почти всички нещастия идват оттам, че непрекъснато се сравняваме с другите.',
  'Няма значение количеството, а качеството.',
  'Великите хора не правят нищо наполовина.',
  'За плахия и колебаещия се всичко е невъзможно, защото му изглежда така.',
  'Правете това, което ви се удава - така никога няма да сгрешите.',
  'Всеки проблем си има своето решение. Просто ви трябва време, за да го откриете.',
  'Който не умее да се подчинява, той не умее да ръководи.',
  'Величието се появява в някои хора, но малцина са тези, в които изява намира добродетелта.',
  'Истинското предназначение на човек е да живее, не да съществува.',
  'Държавна лотария, тото, на твоя страна е числото!',
  'Ново късметче таз година: с колегите – сговорна дружина!',
  'Стягай багажа за воаяжа!',
  'Таз година е щастлива, сила и здраве ще преливат!',
  'Годината ще те омае, любов около теб витае!',
  'Таз година работата ти се пада. Ала и печалба – за награда! ',
  'Кариера ще ти е приоритет – я министър, депутат – напред!',
  'Тук няма искаш и не щеш – в службата ще порастеш!',
  'Пътуване до тайнствена страна ще имаш през годината добра!',
  'Ще бъде Коледа красива, годината за теб – щастлива!',
  'Не се шегувам, ти печелиш – късмета скоро ще намериш.',
  'Годината започва вече – ще стигнеш в нея надалече.',
  'От купон на купон скачаш ти на Купидон! ',
  'На съседа бричката си подари, че нова кола ще караш ти! ',
  'Цяла година ще те вали дъжд от всякакви пари!',
  'Да си късметлия май ти е патент – таз година ти се пада нов апартамент.',
  'През тази година ти смело пристъпяй напред, защото късмет ще те дебне навред!',
  'Паричките ти в портмонето ще са като звездичките в небето.',
  'Чесънче – скилидка тънка – дяволи ще гони вънка, а пък с люспица от леща чака те любов гореща!',
  'Мързелът ти куфара си стяга, от теб далече ще избяга.',
  'Знай, че предстои ти повишение, което заслужаваш без съмнение. ',
  'Ще се сбъдне твоята мания – да си душа на цялата компания',
  'Ще изпъкнеш с качества пред другите и се издигаш – твои са заслугите.',
  'И тази година добър късмет улучи – пада ти се здраве и благополучие!',
  'Голям късмет избра си, браво – ще се радваш на отлично здраве! ',
  'Стига ти тая награда, парата на тебе се пада',
  'Ще работиш без дори да спираш, плановете си ще реализираш. ',
  'В игра джакпота ще уцелиш и крупна сума ще спечелиш.',
  'Новата година нов късмет ти прати – В бизнеса постигаш завидни резултати!',
  'Година те чака красива, съдбовна, ще бъдеш в плен на магия любовна!',
  'Пада ти се ненадейно много щастие семейно',
  'Бяла спретната къщурка с две коли отпред и мадама за притурка – туй е твоят нов късмет!',
  'Хазартът ти е дарба! Тука има – тука няма, пада ти печалба от тотото голяма!',
  'Пада ти се днес парата – няма вече до заплата да се чудиш и се маеш как да свържеш двата края',
  'За нова работа се стягай! И от късмета си не бягай!',
  'За шефски пост се приготви! Е, пак ще бачкаш до зори.',
  'Ученето продължава, успешен край скоро се задава!',
  'Здраве и Здравец са твоят късмет!',
  'Голяма компания, купон до зори, това е късметът ти, не го губи!',
  'Нова къща за теб ще има, и ще живеете в нея двамина-трима-четирима!',
  'Нова червена кола, може би не Ферари, но също толкова добра!',
  'Не хвърляй късмета си на боклука и ще имаш голяяяма сполука!',
  'Очаква ни Коледа красива! И мноого щастлива година!',
  'Приятел нов ще си намериш да, но ако спреш да се звериш!',
  'Цяяяла година ще имаш хляб за двамина!',
  'Голям късмет – през новата година! Чака те живот с мнооого мед!',
  'През новата година ще виждате нещата под различен ъгъл - Астигматизмът ви се засилва.',
  'Новата година ще ви донесе много нови емоции - Пийте си редовно валериана.',
  'Трябват ти пари? Джакпота удари!',
  'С чудесата винаги трябва да си нащрек. Може да се промъкнат тихо и да те изненадат.',
  'В живота получаваш това, което си дал. Защото в живота всичко се връща.',
  'Не се тревожи твърде много за хора, които не ги е грижа за теб.',
  'Когато се усмихваш на живота, в крайна сметка заживяваш живот, който си струва усмивката.',
  'Само един човек може да те направи щастлив и да промени живота ти. Ти самият.',
  'Понякога всичко, от което имаш нужда, са 20 секунди луд кураж.',
  'Понякога първата любов идва след всичките.',
  'Някога. Някъде. Някой те чака, за да изтанцува живота си с теб.',
  'Семейството ти ще расте, семейното огнище ще става още по-топло и уютно. Вярвай в своето утре!',
  'Сладък е денят, в който може да направиш някому добро!',
  'Слагай шапката си днес тръгвай смело и с финес ще те срещне вест една на мечтата ти - сестра!',
  'Днес си пожелай нещо съвсем ново! След месец то ще е готово!',
  'Ако не ти харесва това, което получаваш, промени това, което даваш. Дон Хуан',
  'Ако можеш да си орел, не се напъвай да си пръв сред гаргите. Питагор',
  'В щастието бъди умерен, в нещастието разумен. Периандър',
  'Ако не умееш да сваляш стреса, тогава не го слагай.',
  'Когато нещата стигнат до шоколад, няма смисъл да се съпротивляваш.',
  'С радост би станал по-добър. Но повече от това, няма накъде!',
  'Което искаш да кажеш днес, кажи го утре. Японска мъдрост',
  'Когато характерът на някого не ти е ясен, погледни приятелите му. Японска мъдрост',
  'Дръж си очите отворени за този, който мълчи. Японска мъдрост',
  'Ако нямаш илюзии, нямаш и разочарования. Японска мъдрост',
  'Доброто, направено тайно, се възнаграждава наяве. Японска мъдрост',
  'Много хора се страхуват да кажат какво искат. И точно затова не го получават. Мадона',
  'Ако желаеш нещо от цялото си сърце и душа, то непременно ще го получиш. Вивиан Лий',
  'Днес прави това, което другите не искат. Утре ще живееш така, както другите не могат. Джаред Лето',
  'Никога няма да ни се случи нещо, което не може да понесем. Марк Аврелий',
  'Не искайте много – не може да му платите цената. Баба ванга',
  'За да дишате по-леко, за да не ви мъчи сърцето, трябва да може да плачете. Индианска поговорка',
  'Ако направите грешка, смейте се над нея. Будистка мъдрост',
  'Не се бой да се поколебаеш, страхувай се да не се откажеш.',
  'Смисълът на живота е да умреш млад, но възможно най-късно. Будистка мъдрост',
  'Любовта от пръв поглед често се случва по здрач. Ирландска поговорка',
  'Направи всичко, което можеш, а за останалото се довери на съдбата.',
  'По-добре да бъдеш враг на добър човек, отколкото приятел на лош.',
  'Не задържай това, което си тръгва. Не гони това, което идва.',
  'Помисли и вземи решение. А като решиш – не мисли.',
  'Когато бог иска да те спаси, изпраща в живота ти човек, който да те обича.',
  'Ако вярваш в себе си, животът ще те подкрепи.',
  'Ако преодолееш страховете си, животът ще ти направи подарък.',
  'Ако отвориш сърцето си, ще дойде любов.',
  'Ако пуснеш миналото, болката ще си отиде.',
  'Не режи клона, на който седиш.',
  'Най-прекрасните сънища се случват, когато си буден.',
  'Миналото не се връща никога. Гледай напред!',
  'Щастието няма дълги ръце. То прегръща оня, който се доближи до него. Сенека',
  'Усмихни се на някой непознат. Това може да е единствената му радост за деня. Хорас Джексън Браун',
  'Мъката е като скъсаната дреха – мястото й е вкъщи.',
  'Седем пъти провери, преди да се усъмниш в някой човек.',
  'Целият свят прави път на този, който знае къде отива.',
  'Щастливи новини се задават. Кахъриите се предават.',
  'Не отлагай сбъдването на мечта!',
  'Ако нямаш къде да отидеш - ела на себе си.',
  'Ако е прекалена, дори топлината от слънцето изгаря.',
  'Дългото пътешествие започва с малка стъпка. Лао дзъ',
  'Преди да се опиташ да угодиш на другите, помисли какво те прави щастлив.',
  'Чака те живот, пълен с благодат.',
  'Най-доброто нещо, за което може да се хванем в живота, е да се държим един за друг. Одри Хепбърн',
  'Алаброса заглади, ще те дават в утрешните новини.',
  'Не всичко е пари, но ще си ги имаш ти!',
  'За шефски пост се приготви! Пак ще бачкаш до зори.',
  'Винаги ще имаш истински приятели, защото ти си такъв.',
  'Спри да мечтаеш. Започни да дерзаеш.',
  'Днес кажи на някого, че го обичаш.',
  'Слава, парички и любов се задават на твоя небосвод.',
  'Любовта на живота ти ще се появи през лятото.',
  'Ще намериш нещо, което другите желаят още по-горещо.',
  'Великите хора не правят нищо наполовина.',
  'Ако има нещо, за което да се бориш, тогава бори се.',
  'Остани верен на сърцето си и помагай на другите, без значение дали го оценяват или не.',
  'Не давай сливите за смет, днес ще имаш невероятен късмет.',
  'Денят ти ще е пълен с магични моменти.',
  'По-добре сама, отколкото зле придружена.',
  'Не бъди алчен! Имаш достатъчно.',
  'Не преследвай щастието! Създай го.',
  'Не се страхувай от това, което не познаваш.',
  'Добри новини отдалече ще ти донесе неочаквано човече.',
  'Ще наследиш земя. Посади липа.',
  'Твоите таланти ще се видят на кориците на медийни гиганти.',
  'Купи вино! Очаква те бурна вечер с приятели.',
  'Нов любовник ще намериш, на таван ще се катериш.',
  'Висок, красив и тъмен непознат ще срещнеш ти. Затуй отваряй своите очи!',
  'Предстои ти повишение, което заслужаваш без съмнение.',
  'Остани верен на тези, които биха направили същото за теб.',
  'Най-големият риск е да не поемеш никакъв.',
  'Привлекателен мъж ще ти прати съобщение.',
  'Спокойно, няма да боли! Сериозна неприятност ще те заобиколи.',
  'Крачето ти ще броди из земите на непознати народи.',
  'Ще изживееш велика любов съвсем скоро.',
  'Прави най-доброто, така няма да се обвиняваш за нищо.',
  'Ще станеш свидетел на специално събитие.',
  'Ще имаш дълъг и щастлив живот.',
  'Ще се сгодиш, недей да се боиш!',
  'Вместо кекс днес ще пробваш виртуален секс.',
  'Ще получиш поща, пълна с добри новини.',
  'Добра промяна пристига в живота ти.',
  'Няма да е делфин това. Любов ще е. "С деца на море"',
  'Трябва да си търпелив. Любовта невинаги е идеална. Тя си е просто любов. "Сватбеният агент"',
  'Всяка следваща минута е нов шанс да преобърнеш живота си. "Ванила Скай"',
  'Страхът може да те затвори. Надеждата може да те освободи. "Изкуплението Шоушенк"',
  'Човек прави каквото може, докато не разбере какво му е приготвила съдбата. "Последният самурай"',
  'Ако вярваш в любовта от пръв поглед, никога не спираш да се оглеждаш. "Отблизо"',
  'Животът е като кутия бонбони. Никога не знаеш какво ще ти се падне. "Форест Гъмп"',
  'Ако искам да видя пеперуди, ще трябва да изтърпя две-три гъсеници. "Малкият Принц"',
  'Единственият начин да се отървеш от изкушението е да му се отдадеш. Оскар Уайлд',
  'Любовта е отговорът, но докато го чакате, сексът повдига някои доста интересни въпроси. Уди Алън',
  'Не върви по утъпкания път... Вместо това ходи там, където няма път и остави диря. Робърт Фрост',
  'Любовта е теорема, която трябва да се доказва всеки ден. Архимед',
  'Внимавайте какво си пожелавате, защото може и да се сбъдне. Емет Фокс',
  'Ще живееш дълго и честито!',
  'Първият дъжд ще отмие страховете ти. След това действай!',
  'Направи малък жест за някого днес, доброто ще ти се върне!',
  'Време е да вземеш решение. Добрият шанс е на твоя страна!',
  'Не признаваш умората, но е време да презаредиш... Новото ще е по-добро!',
  'Не се страхувай от промяната. Ако знаеш само колко много е за добро...',
  'Добра вест лети към теб, но е тиха. Отвори й вратата...',
  'Ще имаш неочаквани целувки дори да не си падаш съвсем по тези милувки.',
  'Днес е твоят ден. Твоята планина те очаква. Д-р Сюс',
  'Нямаме право да употребяваме щастието, ако не го произвеждаме. Джордж Бърнард Шоу',
  'Приятелството е като чая – трябва да бъде силно и не много сладко. Джордж Бърнард Шоу',
  'Исках да те нямам завинаги, а не да те имам за кратко. Блага Димитрова',
  'Всеки човек е поука за другите - добра или лоша. "скакалец", Йордан Радичков"',
  'Обичай това, което имаш, преди животът да те научи да обичаш онова, което си имал!',
  'Може да имате всичко. Просто не всичкo наведнъж. Опра Уинфри',
  'Ако една жена не е права, по-добре и се извинете. Френска поговорка',
  'Седмицата е добра, пътуване до тайнствена страна.',
  'Нови имоти, купени с наследствени банкноти.',
  'Малко палаво юначе в дома ти ще проплаче.',
  'Колкото звездички в небето, толкова парички в портмонето.',
  'Късметът ти вещае, любов ще те омае!',
  'Догодина ще си имаш бебче, пухкаво и бяло като хлебче!',
  'Ще срещнеш любовта, вярвай в чудеса!',
  'Много работа те чака, но пък и добра заплата.',
  'На света се усмихни и грижите си забрави!',
  'Работата ще е песен, а животът ти чудесен!',
  'Гадже ще намериш, ако спреш да се звериш.',
  'Пада ти се ненадейно щастие семейно.',
  'За детски плач се приготви, не ще да мигваш до зори.',
  'Стига с тия комплекси, ти си много секси.',
  'Пада ти се ненадейно щастие семейно.',
  'По-добре да съжаляваш, че си направил нещо, отколкото че не си го направил!',
  'Отдалечи се от нещата, за да ги видиш по-добре.',
  'Бъди себе си, има достатъчно други хора.',
  'Всичко е позволено! Важното е да не те хванат.',
  'Ако съдбата ти затвори вратата, пробвай през прозореца.',
  'Ако няма къде да отидеш, ела на себе си.',
  'Когато всичко е срещу теб... Сигурно караш в насрещното платно.',
  'Ако някой се опита да те засенчи, остави го да слънчаса!',
  'Най-доброто нещо, за което може да се хванем в живота, е да се държим един за друг. Одри Хепбърн',
  'Ти си владетел на собствената си съдба.',
  'Ако искаш да се задомиш, трябва да се промениш.',
  'Понякога трябва да легнеш на пода, за да се изправиш.',
  'Всяко дълго пътуване започва с една-единствена стъпка. Лао Дзъ',
  'Никога не режи това, което можеш да развържеш. Жозеф Жубер',
  'Щеш не щеш в службата ще порастеш.',
  'Ти печелиш, късмета скоро ще намериш.',
  'Денят ще те омае, любов около теб витае.',
  'Ако си в лошо настроение, време е за интериорно подобрение.',
  'Не лежи на стари лаври, демоде е.',
  'Купи си нов тиган, време е да станеш в кухнята титан.',
  'Пада ти се дързостта, не се давай ти на старостта.',
  'Ще смениш старата къща, но ще имаш нова тъща.',
  'Метлата остави! С нерви ти не се хаби.',
  'Ех, късмет, късмет! Всичко ще е берекет.',
  'Приятели нови навред - нека това бъде твоят късмет.',
  'Здравето е по-добро от богатството.',
  'Бъди честен! С това не се печелят много приятели, но тези, които се печелят, са безценни! Джон Ленън',
  'Ще целунеш мъж повече от веднъж.',
  'Бурна нощ на тебе ти се пада, сложи си малко помада.',
  'Все още има достатъчно време, за да покажеш, че ти дреме.',
  'Най-умното нещо е да си подготвен за неочакваното.',
  'Любовта владее всичко. Не се давай на чичко паричко!',
  'Трудните дни са зад гърба. Махни се от ръба.',
  'Вярвай на интуицията си.',
  'Само истинските приятели ще ти кажат, когато лицето ти е мръсно. Сицилианска поговорка',
  'Тези, които имат любов, имат неизмеримо богатство.',
  'Любовта е единственото лекарство за нараненото сърце.',
  'Този, в когото ще се влюбите, е под носа ви.',
  'Търпението е кисело, но неговият плод е сладък.',
  'Ще станеш свидетел на чудо.',
  'Великите приключения чакат тези, които имат желание да погледнат зад ъгъла.',
  'Много парички в портфейла ти шикозен. Харчи си ги по начин виртуозен!',
  'Който е добър само за себе си, не е добър за никого. Волтер',
  'Вселената направлява твоя живот.',
  'Ще намериш буре с пари, за приятели не се скъпи.',
  'Само любовта ни кара да виждаме обикновените неща по необикновен начин.',
  'Добрата репутация струва повече от парите.',
  'Не си слагай спирачки. Купи си сексиграчки!',
  'Ще се изненадаш приятно. В душата ти ще бъде лятно.',
  'Някой от семейството ще те накара да се гордееш.',
  'Време е за нови приятелства.',
  'Не се паникьосвай. Шефовете омагьосвай.',
  'Нещо, което си загубил, ще се върне скоро при теб.',
  'Твоето безкрайно търпение скоро ще бъде възнаградено.',
  'Богатство чука на вратата.',
  'Отваряй си очите! Не искаш да пропуснеш това, което ти е под носа.',
  'Ще си паднеш по чужд мъж.',
  'Стара мечта ще стане реалност.',
  'Няма невъзможно за теб. Животът ти върви по мед.',
  'Този, по когото си падаш, също иска да е с теб.',
  'Усмихни се ти, нова рокля си купи!',
  'Ще черпиш гости с бяло сладко, всичко ще мине гладко.',
  'Човекът, в когото си влюбен, ще ти се обясни в любов.',
  'Реши какво искаш и го преследвай.',
  'Човек се учи от грешките си, а ти днес ще научиш много.',
  'Не това, което взимаме, а това, от което се отказваме, ни прави богати.',
  'Ще си паднеш по колега.',
  'Не може да имаш щастлив край, без да си правил грешки.',
  'Ще постигнеш велики дела.',
];

// const getInner = () => {
//   let wishesTexts = [];
//   const listLucks = document.querySelectorAll('[data-role="toclip"]');
//   for (let i = 0; i < listLucks.length; i++) {
//     const wish = listLucks[i].querySelector('[data-role="text"]');
//     wishesTexts.push(wish.innerText);
//   }
//   return console.log(wishesTexts);
// };

// const getInner = () => {
//   let wishesTexts = [];
//   const listLucks = document.getElementsByClassName(
//     'row landing-story-container sb0_0 collapse-for-small ',
//   );
//   console.log(listLucks);
//   for (let i = 0; i < listLucks.length; i++) {
//     const wish = listLucks[i].children[1].children[0].children[0].innerText;
//     wishesTexts.push(wish);
//   }
//   return console.log(wishesTexts);
// };
// getInner();

export default lucks;
