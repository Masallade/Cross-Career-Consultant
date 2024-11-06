import ImmigrationModel from '../domain/ImmigrationModel.js';



const ukImmi= new ImmigrationModel(

    //name 
    "United Kingdom",
    //detail 
    "UK Visas and Immigration is a division of the Home Office responsible for the United Kingdom's visa system. It was formed in 2013 from the section of the UK Border Agency that had administered the visa system.",
    //path
    "/immigration/uk",
    //ageLimit
    65,
    //para
    `Australia is the most sought-after place for immigration purposes. Several people apply for Australian immigration every day.
     It has a history of successful immigration stories since 1945. Australia is a country rich in resources. There are several opportunities 
     for people to move there. Migration to Australia has been successful for many people around the globe. It offers excellent scope for a better lifestyle. It is due to the country’s grand economy 
     and the people’s dandy lifestyle. Despite rich economic development and social growth resources, Australia needs immigrants for a sustainable economy. Hence, Australia invites immigrants from other 
     countries to live and work there. They build opportunities to let people from other countries benefit from the vastly available resources. In return, the Australian
      government gets an improved economy. Australian immigration provides you with remarkable opportunities to study and work resulting in improved standards of living.
       Australia Skilled Immigration enables one to pursue a career in their most handy skills. At Immigration Experts, we assist you in moving to Australia. We only promote legal ways of immigration through
        the Department of Home Affairs. From federal to regional immigration to Australia, we can help you with everything. In this blog, we will guide you on how to move to Australia using a legal pathway.Australia is the most sought-after 
        place for immigration purposes. Several people apply for Australian immigration every day. It has a history of successful immigration stories since 1945. Australia is a 
        country rich in resources.<br> There are several opportunities for people to move there. Migration to Australia has been successful for 
        many people around the globe. It offers excellent scope for a better lifestyle. It is due to the country’s grand economy and the people’s dandy lifestyle. Despite rich 
        economic development and social growth resources, Australia needs immigrants for a sustainable economy. Hence, Australia invites immigrants from other countries to live and work there. They build opportunities to let people from othe
        r countries benefit from the vastly availab
        le resources. In return, the Australian government gets an improved economy. Australian immigration provides you with remarkable opportunities to study and work resulting in improved standards of living. Australia Skilled Immigration enables one to pursue a career in their most handy skills. At Immigration Experts, we assist you in moving to Australia. We only promote legal ways of immigration through the Department of Home Affairs. From federal to regional immigration to Australia, we can help you with everything. In this blog, we will guide you on how to move to Australia using a legal pathway.Australia is the most sought-after place for immigration purposes. Several people apply for Australian immigration every day. It has a history of successful immigration stories since 1945. Australia is a country rich in resources. There are several opportunities for people to move there. Migration to Australia has been successful for many people around the globe. It offers excellent scope for a better lifestyle. It is due to the country’s grand economy and the people’s dandy lifestyle. Despite rich economic development and social growth resources, Australia needs immigrants for a sustainable economy. Hence, Australia invites immigrants from other countries t
        o live and work there. They build opportunities to let people from other countries benefit from the vastly available resources. In return, the Australian government gets an improved economy. Australian immigration provides you with remarkable opportunities to study and wo
        rk resulting in improved standards of living. Australia Skilled Immigration enables one to pursue a career in their most handy skills. At Immigration Experts, we assist you in moving to Australia. We only promote legal ways of immigration through the Department of Home Affairs. From federal to re
        gional immigration to Australia, we can help you with everything. In this blog
        , we will guide you on how to move to Australia using a legal pathway`,
    // eligiblePeople    
    ['Doctor','Engineer','Student','Nurses','Lawyers','Business Man'],
    //immiSteps
    [
    {
        'Step': 'Document Assessment',
        'timeline':'3 weeks'
      },
      {
        'Step': 'Document Verification',
        'timeline':'2 weeks'
      },
      {
        'Step': 'Application Submission',
        'timeline':'1 weeks'
      },
      {
        'Step': 'Visa Processing and Interview',
        'timeline':'4-8 weeks'
      },
      {
        'Step': 'Post-Visa Guidance',
        'timeline':'1-2 weeks'
      },

    ]
);


