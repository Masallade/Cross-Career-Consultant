import  WorkPermitModel  from '../domain/WorkPermitModel.js'



// eligibily of all the countries 
const ukEligibilty={minQualification:"InterMediate", profession:['Doctor','Engineer','Nurses','Business Man','IT','Student'],minExperience:'Freasher/1 year',language:'English'}
const ausEligibilty={minQualification:"Bachulor", profession:['Doctor','Engineer','Nurses','Business Man','IT','Student'],minExperience:'3 year',language:'English'}
const canEligibilty={minQualification:"Master", profession:['Doctor','Engineer','Nurses','Business Man','IT','Student'],minExperience:'Freasher/1 year',language:'English'}
const schEligibilty={minQualification:"Matriculation", profession:['Doctor','Engineer','Nurses','Driver','Business Man','IT','Student'],minExperience:'Freasher/1 year',language:'depending on the country'}

//workPermitinfo of all the countries

const ukWorkPermitInfo=[
    {name:"Skilled Worker Visa",desc:"For individuals with a job offer from a UK employer in a qualifying role."},
    {name:"Health and Care Worker Vis",desc:"For professionals in the healthcare sector."}
]

const ausWorkPermitInfo=[
    {name:"Temporary Skill Shortage Visa",desc:"For skilled workers who fill positions that cannot be filled by local labor."},
    {name:"Skilled Employer Sponsored Regional (Provisional)",desc:"For regional employment opportunities."}
]

const canWorkPermitInfo=[
    {name:"Employer-Specific Work Permit",desc:"Allows you to work for a specific employer under set conditions"},
    {name:"Open Work Permit",desc:"Flexible work permit not tied to a single employer."}
]

const schWorkPermitInfo=[
    {name:"Schengen Long-Stay Visa",desc:" Work in any Schengen country for a long-term job."},
    {name:"National Work Visas",desc:"Country-specific work permits (e.g., Germany’s National D-Visa)."}
]


//documentation required is same for every country
const documentRequired=[
    "A valid passport",
    "Job offer/employment contract",
    "Proof of qualifications and work experience",
    "Medical or police clearance (if required)",
    "Sponsorship certificate (if required)",
    "Language proficiency proof (if applicable)"]

const applicationProcess=[
    "consultation",
    "documentPreparation",
    "applicationSubmission",
    "approvalAndNextSteps",]

const ukWorkPermit=new WorkPermitModel(
    //name
    'UK',
    //detail
    "The Department of Immigration and Border Protection was a department of the Government of Australia that was responsible for immigration, citizenship and border control. It has now been subsumed into the Department of Home Affairs, which combines its responsibilities with a number of other portfolios",
    //path
    '/workpermit/uk',
    //overall description
    'Work in the UK and access exciting career opportunities in one of the world’s leading economies. Our services ensure that your work permit application process is handled professionally and efficiently Work in the Canada and access exciting career opportunities in one of the world’s leading economies. Our services ensure that your work permit application process is handled professionally and efficiently',
    //processingTime
    "3-8 weeks",
    // eligibility
     ukEligibilty,
    //workPermitInfo
    ukWorkPermitInfo,
    //documentationRequired
    documentRequired,
    //applicationProcess
    applicationProcess
   
);


const ausWorkPermit=new WorkPermitModel(
    //name
    'Australia',
    //detail
    "The Department of Immigration and Border Protection was a department of the Government of Australia that was responsible for immigration, citizenship and border control. It has now been subsumed into the Department of Home Affairs, which combines its responsibilities with a number of other portfolios",
    //path
    '/workpermit/aus',
    //overall description
    'Work in the Australia and access exciting career opportunities in one of the world’s leading economies. Our services ensure that your work permit application process is handled professionally and efficientlWork in the Canada and access exciting career opportunities in one of the world’s leading economies. Our services ensure that your work permit application process is handled professionally and efficientlyy',
    //processingTime
    "2-4 months",
    // eligibility
    ausEligibilty,
    //workPermitInfo
    ausWorkPermitInfo,
    //documentationRequired
    documentRequired,
    //applicationProcess
    applicationProcess
   
);



const canWorkPermit=new WorkPermitModel(
    //name
    'Canada',
    //detail
    "The Department of Immigration and Border Protection was a department of the Government of Australia that was responsible for immigration, citizenship and border control. It has now been subsumed into the Department of Home Affairs, which combines its responsibilities with a number of other portfolios",
    //path
    '/workpermit/can',
    //overall description
    'Work in the Canada and access exciting career opportunities in one of the world’s leading economies. Our services ensure that your work permit application process is handled professionally and efficiently Work in the Canada and access exciting career opportunities in one of the world’s leading economies. Our services ensure that your work permit application process is handled professionally and efficiently',
    //processingTime
    "2-3 months",
    // eligibility
    canEligibilty,
    //workPermitInfo
    canWorkPermitInfo,
    //documentationRequired
    documentRequired,
    //applicationProcess
    applicationProcess
   
);


const schWorkPermit=new WorkPermitModel(
    //name
    'Schengen',
    //detail
    "The Department of Immigration and Border Protection was a department of the Government of Australia that was responsible for immigration, citizenship and border control. It has now been subsumed into the Department of Home Affairs, which combines its responsibilities with a number of other portfolios",
    //path
    '/workpermit/sch',
    //overall description
    'Work in the Schengen and access exciting career opportunities in one of the world’s leading economies. Our services ensure that your work permit application process is handled professionally and Work in the Canada and access exciting career opportunities in one of the world’s leading economies. Our services ensure that your work permit application process is handled professionally and efficiently efficiently',
    //processingTime
    "4-12 weeks (depending on the country)",
    // eligibility
    schEligibilty,
    //workPermitInfo
    schWorkPermitInfo,
    //documentationRequired
    documentRequired,
    //applicationProcess
    applicationProcess
   
);


export {canWorkPermit,ukWorkPermit,ausWorkPermit,schWorkPermit}

