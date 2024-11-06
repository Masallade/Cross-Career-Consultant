class ImmiSteps{
    constructor(steps){
        this.steps=steps;
    }
}

class ImmigrationModel{
    constructor(name,detail,path,ageLimit,para,eligiblePeople,immiSteps){
        this.name=name;
        this.detail=detail;
        this.path=path
        this.para=para;
        this.ageLimit=ageLimit;
        this.eligiblePeople=eligiblePeople;
        this.immiSteps=new ImmiSteps(immiSteps);
    }
}

export default ImmigrationModel;