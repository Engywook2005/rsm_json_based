import { buildElement } from '../htmlBuilder';

function addBlockTitle(obj, el, extraClass = null) {
  const title = buildElement('title');
  if (extraClass) {
    title.classList.add(extraClass);
  }
  title.innerHTML = obj.title;
  el.appendChild(title);
}

function fillBullets(data, el) {
  const bulletBlock = document.createElement('ul');
  const activeItems = data.items.filter((item) => item.active);
  activeItems.forEach((item) => {
    const listItem = document.createElement('li');
    listItem.innerHTML = item.text;
    bulletBlock.appendChild(listItem);
  });
  el.appendChild(bulletBlock);
}

function buildInfoBlock(data, el) {
  addBlockTitle(data, el);
  fillBullets(data, el);
}

function buildEduBlock(data, el) {
  addBlockTitle(data, el);
  data.school.forEach((school) => {
    const schoolBlock = buildElement('school');
    const schoolData = school.school;
    schoolBlock.innerHTML = `${schoolData.schName}<br/>${schoolData.schAddress}`;
    el.appendChild(schoolBlock);
  });
}

function buildContactInfo(data, el) {
  const nameContact = data.nameContact;

  el.innerHTML = `${nameContact.name}<br/>${nameContact.email}<br/>${nameContact.phone}`;
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

function handleTopLevelDetails(obj, el) {
  const employer = buildElement('employer');
  const duration = buildElement('duration');
  const jobTitle = buildElement('job_title');
  const headline = buildElement('job_headline');
  const skills = buildElement('job_skills');
  const employerDuration = buildElement('employer_duration');

  employer.innerHTML = obj.company.coName;
  duration.innerHTML = `${obj.duration.start} to ${obj.duration.end}`;
  jobTitle.innerHTML = obj.title;
  headline.innerHTML = obj.headline;
  skills.innerHTML = obj.skillz;

  employerDuration.appendChild(employer);
  employerDuration.appendChild(duration);
  el.appendChild(employerDuration);
  el.appendChild(jobTitle);
  el.appendChild(headline);
  el.appendChild(skills);
}

function buildWorkExperience(obj, el) {
  addBlockTitle(obj, el, 'experience');

  // Only handle active positions
  const activePositions = obj.positions.filter((position) => {
    return position.active;
  });

  activePositions.forEach((position) => {
    const positionElement = buildElement('position');
    el.appendChild(positionElement);

    handleTopLevelDetails(position, positionElement);

    if (position.items) {
      fillBullets(position, positionElement);
    }
  });
}

export { buildSidebar, buildWorkExperience };