const ausImmi= new ImmigrationModel(


    //name 
    "Australia",
    //detail 
    "The Department of Immigration and Border Protection was a department of the Government of Australia that was responsible for immigration, citizenship and border control. It has now been subsumed into the Department of Home Affairs, which combines its responsibilities with a number of other portfolios",
    //path
    "/immigration/aus",
    //ageLimit
    45,
    //para
     `Australia is the most sought-after place for immigration purposes. Several people apply for Australian immigration every day.
     It has a history of successful immigration stories since 1945. Australia is a country rich in resources. There are several opportunities 
     for people to move there. Migration to Australia has been successful for many people around the globe. It offers excellent scope for a better lifestyle. It is due to the country’s grand economy 
     and the people’s dandy lifestyle. Despite rich economic development and social growth resources, Australia needs immigrants for a sustainable economy. Hence, Australia invites immigrants from other 
     countries to live and work there. They build opportunities to let people from other countries benefit from the vastly available resources. In return, the Australian
     government gets an improved economy. Australian immigration provides you with remarkable opportunities to study and work resulting in improved standards of living.
       Australia Skilled Immigration enables one to pursue a career in their most handy skills. At Immigration Experts, we assist you in moving to Australia. We only promote legal ways of immigration through
        the Department of Home Affairs. From federal to regional immigration to Australia, we can help you with everything. In this blog, we will guide you on how to move to Australia using a legal pathway.Australia is the most sought-after 
        place for immigration purposes. Several people apply for Australian immigration every day. It has a history of successful immigration stories since 1945. Australia is a 
        country rich in resources.<br> There are several opportunities for people to move there. Migration to Australia has been successful for 
        many people around the globe. It offers excellent scope for a better lifestyle. It is due to the country’s grand economy and the people’s dandy lifestyle. Despite rich 
        economic development and social growth resources, Australia needs immigrants for a sustainable economy. Hence, Australia invites immigrants from other countries to live and work there. They build opportunities to let people from othe
        r countries benefit from the vastly availab
        le resources. In return, the Australian government gets an improved economy. Australian immigration provides you with remarkable opportunities to study and work resulting in improved standards of living. Australia Skilled Immigration enables one to pursue a career in their most handy skills. At Immigration Experts, we assist you in moving to Australia. We only promote legal ways of immigration through the Department of Home Affairs. From federal to regional immigration to Australia, we can help you with everything. In this blog, we will guide you on how to move to Australia using a legal pathway.Australia is the most sought-after place for immigration purposes. Several people apply for Australian immigration every day. It has a history of successful immigration stories since 1945. Australia is a country rich in resources. There are several opportunities for people to move there. Migration to Australia has been successful for many people around the globe. It offers excellent scope for a better lifestyle. It is due to the country’s grand economy and the people’s dandy lifestyle. Despite rich economic development and social growth resources, Australia needs immigrants for a sustainable economy. Hence, Australia invites immigrants from other countries t
        o live and work there. They build opportunities to let people from other countries benefit from the vastly available resources. In return, the Australian government gets an improved economy. Australian immigration provides you with remarkable opportunities to study and wo
        rk resulting in improved standards of living. Australia Skilled Immigration enables one to pursue a career in their most handy skills. At Immigration Experts, we assist you in moving to Australia. We only promote legal ways of immigration through the Department of Home Affairs. From federal to re
        gional immigration to Australia, we can help you with everything. In this blog
        , we will guide you on how to move to Australia using a legal pathway`,

    //eligiblePeople  
    ['Doctor','Engineer','Nurses','Lawyers','Business Man'],
    // immiSteps
    [
    {
        'Step': 'Eligibility Assessment',
        'timeline':'1-3 weeks'
      },
      {
        'Step': 'Skills Assessment',
        'timeline':'4-12 weeks'
      },
      {
        'Step': 'Expression of Interest (EOI)',
        'timeline':'2-6 weeks'
      },
      {
        'Step': 'Visa Processing and Interview',
        'timeline':'4-8 weeks'
      },
      {
        'Step': 'Post-Visa Guidance',
        'timeline':'1-2 weeks'
      },

    ]
);



