import ProfessionalModel from "../domain/ProfessionalsModel";

const doctorContent=[
    {heading:"International Medical Licensure", data:`We help doctors fulfill licensure requirements abroad, ensuring they meet all necessary medical standards to practice in foreign healthcare systems.`},
    {heading:"Navigating Credentialing ", data:`From degree verification to certification, our services guide you through each step, enabling a seamless transition into international healthcare roles.`},
    {heading:"Visa Solutions for Medical Professionals", data:`We handle complex visa processes specific to healthcare professionals, allowing you to focus on your career without the stress of immigration paperwork.`},
    {heading:"Opportunities in Global Healthcare", data:`Gain access to diverse healthcare environments worldwide, from high-tech hospitals to specialized clinics, for unmatched career growth.`},
    {heading:"Expanding Expertise", data:`Working abroad enhances medical expertise, offering you exposure to different treatment methods, patient demographics, and healthcare challenges.`},
    {heading:"Placement in Top Hospitals", data:`With our network of top hospitals, you can find a position that aligns with your specialization and professional goals.`},
    {heading:"Support for Family Immigration", data:`Relocating with family? We assist with family visas, schooling options, and healthcare to make the move smooth and stress-free.`},
    {heading:"Language Proficiency", data:`Language is key in healthcare; our programs help medical professionals build necessary language skills and cultural awareness for effective patient care.`},
]

const nurseContent = [
    {heading: "Certification Requirements and Support", data: `We ensure your nursing certifications are recognized, helping you meet international requirements and enhancing your employability.`},
    {heading: "High-Demand Roles in Global Healthcare", data: `Nurses are highly sought-after worldwide. We connect you with high-demand roles in various healthcare settings, ensuring a fulfilling career path.`},
    {heading: "Work Visa Processing for Nurses", data: `Our team takes care of the visa processes, so you can focus on your career in nursing without immigration delays or hurdles.`},
    {heading: "Cultural Adaptation for Nursing Professionals", data: `Working in new environments can be challenging; our cultural programs prepare you for local practices and expectations in healthcare.`},
    {heading: "Language Proficiency for Caregiving", data: `We provide language support to help nurses communicate effectively, an essential skill in caregiving roles abroad.`},
    {heading: "Credential Evaluation and Recognition", data: `Ensuring your credentials are recognized is our priority, allowing you to work at your desired level in healthcare settings abroad.`},
    {heading: "Placement in Leading Medical Facilities", data: `Our partnerships with top hospitals and clinics mean access to excellent placement options aligned with your expertise.`},
    {heading: "Long-term Career Growth and Development", data: `We focus on your career development, offering guidance and resources for long-term success as a healthcare professional abroad.`},
];


const lawyerContent = [
    {heading: "International Legal Practice Requirements", data: `We help lawyers understand the requirements to practice law internationally, from licensure to regulatory compliance.`},
    {heading: "Visa Services for Legal Professionals", data: `Handling the visa process for lawyers, our team ensures that you have the right permits to practice or consult in foreign jurisdictions.`},
    {heading: "Jurisdiction-Specific Licensing Guidance", data: `Each country has unique legal standards; we assist with acquiring jurisdiction-specific licenses and necessary certifications.`},
    {heading: "Opportunities for Cross-Border Practice", data: `Expand your legal expertise by working in multiple jurisdictions, gaining valuable experience in cross-border practice.`},
    {heading: "Expanding Legal Knowledge Internationally", data: `Working abroad broadens your legal perspective, exposing you to international laws, cultural norms, and diverse clientele.`},
    {heading: "Credential Conversion and Verification", data: `We handle the complex process of credential conversion, ensuring your qualifications are recognized internationally.`},
    {heading: "Networking in International Legal Circles", data: `Connect with global legal professionals through our network, gaining insights and opportunities in your specialized field.`},
    {heading: "Navigating Work Permits for Legal Careers", data: `Legal work abroad requires specific permits; we help you acquire these, enabling a smooth transition into international practice.`},
];


