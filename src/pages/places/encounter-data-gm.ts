export interface EncounterData {
  book: string;
  page: string;
  title: string;
  description: string;
}

// Matriz oficial del Manual de la Directora (Tirada D66 cruzada con el Terreno)
export const gmGuideMatrix: Record<number, Record<string, number>> = {
  41: { plains: 1, forest: 1, dark_forest: 1, hills: 1, mountains: 1, lake: 0, marsh: 1, quagmire: 1, ruins: 1 },
  42: { plains: 16, forest: 16, dark_forest: 1, hills: 2, mountains: 35, lake: 0, marsh: 5, quagmire: 4, ruins: 4 },
  43: { plains: 2, forest: 17, dark_forest: 18, hills: 31, mountains: 31, lake: 1, marsh: 9, quagmire: 5, ruins: 5 },
  44: { plains: 3, forest: 18, dark_forest: 19, hills: 21, mountains: 21, lake: 1, marsh: 9, quagmire: 7, ruins: 6 },
  45: { plains: 4, forest: 2, dark_forest: 20, hills: 22, mountains: 22, lake: 38, marsh: 11, quagmire: 8, ruins: 8 },
  46: { plains: 5, forest: 28, dark_forest: 21, hills: 3, mountains: 4, lake: 38, marsh: 12, quagmire: 9, ruins: 9 },
  51: { plains: 6, forest: 3, dark_forest: 3, hills: 4, mountains: 5, lake: 4, marsh: 12, quagmire: 10, ruins: 9 },
  52: { plains: 7, forest: 6, dark_forest: 25, hills: 5, mountains: 23, lake: 4, marsh: 13, quagmire: 11, ruins: 9 },
  53: { plains: 34, forest: 7, dark_forest: 24, hills: 7, mountains: 7, lake: 39, marsh: 16, quagmire: 12, ruins: 11 },
  54: { plains: 8, forest: 34, dark_forest: 9, hills: 33, mountains: 33, lake: 39, marsh: 18, quagmire: 13, ruins: 12 },
  55: { plains: 9, forest: 8, dark_forest: 9, hills: 34, mountains: 36, lake: 39, marsh: 21, quagmire: 14, ruins: 13 },
  56: { plains: 10, forest: 24, dark_forest: 10, hills: 24, mountains: 24, lake: 39, marsh: 29, quagmire: 16, ruins: 21 },
  61: { plains: 11, forest: 9, dark_forest: 11, hills: 9, mountains: 9, lake: 5, marsh: 30, quagmire: 21, ruins: 21 },
  62: { plains: 12, forest: 10, dark_forest: 12, hills: 32, mountains: 32, lake: 5, marsh: 38, quagmire: 23, ruins: 24 },
  63: { plains: 13, forest: 11, dark_forest: 13, hills: 11, mountains: 11, lake: 40, marsh: 40, quagmire: 29, ruins: 29 },
  64: { plains: 14, forest: 12, dark_forest: 29, hills: 12, mountains: 12, lake: 40, marsh: 41, quagmire: 30, ruins: 30 },
  65: { plains: 15, forest: 13, dark_forest: 27, hills: 13, mountains: 13, lake: 41, marsh: 42, quagmire: 34, ruins: 34 },
  66: { plains: 30, forest: 26, dark_forest: 30, hills: 14, mountains: 37, lake: 41, marsh: 42, quagmire: 42, ruins: 43 }
};

