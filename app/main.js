import { fetch } from './fetch';
import { buildElement } from './htmlBuilder';

window.parseResume = async function (jsonPath, target) {
    const rsmObj = await fetch(jsonPath);
    debugger;
    console.log(rsmObj);
    if(rsmObj.rsm) {
        const sidebar = buildElement('sidebar');
        
    }
}

window.triggerParse();