import { parseJson } from "./parse-json.js"

export const intro = parseJson('./game/temp_db/intro-3.json');
export const level_1 = parseJson('./game/temp_db/level_1.json');
export const level_2 = parseJson('./game/temp_db/level_2.json');
export const level_3 = parseJson('./game/temp_db/level_3.json');

//DUMMY DATA
export const dummyIntro = parseJson('./game/dummy_data/intro_dummy.json');