export const gmGuideEncounters: Record<number, EncounterData> = {
  1: { 
    book: "Manual de la Directora de Juego", 
    page: "147", 
    title: "LA NIEBLA DE SANGRE", 
    description: "Todo ocurre de manera casi imperceptible. Al principio, todos los sonidos se extinguen y lo único que oís es vuestra propia charla. Entonces sentís que se os eriza el pelo de la nuca, como si el aire estuviera lleno de alguna energía extraña. Finalmente, la veis: la neblina carmesí que fluye hacia vosotras lentamente sobre el suelo. La Niebla de Sangre.\n\nLas aventureras se han metido en una bolsa de Niebla de Sangre viva. Viene de todas partes y forma un anillo alrededor del grupo. Si la vigía la descubre a tiempo, cada aventurera puede hacer una tirada de ATLETISMO para escapar trepando a un árbol o algo similar. Si la vigía falla la tirada, las aventureras quedan atrapadas en la Niebla de Sangre. Si una aventurera puede hacer la tirada de ATLETISMO pero falla, también queda atrapada en la Niebla de Sangre. En cualquier caso, la aventurera puede hacer otra tirada de ATLETISMO cada ronda para escapar. Una aventurera que quede sumida en la Niebla de Sangre debe hacer una tirada de PERSPICACIA cada ronda. Si la falla, sufre 1 punto de daño a Empatía y una intensa nostalgia por su hogar. Si la víctima cae Derrotada, pierde la voluntad de vivir y, simplemente, se sienta a esperar a la muerte. Las otras aventureras deberán arrastrarla hasta un lugar seguro. Tras pasar un tiempo en la Niebla de Sangre, las aventureras serán atacadas por un sanguino." 
  },
  2: { 
    book: "Manual de la Directora de Juego", 
    page: "148", 
    title: "DUELO EN LOS BOSQUES", 
    description: "Oís sonido de lucha y gritos violentos mezclados con alaridos y canciones de batalla. Un poco más adelante hay un orco batiéndose en duelo con una elfa tatuada. Se lanzan el uno contra el otro y se paran los golpes sin conseguir darse. De vez en cuando se detienen para lanzarse insultos.\n\nLa elfa Heldemin, una recolectora de savia errante, llevaba mucho tiempo intentando acercarse al clan Roko para estudiar sus costumbres e intentar comprenderlos. Entonces conoció al herrero orco Alakran. Cuando descubrió que tenía una voz muy bonita para cantar, se le ocurrió que podrían hacer una obra de teatro y representarla tanto ante los orcos como ante los elfos. Como su amistad es bastante polémica, ensayan en un lugar apartado, en el bosque." 
  },
  3: { 
    book: "Manual de la Directora de Juego", 
    page: "149", 
    title: "EL ORCO FUGITIVO", 
    description: "Primero oís una canción gutural, «Msshamassh, gukkul, gukkul» y el sonido de un tambor que marca el ritmo. Entonces veis un grupo de orcos que caminan en una caótica procesión, cantando el himno. En medio del grupo, dos de los orcos llevan un enorme palo de madera del que cuelga un orco indefenso atado de pies y manos.\n\nUn grupo de orcos el doble de numeroso que las aventureras vuelve a su clan con el fugitivo Sargah, que huyó en busca de su destino en las Tierras Prohibidas. Los orcos tienen el perfil del orco úrhura." 
  },
  4: { 
    book: "Manual de la Directora de Juego", 
    page: "149", 
    title: "MUERTE DESDE EL AIRE", 
    description: "Oís un chillido que hiela la sangre que viene del cielo y, al momento siguiente, el batir de unas pesadas alas. Entonces lo veis. Un enorme pájaro demoníaco desciende desde las nubes. Os ve, vira en el aire y se lanza en picado a por vuestro grupo.\n\nLas aventureras han entrado de repente en el territorio de un grifo. Al principio, intentará asustar a las aventureras y medir sus fuerzas. Si las aventureras huyen por donde han venido, el grifo planeará en círculos sobre ellas, pero las dejará escapar. Si atacan al grifo o continúan adentrándose en su territorio, luchará hasta la muerte." 
  },
  5: { 
    book: "Manual de la Directora de Juego", 
    page: "149", 
    title: "EL BANQUETE DE LAS ARPÍAS", 
    description: "Primero oís los gritos: «¡Dameeee!», «¡Noooo, dameeee!», «¡Nooo, quieeero comeeerme a los pequeeñoooos!». Entonces divisáis a tres horribles criaturas con alas como de águila y cuerpos retorcidos, que se abalanzan aleteando sobre vosotros. ¡Arpías!\n\nTres arpías hambrientas, Krag, Mag y Serag, atacan a las aventureras para darse un banquete con sus cadáveres. Durante el ataque, una de ellas descubrirá que una de las aventureras lleva un objeto brillante y empieza a gritar emocionada sobre «el tesoro». Esto les dará a las aventureras una oportunidad de usar la codicia de las arpías en su contra. Esta bandada de arpías tiene una Fortaleza combinada de 9." 
  },
  6: { 
    book: "Manual de la Directora de Juego", 
    page: "150", 
    title: "EL CABALLO", 
    description: "Oís el relincho de un caballo y de repente lo tenéis delante. Un orgulloso semental con silla, manta y alforjas. No se ve a su dueño por ninguna parte. El caballo solitario sacude la cabeza, claramente frustrado.\n\nEl caballo pertenece al noble Lavide, que murió en una emboscada hace dos días. En las alforjas de su silla hay un hallazgo VALIOSO, además del sello de la casa noble del dueño, que tiene forma de rosa. El caballo está entrenado para el combate, pero no le gustan mucho los desconocidos. Sin embargo, superar una tirada de TRATO CON ANIMALES lo calmará. Si la tirada falla, las aventureras tendrán que capturarlo por la fuerza. Si devuelven el caballo y el sello a la familia de Lavide, que vive en un castillo cercano, esta les regalará el caballo, junto con un hallazgo PRECIADO." 
  },
  7: { 
    book: "Manual de la Directora de Juego", 
    page: "150", 
    title: "LA MASACRE CEBO", 
    description: "Frente a vosotras se extiende una escena terrible: una docena de humanos empapados en sangre, algunos arrastrándose por el suelo con las tripas fuera, aún vivos. Hay un carro de mercancías volcado. Unas pocas personas gimen, otras gritan. Una mujer con cota de malla intenta levantar una espada. Al veros, un joven comparativamente ileso grita histéricamente: —¡Ladrones! Se han llevado nuestros caballos. ¿Tenéis agua? ¿Alguna de vosotras es sanadora? ¡No, hermano, no te duermas!\n\nEn realidad, todo es un montaje y nadie está herido. Un grupo de esclavistas se ha cubierto de sangre e intestinos de animales para intentar hacer que las aventureras se acerquen a ellos con las armas envainadas. El líder, Harwa, tiene un cuerno de bronce y, cuando lo toca, todo el grupo debe ponerse en pie inmediatamente y atacar a sus «salvadoras». Su objetivo no es matar, sino dejar a las aventureras fuera de combate con sus porras y luego venderlas como esclavas, posiblemente en el pueblo de Muelehueso. Si alguna consigue escapar, los esclavistas no la perseguirán, sino que asegurarán a las que han capturado." 
  },
  8: { 
    book: "Manual de la Directora de Juego", 
    page: "150", 
    title: "EL GRAN OFENSOR", 
    description: "Una voz fuerte y agitada atraviesa el paisaje. Alguien está gritando burlas e insultos. Cuando os acercáis, veis una tambaleante estructura de madera que se eleva unos metros sobre el suelo. Sobre ella hay un pequeño orco de mirada altanera. Cuando os ve, se desabrocha los calzones y orina en vuestra dirección, sin parar de lanzar insultos.\n\nEl orco Khardnal se autoproclama «el Gran Provocador» y quiere despertar a la gente de su sueño. Khardnal considera su misión personal extender su palabra y provocar a los transeúntes para hacer que liberen su rabia interior. Cree que fue él quien hizo retirarse a la Niebla de Sangre, asustada. Si las aventureras lo atacan, Khardnal utilizará un arco o un hacha y un escudo. Le encanta dejarse llevar por su rabia berserker. Luchará hasta la muerte mientras provoca a sus oponentes y al mismo tiempo las elogia por estar en contacto con su rabia interior. Khardnal pertenece al clan Úrhura y tiene el perfil de un miembro típico con la adición del talento BERSERKER." 
  },
  9: { 
    book: "Manual de la Directora de Juego", 
    page: "151", 
    title: "LAS RUINAS DE ANTAÑO", 
    description: "Ante vosotras veis los fragmentados restos de lo que una vez fue un edificio, un bastión de civilización en las tierras agrestes. Ahora la naturaleza ha reclamado su lugar y no quedan más que unos restos caídos y recuerdos perdidos entre las nieblas de la historia.\n\nLas aventureras han encontrado unas ruinas adecuadas como lugar seguro para acampar. Para decidir el tipo de ruinas y quién vivió aquí, tira un D66: 11–16 Cabaña (Pareja de ancianos). 21–24 Molino (Molinero, enterrado en el patio de atrás). 25–32 Puesto de guardia (Explorador, muerto en servicio). 33–35 Templo (Hermanas del Cuervo asesinadas). 36–46 Granja (Mercader rico, muerto hace mucho). 51–54 Torre (Hechicero perdido). 55–62 Puesto avanzado (Otrora guarnecido por soldados aliseos). 64–66 Fonda (Viajeros antes de la Niebla de Sangre)." 
  },
  10: { 
    book: "Manual de la Directora de Juego", 
    page: "151", 
    title: "EL ZORRO", 
    description: "Una extraña canción resuena por la tierra. Una áspera voz masculina canta sobre flores moradas y tumbas profundas allá donde el cielo y la tierra se dan encuentro. Nunca habíais oído una canción como esta. Al doblar un recodo del camino, os encontráis de repente cara a cara con un zorrito. Os mira con los ojos muy abiertos. La canción ha cesado.\n\nEn realidad, el zorro es un demonio llamado Grelf y es quien estaba cantando la canción. Sin embargo, Grelf se enorgullece de meterse en su personaje de zorro y prefiere no cantar ni hablar mientras esté cerca de las aventureras. Si decide hablar, sonará como un guerrero viejo y cansado. Como es un demonio muy curioso, Grelf seguirá de cerca a las aventureras y dormirá cerca de ellas cuando acampen (a veces mientras duerme habla en sueños sobre otros mundos, otras veces solo ronca estruendosamente). Grelf puede transformarse en demonio en cualquier momento." 
  },
  11: { 
    book: "Manual de la Directora de Juego", 
    page: "152", 
    title: "EL PRÍNCIPE OLVIDADO", 
    description: "Una enorme pila de pesadas rocas, amontonadas unas sobre otras formando un monumento que reconocéis. Alguien ha invertido un obvio esfuerzo en construir el túmulo y bajo él hay enterrado algo o alguien.\n\nUn príncipe aliseo, cuyo nombre fue olvidado hace mucho, cayó en batalla hace cientos de años y fue enterrado aquí junto a su caballo y dos caballeros leales; todos perecieron en el mismo enfrentamiento. La tumba contiene un collar de plata (por valor de 2D6 monedas de plata), una vieja espada ancha y un trozo de cota de malla oxidada. Si las aventureras deciden buscar tesoros, ¡el príncipe despertará de su sueño y las atacará como un caballero de la Muerte! Puedes leer más sobre los caballeros de la Muerte en la página 78." 
  },
  12: { 
    book: "Manual de la Directora de Juego", 
    page: "152", 
    title: "LOS LADRONES HAMBRIENTOS", 
    description: "Un grupo de humanos desaliñados vestidos con ropas gastadas y equipados con todo tipo de armas sencillas sale al camino. Están sucios y parece que llevan varios días sin tomar una comida decente. Un hombre grande con barba negra da un paso adelante, escupe y se lleva la mano a la espada. —¿Quién puñetas sois vosotras? ¿A qué habéis venío? ¿Ejque no sabéis quién soy yo?\n\nUn grupo de ladrones muertos de hambre, iguales en número a las aventureras y liderados por Argam Dosbarbas, está pasando una mala racha y va en busca de un botín con el que levantar cabeza. Los ladrones están cansados y es posible convencerlos hablando de compartir el campamento si las aventureras les ofrecen comida e historias." 
  },
  13: { 
    book: "Manual de la Directora de Juego", 
    page: "153", 
    title: "EL HERMANO PLAGA", 
    description: "Os encontráis frente a los restos putrefactos de un desafortunado viajero. Los cuervos y las alimañas ya han hecho su parte y el cuerpo está casi reducido a unos trozos de carne.\n\nEl muerto era un hermano herrumbroso que cayó en desgracia y fue sometido a un cruel experimento por su señor. Se llamaba Lagras y lo infectaron a propósito con una enfermedad demoníaca. Lagras consiguió escapar de sus perseguidores, pero la infección ya había arraigado. Al final, la enfermedad siguió su curso y él murió en el sitio, presa de un intenso dolor. Toda aventurera que toque el cadáver quedará infectada, pero la enfermedad ya es mucho más débil y solo tiene virulencia 3. Durante el curso de la infección, la víctima tendrá fuertes alucinaciones en las que verá demonios retorcidos en lugar de personas. El cadáver también tiene un sencillo medallón de bronce con el símbolo de los Hermanos Herrumbrosos." 
  },
  14: { 
    book: "Manual de la Directora de Juego", 
    page: "153", 
    title: "LOS FLAGELANTES", 
    description: "Es difícil decir si lo primero que oís es el restallido de los látigos y los gritos o los golpes de tambor y los cánticos sagrados. Se acerca una gran procesión. Sus integrantes, vestidos de negro y envueltos en ramas de zarza, se azotan y golpean a sí mismos. Varios se han cortado la lengua o las orejas y algunos se han sacado los ojos. A la cabecera de la fila hay un grupo de mujeres vestidas de rojo que portan un gran plato de incienso ardiente. Una de ellas sostiene un palo con un extraño símbolo de hierro. En medio de la multitud hay una construcción de madera con ruedas. De unas cuerdas cuelgan personas desnudas con ganchos insertos bajo la piel. Unos esclavos encadenados empujan la estructura por el barro.\n\nLa líder de los sectarios es la madre Catyala, líder de una facción inesperadamente exitosa de la Iglesia herrumbrosa. Predica que la Niebla de Sangre se extendió por las Tierras Prohibidas para marcar su caída. Cuando la niebla se disipó, fue un signo de que se acercaba el fin. Hay abiertos portales al mundo de los demonios. Los bandidos y proscritos violan y saquean. La tierra se está rompiendo en pedazos. La única forma de salvar las Tierras Prohibidas es que sus gentes se castiguen lo suficiente para hacer que los dioses los perdonen. La madre Catyala intentará convencer a las aventureras de que se despojen de sus ropas y equipo y se unan a la multitud. Cuenta con la ayuda de un símbolo de hierro que contiene el conjuro ILUSIÓN. Si una aventurera mira al símbolo debe hacer una tirada de PERSPICACIA. Si la falla, verá el mundo a través de los ojos de la madre Catyala. El efecto durará hasta que el símbolo se destruya o quede fuera de su campo de visión." 
  },
  15: { 
    book: "Manual de la Directora de Juego", 
    page: "154", 
    title: "MENDIGOS", 
    description: "A lo lejos veis una muchedumbre de vagabundos hambrientos y cansados vestidos con harapos. Los mendigos os rodean con las manos extendidas, sin decir nada.\n\nEsta veintena de mendigos es lo que queda del pueblo de Sotofrey, que fue quemado hasta los cimientos por unos codiciosos aventureros." 
  },
  16: { 
    book: "Manual de la Directora de Juego", 
    page: "154", 
    title: "EL PILOTO DE GLOBO ENANO", 
    description: "En la lejanía veis una especie de capullo verde sobre un árbol. Al acercaros veis que se trata de un globo aerostático enganchado en la copa.\n\nEl enano Andred abjuró del dios Gran cuando el derrumbamiento de un túnel mató a su familia. Andred estaba en el otro lado del derrumbe. Los oyó gritar y asfixiarse uno tras otro. Desde entonces, se niega a poner el pie en el suelo y viaja por las Tierras Prohibidas en su globo aerostático. Para sobrevivir, echa el ancla por la noche sobre las casas y roba cosas que luego pueda intercambiar por comida y otros artículos de primera necesidad. Ahora el globo se ha estrellado contra un árbol. Andred se ha roto una pierna. Necesita ayuda para reparar el globo, pero le da miedo que las aventureras le roben. Andred tiene tres ballestas cargadas y un hacha de combate. En el globo hay varios objetos robados: un hallazgo SENCILLO y uno VALIOSO (tira en las tablas de «hallazgos en guarida» de las páginas 188 y 189)." 
  },
  17: { 
    book: "Manual de la Directora de Juego", 
    page: "154", 
    title: "BODA", 
    description: "En la lejanía se oye música y jolgorio, voces humanas y graves voces de orcos. Cantan canciones alegres. Cuando os acercáis veis un escenario de madera decorado con flores en el centro de un claro. Mesas con comida y bebida. Violines y acordeones. Y en el borde del claro hay una mujer orco y un hombre humano vestidos de blanco.\n\nLa orco Tregga y su futuro marido Robert han decidido dejar atrás sus vidas de guerreros y unirse en matrimonio. Han reunido a sus familiares y amigos más íntimos. Si las aventureras se acercan a la boda y hablan con alguien les presentarán a los novios, que las invitarán a quedarse. Algunos de los invitados a la boda, tanto orcos como humanos, han decidido sabotear la boda, ya que la idea de mezclar las dos razas les parece repugnante. Se han puesto de acuerdo para empezar una pelea entre ellos durante la ceremonia con la esperanza de que otros invitados se les unan. Las aventureras pueden unirse o intentar poner fin a la pelea." 
  },
  18: { 
    book: "Manual de la Directora de Juego", 
    page: "155", 
    title: "EL PANADERO DEMONÍACO", 
    description: "Cuando el viento cambia os llega un olor a pan recién hecho. Cuando os acercáis veis una casita de piedra acurrucada entre la vegetación. No tiene caminos, pastos ni campos. De la chimenea se eleva un denso humo y en sus pequeñas ventanas cuadradas brilla la luz.\n\nLa casa es el hogar de Melkar, un robusto mediano con una fina barba roja. Después de ser expulsado del pueblo de Pernty, encontró unas rocas demoníacas que utilizó para construir un horno. Melkar está vestido de blanco y lleva un gorro de cocinero. A su alrededor hay bandejas y boles llenos de masa. Dos de las bandejas tienen masa con forma de criaturas con brazos, piernas y pasas a modo de ojos. Quienes las miren más de cerca se darán cuenta de que los dos pedazos de masa están vivos. Melkar utiliza su horno para hacer criaturas de masa. Su plan es utilizarlas como siervos y guerreros. Ya hay una hornada hecha. En los arcones, los cacharros y los armarios hay escondidas veinte criaturas de masa armadas con lanzas pequeñas y cuchillos. Melkar invitará a las aventureras a tomar té con pastas (que no están vivas). Si descubren alguna criatura de masa, Melkar les dirá que tiene la capacidad de crear vida y que quiere vivir en paz con sus creaciones. Si las aventureras le atacan llamará a todas sus criaturas. En un arcón de madera hay una joya con un diamante (por valor de 1 moneda de oro) que Melkar le robó al jefe del pueblo de Pernty. Si las aventureras intentan hacer sus propias pastas, el demonio que vive en las rocas intentará corromperlas.\n\n✥ PASTAS DEMONÍACAS: Las pastas demoníacas de Melkar se tratan como una sola criatura. La única característica que tienen es Fortaleza, que es igual al número de pastas dividido entre 5 (redondeando hacia arriba). Las pastas no tienen habilidades. Sus ataques tienen daño de arma 1 (puñalada).\n\n✥ SEGUNDO ENCUENTRO: La siguiente vez que las aventureras visiten a Melkar, estará rodeado de 70 pastas demoníacas ocupadas en producir armas y hornear más criaturas de masa. Sirven a Melkar, que está arrellanado en su sillón, dándose un festín con los panes y bollos que se han portado mal, que gritan agónicamente mientras el panadero demoníaco los devora. Ahora el mediano muestra su verdadera personalidad: actúa de forma altanera e incluso amenazadora.\n\n✥ TERCER ENCUENTRO: La tercera vez que las aventureras visiten el lugar, la casa estará vacía. Melkar se ha llevado doscientas pastas demoníacas al pueblo de Pernty. Los aldeanos de Pernty lo expulsaron porque robó una joya y ahora Melkar se venga de ellos haciendo que sus tropas quemen el pueblo y tomen a sus habitantes como esclavos. Si las aventureras permanecen en la casa, Melkar regresará unas horas más tarde con un montón de medianos encadenados." 
  },
  19: { 
    book: "Manual de la Directora de Juego", 
    page: "156", 
    title: "EL SANTUARIO ANIMAL", 
    description: "Cuando la oscuridad se extiende y vuestro fuego arde veis el primer par de ojos entre los árboles. Al principio son solo unos pocos, pero cada vez aparecen más ojos, más de los que podéis contar. Estáis rodeadas. Entre los árboles se mueven lechuzas y otras criaturas del bosque, sobre vuestras mochilas corretean ratones. A vuestros pies se arrastran gusanos y sobre vuestras hachas y espadas se posan pájaros. Hay un ciervo a unos metros de vosotras, junto a un zorro. Los animales se acercan lentamente.\n\nLas aventureras han acampado accidentalmente en el santuario secreto de los animales. Los animales están aquí para expulsarlas pacíficamente. Al campamento irán llegando más animales: grandes jabalíes, lobos y alces. Utilizarán sus hocicos y cuernos para intentar echar a las aventureras y sus cosas del lugar. Si las aventureras los atacan, los animales retrocederán, pero no se marcharán. Al final llegará un alce negro, el líder sagrado de los animales del bosque. Empujará al grupo reunido en torno a la hoguera con los cuernos y dará un sonoro resoplido. Si alguien lo ataca, todos los animales del bosque lo ayudarán y no dejarán de atacar a las aventureras hasta que abandonen el bosque." 
  },
  20: { 
    book: "Manual de la Directora de Juego", 
    page: "156", 
    title: "LA PROCESIÓN FÚNEBRE", 
    description: "Se acerca algo muy grande que emite un sonido que nunca antes habíais oído. Unos toques de cuerno prolongados, interminables, hacen reverberar el aire. Unos crujidos y chasquidos crean un ritmo en torno a los aullidos que cortan el aire en quejumbrosas cascadas. Al cabo del rato aparecen cinco árboles andantes que llevan entre ellos a un sexto. Dan un paso, tocan el cuerno, dan unos cuantos pasos más, se detienen y luego vuelven a tocar en una lenta procesión.\n\nLos ents llevan a un pariente muerto hacia la Niebla Calma en una procesión fúnebre. El rubí del corazón de elfo del ent muerto sigue en su lugar, pero la criatura ha pedido que la liberen de su cuerpo de árbol y monten su rubí en el muro conmemorativo de Rosenstaad. Si los ents se encuentran en una localización o región extraña, quizá lleven al ent muerto a un lugar que este siempre haya querido ver. La procesión va escoltada por unos cuantos elfos, pero no se darán a conocer a menos que las aventureras molesten a los ents. Si lo hacen, los elfos exclamarán: «¡Marchaos, malditos sacos de carne!». Los elfos no son muy numerosos, pero si hay un combate, los ents dejarán su carga en el suelo y se unirán a la lucha. No matarán a nadie si pueden evitarlo, pero destrozarán el equipo y romperán unos cuantos miembros a modo de advertencia. Si las aventureras no interrumpen la procesión, las dejarán en paz. Puede incluso que un ent abandone la procesión, se incline ante las aventureras y les dé un regalo: una fruta o semilla del ent muerto o algo más útil." 
  },
  21: { 
    book: "Manual de la Directora de Juego", 
    page: "157", 
    title: "EL ESPÍRITU VENGADOR", 
    description: "¡Silencio! ¿Lo oís? ¿Un grito? ¿Una voz? Os miráis entre vosotras, pero el paisaje está desierto. Entonces, súbitamente, sentís un viento gélido que sopla a través de vuestra alma. Una figura gris reluciente toma forma en medio del grupo, con un rostro otrora humano distorsionado en un grito sobrenatural. Habéis oído historias junto a la hoguera otras veces. Un alma perdida, un espíritu incapaz de encontrar el descanso.\n\nLas aventureras se encuentran con el fantasma del comandante aliseo Garmagol, muerto hace mucho. Durante una campaña en la que participó hace cuatrocientos años cayó en una trampa que le tendieron sus hombres, cansados de la guerra, y fue asesinado por sus propias tropas. Desde entonces, Garmagol ha vagado por la tierra en busca de venganza. Como hace mucho que los soldados aliseos se fueron, cualquiera que tenga un arma le vale. Si las aventureras son observadoras, verán que el fantasma tiene una reluciente daga clavada entre los omóplatos. Puede que las aventureras puedan razonar con el fantasma si hablan de la daga y de cómo murió. No se puede evitar al fantasma VIGILANDO." 
  },
  22: { 
    book: "Manual de la Directora de Juego", 
    page: "157", 
    title: "LA SOPLADORA DE VIDRIO", 
    description: "Cada vez que el viento abraza los árboles oís un silbido en la lejanía. Suena como una enorme flauta. Una estructura de cristal se eleva sobre el paisaje: pasillos, aberturas, espirales y túneles, todo hecho de vidrio. En el centro del edificio hay una enana, iluminada por las llamas de una chimenea. La enana levanta del fuego la punta de un largo tubo de metal, cubierta por una masa de reluciente vidrio. Aplica los labios al otro extremo y, con un fuerte soplido, la masa se transforma en un largo tubo de cristal serpenteante.\n\nLa enana Varamak tuvo una visión de la estructura de cristal en sueños. Cree que es posible comprender, frenar y controlar la Niebla de Sangre. Lleva varias semanas trabajando en el proyecto de su vida. Lo único que le queda es recolectar Niebla de Sangre en un tubo de cristal y verterlo en la estructura. Les pide ayuda a las aventureras. Lo que Varamak no sabe es que la visión que tuvo fue creada por un demonio. Si consigue recoger la Niebla de Sangre, se extenderá por la estructura a cada vez más velocidad, emitiendo un chillido. Al cabo de 1D6 horas, el vidrio se romperá y la niebla cubrirá los alrededores llenando todo ese hexágono del mapa (consulta el encuentro aleatorio de la Niebla de Sangre). Se dispersará tras 1D6 semanas." 
  },
  23: { 
    book: "Manual de la Directora de Juego", 
    page: "158", 
    title: "EL CACHORRITO", 
    description: "Oís un suave gemido y luego algo que parece un ladrido. Por debajo de un arbusto sobresale una cola. Es un cachorrito de perro que os mira con sus ojazos.\n\nResulta que el cachorrito se ha hecho daño en una pata. Su madre y otros cinco cachorros murieron a manos de la trol Ghormald, que quería almorzárselos, pero el cachorrito consiguió escapar. Ghormald ha seguido sus huellas y entra en escena con un cachorro muerto en cada mano y la cara cubierta de sangre. Les pide a las aventureras que dejen a su presa tranquila. Está lista para luchar por él con la porra que lleva colgada del cinturón." 
  },
  24: { 
    book: "Manual de la Directora de Juego", 
    page: "158", 
    title: "EL OGRO MALDITO", 
    description: "—Ay-ho, ay-ho, a casa a descansar… —resuena una voz profunda y gutural. Al momento siguiente veis a un ogro enorme y musculoso arrastrando un saco. Algo se debate dentro del saco y el ogro lo golpea repetidamente. Los movimientos cesan inmediatamente—. ¡Que te calles, te he dicho!\n\nEl ogro Kurge va de camino a su guarida con su última captura. En el saco se encuentra el desafortunado hermano herrumbroso Oker, que invocó la maldición del dios Herrumbre sobre Kurge. El ogro aún no ha decidido qué hacer con Oker, pero se está planteando hacer algo divertido, como practicar tiro de piedras o arrancarle las extremidades. Todo depende del humor de Kurge." 
  },
  25: { 
    book: "Manual de la Directora de Juego", 
    page: "158", 
    title: "LAS CANDELERAS", 
    description: "Junto a una cabaña hay dos mujeres, una vieja y una joven, de pie junto a un caldero puesto al fuego de unos troncos. Junto a ellas hay unas velas azules colgadas de un soporte. Las mujeres parecen preocupadas y no dejan de mirar al bosque.\n\nLas aventureras se encuentran con una mujer llamada Engsle y su hija. Hacen un tipo de vela especial usado en ceremonias religiosas. El hijo de la familia desapareció hace una hora en el bosque mientras recogía centellazul, un tipo de flor que se usa para hacer las velas. La madre ofrece diez velas a las aventureras si consiguen encontrar a su hijo y traerlo de vuelta. Las velas que están haciendo no funcionarán hasta que se hayan sumergido en una tina de centellazul pulverizada. Cuando estén acabadas, al encenderlas producen el mismo efecto que el conjuro PURIFICAR ESPÍRITU de nivel de poder 1. El hijo de Engsle ha sido capturado por el ogro Gonlab, que se lo ha llevado como esclavo." 
  },
  26: { 
    book: "Manual de la Directora de Juego", 
    page: "159", 
    title: "INCENDIO FORESTAL", 
    description: "Percibís un olor a humo al tiempo que un ciervo pasa corriendo junto a vosotras. Veis una humareda negra sobre los árboles. El viento cambia y el fuego viene hacia aquí.\n\nUn incendio forestal ruge. Los animales tratan de escapar, las copas de los árboles se prenden y un humo sofocante se extiende por el bosque. El fuego avanza rápidamente. Las aventureras deben superar una prueba de SUPERVIVENCIA para escapar. Si la fallan, serán atacadas por las llamas, tira por el ataque contra cada aventurera con seis dados de base (daño de arma 1). Entonces las aventureras pueden volver a tirar por SUPERVIVENCIA para escapar. Si vuelven a fallar, el fuego ataca con siete dados de base. Este ciclo continúa añadiendo otro dado de base al ataque del fuego cada vez hasta que las aventureras escapen o queden Derrotadas. No olvides pedirles a los jugadores que describan sus acciones y narrarles cómo las llamas rodean a sus personajes, cómo se les llenan los pulmones de humo y cómo se derrumban delante de ellas árboles ardiendo." 
  },
  27: { 
    book: "Manual de la Directora de Juego", 
    page: "159", 
    title: "ARENA NEGRA", 
    description: "El bosque se abre y veis un gigantesco claro rodeado de árboles. El suelo está cubierto de arena negra. No veis ninguna planta. Hay algunas rocas que podrían ser restos de casas. En mitad del claro hay alguien sentado, una niña con la mirada fija en el suelo. El lugar apesta a azufre. La arena se agita cuando el viento sopla a través del claro.\n\nDos hechiceros rivales se encontraron en el pueblo de Sotoagreste. Uno de ellos falló el conjuro y el percance provocó la destrucción tanto de los hechiceros como del pueblo entero. La única superviviente fue la niña, llamada Linn. Está encerrada en sí misma y no contesta a lo que le dicen, ni tampoco se mueve ni se resiste si las aventureras se la llevan con ella. Al cabo de 1D6 días, si le dan de comer, puede contarles a las aventureras lo que ocurrió. Si permanece con ellas, mostrará que el accidente le otorgó unos potentes poderes mágicos que no sabe controlar. Linn quiere aprender a lanzar conjuros. Quiere matar a todos los hechiceros de las Tierras Prohibidas." 
  },
  28: { 
    book: "Manual de la Directora de Juego", 
    page: "160", 
    title: "LA CASA VACÍA", 
    description: "En la lejanía se ve el humo de una chimenea. Hay una casita al abrigo de unos altos árboles. En un tendedero de palos hay una colada puesta a secar. Junto al edificio hay un pequeño corral delimitado por una valla, pero no se ve ningún animal. Hay un pequeño campo rodeado de rocas sacadas de esa misma tierra. Unos verdes tallos se alzan en derechas hileras. Oís el murmullo de un arroyo.\n\nLas aventureras han llegado a una casa de campo, pero la familia que vivía en ella acaba de ser atacada y hecha esclava. La casa está vacía. El fuego aún está encendido y sobre la mesa de la cocina hay cardadores de lana. En una cuna hay tirado un muñeco. Hay una silla volcada y la pared está decorada por una salpicadura de sangre coagulada. Ni los residentes ni los secuestradores aparecen por ninguna parte, pero afuera, en el barro, se pueden encontrar huellas de pisadas. Si las aventureras rastrean a los secuestradores, descubrirán que el señor del lugar necesita nuevos esclavos para su mina de plata." 
  },
  29: { 
    book: "Manual de la Directora de Juego", 
    page: "160", 
    title: "CRUJIR DE HUESOS", 
    description: "Aparecen sin previo aviso. Es un grupo de lo que en otro tiempo fueron orgullosos guerreros humanos. Ahora no son más que esqueletos a punto de desmoronarse, que por alguna razón han cobrado vida. Son totalmente silenciosos, pero cuando empiezan a moverse oís el seco sonido de huesos de siglos de antigüedad entrechocando unos con otros. Las sonrientes calaveras de los esqueletos abren las mandíbulas al atacar, emitiendo un grito inaudible.\n\nUn D6+3 esqueletos atacan a las aventureras sin previo aviso. Luchan hasta el último, pero no son especialmente rápidos y es bastante fácil huir de ellos, aunque los esqueletos perseguirán a las aventureras mientras permanezcan a la vista." 
  },
  30: { 
    book: "Manual de la Directora de Juego", 
    page: "160", 
    title: "TERAMALDA", 
    description: "Un olor a carne quemada os da en la nariz y, al mismo tiempo, oís unas pesadas pisadas. Algo se acerca a través de la espesura. La criatura hace un estruendo infernal, chirriando y traqueteando. Hasta la tierra tiembla. Frente a vosotras emerge de entre la vegetación una enorme caballero, completamente cubierta por una antigua armadura negra oxidada. Tiene un símbolo grabado en la coraza. La criatura lleva una espada manchada de marrón por la sangre seca.\n\nLa armadura andante es la extraña criatura no muerta Teramalda, que vaga por las Tierras Prohibidas en busca de venganza desde que los enanos la quemaran viva dentro de su armadura hace 350 años. Los Hermanos Herrumbrosos la consideran la campeona de su dios, Herrumbre, ya que su coraza lleva el símbolo de la deidad y principalmente mata enanos. Teramalda se mantiene con vida gracias a un pincho de hierro mágico que atraviesa el pecho de la ferral por dentro de la armadura. Es prácticamente invulnerable y no contestará si se le habla. Cada encuentro con Teramalda será diferente: ✥ PRIMER ENCUENTRO: Teramalda simplemente se quedará de pie mirando a las aventureras durante un rato hasta que decida que no son lo bastante interesantes. Si las aventureras la atacan, pasa directamente al tercer encuentro. ✥ SEGUNDO ENCUENTRO: Teramalda atacará a las enanas que haya en el grupo. ✥ TERCER ENCUENTRO: Teramalda clasifica a las aventureras como enemigas y las ataca. No las perseguirá si huyen. ✥ CUARTO ENCUENTRO: Teramalda considera a las aventureras enemigas juradas y las persigue. Camina lentamente y se la puede oír a cierta distancia, pero nunca se rinde. Encontrará a sus enemigas mientras estas lleven algo de hierro." 
  },
  31: { 
    book: "Manual de la Directora de Juego", 
    page: "161", 
    title: "LOS CANTORES DE PIEDRA", 
    description: "Una extraña estructura gigantesca y erosionada se alza sobre el paisaje. Lanza unos débiles destellos, como si estuviera hecha de metal mezclado con piedra. La construcción no es un edificio y no sirve para nada que os podáis imaginar. Junto a ella hay un grupo de enanos ocupados con herramientas de medida y mapas. Un guardia con armadura y hacha os ve y os señala.\n\nLos enanos del clan Belderand han retomado la tarea de extender el globo del mundo, un trabajo que ha estado pausado debido a las guerras y la Niebla de Sangre. En este momento, están comprobando el estado de las antiguas construcciones. El grupo está liderado por la cantora de piedra Porisia Vozdeplata y está acompañado por unos cuantos soldados que actúan como guardias. Porisia es muy entusiasta y estará encantada de hablar sobre el trabajo en honor al dios enano Gran. La cantora de piedra enana Porisia Vozdeplata y dos de sus estudiantes han vagado en secreto por las tierras, intentando purificar este mundo de los demonios. El grupo es bastante pacífico y, sobre todo, no quiere ser molestado. Una o un enano del grupo se dará cuenta de lo que ocurre con una tirada exitosa de LEYENDAS o PERSPICACIA. Si se interrumpe a los cantores de piedra, pedirán a las aventureras de forma cortés, pero firme, que se marchen." 
  },
  32: { 
    book: "Manual de la Directora de Juego", 
    page: "161", 
    title: "RATAS", 
    description: "Unos chillidos de roedor os hacen mirar colina abajo, donde veis una treintena de ratas bullendo sobre algo envuelto en unos paños blancos. Solo cuando el pequeño fardo empieza a gritar os dais cuenta de que las ratas han encontrado a un bebé vivo.\n\nEl pequeño bebé mediano ha sido abandonado por su madre, que lo tiró por un barranco, en parte porque el padre del bebé es el hombre que la esclavizó, pero también porque sabe que no habrá comida suficiente para que el niño sobreviva. Lo mejor es que tenga una muerte rápida. Milagrosamente, el niño ha conseguido sobrevivir a la caída sin un rasguño. Las ratas acaban de descubrir al bebé, cuyos gritos irán en aumento. Si las aventureras no lo salvan, su voz se apagará en un par de minutos. La madre, Belinda, vive en una destartalada cabaña cerca de allí. Una vez al día recibe la visita del padre del niño, un tirano que tiene varias familias por la zona, que controla con la ayuda de diez matones armados. Belinda fingirá que no reconoce al bebé, pero si las aventureras la presionan se derrumbará y les contará todo." 
  },
  33: { 
    book: "Manual de la Directora de Juego", 
    page: "162", 
    title: "EL LAMENTO DEL MINOTAURO", 
    description: "Un rugido espeluznante resuena por la tierra. Es un aullido cargado de tremenda ira… y tristeza. Al doblar el siguiente recodo del camino os encontráis una escena terrible: cuatro soldados yacen muertos en una violenta batalla y sobre los cadáveres se alza una minotaura ensangrentada, sollozando. La bestia está inclinada sobre otro minotauro, asesinado por una docena de flechas. La minotaura ruge su pena hacia el cielo. Entonces se vuelve hacia vosotras.\n\nKaun, la pareja de la minotaura Markut, ha muerto en combate contra un grupo de soldados de un castillo cercano, liderados por un soldado con cicatrices de guerra llamado Arren. Ahora mismo hay cuatro supervivientes de la patrulla escondidos entre unos árboles cercanos. Markut no descansará hasta que todos los soldados estén muertos. Los soldados de Arren le tienen un miedo mortal a la bestia, pero también quieren vengar a sus camaradas caídos y recuperar el estandarte que yace en el suelo entre los muertos. Las aventureras acaban en medio. ¿De qué lado se pondrán?" 
  },
  34: { 
    book: "Manual de la Directora de Juego", 
    page: "162", 
    title: "LOS MUERTOS INQUIETOS", 
    description: "Una compañía de bufones viaja por el camino, algunos a pie y otros en carros. Muchos de ellos van pintados de forma chillona y vestidos con atuendos cómicos, aunque este lugar en medio de la nada no es el sitio ideal para una actuación. Los que escoltan a caballo a la troupe os saludan tensamente. Ninguno lleva maquillaje ni pinturas.\n\nAl mirar más de cerca a los bufones salta a la vista que están extrañamente apáticos, que parecen viejos y huelen mal. Si se les pide que actúen, no contestan, no pueden hacer malabarismos ni con una sola bola y se les caen partes del cuerpo al mínimo intento de hacer acrobacias. En realidad, los bufones son muertos inquietos pintados, que los aldeanos han reunido en un rebaño y están trasladando en secreto a un lugar seguro, donde los Hermanos Herrumbrosos no puedan encontrarlos. Una unidad de guardias de hierro los está siguiendo y les dará alcance momentos después del encuentro. El capitán Holmar está de buen humor y les seguirá el juego, exigiendo que actúen para él y sus soldados. Al cabo de un rato, Holmar abandonará su fachada. Ordenará que los muertos sean trasladados al templo de los Hermanos Herrumbrosos más cercano para que los reeduquen como sirvientes y soldados, mientras que la escolta debe ser arrestada por su blasfema desobediencia. Las aventureras pueden ayudar a los aldeanos o seguir su camino. Si las aventureras vuelven a encontrarse con la troupe, a los bufones no muertos los estarán conduciendo pinchándoles con palos." 
  },
  35: { 
    book: "Manual de la Directora de Juego", 
    page: "163", 
    title: "EL TROL DORMIDO", 
    description: "Un terrible rugido hace añicos el silencio. Entonces os dais cuenta del hedor. Ante vosotras, las rocas de la montaña parecen haber cobrado vida. Una enorme forma gris moteada emerge de la ladera de la montaña, clavando en vosotras sus fríos ojos amarillos. Levanta unos pesados brazos rocosos y oís otro rugido. —«¿Quiénes sois, pequeñas sabandijas que osáis molestarr a Karrrg?»\n\nLas aventureras se han metido sin querer en la guarida del trol Karg y lo han despertado. Karg se levanta siempre de muy mal humor y no dejará pasar a las aventureras a menos que tengan un regalo para él (le gustan mucho las cosas brillantes) o que lo inviten a una cena consistente en uno de los jugosos goblins que hay por la zona. Karg también se planteará comerse a una de las aventureras o a su caballo a cambio de dejarlas pasar." 
  },
  36: { 
    book: "Manual de la Directora de Juego", 
    page: "163", 
    title: "LOS PELONES", 
    description: "Un grupo de criaturas acecha entre las rocas. Cuatro personas se acercan, todas armadas y envueltas en telas. Su líder gruñe como un lupino, pero en su rostro no hay ni un solo pelo.\n\nEl lupino Abaken y sus tres amigos fueron expulsados de la manada cuando perdieron todo su pelaje. Ahora se ocultan en las montañas, esperando a que pase alguien que pueda curarlos de la enfermedad que los ha vuelto «humanos». Abaken les cuenta a las aventureras que sus amigos y él siguieron a una cabra montesa por unas cuevas subterráneas. En su interior encontraron unos enormes cristales violetas y verdes. Dentro de uno de ellos había una cría de dragón negro que parecía dormida. Los cuatro decidieron regresar a la manada en busca de consejo, pero en el camino de vuelta se pusieron enfermos y débiles y perdieron todo su pelo. Quizá alguien pueda bajar al inframundo y hacer que les vuelva a crecer. Los lupinos han encontrado el arma secreta de Jagsatin la Hechicera: una cría de dragón que planeaba entrenar y utilizar en su batalla contra Zygofer. Sin embargo, Jagsatin lleva siglos muerta. Los cristales de las cuevas están infectados y se han colocado allí para mantener a raya a los intrusos. Si las aventureras se acercan a los cristales, sufrirán una enfermedad de virulencia 9. Para despertar a la cría de dragón, tienen que romper el cristal en el que duerme, para lo que se necesita un ataque que inflija al menos 4 puntos de daño. Cada ronda que estén cerca del cristal deben hacer una tirada de infección. La cría de dragón será receptiva el primer par de días y puede hacerse amiga de una aventurera que supere una prueba de TRATO CON ANIMALES. Pero crece rápido y, cuanto más crezca, más inteligente e independiente se volverá. Al principio, la cría de dragón será cariñosa, pero se irá volviendo cada vez más rebelde y al final abandonará a la aventurera de la que se hizo amiga." 
  },
  37: { 
    book: "Manual de la Directora de Juego", 
    page: "164", 
    title: "PASO CORTADO", 
    description: "El estrecho sendero serpentea por la ladera de la montaña. Al doblar un recodo, veis un paso flanqueado por unos altos y escarpados acantilados. Alguien ha volcado un carro para bloquear el camino. El carro está lleno de barriles y sacos de arena. No se ve movimiento alguno ni se oye nada. No hay forma de sortear el carro.\n\nEl enano Guntermann ha decidido compensar que su mina se haya agotado cobrando un «impuesto» a las caravanas y otros viajeros. Ha cortado varios caminos en las montañas. Este bloqueo está protegido por tres enanos. Si son atacados, tocarán un cuerno y al cabo de 1D6 turnos aparecerán tres enanos más. Si las aventureras quieren pasar sin luchar, tendrán que pagar 3 monedas de plata cada una." 
  },
  38: { 
    book: "Manual de la Directora de Juego", 
    page: "164", 
    title: "LOS INFECTADOS", 
    description: "Veis una barquita sin remos flotando a la deriva. En ella hay un montón de mantas. Las mantas se mueven, hay algo debajo.\n\nEn la barca hay una mujer llamada Linnaya, a la que han montado en la barca porque tiene la peste azul. Tiene el cuerpo cubierto de ampollas que supuran pus azul. Está muy débil y la infección le ha hecho perder la voz. Si las aventureras intentan entrar en contacto con ella, sufren el riesgo de infectarse. La peste azul tiene virulencia 5." 
  },
  39: { 
    book: "Manual de la Directora de Juego", 
    page: "164", 
    title: "EL POLIZÓN", 
    description: "Divisáis una brillante vela blanca y luego otra. Ante vosotras aparece un enorme barco de madera en el lago. Veis a media docena de personas trabajando en la cubierta. Una de ellas os saluda con el sombrero.\n\nLa coca mercante Manzana Lunar navega con un cargamento de especias, carne y diversas mercancías hacia una aldea situada al otro lado del lago. Los marineros están aburridos y estarán encantados de intercambiar historias y productos con las aventureras. El capitán Sertold puede plantearse incluso invitarlas a cenar en su camarote si quieren pasar la noche en el barco. Lo que Sertold no sabe es que la Manzana Lunar tiene un polizón, el goblin Meroggha. Este está huyendo de su brutal hermano, que resulta ser el líder de un clan de la zona. Cuando las aventureras sigan su viaje, el goblin se habrá colado en su barco." 
  },
  40: { 
    book: "Manual de la Directora de Juego", 
    page: "165", 
    title: "MUERTE DESDE ABAJO", 
    description: "De repente, parece que el agua que rodea a vuestro barco haya empezado a hervir. Algo se mueve por debajo, algo grande. Al momento siguiente, el barco se escora por un golpe desde abajo y casi os caéis por la borda. Tras eso, todo ocurre muy rápido. Primero uno, luego dos y luego tres tentáculos gigantescos se elevan por ambos lados. Agarran la nave, preparados para arrastrarla bajo las aguas. Obviamente, el monstruo que hay debajo no quiere dejaros viajar en paz.\n\nUn calamar gigante está atacando el barco. Cuando las aventureras le hayan cortado la mitad de los tentáculos, el monstruo volverá a sumergirse en las profundidades." 
  },
  41: { 
    book: "Manual de la Directora de Juego", 
    page: "165", 
    title: "EL MERCADER DE ALMAS", 
    description: "Un pequeño velero se desliza lentamente sobre las aguas. Está iluminado por diez lámparas de aceite, alguien toca una lira a bordo y en lo alto del mástil ondea un colorido pendón. En la embarcación viajan tres personas.\n\nEl comerciante Vergevil quiere hablar de negocios con las aventureras. Las mercancías están custodiadas por sus hermanas, Ginda y Aneta. El cargamento del barco incluye unas cuantas cosas peculiares. Recientemente, Vergevil se ha hecho con una colección de almas que tiene en botellas de cristal con el conjuro ATAR ALMA (consulta la página 139 del Manual del Jugador). Si las aventureras miran una botella, verán que dentro de ella se mueve una forma gaseosa y oirán el débil sonido de una voz o una respiración. Vergevil no tiene ni idea de qué hay en realidad en las botellas, pero sabe que son mágicas y quiere venderlas como artefactos poderosos. Quiere 10 monedas de plata por cada botella, pero también está dispuesto a intercambiarlas por otros objetos de valor. Si se abre una botella, el alma se escapa. Un druida que tenga el conjuro RESURRECCIÓN (consulta la página 124 del Manual del Jugador) puede dejar que el alma entre en un animal o incluso darle una segunda personalidad a una criatura inteligente. Tira 1D6. Con 1-3, el alma conserva su personalidad original y puede actuar racionalmente. Con 4-6, el alma se ha vuelto loca y actuará de manera irracional." 
  },
  42: { 
    book: "Manual de la Directora de Juego", 
    page: "166", 
    title: "LOS REPTILES CAZADORES", 
    description: "Oís un extraño cloqueo. Otros lo siguen, procedentes de otra dirección. Y de una tercera. Entre la niebla divisáis varias extrañas criaturas que avanzan hacia vosotras. Piel escamosa verde grisácea, dientes afilados y ojos amarillos. —¿Seerdooss? —sisea alguien. —Seerdiss graandess —sisea otra voz. —Seerdoss graandess y feeoss, ¿sabéiss habláss?\n\nUn grupo de saurios, tantos como aventureras más 1D6, se acercan a ellas. Están de caza, armados con lanzas y garrotes. Sheeerz, el líder, perdió a sus padres a manos de cazadores humanos y por tanto odia a todos los humanos (a los que los saurios consideran cerdos grandes, aunque no tienen claro si se comen o si sirven para alguna otra cosa), pero no son especialmente belicosos con las demás razas." 
  },
  43: { 
    book: "Manual de la Directora de Juego", 
    page: "166", 
    title: "ENTERRADOS VIVOS", 
    description: "Oís gritos en la distancia, atormentados lamentos de agonía. Cuando os acercáis veis una explanada entre unas casas de piedra abandonadas. Hay siete elfos armados con espadas y arcos de pie frente a una profunda fosa. Todos llevan plumas azules en el pelo. En la fosa hay una familia de elfos: una mujer, un hombre y dos niños. Gritan pidiendo ayuda, pero no intentan escalar para salir del agujero. Dos de los elfos que hay junto al hoyo están echando tierra al agujero con palas para enterrar viva a la familia.\n\nLa elfa Plumazul y sus cazarrecompensas han encontrado a la familia Ylendidra, que se dio a la fuga cuando se descubrió que habían estado escondiendo a unos orcos sentenciados a muerte. Se supone que Plumazul tiene que llevar a la familia ante la justicia, pero después de que la madre la atacara con un cuchillo ha decidido tomarse la justicia por su mano." 
  }
};
