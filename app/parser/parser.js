import { buildElement } from '../htmlBuilder';

function addTitle(obj, el) {
  const title = buildElement('title');
  title.innerHTML = obj.title;
  el.appendChild(title);
}

function fillBullets(data, el) {
  const bulletBlock = document.createElement('div');
  bulletBlock.innerText = JSON.stringify(data.items);
  el.appendChild(bulletBlock);
}

function buildInfoBlock(data, el) {
  addTitle(data, el);
  fillBullets(data, el);
}

function buildEduBlock(data, el) {
  addTitle(data, el);
  const edu = document.createElement('div');
  edu.innerText = JSON.stringify(data.school);
  el.appendChild(edu);
}

function buildContactInfo(data, el) {
  const contactInfo = document.createElement('div');
  contactInfo.innerText = JSON.stringify(data);
  el.appendChild(contactInfo);
}

function buildSidebar(obj, el) {
  const contactInfo = buildElement('contact_info');
  const skillset = buildElement('skills_accomplishments');
  const accomplishments = buildElement('skills_accomplishments');
  const education = buildElement('education');

  buildContactInfo(obj.contact, contactInfo);
  buildInfoBlock(obj.skills, skillset);
  buildInfoBlock(obj.accomplishments, accomplishments);
  buildEduBlock(obj.education, education);

  el.appendChild(contactInfo);
  el.appendChild(skillset);
  el.appendChild(accomplishments);
  el.appendChild(education);
}

function buildWorkExperience(obj, el) {
  console.log('fish');
}

export { buildSidebar, buildWorkExperience };
