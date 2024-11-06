class Content{
    constructor(heading,data){
        this.heading=heading;
        this.data=data
    }
}

class ProfessionalModel{
    constructor(list){
        this.content=list.map((list)=>new Content(list.heading,list.data))
    }
}

export default ProfessionalModel;