const engineerContent = [
    {heading: "Global Credential Recognition for Engineers", data: `We guide engineers in obtaining credential recognition abroad, helping validate qualifications and expand career opportunities.`},
    {heading: "Visa Solutions for Engineering Professions", data: `Our team provides visa support, ensuring engineers meet immigration requirements for working in international markets.`},
    {heading: "Cross-border Infrastructure Projects", data: `Gain access to infrastructure projects worldwide, enabling you to work on impactful projects in diverse geographic areas.`},
    {heading: "Licensing Assistance in New Jurisdictions", data: `For engineers, licensing varies by country; we assist with acquiring necessary local licenses for compliant and safe practice.`},
    {heading: "Career Opportunities in International Tech Hubs", data: `Engineering roles are in demand in tech hubs around the world, and we connect you with career openings that fit your specialization.`},
    {heading: "Professional Development and Certifications", data: `Stay competitive by completing internationally recognized certifications and professional development opportunities through our support.`},
    {heading: "Relocation Services for Engineers and Families", data: `We assist with all aspects of relocation, from housing to family visas, ensuring a smooth transition to your new work environment.`},
    {heading: "Navigating Engineering Standards Abroad", data: `Understand and comply with foreign engineering standards, ensuring your projects meet all safety and regulatory guidelines.`},
];


const businessContent = [
    {heading: "Investor Visa and Business Start-up Support", data: `We provide guidance on investor visas and business licenses to help entrepreneurs launch ventures in new markets abroad.`},
    {heading: "Setting Up International Enterprises", data: `From registration to tax regulations, we support business professionals in setting up enterprises globally.`},
    {heading: "Work Visa Solutions for Executives", data: `Executives seeking international roles benefit from our comprehensive visa solutions tailored to business professionals.`},
    {heading: "Networking in Global Business Hubs", data: `Our network helps you connect with influential business communities, expanding your professional reach internationally.`},
    {heading: "Understanding International Tax Regulations", data: `Tax requirements vary widely; our team helps you navigate international tax laws to ensure compliance and optimize profits.`},
    {heading: "Expanding Business to New Markets", data: `We offer insights and resources to enter new markets, ensuring a smooth setup and operational launch abroad.`},
    {heading: "Support for Relocating Business Teams", data: `For larger relocations, we provide team-based solutions for visas, accommodations, and seamless transitions.`},
    {heading: "Language and Cultural Adaptation", data: `Business success relies on cultural understanding; we offer language and cultural programs to help you succeed in diverse environments.`},
];


const paramedicContent = [
    {heading: "International Certification for Paramedics", data: `We assist paramedics in meeting international certification standards, enabling them to work in various healthcare settings abroad.`},
    {heading: "Visa Assistance for Emergency Medical Technicians", data: `Our team simplifies the visa application process for paramedics, focusing on requirements specific to emergency medical roles.`},
    {heading: "Placement in High-Need Healthcare Regions", data: `Paramedics are in high demand; we connect you with placements in high-need regions where your skills make a vital impact.`},
    {heading: "Language Proficiency and Emergency Protocols", data: `Communication in emergencies is critical; our language programs prepare you for effective response and patient interaction.`},
    {heading: "Work Permit Solutions for Paramedics", data: `We ensure that paramedics receive the correct permits to practice in their field, addressing all regulatory requirements.`},
    {heading: "Support for Credential Recognition", data: `Credential recognition is essential for effective patient care; we streamline this process for paramedics seeking international work.`},
    {heading: "Cultural Sensitivity Training for EMTs", data: `Working with patients from different cultures can present challenges; we offer training to help you adapt to diverse environments.`},
    {heading: "Family Immigration Support for Paramedic Staff", data: `For those relocating with family, we provide visa and housing assistance to make the transition easier.`},
];




const doctorObject =ProfessionalModel(doctorContent);
const nurseObject =ProfessionalModel(nurseContent);
const engineerObject =ProfessionalModel(engineerContent);
const lawyerObject =ProfessionalModel(lawyerContent);
const businessObject =ProfessionalModel(businessContent);
const paramedicObject =ProfessionalModel(paramedicContent);

export {doctorObject,nurseObject,engineerObject,lawyerObject,businessObject,paramedicObject}