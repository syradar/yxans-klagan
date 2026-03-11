import { gmGuideMatrix, gmGuideEncounters, EncounterData } from './encounter-data-gm';
import { bookOfBeastsMatrix, bookOfBeastsEncounters } from './encounter-data-bob';

const d6 = () => Math.floor(Math.random() * 6) + 1;
const d66 = () => d6() * 10 + d6();

export interface WeatherResult { wind: string; rain: string; temperature: string; }
export interface TerrainEncounterResult { environment: string; camp: string; encounter: EncounterData | null; }

export const generateWeather = (): WeatherResult => {
  const windRoll = d6();
  let wind = windRoll <= 2 ? 'Nada.' : windRoll <= 4 ? 'Brisa. (Hacer Campamento +1)' : windRoll === 5 ? 'Vendaval. (Hacer Campamento -1)' : 'Tormenta. (Hacer Campamento -2. Tirada de Resistencia cada Cuarto de Día)';
  const rainRoll = d6();
  let rain = rainRoll === 1 ? 'Despejado. (Liderar el camino +1)' : rainRoll <= 4 ? 'Nada.' : rainRoll === 5 ? 'Llovizna/Nevada.' : 'Aguacero/Tormenta de nieve. (Liderar el camino -2. Tirada de Resistencia para avanzar)';
  const tempRoll = d6();
  let temperature = tempRoll === 1 ? 'Calor. (Tirada de Resistencia cada Cuarto de Día o estar Sediento)' : tempRoll <= 5 ? 'Agradable.' : 'Frío. (Tirada de Resistencia o estar Helado sin ropa de abrigo)';
  return { wind, rain, temperature };
}

const environmentTables: Record<string, Record<number, string>> = {
  plains: { 1: "La brisa juega con la hierba ondulante.", 2: "Plantas bajas resisten en el paisaje azotado por el viento.", 3: "Los campos están abiertos, con plantas floreciendo en grietas.", 4: "Un arroyo serpentea por el paisaje.", 5: "Un barranco atraviesa el paisaje.", 6: "El viento barre sobre arbustos bajos." },
  forest: { 1: "Los pájaros cantan y los abejorros zumban.", 2: "Musgo resbaladizo, extrañas setas e insectos enormes.", 3: "Reina un silencio opresivo.", 4: "Troncos rectos y altos con helechos hasta la cintura.", 5: "Rayos de luz solar atraviesan el follaje.", 6: "Un claro rodeado de árboles caídos." },
  dark_forest: { 1: "Los árboles están tan juntos que apenas entra luz.", 2: "Suelo cubierto de hojas muertas que apagan los pasos.", 3: "Sombras extrañas parecen moverse en la periferia de la visión.", 4: "Un silencio absoluto, roto solo por crujidos siniestros.", 5: "Un espeso manto de niebla cubre el suelo del bosque.", 6: "Los árboles tienen formas retorcidas como rostros angustiados." },
  hills: { 1: "El viento azota las cimas, pero se calma en los valles.", 2: "Las colinas son escarpadas y forman pasajes estrechos.", 3: "Unas colinas bajas ofrecen una vista asombrosa.", 4: "La niebla se acumula entre las colinas.", 5: "El viento susurra entre las rocas.", 6: "La grava cede ante el peso y resbala ruidosamente." },
  mountains: { 1: "Fuertes vientos azotan a las aventureras.", 2: "Banderas de plegaria ondean al viento, puestas por peregrinos.", 3: "Las nubes barren los pasos formando una niebla ventosa.", 4: "La montaña ofrece refugio y todo está notablemente tranquilo.", 5: "Un rápido rugiente obliga a dar un rodeo.", 6: "Enormes cantos rodados caen por las laderas." },
  lake: { 1: "El agua está quieta como un espejo.", 2: "Una brisa encrespa suavemente el agua.", 3: "Los pájaros se zambullen en el agua pescando.", 4: "El agua fluye con una fuerte corriente oculta.", 5: "La superficie está cubierta de algas espesas.", 6: "El lago es profundo y de un azul oscuro." },
  quagmire: { 1: "Grandes estanques separados por densos matorrales.", 2: "Lagos de algas ralentizan todo movimiento.", 3: "Una niebla se arrastra sobre el agua, enroscándose.", 4: "Algo grande y lento se mueve bajo la superficie.", 5: "Rostros pálidos miran hacia arriba desde el agua: soldados caídos.", 6: "Pájaros de largas patas vadean pescando." },
  marsh: { 1: "Enjambres de insectos bailan a la luz del sol.", 2: "Un pájaro solitario llama abatido a su bandada.", 3: "Criaturas desconocidas han dejado rastros acuosos.", 4: "Hay arbustos bajos llenos de bayas doradas.", 5: "El paisaje monótono se rompe por árboles esbeltos.", 6: "Grupos de charcos estancados hacen el viaje sinuoso." },
  ruins: { 1: "El suelo está cubierto de fragmentos de paredes rotas.", 2: "Pilares derribados yacen por todo el lugar.", 3: "Un jardín cubierto de maleza forma un laberinto viviente.", 4: "Los restos musgosos de lo que fue un gran salón.", 5: "Estatuas antiguas miran sin ver el horizonte.", 6: "Escombros amontonados forman pequeñas calles sin salida." }
};

