import { fetch } from './fetch';
import { buildElement } from './htmlBuilder';
import { buildSidebar } from './parser';

window.parseResume = async function (jsonPath, target) {
    const rsmObj = await fetch(jsonPath);
    console.log(rsmObj);
    if(rsmObj.rsm) {
        const sidebar = buildElement('sidebar');
        buildSidebar(rsmObj.rsm, sidebar);
    }
}

window.triggerParse();