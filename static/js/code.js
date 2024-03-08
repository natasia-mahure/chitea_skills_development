document.addEventListener("alpine:init", () => {
  Alpine.data("SkillsDevelopmentCommitteeTookkit", () => {
    return {

      start_quiz:false,
      start_game:false,
      quiz_and_game_home:true,
      skills_quiz_section_1:false,
      skills_quiz_section_2:false,
      play_game_riddle:false,
      play_game_word:false,
      play_game_guess:false,
      open_word_guess_game:false,

      


      
   

      openHome(currentSection) {
        this.start_quiz = false;
        this.start_game= false;
        this.quiz_and_game_home=true;
        this.skills_quiz_section_1=false;
        this.skills_quiz_section_2=false;
        this.play_game_riddle=false;
        this.play_game_word=false;
        this.play_game_guess=false;
       
        
       

        if (currentSection == "start_quiz") {
          this.start_quiz = true;
          this.start_game= false;
          this.quiz_and_game_home =false;
          this.skills_quiz_section_1=false;
          this.skills_quiz_section_2=false;
          this.play_game_riddle=false;
          this.play_game_word=false;
          this.play_game_guess=false;
         
         
        } else if (currentSection == "start_game") {
          this.start_quiz = false;
          this.start_game= true;
          this.quiz_and_game_home =false;
          this.skills_quiz_section_1=false;
          this.skills_quiz_section_2=false;
          this.play_game_riddle=false;
          this.play_game_word=false;
          this.play_game_guess=false;
        
        
        } else if (currentSection == "skills_quiz_section_1") {
          this.start_quiz = false;
          this.start_game= false;
          this.quiz_and_game_home =false;
          this.skills_quiz_section_1=true;
          this.skills_quiz_section_2=false;
          this.play_game_riddle=false;
          this.play_game_word=false;
          this.play_game_guess=false;
          
         
        }else if (currentSection == "skills_quiz_section_2") {
          this.start_quiz = false;
          this.start_game= false;
          this.quiz_and_game_home =false;
          this.skills_quiz_section_1=false;
          this.skills_quiz_section_2=true;
          this.play_game_riddle=false;
          this.play_game_word=false;
          this.play_game_guess=false;
          
         
        }else if (currentSection == "play_game_riddle") {
          this.start_quiz = false;
          this.start_game= false;
          this.quiz_and_game_home =false;
          this.skills_quiz_section_1=false;
          this.skills_quiz_section_2=false;
          this.play_game_riddle=true;
          this.play_game_word=false;
          this.play_game_guess=false;
          
         
        } else if (currentSection == "play_game_word") {
          this.start_quiz = false;
          this.start_game= false;
          this.quiz_and_game_home =false;
          this.skills_quiz_section_1=false;
          this.skills_quiz_section_2=false;
          this.play_game_riddle=false;
          this.play_game_word=true;
          this.play_game_guess=false;
          
         
        } else if (currentSection == "play_game_guess") {
          this.start_quiz = false;
          this.start_game= false;
          this.quiz_and_game_home =false;
          this.skills_quiz_section_1=false;
          this.skills_quiz_section_2=false;
          this.play_game_riddle=false;
          this.play_game_word=false;
          this.play_game_guess=true;
          
         
        }
        

      },

     

      init() {
        //load the save user info when page reloads
        this.loadProgress();
      },

  
 
    };
  });
});