const campTables: Record<string, Record<number, string>> = {
  plains: { 1: "Un barranco poco profundo ofrece buen refugio del viento.", 2: "Un acantilado solitario con un pequeño manantial.", 3: "Una gran hondonada ofrece cobijo cerca del suelo.", 4: "Un arroyo fluye por la llanura y acampáis entre sus juncos.", 5: "Una tienda de cuero abandonada puede repararse lo suficiente.", 6: "No hay más que suelo duro y hierba áspera, y aceptáis ese hecho." },
  forest: { 1: "Un claro con una gran piedra en el centro.", 2: "Una arboleda con espeso musgo proporciona un buen descanso.", 3: "Un arroyo murmurante os hace compañía durante la noche.", 4: "Una casa del árbol en lo alto, la tomáis prestada un rato.", 5: "Una sencilla choza de ramitas se alza en la arboleda.", 6: "Un par de árboles muertos se apoyan formando un techo." },
  dark_forest: { 1: "Bajo las inmensas raíces retorcidas de un árbol colosal.", 2: "Una pequeña cueva cubierta de musgo negro.", 3: "Un viejo círculo de piedras desgastadas.", 4: "Un lecho de setas gigantes ofrece un descanso cuestionable.", 5: "Las ruinas de la choza de un solitario leñador.", 6: "Se acampa a la intemperie sobre hojas podridas." },
  hills: { 1: "Una ruina en la cima de una colina proporciona refugio.", 2: "Un pequeño lago entre las colinas ofrece agua.", 3: "La cabaña destartalada de un pastor puede restaurarse.", 4: "Una gran madriguera cavada por una bestia es la mejor opción.", 5: "Un fuerte de madera abandonado ofrece protección.", 6: "Una mesa de piedra elevada da testimonio de antiguos ritos." },
  mountains: { 1: "Una caldera en forma de cuenco oculta el viento.", 2: "Un gran peñasco forma un túnel natural.", 3: "Una cresta rocosa ofrece protección contra el viento, pero no la lluvia.", 4: "Una cueva con viejos huesos de depredador da cobijo.", 5: "Se cava un ventisquero para hacer una cueva de nieve.", 6: "El borde de un glaciar ofrece un suelo duro." },
  lake: { 1: "Una pequeña isla o banco de arena.", 2: "Una vieja balsa abandonada en la orilla.", 3: "Un claro entre los altos juncos.", 4: "Una cueva excavada por el agua en las rocas.", 5: "Un embarcadero podrido por el tiempo.", 6: "Una franja de arena húmeda y fría; es lo que hay." },
  quagmire: { 1: "Un matorral tupido soporta vuestro peso sobre el agua.", 2: "Una estrecha franja de tierra servirá de campamento.", 3: "Una balsa atascada en la ciénaga es un buen lugar de descanso.", 4: "Una choza abandonada sobre zancos destartalados.", 5: "El esqueleto de un lagarto gigante ofrece suelo firme.", 6: "Un árbol muerto sobresale del agua negra, os amarráis a él." },
  marsh: { 1: "Un drenaje natural ha secado la turba para descansar.", 2: "Densos mechones de hierba tendrán que servir.", 3: "Árboles caídos mantienen el suelo lo bastante estable.", 4: "Encontráis un trozo de tierra un poco menos húmedo.", 5: "La cabaña hundida de un colono. El marjal ganó.", 6: "Un lugar rodeado de sauces que proporcionan relativa sequedad." },
  ruins: { 1: "Unos pilares caídos y cubiertos de maleza ofrecen refugio.", 2: "Una cripta saqueada tendrá que servir.", 3: "Una majestuosa estatua caída forma un techo en su brazo.", 4: "Cabezas de piedra forman un círculo fácilmente defendible.", 5: "Una cúpula derrumbada forma una habitación resguardada.", 6: "Un templo incendiado servirá como lugar de acampada." }
};

export const generateTerrainEncounter = (terrainId: string): TerrainEncounterResult => {
  const isBookOfBeasts = d6() >= 4;
  const dbEncounterMatrix = isBookOfBeasts ? bookOfBeastsMatrix : gmGuideMatrix;
  const dbEncounterData = isBookOfBeasts ? bookOfBeastsEncounters : gmGuideEncounters;

  const envRoll = d6();
  const campRoll = d6();
  let encRoll = d66(); 
  
  const encounterId = dbEncounterMatrix[encRoll]?.[terrainId] || 0;

  let encounterObj = null;
  if (encounterId !== 0) {
     if (dbEncounterData[encounterId]) {
        encounterObj = dbEncounterData[encounterId];
     } else {
        encounterObj = { book: isBookOfBeasts ? "Book of Beasts" : "Manual de la Directora", page: "?", title: `ID de Encuentro: ${encounterId}`, description: "Falta transcribir este texto. Pídeselo a la IA en el siguiente bloque." };
     }
  }

  const safeEnv = environmentTables[terrainId]?.[envRoll] || `[Entorno genérico]`;
  const safeCamp = campTables[terrainId]?.[campRoll] || `[Campamento genérico]`;

  return { environment: safeEnv, camp: safeCamp, encounter: encounterObj };
};
