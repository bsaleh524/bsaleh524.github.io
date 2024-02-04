const header = {
  // all the properties are optional - can be left empty or deleted
  homepage: 'https://mreagles524.github.io',
  title: 'BS.',
}

const about = {
  // all the properties are optional - can be left empty or deleted
  name: 'Basem Saleh',
  role: 'A Machine Learning Engineer.',
  description:
    "I've worn many hats in my career. These days, I'm a machine learning engineer, software engineer, and electrical engineer.",
  resume: 'https://1drv.ms/b/s!AqnlclWCzWwap1yECOm4lOTHcuBh?e=Sc6BWC',
  social: {
    linkedin: 'https://linkedin.com/in/basem-a-saleh',
    github: 'https://github.com/mreagles524',
  },
}

const projects = [
  // projects can be added an removed
  // if there are no projects, Projects section won't show up
  {
    name: 'Dead By Daylight Killer AI (WIP)',
    description:
      "An Object detection and tracking model for a killer in Dead by Daylight. This repo's goal is stand up an AI that will hunt, chase, kill, and hook survivors that are identified while navigating between generators without any human input.",
    stack: ['Python', 'PyTorch', 'RoboFlow'],
    sourceCode: 'https://github.com/mreagles524/DBD-Killer-AI',
    livePreview: 'https://universe.roboflow.com/deadbydaylightkillerai/killer_ai_object_detection/model/3',
  },
  {
    name: 'Deadlift Form Checker (WIP)',
    description:
      'The model will check, based on given video input, as to whether or not the current user has proper form for deadlifts. A side profile is required in order to properly perform inference on.',
    stack: ['SASS', 'TypeScript', 'React'],
    sourceCode: 'https://github.com/mreagles524/Gym-Form-Checker',
    livePreview: 'https://github.com/mreagles524/Gym-Form-Checker',
  },
]

const skills = [
  // skills can be added or removed
  // if there are no skills, Skills section won't show up
  'Python',
  'PyTorch',
  'TensorFlow',
  'Scikit Learn',
  'AWS S3',
  'Docker',
  'KubeFlow',
  'RoboFlow',
  'Software Defined Radios',
  'Git',
  'CI/CD',
  'MATLAB'
]

const contact = {
  // email is optional - if left empty Contact section won't show up
  email: 'bsaleh524@gmail.com',
}

export { header, about, projects, skills, contact }
