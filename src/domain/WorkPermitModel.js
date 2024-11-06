class Eligibility{
    constructor(minQualification,profession, minExperience, language){
    this.minQualification=minQualification;
    this.profession=profession;
    this.minExperience=minExperience;
    this.language=language;
    }
}

class WorkMermitInfo{
    constructor(name,desc){
        this.name=name;
        this.desc=desc;
    }
}


class WorkPermitModel{
    constructor(name,detail,path,overallDescription,processingTime,eligibility,workPermitInfoList,documentRequired,applicationProcess){
        this.name=name;
        this.detail=detail;
        this.path=path;
        this.overallDescription=overallDescription;
        this.processingTime=processingTime;
        this.eligibility=new Eligibility(eligibility.minQualification,eligibility.profession,eligibility.minExperience,eligibility.language);
        this.workPermitInfo=workPermitInfoList.map((workPermitInfo)=>

            new WorkMermitInfo(workPermitInfo.name,workPermitInfo.desc)
        
        );
        this.documentRequired=documentRequired;
        this.applicationProcess=applicationProcess;

    }
}


export default WorkPermitModel
