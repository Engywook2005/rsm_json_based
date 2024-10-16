import { fetch } from './fetch';
import { buildElement, removeMarginFromPos } from './htmlBuilder';
import { buildSidebar, buildWorkExperience } from './parser';
import '../scss/style.scss';

window.parseResume = async function (jsonPath) {
  const rsmObj = await fetch(jsonPath);
  if (rsmObj.rsm) {
    const sidebar = buildElement('sidebar');
    const target = document.querySelector('#resume_container');
    buildSidebar(rsmObj.rsm, sidebar);
    target.appendChild(sidebar);
    buildWorkExperience(rsmObj.rsm.experience, target);

    removeMarginFromPos();
  }
};

window.triggerParse();
