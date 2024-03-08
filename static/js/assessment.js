document.addEventListener("alpine:init", () => {
  Alpine.data("SkillsDevelopmentCommitteeTookkitAsssment", () => {
    return {
      start_quiz_Assessment: false,
      start_game_Assessment: false,
      start_wordCross_Assessment: false,
      open_home_assessment:true,
      back_to_home:false,

      openHome(currentSection) {
        this.start_quiz_Assessment = false;
        this.start_game_Assessment = false;
        this.start_wordCross_Assessment = false;
        this.open_home_assessment=true;
        this.back_to_home=false;
        if (currentSection == "start_quiz_Assessment") {
          this.start_quiz_Assessment = true;
          this.start_game_Assessment = false;
          this.start_wordCross_Assessment = false;
          this.open_home_assessment=false;
          this.back_to_home=false;
        } else if (currentSection == "start_game_Assessment") {
          this.start_quiz_Assessment = false;
          this.start_game_Assessment = true;
          this.start_wordCross_Assessment = false;
          this.open_home_assessment=false;
          this.back_to_home=false;
        } else if (currentSection == "start_wordCross_Assessment") {
          this.start_quiz_Assessment = false;
          this.start_game_Assessment = false;
          this.start_wordCross_Assessment = true;
          this.open_home_assessment=false;
          this.back_to_home=false;
        }
        else if (currentSection == "back_to_home") {
            this.start_quiz_Assessment = false;
            this.start_game_Assessment = false;
            this.start_wordCross_Assessment = true;
            this.open_home_assessment=true;
          }
      },

      init() {
        //load the save user info when page reloads
        this.loadProgress();
      },
    };
  });
});