const canImmi= new ImmigrationModel(
    //name
    "Canada",
    //details
   "Immigration, Refugees and Citizenship Canada is the department of the Government of Canada with responsibility for matters dealing with immigration to Canada, refugees, and Canadian citizenship. The department was established in 1994 following a reorganization.",
    //path
    "/immigration/can",
    //age
    70,
    //para
`Canada is the most sought-after place for immigration purposes. Several people apply for Australian immigration every day.
     It has a history of successful immigration stories since 1945. Australia is a country rich in resources. There are several opportunities 
     for people to move there. Migration to Australia has been successful for many people around the globe. It offers excellent scope for a better lifestyle. It is due to the country’s grand economy 
     and the people’s dandy lifestyle. Despite rich economic development and social growth resources, Australia needs immigrants for a sustainable economy. Hence, Australia invites immigrants from other 
     countries to live and work there. They build opportunities to let people from other countries benefit from the vastly available resources. In return, the Australian
      government gets an improved economy. Australian immigration provides you with remarkable opportunities to study and work resulting in improved standards of living.
       Australia Skilled Immigration enables one to pursue a career in their most handy skills. At Immigration Experts, we assist you in moving to Australia. We only promote legal ways of immigration through
        the Department of Home Affairs. From federal to regional immigration to Australia, we can help you with everything. In this blog, we will guide you on how to move to Australia using a legal pathway.Australia is the most sought-after 
        place for immigration purposes. Several people apply for Australian immigration every day. It has a history of successful immigration stories since 1945. Australia is a 
        country rich in resources.<br> There are several opportunities for people to move there. Migration to Australia has been successful for 
        many people around the globe. It offers excellent scope for a better lifestyle. It is due to the country’s grand economy and the people’s dandy lifestyle. Despite rich 
        economic development and social growth resources, Australia needs immigrants for a sustainable economy. Hence, Australia invites immigrants from other countries to live and work there. They build opportunities to let people from othe
        r countries benefit from the vastly availab
        le resources. In return, the Australian government gets an improved economy. Australian immigration provides you with remarkable opportunities to study and work resulting in improved standards of living. Australia Skilled Immigration enables one to pursue a career in their most handy skills. At Immigration Experts, we assist you in moving to Australia. We only promote legal ways of immigration through the Department of Home Affairs. From federal to regional immigration to Australia, we can help you with everything. In this blog, we will guide you on how to move to Australia using a legal pathway.Australia is the most sought-after place for immigration purposes. Several people apply for Australian immigration every day. It has a history of successful immigration stories since 1945. Australia is a country rich in resources. There are several opportunities for people to move there. Migration to Australia has been successful for many people around the globe. It offers excellent scope for a better lifestyle. It is due to the country’s grand economy and the people’s dandy lifestyle. Despite rich economic development and social growth resources, Australia needs immigrants for a sustainable economy. Hence, Australia invites immigrants from other countries t
        o live and work there. They build opportunities to let people from other countries benefit from the vastly available resources. In return, the Australian government gets an improved economy. Australian immigration provides you with remarkable opportunities to study and wo
        rk resulting in improved standards of living. Australia Skilled Immigration enables one to pursue a career in their most handy skills. At Immigration Experts, we assist you in moving to Australia. We only promote legal ways of immigration through the Department of Home Affairs. From federal to re
        gional immigration to Australia, we can help you with everything. In this blog
        , we will guide you on how to move to Australia using a legal pathway`,

    //eligiblePeople
    ['Doctor','Engineer','Student','Nurses','Lawyers','Business Man'],
    //immiSteps
    [
      {
        'Step': 'Document Assessment',
        'timeline':'1-3 weeks'
      },
      {
        'Step': 'Document Verification',
        'timeline':'1-2 weeks'
      },
      {
        'Step': 'Application File',
        'timeline':'1-3 weeks'
      },
      {
        'Step': 'Visa Processing and Interview',
        'timeline':'4-8 weeks'
      },
      {
        'Step': 'Post-Visa Guidance',
        'timeline':'1-2 weeks'
      },

    ]
);



