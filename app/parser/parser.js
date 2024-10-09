import { buildElement } from '../htmlBuilder';

function addTitle(obj, el) {
  const title = buildElement('title');
  title.innerHTML = obj.title;
  el.appendChild(title);
}

function fillDetails(data, el) {
  // create list of items
  // might be easiest just to make them list items and hide the bullet points where not needed i.e. for education
  // const items =
}

function buildInfoBlock(data, elementId) {
  const infoBlock = buildElement(elementId);
  addTitle(data, infoBlock);
  fillDetails(data, infoBlock);

  return infoBlock;
}

function buildEduBlock(data, elementId) {
  const eduBlock = buildElement(elementId);
  addTitle(data, eduBlock);
  const edu = document.createElement('div');
  edu.innerText = JSON.stringify(data);
  eduBlock.appendChild(edu);
  return eduBlock;
}

function buildContactInfo(data, elementId) {
  const contactInfoBlock = buildElement(elementId);
  const contactInfo = document.createElement('div');
  contactInfo.innerText = JSON.stringify(data.nameContact);
  contactInfoBlock.appendChild(contactInfo);
  return contactInfoBlock;
}

function buildSidebar(obj, el) {
  // each should be a call to an html builder function, like buildSkills

  const contactInfo = buildContactInfo(obj.contact, 'contact_info');
  const skillset = buildInfoBlock(obj.skills, 'skillset');
  const accomplishments = buildInfoBlock(
    obj.accomplishments,
    'accomplishments'
  );
  const education = buildEduBlock(obj.education, 'education');

  el.appendChild(contactInfo);
  el.appendChild(skillset);
  el.appendChild(accomplishments);
  el.appendChild(education);
}

export { buildSidebar };
