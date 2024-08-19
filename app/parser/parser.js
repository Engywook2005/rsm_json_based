import { buildElement } from "../htmlBuilder";

function addTitle(obj, el) {
    const title = buildElement('title');
    title.innerHTML = obj.title;
    el.appendChild(title);
}

function createSkillList(skills, el) {
    // create list of items
    // might be easiest just to make them list items and hide the bullet points where not needed i.e. for education
    // const items = 
}

function buildSkills(skills) {
    const skillBlock = buildElement('skillset');
    addTitle(skills, skillBlock);
    createSkillList(skills, skillBlock);

    return skillBlock;
}

function buildSidebar(obj, el) {

    const contactInfo = obj.contactInfo;
    const skillset = obj.skills;
    const accomplishments = obj.accomplishments;
    const education = obj.education;

    el.appendChild(skillset);

}

export { buildSidebar }