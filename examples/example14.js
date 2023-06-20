var language = {
        log: [],
        set current(name) {
          this.log.push(name);
        },
        get current() {
          return this.log;
        },
};
language.current = "EN"; //1 //may not be captured in SCG
language.current; //1 //may not be captured in SCG