class TeamMember {
  name;
  location;
  constructor(name, location) {
    this.name = name;
    this.location = location;
  }
  providerFeedback() {
    console.log(`${this.name} thank you for your feedback`);
  }
}

class Instructor extends TeamMember {
  designation = "Web Course Instructor";
  team = "Web Team";
  constructor(name, location) {
    super(name, location);
  }
  startSupportSession(item) {
    console.log(`start the support session at ${time}`);
  }
  createQuiz(module) {
    console.log(`please create quiz for module ${module}`);
  }
}

class Developer extends TeamMember {
  designation = "Web Course Instructor";
  team = "Web Team";
  tech;
  constructor(name, location, tech) {
    super(name, location);
    this.tech = tech;
  }
  developFeature(feature) {
    console.log(`Please develop the ${feature}`);
  }
  release(version) {
    console.log(`please release the version ${module}`);
  }
}

class JobPlacement extends TeamMember {
  designation = "Job Placement Commandos";
  team = "Job Placement";
  region;
  constructor(name, location, region) {
    super(name, location);
    this.region = region;
  }
  providerResume(feature) {
    console.log(`Please develop the ${feature}`);
  }
  providerStudent(version) {
    console.log(`please release the version ${module}`);
  }
}

const alia = new Developer("Alia bhatt", "Dhaka", "React");
console.log(alia);
alia.providerFeedback();

const bipasha = new JobPlacement("bipasha", "kolkata", "India");
console.log(bipasha);
