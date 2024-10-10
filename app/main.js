import { fetch } from './fetch';
import { buildElement } from './htmlBuilder';
import { buildSidebar, buildWorkExperience } from './parser';

window.parseResume = async function (jsonPath) {
  const rsmObj = await fetch(jsonPath);
  if (rsmObj.rsm) {
    const sidebar = buildElement('sidebar');
    buildSidebar(rsmObj.rsm, sidebar);

    const experience = buildElement('experience');
    buildWorkExperience(rsmObj.rsm.experience, experience);

    const target = document.querySelector('#resume_container');

    target.appendChild(sidebar);
    target.appendChild(experience);
  }
};

window.triggerParse();
