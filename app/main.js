import { fetch } from './fetch';
import { buildElement } from './htmlBuilder';
import { buildSidebar, buildWorkExperience } from './parser';

window.parseResume = async function (jsonPath) {
  const rsmObj = await fetch(jsonPath);
  if (rsmObj.rsm) {
    const sidebar = buildElement('sidebar');
    const target = document.querySelector('#resume_container');
    buildSidebar(rsmObj.rsm, sidebar);
    target.appendChild(sidebar);
    buildWorkExperience(rsmObj.rsm.experience, target);
  }
};

window.triggerParse();
