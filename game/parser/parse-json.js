import { readJSON } from "./read-json.js";

export function parseJson(path){

    return JSON.parse(readJSON(path));

}