const schImmi= new ImmigrationModel(
    //name
    "Schengen",
    //details
    'The Immigration and Checkpoints Authority is a law enforcement agency within the Ministry of Home Affairs, the border control agency responsible for frontline border control operations at air, sea and rail ports in Singapore. Wikipedia',
    //path
     '/immigration/sch',
    //ageLimit
    50,
    //para
`Australia is the most sought-after place for immigration purposes. Several people apply for Australian immigration every day.
     It has a history of successful immigration stories since 1945. Australia is a country rich in resources. There are several opportunities 
     for people to move there. Migration to Australia has been successful for many people around the globe. It offers excellent scope for a better lifestyle. It is due to the country’s grand economy 
     and the people’s dandy lifestyle. Despite rich economic development and social growth resources, Australia needs immigrants for a sustainable economy. Hence, Australia invites immigrants from other 
     countries to live and work there. They build opportunities to let people from other countries benefit from the vastly available resources. In return, the Australian
      government gets an improved economy. Australian immigration provides you with remarkable opportunities to study and work resulting in improved standards of living.
       Australia Skilled Immigration enables one to pursue a career in their most handy skills. At Immigration Experts, we assist you in moving to Australia. We only promote legal ways of immigration through
        the Department of Home Affairs. From federal to regional immigration to Australia, we can help you with everything. In this blog, we will guide you on how to move to Australia using a legal pathway.Australia is the most sought-after 
        place for immigration purposes. Several people apply for Australian immigration every day. It has a history of successful immigration stories since 1945. Australia is a 
        country rich in resources.<br> There are several opportunities for people to move there. Migration to Australia has been successful for 
        many people around the globe. It offers excellent scope for a better lifestyle. It is due to the country’s grand economy and the people’s dandy lifestyle. Despite rich 
        economic development and social growth resources, Australia needs immigrants for a sustainable economy. Hence, Australia invites immigrants from other countries to live and work there. They build opportunities to let people from othe
        r countries benefit from the vastly availab
        le resources. In return, the Australian government gets an improved economy. Australian immigration provides you with remarkable opportunities to study and work resulting in improved standards of living. Australia Skilled Immigration enables one to pursue a career in their most handy skills. At Immigration Experts, we assist you in moving to Australia. We only promote legal ways of immigration through the Department of Home Affairs. From federal to regional immigration to Australia, we can help you with everything. In this blog, we will guide you on how to move to Australia using a legal pathway.Australia is the most sought-after place for immigration purposes. Several people apply for Australian immigration every day. It has a history of successful immigration stories since 1945. Australia is a country rich in resources. There are several opportunities for people to move there. Migration to Australia has been successful for many people around the globe. It offers excellent scope for a better lifestyle. It is due to the country’s grand economy and the people’s dandy lifestyle. Despite rich economic development and social growth resources, Australia needs immigrants for a sustainable economy. Hence, Australia invites immigrants from other countries t
        o live and work there. They build opportunities to let people from other countries benefit from the vastly available resources. In return, the Australian government gets an improved economy. Australian immigration provides you with remarkable opportunities to study and wo
        rk resulting in improved standards of living. Australia Skilled Immigration enables one to pursue a career in their most handy skills. At Immigration Experts, we assist you in moving to Australia. We only promote legal ways of immigration through the Department of Home Affairs. From federal to re
        gional immigration to Australia, we can help you with everything. In this blog
        , we will guide you on how to move to Australia using a legal pathway`,

      //eligible People  
    ['Doctor','Engineer','Student','Nurses','Lawyers','Business Man'],
      //immiSteps
    [
    {
        'Step': 'Document Assessment',
        'timeline':'3 weeks'
      },
      {
        'Step': 'Document Verification',
        'timeline':'2 weeks'
      },
      {
        'Step': 'Application Submission',
        'timeline':'1 weeks'
      },
      {
        'Step': 'Visa Processing and Interview',
        'timeline':'4-8 weeks'
      },
      {
        'Step': 'Post-Visa Guidance',
        'timeline':'1-2 weeks'
      },

    ]
);


export {ukImmi,canImmi,ausImmi,schImmi}
